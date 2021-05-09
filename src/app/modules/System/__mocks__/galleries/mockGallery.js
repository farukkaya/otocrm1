import galleryTableMock from "./galleryTableMock";
import MockUtils from "../mock.utils";

export default function mockGalleries(mock) {
  mock.onPost("galleries").reply(({ data }) => {
    const { gallery } = JSON.parse(data);
    const {
      dealer = "",
      name = "",
      capacityId = 0,
      taxOffice = 0,
      taxOfficeId = 0,
      taxIdentityNo = "",
      phone1 = "",
      fax = "",
      email = "",
      isActive = false,
      createdDate = "2019-11-01T00:00:00+00:00",
      createdBy = 1,
      updatedDate = null,
      updatedBy = null,
      deletedDate = null,
      deletedBy = null,
      guid = "",
    } = gallery;

    const id = generateGalleryId();
    const newGallery = {
      id,
      dealer,
      name,
      capacityId,
      taxOffice,
      taxOfficeId,
      taxIdentityNo,
      phone1,
      fax,
      email,
      isActive,
      createdDate,
      createdBy,
      updatedDate,
      updatedBy,
      deletedDate,
      deletedBy,
      guid
    };
    galleryTableMock.push(newGallery);
    return [200, { gallery: newGallery }];
  });
  mock.onGet("galleries/getall").reply(config => {
    return [200, galleryTableMock];
  });
  mock.onPost("galleries/find").reply(config => {
    const mockUtils = new MockUtils();
    const { queryParams } = JSON.parse(config.data);
    const filteredGalleries = mockUtils.baseFilter(galleryTableMock, queryParams);
    return [200, filteredGalleries];
  });

  mock.onPost(/api\/galleriesfind\/\d+/).reply(config => {
    const urls = config.url.split("/");
    const id = urls[2];
    const mockUtils = new MockUtils();
    const { queryParams } = JSON.parse(config.data);
    const dealerGalleries = galleryTableMock.filter(el => el.dealerId === +id);
    const filteredGalleries = mockUtils.baseFilter(dealerGalleries, queryParams);
    return [200, filteredGalleries];
  });
  mock.onPost("galleries/deleteGalleries").reply(config => {
    const { ids } = JSON.parse(config.data);
    ids.forEach(id => {
      const index = galleryTableMock.findIndex(el => el.id === id);
      if (index > -1) {
        galleryTableMock.splice(index, 1);
      }
    });
    return [200];
  });

  mock.onPost("galleries/updateStatusForGalleries").reply(config => {
    
    const { ids, status } = JSON.parse(config.data);
    galleryTableMock.forEach(el => {
      if (ids.findIndex(id => id === el.id) > -1) {
        el.isActive = status;
      }
    });
    return [200];
  });

  mock.onGet(/api\/galleries\/\d+/).reply(config => {
    const id = config.url.match(/api\/galleries\/(\d+)/)[1];
    const gallery = galleryTableMock.find(el => el.id === +id);
    if (!gallery) {
      return [400];
    }

    return [200, gallery];
  });

  mock.onPut(/api\/galleries\/\d+/).reply(config => {
    const id = config.url.match(/api\/galleries\/(\d+)/)[1];
    const { gallery } = JSON.parse(config.data);
    const index = galleryTableMock.findIndex(el => el.id === +id);
    if (!index) {
      return [400];
    }

    galleryTableMock[index] = { ...gallery };
    return [200];
  });

  mock.onDelete(/api\/galleries\/\d+/).reply(config => {
    const id = config.url.match(/api\/galleries\/(\d+)/)[1];
    const index = galleryTableMock.findIndex(el => el.id === +id);
    galleryTableMock.splice(index, 1);
    if (!index === -1) {
      return [400];
    }

    return [200];
  });
}

function generateGalleryId() {
  const ids = galleryTableMock.map(el => el.id);
  const maxId = Math.max(...ids);
  return maxId + 1;
}