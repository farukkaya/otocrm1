export const defaultSorted = [{
  dataField: "id",
  order: "asc"
}];
export const sizePerPageList = [{
  text: "3",
  value: 3
},
{
  text: "5",
  value: 5
},
{
  text: "10",
  value: 10
}
];

export const CarColors = [{ id: 1, name: "Beyaz" }, { id: 2, name: "Siyah" }, { id: 3, name: "Lacivert" }, { id: 4, name: "Kırmızı" }, { id: 5, name: "Sarı" }];
export const FuelTypes = [{ id: 1, name: "Dizel" }, { id: 2, name: "Benzin" }, { id: 3, name: "Benzin&LPG" }, { id: 4, name: "Elektirik" }];
export const GearTypes = [{ id: 1, name: "Manuel" }, { id: 2, name: "Otomatik" }, { id: 3, name: "Yarı Otomatik" }];
export const CaseTypes = [{ id: 1, name: "Sedan" }, { id: 2, name: "Hackback" }];
export const CarStatus = [{ id: 1, name: "Sıfır" }, { id: 2, name: "İkinci El" }];
export const FromWhoTitles = [{ id: 1, name: "Müşteri" }, { id: 2, name: "Esnaf" }, { id: 3, name: "İhale" }];
export const Sources = [{ id: 1, name: "Kredi Kapama" }, { id: 2, name: "Takas" }, { id: 3, name: "Nakit" }];
export const Years = [{ id: 1940, name: "1940" }, { id: 1941, name: "1941" }, { id: 1942, name: "1942" }, { id: 1943, name: "1943" }, { id: 1944, name: "1944" }, { id: 1945, name: "1945" }, { id: 1946, name: "1946" }, { id: 1947, name: "1947" }, { id: 1948, name: "1948" }, { id: 1949, name: "1949" }, { id: 1950, name: "1950" }, { id: 1951, name: "1951" }, { id: 1952, name: "1952" }, { id: 1953, name: "1953" }, { id: 1954, name: "1954" }, { id: 1955, name: "1955" }, { id: 1956, name: "1956" }, { id: 1957, name: "1957" }, { id: 1958, name: "1958" }, { id: 1959, name: "1959" }, { id: 1960, name: "1960" }, { id: 1961, name: "1961" }, { id: 1962, name: "1962" }, { id: 1963, name: "1963" }, { id: 1964, name: "1964" }, { id: 1965, name: "1965" }, { id: 1966, name: "1966" }, { id: 1967, name: "1967" }, { id: 1968, name: "1968" }, { id: 1969, name: "1969" }, { id: 1970, name: "1970" }, { id: 1971, name: "1971" }, { id: 1972, name: "1972" }, { id: 1973, name: "1973" }, { id: 1974, name: "1974" }, { id: 1975, name: "1975" }, { id: 1976, name: "1976" }, { id: 1977, name: "1977" }, { id: 1978, name: "1978" }, { id: 1979, name: "1979" }, { id: 1980, name: "1980" }, { id: 1981, name: "1981" }, { id: 1982, name: "1982" }, { id: 1983, name: "1983" }, { id: 1984, name: "1984" }, { id: 1985, name: "1985" }, { id: 1986, name: "1986" }, { id: 1987, name: "1987" }, { id: 1988, name: "1988" }, { id: 1989, name: "1989" }, { id: 1990, name: "1990" }, { id: 1991, name: "1991" }, { id: 1992, name: "1992" }, { id: 1993, name: "1993" }, { id: 1994, name: "1994" }, { id: 1995, name: "1995" }, { id: 1996, name: "1996" }, { id: 1997, name: "1997" }, { id: 1998, name: "1998" }, { id: 1999, name: "1999" }, { id: 2000, name: "2000" }, { id: 2001, name: "2001" }, { id: 2002, name: "2002" }, { id: 2003, name: "2003" }, { id: 2004, name: "2004" }, { id: 2005, name: "2005" }, { id: 2006, name: "2006" }, { id: 2007, name: "2007" }, { id: 2008, name: "2008" }, { id: 2009, name: "2009" }, { id: 2010, name: "2010" }, { id: 2011, name: "2011" }, { id: 2012, name: "2012" }, { id: 2013, name: "2013" }, { id: 2014, name: "2014" }, { id: 2015, name: "2015" }, { id: 2016, name: "2016" }, { id: 2017, name: "2017" }, { id: 2018, name: "2018" }, { id: 2019, name: "2019" }, { id: 2020, name: "2020" }].reverse();

export const initialFilter = {
  filter: {
      vinNo: "",
      engineNo: "",
      categoryId: 0,// kategoriler
      brandId: 0,//markalar
      modelId: 0,//modeller
      year: "",
      plateNo: "",
      colorId: 0,//renkler
      fuelTypeId: 0,//Yakıt Tipleri
      kilometer: 0,
      gearTypeId: 0,//Vites tipleri
      caseTypeId: 0,// kasa tipleri
      enginePower: 0,//motor gücü
      engineCapacityId: 0,//motor hacmi
      swap: false,
      statusId: 0,// Sıfır ,İkinci El
      buyingPrice: 0,
      sellingPrice: 0,
      cashSellingPrice: 0,
      swapSellingPrice: 0,
      fromWhoId: 0,//kimden (Müşteri,Esnaf,İhale)
      purchaseTypeId: 0,//Alım Türü(Kredi Kapama,Takas,Nakit)
      insuranceCode: 0,//Kasko Kodu
      insuranceValue: 0,// Kasko değeri
      description: "",
      brand: "",
      model: "",
      color: "",
      fuelType: "",
      gearType: "",
      caseType: "",
      status: "",
      fromWho: "",
      source: "",
  },
  sortOrder: "asc",
  sortField: "id",
  pageNumber: 1,
  pageSize: 10
};