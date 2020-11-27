import townTableMock from "./townTableMock";
import MockUtils from "../mock.utils";

export default function mockTowns(mock) {
  mock.onPost("api/towns").reply(({ data }) => {
    const { town } = JSON.parse(data);
    const {
      townId = 0,
      name = "",
      code= 0,
      townName = "",
      isActive = false,
      createdDate= "",
    createdBy= 486,
    updatedDate= null,
    updatedBy= null,
    isDeleted= false,
    deletedDate= null,
    deletedBy= null,
    guid=""
    } = town;

    const id = generateTownId();
    const newTown = {
      id,
      townId,
      name,
      code,
      townName,
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
    townTableMock.push(newTown);
    return [200, { town: newTown }];
  });
  
  mock.onPost("api/towns/find").reply(config => {
    const mockUtils = new MockUtils();
    const { queryParams } = JSON.parse(config.data);
    const filteredTowns = mockUtils.baseFilter(townTableMock, queryParams);
    return [200, filteredTowns];
  });

  mock.onPost("api/towns/getall").reply(config => {
   var resp={
     entities:townTableMock,
     totalCount:townTableMock.length
   }
    return [200, resp];
  });
  mock.onPost("api/towns/getAllByCity").reply(config => {
    debugger
    const { cityId } = JSON.parse(config.data);
    var towns=townTableMock.filter(q=>q.cityId==cityId);
    var resp={
      entities:towns,
      totalCount:towns.length
    }
     return [200, resp];
   });
  mock.onPost("api/towns/deleteTowns").reply(config => {
    const { ids } = JSON.parse(config.data);
    ids.forEach(id => {
      const index = townTableMock.findIndex(el => el.id === id);
      if (index > -1) {
        townTableMock.splice(index, 1);
      }
    });
    return [200];
  });

  mock.onPost("api/towns/updateStatusForTowns").reply(config => {
    const { ids, status } = JSON.parse(config.data);
    townTableMock.forEach(el => {
      if (ids.findIndex(id => id === el.id) > -1) {
        el.status = status;
      }
    });
    return [200];
  });
  
  mock.onGet(/api\/towns\/\d+/).reply(config => {
    const id = config.url.match(/api\/towns\/(\d+)/)[1];
    const town = townTableMock.find(el => el.id === +id);
    if (!town) {
      return [400];
    }

    return [200, town];
  });

  mock.onPut(/api\/towns\/\d+/).reply(config => {
    const id = config.url.match(/api\/towns\/(\d+)/)[1];
    const { town } = JSON.parse(config.data);
    const index = townTableMock.findIndex(el => el.id === +id);
    if (!index) {
      return [400];
    }

    townTableMock[index] = { ...town };
    return [200];
  });

  mock.onDelete(/api\/towns\/\d+/).reply(config => {
    const id = config.url.match(/api\/towns\/(\d+)/)[1];
    const index = townTableMock.findIndex(el => el.id === +id);
    townTableMock.splice(index, 1);
    if (!index === -1) {
      return [400];
    }

    return [200];
  });
}

function generateTownId() {
  const ids = townTableMock.map(el => el.id);
  const maxId = Math.max(...ids);
  return maxId + 1;
}