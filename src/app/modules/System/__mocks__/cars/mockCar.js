import carTableMock from "./carTableMock";
import MockUtils from "../mock.utils";

export default function mockCar(mock) {
  mock.onPost("cars").reply(({ data }) => {
    const { car } = JSON.parse(data);
    const {
      _2006= 0,
      _2007= 0,
      _2008= 0,
      _2009= 0,
      _2010= 0,
      _2011= 0,
      _2012= 0,
      _2013= 0,
      _2014= 0,
      _2015= 0,
      _2016= 0,
      _2017= 1_20618,
      _2018= 126600,
      _2019= 132635,
      _2020= 0,
      id= 24480,
      brandCode= 825,
      modelCode= 1034,
      brandName= "GAZ",
      modelName= "GAZELLE NEXT 150 HP PANEL VAN COMBI 9.5 M3"
    } = car;

    //const carId = generateCarId();
    const newCar = {
      _2006,
      _2007,
      _2008,
      _2009,
      _2010,
      _2011,
      _2012,
      _2013,
      _2014,
      _2015,
      _2016,
      _2017,
      _2018,
      _2019,
      _2020,
      id,
      brandCode,
      modelCode,
      brandName,
      modelName
    };
    carTableMock.push(newCar);
    return [200, { car: newCar }];
  });

  mock.onPost("cars/find").reply(config => {
    const mockUtils = new MockUtils();
    const { queryParams } = JSON.parse(config.data);
    const filteredCars = mockUtils.baseFilter(carTableMock, queryParams);
    return [200, filteredCars];
  });
  mock.onPost("cars/getall").reply(config => {
    
    var resp={
      entities:carTableMock,
      totalCount:carTableMock.length
    }
    return [200, resp];
  });

  mock.onPost(/api\/carsfindByDealer\/\d+/).reply(config => {
    const urls = config.url.split("/");
    const id = urls[2];
    const mockUtils = new MockUtils();
    const { queryParams } = JSON.parse(config.data);
    const dealerCars= carTableMock.filter(el => el.dealerId === +id);
    const filteredCars = mockUtils.baseFilter(dealerCars, queryParams);
    return [200, filteredCars];
  });

  mock.onPost(/api\/carsfindByGallery\/\d+/).reply(config => {
    const urls = config.url.split("/");
    const id = urls[2];
    const mockUtils = new MockUtils();
    const { queryParams } = JSON.parse(config.data);
    const galleryCars= carTableMock.filter(el => el.galleryId === +id);
    const filteredCars = mockUtils.baseFilter(galleryCars, queryParams);
    return [200, filteredCars];
  });

  mock.onPost("cars/deleteCars").reply(config => {
    const { ids } = JSON.parse(config.data);
    ids.forEach(id => {
      const index = carTableMock.findIndex(el => el.id === id);
      if (index > -1) {
        carTableMock.splice(index, 1);
      }
    });
    return [200];
  });

  mock.onPost("cars/updateStatusForCars").reply(config => {
    const { ids, status } = JSON.parse(config.data);
    carTableMock.forEach(el => {
      if (ids.findIndex(id => id === el.id) > -1) {
        el.isActive = status;
      }
    });
    return [200];
  });

  mock.onGet(/api\/cars\/\d+/).reply(config => {
    const id = config.url.match(/api\/cars\/(\d+)/)[1];
    const car = carTableMock.find(el => el.id === +id);
    if (!car) {
      return [400];
    }

    return [200, car];
  });

  mock.onPut(/api\/cars\/\d+/).reply(config => {
    const id = config.url.match(/api\/cars\/(\d+)/)[1];
    const { car } = JSON.parse(config.data);
    const index = carTableMock.findIndex(el => el.id === +id);
    if (!index) {
      return [400];
    }

    carTableMock[index] = { ...car };
    return [200];
  });

  mock.onDelete(/api\/cars\/\d+/).reply(config => {
    const id = config.url.match(/api\/cars\/(\d+)/)[1];
    const index = carTableMock.findIndex(el => el.id === +id);
    carTableMock.splice(index, 1);
    if (!index === -1) {
      return [400];
    }

    return [200];
  });
}

function generateCarId() {
  const ids = carTableMock.map(el => el.id);
  const maxId = Math.max(...ids);
  return maxId + 1;
}