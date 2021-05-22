import userTableMock from "./userTableMock";
import MockUtils from "../mock.utils";

export default function mockUser(mock) {
  
  mock.onPost("users").reply(({ data }) => {
    const { user } = JSON.parse(data);
    const {
      email = "farukkaya@otocrm.com",
      identityNo = "10447572022",
      firstname = "Faruk",
      lastName = "Kaya",
      username = "",
      professionId = null,
      workPhone = "",
      personalPhone = "",
      isActive = false,
      createdDate = "2019-11-01T00:00:00+00:00",
      createdBy = 1,
      updatedDate = null,
      updatedBy = null,
      deletedDate = null,
      deletedBy = null,
      guid = "",
      relationGuid = "",
      relationTable = ""
    } = user;

    const id = generateUserId();
    const newUser = {
      id,
      email,
      identityNo,
      firstname,
      lastName,
      username,
      professionId,
      workPhone,
      personalPhone,
      isActive,
      createdDate,
      createdBy,
      updatedDate,
      updatedBy,
      deletedDate,
      deletedBy,
      guid,
      relationGuid,
      relationTable
    };
    userTableMock.push(newUser);
    return [200, { user: newUser }];
  });

  mock.onPost("users/find").reply(config => {
    const mockUtils = new MockUtils();
    const { queryParams } = JSON.parse(config.data);
    const filteredUsers = mockUtils.baseFilter(userTableMock, queryParams);
    return [200, filteredUsers];
  });

  mock.onPost(/api\/users\/findByDealer\/\d+/).reply(config => {
    const urls = config.url.split("/");
    const id = urls[3];
    const mockUtils = new MockUtils();
    const { queryParams } = JSON.parse(config.data);
    const dealerUsers= userTableMock.filter(el => el.dealerId === +id);
    const filteredUsers = mockUtils.baseFilter(dealerUsers, queryParams);
    return [200, filteredUsers];
  });

  mock.onPost(/api\/users\/findByGallery\/\d+/).reply(config => {
    const urls = config.url.split("/");
    const id = urls[3];
    const mockUtils = new MockUtils();
    const { queryParams } = JSON.parse(config.data);
    const galleryUsers= userTableMock.filter(el => el.galleryId === +id);
    const filteredUsers = mockUtils.baseFilter(galleryUsers, queryParams);
    return [200, filteredUsers];
  });

  mock.onPost("users/deleteUsers").reply(config => {
    const { ids } = JSON.parse(config.data);
    ids.forEach(id => {
      const index = userTableMock.findIndex(el => el.id === id);
      if (index > -1) {
        userTableMock.splice(index, 1);
      }
    });
    return [200];
  });

  mock.onPost("users/updateStatusForUsers").reply(config => {
    const { ids, status } = JSON.parse(config.data);
    userTableMock.forEach(el => {
      if (ids.findIndex(id => id === el.id) > -1) {
        el.isActive = status;
      }
    });
    return [200];
  });

  mock.onGet(/api\/users\/\d+/).reply(config => {
    const id = config.url.match(/api\/users\/(\d+)/)[1];
    const user = userTableMock.find(el => el.id === +id);
    if (!user) {
      return [400];
    }

    return [200, user];
  });

  mock.onPut(/api\/users\/\d+/).reply(config => {
    const id = config.url.match(/api\/users\/(\d+)/)[1];
    const { user } = JSON.parse(config.data);
    const index = userTableMock.findIndex(el => el.id === +id);
    if (!index) {
      return [400];
    }

    userTableMock[index] = { ...user };
    return [200];
  });

  mock.onDelete(/api\/users\/\d+/).reply(config => {
    const id = config.url.match(/api\/users\/(\d+)/)[1];
    const index = userTableMock.findIndex(el => el.id === +id);
    userTableMock.splice(index, 1);
    if (!index === -1) {
      return [400];
    }

    return [200];
  });
}

function generateUserId() {
  const ids = userTableMock.map(el => el.id);
  const maxId = Math.max(...ids);
  return maxId + 1;
}