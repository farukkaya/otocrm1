import professionTableMock from "./professionTableMock";
import MockUtils from "../mock.utils";

export default function mockProfessions(mock) {
  mock.onPost("api/professions").reply(({ data }) => {
    const { profession } = JSON.parse(data);
    const {
        name= "Yönetici",
        description= "",
        isActive= false, 
        createdDate= "2019-11-01T00:00:00+00:00",
        createdBy=1,
        updatedDate= null,
        updatedBy= null,
        deletedDate= null,
        deletedBy=null,
        guid=""
    } = profession;
  
    const id = generateProfessionId();
    const newProfession = {
      id,
      name,
      description,
      isActive,
      createdDate,
      createdBy,
      updatedDate,
      updatedBy,
      deletedDate,
      deletedBy,
      guid
  };
    professionTableMock.push(newProfession);
    return [200, { profession: newProfession }];
  });
  mock.onPost("api/professions/getall").reply(config => {
    
    var resp={
      entities:professionTableMock,
      totalCount:professionTableMock.length
    }
    return [200, resp];
  });

  mock.onPost("api/professions/find").reply(config => {
    const mockUtils = new MockUtils();
    const { queryParams } = JSON.parse(config.data);
    const filteredProfessions = mockUtils.baseFilter(professionTableMock, queryParams);
    return [200, filteredProfessions];
  });

  mock.onPost("api/professions/deleteProfessions").reply(config => {
    const { ids } = JSON.parse(config.data);
    ids.forEach(id => {
      const index = professionTableMock.findIndex(el => el.id === id);
      if (index > -1) {
        professionTableMock.splice(index, 1);
      }
    });
    return [200];
  });

  mock.onPost("api/professions/updateStatusForProfessions").reply(config => {
    const { ids, status } = JSON.parse(config.data);
    professionTableMock.forEach(el => {
      if (ids.findIndex(id => id === el.id) > -1) {
        el.status = status;
      }
    });
    return [200];
  });

  mock.onGet(/api\/professions\/\d+/).reply(config => {
    const id = config.url.match(/api\/professions\/(\d+)/)[1];
    const profession = professionTableMock.find(el => el.id === +id);
    if (!profession) {
      return [400];
    }

    return [200, profession];
  });

  mock.onPut(/api\/professions\/\d+/).reply(config => {
    const id = config.url.match(/api\/professions\/(\d+)/)[1];
    const { profession } = JSON.parse(config.data);
    const index = professionTableMock.findIndex(el => el.id === +id);
    if (!index) {
      return [400];
    }

    professionTableMock[index] = { ...profession };
    return [200];
  });

  mock.onDelete(/api\/professions\/\d+/).reply(config => {
    const id = config.url.match(/api\/professions\/(\d+)/)[1];
    const index = professionTableMock.findIndex(el => el.id === +id);
    professionTableMock.splice(index, 1);
    if (!index === -1) {
      return [400];
    }

    return [200];
  });
}

function generateProfessionId() {
  const ids = professionTableMock.map(el => el.id);
  const maxId = Math.max(...ids);
  return maxId + 1;
}