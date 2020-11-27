import dealerTableMock from "./dealerTableMock";
import userTableMock from "../users/userTableMock";
import MockUtils from "./../mock.utils";

export default function mockDealers(mock) {
  mock.onPost("api/dealers").reply(({ data }) => {
    const { dealer } = JSON.parse(data);
    const {
      name= "BZK OTOMOTİV",
      taxIdentityNo= "10447572022",
      taxOfficeId= 1,
      adminId= 1,
      
      isActive= false, 
      createdDate= "2019-11-01T00:00:00+00:00",
      createdBy=1,
      updatedDate= null,
      updatedBy= null,
      deletedDate= null,
      deletedBy=null,
      guid="",
  } = dealer;

  const id = generateDealerId();
  const newDealer = {
    id,
    name,
    taxIdentityNo,
    taxOfficeId,
    adminId,
    isActive,
    createdDate,
    createdBy,
    updatedDate,
    updatedBy,
    deletedDate,
    deletedBy,
    guid
  };
    dealerTableMock.push(newDealer);
    return [200, { dealer: newDealer }];
  });

  mock.onPost("api/dealers/find").reply(config => {
    const mockUtils = new MockUtils();
    const { queryParams } = JSON.parse(config.data);
    const filteredDealers = mockUtils.baseFilter(dealerTableMock, queryParams);
    return [200, filteredDealers];
  });


  mock.onPost("api/dealers/getusers").reply(config => {
    const { id } = JSON.parse(config.data);
    const filteredUsers = userTableMock.filter(q=>q.dealerId==id);

    var resp={
      entities:filteredUsers,
      totalCount:filteredUsers.length
    }
    return [200, resp];
  });
  mock.onPost("api/dealers/deleteDealers").reply(config => {
    const { ids } = JSON.parse(config.data);
    ids.forEach(id => {
      const index = dealerTableMock.findIndex(el => el.id === id);
      if (index > -1) {
        dealerTableMock.splice(index, 1);
      }
    });
    return [200];
  });

  mock.onPost("api/dealers/updateStatusForDealers").reply(config => {
    const { ids, status } = JSON.parse(config.data);
    dealerTableMock.forEach(el => {
      if (ids.findIndex(id => id === el.id) > -1) {
        el.status = status;
      }
    });
    return [200];
  });

  mock.onGet(/api\/dealers\/\d+/).reply(config => {
    const id = config.url.match(/api\/dealers\/(\d+)/)[1];
    const dealer = dealerTableMock.find(el => el.id === +id);
    if (!dealer) {
      return [400];
    }

    return [200, dealer];
  });

  mock.onPut(/api\/dealers\/\d+/).reply(config => {
    const id = config.url.match(/api\/dealers\/(\d+)/)[1];
    const { dealer } = JSON.parse(config.data);
    const index = dealerTableMock.findIndex(el => el.id === +id);
    if (!index) {
      return [400];
    }

    dealerTableMock[index] = { ...dealer };
    return [200];
  });

  mock.onDelete(/api\/dealers\/\d+/).reply(config => {
    const id = config.url.match(/api\/dealers\/(\d+)/)[1];
    const index = dealerTableMock.findIndex(el => el.id === +id);
    dealerTableMock.splice(index, 1);
    if (!index === -1) {
      return [400];
    }

    return [200];
  });
}

function generateDealerId() {
  const ids = dealerTableMock.map(el => el.id);
  const maxId = Math.max(...ids);
  return maxId + 1;
}