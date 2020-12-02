import addressTableMock from "./addressesTableMock";
import MockUtils from "../mock.utils";

export default function mockAddress(mock) {
  mock.onPost("api/addresses").reply(({ data }) => {
    const { address } = JSON.parse(data);
    const {
      name = "Merkez",
      cityId = 1,
      townId = 1,
      neighborhoodId = 1,
      openAddress = "",
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
    } = address;

    const id = generateAddressId();
    const newAddress = {
      id,
      name,
      cityId,
      townId,
      neighborhoodId,
      openAddress,
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
    addressTableMock.push(newAddress);
    return [200, { address: newAddress }];
  });

  mock.onPost("api/addresses/find").reply(config => {
    const mockUtils = new MockUtils();
    const { queryParams } = JSON.parse(config.data);
    const filteredAddresses = mockUtils.baseFilter(addressTableMock, queryParams);
    return [200, filteredAddresses];
  });

  mock.onPost("api/addresses/deleteAddresses").reply(config => {
    const { ids } = JSON.parse(config.data);
    ids.forEach(id => {
      const index = addressTableMock.findIndex(el => el.id === id);
      if (index > -1) {
        addressTableMock.splice(index, 1);
      }
    });
    return [200];
  });

  mock.onPost("api/addresses/updateStatusForAddresses").reply(config => {
    const { ids, status } = JSON.parse(config.data);
    addressTableMock.forEach(el => {
      if (ids.findIndex(id => id === el.id) > -1) {
        el.status = status;
      }
    });
    return [200];
  });

  mock.onGet(/api\/addresses\/\d+/).reply(config => {
    const id = config.url.match(/api\/addresses\/(\d+)/)[1];
    const address = addressTableMock.find(el => el.id === +id);
    if (!address) {
      return [400];
    }

    return [200, address];
  });

  mock.onPut(/api\/addresses\/\d+/).reply(config => {
    const id = config.url.match(/api\/addresses\/(\d+)/)[1];
    const { address } = JSON.parse(config.data);
    const index = addressTableMock.findIndex(el => el.id === +id);
    if (!index) {
      return [400];
    }

    addressTableMock[index] = { ...address };
    return [200];
  });

  mock.onDelete(/api\/addresses\/\d+/).reply(config => {
    const id = config.url.match(/api\/addresses\/(\d+)/)[1];
    const index = addressTableMock.findIndex(el => el.id === +id);
    addressTableMock.splice(index, 1);
    if (!index === -1) {
      return [400];
    }

    return [200];
  });
}

function generateAddressId() {
  const ids = addressTableMock.map(el => el.id);
  const maxId = Math.max(...ids);
  return maxId + 1;
}