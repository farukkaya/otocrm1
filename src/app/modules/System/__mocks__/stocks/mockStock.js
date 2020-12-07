import stockTableMock from "./stockTableMock";
import MockUtils from "../mock.utils";

export default function mockStock(mock) {
  mock.onPost("api/stocks").reply(({ data }) => {
    const { stock } = JSON.parse(data);
    const {
      vinNo = "",
      engineNo = "",
      categoryId= 0,// kategoriler
      brandId= 0,//markalar
      modelId= 0,//modeller
      year="",
      plateNo,
      colorId= 0,//renkler
      fuelTypeId= 0,//Yakıt Tipleri
      kilometer= 0,
      gearTypeId= 0,//Vites tipleri
      caseTypeId= 0,// kasa tipleri
      enginePower= 0,//motor gücü
      engineCapacity= 0,//motor hacmi
      swap=false,
      statusId= 0,// Sıfır ,İkinci El
      buyingPrice= 0,
      sellingPrice= 0,
      cashSellingPrice= 0,
      swapSellingPrice= 0,
      fromWhoId= 0,//kimden (Müşteri,Esnaf,İhale)
      sourceId= 0,//Kaynak(Kredi Kapama,Takas,Nakit)
      insuranceCode= 0,//Kasko Kodu
      insuranceValue= 0,// Kasko değeri
      description= "",

      isActive= false,
      createdDate,
      createdBy,
      updatedDate,
      updatedBy,
      deletedDate,
      deletedBy,
      guid,
      relationGuid,
      relationTable

    } = stock;

    const id = generateStockId();
    const newStock = {
      id,
      vinNo,
      engineNo,
      categoryId,// kategoriler
      brandId,//markalar
      modelId,//modeller
      year,
      plateNo,
      colorId,//renkler
      fuelTypeId,//Yakıt Tipleri
      kilometer,
      gearTypeId,//Vites tipleri
      caseTypeId,// kasa tipleri
      enginePower,//motor gücü
      engineCapacity,//motor hacmi
      swap,
      statusId,// Sıfır ,İkinci El
      buyingPrice,
      sellingPrice,
      cashSellingPrice,
      swapSellingPrice,
      fromWhoId,//kimden (Müşteri,Esnaf,İhale)
      sourceId,//Kaynak(Kredi Kapama,Takas,Nakit)
      insuranceCode,//Kasko Kodu
      insuranceValue,// Kasko değeri
      description,

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
    stockTableMock.push(newStock);
    return [200, { stock: newStock }];
  });

  mock.onPost("api/stocks/find").reply(config => {
    
    const mockUtils = new MockUtils();
    const { queryParams } = JSON.parse(config.data);
    const filteredStocks = mockUtils.baseFilter(stockTableMock, queryParams);
    return [200, filteredStocks];
  });

  mock.onPost(/api\/stocksfindByDealer\/\d+/).reply(config => {
    const urls = config.url.split("/");
    const id = urls[2];
    const mockUtils = new MockUtils();
    const { queryParams } = JSON.parse(config.data);
    const dealerStocks = stockTableMock.filter(el => el.dealerId === +id);
    const filteredStocks = mockUtils.baseFilter(dealerStocks, queryParams);
    return [200, filteredStocks];
  });

  mock.onPost(/api\/stocksfindByGallery\/\d+/).reply(config => {
    const urls = config.url.split("/");
    const id = urls[2];
    const mockUtils = new MockUtils();
    const { queryParams } = JSON.parse(config.data);
    const galleryStocks = stockTableMock.filter(el => el.galleryId === +id);
    const filteredStocks = mockUtils.baseFilter(galleryStocks, queryParams);
    return [200, filteredStocks];
  });

  mock.onPost("api/stocks/deleteStocks").reply(config => {
    const { ids } = JSON.parse(config.data);
    ids.forEach(id => {
      const index = stockTableMock.findIndex(el => el.id === id);
      if (index > -1) {
        stockTableMock.splice(index, 1);
      }
    });
    return [200];
  });

  mock.onPost("api/stocks/updateStatusForStocks").reply(config => {
    const { ids, status } = JSON.parse(config.data);
    stockTableMock.forEach(el => {
      if (ids.findIndex(id => id === el.id) > -1) {
        el.isActive = status;
      }
    });
    return [200];
  });

  mock.onGet(/api\/stocks\/\d+/).reply(config => {
    const id = config.url.match(/api\/stocks\/(\d+)/)[1];
    const stock = stockTableMock.find(el => el.id === +id);
    if (!stock) {
      return [400];
    }

    return [200, stock];
  });

  mock.onPut(/api\/stocks\/\d+/).reply(config => {
    const id = config.url.match(/api\/stocks\/(\d+)/)[1];
    const { stock } = JSON.parse(config.data);
    const index = stockTableMock.findIndex(el => el.id === +id);
    if (!index) {
      return [400];
    }

    stockTableMock[index] = { ...stock };
    return [200];
  });

  mock.onDelete(/api\/stocks\/\d+/).reply(config => {
    const id = config.url.match(/api\/stocks\/(\d+)/)[1];
    const index = stockTableMock.findIndex(el => el.id === +id);
    stockTableMock.splice(index, 1);
    if (!index === -1) {
      return [400];
    }

    return [200];
  });
}

function generateStockId() {
  const ids = stockTableMock.map(el => el.id);
  const maxId = Math.max(...ids);
  return maxId + 1;
}