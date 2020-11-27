import MockAdapter from "axios-mock-adapter";
import mockAuth from "../../app/modules/Auth/__mocks__/mockAuth";
import mockCustomers from "../../app/modules/ECommerce/__mocks__/mockCustomer";
import mockProducts from "../../app/modules/ECommerce/__mocks__/mockProduct";
import mockRemarks from "../../app/modules/ECommerce/__mocks__/mockRemark";
import mockSpecifications from "../../app/modules/ECommerce/__mocks__/mockSpecification";

import mockGallery from "../../app/modules/System/__mocks__/galleries/mockGallery";
import mockProfessions from "../../app/modules/System/__mocks__/professions/mockProfession";
import mockTaxOffice from "../../app/modules/System/__mocks__/taxOffices/mockTaxOffice";
import mockDealer from "../../app/modules/System/__mocks__/dealers/mockDealer";
import mockUser from "../../app/modules/System/__mocks__/users/mockUser";
import mockCities from "../../app/modules/System/__mocks__/_cities/mockCity";
import mockTowns from "../../app/modules/System/__mocks__/_towns/mockTown";
import mockNeighborhoods from "../../app/modules/System/__mocks__/_neighborhoods/mockNeighborhood";

export default function mockAxios(axios) {
  const mock = new MockAdapter(axios, { delayResponse: 300 });

  mockAuth(mock);
  mockCustomers(mock);
  mockProducts(mock);
  mockRemarks(mock);
  mockSpecifications(mock);

//////////////////////////////
  mockCities(mock);
  mockTowns(mock);
  mockNeighborhoods(mock);
  mockProfessions(mock);
  mockDealer(mock);
  mockGallery(mock);
  mockUser(mock)
  mockTaxOffice(mock);

  return mock;
}
