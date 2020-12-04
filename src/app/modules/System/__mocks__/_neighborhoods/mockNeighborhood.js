import neighborhoodTableMock from "./neighborhoodTableMock";
import MockUtils from "../mock.utils";

export default function mockNeighborhoods(mock) {
  mock.onPost("api/neighborhoods").reply(({ data }) => {
    const { neighborhood } = JSON.parse(data);
    const {
      neighborhoodId = 0,
      name = "",
      code= 0,
      neighborhoodName = "",
      isActive = false,
      createdDate= "",
    createdBy= 486,
    updatedDate= null,
    updatedBy= null,
    isDeleted= false,
    deletedDate= null,
    deletedBy= null,
    guid=""
    } = neighborhood;

    const id = generateNeighborhoodId();
    const newNeighborhood = {
      id,
      neighborhoodId,
      name,
      code,
      neighborhoodName,
      isActive,
      createdDate,
      createdBy,
      updatedDate,
      updatedBy,
      isDeleted,
      deletedDate,
      deletedBy,
      guid
    };
    neighborhoodTableMock.push(newNeighborhood);
    return [200, { neighborhood: newNeighborhood }];
  });
  
  mock.onPost("api/neighborhoods/find").reply(config => {
    const mockUtils = new MockUtils();
    const { queryParams } = JSON.parse(config.data);
    const filteredNeighborhoods = mockUtils.baseFilter(neighborhoodTableMock, queryParams);
    return [200, filteredNeighborhoods];
  });

  mock.onPost("api/neighborhoods/getall").reply(config => {
   var resp={
     entities:neighborhoodTableMock,
     totalCount:neighborhoodTableMock.length
   }
    return [200, resp];
  });
  mock.onPost("api/neighborhoods/getAllByTown").reply(config => {
    const { townId } = JSON.parse(config.data);
    var neighborhoods=neighborhoodTableMock.filter(q=>q.townId==townId);
    var resp={
      entities:neighborhoods,
      totalCount:neighborhoods.length
    }
     return [200, resp];
   });
  mock.onPost("api/neighborhoods/deleteNeighborhoods").reply(config => {
    const { ids } = JSON.parse(config.data);
    ids.forEach(id => {
      const index = neighborhoodTableMock.findIndex(el => el.id === id);
      if (index > -1) {
        neighborhoodTableMock.splice(index, 1);
      }
    });
    return [200];
  });

  mock.onPost("api/neighborhoods/updateStatusForNeighborhoods").reply(config => {
    const { ids, status } = JSON.parse(config.data);
    neighborhoodTableMock.forEach(el => {
      if (ids.findIndex(id => id === el.id) > -1) {
        el.isActive = status;
      }
    });
    return [200];
  });
  
  mock.onGet(/api\/neighborhoods\/\d+/).reply(config => {
    const id = config.url.match(/api\/neighborhoods\/(\d+)/)[1];
    const neighborhood = neighborhoodTableMock.find(el => el.id === +id);
    if (!neighborhood) {
      return [400];
    }

    return [200, neighborhood];
  });

  mock.onPut(/api\/neighborhoods\/\d+/).reply(config => {
    const id = config.url.match(/api\/neighborhoods\/(\d+)/)[1];
    const { neighborhood } = JSON.parse(config.data);
    const index = neighborhoodTableMock.findIndex(el => el.id === +id);
    if (!index) {
      return [400];
    }

    neighborhoodTableMock[index] = { ...neighborhood };
    return [200];
  });

  mock.onDelete(/api\/neighborhoods\/\d+/).reply(config => {
    const id = config.url.match(/api\/neighborhoods\/(\d+)/)[1];
    const index = neighborhoodTableMock.findIndex(el => el.id === +id);
    neighborhoodTableMock.splice(index, 1);
    if (!index === -1) {
      return [400];
    }

    return [200];
  });
}

function generateNeighborhoodId() {
  const ids = neighborhoodTableMock.map(el => el.id);
  const maxId = Math.max(...ids);
  return maxId + 1;
}