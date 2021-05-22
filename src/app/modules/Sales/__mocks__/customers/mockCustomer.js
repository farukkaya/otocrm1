import customerTableMock from "./customerTableMock";

import MockUtils from "./../mock.utils";

export default function mockCustomer(mock) {
  mock.onPost("customers").reply(({ data }) => {
    const { customer } = JSON.parse(data);
    const {

      lastname = "",
      firstname = "",
      personalPhone = "",
      workPhone = "",
      identityNo = "",
      advancePayment="",
      customerTypeId = 0,
      paymentMethodId=0,
      stockId=0,
      isActive = false,
      createdDate = "",
      createdBy = 0,
      updatedDate = null,
      updatedBy = null,
      deletedDate = null,
      deletedBy = null,
      guid = ""
    } = customer;

    const id = generateUserId();
    const newCustomer = {
      id,
      customerTypeId,

      lastname,

      firstname,

      personalPhone,
      workPhone,
      identityNo,
      advancePayment,
      paymentMethodId,
      stockId,
      isActive,
      createdDate,
      createdBy,
      updatedDate,
      updatedBy,
      deletedDate,
      deletedBy,
      guid
    };
    customerTableMock.push(newCustomer);
    return [200, { customer: newCustomer }];
  });

  mock.onPost("customers/find").reply(config => {
    const mockUtils = new MockUtils();
    const { queryParams } = JSON.parse(config.data);
    const filterdCustomers = mockUtils.baseFilter(
      customerTableMock,
      queryParams
    );
    return [200, filterdCustomers];
  });

  mock.onPost("customers/deleteCustomers").reply(config => {
    const { ids } = JSON.parse(config.data);
    ids.forEach(id => {
      const index = customerTableMock.findIndex(el => el.id === id);
      if (index > -1) {
        customerTableMock.splice(index, 1);
      }
    });
    return [200];
  });

  mock.onPost("customers/updateStatusForCustomers").reply(config => {
    const { ids, status } = JSON.parse(config.data);
    customerTableMock.forEach(el => {
      if (ids.findIndex(id => id === el.id) > -1) {
        el.isActive = status;
      }
    });
    return [200];
  });

  mock.onGet(/api\/customers\/\d+/).reply(config => {
    const id = config.url.match(/api\/customers\/(\d+)/)[1];
    const customer = customerTableMock.find(el => el.id === +id);
    if (!customer) {
      return [400];
    }

    return [200, customer];
  });

  mock.onPut(/api\/customers\/\d+/).reply(config => {
    const id = config.url.match(/api\/customers\/(\d+)/)[1];
    const { customer } = JSON.parse(config.data);
    const index = customerTableMock.findIndex(el => el.id === +id);
    if (!index) {
      return [400];
    }

    customerTableMock[index] = { ...customer };
    return [200];
  });

  mock.onDelete(/api\/customers\/\d+/).reply(config => {
    const id = config.url.match(/api\/customers\/(\d+)/)[1];
    const index = customerTableMock.findIndex(el => el.id === +id);
    customerTableMock.splice(index, 1);
    if (!index === -1) {
      return [400];
    }

    return [200];
  });
}

function generateUserId() {
  const ids = customerTableMock.map(el => el.id);
  const maxId = Math.max(...ids);
  return maxId + 1;
}
