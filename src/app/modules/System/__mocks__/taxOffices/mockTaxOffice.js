import taxOfficeTableMock from "./taxOfficeTableMock";
import MockUtils from "../mock.utils";

export default function mockTaxOffices(mock) {
  mock.onPost("api/taxOffices").reply(({ data }) => {
    const { taxOffice } = JSON.parse(data);
    const {
      cityId = 0,
      name = "",
      code= 0,
      cityName = "",
      isActive = false,
      createdDate= "",
    createdBy= 486,
    updatedDate= null,
    updatedBy= null,
    isDeleted= false,
    deletedDate= null,
    deletedBy= null,
    guid=""
    } = taxOffice;

    const id = generateTaxOfficeId();
    const newTaxOffice = {
      id,
      cityId,
      name,
      code,
      cityName,
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
    taxOfficeTableMock.push(newTaxOffice);
    return [200, { taxOffice: newTaxOffice }];
  });
  
  mock.onPost("api/taxOffices/find").reply(config => {
    const mockUtils = new MockUtils();
    const { queryParams } = JSON.parse(config.data);
    const filteredTaxOffices = mockUtils.baseFilter(taxOfficeTableMock, queryParams);
    return [200, filteredTaxOffices];
  });

  mock.onPost("api/taxOffices/getall").reply(config => {
   var resp={
     entities:taxOfficeTableMock,
     totalCount:taxOfficeTableMock.length
   }
    return [200, resp];
  });

  mock.onPost("api/taxOffices/deleteTaxOffices").reply(config => {
    const { ids } = JSON.parse(config.data);
    ids.forEach(id => {
      const index = taxOfficeTableMock.findIndex(el => el.id === id);
      if (index > -1) {
        taxOfficeTableMock.splice(index, 1);
      }
    });
    return [200];
  });

  mock.onPost("api/taxOffices/updateStatusForTaxOffices").reply(config => {
    const { ids, status } = JSON.parse(config.data);
    taxOfficeTableMock.forEach(el => {
      if (ids.findIndex(id => id === el.id) > -1) {
        el.isActive = status;
      }
    });
    return [200];
  });
  
  mock.onGet(/api\/taxOffices\/\d+/).reply(config => {
    const id = config.url.match(/api\/taxOffices\/(\d+)/)[1];
    const taxOffice = taxOfficeTableMock.find(el => el.id === +id);
    if (!taxOffice) {
      return [400];
    }

    return [200, taxOffice];
  });

  mock.onPut(/api\/taxOffices\/\d+/).reply(config => {
    const id = config.url.match(/api\/taxOffices\/(\d+)/)[1];
    const { taxOffice } = JSON.parse(config.data);
    const index = taxOfficeTableMock.findIndex(el => el.id === +id);
    if (!index) {
      return [400];
    }

    taxOfficeTableMock[index] = { ...taxOffice };
    return [200];
  });

  mock.onDelete(/api\/taxOffices\/\d+/).reply(config => {
    const id = config.url.match(/api\/taxOffices\/(\d+)/)[1];
    const index = taxOfficeTableMock.findIndex(el => el.id === +id);
    taxOfficeTableMock.splice(index, 1);
    if (!index === -1) {
      return [400];
    }

    return [200];
  });
}

function generateTaxOfficeId() {
  const ids = taxOfficeTableMock.map(el => el.id);
  const maxId = Math.max(...ids);
  return maxId + 1;
}