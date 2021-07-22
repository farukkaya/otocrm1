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
export const PurchaseTypes = [{ id: 1, name: "Kredi Kapama" }, { id: 2, name: "Takas" }, { id: 3, name: "Nakit" }];
export const Years = [{ id: 1940, name: "1940" }, { id: 1941, name: "1941" }, { id: 1942, name: "1942" }, { id: 1943, name: "1943" }, { id: 1944, name: "1944" }, { id: 1945, name: "1945" }, { id: 1946, name: "1946" }, { id: 1947, name: "1947" }, { id: 1948, name: "1948" }, { id: 1949, name: "1949" }, { id: 1950, name: "1950" }, { id: 1951, name: "1951" }, { id: 1952, name: "1952" }, { id: 1953, name: "1953" }, { id: 1954, name: "1954" }, { id: 1955, name: "1955" }, { id: 1956, name: "1956" }, { id: 1957, name: "1957" }, { id: 1958, name: "1958" }, { id: 1959, name: "1959" }, { id: 1960, name: "1960" }, { id: 1961, name: "1961" }, { id: 1962, name: "1962" }, { id: 1963, name: "1963" }, { id: 1964, name: "1964" }, { id: 1965, name: "1965" }, { id: 1966, name: "1966" }, { id: 1967, name: "1967" }, { id: 1968, name: "1968" }, { id: 1969, name: "1969" }, { id: 1970, name: "1970" }, { id: 1971, name: "1971" }, { id: 1972, name: "1972" }, { id: 1973, name: "1973" }, { id: 1974, name: "1974" }, { id: 1975, name: "1975" }, { id: 1976, name: "1976" }, { id: 1977, name: "1977" }, { id: 1978, name: "1978" }, { id: 1979, name: "1979" }, { id: 1980, name: "1980" }, { id: 1981, name: "1981" }, { id: 1982, name: "1982" }, { id: 1983, name: "1983" }, { id: 1984, name: "1984" }, { id: 1985, name: "1985" }, { id: 1986, name: "1986" }, { id: 1987, name: "1987" }, { id: 1988, name: "1988" }, { id: 1989, name: "1989" }, { id: 1990, name: "1990" }, { id: 1991, name: "1991" }, { id: 1992, name: "1992" }, { id: 1993, name: "1993" }, { id: 1994, name: "1994" }, { id: 1995, name: "1995" }, { id: 1996, name: "1996" }, { id: 1997, name: "1997" }, { id: 1998, name: "1998" }, { id: 1999, name: "1999" }, { id: 2000, name: "2000" }, { id: 2001, name: "2001" }, { id: 2002, name: "2002" }, { id: 2003, name: "2003" }, { id: 2004, name: "2004" }, { id: 2005, name: "2005" }, { id: 2006, name: "2006" }, { id: 2007, name: "2007" }, { id: 2008, name: "2008" }, { id: 2009, name: "2009" }, { id: 2010, name: "2010" }, { id: 2011, name: "2011" }, { id: 2012, name: "2012" }, { id: 2013, name: "2013" }, { id: 2014, name: "2014" }, { id: 2015, name: "2015" }, { id: 2016, name: "2016" }, { id: 2017, name: "2017" }, { id: 2018, name: "2018" }, { id: 2019, name: "2019" }, { id: 2020, name: "2020" }].reverse();
export const EngineCapacities = [
    { id: 1, name: "1300 cm3' e kadar" },
    { id: 2, name: "1301 - 1600 cm3" },
    { id: 3, name: "1601 - 1800 cm3" },
    { id: 4, name: "1801 - 2000 cm3" },
    { id: 5, name: "2001 - 2500 cm3" },
    { id: 6, name: "2501 - 3000 cm3" },
    { id: 7, name: "3001 - 3500 cm3" },
    { id: 8, name: "3501 - 4000 cm3" },
    { id: 9, name: "4001 - 4500 cm3" },
    { id: 10, name: "4501 - 5000 cm3" },
    { id: 11, name: "5001 - 5500 cm3" },
    { id: 12, name: "5501 - 6000 cm3" },
    { id: 13, name: "6001 cm3 ve üzeri" }
]
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
      buyingPrice: 0,
      sellingPrice: 0,
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

export const arrayProgress = [
  {
      id: 1,
      title: "Stok Bilgileri",
      description: "Stok Bilgilerini Giriniz",
      icon: "fas fa-car fa-1x",
      iconType: "fontawesome"
  },
  {
      id: 2,
      title: "Fiyatlandırma",
      description: "Stok Fiyat Bilgilerini Giriniz",
      icon: "fas fa-tag fa-1x",
      iconType: "fontawesome"
  },
  {
      id: 3,
      title: "Belgeler",
      description: "Stoğa Ait Belgeleri Yükleyiniz",
      icon: "fas fa-file-contract fa-1x",
      iconType: "fontawesome"
  },

  {
      id: 4,
      title: "Resimler",
      description: "Stoğa Ait Resimleri Yükleyiniz",
      icon: "fas fa-images fa-1x",
      iconType: "fontawesome"
  },
  {
      id: 5,
      title: "Sonuç",
      description: "Bilgilerinizi kontrol ediniz",
      icon: "/media/svg/icons/Code/Done-circle.svg",
      iconType: "svg"
  }
];


export const BrandList = [{
  "id": 3,
  "name": "ALFA ROMEO"
}, {
  "id": 8,
  "name": "ASTON MARTIN"
}, {
  "id": 9,
  "name": "AUDI"
}, {
  "id": 11,
  "name": "ROVER"
}, {
  "id": 18,
  "name": "SAAB"
}, {
  "id": 19,
  "name": "SEAT"
}, {
  "id": 21,
  "name": "BMW"
}, {
  "id": 25,
  "name": "BUICK"
}, {
  "id": 27,
  "name": "BMC"
}, {
  "id": 31,
  "name": "CADILLAC"
}, {
  "id": 32,
  "name": "CHEVROLET"
}, {
  "id": 33,
  "name": "CHRYSLER"
}, {
  "id": 34,
  "name": "CITROEN"
}, {
  "id": 40,
  "name": "DAF"
}, {
  "id": 43,
  "name": "DAIHATSU"
}, {
  "id": 45,
  "name": "DODGE/USA"
}, {
  "id": 50,
  "name": "FERRARI"
}, {
  "id": 52,
  "name": "FIAT"
}, {
  "id": 53,
  "name": "FORD/OTOSAN"
}, {
  "id": 61,
  "name": "HONDA"
}, {
  "id": 66,
  "name": "ISUZU"
}, {
  "id": 80,
  "name": "LANCIA"
}, {
  "id": 82,
  "name": "LINCOLN"
}, {
  "id": 83,
  "name": "LADA"
}, {
  "id": 86,
  "name": "MASERATI"
}, {
  "id": 89,
  "name": "MAZDA"
}, {
  "id": 90,
  "name": "MERCEDES"
}, {
  "id": 91,
  "name": "MERCURY"
}, {
  "id": 94,
  "name": "MITSUBISHI"
}, {
  "id": 100,
  "name": "TOFAS-FIAT"
}, {
  "id": 101,
  "name": "OTOKAR/MAGIRUS"
}, {
  "id": 107,
  "name": "NISSAN"
}, {
  "id": 111,
  "name": "OPEL"
}, {
  "id": 114,
  "name": "PEUGEOT"
}, {
  "id": 117,
  "name": "PONTIAC"
}, {
  "id": 118,
  "name": "PORSCHE"
}, {
  "id": 119,
  "name": "TATA"
}, {
  "id": 122,
  "name": "RENAULT (OYAK)"
}, {
  "id": 123,
  "name": "RENAULT"
}, {
  "id": 125,
  "name": "RANGE ROVER"
}, {
  "id": 128,
  "name": "SSANGYONG"
}, {
  "id": 130,
  "name": "SUZUKI"
}, {
  "id": 133,
  "name": "SKODA"
}, {
  "id": 137,
  "name": "SUBARU"
}, {
  "id": 138,
  "name": "SCANIA"
}, {
  "id": 144,
  "name": "TOYOTA"
}, {
  "id": 153,
  "name": "VOLKSWAGEN"
}, {
  "id": 154,
  "name": "VOLVO"
}, {
  "id": 175,
  "name": "FORD /USA"
}, {
  "id": 177,
  "name": "HYUNDAI"
}, {
  "id": 220,
  "name": "JAGUAR"
}, {
  "id": 225,
  "name": "JAC"
}, {
  "id": 230,
  "name": "GULERYUZ"
}, {
  "id": 235,
  "name": "LAMBORGHINI"
}, {
  "id": 245,
  "name": "LOTUS"
}, {
  "id": 275,
  "name": "MORGAN"
}, {
  "id": 320,
  "name": "PROTON"
}, {
  "id": 360,
  "name": "MAN"
}, {
  "id": 400,
  "name": "ZIRAI TRAKTOR"
}, {
  "id": 410,
  "name": "VOLVO-TR"
}, {
  "id": 420,
  "name": "LAND ROVER"
}, {
  "id": 421,
  "name": "MINI"
}, {
  "id": 440,
  "name": "NEOPLAN"
}, {
  "id": 445,
  "name": "DACIA"
}, {
  "id": 450,
  "name": "SETRA"
}, {
  "id": 451,
  "name": "SMART"
}, {
  "id": 452,
  "name": "CATERHAM"
}, {
  "id": 453,
  "name": "INFINITI"
}, {
  "id": 454,
  "name": "TESLA"
}, {
  "id": 455,
  "name": "KTM"
}, {
  "id": 456,
  "name": "CHANGAN"
}, {
  "id": 457,
  "name": "FISKER"
}, {
  "id": 458,
  "name": "SHUANGHUAN"
}, {
  "id": 459,
  "name": "TCV"
}, {
  "id": 520,
  "name": "OTOYOL\\IVECO\\FIAT"
}, {
  "id": 550,
  "name": "TURKKAR"
}, {
  "id": 551,
  "name": "TEZELLER"
}, {
  "id": 552,
  "name": "TEMSA"
}, {
  "id": 553,
  "name": "ZONDA"
}, {
  "id": 554,
  "name": "ASKAM/FARGO/DESOTO"
}, {
  "id": 555,
  "name": "HUMMER"
}, {
  "id": 556,
  "name": "AR-BUS"
}, {
  "id": 557,
  "name": "IKCO"
}, {
  "id": 558,
  "name": "BENTLEY"
}, {
  "id": 561,
  "name": "KARSAN"
}, {
  "id": 565,
  "name": "PIAGGIO"
}, {
  "id": 566,
  "name": "HUANGHAI"
}, {
  "id": 567,
  "name": "VISEON"
}, {
  "id": 568,
  "name": "KENWORTH"
}, {
  "id": 569,
  "name": "IRIZAR"
}, {
  "id": 570,
  "name": "SAIPA"
}, {
  "id": 571,
  "name": "LEXUS"
}, {
  "id": 572,
  "name": "SOLARIS"
}, {
  "id": 574,
  "name": "BOZANKAYA"
}, {
  "id": 575,
  "name": "MULTICAR"
}, {
  "id": 576,
  "name": "ADRIA"
}, {
  "id": 577,
  "name": "HAIMA"
}, {
  "id": 578,
  "name": "MILLER"
}, {
  "id": 579,
  "name": "SCHMIDT"
}, {
  "id": 580,
  "name": "RAVON"
}, {
  "id": 581,
  "name": "EMT"
}, {
  "id": 582,
  "name": "ZOTYE"
}, {
  "id": 583,
  "name": "PILOTCAR"
}, {
  "id": 584,
  "name": "MCLAREN"
}, {
  "id": 600,
  "name": "MOTORSIKLET"
}, {
  "id": 601,
  "name": "ALKE"
}, {
  "id": 700,
  "name": "MEGA"
}, {
  "id": 705,
  "name": "AIXAM"
}, {
  "id": 706,
  "name": "FOLKVAN"
}, {
  "id": 710,
  "name": "PGO"
}, {
  "id": 715,
  "name": "MJT"
}, {
  "id": 716,
  "name": "SCAM"
}, {
  "id": 717,
  "name": "DFM"
}, {
  "id": 718,
  "name": "HFKANUNI"
}, {
  "id": 720,
  "name": "MAHINDRA"
}, {
  "id": 721,
  "name": "CHERY"
}, {
  "id": 722,
  "name": "TURKAR"
}, {
  "id": 723,
  "name": "KOENIGSEGG"
}, {
  "id": 724,
  "name": "GONOW"
}, {
  "id": 725,
  "name": "ASTRA"
}, {
  "id": 726,
  "name": "AVIA"
}, {
  "id": 727,
  "name": "VEICOLI"
}, {
  "id": 728,
  "name": "SINOTRUK"
}, {
  "id": 729,
  "name": "BREDAMENARIBUS"
}, {
  "id": 730,
  "name": "MAYBACH"
}, {
  "id": 732,
  "name": "WIESMANN"
}, {
  "id": 733,
  "name": "HYMER"
}, {
  "id": 734,
  "name": "ROLLS-ROYCE"
}, {
  "id": 736,
  "name": "AKIA"
}, {
  "id": 737,
  "name": "THE LONDON TAXI"
}, {
  "id": 738,
  "name": "GREAT WALL"
}, {
  "id": 739,
  "name": "GROVE"
}, {
  "id": 740,
  "name": "HISCAR"
}, {
  "id": 741,
  "name": "BYD"
}, {
  "id": 742,
  "name": "ZOOMLION"
}, {
  "id": 743,
  "name": "CODA"
}, {
  "id": 744,
  "name": "TATRA"
}, {
  "id": 745,
  "name": "TADANO FAUN"
}, {
  "id": 746,
  "name": "MENARINIBUS"
}, {
  "id": 747,
  "name": "PIMAKINA"
}, {
  "id": 748,
  "name": "DS"
}, {
  "id": 749,
  "name": "MAZ"
}, {
  "id": 800,
  "name": "KIA"
}, {
  "id": 801,
  "name": "BUGATTI"
}, {
  "id": 802,
  "name": "GEELY"
}, {
  "id": 803,
  "name": "FAW"
}, {
  "id": 804,
  "name": "ISOBUS"
}, {
  "id": 805,
  "name": "EICHER"
}, {
  "id": 806,
  "name": "DFSK"
}, {
  "id": 820,
  "name": "GMC"
}, {
  "id": 825,
  "name": "GAZ"
}]
export const ModelList = [
  {
      "id": 1001,
      "brandId": 3,
      "name": "GIULIETTA 1.4 TB M.AIR 170 TCT PROG.PLU"
  },
  {
      "id": 1002,
      "brandId": 3,
      "name": "GIULIETTA 1.4 TB M.AIR 170 TCT DISTINCTIVE"
  },
  {
      "id": 1003,
      "brandId": 3,
      "name": "GIULIETTA 1.4 TB MULTIAIR (170)"
  },
  {
      "id": 1004,
      "brandId": 3,
      "name": "MITO 1.3 JTD (95) CITY"
  },
  {
      "id": 1005,
      "brandId": 3,
      "name": "4C LAUNCH EDITION 1.750 TB 240 TCT"
  },
  {
      "id": 1006,
      "brandId": 3,
      "name": "159 2.4 DIZEL SPORTSWAGON"
  },
  {
      "id": 1007,
      "brandId": 3,
      "name": "GIULIETTA 1.8 TBI 240 TCT QV"
  },
  {
      "id": 1008,
      "brandId": 3,
      "name": "MITO 1.3 JTD (85) CITY"
  },
  {
      "id": 1012,
      "brandId": 3,
      "name": "MITO 1.4 170 3 KAPI QV TCT S2"
  },
  {
      "id": 1013,
      "brandId": 3,
      "name": "GIULIETTA  1.6 JTD 120 PROGRESSION"
  },
  {
      "id": 1014,
      "brandId": 3,
      "name": "GIULIETTA 1.6 JTDM 120 PROGRESSION TCT"
  },
  {
      "id": 1015,
      "brandId": 3,
      "name": "GIULIETTA 1.6 JTDM 120 SUPER TCT"
  },
  {
      "id": 1016,
      "brandId": 3,
      "name": "GIULIETTA 1.4 TB MULTIAIR  170 SUPER TCT"
  },
  {
      "id": 1017,
      "brandId": 3,
      "name": "GIULIETTA 1.8 TBI 240 VELOCE TCT"
  },
  {
      "id": 1018,
      "brandId": 3,
      "name": "4C 1.8 240 TCT"
  },
  {
      "id": 1019,
      "brandId": 3,
      "name": "4C SPIDER 1.8 240 TCT"
  },
  {
      "id": 1020,
      "brandId": 3,
      "name": "GIULIETTA 1.6 JTD 120 SUPER"
  },
  {
      "id": 1021,
      "brandId": 3,
      "name": "GIULIA 2.0 200 SUPER RWD AT"
  },
  {
      "id": 1022,
      "brandId": 3,
      "name": "GIULIA 2.0 280 VELOCE AWD AT"
  },
  {
      "id": 1023,
      "brandId": 3,
      "name": "GIULIA 2.9 510 QV RWD AT"
  },
  {
      "id": 1024,
      "brandId": 3,
      "name": "STELVIO 2.0 280 AWD AT"
  },
  {
      "id": 1025,
      "brandId": 3,
      "name": "8C COMPETIOZEONE (4691)"
  },
  {
      "id": 1026,
      "brandId": 3,
      "name": "GIULIA 2.0 200 SPRINT RWD AT"
  },
  {
      "id": 1027,
      "brandId": 3,
      "name": "STELVIO 2.0 200 SPRINT AWD AT"
  },
  {
      "id": 1028,
      "brandId": 3,
      "name": "STELVIO 2.0 280 VELOCE AWD AT"
  },
  {
      "id": 1029,
      "brandId": 3,
      "name": "GIULIETTA 1.6 JTD 120 SPRINT TCT"
  },
  {
      "id": 1030,
      "brandId": 3,
      "name": "GIULIETTA 1.6 JTD 120 TI TCT"
  },
  {
      "id": 143,
      "brandId": 3,
      "name": "147 1.6 3 KAPI PROGRESSION"
  },
  {
      "id": 144,
      "brandId": 3,
      "name": "147 1.6 3 KAPI DISTINCTIVE"
  },
  {
      "id": 145,
      "brandId": 3,
      "name": "147 1.6 5 KAPI PROGRESSION"
  },
  {
      "id": 146,
      "brandId": 3,
      "name": "147 1.6 5 KAPI DISTINCTIVE"
  },
  {
      "id": 147,
      "brandId": 3,
      "name": "147 2.0 3 KAPI SELESPEED DISTINCTIVE"
  },
  {
      "id": 148,
      "brandId": 3,
      "name": "147 2.0 5 KAPI DISTINCTIVE"
  },
  {
      "id": 149,
      "brandId": 3,
      "name": "147 2.0 5 KAPI SELESPEED DISTINCTIVE"
  },
  {
      "id": 150,
      "brandId": 3,
      "name": "147 2.0 3 KAPI DISTINCTIVE"
  },
  {
      "id": 151,
      "brandId": 3,
      "name": "156 2.0 TS DISTINCTIVE"
  },
  {
      "id": 152,
      "brandId": 3,
      "name": "156 1.6 TS PROGRESSION"
  },
  {
      "id": 153,
      "brandId": 3,
      "name": "156 1.6 TS DISTINCTIVE"
  },
  {
      "id": 154,
      "brandId": 3,
      "name": "156 2.0 TS SELESPEED DISTINCTIVE"
  },
  {
      "id": 155,
      "brandId": 3,
      "name": "156 2.0 TS SPORTWAGON DISTINCTIVE"
  },
  {
      "id": 156,
      "brandId": 3,
      "name": "156 2.0 TS S.WAGON SELESPEED DISTINCTIVE"
  },
  {
      "id": 157,
      "brandId": 3,
      "name": "166 2.0 TS DISTINCTIVE"
  },
  {
      "id": 158,
      "brandId": 3,
      "name": "166 3.0 V6 SPORTRONIC DISTINCTIVE"
  },
  {
      "id": 159,
      "brandId": 3,
      "name": "GT 2.0 JTS DISTINCTIVE"
  },
  {
      "id": 160,
      "brandId": 3,
      "name": "GT 3.2 V6 DISTINCTIVE"
  },
  {
      "id": 161,
      "brandId": 3,
      "name": "GT 2.0 JTS DISTINCTIVE SELESPEED"
  },
  {
      "id": 162,
      "brandId": 3,
      "name": "159 1.9 JTS PROGRESSION"
  },
  {
      "id": 163,
      "brandId": 3,
      "name": "159 1.9 JTD PROGRESSION"
  },
  {
      "id": 164,
      "brandId": 3,
      "name": "159 1.9 JTS DISTINCTIVE"
  },
  {
      "id": 165,
      "brandId": 3,
      "name": "159 1.9 JTD DISTINCTIVE"
  },
  {
      "id": 166,
      "brandId": 3,
      "name": "159 3.2 V6 4x4 DISTINCTIVE"
  },
  {
      "id": 167,
      "brandId": 3,
      "name": "159 1.9 JTD PROGRESSION OV"
  },
  {
      "id": 168,
      "brandId": 3,
      "name": "159 1.9 JTD DISTINCTIVE OV"
  },
  {
      "id": 169,
      "brandId": 3,
      "name": "BRERA 2.2 JTS"
  },
  {
      "id": 170,
      "brandId": 3,
      "name": "BRERA 2.2 JTS SKY WINDOW"
  },
  {
      "id": 171,
      "brandId": 3,
      "name": "BRERA 2.4 JTD"
  },
  {
      "id": 172,
      "brandId": 3,
      "name": "BRERA 2.4 JTD SKY WINDOW"
  },
  {
      "id": 173,
      "brandId": 3,
      "name": "BRERA 3.2 V6 Q4"
  },
  {
      "id": 174,
      "brandId": 3,
      "name": "BRERA 3.2 V6 Q4 SKY WINDOW"
  },
  {
      "id": 175,
      "brandId": 3,
      "name": "GT 1.9 GTD BLACKLINE"
  },
  {
      "id": 176,
      "brandId": 3,
      "name": "147 1.6 5 KAPI PROGRESSION (105)"
  },
  {
      "id": 177,
      "brandId": 3,
      "name": "147 1.6 3 KAPI PROGRESSION (105)"
  },
  {
      "id": 178,
      "brandId": 3,
      "name": "147 1.6 5 COLLEIZONE (120)"
  },
  {
      "id": 179,
      "brandId": 3,
      "name": "147 1.6 5 KAPI BLACKLINE (120)"
  },
  {
      "id": 180,
      "brandId": 3,
      "name": "147 2.0 5 KAPI SELESPEED BLACKLINE"
  },
  {
      "id": 181,
      "brandId": 3,
      "name": "147 1.6 5 KAPI DISTINCTIVE (105)"
  },
  {
      "id": 182,
      "brandId": 3,
      "name": "159 1.9 JTD PROGRESSION Q-TRONIC"
  },
  {
      "id": 183,
      "brandId": 3,
      "name": "159 1.9 JTD DISTINCTIVE Q-TRONIC"
  },
  {
      "id": 184,
      "brandId": 3,
      "name": "SPIDER 2.2 JTS"
  },
  {
      "id": 185,
      "brandId": 3,
      "name": "SPIDER 3.2 V6 Q4"
  },
  {
      "id": 186,
      "brandId": 3,
      "name": "147 1.9 JTD Q2"
  },
  {
      "id": 187,
      "brandId": 3,
      "name": "GT 1.9 JTD Q2"
  },
  {
      "id": 188,
      "brandId": 3,
      "name": "159 1.8 MPI DISTINCTIVE"
  },
  {
      "id": 189,
      "brandId": 3,
      "name": "159 1.8 MPI DISTINCTIVE PLUS"
  },
  {
      "id": 190,
      "brandId": 3,
      "name": "159 1.9 JTS DISTINCTIVE PLUS"
  },
  {
      "id": 191,
      "brandId": 3,
      "name": "159 1.9 JTD DISTINCTIVE PLUS"
  },
  {
      "id": 192,
      "brandId": 3,
      "name": "159 1.9 JTD DISTINCTIVE PLUS Q-TRONIC"
  },
  {
      "id": 193,
      "brandId": 3,
      "name": "159 3.2 V6 4x4 DISTINCTIVE PLUS"
  },
  {
      "id": 194,
      "brandId": 3,
      "name": "159 1.8 MPI DISTINCTIVE SPORTSWAGON"
  },
  {
      "id": 195,
      "brandId": 3,
      "name": "159 1.9 JTS DISTINCTIVE SPORTSWAGON"
  },
  {
      "id": 196,
      "brandId": 3,
      "name": "159 1.9 JTD DISTINCTIVE SPORTSWAGON"
  },
  {
      "id": 197,
      "brandId": 3,
      "name": "159 1.9 JTD DISTINCTIVE Q-TRONIC SPORTSW"
  },
  {
      "id": 198,
      "brandId": 3,
      "name": "159 1.8 MPI DISTINCTIVE PLUS SPORTSWAGON"
  },
  {
      "id": 199,
      "brandId": 3,
      "name": "159 1.9 JTS DISTINCTIVE PLUS SPORTSWAGO"
  },
  {
      "id": 200,
      "brandId": 3,
      "name": "159 1.9 JTD DISTINCTIVE PLUS SPORTSWAGON"
  },
  {
      "id": 201,
      "brandId": 3,
      "name": "159 1.9 JTD D.CTIVE PLUS Q-TRONIC SPORTS"
  },
  {
      "id": 202,
      "brandId": 3,
      "name": "147 1.6 5 KAPI BLACKLINE (105)"
  },
  {
      "id": 203,
      "brandId": 3,
      "name": "147 1.6 5 KAPI COLLEIZONE (105)"
  },
  {
      "id": 204,
      "brandId": 3,
      "name": "BRERA 2.2 JTS SELESPEED"
  },
  {
      "id": 205,
      "brandId": 3,
      "name": "BRERA 3.2 V6 Q4 Q-TRONIC"
  },
  {
      "id": 206,
      "brandId": 3,
      "name": "SPIDER 2.2 JTS SELESPEED"
  },
  {
      "id": 207,
      "brandId": 3,
      "name": "SPIDER 3.2 V6 Q4 Q-TRONIC"
  },
  {
      "id": 208,
      "brandId": 3,
      "name": "MITO 1.4 (78) JUNIOR 3 KAPI"
  },
  {
      "id": 209,
      "brandId": 3,
      "name": "MITO 1.4 TB (155) PROGRESSION 3 KAPI"
  },
  {
      "id": 210,
      "brandId": 3,
      "name": "MITO 1.4 TB (155) DISTINCTIVE 3 KAPI"
  },
  {
      "id": 211,
      "brandId": 3,
      "name": "MITO 1.6 JTD (120) PROGRESSION 3 KAPI"
  },
  {
      "id": 212,
      "brandId": 3,
      "name": "MITO 1.6 JTD (120) DISTINCTIVE 3 KAPI"
  },
  {
      "id": 213,
      "brandId": 3,
      "name": "159 1.9 JTD (150) NEW DISTINCTIVE PLUS"
  },
  {
      "id": 214,
      "brandId": 3,
      "name": "159 1.9 JTD (150) NEW D.TIVE PLUS Q-TRON"
  },
  {
      "id": 215,
      "brandId": 3,
      "name": "159 1.8 TBI (200) NEW DISTINCTIVE PLUS"
  },
  {
      "id": 216,
      "brandId": 3,
      "name": "MITO 1.4 TB MULTIAIR 170 QUAD.VERDE 3K"
  },
  {
      "id": 217,
      "brandId": 3,
      "name": "GIULETTA 1.4 TB 120 PROGRESSION PLUS"
  },
  {
      "id": 218,
      "brandId": 3,
      "name": "GIULETTA 1.4 TB 120 DISTINCTIVE"
  },
  {
      "id": 219,
      "brandId": 3,
      "name": "GIULETTA 1.4 TB MULTIAIR 170 DISTINCTIVE"
  },
  {
      "id": 220,
      "brandId": 3,
      "name": "GIULETTA 1.6 JTD 105 PROGRESSION PLUS"
  },
  {
      "id": 221,
      "brandId": 3,
      "name": "GIULETTA 1.6 JTD 105 DISTINCTIVE"
  },
  {
      "id": 222,
      "brandId": 3,
      "name": "GIULETTA 1.750 TB 235 QUAGRIFOGLIO VERDE"
  },
  {
      "id": 223,
      "brandId": 3,
      "name": "MITO 1.4 TB MULTIAIR 135 DIS.TIVE TCT 3 K"
  },
  {
      "id": 224,
      "brandId": 3,
      "name": "MITO 1.4 TB MULTIAIR (135) TCT CITY"
  },
  {
      "id": 225,
      "brandId": 3,
      "name": "MITO 1.4 TB MULTIAIR (135) TCT SPORTIVO"
  },
  {
      "id": 226,
      "brandId": 3,
      "name": "MITO 1.4 TB MULTIAR (135) TCT"
  },
  {
      "id": 100,
      "brandId": 8,
      "name": "V8 VANTAGE"
  },
  {
      "id": 1009,
      "brandId": 8,
      "name": "V8 VANTAGE SPORTSHIFT ROADSTER"
  },
  {
      "id": 101,
      "brandId": 8,
      "name": "DB9 VOLANTE"
  },
  {
      "id": 1010,
      "brandId": 8,
      "name": "V8 VANTAGE S COUPE"
  },
  {
      "id": 1011,
      "brandId": 8,
      "name": "V8 VANTAGE S ROADSTAR SPORTSSHIFT II"
  },
  {
      "id": 1031,
      "brandId": 9,
      "name": "A5 SPORTBACK 2.0 TFSI 211 QUATTRO S TRONIC PI"
  },
  {
      "id": 1032,
      "brandId": 9,
      "name": "A5 SPORTBACK 2.0 TDI (177) MULTITRONIC PI"
  },
  {
      "id": 1033,
      "brandId": 9,
      "name": "S5 SPORTBACK PI"
  },
  {
      "id": 1034,
      "brandId": 9,
      "name": "A8 L 3.0 TDI (250) QUATTRO TIPTRONIC"
  },
  {
      "id": 1035,
      "brandId": 9,
      "name": "A5 SPORTBACK 1.8 TFSI (160) MULTITRONIC"
  },
  {
      "id": 1036,
      "brandId": 9,
      "name": "S3 SPORTBACK S TRONIC"
  },
  {
      "id": 1037,
      "brandId": 9,
      "name": "A4 ALLROAD 2.0 TDI 177 QUATTRO S TRONIC PI"
  },
  {
      "id": 1038,
      "brandId": 9,
      "name": "A4 ALLROAD 2.0 TFSI 211 QUATTRO S TRONIC"
  },
  {
      "id": 1039,
      "brandId": 9,
      "name": "A5 CABRIO 1.8 TFSI 170 MULTITRONIC"
  },
  {
      "id": 1040,
      "brandId": 9,
      "name": "A5 CABRIO 2.0 TFSI 211 QUATTRO S TRONIC PI"
  },
  {
      "id": 1041,
      "brandId": 9,
      "name": "A5 CABRIO 2.0 TDI 177 MULTITRONIC PI"
  },
  {
      "id": 1042,
      "brandId": 9,
      "name": "S5 CABRIO PI"
  },
  {
      "id": 1043,
      "brandId": 9,
      "name": "S6 4.0 TFSI 420 QUATTRO S TRONIC"
  },
  {
      "id": 1044,
      "brandId": 9,
      "name": "S6 AVANT 4.0 TFSI 420 QUATTRO S TRONIC"
  },
  {
      "id": 1045,
      "brandId": 9,
      "name": "S7 SPORTBACK 4.0 TFSI 420 QUATTRO S TRONIC"
  },
  {
      "id": 1046,
      "brandId": 9,
      "name": "S8 4.0 TFSI 520 QUATTRO TIPTRONIC"
  },
  {
      "id": 1047,
      "brandId": 9,
      "name": "A3 1.4 TFSI 122 ATTRACTION S TRONIC"
  },
  {
      "id": 1048,
      "brandId": 9,
      "name": "A3 1.4 TFSI 122 AMBITION S TRONIC"
  },
  {
      "id": 1049,
      "brandId": 9,
      "name": "A3 1.4 TFSI 122 AMBIENTE S TRONIC"
  },
  {
      "id": 1050,
      "brandId": 9,
      "name": "A3 1.6 TDI 105 ATTRACTION S TRONIC"
  },
  {
      "id": 1051,
      "brandId": 9,
      "name": "A3 1.6 TDI 105 AMBITION S TRONIC"
  },
  {
      "id": 1052,
      "brandId": 9,
      "name": "A3 1.6 TDI 105 AMBIENTE S TRONIC"
  },
  {
      "id": 1053,
      "brandId": 9,
      "name": "RS4 AVANT PI"
  },
  {
      "id": 1054,
      "brandId": 9,
      "name": "Q5 2.0 TFSI 225 QUATTRO S TRONIC PI"
  },
  {
      "id": 1055,
      "brandId": 9,
      "name": "TTRS PLUS COUPE S TRONIC"
  },
  {
      "id": 1056,
      "brandId": 9,
      "name": "Q5 2.0 TDI 177 QUATTRO S TRONIC PI"
  },
  {
      "id": 1057,
      "brandId": 9,
      "name": "A1 SPORTBACK 1.4 TFSI 185 AMBITION S TRONIC"
  },
  {
      "id": 1058,
      "brandId": 9,
      "name": "A6 3.0 TDI 313 QUATTRO TIPTRONIC"
  },
  {
      "id": 1059,
      "brandId": 9,
      "name": "A6 AVANT 3.0 TDI 313 QUATTRO TIPTRONIC"
  },
  {
      "id": 1060,
      "brandId": 9,
      "name": "A5 SPORTBACK 2.0 TDI 177 QUATTRO S TRONIC PI"
  },
  {
      "id": 1061,
      "brandId": 9,
      "name": "A7 SPORTBACK 3.0 TFSI 310 QUATTRO S TRONIC"
  },
  {
      "id": 1062,
      "brandId": 9,
      "name": "A7 SPORTBACK 3.0 TDI 245 QUATTRO TIPTRONIC"
  },
  {
      "id": 1063,
      "brandId": 9,
      "name": "A7 SPORTBACK 3.0 TDI 313 QUATTRO TIPTRONIC"
  },
  {
      "id": 1064,
      "brandId": 9,
      "name": "A3 SPORTBACK 1.4 TFSI 122 ATTRACTION S TRONIC"
  },
  {
      "id": 1065,
      "brandId": 9,
      "name": "A3 SPORTBACK 1.6 TDI 105 ATTRACTION S TRONIC"
  },
  {
      "id": 1066,
      "brandId": 9,
      "name": "A3 SPORTBACK 1.4 TFSI 122 AMBITION S TRONIC"
  },
  {
      "id": 1067,
      "brandId": 9,
      "name": "A3 1.4 TFSI ATTRACTION (122)"
  },
  {
      "id": 1068,
      "brandId": 9,
      "name": "A4 2.0 TDI 177 QUATTRO S TRONIC PI"
  },
  {
      "id": 1069,
      "brandId": 9,
      "name": "A3 SPORTBACK 1.6 AMBITION"
  },
  {
      "id": 1070,
      "brandId": 9,
      "name": "A3 1.4 TFSI 140 ATTRACTION S TRONIC"
  },
  {
      "id": 1071,
      "brandId": 9,
      "name": "S3 2.0 TFSI 280 QUATTRO S TRONIC"
  },
  {
      "id": 1072,
      "brandId": 9,
      "name": "S3 SPORTBACK 2.0 TFSI 280 QUATTRO S TRONIC"
  },
  {
      "id": 1073,
      "brandId": 9,
      "name": "A4 2.0 TDI 150 MULTITRONIC PI"
  },
  {
      "id": 1074,
      "brandId": 9,
      "name": "A4 AVANT 2.0 TDI 177 QUATTRO S TRONIC PI"
  },
  {
      "id": 1075,
      "brandId": 9,
      "name": "A5 COUPE 2.0 TDI 177 QUATTRO S TRONIC PI"
  },
  {
      "id": 1076,
      "brandId": 9,
      "name": "A6 2.0 TFSI 180 MULTITRONIC"
  },
  {
      "id": 1077,
      "brandId": 9,
      "name": "RS6 AVANT 4.0 TFSI 560 QUATTRO TIPTRONIC"
  },
  {
      "id": 1078,
      "brandId": 9,
      "name": "A6 ALLROAD 3.0 TDI 313 QUATTRO TIPTRONIC"
  },
  {
      "id": 1079,
      "brandId": 9,
      "name": "A3 SPORTBACK 1.4 TFSI 122 AMBIENTE S TRONIC"
  },
  {
      "id": 1080,
      "brandId": 9,
      "name": "A3 SPORTBACK 1.4 TFSI 140 ATTRACTION S TRONIC"
  },
  {
      "id": 1081,
      "brandId": 9,
      "name": "A4 AVANT 2.0 TDI 150 MULTRONIC PI"
  },
  {
      "id": 1082,
      "brandId": 9,
      "name": "A6 ALLROAD 3.0 TDI 245 QUATTRO S TRONIC"
  },
  {
      "id": 1083,
      "brandId": 9,
      "name": "RS7 SPORTBACK 4.0 TFSI 560 QUATTRO TIPTRONIC"
  },
  {
      "id": 1085,
      "brandId": 9,
      "name": "R8 4.2 FSI QUATTRO PI"
  },
  {
      "id": 1087,
      "brandId": 9,
      "name": "A3 SEDAN 1.4 TFSI 140 ATTRACTION S TRONIC"
  },
  {
      "id": 1088,
      "brandId": 9,
      "name": "A3 SEDAN 1.4 TFSI 140 AMBIENTE S TRONIC"
  },
  {
      "id": 1089,
      "brandId": 9,
      "name": "A3 SPORTBACK 1.6 TDI 105 AMBITION S TRONIC"
  },
  {
      "id": 1090,
      "brandId": 9,
      "name": "A3 SPORTBACK 1.4 TFSI 140 AMBITION S TRONIC"
  },
  {
      "id": 1091,
      "brandId": 9,
      "name": "A3 SEDAN 1.6 TDI 105 AMBITION S TRONIC"
  },
  {
      "id": 1092,
      "brandId": 9,
      "name": "A3 SEDAN 1.6 TDI 105 ATTRACTION S TRONIC"
  },
  {
      "id": 1093,
      "brandId": 9,
      "name": "Q3 1.4 TFSI 150 S TRONIC"
  },
  {
      "id": 1095,
      "brandId": 9,
      "name": "A4 2.0 TFSI 225 QUATTRO STRONIC PI"
  },
  {
      "id": 1096,
      "brandId": 9,
      "name": "A4 AVANT 2.0 TFSI 225 QUATTRO STRONIC PI"
  },
  {
      "id": 1097,
      "brandId": 9,
      "name": "A4 ALLROAD 2.0 TFSI 225 QUATTRO STRONIC PI"
  },
  {
      "id": 1098,
      "brandId": 9,
      "name": "A5 COUPE 2.0 TFSI 225 QUATTRO STRONIC PI"
  },
  {
      "id": 1099,
      "brandId": 9,
      "name": "A5 SPORTBACK 2.0 TFSI 225 QUATTRO STRONIC PI"
  },
  {
      "id": 1100,
      "brandId": 9,
      "name": "A5 CABRIO 2.0 TFSI 225 QUATTRO STRONIC PI"
  },
  {
      "id": 1101,
      "brandId": 9,
      "name": "A3 SPORTBACK 1.6 TDI 105 AMBIENTE STRONIC"
  },
  {
      "id": 1102,
      "brandId": 9,
      "name": "A3 SEDAN 1.4 TFSI 140 AMBITION STRONIC"
  },
  {
      "id": 1103,
      "brandId": 9,
      "name": "S3 SEDAN 2.0 TFSI 280 QUATTRO STRONIC"
  },
  {
      "id": 1104,
      "brandId": 9,
      "name": "A3 CABRIO 1.4 TFSI 140 ATTRACTION S TRONIC"
  },
  {
      "id": 1105,
      "brandId": 9,
      "name": "A8 3.0 TDI 258 QUATTRO TIPTRONIC PI"
  },
  {
      "id": 1106,
      "brandId": 9,
      "name": "A8 3.0 TFSI 310 QUATTRO TIPTRONIC PI"
  },
  {
      "id": 1107,
      "brandId": 9,
      "name": "A8 4.0 TFSI 435 QUATTRO TIPTRONIC PI"
  },
  {
      "id": 1108,
      "brandId": 9,
      "name": "A8 4.2 TDI 385  QUATTRO TIPTRONIC PI"
  },
  {
      "id": 1109,
      "brandId": 9,
      "name": "S8 4.0 TFSI 520 QUATTRO TIPTRONIC PI"
  },
  {
      "id": 1110,
      "brandId": 9,
      "name": "A8 L 3.0 TDI 258 QUATTRO TIPTRONIC PI"
  },
  {
      "id": 1111,
      "brandId": 9,
      "name": "A8 L 3.0 TFSI 310 QUATTRO TIPTRONIC PI"
  },
  {
      "id": 1112,
      "brandId": 9,
      "name": "A8 L 4.0 TFSI 435 QUATTRO TIPTRONIC PI"
  },
  {
      "id": 1113,
      "brandId": 9,
      "name": "A8 L 4.2 TDI 385 QUATTRO TIPTRONIC PI"
  },
  {
      "id": 1114,
      "brandId": 9,
      "name": "A8 L W12 6.3 FSI 500 QUATTRO TIPTRONIC PI"
  },
  {
      "id": 1115,
      "brandId": 9,
      "name": "A3 SEDAN 1.6 TDI AMBIENTE S TRONIC"
  },
  {
      "id": 1116,
      "brandId": 9,
      "name": "A3 1.4 TFSI 150 ATTRACTION S TRONIC"
  },
  {
      "id": 1117,
      "brandId": 9,
      "name": "A3 SPORTBACK 1.4 TFSI 150 ATTRACTION S TRONIC"
  },
  {
      "id": 1118,
      "brandId": 9,
      "name": "A3 SEDAN 1.4 TFSI 150 ATTRACTION S TRONIC"
  },
  {
      "id": 1119,
      "brandId": 9,
      "name": "A3 CABRIO 1.4 TFSI 150 ATTRACTION S TRONIC"
  },
  {
      "id": 1120,
      "brandId": 9,
      "name": "Q5 2.0 TDI 190 QUATTRO S TRONIC PI"
  },
  {
      "id": 1121,
      "brandId": 9,
      "name": "A3 SPORTBACK 1.4 TFSI 125 ATTRACTION S TRONIC"
  },
  {
      "id": 1122,
      "brandId": 9,
      "name": "A3 SEDAN 1.6 TDI 110 AMBIENTE S TRONIC"
  },
  {
      "id": 1123,
      "brandId": 9,
      "name": "A3 SPORTBACK 1.4 TFSI 125 AMBIENTE STRONIC"
  },
  {
      "id": 1124,
      "brandId": 9,
      "name": "A3 SPORTBACK 1.4 TFSI 125 AMBITION S TRONIC"
  },
  {
      "id": 1125,
      "brandId": 9,
      "name": "A3 SPORTBACK 1.4 TFSI 150 AMBIENTE S TRONIC"
  },
  {
      "id": 1126,
      "brandId": 9,
      "name": "A3 SPORTBACK 1.4 TFSI 150 AMBITION S TRONIC"
  },
  {
      "id": 1127,
      "brandId": 9,
      "name": "A3 SPORTBACK 1.6 TDI 110 AMBIENTE S TRONIC"
  },
  {
      "id": 1128,
      "brandId": 9,
      "name": "A3 SPORTBACK 1.6 TDI 110  AMBITION S TRONIC"
  },
  {
      "id": 1129,
      "brandId": 9,
      "name": "A3 1.4 TFSI 125 AMBIENTE S TRONIC"
  },
  {
      "id": 1130,
      "brandId": 9,
      "name": "A3 1.4 TFSI 125 AMBITION S TRONIC"
  },
  {
      "id": 1131,
      "brandId": 9,
      "name": "A3 1.4 TFSI 150 AMBIENTE S TRONIC"
  },
  {
      "id": 1132,
      "brandId": 9,
      "name": "A3 1.4 TFSI 150 AMBITION S TRONIC"
  },
  {
      "id": 1133,
      "brandId": 9,
      "name": "A3 1.6 TDI 110 AMBIENTE S TRONIC"
  },
  {
      "id": 1134,
      "brandId": 9,
      "name": "A3 1.6 TDI 110 AMBITION S TRONIC"
  },
  {
      "id": 1135,
      "brandId": 9,
      "name": "A3 SEDAN 1.4 TFSI 125 AMBIENTE S TRONIC"
  },
  {
      "id": 1136,
      "brandId": 9,
      "name": "A3 SEDAN 1.4 TFSI 125 AMBITION S TRONIC"
  },
  {
      "id": 1137,
      "brandId": 9,
      "name": "A3 1.4 TFSI 125 ATTRACTION S TRONIC"
  },
  {
      "id": 1138,
      "brandId": 9,
      "name": "A3 SEDAN 1.4 TFSI 150 AMBIENTE S TRONIC"
  },
  {
      "id": 1139,
      "brandId": 9,
      "name": "A3 SEDAN 1.4 TFSI 150 AMBITION S TRONIC"
  },
  {
      "id": 1140,
      "brandId": 9,
      "name": "A3 CABRIOLET 1.4 TFSI 150 AMBIENTE S TRONIC"
  },
  {
      "id": 1141,
      "brandId": 9,
      "name": "A3 CABRIOLET 1.4 TFSI 150 AMBITION S TRONIC"
  },
  {
      "id": 1142,
      "brandId": 9,
      "name": "A3 SEDAN 1.6 TDI 110 S TRONIC"
  },
  {
      "id": 1143,
      "brandId": 9,
      "name": "A3 1.6 TDI 110 ATTRACTION S TRONIC"
  },
  {
      "id": 1144,
      "brandId": 9,
      "name": "A3 SEDAN 1.6 TDI 110 ATTRACTION S TRONIC"
  },
  {
      "id": 1145,
      "brandId": 9,
      "name": "A3 SPORTBACK 1.6 TDI 110 ATTRACTION S TRONIC"
  },
  {
      "id": 1146,
      "brandId": 9,
      "name": "S3 2.0 TFSI 285 QUATTRO S TRONIC"
  },
  {
      "id": 1147,
      "brandId": 9,
      "name": "S3 SPORTBACK 2.0 TFSI 285 QUATTRO S TRONIC"
  },
  {
      "id": 1148,
      "brandId": 9,
      "name": "S3 SEDAN 2.0 TFSI 285 QUATTRO S TRONIC"
  },
  {
      "id": 1149,
      "brandId": 9,
      "name": "A3 SEDAN 1.4 TFSI 125 ATTRACTION S TRONIC"
  },
  {
      "id": 1150,
      "brandId": 9,
      "name": "S4 3.0 TFSI 333 QUATTRO S TRONIC"
  },
  {
      "id": 1151,
      "brandId": 9,
      "name": "A5 COUPE 2.0 TDI 190 MULTITRONIC"
  },
  {
      "id": 1152,
      "brandId": 9,
      "name": "A5 COUPE 2.0 TDI 190 QUATTRO S TRONIC"
  },
  {
      "id": 1153,
      "brandId": 9,
      "name": "S5 COUPE 3.0 TFSI 333 QUATTRO S TRONIC"
  },
  {
      "id": 1154,
      "brandId": 9,
      "name": "A5 SPORTBACK 2.0 TDI 190 MULTITRONIC"
  },
  {
      "id": 1155,
      "brandId": 9,
      "name": "A5 SPORTBACK 2.0 TDI 190 QUATTRO S TRONIC"
  },
  {
      "id": 1156,
      "brandId": 9,
      "name": "S5 SPORTBACK 3.0 TFSI 333 QUATTRO S TRONIC"
  },
  {
      "id": 1157,
      "brandId": 9,
      "name": "S5 CABRIO 3.0 TFSI 333 QUATTRO S TRONIC"
  },
  {
      "id": 1158,
      "brandId": 9,
      "name": "A6 3.0 TDI 245 QUATTRO S TRONIC"
  },
  {
      "id": 1159,
      "brandId": 9,
      "name": "A7 SPORTBACK 3.0 TDI 272 QUATTRO STRONIC PI"
  },
  {
      "id": 1160,
      "brandId": 9,
      "name": "A7 SPORTBACK 3.0 TDI 320 QUATTRO TIPTRONIC PI"
  },
  {
      "id": 1161,
      "brandId": 9,
      "name": "A6 2.0 TDI (190) S TRONIC PI"
  },
  {
      "id": 1162,
      "brandId": 9,
      "name": "A6 3.0 TDI (272) QUATTRO S TRONIC PI"
  },
  {
      "id": 1163,
      "brandId": 9,
      "name": "A6 3.0 TDI (320) QUATTRO TIPTRONIC PI"
  },
  {
      "id": 1164,
      "brandId": 9,
      "name": "S4 AVANT 3.0 TFSI 333 QUATTRO S TRONIC"
  },
  {
      "id": 1165,
      "brandId": 9,
      "name": "A6 3.0 TFSI 333 QUATTRO S TRONIC PI"
  },
  {
      "id": 1166,
      "brandId": 9,
      "name": "Q5 2.0 TFSI 225 QUATTRO TIPTRONIC"
  },
  {
      "id": 1167,
      "brandId": 9,
      "name": "Q7 3.0 TDI 245 QUATTRO TIPTRONIC"
  },
  {
      "id": 1168,
      "brandId": 9,
      "name": "R8 4.2 FSI 430 QUATTRO R TRONIC"
  },
  {
      "id": 1169,
      "brandId": 9,
      "name": "A6 AVANT 2.0 TDI 190 S TRONIC PI"
  },
  {
      "id": 1170,
      "brandId": 9,
      "name": "A6 ALLROAD 3.0 TDI 272 QUATTRO S TRONIC PI"
  },
  {
      "id": 1171,
      "brandId": 9,
      "name": "A6 ALLROAD 3.0 TDI 320 QUATTRO TIPTRONIC PI"
  },
  {
      "id": 1172,
      "brandId": 9,
      "name": "Q3 1.4 TFSI 150 S TRONIC PI"
  },
  {
      "id": 1173,
      "brandId": 9,
      "name": "Q3 2.0 TDI 184 QUATTRO S TRONIC PI"
  },
  {
      "id": 1174,
      "brandId": 9,
      "name": "A1 SPORTBACK 1.0 TFSI 95 BASIC S TRONIC PI"
  },
  {
      "id": 1175,
      "brandId": 9,
      "name": "A1 SPORTBACK 1.0 TFSI 95 SPORT S TRONIC PI"
  },
  {
      "id": 1176,
      "brandId": 9,
      "name": "A1 SPORTBACK 1.4 TFSI 125 BASIC S TRONIC PI"
  },
  {
      "id": 1177,
      "brandId": 9,
      "name": "A1 SPORTBACK 1.4 TFSI 125 SPORT S TRONIC PI"
  },
  {
      "id": 1178,
      "brandId": 9,
      "name": "A1 SPORTBACK 1.6 TDI 116 BASIC S TRONIC PI"
  },
  {
      "id": 1179,
      "brandId": 9,
      "name": "A1 SPORTBACK 1.6 TDI 116 SPORT S TRONIC PI"
  },
  {
      "id": 1180,
      "brandId": 9,
      "name": "Q7 3.0 TDI 272 QUATTRO TIPTRONIC"
  },
  {
      "id": 1181,
      "brandId": 9,
      "name": "RS3 SPORTBACK 2.5 TFSI"
  },
  {
      "id": 1182,
      "brandId": 9,
      "name": "A3 SPORTBACK 1.2 TFSI 110 ATTRACTION"
  },
  {
      "id": 1183,
      "brandId": 9,
      "name": "A3 SEDAN 1.2 TFSI 110 ATTRACTION"
  },
  {
      "id": 1184,
      "brandId": 9,
      "name": "A8 2.0 TFSI HYBRID"
  },
  {
      "id": 1185,
      "brandId": 9,
      "name": "A4 2.0 TDI 190 MULTITRONIC"
  },
  {
      "id": 1186,
      "brandId": 9,
      "name": "A4 2.0 TDI 190 QUATTRO S TRONIC"
  },
  {
      "id": 1187,
      "brandId": 9,
      "name": "A4 AVANT 2.0 TDI 190 MULTITRONIC"
  },
  {
      "id": 1188,
      "brandId": 9,
      "name": "A4 AVANT 2.0 TDI 190 QUATTRO STRONIC"
  },
  {
      "id": 1189,
      "brandId": 9,
      "name": "A4 ALLROAD 2.0 TDI 190 QUATTRO S TRONIC"
  },
  {
      "id": 1190,
      "brandId": 9,
      "name": "A5 SPORTBACK 2.0 TFSI 230 QUATTROS TRONIC"
  },
  {
      "id": 1191,
      "brandId": 9,
      "name": "Q5 2.0 TFSI 230 QUATTRO TIPTRONIC"
  },
  {
      "id": 1192,
      "brandId": 9,
      "name": "Q7 2.0 TFSI 252 QUATTRO TIPTRONIC"
  },
  {
      "id": 1193,
      "brandId": 9,
      "name": "A6 2.0 TDI 190 QUATTRO S TRONIC"
  },
  {
      "id": 1194,
      "brandId": 9,
      "name": "A6 AVANT 2.0 TDI 190 QUATTRO S TRONIC"
  },
  {
      "id": 1195,
      "brandId": 9,
      "name": "A7 SPORTBACK 2.0 TFSI 252 QUATTRO S TRONIC"
  },
  {
      "id": 1196,
      "brandId": 9,
      "name": "A3 SEDAN 1.6 TDI 110 AMBITION S TRONIC"
  },
  {
      "id": 1197,
      "brandId": 9,
      "name": "A4 1.4 TFSI 150 S TRONIC"
  },
  {
      "id": 1198,
      "brandId": 9,
      "name": "A4 1.4 TFSI 150 DESIGN S TRONIC"
  },
  {
      "id": 1199,
      "brandId": 9,
      "name": "A4 1.4 TFSI 150 SPORT S TRONIC"
  },
  {
      "id": 1200,
      "brandId": 9,
      "name": "A4 2.0 TFSI 252 QUATTRO S TRONIC"
  },
  {
      "id": 1201,
      "brandId": 9,
      "name": "A4 2.0 TFSI 252 DESIGN QUATTRO S TRONIC"
  },
  {
      "id": 1202,
      "brandId": 9,
      "name": "A4 2.0 TFSI 252 SPORT QUATTRO S TRONIC"
  },
  {
      "id": 1203,
      "brandId": 9,
      "name": "A4 2.0 TDI 190 S TRONIC"
  },
  {
      "id": 1204,
      "brandId": 9,
      "name": "A4 2.0 TDI 190 DESIGN S TRONIC"
  },
  {
      "id": 1205,
      "brandId": 9,
      "name": "A4 2.0 TDI 190 SPORT S TRONIC"
  },
  {
      "id": 1206,
      "brandId": 9,
      "name": "A4 2.0 TDI 190 DESIGN QUATTRO S TRONIC"
  },
  {
      "id": 1207,
      "brandId": 9,
      "name": "A4 2.0 TDI 190 SPORT QUATTRO S TRONIC"
  },
  {
      "id": 1208,
      "brandId": 9,
      "name": "Q7 3.6"
  },
  {
      "id": 1209,
      "brandId": 9,
      "name": "A3 SPORTBACK 1.2 TFSI 110 AMBIENTE"
  },
  {
      "id": 1210,
      "brandId": 9,
      "name": "S3 SPORTBACK 2.0 TFSI 300 QUATTRO S TRONIC"
  },
  {
      "id": 1211,
      "brandId": 9,
      "name": "S3 SEDAN 2.0 TFSI 300 QUATTRO STRONIC"
  },
  {
      "id": 1212,
      "brandId": 9,
      "name": "TTS COUPE 2.0 TFSI 310 QUATTRO S TRONIC"
  },
  {
      "id": 1213,
      "brandId": 9,
      "name": "A4 AVANT 1.4 TFSI 150 STRONIC"
  },
  {
      "id": 1214,
      "brandId": 9,
      "name": "A4 AVANT 2.0 TFSI 252 QUATTRO STRONIC"
  },
  {
      "id": 1215,
      "brandId": 9,
      "name": "A4 AVANT 2.0 TDI 190 STRONIC"
  },
  {
      "id": 1216,
      "brandId": 9,
      "name": "RS6 AVANT PERFORMANCE 4.0 TFSI 605 QUATTROTIP"
  },
  {
      "id": 1217,
      "brandId": 9,
      "name": "RS7 SPORTBACK PERFORMANCE 4.0 TFSI 605 QUAT.T"
  },
  {
      "id": 1218,
      "brandId": 9,
      "name": "S8 PLUS 4.0 TFSI 605 QUATTRO TIPTRONIC"
  },
  {
      "id": 1219,
      "brandId": 9,
      "name": "A3 SPORTBACK 1.2 TFSI 110 ATTRACTION STRONIC"
  },
  {
      "id": 1220,
      "brandId": 9,
      "name": "A3 SPORTBACK 1.2 TFSI 110 AMBIENTE STRONIC"
  },
  {
      "id": 1221,
      "brandId": 9,
      "name": "A3 SPORTBACK 1.0 TFSI 116 S TRONIC PI"
  },
  {
      "id": 1222,
      "brandId": 9,
      "name": "A3 SPORTBACK 1.0TFSI 116 SPORTLINE STRONIC PI"
  },
  {
      "id": 1223,
      "brandId": 9,
      "name": "A3 SPORTBACK 1.0TFSI 116 DESIGNLINE STRONICPI"
  },
  {
      "id": 1224,
      "brandId": 9,
      "name": "A3 SPORTBACK 1.4 TFSI 150 STRONIC PI"
  },
  {
      "id": 1225,
      "brandId": 9,
      "name": "A3 SPORTBACK 1.4TFSI 150 SPORTLINE STRONIC PI"
  },
  {
      "id": 1226,
      "brandId": 9,
      "name": "A3 SPORTBACK 1.4TFSI150 DESIGNLINE STRONIC PI"
  },
  {
      "id": 1227,
      "brandId": 9,
      "name": "A3 SPORTBACK 1.6 TDI 110 S TRONIC PI"
  },
  {
      "id": 1228,
      "brandId": 9,
      "name": "A3 SPORTBACK 1.6 TDI 110 SPORT LINE S TRONIC"
  },
  {
      "id": 1229,
      "brandId": 9,
      "name": "A3 SPORTBACK 1.6 TDI 110 DESIGN LINE S TRONIC"
  },
  {
      "id": 1230,
      "brandId": 9,
      "name": "A3 SEDAN 1.0 TFSI 116 STRONIC PI"
  },
  {
      "id": 1231,
      "brandId": 9,
      "name": "A3 SEDAN 1.0 TFSI 116 SPOR TLINE STRONIC PI"
  },
  {
      "id": 1232,
      "brandId": 9,
      "name": "A3 SEDAN 1.0 TFSI 116 DESIGN LINE STRONIC PI"
  },
  {
      "id": 1233,
      "brandId": 9,
      "name": "A3 SEDAN 1.4 TFSI 150 STRONIC PI"
  },
  {
      "id": 1234,
      "brandId": 9,
      "name": "A3 SEDAN 1.4 TFSI 150 SPORT LINE STRONIC PI"
  },
  {
      "id": 1235,
      "brandId": 9,
      "name": "A3 SEDAN 1.4 TFSI 150 DESIGN LINE STRONIC PI"
  },
  {
      "id": 1236,
      "brandId": 9,
      "name": "A3 SEDAN 1.6 TDI 110 STRONIC PI"
  },
  {
      "id": 1237,
      "brandId": 9,
      "name": "A3 SEDAN 1.6 TDI 110 SPORT LINE STRONIC PI"
  },
  {
      "id": 1238,
      "brandId": 9,
      "name": "A3 SEDAN 1.6 TDI 110 DESIGN LINE STRONIC PI"
  },
  {
      "id": 1239,
      "brandId": 9,
      "name": "A3 CABRIO 1.4 TFSI 150 STRONIC PI"
  },
  {
      "id": 1240,
      "brandId": 9,
      "name": "A3 CABRIO 1.4 TFSI 150 SPORT LINE STRONIC PI"
  },
  {
      "id": 1241,
      "brandId": 9,
      "name": "A3 CABRIO 1.4 TFSI 150 DESIGN LINE STRONIC PI"
  },
  {
      "id": 1242,
      "brandId": 9,
      "name": "A3 SPORTBACK 1.0 TFSI 116 DYNAMIC S TRONIC PI"
  },
  {
      "id": 1243,
      "brandId": 9,
      "name": "A3 SPORTBACK 1.4 TFSI 150 DYNAMIC S TRONIC PI"
  },
  {
      "id": 1244,
      "brandId": 9,
      "name": "A3 SPORTBACK 1.6 TDI 110 DYNAMIC S TRONIC PI"
  },
  {
      "id": 1245,
      "brandId": 9,
      "name": "A3 SEDAN 1.0 TFSI 116 DYNAMIC S TRONIC"
  },
  {
      "id": 1246,
      "brandId": 9,
      "name": "A3 SEDAN 1.4 TFSI 150 DYNAMIC S TRONIC PI"
  },
  {
      "id": 1247,
      "brandId": 9,
      "name": "A3 SEDAN 1.6 TDI 110 DYNAMIC S TRONIC PI"
  },
  {
      "id": 1248,
      "brandId": 9,
      "name": "A3 CABRIO 1.4 TFSI 150 DYNAMIC S TRONIC PI"
  },
  {
      "id": 1249,
      "brandId": 9,
      "name": "A4 1.4 TFSI 150 DYNAMIC S TRONIC"
  },
  {
      "id": 1250,
      "brandId": 9,
      "name": "A4 2.0 TFSI 252 QUATTRO DYNAMIC S TRONIC"
  },
  {
      "id": 1251,
      "brandId": 9,
      "name": "A4 2.0 TDI 190 DYNAMIC S TRONIC"
  },
  {
      "id": 1252,
      "brandId": 9,
      "name": "A4 2.0 TDI 190 QUATTRO DYNAMIC S TRONIC"
  },
  {
      "id": 1253,
      "brandId": 9,
      "name": "A4 AVANT 1.4 TFSI 150 DYNAMIC S TRONIC"
  },
  {
      "id": 1254,
      "brandId": 9,
      "name": "A4 AVANT 2.0 TFSI 252 QUATTRO DYNAMIC STRONIC"
  },
  {
      "id": 1255,
      "brandId": 9,
      "name": "A4 AVANT 2.0 TDI 190 DYNAMIC S TRONIC"
  },
  {
      "id": 1256,
      "brandId": 9,
      "name": "A4 AVANT 2.0 TDI 190 QUATTRO DYNAMIC S TRONIC"
  },
  {
      "id": 1257,
      "brandId": 9,
      "name": "A4 ALLROAD 2.0 TFSI QUATTRO 252 S TRONIC"
  },
  {
      "id": 1258,
      "brandId": 9,
      "name": "A8 L 2.0 TFSI 252 QUATTRO TIPTRONIC"
  },
  {
      "id": 1259,
      "brandId": 9,
      "name": "A8 L 3.0 TDI 262 QUATTRO TIPTRONIC"
  },
  {
      "id": 1260,
      "brandId": 9,
      "name": "Q2 1.4 TFSI DYNAMIC S TRONIC"
  },
  {
      "id": 1261,
      "brandId": 9,
      "name": "Q2 1.4 TFSI 150 SPORT S TRONIC"
  },
  {
      "id": 1262,
      "brandId": 9,
      "name": "Q2 1.4 TFSI 150 DESIGN S TRONIC"
  },
  {
      "id": 1263,
      "brandId": 9,
      "name": "TT COUPE 2.0 TFSI 230 QUATTRO S TRONIC"
  },
  {
      "id": 1265,
      "brandId": 9,
      "name": "A4 AVANT 1.4 TFSI 150 DESIGN S TRONIC"
  },
  {
      "id": 1267,
      "brandId": 9,
      "name": "A4 AVANT 2.0 TDI 190 SPORT S TRONIC"
  },
  {
      "id": 1268,
      "brandId": 9,
      "name": "A4 AVANT 2.0 TDI 190 DESIGN S TRONIC"
  },
  {
      "id": 1269,
      "brandId": 9,
      "name": "A4 AVANT 2.0 TDI 190 QUATTRO SPORT S TRONIC"
  },
  {
      "id": 1270,
      "brandId": 9,
      "name": "A4 AVANT 2.0 TDI 190 QUATTRO DESIGN S TRONIC"
  },
  {
      "id": 1271,
      "brandId": 9,
      "name": "A5 COUPE 1.4 TFSI 150 DYNAMIC S TRONIC"
  },
  {
      "id": 1272,
      "brandId": 9,
      "name": "A5 COUPE 1.4 TFSI 150 SPORT S TRONIC"
  },
  {
      "id": 1273,
      "brandId": 9,
      "name": "A5 COUPE 1.4 TFSI 150 DESIGN S TRONIC"
  },
  {
      "id": 1274,
      "brandId": 9,
      "name": "A5 COUPE 2..0 TDI 190 QUATTRO DYNAMIC S TRONI"
  },
  {
      "id": 1275,
      "brandId": 9,
      "name": "A5 COUPE 2.0 TDI 190 QUATTRO SPORT S TRONIC"
  },
  {
      "id": 1276,
      "brandId": 9,
      "name": "A5 COUPE 2.0 TDI 190 QUATTRO DESIGN S TRONIC"
  },
  {
      "id": 1277,
      "brandId": 9,
      "name": "A5 SPORTBACK 1.4 TFSI 150 DYNAMIC S TRONIC"
  },
  {
      "id": 1278,
      "brandId": 9,
      "name": "A5 SPORTBACK 1.4 TFSI 150 SPORT S TRONIC"
  },
  {
      "id": 1279,
      "brandId": 9,
      "name": "A5 SPORTBACK 1.4 TFSI 150 DESIGN S TRONIC"
  },
  {
      "id": 1280,
      "brandId": 9,
      "name": "A5 SPORTBACK 2.0 TDI 190 DYNAMIC S TRONIC"
  },
  {
      "id": 1281,
      "brandId": 9,
      "name": "A5 SPORTBACK 2.0 TDI 190 SPORT S TRONIC"
  },
  {
      "id": 1282,
      "brandId": 9,
      "name": "A5 SPORTBACK 2.0 TDI 190 DESIGN S TRONIC"
  },
  {
      "id": 1283,
      "brandId": 9,
      "name": "A5 SPORTBACK 2.0 TDI 190 QUATTRO DYNAMIC STRO"
  },
  {
      "id": 1284,
      "brandId": 9,
      "name": "A5 SPORTBACK 2.0TDI 190 QUATTRO SPORT STRONIC"
  },
  {
      "id": 1285,
      "brandId": 9,
      "name": "A5 SPORTBACK 2.0TDI 190 QUATTRO DESIGN STRONI"
  },
  {
      "id": 1286,
      "brandId": 9,
      "name": "A3 SPORTBACK 1.6TDI 110 SPORTLINE STRONIC PI"
  },
  {
      "id": 1287,
      "brandId": 9,
      "name": "A3 SPORTBACK 1.6TDI 110 DESIGNLINE STRONIC PI"
  },
  {
      "id": 1288,
      "brandId": 9,
      "name": "A3 SEDAN 1.0 TFSI 116 DYNAMIC S TRONIC PI"
  },
  {
      "id": 1289,
      "brandId": 9,
      "name": "A1 SPORTBACK 1.0 TFSI 95 DYNAMIC S TRONIC"
  },
  {
      "id": 1290,
      "brandId": 9,
      "name": "A1 SPORTBACK 1.0 TFSI 95 SPORT S TRONIC"
  },
  {
      "id": 1291,
      "brandId": 9,
      "name": "A4 AVANT 1.4 TFSI 150 SPORT S TONIC"
  },
  {
      "id": 1292,
      "brandId": 9,
      "name": "A4 AVANT 2.0 TFSI 252 QUATTRO SPORT S TRONIC"
  },
  {
      "id": 1294,
      "brandId": 9,
      "name": "A6 2.0 TDI 190 S TRONIC"
  },
  {
      "id": 1295,
      "brandId": 9,
      "name": "A6 AVANT 2.0 TDI 190 S TRONIC"
  },
  {
      "id": 1296,
      "brandId": 9,
      "name": "A6 ALLROAD 3.0 TDI 272 QUATTRO S TRONIC"
  },
  {
      "id": 1297,
      "brandId": 9,
      "name": "A6 ALLROAD 3.0 TDI 320 QUATTRO TIPTRONIC"
  },
  {
      "id": 1298,
      "brandId": 9,
      "name": "A7 SPORTBACK 3.0 TDI 272 QUATTRO S TRONIC"
  },
  {
      "id": 1299,
      "brandId": 9,
      "name": "A7 SPORTBACK 3.0 TDI 320 QUATTRO TIPTRONIC"
  },
  {
      "id": 1301,
      "brandId": 9,
      "name": "A8 L 4.0 TFSI 435 QUATTRO TIPTRONIC"
  },
  {
      "id": 1302,
      "brandId": 9,
      "name": "A8 L 4.2 TDI 385 QUATTRO TIPTRONIC"
  },
  {
      "id": 1303,
      "brandId": 9,
      "name": "A8 L W12 6.3 FSI 500 QUATTRO TIPTRONIC"
  },
  {
      "id": 1304,
      "brandId": 9,
      "name": "Q3 1.4 TFSI 150 STRONIC"
  },
  {
      "id": 1305,
      "brandId": 9,
      "name": "Q3 2.0 TDI 184 QUATTRO S TRONIC"
  },
  {
      "id": 1306,
      "brandId": 9,
      "name": "Q5 2.0 TDI 190 QUATTRO S TRONIC"
  },
  {
      "id": 1307,
      "brandId": 9,
      "name": "R8 COUPE V10 5.2 FSI QUATTRO S TRONIC"
  },
  {
      "id": 1308,
      "brandId": 9,
      "name": "R8 COUPE V10 PLUS 5.2 FSI QUATTRO S TRONIC"
  },
  {
      "id": 1309,
      "brandId": 9,
      "name": "Q2 1.6 TDI 116 DYNAMIC STRONIC"
  },
  {
      "id": 1310,
      "brandId": 9,
      "name": "Q2 1.6 TDI 116 SPORT STRONIC"
  },
  {
      "id": 1311,
      "brandId": 9,
      "name": "Q2 1.6 TDI 116 DESIGN STRONIC"
  },
  {
      "id": 1312,
      "brandId": 9,
      "name": "Q5 2.0 TDI 190 QUATTRO DYNAMIC S TRONIC"
  },
  {
      "id": 1313,
      "brandId": 9,
      "name": "Q5 2.0 TDI 190 QUATTRO SPORT S TRONIC"
  },
  {
      "id": 1314,
      "brandId": 9,
      "name": "Q5 2.0 TDI 190 QUATTRO DESIGN S TRONIC"
  },
  {
      "id": 1315,
      "brandId": 9,
      "name": "A1 SPORTBACK 1.4 TFSI 125 DYNAMIC S TRONIC"
  },
  {
      "id": 1316,
      "brandId": 9,
      "name": "A1 SPORTBACK 1.6 TDI 116 DYNAMIC S TRONIC"
  },
  {
      "id": 1317,
      "brandId": 9,
      "name": "A3 SPORTBACK 1.6 TDI 116 DYNAMIC S TRONIC PI"
  },
  {
      "id": 1318,
      "brandId": 9,
      "name": "A3 SPORTBACK 1.6 TDI 116 SPORT LINE S TRONIC"
  },
  {
      "id": 1319,
      "brandId": 9,
      "name": "A3 SPORTBACK 1.6TDI 116 DESIGNLINE STRONIC PI"
  },
  {
      "id": 1320,
      "brandId": 9,
      "name": "A3 SEDAN 1.6 TDI 116 DYNAMIC S TRONIC"
  },
  {
      "id": 1321,
      "brandId": 9,
      "name": "A3 SEDAN 1.6 TDI 116 SPORT LINE S TRONIC PI"
  },
  {
      "id": 1322,
      "brandId": 9,
      "name": "A3 SEDAN 1.6 TDI 116 DESIGN LINE S TRONIC"
  },
  {
      "id": 1323,
      "brandId": 9,
      "name": "A4 AVANT 2.0 TFSI 252 QUATTRO DESIGN S TRONIC"
  },
  {
      "id": 1324,
      "brandId": 9,
      "name": "A5 COUPE 2.0 TDI 190 DYNAMIC S TRONIC"
  },
  {
      "id": 1325,
      "brandId": 9,
      "name": "A5 COUPE 2.0 TDI 190 SPORT S TRONIC"
  },
  {
      "id": 1326,
      "brandId": 9,
      "name": "A5 COUPE 2.0 TFSI 252 QUATTRO DYNAMIC STRONIC"
  },
  {
      "id": 1328,
      "brandId": 9,
      "name": "A5 COUPE 2.0 TFSI 252 QUATTRO DESIGN S TRONIC"
  },
  {
      "id": 1329,
      "brandId": 9,
      "name": "A5 SPORTBACK 2.0 TFSI QUATTRO DYNAMIC STRONIC"
  },
  {
      "id": 133,
      "brandId": 9,
      "name": "A4 1.6"
  },
  {
      "id": 1330,
      "brandId": 9,
      "name": "A5 SPORTBACK 2.0TFSI 252 QUATTROSPORT STRONIC"
  },
  {
      "id": 1331,
      "brandId": 9,
      "name": "A5 SPORTBACK 2.0TFSI 252 QUATTRODESIGN S TRON"
  },
  {
      "id": 1332,
      "brandId": 9,
      "name": "Q2 1.0 TFSI 116 DYNAMIC S TRONIC"
  },
  {
      "id": 1333,
      "brandId": 9,
      "name": "Q2 1.0 TFSI 116 SPORT S TRONIC"
  },
  {
      "id": 1334,
      "brandId": 9,
      "name": "Q2 1.0 TFSI 116 DESIGN S TRONIC"
  },
  {
      "id": 1335,
      "brandId": 9,
      "name": "A5 COUPE 2.0 TFSI 252 QUATTRO SPORT S TRONIC"
  },
  {
      "id": 1336,
      "brandId": 9,
      "name": "A6 2.0 TFSI 252 QUATTRO S TRONIC"
  },
  {
      "id": 1337,
      "brandId": 9,
      "name": "S3 SPORTBACK 2.0 TFSI 310 QUATTRO STRONIC PI"
  },
  {
      "id": 1338,
      "brandId": 9,
      "name": "S3 SEDAN 2.0 TFSI 310 QUATTRO S TRONIC PI"
  },
  {
      "id": 1339,
      "brandId": 9,
      "name": "A5 COUPE 2.0 TDI 190 DESIGN S TRONIC"
  },
  {
      "id": 1340,
      "brandId": 9,
      "name": "A3 SPORTBACK 1.5 TFSI 150 DYNAMIC S TRONIC PI"
  },
  {
      "id": 1341,
      "brandId": 9,
      "name": "A3 SPORTBACK 1.5 TFSI 150 SPORT LINE S TRONIC"
  },
  {
      "id": 1342,
      "brandId": 9,
      "name": "A3 SPORTBACK 1.5 TFSI DESIGN LINE S TRONIC"
  },
  {
      "id": 1343,
      "brandId": 9,
      "name": "A3 SEDAN 1.5 TFSI 150 DYNAMIC S TRONIC PI"
  },
  {
      "id": 1344,
      "brandId": 9,
      "name": "A3 SEDAN 1.5 TFSI SPORT LINE S TRONIC PI"
  },
  {
      "id": 1345,
      "brandId": 9,
      "name": "A3 SEDAN 1.5 TFSI 150 DESIGN LINE S TRONIC"
  },
  {
      "id": 1346,
      "brandId": 9,
      "name": "A3 CABRIO 1.5 TFSI 150 DYNAMIC S TRONIC PI"
  },
  {
      "id": 1347,
      "brandId": 9,
      "name": "A3 CABRIO 1.5 TFSI 150 SPORT LINE S TRONIC PI"
  },
  {
      "id": 1348,
      "brandId": 9,
      "name": "A3 CABRIO 1.5 TFSI 150 DESIGNLINE S TRONIC PI"
  },
  {
      "id": 1349,
      "brandId": 9,
      "name": "A6 AVANT 3.0 TDI QUATTRO 320 TIPTRONIC PI"
  },
  {
      "id": 135,
      "brandId": 9,
      "name": "A4 1.8 TURBO"
  },
  {
      "id": 1350,
      "brandId": 9,
      "name": "A8L 3.0 50 TDI (286) QUATTRO TIPTRONIC"
  },
  {
      "id": 1351,
      "brandId": 9,
      "name": "A7 SPORTBACK 3.0 50 TDI QUATTRO (286) TIPTRON"
  },
  {
      "id": 1352,
      "brandId": 9,
      "name": "A7 SPORTBACK 3.0 55 TFSI QUATTRO (340) S TRO"
  },
  {
      "id": 1355,
      "brandId": 9,
      "name": "A6 3.0 50 TDI QUATTRO TIPTRONIC DESIGN"
  },
  {
      "id": 1356,
      "brandId": 9,
      "name": "A6 3.0 50 TDI QUATTRO TIPTRONIC SPORT"
  },
  {
      "id": 1357,
      "brandId": 9,
      "name": "A3 SPORTBACK 1.6TDI  116 DYNAMIC PI"
  },
  {
      "id": 1358,
      "brandId": 9,
      "name": "A3 SPORTBACK 1.0 TFSI 116 DYNAMIC PI"
  },
  {
      "id": 1359,
      "brandId": 9,
      "name": "Q8 3.0 50 TDI QUATTRO (286) TIPTRONIC"
  },
  {
      "id": 1360,
      "brandId": 9,
      "name": "A3 CABRIO 35 1.5 TFSI 150 DESIGN STRONIC PI"
  },
  {
      "id": 1361,
      "brandId": 9,
      "name": "A3 CABRIO 35 1.5 TFSI 150 SPORT STRONIC PI"
  },
  {
      "id": 1362,
      "brandId": 9,
      "name": "A3 SPORTBACK 30 1.6 TDI DESIGN STRONIC PI"
  },
  {
      "id": 1363,
      "brandId": 9,
      "name": "A3 SPORTBACK 30 1.6TDI 116 DYNAMIC STRONIC PI"
  },
  {
      "id": 1364,
      "brandId": 9,
      "name": "A3 SPORTBACK 30 TDI 1.6 116 SPORT STRONIC PI"
  },
  {
      "id": 1365,
      "brandId": 9,
      "name": "A3 SPORTBACK 30 1.0TFSI 116 DESIGN STRONIC PI"
  },
  {
      "id": 1366,
      "brandId": 9,
      "name": "A3 SPORTBACK 30 1.0TFSI 116 DYNAMICSTRONIC PI"
  },
  {
      "id": 1367,
      "brandId": 9,
      "name": "A3 SPORTBACK 30 1.0 TFSI 116 SPORT STRONIC PI"
  },
  {
      "id": 1368,
      "brandId": 9,
      "name": "A3 SPORTBACK 35 1.5TFSI COD DESIGN STRONIC PI"
  },
  {
      "id": 1369,
      "brandId": 9,
      "name": "A3 SPORTBACK 35 1.5 TFSI COD SPORT STRONIC PI"
  },
  {
      "id": 1370,
      "brandId": 9,
      "name": "A3 SPORTBACK 35 1.5TFSI150 DYNAMIC COD STR PI"
  },
  {
      "id": 1371,
      "brandId": 9,
      "name": "S3 SEDAN 2.0 TFSI 300 QUATTRO STRONIC PI"
  },
  {
      "id": 1372,
      "brandId": 9,
      "name": "RS3 SEDAN 2.5 TFSI QUATTRO 400 STRONIC PI"
  },
  {
      "id": 1373,
      "brandId": 9,
      "name": "A3 SEDAN 30 1.6 TDI 116 DESIGN STRONIC PI"
  },
  {
      "id": 1374,
      "brandId": 9,
      "name": "A3 SEDAN 30 1.6 TDI 116 SPORT STRONIC PI"
  },
  {
      "id": 1375,
      "brandId": 9,
      "name": "A3 SEDAN 30 1.0 TFSI 116 DESIGN STRONIC PI"
  },
  {
      "id": 1376,
      "brandId": 9,
      "name": "A3 SEDAN 30 1.0 TFSI 116 SPORT STONIC PI"
  },
  {
      "id": 1377,
      "brandId": 9,
      "name": "A3 SEDAN 35 1.5 TFSI 150 DESIGN STRONIC PI"
  },
  {
      "id": 1378,
      "brandId": 9,
      "name": "A3 SEDAN 35 1.5 TFSI 150 SPORT STRONIC PI"
  },
  {
      "id": 1379,
      "brandId": 9,
      "name": "RS3 SPORTBACK 2.5 TFSI QUATTRO 400 STRONIC PI"
  },
  {
      "id": 1380,
      "brandId": 9,
      "name": "S3 SPORTBACK 2.0 TFSI 300 STRONIC PI"
  },
  {
      "id": 1381,
      "brandId": 9,
      "name": "A4 40 2.0 TDI 190 QUATTRO STRONIC DESIGN"
  },
  {
      "id": 1382,
      "brandId": 9,
      "name": "A4 40 2.0 TDI 190 QUATTRO STRONIC SPORT"
  },
  {
      "id": 1383,
      "brandId": 9,
      "name": "A4 40 2.0 TDI 190 STRONIC DESIGN"
  },
  {
      "id": 1384,
      "brandId": 9,
      "name": "A4 40 2.0 TDI 190 STRONIC SPORT"
  },
  {
      "id": 1385,
      "brandId": 9,
      "name": "A4 ALLROAD 40 2.0 TDI QUATTRO 190 STRONIC"
  },
  {
      "id": 1386,
      "brandId": 9,
      "name": "A5 SPORTBACK 40 2.0TDI QUATTRO 190 STR DESIGN"
  },
  {
      "id": 1387,
      "brandId": 9,
      "name": "A5 SPORTBACK 40 2.0 TDI QUATTRO 190 STR SPORT"
  },
  {
      "id": 1388,
      "brandId": 9,
      "name": "A5 COUPE 45 2.0TFSI QUATTRO 245 STRONIC SPORT"
  },
  {
      "id": 1389,
      "brandId": 9,
      "name": "A6 40 2.0 TDI 204 DESIGN STRONIC"
  },
  {
      "id": 139,
      "brandId": 9,
      "name": "A4 1.9 TDI"
  },
  {
      "id": 1390,
      "brandId": 9,
      "name": "A6 40 2.0 TDI 204 SPORT STRONIC"
  },
  {
      "id": 1391,
      "brandId": 9,
      "name": "A6 40 2.0 TDI QUATTRO 204 DESIGN STRONIC"
  },
  {
      "id": 1392,
      "brandId": 9,
      "name": "A6 40 2.0 TDI QUATTRO 204 SPORT STRONIC"
  },
  {
      "id": 1393,
      "brandId": 9,
      "name": "Q2 30 1.6 TDI 116 STRONIC DESIGN"
  },
  {
      "id": 1394,
      "brandId": 9,
      "name": "Q2 30 1.6 TDI 116 STRONIC DYNAMIC"
  },
  {
      "id": 1395,
      "brandId": 9,
      "name": "Q2 30 1.6 TDI 116 STRONIC SPORT"
  },
  {
      "id": 1396,
      "brandId": 9,
      "name": "Q2 30 1.0 TFSI 116 SRONIC DESIGN"
  },
  {
      "id": 1397,
      "brandId": 9,
      "name": "Q2 30 1.0 TFSI 116 STRONIC DYNAMIC"
  },
  {
      "id": 1398,
      "brandId": 9,
      "name": "Q2 30 1.0 TFSI 116 STRONIC SPORT"
  },
  {
      "id": 1399,
      "brandId": 9,
      "name": "Q2 35 1.5 TFSI 150 COD STRONIC DESIGN"
  },
  {
      "id": 1400,
      "brandId": 9,
      "name": "Q2 35 1.5 TFSI 150 COD STRONIC DYNAMIC"
  },
  {
      "id": 1401,
      "brandId": 9,
      "name": "Q2 35 1.5 TFSI 150 COD STRONIC SPORT"
  },
  {
      "id": 1402,
      "brandId": 9,
      "name": "Q5 40 2.0 TDI QUATTRO 190 STRONIC DESIGN"
  },
  {
      "id": 1403,
      "brandId": 9,
      "name": "Q5 40 2.0 TDI QUATTRO 190 STRONIC SPORT"
  },
  {
      "id": 1404,
      "brandId": 9,
      "name": "Q7 50 3.0 TDI 286 QUATTRO TIPTRONIC"
  },
  {
      "id": 1405,
      "brandId": 9,
      "name": "A5 COUPE 40 2.0 TDI QUATTRO 190 STR DESIGN"
  },
  {
      "id": 1406,
      "brandId": 9,
      "name": "A5 COUPE 40 2.0 TDI QUATTRO 190 STR SPORT"
  },
  {
      "id": 1407,
      "brandId": 9,
      "name": "A5 SPORTBACK 45 2.0TFSIQUATTRO245 STR DESIGN"
  },
  {
      "id": 1408,
      "brandId": 9,
      "name": "A6 AVANT 40 2.0 TDI 204 QUATTRO DESIGN STR"
  },
  {
      "id": 1409,
      "brandId": 9,
      "name": "A6 AVANT 40 2.0 TDI 204 QUATTRO SPORT STRONIC"
  },
  {
      "id": 1410,
      "brandId": 9,
      "name": "A6 AVANT 45 2.0 TFSI 245 QUATTRO DESIGN STR"
  },
  {
      "id": 1411,
      "brandId": 9,
      "name": "A6 AVANT 45 2.0 TFSI 245 QUATTRO SPORT STR"
  },
  {
      "id": 1412,
      "brandId": 9,
      "name": "A6 45 2.0 TFSI 245 QUATTRO DESIGN STRONIC"
  },
  {
      "id": 1413,
      "brandId": 9,
      "name": "A6 45 2.0 TFSI 245 QUATTRO SPORT STRONIC"
  },
  {
      "id": 1414,
      "brandId": 9,
      "name": "A3 SEDAN 30 1.0 TFSI 116 DYNAMIC STRONIC PI"
  },
  {
      "id": 1415,
      "brandId": 9,
      "name": "E-TRON ADVANCED 55 QUATTRO"
  },
  {
      "id": 1416,
      "brandId": 9,
      "name": "Q7 2.0 45 TFSI QUATTRO 252 TIPTRONIC"
  },
  {
      "id": 1417,
      "brandId": 9,
      "name": "A7 SPORTBACK 2.0 40 TDI QUATTRO 204 STRONIC"
  },
  {
      "id": 1418,
      "brandId": 9,
      "name": "A3 SEDAN 1.5 35 TFSI 150 DYNAMIC STRONIC PI"
  },
  {
      "id": 1419,
      "brandId": 9,
      "name": "A3 SEDAN 1.6 30 TDI 116 DYNAMIC STRONIC PI"
  },
  {
      "id": 142,
      "brandId": 9,
      "name": "A4 1.8 TURBO QUATTRO"
  },
  {
      "id": 1420,
      "brandId": 9,
      "name": "A4 40 2.0 TDI 190 DYNAMIC STRONIC"
  },
  {
      "id": 1421,
      "brandId": 9,
      "name": "A4 40 2.0 TDI 190 QUATTRO DYNAMIC STRONIC"
  },
  {
      "id": 1422,
      "brandId": 9,
      "name": "A4 45 2.0 TFSI 245 QUATTRO DYNAMIC STRONIC"
  },
  {
      "id": 1423,
      "brandId": 9,
      "name": "A4 45 2.0 TFSI 245 QUATTRO SPORT STRONIC"
  },
  {
      "id": 1424,
      "brandId": 9,
      "name": "A4 45 2.0  TFSI 245 QUATTRO DESIGN STRONIC"
  },
  {
      "id": 1425,
      "brandId": 9,
      "name": "A4 AVANT 40 2.0 TDI 190 DYNAMIC STRONIC"
  },
  {
      "id": 1426,
      "brandId": 9,
      "name": "A4 AVANT 40 2.0 TDI 190 SPORT STRONIC"
  },
  {
      "id": 1427,
      "brandId": 9,
      "name": "A4 AVANT 40 2.0 TDI 190 DESIGN STRONIC"
  },
  {
      "id": 1428,
      "brandId": 9,
      "name": "A4 AVANT 40 2.0 TDI 190 QUATTRO DYNAMIC STRON"
  },
  {
      "id": 1429,
      "brandId": 9,
      "name": "A4 AVANT 40 2.0 TDI 190 QUATTRO SPORT STRONIC"
  },
  {
      "id": 1430,
      "brandId": 9,
      "name": "A4 AVANT 40 2.0TDI 190 QUATTRO DESIGN STRONIC"
  },
  {
      "id": 1431,
      "brandId": 9,
      "name": "A4 AVANT 45 2.0 TFSI 245 QUATTRO DYNAMIC STRO"
  },
  {
      "id": 1432,
      "brandId": 9,
      "name": "A4 AVANT 45 2.0TFSI 245 QUATTRO SPORT STRONIC"
  },
  {
      "id": 1433,
      "brandId": 9,
      "name": "A4 AVANT 45 TFSI 245 QUATTRO DESIGN STRONIC"
  },
  {
      "id": 1434,
      "brandId": 9,
      "name": "A4 ALLROAD 45 2.0 TFSI 245 STRONIC"
  },
  {
      "id": 1435,
      "brandId": 9,
      "name": "A5 COUPE 45 2.0 TFSI QUATTRO DESIGN STRONIC"
  },
  {
      "id": 1436,
      "brandId": 9,
      "name": "A5 SPORTBACK 45 2.0TFSI 245 QUATTRO SPORT STR"
  },
  {
      "id": 1438,
      "brandId": 9,
      "name": "A8 L 3.0 55 TFSI 340 QUATTRO TIPTRONIC"
  },
  {
      "id": 1439,
      "brandId": 9,
      "name": "A4 40 2.0 TDI 190 QUATTRO STRONIC ADVANCED"
  },
  {
      "id": 1440,
      "brandId": 9,
      "name": "A4 40 2.0 TDI 190 STRONIC ADVANCED"
  },
  {
      "id": 1441,
      "brandId": 9,
      "name": "A4 45 2.0 TFSI 245 QUATTRO STRONIC ADVANCED"
  },
  {
      "id": 1442,
      "brandId": 9,
      "name": "A4 40 2.0 TDI 190 QUATTRO S LINE STRONIC"
  },
  {
      "id": 1443,
      "brandId": 9,
      "name": "A4 40 2.0 TDI 190 S LINE STRONIC"
  },
  {
      "id": 1444,
      "brandId": 9,
      "name": "A4 45 2.0 TFSI QUATTRO S LINE STRONIC"
  },
  {
      "id": 1445,
      "brandId": 9,
      "name": "A4 40 2.0 TDI 190 ADVANCED S TRONIC PI"
  },
  {
      "id": 1446,
      "brandId": 9,
      "name": "A4 40 2.0 TDI 190 S LINE STRONIC PI"
  },
  {
      "id": 1447,
      "brandId": 9,
      "name": "A4 40 2.0 TDI 190 QUATTRO ADVANCED STRONIC PI"
  },
  {
      "id": 1448,
      "brandId": 9,
      "name": "A4 40 2.0 TDI 190 QUATTRO  S LINE STRONIC PI"
  },
  {
      "id": 1449,
      "brandId": 9,
      "name": "A4 45 2.0TFSI 245 QUATTRO ADVANCED STRONIC PI"
  },
  {
      "id": 1450,
      "brandId": 9,
      "name": "A4 45 2.0 TFSI 245 QUATTRO S LINE STRONIC PI"
  },
  {
      "id": 1451,
      "brandId": 9,
      "name": "A6 50 3.0 TDI 286 QUATTRO SPORT TIPTRONIC"
  },
  {
      "id": 1452,
      "brandId": 9,
      "name": "A6 50 3.0 TDI 286 QUATTRO DESIGN TIPTRONIC"
  },
  {
      "id": 1453,
      "brandId": 9,
      "name": "Q5 45 2.0 TFSI 245 QUATTRO SPORT S TRONIC"
  },
  {
      "id": 1454,
      "brandId": 9,
      "name": "Q5 45 2.0 TFSI 245 QUATTRO DESIGN S TRONIC"
  },
  {
      "id": 1455,
      "brandId": 9,
      "name": "S6 TDI QUATTRO TIPTRONIC"
  },
  {
      "id": 1456,
      "brandId": 9,
      "name": "Q7 S LINE 50 TDI 286 QUATTRO TIPTRONIC PI"
  },
  {
      "id": 1457,
      "brandId": 9,
      "name": "RS Q8"
  },
  {
      "id": 1458,
      "brandId": 9,
      "name": "SQ8"
  },
  {
      "id": 1459,
      "brandId": 9,
      "name": "A4 ALLROAD 45 TFSI QUATTRO 245 STRONIC PI"
  },
  {
      "id": 1460,
      "brandId": 9,
      "name": "A4 ALLROAD 40 TDI QUATTRO 190 STRONIC PI"
  },
  {
      "id": 1461,
      "brandId": 9,
      "name": "A4 AVANT 40 TDI 190 ADVANCED STRONIC PI"
  },
  {
      "id": 1462,
      "brandId": 9,
      "name": "A4 AVANT40 TDI QUATTRO 190 ADVANCED STRONICPI"
  },
  {
      "id": 1463,
      "brandId": 9,
      "name": "A4 AVANT 40 TDI 190 S LINE STRONIC PI"
  },
  {
      "id": 1464,
      "brandId": 9,
      "name": "A4 AVANT40 TDI QUATTRO 190 S LINE STRONIC PI"
  },
  {
      "id": 1465,
      "brandId": 9,
      "name": "A5 COUPE 40TDIQUATTRO 190 ADVANCED STRONIC PI"
  },
  {
      "id": 1466,
      "brandId": 9,
      "name": "A5 SPORTBACK 40TDI 190 QUATTROADVANCED STR PI"
  },
  {
      "id": 1467,
      "brandId": 9,
      "name": "A5 SPORTBACK 40 TDI QUATTRO 190 S LINE STRONI"
  },
  {
      "id": 1468,
      "brandId": 9,
      "name": "RS6 AVANT 40 TFSI QUAATTRO 600 TIPTRONIC"
  },
  {
      "id": 1469,
      "brandId": 9,
      "name": "A6 55 TFSI E QUATTRO S LINE"
  },
  {
      "id": 1470,
      "brandId": 9,
      "name": "A5 COUPE 40 TDI 190 QUATTRO ADVANCED STR PI"
  },
  {
      "id": 1471,
      "brandId": 9,
      "name": "A5 COUPE 45 TFSI 245 QUATTRO S LINE STR PI"
  },
  {
      "id": 1472,
      "brandId": 9,
      "name": "A5 COUPE 40 TDI 190 QUATTRO S LINE STR PI"
  },
  {
      "id": 1473,
      "brandId": 9,
      "name": "A5SPORTBACK 45TFSI 245 QUATTROADVANCED STR PI"
  },
  {
      "id": 1474,
      "brandId": 9,
      "name": "A5 SPORTBACK 45 TFSI 245 QUATTRO SLINE STR PI"
  },
  {
      "id": 1475,
      "brandId": 9,
      "name": "A6 ALLROAD QUATTRO 55 TFSI 340 STRONIC"
  },
  {
      "id": 1476,
      "brandId": 9,
      "name": "A6 ALLROAD QUATTRO 50 TDI 286 TIPTRONIC"
  },
  {
      "id": 1477,
      "brandId": 9,
      "name": "A5 SPORTBACK 2.7 TDI"
  },
  {
      "id": 1478,
      "brandId": 9,
      "name": "A4 45 TFSI QUATTRO 265 ADVANCED STRONIC PI"
  },
  {
      "id": 1479,
      "brandId": 9,
      "name": "A4 45 TFSI QUATTRO 265 SLINE STRONIC PI"
  },
  {
      "id": 1480,
      "brandId": 9,
      "name": "A5 COUPE 45TFSI QUATTRO265ADVANCED STRONIC PI"
  },
  {
      "id": 1481,
      "brandId": 9,
      "name": "A5 COUPE TFSI QUATTRO 265 SLINE STRONIC PI"
  },
  {
      "id": 1482,
      "brandId": 9,
      "name": "A5 SPORTBACK 45 TFSIQUATTRO265ADVANCED STR PI"
  },
  {
      "id": 1483,
      "brandId": 9,
      "name": "A5 SPORTBACK 45 TFSI QUATTRO 265 SLINE STR PI"
  },
  {
      "id": 1484,
      "brandId": 9,
      "name": "A6 AVANT 45 TFSI QUATTRO 265 SPORT STRONIC"
  },
  {
      "id": 1485,
      "brandId": 9,
      "name": "A6 AVANT 45 TFSI QUATTRO 265 DESIGN STRONIC"
  },
  {
      "id": 1486,
      "brandId": 9,
      "name": "A6 SEDAN 45 TFSI QUATTRO 265 SPORT STRONIC"
  },
  {
      "id": 1487,
      "brandId": 9,
      "name": "A6 SEDAN 45 TFSI QUATTRO 265 DESIGN STRONIC"
  },
  {
      "id": 1488,
      "brandId": 9,
      "name": "SQ5 TDI"
  },
  {
      "id": 1499,
      "brandId": 9,
      "name": "E-TRON SPORTBACK ADVANCED 55 QUATTRO"
  },
  {
      "id": 1500,
      "brandId": 9,
      "name": "A5 CABRIO 45 TFSI QUATTRO 265 ADVANCED STR PI"
  },
  {
      "id": 1501,
      "brandId": 9,
      "name": "A5 CABRIO 40 TDI QUATTRO 204 ADVANCED STR PI"
  },
  {
      "id": 1502,
      "brandId": 9,
      "name": "A5 CABRIO 45 TFSI QUATTRO 265 SLINE STR PI"
  },
  {
      "id": 1503,
      "brandId": 9,
      "name": "A5 CABRIO 40 TDI QUATTRO 204 SLINE STRONIC PI"
  },
  {
      "id": 1504,
      "brandId": 9,
      "name": "A6 ALLROAD QUATTRO 40 TDI 204 STRONIC"
  },
  {
      "id": 1505,
      "brandId": 9,
      "name": "E-TRON SPORTBACK SLINE 55 QUATTRO"
  },
  {
      "id": 1506,
      "brandId": 9,
      "name": "E-TRON SLINE 50 QUATTRO"
  },
  {
      "id": 1507,
      "brandId": 9,
      "name": "Q3 SPORTBACK 35 TDI SLINE QUATTRO"
  },
  {
      "id": 227,
      "brandId": 9,
      "name": "A6 AVANT 2.4 QUATTRO TIPTRONIC"
  },
  {
      "id": 228,
      "brandId": 9,
      "name": "A6 AVANT 3.0 MULTITRONIC"
  },
  {
      "id": 230,
      "brandId": 9,
      "name": "A6 AVANT 2.7 BiT QUATTRO TIPTRONIC"
  },
  {
      "id": 234,
      "brandId": 9,
      "name": "A4 2.4 MULTITRONIC"
  },
  {
      "id": 235,
      "brandId": 9,
      "name": "A4 AVANT 3.0 QUATTRO"
  },
  {
      "id": 237,
      "brandId": 9,
      "name": "A6 2.0 MULTITRONIC"
  },
  {
      "id": 238,
      "brandId": 9,
      "name": "A6 AVANT 3.0 QUATTRO TIPTRONIC"
  },
  {
      "id": 239,
      "brandId": 9,
      "name": "A6 AVANT 4.2 QUATTRO TIPTRONIC"
  },
  {
      "id": 240,
      "brandId": 9,
      "name": "S6 AVANT QUATTRO TIPTRONIC"
  },
  {
      "id": 241,
      "brandId": 9,
      "name": "A4 AVANT 2.0 MULTITRONIC"
  },
  {
      "id": 242,
      "brandId": 9,
      "name": "A4 AVANT 2.4 MULTITRONIC"
  },
  {
      "id": 243,
      "brandId": 9,
      "name": "ALLROAD 2.5 TDI QUATTRO TIPTRONIC"
  },
  {
      "id": 246,
      "brandId": 9,
      "name": "A4 CABRIOLET 2.4 MULTITRONIC"
  },
  {
      "id": 247,
      "brandId": 9,
      "name": "A4 CABRIOLET 3.0 MULTITRONIC"
  },
  {
      "id": 248,
      "brandId": 9,
      "name": "A4 3.0 MULTITRONIC"
  },
  {
      "id": 249,
      "brandId": 9,
      "name": "A4 2.5 TDI MULTITRONIC"
  },
  {
      "id": 250,
      "brandId": 9,
      "name": "A4 2.5 TDI QUATTRO TIPTRONIC"
  },
  {
      "id": 255,
      "brandId": 9,
      "name": "A8 3.7 QUATTRO TIPTRONIC"
  },
  {
      "id": 256,
      "brandId": 9,
      "name": "A3 1.6"
  },
  {
      "id": 257,
      "brandId": 9,
      "name": "A3 1.6 TIPTRONIC"
  },
  {
      "id": 258,
      "brandId": 9,
      "name": "A3 2.0 FSI"
  },
  {
      "id": 259,
      "brandId": 9,
      "name": "A3 2.0 FSI TIPTRONIC"
  },
  {
      "id": 260,
      "brandId": 9,
      "name": "A3 2.0 TDI"
  },
  {
      "id": 261,
      "brandId": 9,
      "name": "A4 CABRIOLET 1.8T MULTITRONIC"
  },
  {
      "id": 262,
      "brandId": 9,
      "name": "A4 CABRIOLET 1.8T QUATTRO"
  },
  {
      "id": 263,
      "brandId": 9,
      "name": "S4 QUATTRO TIPTRONIC"
  },
  {
      "id": 264,
      "brandId": 9,
      "name": "S4 AVANT QUATTRO"
  },
  {
      "id": 265,
      "brandId": 9,
      "name": "S4 AVANT QUATTRO TIPTRONIC"
  },
  {
      "id": 266,
      "brandId": 9,
      "name": "TT COUPE 1.8T TIPTRONIC"
  },
  {
      "id": 267,
      "brandId": 9,
      "name": "TT ROADSTAR 1.8T TIPTRONIC"
  },
  {
      "id": 268,
      "brandId": 9,
      "name": "A6 AVANT 2.5 TDI TIPTRONIC"
  },
  {
      "id": 271,
      "brandId": 9,
      "name": "A4 AVANT 3.0 MULTITRONIC"
  },
  {
      "id": 272,
      "brandId": 9,
      "name": "A8 3.0 MULTITRONIC"
  },
  {
      "id": 273,
      "brandId": 9,
      "name": "A8 3.0 LONG MULTITRONIC"
  },
  {
      "id": 275,
      "brandId": 9,
      "name": "A6 3.0 TDI QUATTRO TIPTRONIC"
  },
  {
      "id": 276,
      "brandId": 9,
      "name": "A6 3.2 FSI"
  },
  {
      "id": 277,
      "brandId": 9,
      "name": "A6 3.2 FSI QUATTRO"
  },
  {
      "id": 278,
      "brandId": 9,
      "name": "A6 3.2 FSI QUATTRO TIPTRONIC"
  },
  {
      "id": 279,
      "brandId": 9,
      "name": "A3 1.6 FSI"
  },
  {
      "id": 280,
      "brandId": 9,
      "name": "A3 1.9 TDI (105)"
  },
  {
      "id": 281,
      "brandId": 9,
      "name": "A4 1.8T SPORT MULTITRONIC"
  },
  {
      "id": 282,
      "brandId": 9,
      "name": "A4 AVANT 1.8T SPORT"
  },
  {
      "id": 283,
      "brandId": 9,
      "name": "A4 AVANT 1.8 T SPORT MULTITRONIC"
  },
  {
      "id": 285,
      "brandId": 9,
      "name": "A6 2.4"
  },
  {
      "id": 286,
      "brandId": 9,
      "name": "A3 1.9 TDI TIPTRONIC (105)"
  },
  {
      "id": 287,
      "brandId": 9,
      "name": "A3 SPORTBACK 1.6"
  },
  {
      "id": 288,
      "brandId": 9,
      "name": "A3 SPORTBACK 1.6 FSI"
  },
  {
      "id": 289,
      "brandId": 9,
      "name": "A3 SPORTBACK 1.6 TIPTRONIC"
  },
  {
      "id": 290,
      "brandId": 9,
      "name": "A3 SPORTBACK 2.0 FSI"
  },
  {
      "id": 291,
      "brandId": 9,
      "name": "A3 SPORTBACK 2.0 FSI TIPTRONIC"
  },
  {
      "id": 292,
      "brandId": 9,
      "name": "A3 SPORTBACK 1.9 TDI (105)"
  },
  {
      "id": 293,
      "brandId": 9,
      "name": "A3 SPORTBACK 2.0 TDI"
  },
  {
      "id": 294,
      "brandId": 9,
      "name": "A4 AVANT 2.5 TDI MULTITRONIC"
  },
  {
      "id": 295,
      "brandId": 9,
      "name": "A6 2.0 TDI"
  },
  {
      "id": 296,
      "brandId": 9,
      "name": "A8 LONG 6.0 QUATTRO TIPTRONIC"
  },
  {
      "id": 297,
      "brandId": 9,
      "name": "A8 3.0 TDI QUATTRO TIPTRONIC"
  },
  {
      "id": 298,
      "brandId": 9,
      "name": "A4 2.0T FSI"
  },
  {
      "id": 299,
      "brandId": 9,
      "name": "A4 2.0T FSI MULTITRONIC"
  },
  {
      "id": 300,
      "brandId": 9,
      "name": "A4 2.0T FSI QUATTRO"
  },
  {
      "id": 301,
      "brandId": 9,
      "name": "A4 2.0T FSI QUATTRO TIPTRONIC"
  },
  {
      "id": 302,
      "brandId": 9,
      "name": "A4 3.2 FSI MULTITRONIC"
  },
  {
      "id": 303,
      "brandId": 9,
      "name": "A4 3.2 FSI QUATTRO"
  },
  {
      "id": 304,
      "brandId": 9,
      "name": "A4 3.2 FSI QUATTRO TIPTRONIC"
  },
  {
      "id": 305,
      "brandId": 9,
      "name": "A4 3.0 TDI QUATTRO"
  },
  {
      "id": 306,
      "brandId": 9,
      "name": "A4 3.0 TDI QUATTRO TIPTRONIC"
  },
  {
      "id": 307,
      "brandId": 9,
      "name": "A3 2.0 TDI QUATTRO"
  },
  {
      "id": 308,
      "brandId": 9,
      "name": "A3 2.0 TDI DSG"
  },
  {
      "id": 309,
      "brandId": 9,
      "name": "A3 SPORTBACK 2.0 TDI DSG"
  },
  {
      "id": 310,
      "brandId": 9,
      "name": "A4 1.9 TDI (115)"
  },
  {
      "id": 311,
      "brandId": 9,
      "name": "A4 2.0 TDI"
  },
  {
      "id": 312,
      "brandId": 9,
      "name": "A4 2.0 TDI MULTITRONIC"
  },
  {
      "id": 313,
      "brandId": 9,
      "name": "A3 SPORTBACK 2.0 TDI QUATTRO"
  },
  {
      "id": 314,
      "brandId": 9,
      "name": "A4 2.0 T FSI QUATTRO-DTM EDITION"
  },
  {
      "id": 315,
      "brandId": 9,
      "name": "A4 AVANT 2.0"
  },
  {
      "id": 316,
      "brandId": 9,
      "name": "A4 AVANT 2.0 T FSI"
  },
  {
      "id": 317,
      "brandId": 9,
      "name": "A4 AVANT 2.0 T FSI MULTITRONIC"
  },
  {
      "id": 318,
      "brandId": 9,
      "name": "A4 AVANT 2.0 T FSI QUATTRO"
  },
  {
      "id": 319,
      "brandId": 9,
      "name": "A4 AVANT 2.0 T FSI QUATTRO TIPTRONIC"
  },
  {
      "id": 320,
      "brandId": 9,
      "name": "A4 AVANT 3.2 FSI MULTITRONIC"
  },
  {
      "id": 321,
      "brandId": 9,
      "name": "A4 AVANT 3.2 FSI QUATTRO"
  },
  {
      "id": 322,
      "brandId": 9,
      "name": "A4 AVANT 3.2 FSI QUATTRO TIPTRONIC"
  },
  {
      "id": 323,
      "brandId": 9,
      "name": "A4 AVANT 2.0 TDI"
  },
  {
      "id": 324,
      "brandId": 9,
      "name": "A4 AVANT 2.0 TDI MULTITRONIC"
  },
  {
      "id": 325,
      "brandId": 9,
      "name": "A4 AVANT 3.0 TDI QUATTRO"
  },
  {
      "id": 326,
      "brandId": 9,
      "name": "A4 AVANT 3.0 TDI QUATTRO TIPTRONIC"
  },
  {
      "id": 327,
      "brandId": 9,
      "name": "A6 2.0 T FSI"
  },
  {
      "id": 328,
      "brandId": 9,
      "name": "A6 2.0 T FSI MULTIRONIC"
  },
  {
      "id": 329,
      "brandId": 9,
      "name": "A6 AVANT 2.0 TDI"
  },
  {
      "id": 330,
      "brandId": 9,
      "name": "A6 AVANT 2.0 T FSI"
  },
  {
      "id": 331,
      "brandId": 9,
      "name": "A6 AVANT 2.0 T FSI MULTITRONIC"
  },
  {
      "id": 332,
      "brandId": 9,
      "name": "A8 3.2 FSI MULTITRONIC"
  },
  {
      "id": 333,
      "brandId": 9,
      "name": "A8 3.2 FSI QUATTRO TIPTRONIC"
  },
  {
      "id": 334,
      "brandId": 9,
      "name": "A8 L 3.2 FSI MULTITRONIC"
  },
  {
      "id": 335,
      "brandId": 9,
      "name": "A6 AVANT 2.4"
  },
  {
      "id": 336,
      "brandId": 9,
      "name": "A6 AVANT 3.2 FSI"
  },
  {
      "id": 337,
      "brandId": 9,
      "name": "A6 AVANT 3.2 FSI QUATTRO"
  },
  {
      "id": 338,
      "brandId": 9,
      "name": "A6 AVANT 3.2 FSI QUATTRO TIPTRONIC"
  },
  {
      "id": 339,
      "brandId": 9,
      "name": "Q7 3.0 TDI QUATTRO TIPTRONIC"
  },
  {
      "id": 340,
      "brandId": 9,
      "name": "Q7 4.2 FSI QUATTRO TIPTRONIC"
  },
  {
      "id": 341,
      "brandId": 9,
      "name": "A3 2.0 T FSI"
  },
  {
      "id": 342,
      "brandId": 9,
      "name": "A3 2.0 T FSI DSG AMBITION"
  },
  {
      "id": 343,
      "brandId": 9,
      "name": "A3 2.0 T FSI DSG AMBIENTE"
  },
  {
      "id": 344,
      "brandId": 9,
      "name": "A3 2.0 T FSI QUATTRO AMBITION"
  },
  {
      "id": 345,
      "brandId": 9,
      "name": "A3 2.0 T FSI QUATTRO AMBIENTE"
  },
  {
      "id": 346,
      "brandId": 9,
      "name": "A3 3.2 FSI QUATTRO AMBITION"
  },
  {
      "id": 347,
      "brandId": 9,
      "name": "A3 3.2 FSI QUATTRO DSG AMBITION"
  },
  {
      "id": 348,
      "brandId": 9,
      "name": "A3 SPORTBACK 2.0 T FSI"
  },
  {
      "id": 349,
      "brandId": 9,
      "name": "A3 SPORTBACK 2.0 T FSI DSG AMBITION"
  },
  {
      "id": 350,
      "brandId": 9,
      "name": "A3 SPORTBACK 2.0 T FSI DSG AMBIENTE"
  },
  {
      "id": 351,
      "brandId": 9,
      "name": "A3 SPORTBACK 2.0 T FSI QUATTRO AMBITON"
  },
  {
      "id": 352,
      "brandId": 9,
      "name": "A3 SPORTBACK 2.0 T FSI QUATTRO AMBIENTE"
  },
  {
      "id": 353,
      "brandId": 9,
      "name": "A3 SPORTBACK 3.2 FSI QUATTRO AMBITION"
  },
  {
      "id": 354,
      "brandId": 9,
      "name": "A3 SPORTBACK 3.2 FSI QUATTRO DSG AMBITIO"
  },
  {
      "id": 355,
      "brandId": 9,
      "name": "A3 2.0 T FSI S TRONIC AMBITION"
  },
  {
      "id": 356,
      "brandId": 9,
      "name": "A3 2.0 T FSI S TRONIC AMBIENTE"
  },
  {
      "id": 357,
      "brandId": 9,
      "name": "A3 3.2 QUATTRO S TRONIC AMBITION"
  },
  {
      "id": 358,
      "brandId": 9,
      "name": "A3 SPORTBACK 2.0 T FSI S TRONIC AMBITION"
  },
  {
      "id": 359,
      "brandId": 9,
      "name": "A3 SPORTBACK 2.0 T FSI S TRONIC AMBIENTE"
  },
  {
      "id": 360,
      "brandId": 9,
      "name": "A3 SPORTBACK 3.2 QUATTRO S TRONIC AMBITION"
  },
  {
      "id": 361,
      "brandId": 9,
      "name": "A3 SPORTBACK 2.0 TDI S TRONIC"
  },
  {
      "id": 362,
      "brandId": 9,
      "name": "RS4 4.2 FSI QUATTRO"
  },
  {
      "id": 363,
      "brandId": 9,
      "name": "RS4 AVANT 4.2 FSI QUATTRO"
  },
  {
      "id": 364,
      "brandId": 9,
      "name": "A6 2.7 TDI"
  },
  {
      "id": 365,
      "brandId": 9,
      "name": "A6 2.7 TDI MULTITRONIC"
  },
  {
      "id": 366,
      "brandId": 9,
      "name": "A6 2.7 TDI QUATTRO TIPTRONIC"
  },
  {
      "id": 367,
      "brandId": 9,
      "name": "A6 AVANT 2.7 TDI"
  },
  {
      "id": 368,
      "brandId": 9,
      "name": "A6 AVANT 2.7 TDI MULTITRONIC"
  },
  {
      "id": 369,
      "brandId": 9,
      "name": "A6 AVANT 2.7 TDI QUATTRO TIPTRONIC"
  },
  {
      "id": 370,
      "brandId": 9,
      "name": "A6 AVANT 3.0 TDI QUATTRO TIPTRONIC"
  },
  {
      "id": 371,
      "brandId": 9,
      "name": "A6 ALLROAD QUATTRO 2.7 TDI TIPTRONIC"
  },
  {
      "id": 372,
      "brandId": 9,
      "name": "A6 ALLROAD QUATTRO 3.0 TDI"
  },
  {
      "id": 373,
      "brandId": 9,
      "name": "A6 ALLROAD QUATTRO 3.0 TDI TIPTRONIC"
  },
  {
      "id": 374,
      "brandId": 9,
      "name": "A6 ALLROAD QUATTRO 3.2 FSI"
  },
  {
      "id": 375,
      "brandId": 9,
      "name": "A6 ALLROAD QUATTRO 3.2 FSI TIPTRONIC"
  },
  {
      "id": 376,
      "brandId": 9,
      "name": "A6 ALLROAD QUATTRO 4.2 FSI TIPTRONIC"
  },
  {
      "id": 377,
      "brandId": 9,
      "name": "S8"
  },
  {
      "id": 378,
      "brandId": 9,
      "name": "A6 2.0 TFSI TIPTRONIC"
  },
  {
      "id": 379,
      "brandId": 9,
      "name": "TT 2.0 TFSI"
  },
  {
      "id": 380,
      "brandId": 9,
      "name": "TT 2.0 TFSI S TRONIC"
  },
  {
      "id": 381,
      "brandId": 9,
      "name": "TT 3.2 QUATTRO"
  },
  {
      "id": 382,
      "brandId": 9,
      "name": "TT 3.2 QUATTRO S TRONIC"
  },
  {
      "id": 383,
      "brandId": 9,
      "name": "A3 3.2 QUATTRO AMBITION"
  },
  {
      "id": 384,
      "brandId": 9,
      "name": "A3 2.0 TDI S TRONIC"
  },
  {
      "id": 385,
      "brandId": 9,
      "name": "A3 SPORTBACK 3.2 QUATTRO AMBITION"
  },
  {
      "id": 386,
      "brandId": 9,
      "name": "A4 CABRIOLET 1.8T"
  },
  {
      "id": 388,
      "brandId": 9,
      "name": "A4 CABRIOLET 2.0T FSI"
  },
  {
      "id": 389,
      "brandId": 9,
      "name": "A4 CABRIOLET 2.0T FSI MULTITRONIC"
  },
  {
      "id": 390,
      "brandId": 9,
      "name": "A6 4.2 FSI QUATTRO TIPTRONIC"
  },
  {
      "id": 391,
      "brandId": 9,
      "name": "A6 AVANT 4.2 FSI QUATTRO TIPTRONIC"
  },
  {
      "id": 392,
      "brandId": 9,
      "name": "A8 4.2 FSI QUATTRO TIPTRONIC"
  },
  {
      "id": 393,
      "brandId": 9,
      "name": "A8 L 4.2 FSI QUATTRO TIPTRONIC"
  },
  {
      "id": 394,
      "brandId": 9,
      "name": "A6 2.0 TDI MULTIRONIC"
  },
  {
      "id": 395,
      "brandId": 9,
      "name": "A6 AVANT 2.0 TDI MULTITRONIC"
  },
  {
      "id": 396,
      "brandId": 9,
      "name": "A3 1.8 TFSI"
  },
  {
      "id": 397,
      "brandId": 9,
      "name": "A3 1.8 TFSI S TRONIC"
  },
  {
      "id": 398,
      "brandId": 9,
      "name": "A3 SPORTBACK 1.8 TFSI"
  },
  {
      "id": 399,
      "brandId": 9,
      "name": "A3 SPORTBACK 1.8 TFSI S TRONIC"
  },
  {
      "id": 401,
      "brandId": 9,
      "name": "TTR 2.0 TFSI"
  },
  {
      "id": 402,
      "brandId": 9,
      "name": "TTR 2.0 TFSI S TRONIC"
  },
  {
      "id": 403,
      "brandId": 9,
      "name": "TTR 3.2 QUATTRO"
  },
  {
      "id": 404,
      "brandId": 9,
      "name": "TTR 3.2 QUATTRO S TRONIC"
  },
  {
      "id": 405,
      "brandId": 9,
      "name": "R8 4.2 FSI"
  },
  {
      "id": 406,
      "brandId": 9,
      "name": "R8 4.2 FSI R TRONIC"
  },
  {
      "id": 407,
      "brandId": 9,
      "name": "S3 2.0 TFSI QUATTRO"
  },
  {
      "id": 408,
      "brandId": 9,
      "name": "A5 COUPE 2.7 TDI MULTITRONIC"
  },
  {
      "id": 409,
      "brandId": 9,
      "name": "A5 COUPE 3.0 TDI QUATTRO"
  },
  {
      "id": 410,
      "brandId": 9,
      "name": "A5 COUPE 3.2 FSI MULTITRONIC"
  },
  {
      "id": 411,
      "brandId": 9,
      "name": "S5 COUPE 4.2 FSI QUATTRO"
  },
  {
      "id": 412,
      "brandId": 9,
      "name": "A3 1.4 TFSI (125)"
  },
  {
      "id": 413,
      "brandId": 9,
      "name": "A3 SPORTBACK 1.4 TFSI (125)"
  },
  {
      "id": 414,
      "brandId": 9,
      "name": "A5 COUPE 1.8 TFSI"
  },
  {
      "id": 415,
      "brandId": 9,
      "name": "A8 3.0 TDI QUATTRO TIPTRONIC LONG"
  },
  {
      "id": 416,
      "brandId": 9,
      "name": "A4 1.8 TFSI (160)"
  },
  {
      "id": 417,
      "brandId": 9,
      "name": "A4 1.8 TFSI MULTITRONIC (160)"
  },
  {
      "id": 418,
      "brandId": 9,
      "name": "A4 3.2 FSI QUATTRO (265)"
  },
  {
      "id": 419,
      "brandId": 9,
      "name": "A4 3.2 FSI QUATTRO TIPTRONIC (265)"
  },
  {
      "id": 420,
      "brandId": 9,
      "name": "A4 2.0 TDI (143)"
  },
  {
      "id": 421,
      "brandId": 9,
      "name": "A4 2.0 TDI MULTITRONIC (140)"
  },
  {
      "id": 422,
      "brandId": 9,
      "name": "A4 2.0 TDI (170)"
  },
  {
      "id": 423,
      "brandId": 9,
      "name": "A4 2.7 TDI MULTITRONIC (190)"
  },
  {
      "id": 424,
      "brandId": 9,
      "name": "A4 3.0 TDI MULTITRONIC (240)"
  },
  {
      "id": 425,
      "brandId": 9,
      "name": "Q7 3.0 TDI S-LINE"
  },
  {
      "id": 426,
      "brandId": 9,
      "name": "A5 COUPE 1.8 TFSI MULTITRONIC"
  },
  {
      "id": 427,
      "brandId": 9,
      "name": "A4 3.0 TDI QUATTRO (240)"
  },
  {
      "id": 428,
      "brandId": 9,
      "name": "A3 CABRIOLET 1.8 TFSI (160)"
  },
  {
      "id": 429,
      "brandId": 9,
      "name": "A3 CABRIOLET 1.8 TFSI S TRONIC (160)"
  },
  {
      "id": 430,
      "brandId": 9,
      "name": "A3 CABRIOLET 2.0 TFSI (200)"
  },
  {
      "id": 431,
      "brandId": 9,
      "name": "A3 CABRIOLET 2.0 TFSI S TRONIC AMBITION"
  },
  {
      "id": 432,
      "brandId": 9,
      "name": "A3 CABRIOLET 1.9 TDI (105)"
  },
  {
      "id": 433,
      "brandId": 9,
      "name": "A3 CABRIOLET 2.0 TDI (140)"
  },
  {
      "id": 434,
      "brandId": 9,
      "name": "A3 CABRIOLET 2.0 TDI S TRONIC (140)"
  },
  {
      "id": 435,
      "brandId": 9,
      "name": "A3 1.4 TFSI S TRONIC (125)"
  },
  {
      "id": 436,
      "brandId": 9,
      "name": "A3 SPORTBACK 1.4 TFSI S TRONIC (122)"
  },
  {
      "id": 437,
      "brandId": 9,
      "name": "A4 1.8 TFSI (120)"
  },
  {
      "id": 438,
      "brandId": 9,
      "name": "A3 1.6 S TRONIC"
  },
  {
      "id": 439,
      "brandId": 9,
      "name": "A3 SPORTBACK 1.6 S TRONIC"
  },
  {
      "id": 440,
      "brandId": 9,
      "name": "TTS COUPE 2.0 TFSI QUATTRO"
  },
  {
      "id": 441,
      "brandId": 9,
      "name": "TTS COUPE 2.0 TFSI QUATTRO S TRONIC"
  },
  {
      "id": 442,
      "brandId": 9,
      "name": "TTS ROADSTAR 2.0 TFSI QUATTRO"
  },
  {
      "id": 443,
      "brandId": 9,
      "name": "TTS ROADSTAR 2.0 TFSI QUATTRO S TRONIC"
  },
  {
      "id": 444,
      "brandId": 9,
      "name": "A5 COUPE 2.0 TFSI (180)"
  },
  {
      "id": 445,
      "brandId": 9,
      "name": "A5 COUPE 2.0 TFSI (180) MULTITRONIC"
  },
  {
      "id": 446,
      "brandId": 9,
      "name": "A5 COUPE 2.0 TFSI (211) MULTITRONIC"
  },
  {
      "id": 447,
      "brandId": 9,
      "name": "A5 COUPE 2.0 TFSI (211) QUATTRO"
  },
  {
      "id": 448,
      "brandId": 9,
      "name": "A5 COUPE 3.0 TDI QUATTRO TIPTRONIC"
  },
  {
      "id": 449,
      "brandId": 9,
      "name": "A5 COUPE 3.2 FSI QUATTRO TIPTRONIC"
  },
  {
      "id": 450,
      "brandId": 9,
      "name": "S5 COUPE 4.2 QUATTRO TIPTRONIC"
  },
  {
      "id": 451,
      "brandId": 9,
      "name": "Q5 2.0 TDI QUATTRO 170"
  },
  {
      "id": 452,
      "brandId": 9,
      "name": "Q5 2.0 TDI QUATTRO 170 S TRONIC"
  },
  {
      "id": 453,
      "brandId": 9,
      "name": "Q5 2.0 TFSI QUATTRO 211 S TRONIC"
  },
  {
      "id": 454,
      "brandId": 9,
      "name": "Q5 3.0 TDI QUATTRO S TRONIC"
  },
  {
      "id": 455,
      "brandId": 9,
      "name": "A3 1.8 TFSI QUATTRO"
  },
  {
      "id": 456,
      "brandId": 9,
      "name": "A3 2.0 TFSI QUATTRO S TRONIC AMBITION"
  },
  {
      "id": 457,
      "brandId": 9,
      "name": "A3 2.0 TDI QUATTRO (170)"
  },
  {
      "id": 458,
      "brandId": 9,
      "name": "A3 SPORTBACK 1.8 TFSI QUATTRO"
  },
  {
      "id": 459,
      "brandId": 9,
      "name": "A3 SPORTBACK 2.0 TFSI QUATTRO S TRONIC"
  },
  {
      "id": 460,
      "brandId": 9,
      "name": "A3 SPORTBACK 2.0 TDI QUATTRO S TRONIC"
  },
  {
      "id": 461,
      "brandId": 9,
      "name": "S3 SPORTBACK 2.0 TFSI QUATTRO"
  },
  {
      "id": 462,
      "brandId": 9,
      "name": "A3 CABRIOLET 1.6"
  },
  {
      "id": 463,
      "brandId": 9,
      "name": "A4 1.8 TFSI (120) MULTITRONIC"
  },
  {
      "id": 464,
      "brandId": 9,
      "name": "A2 2.0 TFSI (211) QUATTRO S TRONIC"
  },
  {
      "id": 465,
      "brandId": 9,
      "name": "A4 AVANT 1.8 TFSI (120) MULTITRONIC"
  },
  {
      "id": 466,
      "brandId": 9,
      "name": "A4 AVANT 2.0 TFSI (211) QUATTRO S TRONIC"
  },
  {
      "id": 467,
      "brandId": 9,
      "name": "A6 3.0 TFSI QUATTRO TIPTRONIC"
  },
  {
      "id": 468,
      "brandId": 9,
      "name": "RS6 5.0 (580)"
  },
  {
      "id": 469,
      "brandId": 9,
      "name": "RS6 AVANT 5.0 (580)"
  },
  {
      "id": 470,
      "brandId": 9,
      "name": "TT COUPE 1.8 TFSI (160)"
  },
  {
      "id": 471,
      "brandId": 9,
      "name": "TT COUPE 2.0 TDI QUATTRO (170)"
  },
  {
      "id": 472,
      "brandId": 9,
      "name": "TT ROADSTAR 2.0 TDI QUATTRO"
  },
  {
      "id": 473,
      "brandId": 9,
      "name": "TT ROADSTAR 2.0 TFSI QUATTRO"
  },
  {
      "id": 474,
      "brandId": 9,
      "name": "TT ROADSTAR 2.0 TFSI QUATTRO S TRONIC"
  },
  {
      "id": 475,
      "brandId": 9,
      "name": "A6 2.0 TDI (170) MULTITRONIC"
  },
  {
      "id": 476,
      "brandId": 9,
      "name": "A6 2.8 FSI (220) MULTITRONIC"
  },
  {
      "id": 477,
      "brandId": 9,
      "name": "S4 QUATTRO S TRONIC"
  },
  {
      "id": 478,
      "brandId": 9,
      "name": "A4 AVANT 1.8 TFSI (160) MULTITRONIC"
  },
  {
      "id": 479,
      "brandId": 9,
      "name": "S4 AVANT S TRONIC"
  },
  {
      "id": 480,
      "brandId": 9,
      "name": "A4 ALLROAD QUATTRO 2.0 TFSI 211 S TRONIC"
  },
  {
      "id": 481,
      "brandId": 9,
      "name": "A4 ALLROAD QUATTRO 2.0 TDI (170)"
  },
  {
      "id": 482,
      "brandId": 9,
      "name": "A4 ALLROAD QUATTRO 3.0 TDI 240 S TRONIC"
  },
  {
      "id": 483,
      "brandId": 9,
      "name": "A5 COUPE 2.0 TFSI (211) QUATTRO S TRONIC"
  },
  {
      "id": 484,
      "brandId": 9,
      "name": "A5 COUPE 2.0 TDI (170) QUATTRO"
  },
  {
      "id": 485,
      "brandId": 9,
      "name": "A5 CABRIOLET 2.0 TFSI (180) MULTITRONIC"
  },
  {
      "id": 486,
      "brandId": 9,
      "name": "A5 CABRIOLET 2.0 TFSI (211) MULTITRONIC"
  },
  {
      "id": 487,
      "brandId": 9,
      "name": "A5 CABRIOLET 2.0 TFSI 211 QUATTRO S TRON"
  },
  {
      "id": 488,
      "brandId": 9,
      "name": "A5 CABRIOLET 2.7 TDI MULTITRONIC"
  },
  {
      "id": 489,
      "brandId": 9,
      "name": "A5 CABRIOLET 3.0 TDI QUATTRO S TRONIC"
  },
  {
      "id": 490,
      "brandId": 9,
      "name": "A5 CABRIOLET 3.2 FSI QUATTRO S TRONIC"
  },
  {
      "id": 491,
      "brandId": 9,
      "name": "S5 CABRIOLET S TRONIC"
  },
  {
      "id": 492,
      "brandId": 9,
      "name": "TT ROADSTAR 1.8 TFSI (160)"
  },
  {
      "id": 493,
      "brandId": 9,
      "name": "A3 SPORTBACK 2.0 TDI QUATTRO (170)"
  },
  {
      "id": 494,
      "brandId": 9,
      "name": "A5 SPORTBACK 2.0 TFSI (180)"
  },
  {
      "id": 495,
      "brandId": 9,
      "name": "A5 SPORTBACK 2.0 TFSI (180) MULTITRONIC"
  },
  {
      "id": 496,
      "brandId": 9,
      "name": "A5 SPORTBACK 2.0 TFSI (211) QUATTO S TRO"
  },
  {
      "id": 497,
      "brandId": 9,
      "name": "A5 SPORTBACK 2.0 TDI (143) MULTITRONIC"
  },
  {
      "id": 498,
      "brandId": 9,
      "name": "A5 SPORTBACK 2.0 TDI (170) QUATTRO"
  },
  {
      "id": 499,
      "brandId": 9,
      "name": "A5 SPORTBACK 3.0 TDI QUATTRO S TRONIC"
  },
  {
      "id": 500,
      "brandId": 9,
      "name": "A5 SPORTBACK 3.2 FSI QUATTRO S TRONIC"
  },
  {
      "id": 501,
      "brandId": 9,
      "name": "S5 SPORTBACK 3.0 S TRONIC"
  },
  {
      "id": 502,
      "brandId": 9,
      "name": "Q7 6.0 V12 TDI  QUATTRO TIPTRONIC"
  },
  {
      "id": 503,
      "brandId": 9,
      "name": "A6 AVANT 2.0 TDI MULTITRONIC (170)"
  },
  {
      "id": 504,
      "brandId": 9,
      "name": "A6 AVANT 3.0 TFSI QUATTRO TIPTRONIC"
  },
  {
      "id": 505,
      "brandId": 9,
      "name": "R8 5.2 FSI QUATTRO"
  },
  {
      "id": 506,
      "brandId": 9,
      "name": "R8 5.2 FSI QUATTRO R TRONIC"
  },
  {
      "id": 507,
      "brandId": 9,
      "name": "A5 CABROLET 1.8 TFSI"
  },
  {
      "id": 508,
      "brandId": 9,
      "name": "A5 CABROLET 1.8 TFSI MULTITRONIC"
  },
  {
      "id": 509,
      "brandId": 9,
      "name": "A8 4.2 TDI QUATTRO TIPTRONIC"
  },
  {
      "id": 510,
      "brandId": 9,
      "name": "A1 1.4 TFSI (122)"
  },
  {
      "id": 511,
      "brandId": 9,
      "name": "A1 1.4 TFSI (122) STRONIC"
  },
  {
      "id": 512,
      "brandId": 9,
      "name": "A1 1.6 TDI (105)"
  },
  {
      "id": 513,
      "brandId": 9,
      "name": "A3 1.6 TDI STRONIC"
  },
  {
      "id": 514,
      "brandId": 9,
      "name": "A3 SPORTBACK 1.6 TDI STRONIC"
  },
  {
      "id": 515,
      "brandId": 9,
      "name": "A5 SPORTBACK 1.8 TFSI (160)"
  },
  {
      "id": 516,
      "brandId": 9,
      "name": "A7 SPORTBACK 3.0 TFSI (300) QUATTRO STRO"
  },
  {
      "id": 517,
      "brandId": 9,
      "name": "A7 SPORTBACK 3.0 TDI (245) QUATTRO STRON"
  },
  {
      "id": 518,
      "brandId": 9,
      "name": "A8 3.0 TFSI QUATTRO TIPTRONIC"
  },
  {
      "id": 519,
      "brandId": 9,
      "name": "A8 L 3.0 TFSI QUATTRO TIPTRONIC"
  },
  {
      "id": 520,
      "brandId": 9,
      "name": "A8 L 4.2 TDI QUATTRO TIPTRONIC"
  },
  {
      "id": 521,
      "brandId": 9,
      "name": "A1 1.2 TFSI (86)"
  },
  {
      "id": 522,
      "brandId": 9,
      "name": "A1 1.4 TFSI (185) S TRONIC"
  },
  {
      "id": 523,
      "brandId": 9,
      "name": "A4 2.0 TDI (143) MULTITRONIC"
  },
  {
      "id": 524,
      "brandId": 9,
      "name": "A4 AVANT 2.0 TDI (143) MULTITRONIC"
  },
  {
      "id": 525,
      "brandId": 9,
      "name": "A3 1.2 TFSI (105)"
  },
  {
      "id": 526,
      "brandId": 9,
      "name": "A3 1.2 TFSI (105) S TRONIC"
  },
  {
      "id": 527,
      "brandId": 9,
      "name": "A3 SPORTBACK 1.2 TFSI (105)"
  },
  {
      "id": 628,
      "brandId": 9,
      "name": "A3 SPORTBACK 1.2 TFSI (105) S TRONIC"
  },
  {
      "id": 629,
      "brandId": 9,
      "name": "A6 3.0 TFSI QUATTRO STRONIC"
  },
  {
      "id": 630,
      "brandId": 9,
      "name": "A6 3.0 TDI QUATTRO STRONIC"
  },
  {
      "id": 631,
      "brandId": 9,
      "name": "A6 2.0 TDI (177) MULTITRONIC"
  },
  {
      "id": 632,
      "brandId": 9,
      "name": "A8 L W12 6.3 FSI QUATTRO TIPTRONIC"
  },
  {
      "id": 633,
      "brandId": 9,
      "name": "RS3 SPORTBACK"
  },
  {
      "id": 634,
      "brandId": 9,
      "name": "A3 CABRIOLET 1.2 TFSI (105)"
  },
  {
      "id": 635,
      "brandId": 9,
      "name": "A3 CABRIOLET 1.6 TDI (105)"
  },
  {
      "id": 636,
      "brandId": 9,
      "name": "RS5 4.2 FSI"
  },
  {
      "id": 637,
      "brandId": 9,
      "name": "Q3 2.0 TDI QUATTRO STRONIC (177)"
  },
  {
      "id": 638,
      "brandId": 9,
      "name": "Q7 4.2 TDI QUATTRO TIPTRONIC"
  },
  {
      "id": 639,
      "brandId": 9,
      "name": "TT COUPE 2.0 TFSI QUATTRO S TRONIC"
  },
  {
      "id": 640,
      "brandId": 9,
      "name": "TT RS COUPE"
  },
  {
      "id": 641,
      "brandId": 9,
      "name": "TT RS COUPE S TRONIC"
  },
  {
      "id": 642,
      "brandId": 9,
      "name": "TT RS ROADSTAR"
  },
  {
      "id": 643,
      "brandId": 9,
      "name": "TT RS ROADSTAR S TRONIC"
  },
  {
      "id": 644,
      "brandId": 9,
      "name": "R8 SPYDER  4.2 FSI"
  },
  {
      "id": 645,
      "brandId": 9,
      "name": "R8 SPYDER 4.2 FSI R TRONIC"
  },
  {
      "id": 646,
      "brandId": 9,
      "name": "R8 SPYDER 5.2 FSI QUATTRO"
  },
  {
      "id": 647,
      "brandId": 9,
      "name": "R8 SPYDER 5.2 FSI QUATTRO R TRONIC"
  },
  {
      "id": 284,
      "brandId": 11,
      "name": "45 1.6 COMFORT CLUB"
  },
  {
      "id": 63,
      "brandId": 18,
      "name": "9-5 AERO 2.3 TS"
  },
  {
      "id": 67,
      "brandId": 18,
      "name": "9-5 2.0 LPT LINEAR"
  },
  {
      "id": 68,
      "brandId": 18,
      "name": "9-5 ARC 2.0 LPT"
  },
  {
      "id": 69,
      "brandId": 18,
      "name": "9-5 ARC 2.0 LPT PREM1"
  },
  {
      "id": 70,
      "brandId": 18,
      "name": "9-5 ARC 2.0 LPT PREM2"
  },
  {
      "id": 72,
      "brandId": 18,
      "name": "9-5 VECTOR 2.0 LPT"
  },
  {
      "id": 73,
      "brandId": 18,
      "name": "9-5 AERO 2.3 TS PREM1"
  },
  {
      "id": 74,
      "brandId": 18,
      "name": "9-5 AERO 2.3 TS PREM2"
  },
  {
      "id": 75,
      "brandId": 18,
      "name": "9-5 WAGON ARC 2.0 LPT PREM2"
  },
  {
      "id": 76,
      "brandId": 18,
      "name": "9-5 WAGON AERO 2.3 TS PREM2"
  },
  {
      "id": 89,
      "brandId": 18,
      "name": "9-3 LINEAR 2.0 LPT SEDAN"
  },
  {
      "id": 90,
      "brandId": 18,
      "name": "9-3 ARC 2.0 LPT SEDAN"
  },
  {
      "id": 91,
      "brandId": 18,
      "name": "9-3 ARC 2.0 LPT PREM1 SEDAN"
  },
  {
      "id": 92,
      "brandId": 18,
      "name": "9-3 ARC 2.0 LPT PREM2 SEDAN"
  },
  {
      "id": 93,
      "brandId": 18,
      "name": "9-3 VECTOR 2.0 T SEDAN"
  },
  {
      "id": 94,
      "brandId": 18,
      "name": "9-3 VECTOR 2.0 T PREM1 SEDAN"
  },
  {
      "id": 95,
      "brandId": 18,
      "name": "9-3 VECTOR 2.0 T PREM2 SEDAN"
  },
  {
      "id": 102,
      "brandId": 18,
      "name": "9-3 AERO 2.0 TS PREM1 SEDAN"
  },
  {
      "id": 103,
      "brandId": 18,
      "name": "9-3 AERO 2.0 TS PREM2 SEDAN"
  },
  {
      "id": 104,
      "brandId": 18,
      "name": "9-5 WAGON ARC 2.0 LPT"
  },
  {
      "id": 105,
      "brandId": 18,
      "name": "9-5 WAGON ARC 2.0 LPT PREM1"
  },
  {
      "id": 106,
      "brandId": 18,
      "name": "9-5 WAGON AERO 2.3 TS"
  },
  {
      "id": 107,
      "brandId": 18,
      "name": "9-5 WAGON AERO 2.3 TS PREM1"
  },
  {
      "id": 108,
      "brandId": 18,
      "name": "9-3 CONVERTIBLE LINEAR 2.0 LPT"
  },
  {
      "id": 109,
      "brandId": 18,
      "name": "9-3 C.TIBLE LINEAR 2.0 LPT PREM1"
  },
  {
      "id": 110,
      "brandId": 18,
      "name": "9-3 C.TIBLE LINEAR 2.0 LPT PREM2"
  },
  {
      "id": 111,
      "brandId": 18,
      "name": "9-3 CONVERTIBLE VECTOR 2.0 T"
  },
  {
      "id": 112,
      "brandId": 18,
      "name": "9-3 C.TIBLE VECTOR 2.0 T PREM1"
  },
  {
      "id": 113,
      "brandId": 18,
      "name": "9-3 C.TIBLE VECTOR 2.0T PREM2"
  },
  {
      "id": 114,
      "brandId": 18,
      "name": "9-3 CONVERTIBLE AERO 2.0 TS"
  },
  {
      "id": 115,
      "brandId": 18,
      "name": "9-3 CONVERTIBLE AERO 2.0 TS PREM1"
  },
  {
      "id": 116,
      "brandId": 18,
      "name": "9-3 C.TIBLE AERO 2.0 TS PREM2"
  },
  {
      "id": 120,
      "brandId": 18,
      "name": "9-3 SEDAN LINEAR 1.8i"
  },
  {
      "id": 121,
      "brandId": 18,
      "name": "9-3 SEDAN LINEAR 1.9 TiD"
  },
  {
      "id": 122,
      "brandId": 18,
      "name": "9-3 SEDAN VECTOR 1.9 TiD"
  },
  {
      "id": 123,
      "brandId": 18,
      "name": "9-3 SEDAN 1.9 TiD ARC"
  },
  {
      "id": 124,
      "brandId": 18,
      "name": "9-3 WAGON 1.9 TiD LINEAR"
  },
  {
      "id": 125,
      "brandId": 18,
      "name": "9-3 WAGON 1.9 TiD ARC"
  },
  {
      "id": 126,
      "brandId": 18,
      "name": "9-3 WAGON 1.9 TiD VECTOR"
  },
  {
      "id": 127,
      "brandId": 18,
      "name": "9-5 SEDAN 1.9 TiD LINEAR"
  },
  {
      "id": 128,
      "brandId": 18,
      "name": "9-5 SEDAN 1.9 TiD ARC"
  },
  {
      "id": 129,
      "brandId": 18,
      "name": "9-5 SEDAN 1.9 TiD VECTOR"
  },
  {
      "id": 130,
      "brandId": 18,
      "name": "9-5 WAGON 1.9 TiD LINEAR"
  },
  {
      "id": 131,
      "brandId": 18,
      "name": "9-5 WAGON 1.9 TiD ARC"
  },
  {
      "id": 132,
      "brandId": 18,
      "name": "9-5 WAGON 1.9 TiD VECTOR"
  },
  {
      "id": 134,
      "brandId": 18,
      "name": "9-3 SEDAN 2.0 LPT LINEAR"
  },
  {
      "id": 136,
      "brandId": 18,
      "name": "9-3 SEDAN 2.0 TURBO VECTOR"
  },
  {
      "id": 137,
      "brandId": 18,
      "name": "9-3 SEDAN 2.8 V6 TURBO AERO"
  },
  {
      "id": 138,
      "brandId": 18,
      "name": "9-3 WAGON 1.8i LINEAR"
  },
  {
      "id": 140,
      "brandId": 18,
      "name": "9-3 WAGON 2.0 T LINEAR"
  },
  {
      "id": 141,
      "brandId": 18,
      "name": "9-3 WAGON 2.0 LPT ARC"
  },
  {
      "id": 1084,
      "brandId": 19,
      "name": "ATECA 2.0 TDI 190 4DRIVE DSG S&S XCELLENCE"
  },
  {
      "id": 1086,
      "brandId": 19,
      "name": "LEON 1.0 ECOTSI 115 DSG S&S ECOMOTIVE STYLE"
  },
  {
      "id": 1094,
      "brandId": 19,
      "name": "IBIZA 1.0 75 S&S REFERENCE"
  },
  {
      "id": 229,
      "brandId": 19,
      "name": "IBIZA STYLANCE 1.4 TDI (80)"
  },
  {
      "id": 231,
      "brandId": 19,
      "name": "IBIZA REFERENCE 1.4 TDI (80)"
  },
  {
      "id": 232,
      "brandId": 19,
      "name": "IBIZA ELEGANCE 1.4 16V (75)"
  },
  {
      "id": 233,
      "brandId": 19,
      "name": "IBIZA ELEGANCE 1.4 16V (75) OV"
  },
  {
      "id": 236,
      "brandId": 19,
      "name": "ALTEA SELECTION 1.6 (102)"
  },
  {
      "id": 244,
      "brandId": 19,
      "name": "CORDOBA STYLANCE 1.4 TDI (80)"
  },
  {
      "id": 245,
      "brandId": 19,
      "name": "IBIZA REFERANCE 1.4 (85)"
  },
  {
      "id": 251,
      "brandId": 19,
      "name": "ALTEA STYLANCE 1.4 (125)"
  },
  {
      "id": 252,
      "brandId": 19,
      "name": "ALTEA XL STYLANCE 1.6 (102)"
  },
  {
      "id": 253,
      "brandId": 19,
      "name": "ALTEA XL STYLANCE 1.4 (125)"
  },
  {
      "id": 254,
      "brandId": 19,
      "name": "ALTEA XL STYLANCE 2.0 FSI (150) TIPTRONI"
  },
  {
      "id": 269,
      "brandId": 19,
      "name": "IBIZA 1.6 (105) SPORT RIDER"
  },
  {
      "id": 270,
      "brandId": 19,
      "name": "IBIZA 1.4 TDI (80) DPF REFERENCE"
  },
  {
      "id": 274,
      "brandId": 19,
      "name": "ALHAMBRA 1.9 TDI"
  },
  {
      "id": 78,
      "brandId": 21,
      "name": "520IA"
  },
  {
      "id": 1264,
      "brandId": 21,
      "name": "525d XDRIVESEDAN 2.0 218 EXECUTIVELUXURYLINE"
  },
  {
      "id": 1266,
      "brandId": 21,
      "name": "535d XDRIVE SEDAN 3.0 (313) PURE"
  },
  {
      "id": 1293,
      "brandId": 21,
      "name": "740e iPERFORMANCE 2.0 (326)  EXCLUSIVE"
  },
  {
      "id": 1300,
      "brandId": 21,
      "name": "730Ld XDRIVE 3.0 (265) LUXURY"
  },
  {
      "id": 1327,
      "brandId": 21,
      "name": "X3 XDRIVE20d 2.0 (190) X PLUS"
  },
  {
      "id": 1353,
      "brandId": 21,
      "name": "M6 CABRIO 4.4 (560) PURE"
  },
  {
      "id": 1354,
      "brandId": 21,
      "name": "M6 GRAN COUPE 4.4 (560) PURE"
  },
  {
      "id": 1437,
      "brandId": 21,
      "name": "418d GRAN COUPE 2.0 150 PRESTIGE"
  },
  {
      "id": 1490,
      "brandId": 21,
      "name": "i3 94AH PURE"
  },
  {
      "id": 1491,
      "brandId": 21,
      "name": "i3 94AH PREMIUM TECHNO"
  },
  {
      "id": 1492,
      "brandId": 21,
      "name": "X5 M50d 3.0 381"
  },
  {
      "id": 1493,
      "brandId": 21,
      "name": "320i ED (170) SEDAN MODERN LINE"
  },
  {
      "id": 1494,
      "brandId": 21,
      "name": "418d COUPE 2.0 150 ULTIMATE M SPORT"
  },
  {
      "id": 1495,
      "brandId": 21,
      "name": "320d SEDAN 2.0 190 JOY"
  },
  {
      "id": 1496,
      "brandId": 21,
      "name": "320d XDRIVE SEDAN 2.0 190 JOY"
  },
  {
      "id": 1498,
      "brandId": 21,
      "name": "320d XDRIVE SEDAN 2.0 190 40TH YEAR EDITION"
  },
  {
      "id": 1508,
      "brandId": 21,
      "name": "418i GRAN COUPE 1.5 136 SPORT PLUS"
  },
  {
      "id": 1509,
      "brandId": 21,
      "name": "540i XDRIVE SEDAN 3.0 340 EXECUTIVE SPORT"
  },
  {
      "id": 1510,
      "brandId": 21,
      "name": "540i XDRIVE SEDAN 3.0 340 EXECUTIVE PRESTIGE"
  },
  {
      "id": 1511,
      "brandId": 21,
      "name": "540i XDRIVE SEDAN 3.0 340 EXECUTIVE LUXURY"
  },
  {
      "id": 1512,
      "brandId": 21,
      "name": "540i XDRIVE SEDAN 3.0 340 EXECUTIVE M"
  },
  {
      "id": 1513,
      "brandId": 21,
      "name": "530d XDRIVE SEDAN 3.0 265 SPORT LINE"
  },
  {
      "id": 1514,
      "brandId": 21,
      "name": "530d XDRIVE SEDAN 3.0 265 PRESITGE"
  },
  {
      "id": 1515,
      "brandId": 21,
      "name": "530d XDRIVE SEDAN 3.0 265 LUXURY LINE"
  },
  {
      "id": 1516,
      "brandId": 21,
      "name": "530d XDRIVE SEDAN 3.0 265 M SPORT"
  },
  {
      "id": 1517,
      "brandId": 21,
      "name": "318d SEDAN 2.0 150 PRESTIGE"
  },
  {
      "id": 1518,
      "brandId": 21,
      "name": "430i XDRIVE GRANCOUPE 2.0 252 ULTIMATE MSPORT"
  },
  {
      "id": 1519,
      "brandId": 21,
      "name": "520i SEDAN 1.6 170 SPORT LINE"
  },
  {
      "id": 1520,
      "brandId": 21,
      "name": "520i SEDAN 1.6 170 PRESTIGE"
  },
  {
      "id": 1521,
      "brandId": 21,
      "name": "520i SEDAN 1.6 170 LUXURY LINE"
  },
  {
      "id": 1522,
      "brandId": 21,
      "name": "520i SEDAN 1.6 170 M SPORT"
  },
  {
      "id": 1523,
      "brandId": 21,
      "name": "216d ACTIVE TOURER 1.5 116 PURE"
  },
  {
      "id": 1524,
      "brandId": 21,
      "name": "216d GRAN TOURER 1.5 116 PURE"
  },
  {
      "id": 1525,
      "brandId": 21,
      "name": "218i COUPE 1.5 136 PURE"
  },
  {
      "id": 1526,
      "brandId": 21,
      "name": "218i CABRIO 1.5 136 PURE"
  },
  {
      "id": 1527,
      "brandId": 21,
      "name": "318i SEDAN 1.5 136 PURE"
  },
  {
      "id": 1528,
      "brandId": 21,
      "name": "318d SEDAN 2.0 150 PURE"
  },
  {
      "id": 1529,
      "brandId": 21,
      "name": "320d SEDAN 2.0 190 PURE"
  },
  {
      "id": 1530,
      "brandId": 21,
      "name": "320d XDRIVE SEDAN 2.0 190 PURE"
  },
  {
      "id": 1531,
      "brandId": 21,
      "name": "320d XDRIVE GRAN TURISMO 2.0 190"
  },
  {
      "id": 1532,
      "brandId": 21,
      "name": "418i COUPE 1.5 136"
  },
  {
      "id": 1533,
      "brandId": 21,
      "name": "430i XDRIVE COUPE 2.0 252 PURE"
  },
  {
      "id": 1534,
      "brandId": 21,
      "name": "418d COUPE 2.0 150 PURE"
  },
  {
      "id": 1535,
      "brandId": 21,
      "name": "420d XDRIVE COUPE 2.0 190 PURE"
  },
  {
      "id": 1536,
      "brandId": 21,
      "name": "418i GRAN COUPE 1.5 136"
  },
  {
      "id": 1537,
      "brandId": 21,
      "name": "430i XDRIVE GRAN COUPE 2.0 252 PURE"
  },
  {
      "id": 1538,
      "brandId": 21,
      "name": "418d GRAN COUPE 2.0 150 PURE"
  },
  {
      "id": 1539,
      "brandId": 21,
      "name": "420d XDRIVE GRAN COUPE 2.0 190 PURE"
  },
  {
      "id": 1540,
      "brandId": 21,
      "name": "530i SEDAN 2.0 252 SPORTLINE"
  },
  {
      "id": 1541,
      "brandId": 21,
      "name": "530i SEDAN 2.0 252 PRESTIGE"
  },
  {
      "id": 1542,
      "brandId": 21,
      "name": "530i SEDAN 2.0 252 LUXURY LINE"
  },
  {
      "id": 1543,
      "brandId": 21,
      "name": "530i SEDAN 2.0 252 M SPORT"
  },
  {
      "id": 1544,
      "brandId": 21,
      "name": "530i XDRIVE SEDAN 2.0 252 SPORT LINE"
  },
  {
      "id": 1545,
      "brandId": 21,
      "name": "530i XDRIVE SEDAN 2.0 252 PRESTIGE"
  },
  {
      "id": 1546,
      "brandId": 21,
      "name": "530i XDRIVE SEDAN 2.0 252 LUXURY LINE"
  },
  {
      "id": 1547,
      "brandId": 21,
      "name": "530i XDRIVE SEDAN 2.0 252 M SPORT"
  },
  {
      "id": 1548,
      "brandId": 21,
      "name": "540i XDRIVE SEDAN 3.0 340 SPORT LINE"
  },
  {
      "id": 1549,
      "brandId": 21,
      "name": "540i XDRIVE SEDAN 3.0 340 PRESTIGE"
  },
  {
      "id": 1550,
      "brandId": 21,
      "name": "540i XDRIVE SEDAN 3.0 340 LUXURY LINE"
  },
  {
      "id": 1551,
      "brandId": 21,
      "name": "540¦ XDRIVE SEDAN 3.0 340 M SPORT"
  },
  {
      "id": 1552,
      "brandId": 21,
      "name": "X1 SDRIVE18i 1.5 136 PURE"
  },
  {
      "id": 1553,
      "brandId": 21,
      "name": "X1 SDRIVE 16d 1.5 116 PURE"
  },
  {
      "id": 1554,
      "brandId": 21,
      "name": "X1 XDRIVE20d 2.0 190 PURE"
  },
  {
      "id": 1555,
      "brandId": 21,
      "name": "X3 SDRIVE20i 1.6 170 PURE"
  },
  {
      "id": 1556,
      "brandId": 21,
      "name": "X3 XDRIVE20d 2.0 190 PURE"
  },
  {
      "id": 1557,
      "brandId": 21,
      "name": "X4 XDRIVE20d 2.0 190 PURE"
  },
  {
      "id": 1558,
      "brandId": 21,
      "name": "218i ACTIVE TOURER 1.5 136 PURE"
  },
  {
      "id": 1559,
      "brandId": 21,
      "name": "ALPINA D3 BITURBO COUPE"
  },
  {
      "id": 1560,
      "brandId": 21,
      "name": "520i SEDAN 1.6 170 PRESTIGE BUSINESS"
  },
  {
      "id": 1561,
      "brandId": 21,
      "name": "740Ld XDRIVE M EXCELLENCE LUXURY"
  },
  {
      "id": 1562,
      "brandId": 21,
      "name": "318i SEDAN 1.5 136 EDITION SPORT LINE"
  },
  {
      "id": 1563,
      "brandId": 21,
      "name": "318i SEDAN 1.5 136 EDITION LUXURY LINE"
  },
  {
      "id": 1564,
      "brandId": 21,
      "name": "318i SEDAN 1.5 136 EDITION M SPORT"
  },
  {
      "id": 1565,
      "brandId": 21,
      "name": "320d XDRIVE GRAN TURISMO 2.0 190 PURE"
  },
  {
      "id": 1566,
      "brandId": 21,
      "name": "418i COUPE 1.5 136 PURE"
  },
  {
      "id": 1567,
      "brandId": 21,
      "name": "418i GRAN COUPE 1.5 136 PURE"
  },
  {
      "id": 1568,
      "brandId": 21,
      "name": "318i SEDAN 1.5 136 EDITION M SPORT EXECUTIVE"
  },
  {
      "id": 1569,
      "brandId": 21,
      "name": "535i XDRIVE 3.0"
  },
  {
      "id": 1570,
      "brandId": 21,
      "name": "X6 M 50d 3.0"
  },
  {
      "id": 1571,
      "brandId": 21,
      "name": "X3 XDRIVE20d 2.0 (190) FIRST EDITION LUXURY"
  },
  {
      "id": 1572,
      "brandId": 21,
      "name": "318i SEDAN 1.5 136 EDITIONLUXURYLINEEXECUTIVE"
  },
  {
      "id": 1573,
      "brandId": 21,
      "name": "630i GRAN TURISMO 3.0 (313) SPORT LINE"
  },
  {
      "id": 1574,
      "brandId": 21,
      "name": "630i GRAN TURISMO 3.0 (313) M SPORT"
  },
  {
      "id": 1575,
      "brandId": 21,
      "name": "630i GRAN TURISMO 2.0 (258) SPORT LINE"
  },
  {
      "id": 1576,
      "brandId": 21,
      "name": "X3 XDRIVE20d 2.0 (190) FIRST EDITION X"
  },
  {
      "id": 1578,
      "brandId": 21,
      "name": "X3 XDRIVE20d 2.0 (190) FIRST EDITION M"
  },
  {
      "id": 1579,
      "brandId": 21,
      "name": "630i GRAN TURISMO 2.0 (258) LUXURY LINE"
  },
  {
      "id": 1580,
      "brandId": 21,
      "name": "630i GRAN TURISMO 2.0 (258) M SPORT"
  },
  {
      "id": 1581,
      "brandId": 21,
      "name": "118i HATCBACK 1.5 (136) URBAN LINE"
  },
  {
      "id": 1582,
      "brandId": 21,
      "name": "118i HATCBACK 1.5 (136) M SPORT"
  },
  {
      "id": 1583,
      "brandId": 21,
      "name": "118d HATCBACK 1.5 (116) M SPORT"
  },
  {
      "id": 1584,
      "brandId": 21,
      "name": "320d SEDAN 2.0 (190) EDITION SPORT LINE"
  },
  {
      "id": 1585,
      "brandId": 21,
      "name": "320d SEDAN 2.0 (190) EDITION LUXURY LINE"
  },
  {
      "id": 1586,
      "brandId": 21,
      "name": "320d SEDAN 2.0 (190) EDITION M SPORT"
  },
  {
      "id": 1587,
      "brandId": 21,
      "name": "530i SEDAN 2.0 (252) PURE"
  },
  {
      "id": 1588,
      "brandId": 21,
      "name": "530i XDRIVE SEDAN 2.0 (252) PURE"
  },
  {
      "id": 1589,
      "brandId": 21,
      "name": "520d XDRIVE SEDAN 2.0 (190) PURE"
  },
  {
      "id": 1590,
      "brandId": 21,
      "name": "116d 1.5 116 M SPORT"
  },
  {
      "id": 1591,
      "brandId": 21,
      "name": "330i SEDAN 2.0 252 PURE"
  },
  {
      "id": 1592,
      "brandId": 21,
      "name": "330i SEDAN 2.0 252 PRESTIGE"
  },
  {
      "id": 1593,
      "brandId": 21,
      "name": "330i SEDAN 2.0 252 EDITION SPORT LINE"
  },
  {
      "id": 1594,
      "brandId": 21,
      "name": "330i SEDAN 2.0 252 EDITION M SPORT"
  },
  {
      "id": 1595,
      "brandId": 21,
      "name": "330i SEDAN 2.0 252 EDITION LUXURY LINE"
  },
  {
      "id": 1596,
      "brandId": 21,
      "name": "330i XDRIVE SEDAN 2.0 252 PURE"
  },
  {
      "id": 1597,
      "brandId": 21,
      "name": "330i XDRIVE SEDAN 2.0 252 PRESTIGE"
  },
  {
      "id": 1598,
      "brandId": 21,
      "name": "330i XDRIVE SEDAN EDITION SPORT LINE"
  },
  {
      "id": 1599,
      "brandId": 21,
      "name": "330i XDRIVE SEDAN EDITION M SPORT"
  },
  {
      "id": 1600,
      "brandId": 21,
      "name": "330i XDRIVE SEDAN 2.0 252 EDITION LUXURY LINE"
  },
  {
      "id": 1601,
      "brandId": 21,
      "name": "320d XDRIVE SEDAN 2.0 190 EDITION SPORT LINE"
  },
  {
      "id": 1602,
      "brandId": 21,
      "name": "320d XDRIVE SEDAN 2.0 190  EDITION M SPORT"
  },
  {
      "id": 1603,
      "brandId": 21,
      "name": "320d  XDRIVE SEDAN 2.0 190 EDITION LUXURYLINE"
  },
  {
      "id": 1604,
      "brandId": 21,
      "name": "430i XDRIVE COUPE 2.0 252 SPORT LINE"
  },
  {
      "id": 1605,
      "brandId": 21,
      "name": "430i XDRIVECOUPE 2.0 252 M SPORT"
  },
  {
      "id": 1606,
      "brandId": 21,
      "name": "430i XDRIVE COUPE 2.0 252 LUXURY LINE"
  },
  {
      "id": 1607,
      "brandId": 21,
      "name": "420d XDRIVE COUPE 2.0 190 SPORT LINE"
  },
  {
      "id": 1608,
      "brandId": 21,
      "name": "420d XDRIVE COUPE 2.0 190 M SPORT"
  },
  {
      "id": 1609,
      "brandId": 21,
      "name": "420d XDRIVE COUPE 2.0 190 LUXURY LINE"
  },
  {
      "id": 1610,
      "brandId": 21,
      "name": "430i XDRIVE CABRIO 2.0 252 PURE"
  },
  {
      "id": 1611,
      "brandId": 21,
      "name": "430i XDRIVE CABRIO 2.0 252 SPORT LINE"
  },
  {
      "id": 1612,
      "brandId": 21,
      "name": "430i XDRIVECABRIO 2.0 252 LUXURY LINE"
  },
  {
      "id": 1613,
      "brandId": 21,
      "name": "430i XDRIVE CABRIO M SPORT"
  },
  {
      "id": 1614,
      "brandId": 21,
      "name": "420d CABRIO 2.0 190 PURE"
  },
  {
      "id": 1615,
      "brandId": 21,
      "name": "430i XDRIVE GRAN COUPE SPORT LINE"
  },
  {
      "id": 1616,
      "brandId": 21,
      "name": "430i XDRIVE GRAN COUPE M SPORT"
  },
  {
      "id": 1617,
      "brandId": 21,
      "name": "430i XDRIVE GRAN COUPE 2.0 252 LUXURY LINE"
  },
  {
      "id": 1618,
      "brandId": 21,
      "name": "530i SEDAN 2.0 252 EXECUTIVE SPORT LINE"
  },
  {
      "id": 1619,
      "brandId": 21,
      "name": "530i SEDAN 2.0 252 EXECUTIVE LUXURY LINE"
  },
  {
      "id": 1620,
      "brandId": 21,
      "name": "530i XDRIVESEDAN 2.0 252 EXECUTIVE SPORT LINE"
  },
  {
      "id": 1621,
      "brandId": 21,
      "name": "530i XDRIVE SEDAN EXECUTIVE LUXURY LINE"
  },
  {
      "id": 1622,
      "brandId": 21,
      "name": "540i XDRIVE SEDAN 3.0 340 PURE"
  },
  {
      "id": 1623,
      "brandId": 21,
      "name": "M550i XDRIVE SEDAN PURE"
  },
  {
      "id": 1624,
      "brandId": 21,
      "name": "520d XDRIVE SEDAN 2.0 190 P20"
  },
  {
      "id": 1625,
      "brandId": 21,
      "name": "M550d XDRIVE SEDAN 3.0 400 PURE"
  },
  {
      "id": 1626,
      "brandId": 21,
      "name": "M550d XDRIVE TOURING 3.0 400 PURE"
  },
  {
      "id": 1628,
      "brandId": 21,
      "name": "630i GRAN TURISMO 2.0 258 PURE"
  },
  {
      "id": 1629,
      "brandId": 21,
      "name": "730i 2.0 (258) PURE"
  },
  {
      "id": 1630,
      "brandId": 21,
      "name": "740Ld XDRIVE 3.0 (320)"
  },
  {
      "id": 1631,
      "brandId": 21,
      "name": "740Ld XDRIVE 3.0 (320) PURE EXCELLENCE"
  },
  {
      "id": 1632,
      "brandId": 21,
      "name": "740Ld XDRIVE 3.0 (320) M EXCELLENCE"
  },
  {
      "id": 1633,
      "brandId": 21,
      "name": "X3 SDRIVE20i 1.6 (170) FIRST EDITION X"
  },
  {
      "id": 1634,
      "brandId": 21,
      "name": "X3 SDRIVE20i 1.6 (170) FIRST EDITION M"
  },
  {
      "id": 1635,
      "brandId": 21,
      "name": "X3 SDIRVE20i 1.6 (170) FIRST EDITION LUXURY"
  },
  {
      "id": 1636,
      "brandId": 21,
      "name": "X5 XDRIVE20d 2.0 (231) EXCELLENCE"
  },
  {
      "id": 1637,
      "brandId": 21,
      "name": "X5 XDRIVE25d 2.0 (231) M EXCELLENCE"
  },
  {
      "id": 1638,
      "brandId": 21,
      "name": "X6 XDRIVE40d 3.0 (313) PURE EXCELLENCE"
  },
  {
      "id": 1639,
      "brandId": 21,
      "name": "M3 SEDAN 3.0 (450) M COMPETITION"
  },
  {
      "id": 1640,
      "brandId": 21,
      "name": "M4 COUPE 3.0 (450) M COMPETITION"
  },
  {
      "id": 1641,
      "brandId": 21,
      "name": "M4 COUPE CS 3.0 (460) M COMPETITION"
  },
  {
      "id": 1642,
      "brandId": 21,
      "name": "M4 CABRIO 3.0 (450) M COMPETITION"
  },
  {
      "id": 1643,
      "brandId": 21,
      "name": "M5 SEDAN 4.4 (600) PURE"
  },
  {
      "id": 1644,
      "brandId": 21,
      "name": "X5 M 4.4 (575) BLACK FIRE EDITION"
  },
  {
      "id": 1645,
      "brandId": 21,
      "name": "X6 M 4.4 (575) BLACK FIRE EDITION"
  },
  {
      "id": 1646,
      "brandId": 21,
      "name": "i3 (170)"
  },
  {
      "id": 1647,
      "brandId": 21,
      "name": "i3 LOFT (170)"
  },
  {
      "id": 1648,
      "brandId": 21,
      "name": "i3 LODGE (170)"
  },
  {
      "id": 1649,
      "brandId": 21,
      "name": "i3 SUITE (170)"
  },
  {
      "id": 1650,
      "brandId": 21,
      "name": "i3s (184)"
  },
  {
      "id": 1651,
      "brandId": 21,
      "name": "i3s LOFT (184)"
  },
  {
      "id": 1652,
      "brandId": 21,
      "name": "i3s LODGE (184)"
  },
  {
      "id": 1653,
      "brandId": 21,
      "name": "i3s SUITE (184)"
  },
  {
      "id": 1654,
      "brandId": 21,
      "name": "118i 1.5 (136)"
  },
  {
      "id": 1655,
      "brandId": 21,
      "name": "118i 1.5 (136) PREMIUM LINE"
  },
  {
      "id": 1656,
      "brandId": 21,
      "name": "116d 1.5 (116) PREMIUM LINE"
  },
  {
      "id": 1657,
      "brandId": 21,
      "name": "218i COUPE 1.5 (136) PREMIUM LINE"
  },
  {
      "id": 1658,
      "brandId": 21,
      "name": "218i CABRIO 1.5 (136) PREMIUM LINE"
  },
  {
      "id": 1659,
      "brandId": 21,
      "name": "218i ACTIVE TOURER 1.5 (136) PREMIUM LINE"
  },
  {
      "id": 1660,
      "brandId": 21,
      "name": "216d ACTIVE TOURER 1.5 (116) PREMIUM LINE"
  },
  {
      "id": 1661,
      "brandId": 21,
      "name": "216d GRAN TOURER 1.5 (116) PREMIUM LINE"
  },
  {
      "id": 1662,
      "brandId": 21,
      "name": "318i SEDAN 1.5 (136) PREMIUM LINE"
  },
  {
      "id": 1663,
      "brandId": 21,
      "name": "330i SEDAN 2.0 (252) PREMIUM LINE"
  },
  {
      "id": 1664,
      "brandId": 21,
      "name": "330i XDRIVE SEDAN 2.0 (252)"
  },
  {
      "id": 1665,
      "brandId": 21,
      "name": "330i XDRIVE SEDAN 2.0 (252) PREMIUM LINE"
  },
  {
      "id": 1666,
      "brandId": 21,
      "name": "320d SEDAN 2.0 (190) PREMIUM LINE"
  },
  {
      "id": 1667,
      "brandId": 21,
      "name": "320d XDRIVE SEDAN 2.0 190) PREMIUM LINE"
  },
  {
      "id": 1668,
      "brandId": 21,
      "name": "420d XDRIVE COUPE 2.0 (190)"
  },
  {
      "id": 1669,
      "brandId": 21,
      "name": "418d GRAN COUPE 2.0 (150)"
  },
  {
      "id": 1671,
      "brandId": 21,
      "name": "420d XDRIVE GRAN COUPE 2.0 190 M SPORT"
  },
  {
      "id": 1672,
      "brandId": 21,
      "name": "420d XDRIVE GRAN COUPE 2.0 190 LUXURY LINE"
  },
  {
      "id": 1673,
      "brandId": 21,
      "name": "520i SEDAN 1.6 (170) ULTIMATE LUXURY"
  },
  {
      "id": 1674,
      "brandId": 21,
      "name": "530i SEDAN 2.0 252 ULTIMATE LUXURY"
  },
  {
      "id": 1675,
      "brandId": 21,
      "name": "530i XDRIVE SEDAN 2.0 252 ULTIMATE LUXURY"
  },
  {
      "id": 1676,
      "brandId": 21,
      "name": "540i  XDRIVE SEDAN 3.0 (340)"
  },
  {
      "id": 1677,
      "brandId": 21,
      "name": "540i XDRIVE SEDAN 3.0 340 ULTIMATE LUXURY"
  },
  {
      "id": 1678,
      "brandId": 21,
      "name": "M550i XDRIVE SEDAN 4.4 462 M SPORT"
  },
  {
      "id": 1679,
      "brandId": 21,
      "name": "520d SEDAN 2.0 (190)"
  },
  {
      "id": 1680,
      "brandId": 21,
      "name": "520d SEDAN 2.0 (190) ULTIMATE LUXURY"
  },
  {
      "id": 1681,
      "brandId": 21,
      "name": "520d XDRIVE SEDAN 2.0 (190)"
  },
  {
      "id": 1682,
      "brandId": 21,
      "name": "520d XDRIVE SEDAN 2.0 190 ULTIMATE LUXURY"
  },
  {
      "id": 1683,
      "brandId": 21,
      "name": "M550d XDRIVESEDAN 3.0 400 M SPORT"
  },
  {
      "id": 1684,
      "brandId": 21,
      "name": "M550d XDRIVE TOURING 3.0 400 M SPORT"
  },
  {
      "id": 1685,
      "brandId": 21,
      "name": "630i GRAN TOURISMO 2.0 (258)"
  },
  {
      "id": 1686,
      "brandId": 21,
      "name": "X1 SDRIVE 1.5 136 PREMIUM LINE"
  },
  {
      "id": 1687,
      "brandId": 21,
      "name": "X1 XDRIVE20d 2.0 190 PREMIUM LINE"
  },
  {
      "id": 1688,
      "brandId": 21,
      "name": "X5 XDRIVE0e iPERFORMANCE 2..0 313 PREMIUMLINE"
  },
  {
      "id": 1689,
      "brandId": 21,
      "name": "X5 XDRIVE40e iPERFORMANCE 2.0 313 EXCELLENCE"
  },
  {
      "id": 1690,
      "brandId": 21,
      "name": "X5 XDRIVE0e ¦PERFORMACE 2.0 313 M SPORT"
  },
  {
      "id": 1691,
      "brandId": 21,
      "name": "X5 XDRIVE40e iPERFORMANCE 2.0 313 MEXCELLENCE"
  },
  {
      "id": 1692,
      "brandId": 21,
      "name": "X5 XDRIVE25d 2.0 231 PREMIUM LINE"
  },
  {
      "id": 1693,
      "brandId": 21,
      "name": "M2 COUPE 3.0 370 M SPORT"
  },
  {
      "id": 1694,
      "brandId": 21,
      "name": "M5 SEDAN 4.4 600 M SPORT"
  },
  {
      "id": 1695,
      "brandId": 21,
      "name": "M760Li XDRIVE 6.0 609 M SPORT"
  },
  {
      "id": 1696,
      "brandId": 21,
      "name": "i8 COUPE 1.5 (374)"
  },
  {
      "id": 1697,
      "brandId": 21,
      "name": "i8 ROADSTER 1.5 (374)"
  },
  {
      "id": 1698,
      "brandId": 21,
      "name": "320d SEDAN 2.0 190 EDITION SPORT LINE"
  },
  {
      "id": 1699,
      "brandId": 21,
      "name": "320d SEDAN 2.0 190 EDITION M SPORT"
  },
  {
      "id": 1700,
      "brandId": 21,
      "name": "320d SEDAN 2.0 190 EDITION LUXURY LINE"
  },
  {
      "id": 1701,
      "brandId": 21,
      "name": "X1 sDRIVE16d 1.5 (116) PREMIUM LINE"
  },
  {
      "id": 1702,
      "brandId": 21,
      "name": "420d CABRIO 2.0 (190)"
  },
  {
      "id": 1703,
      "brandId": 21,
      "name": "418d GRAN COUPE 2.0 (150) SPORT LINE"
  },
  {
      "id": 1704,
      "brandId": 21,
      "name": "418d GRAN COUPE 2.0 (150) M SPORT"
  },
  {
      "id": 1705,
      "brandId": 21,
      "name": "418d GRAN COUPE 2.0 (150) LUXURY LINE"
  },
  {
      "id": 1706,
      "brandId": 21,
      "name": "725d 2.0 (231)"
  },
  {
      "id": 1707,
      "brandId": 21,
      "name": "725Ld 2.0 (231)"
  },
  {
      "id": 1708,
      "brandId": 21,
      "name": "X5 XDRIVE25d 2.0 (231) EXCELLENCE"
  },
  {
      "id": 1709,
      "brandId": 21,
      "name": "X6 XDRIVE 40d 3.0 (313) PURE EXTRAVAGANCE"
  },
  {
      "id": 1710,
      "brandId": 21,
      "name": "i8 COUPE 1.5 (374) HALO"
  },
  {
      "id": 1711,
      "brandId": 21,
      "name": "i8 COUPE 1.5 (374) ACCARO"
  },
  {
      "id": 1712,
      "brandId": 21,
      "name": "i8 ROADSTAR 1.5 (374) HALO"
  },
  {
      "id": 1713,
      "brandId": 21,
      "name": "i8 ROADSTER 1.5 (374) ACCARO"
  },
  {
      "id": 1714,
      "brandId": 21,
      "name": "X2 SDRIVE 18i 1.5 140"
  },
  {
      "id": 1715,
      "brandId": 21,
      "name": "X2 SDRIVE 18i 1.5 140 PREMIUM LINE"
  },
  {
      "id": 1716,
      "brandId": 21,
      "name": "X2 SDRIVE 18i 1.5 140 M SPORT"
  },
  {
      "id": 1717,
      "brandId": 21,
      "name": "X2 SDRIVE 18i 1.5 140 M SPORT X"
  },
  {
      "id": 1718,
      "brandId": 21,
      "name": "X2 XDRIVE20d 2.0 190"
  },
  {
      "id": 1719,
      "brandId": 21,
      "name": "X2 XDRIVE20d 2.0 190 PREMIUM LINE"
  },
  {
      "id": 1720,
      "brandId": 21,
      "name": "X2 XDRIVE20d 2.0 190 M SPORT"
  },
  {
      "id": 1721,
      "brandId": 21,
      "name": "X2 XDRIVE20d 2.0 190 M SPORT X"
  },
  {
      "id": 1722,
      "brandId": 21,
      "name": "430i XDRIVE CABRIO LCI EXECUTIVE LUXURY LINE"
  },
  {
      "id": 1723,
      "brandId": 21,
      "name": "418d COUPE 2.0 150 M SPORT"
  },
  {
      "id": 1724,
      "brandId": 21,
      "name": "740d XDRIVE 3.0 (320)"
  },
  {
      "id": 1725,
      "brandId": 21,
      "name": "740d XDRIVE 3.0 (320) PURE EXCELLENCE"
  },
  {
      "id": 1726,
      "brandId": 21,
      "name": "740d XDRIVE 3.0 (320) M EXCELLENCE"
  },
  {
      "id": 1727,
      "brandId": 21,
      "name": "X3 SDRIVE20i 1.6 (170) X LINE"
  },
  {
      "id": 1728,
      "brandId": 21,
      "name": "X3 SDRIVE20i 1.6 (170) M SPORT"
  },
  {
      "id": 1729,
      "brandId": 21,
      "name": "X3 SDRIVE20i 1.6 (170) LUXURY LINE"
  },
  {
      "id": 1730,
      "brandId": 21,
      "name": "X3 XDRIVE20d 2.0 (190) X LINE"
  },
  {
      "id": 1731,
      "brandId": 21,
      "name": "X3 XDRIVE20d 2.0 (190) M SPORT"
  },
  {
      "id": 1732,
      "brandId": 21,
      "name": "X3 XDRIVE20d 2.0 (190) LUXURY LINE"
  },
  {
      "id": 1733,
      "brandId": 21,
      "name": "M240i XDRIVE COUPE"
  },
  {
      "id": 1734,
      "brandId": 21,
      "name": "X3 SDRIVE20i 1.6 (170)"
  },
  {
      "id": 1735,
      "brandId": 21,
      "name": "620d XDRIVE GRAN TURISMO 2.0 (190)"
  },
  {
      "id": 1736,
      "brandId": 21,
      "name": "620d XDRIVE GRAN TURISMO 2.0 (190) SPORT LINE"
  },
  {
      "id": 1737,
      "brandId": 21,
      "name": "620d XDRIVE GRAN TURISMO 2.0 190 LUXURY LINE"
  },
  {
      "id": 1738,
      "brandId": 21,
      "name": "620d XDRIVE GRAN TURISMO 2.0 (190) M SPORT"
  },
  {
      "id": 1739,
      "brandId": 21,
      "name": "116i OV M AERODINAMI"
  },
  {
      "id": 1740,
      "brandId": 21,
      "name": "320i ED 170 SEDAN MODERN LINE PLUS"
  },
  {
      "id": 1741,
      "brandId": 21,
      "name": "X3 M40i"
  },
  {
      "id": 1742,
      "brandId": 21,
      "name": "X1 SDRIVE18i 1.5 (140)"
  },
  {
      "id": 1743,
      "brandId": 21,
      "name": "640i XDRIVE GRAN TURISMO 3.0 (340) MSPORT"
  },
  {
      "id": 1744,
      "brandId": 21,
      "name": "118i 1.5 (136) ONE EDITION M"
  },
  {
      "id": 1745,
      "brandId": 21,
      "name": "116d 1.5 (116) PREMIUM LINE VISION PLUS"
  },
  {
      "id": 1746,
      "brandId": 21,
      "name": "M2 COUPE COMPETITION M TECHNOLOGY"
  },
  {
      "id": 1747,
      "brandId": 21,
      "name": "M5 SEDAN COMPETITION"
  },
  {
      "id": 1748,
      "brandId": 21,
      "name": "730 LD XDRIVE 3.0"
  },
  {
      "id": 1749,
      "brandId": 21,
      "name": "320i SEDAN 1.6 170 FIRST EDITION SPORT LINE"
  },
  {
      "id": 1750,
      "brandId": 21,
      "name": "320i SEDAN 1.6 170 FIRST EDITION LUXURY LINE"
  },
  {
      "id": 1751,
      "brandId": 21,
      "name": "320i SEDAN 1.6 170 FIRST EDITION M SPORT"
  },
  {
      "id": 1752,
      "brandId": 21,
      "name": "X1 SDRIVE18i 1.5 140 PREMIUM LINE"
  },
  {
      "id": 1753,
      "brandId": 21,
      "name": "X1 SDRIVE18i 1.5 140 XLINE"
  },
  {
      "id": 1754,
      "brandId": 21,
      "name": "X1 SDRIVE18i 1.5 140 M SPORT"
  },
  {
      "id": 1755,
      "brandId": 21,
      "name": "Z4 SDRIVE30i 2.0 258 M SPORT"
  },
  {
      "id": 1756,
      "brandId": 21,
      "name": "Z4 SDRIVE30i 2.0 258 EDITION M SPORT"
  },
  {
      "id": 1757,
      "brandId": 21,
      "name": "520i SEDAN 1.6 (170) SPECIAL EDITION LUXURY"
  },
  {
      "id": 1758,
      "brandId": 21,
      "name": "520i SEDAN 1.6 (170) SPECIAL EDITION M SPORT"
  },
  {
      "id": 1759,
      "brandId": 21,
      "name": "X2 SDRIVE 16d 1.5 116 M SPORT"
  },
  {
      "id": 1760,
      "brandId": 21,
      "name": "X2 SDRIVE 16d 1.5 116 M SPORT X"
  },
  {
      "id": 1761,
      "brandId": 21,
      "name": "840i XDRIVE COUPE M SPORT"
  },
  {
      "id": 1762,
      "brandId": 21,
      "name": "840i XDRIVE COUPE M TECHNIC"
  },
  {
      "id": 1763,
      "brandId": 21,
      "name": "840i XDRIVE CABRIO M SPORT"
  },
  {
      "id": 1764,
      "brandId": 21,
      "name": "840i XDRIVE CABRIO M TECHNIC"
  },
  {
      "id": 1765,
      "brandId": 21,
      "name": "840d XDRIVE GRAN COUPE M SPORT"
  },
  {
      "id": 1766,
      "brandId": 21,
      "name": "840d XDRIVE GRAN COUPE M TECHNIC"
  },
  {
      "id": 1767,
      "brandId": 21,
      "name": "745Le XDRIVE 3.0 (286) PURE EXCELLENCE"
  },
  {
      "id": 1768,
      "brandId": 21,
      "name": "745Le XDRIVE 3.0 (286) M EXCELLENCE"
  },
  {
      "id": 1769,
      "brandId": 21,
      "name": "530i XDRIVESEDAN 2.0 252 SPECIALEDITIONMSPORT"
  },
  {
      "id": 1770,
      "brandId": 21,
      "name": "118i 1.5 140 FIRST EDITION SPORT LINE"
  },
  {
      "id": 1771,
      "brandId": 21,
      "name": "118i 1.5 140 FIRST EDITION M SPORT"
  },
  {
      "id": 1772,
      "brandId": 21,
      "name": "116d 1.5 116 FIRST EDITION SPORT LINE"
  },
  {
      "id": 1773,
      "brandId": 21,
      "name": "116d 1.5 116 FIRST EDITION M SPORT"
  },
  {
      "id": 1774,
      "brandId": 21,
      "name": "X5 XDRIVE40i"
  },
  {
      "id": 1775,
      "brandId": 21,
      "name": "M850i XDRIVE COUPE"
  },
  {
      "id": 1776,
      "brandId": 21,
      "name": "530i XDRIVESEDAN 2.0 252 SPECIALEDITIONLUXURY"
  },
  {
      "id": 1777,
      "brandId": 21,
      "name": "440i XDRIVE COUPE LCI"
  },
  {
      "id": 1778,
      "brandId": 21,
      "name": "340i XDRIVE SEDAN EXECUTIVE EDITION M SPORT"
  },
  {
      "id": 1779,
      "brandId": 21,
      "name": "750 Li XDRIVE"
  },
  {
      "id": 1780,
      "brandId": 21,
      "name": "116d 1.5 116 FIRST EDITION LUXURY LINE"
  },
  {
      "id": 1781,
      "brandId": 21,
      "name": "730Li 2.0 (258) PURE EXCELLENCE"
  },
  {
      "id": 1782,
      "brandId": 21,
      "name": "730Li 2.0 (258)  M EXCELLENCE"
  },
  {
      "id": 1783,
      "brandId": 21,
      "name": "118i 1.5 140 SPORT LINE"
  },
  {
      "id": 1784,
      "brandId": 21,
      "name": "118i 1.5 140 M SPORT"
  },
  {
      "id": 1785,
      "brandId": 21,
      "name": "116d 1.5 116 SPORT LINE"
  },
  {
      "id": 1786,
      "brandId": 21,
      "name": "520d XDRIVE SEDAN 2.0 190 SPECIAL EDITION LUX"
  },
  {
      "id": 1787,
      "brandId": 21,
      "name": "520d XDRIVE 2.0 190 SPECIAL EDITION M SPORT"
  },
  {
      "id": 1788,
      "brandId": 21,
      "name": "840i XDRIVE GRAN COUPE M SPORT"
  },
  {
      "id": 1789,
      "brandId": 21,
      "name": "840i XDRIVE GRAN COUPE M TECHNIC"
  },
  {
      "id": 1790,
      "brandId": 21,
      "name": "218i GRAN COUPE 1.5 140 FIRSTEDITIONSPORTLINE"
  },
  {
      "id": 1791,
      "brandId": 21,
      "name": "218i GRANCOUPE 1.5 140 FIRSTEDITIONLUXURYLINE"
  },
  {
      "id": 1792,
      "brandId": 21,
      "name": "218i GRAN COUPE 1.5 140 FIRST EDITION M SPORT"
  },
  {
      "id": 1793,
      "brandId": 21,
      "name": "216d GRAN COUPE 1.5 116 FIRSTEDITIONSPORTLINE"
  },
  {
      "id": 1794,
      "brandId": 21,
      "name": "216d GRANCOUPE1.5 116 FIRSTEDITIONLUXURYLINE"
  },
  {
      "id": 1795,
      "brandId": 21,
      "name": "216d GRAN COUPE 1.5 116 FIRST EDITION M SPORT"
  },
  {
      "id": 1796,
      "brandId": 21,
      "name": "M4 COUPE LCI 3.0 (450) M COMPETITION"
  },
  {
      "id": 1797,
      "brandId": 21,
      "name": "418i COUPE LCI 1.5 136 PURE"
  },
  {
      "id": 1798,
      "brandId": 21,
      "name": "M8 GRAN COUPE COMPETITION XDRIVE"
  },
  {
      "id": 1799,
      "brandId": 21,
      "name": "i3 (120 Ah) EDITION ELECTRIC"
  },
  {
      "id": 1800,
      "brandId": 21,
      "name": "X1 SDRIVE18i 140 SPORT LINE"
  },
  {
      "id": 1801,
      "brandId": 21,
      "name": "M8 COUPE XDRIVE COMTETITION"
  },
  {
      "id": 1802,
      "brandId": 21,
      "name": "M8 CABRIO XDRIVE COMPETITION"
  },
  {
      "id": 1803,
      "brandId": 21,
      "name": "M235i XDRIVE 2.0 306 M PERFORMANCE EDITION"
  },
  {
      "id": 1804,
      "brandId": 21,
      "name": "M5 XDRIVE SEDAN COMPETITION"
  },
  {
      "id": 1805,
      "brandId": 21,
      "name": "M760Li XDRIVE SEDAN 6.6 609"
  },
  {
      "id": 1806,
      "brandId": 21,
      "name": "118i 5 KAPI M SPORT"
  },
  {
      "id": 1807,
      "brandId": 21,
      "name": "520i SEDAN LCI 1.6 170 LUXURY LINE"
  },
  {
      "id": 1808,
      "brandId": 21,
      "name": "520i SEDAN LCI 1.6 170 M SPORT"
  },
  {
      "id": 1809,
      "brandId": 21,
      "name": "520i SEDAN LCI 1.6 170 SPECIAL EDITION LUXURY"
  },
  {
      "id": 1810,
      "brandId": 21,
      "name": "520i SEDAN LCI 1.6 170 SPECIAL EDITION MSPORT"
  },
  {
      "id": 1811,
      "brandId": 21,
      "name": "530i XDRIVE LCI 2.0 252 SPECIALEDITION LUXU.L"
  },
  {
      "id": 1812,
      "brandId": 21,
      "name": "530i XDRIVE LCI 2.0 252 SPECIALEDITON M SPORT"
  },
  {
      "id": 1813,
      "brandId": 21,
      "name": "520d XDRIVE LCI 2.0 190 SPECIALEDITION LUX.LI"
  },
  {
      "id": 1814,
      "brandId": 21,
      "name": "520d XDRIVE LCI 2.0 190 SPECIALEDITION MSPORT"
  },
  {
      "id": 1815,
      "brandId": 21,
      "name": "730Li SEDAN 2.0 265 PURE EXCELLENCE"
  },
  {
      "id": 1816,
      "brandId": 21,
      "name": "730Li SEDAN 2.0 265 M EXCELLENCE"
  },
  {
      "id": 1817,
      "brandId": 21,
      "name": "740Ld XDRIVE 3.0 340 MILD HYBRID PURE EXCELLE"
  },
  {
      "id": 1818,
      "brandId": 21,
      "name": "740Ld XDRIVE 3.0 340 MILD HYBRID M EXCELLENCE"
  },
  {
      "id": 1819,
      "brandId": 21,
      "name": "316i SEDAN M SPORT"
  },
  {
      "id": 1820,
      "brandId": 21,
      "name": "M2 COUPE COMPETITION FUTURE EDITION"
  },
  {
      "id": 1821,
      "brandId": 21,
      "name": "i3s (120 Ah) EDITION ELECTRIC"
  },
  {
      "id": 1822,
      "brandId": 21,
      "name": "730i 2.0 265 PURE EXCELLENCE"
  },
  {
      "id": 1823,
      "brandId": 21,
      "name": "730i 2.0 265 M EXCELLENCE"
  },
  {
      "id": 1824,
      "brandId": 21,
      "name": "M2 CS"
  },
  {
      "id": 1825,
      "brandId": 21,
      "name": "120d 2.0"
  },
  {
      "id": 1826,
      "brandId": 21,
      "name": "116d 1.5 116 LUXURY LINE"
  },
  {
      "id": 1827,
      "brandId": 21,
      "name": "118i 1.5 140 LUXURY LINE"
  },
  {
      "id": 1828,
      "brandId": 21,
      "name": "316i TOURING LUXURY LINE PLUS"
  },
  {
      "id": 1829,
      "brandId": 21,
      "name": "420i COUPE 1.6 170 EDITION M SPORT"
  },
  {
      "id": 1830,
      "brandId": 21,
      "name": "430i COUPE 2.0 258 EDITION M SPORT"
  },
  {
      "id": 1831,
      "brandId": 21,
      "name": "M440i XDRIVE COUPE"
  },
  {
      "id": 1832,
      "brandId": 21,
      "name": "320i SEDAN 1.6 170 SPORT LINE"
  },
  {
      "id": 1833,
      "brandId": 21,
      "name": "320i SEDAN 1.6 170 LUXURY LINE"
  },
  {
      "id": 1834,
      "brandId": 21,
      "name": "320i SEDAN 1.6 170 M SPORT"
  },
  {
      "id": 528,
      "brandId": 21,
      "name": "318i SEDAN"
  },
  {
      "id": 529,
      "brandId": 21,
      "name": "Z4 M ROADSTAR"
  },
  {
      "id": 530,
      "brandId": 21,
      "name": "320 Si"
  },
  {
      "id": 532,
      "brandId": 21,
      "name": "335d SEDAN"
  },
  {
      "id": 533,
      "brandId": 21,
      "name": "325i COUPE"
  },
  {
      "id": 534,
      "brandId": 21,
      "name": "325xi COUPE"
  },
  {
      "id": 535,
      "brandId": 21,
      "name": "330i COUPE"
  },
  {
      "id": 536,
      "brandId": 21,
      "name": "330d COUPE"
  },
  {
      "id": 537,
      "brandId": 21,
      "name": "330xd COUPE"
  },
  {
      "id": 538,
      "brandId": 21,
      "name": "335i COUPE"
  },
  {
      "id": 539,
      "brandId": 21,
      "name": "335d COUPE"
  },
  {
      "id": 540,
      "brandId": 21,
      "name": "X3 2.5si"
  },
  {
      "id": 541,
      "brandId": 21,
      "name": "X3 3.0si"
  },
  {
      "id": 542,
      "brandId": 21,
      "name": "X3 3.0sd"
  },
  {
      "id": 543,
      "brandId": 21,
      "name": "M6 CABRIO"
  },
  {
      "id": 544,
      "brandId": 21,
      "name": "320 Si SEDAN"
  },
  {
      "id": 545,
      "brandId": 21,
      "name": "335i SEDAN"
  },
  {
      "id": 546,
      "brandId": 21,
      "name": "Z4 3.0 Si COUPE"
  },
  {
      "id": 547,
      "brandId": 21,
      "name": "X5 3.0 si"
  },
  {
      "id": 548,
      "brandId": 21,
      "name": "X5 4.8i"
  },
  {
      "id": 549,
      "brandId": 21,
      "name": "118i"
  },
  {
      "id": 550,
      "brandId": 21,
      "name": "335i CABRIO"
  },
  {
      "id": 551,
      "brandId": 21,
      "name": "320i CABRIO"
  },
  {
      "id": 552,
      "brandId": 21,
      "name": "335xi SEDAN"
  },
  {
      "id": 553,
      "brandId": 21,
      "name": "320i COUPE"
  },
  {
      "id": 554,
      "brandId": 21,
      "name": "320d COUPE"
  },
  {
      "id": 555,
      "brandId": 21,
      "name": "330 xi COUPE"
  },
  {
      "id": 556,
      "brandId": 21,
      "name": "330i CABRIO"
  },
  {
      "id": 558,
      "brandId": 21,
      "name": "325i CABRIO"
  },
  {
      "id": 559,
      "brandId": 21,
      "name": "330d CABRIO"
  },
  {
      "id": 560,
      "brandId": 21,
      "name": "Z4 M COUPE"
  },
  {
      "id": 561,
      "brandId": 21,
      "name": "Z4 2.0 ROADSTAR"
  },
  {
      "id": 562,
      "brandId": 21,
      "name": "520d"
  },
  {
      "id": 563,
      "brandId": 21,
      "name": "520d PREMIUM"
  },
  {
      "id": 564,
      "brandId": 21,
      "name": "116i PREMIUM"
  },
  {
      "id": 565,
      "brandId": 21,
      "name": "118iA"
  },
  {
      "id": 566,
      "brandId": 21,
      "name": "118iA PREMIUM"
  },
  {
      "id": 567,
      "brandId": 21,
      "name": "316i SEDAN PREMIUM"
  },
  {
      "id": 568,
      "brandId": 21,
      "name": "320i SEDAN PREMIUM"
  },
  {
      "id": 569,
      "brandId": 21,
      "name": "320d SEDAN PREMIUM"
  },
  {
      "id": 570,
      "brandId": 21,
      "name": "120d PREMIUM"
  },
  {
      "id": 571,
      "brandId": 21,
      "name": "120d COUPE"
  },
  {
      "id": 572,
      "brandId": 21,
      "name": "123d COUPE"
  },
  {
      "id": 573,
      "brandId": 21,
      "name": "X3 2.0d PREMIUM"
  },
  {
      "id": 574,
      "brandId": 21,
      "name": "116i / 3"
  },
  {
      "id": 575,
      "brandId": 21,
      "name": "635 d COUPE"
  },
  {
      "id": 576,
      "brandId": 21,
      "name": "635 d CABRIO"
  },
  {
      "id": 577,
      "brandId": 21,
      "name": "X5 3.0 sd"
  },
  {
      "id": 578,
      "brandId": 21,
      "name": "320d CABRIO"
  },
  {
      "id": 579,
      "brandId": 21,
      "name": "730Ld INDIVIDUAL EDITION"
  },
  {
      "id": 580,
      "brandId": 21,
      "name": "X6 xDRIVE 50i"
  },
  {
      "id": 581,
      "brandId": 21,
      "name": "X6 xDRIVE 30d"
  },
  {
      "id": 582,
      "brandId": 21,
      "name": "X6 xDRIVE 35d"
  },
  {
      "id": 583,
      "brandId": 21,
      "name": "120d CABRIO"
  },
  {
      "id": 584,
      "brandId": 21,
      "name": "120i CABRIO"
  },
  {
      "id": 585,
      "brandId": 21,
      "name": "318d SEDAN"
  },
  {
      "id": 586,
      "brandId": 21,
      "name": "318d SEDAN PREMIUM"
  },
  {
      "id": 587,
      "brandId": 21,
      "name": "320d SEDAN XDRIVE"
  },
  {
      "id": 588,
      "brandId": 21,
      "name": "330d SEDAN XDRIVE"
  },
  {
      "id": 589,
      "brandId": 21,
      "name": "335i SEDAN XDRIVE"
  },
  {
      "id": 590,
      "brandId": 21,
      "name": "320d COUPE XDRIVE"
  },
  {
      "id": 591,
      "brandId": 21,
      "name": "330d COUPE XDRIVE"
  },
  {
      "id": 592,
      "brandId": 21,
      "name": "530i XDRIVE"
  },
  {
      "id": 593,
      "brandId": 21,
      "name": "530d XDRIVE"
  },
  {
      "id": 594,
      "brandId": 21,
      "name": "X3 3.5d"
  },
  {
      "id": 595,
      "brandId": 21,
      "name": "X5 3.5d"
  },
  {
      "id": 596,
      "brandId": 21,
      "name": "X3 XDRIVE 20d"
  },
  {
      "id": 597,
      "brandId": 21,
      "name": "X3 XDRIVE 20d PREMIUM"
  },
  {
      "id": 598,
      "brandId": 21,
      "name": "X3 XDRIVE 30d"
  },
  {
      "id": 599,
      "brandId": 21,
      "name": "X3 XDRIVE 35d"
  },
  {
      "id": 600,
      "brandId": 21,
      "name": "X5 XDRIVE 30d"
  },
  {
      "id": 601,
      "brandId": 21,
      "name": "X5 XDRIVE 35d"
  },
  {
      "id": 602,
      "brandId": 21,
      "name": "X5 XDRIVE 48i"
  },
  {
      "id": 603,
      "brandId": 21,
      "name": "765i"
  },
  {
      "id": 604,
      "brandId": 21,
      "name": "Z4 sDRIVE 35i"
  },
  {
      "id": 605,
      "brandId": 21,
      "name": "116i COMFORT"
  },
  {
      "id": 606,
      "brandId": 21,
      "name": "116i EXCLUSIVE"
  },
  {
      "id": 607,
      "brandId": 21,
      "name": "316i SEDAN ADVANTAGE"
  },
  {
      "id": 608,
      "brandId": 21,
      "name": "316i SEDAN EXCLUSIVE"
  },
  {
      "id": 609,
      "brandId": 21,
      "name": "Z4 sDRIVE 23i"
  },
  {
      "id": 610,
      "brandId": 21,
      "name": "320d SEDAN ADVANTAGE"
  },
  {
      "id": 611,
      "brandId": 21,
      "name": "320d SEDAN COMFORT"
  },
  {
      "id": 612,
      "brandId": 21,
      "name": "320d SEDAN M SPORT"
  },
  {
      "id": 613,
      "brandId": 21,
      "name": "320d SEDAN LUXURY"
  },
  {
      "id": 614,
      "brandId": 21,
      "name": "520d SEDAN COMFORT"
  },
  {
      "id": 615,
      "brandId": 21,
      "name": "750i XDRIVE"
  },
  {
      "id": 616,
      "brandId": 21,
      "name": "750Li XDRIVE"
  },
  {
      "id": 617,
      "brandId": 21,
      "name": "X5 M 4.4"
  },
  {
      "id": 618,
      "brandId": 21,
      "name": "X6 M 4.4"
  },
  {
      "id": 619,
      "brandId": 21,
      "name": "520d M SEDAN AERODINAMIK"
  },
  {
      "id": 620,
      "brandId": 21,
      "name": "X1 xDRIVE 20d"
  },
  {
      "id": 621,
      "brandId": 21,
      "name": "M3 COUPE"
  },
  {
      "id": 622,
      "brandId": 21,
      "name": "520d DYNAMIC"
  },
  {
      "id": 623,
      "brandId": 21,
      "name": "520d EXCLUSIVE"
  },
  {
      "id": 624,
      "brandId": 21,
      "name": "535i"
  },
  {
      "id": 625,
      "brandId": 21,
      "name": "X6 XDRIVE 40d"
  },
  {
      "id": 626,
      "brandId": 21,
      "name": "X5 XDRIVE 40d"
  },
  {
      "id": 627,
      "brandId": 21,
      "name": "620d SEDAN"
  },
  {
      "id": 649,
      "brandId": 21,
      "name": "116i 5 KAPI SPORT LINE"
  },
  {
      "id": 650,
      "brandId": 21,
      "name": "116i 5 KAPI URBAN LINE"
  },
  {
      "id": 651,
      "brandId": 21,
      "name": "118i 5 KAPI PURE"
  },
  {
      "id": 652,
      "brandId": 21,
      "name": "118i 5 KAPI ADVANTAGE"
  },
  {
      "id": 653,
      "brandId": 21,
      "name": "118i 5 KAPI COMFORT"
  },
  {
      "id": 655,
      "brandId": 21,
      "name": "118i 5 KAPI SPORT LINE"
  },
  {
      "id": 656,
      "brandId": 21,
      "name": "118i 5 KAPI URBAN LINE"
  },
  {
      "id": 657,
      "brandId": 21,
      "name": "316i SEDAN COMFORT"
  },
  {
      "id": 658,
      "brandId": 21,
      "name": "316i SEDAN SPORT"
  },
  {
      "id": 659,
      "brandId": 21,
      "name": "316i SEDAN COMFORT PLUS"
  },
  {
      "id": 660,
      "brandId": 21,
      "name": "316i SEDAN SPORT PLUS"
  },
  {
      "id": 661,
      "brandId": 21,
      "name": "320d SEDAN SPORT PLUS"
  },
  {
      "id": 662,
      "brandId": 21,
      "name": "320d SEDAN xDRIVE ADVANTAGE"
  },
  {
      "id": 663,
      "brandId": 21,
      "name": "320d SEDAN xDRIVE COMFORT"
  },
  {
      "id": 664,
      "brandId": 21,
      "name": "320d SEDAN xDRIVE SPORT"
  },
  {
      "id": 665,
      "brandId": 21,
      "name": "320 XDRIVE COMFORT PLUS"
  },
  {
      "id": 666,
      "brandId": 21,
      "name": "320d SEDAN XDRIVE SPORT PLUS"
  },
  {
      "id": 667,
      "brandId": 21,
      "name": "320d COUPE STYLE"
  },
  {
      "id": 668,
      "brandId": 21,
      "name": "320d COUPE LUXURY"
  },
  {
      "id": 669,
      "brandId": 21,
      "name": "320d COUPE M SPORT"
  },
  {
      "id": 670,
      "brandId": 21,
      "name": "320d CABRIO STYLE"
  },
  {
      "id": 671,
      "brandId": 21,
      "name": "320d CABRIO LUXURY"
  },
  {
      "id": 672,
      "brandId": 21,
      "name": "320d CABRIO M SPORT"
  },
  {
      "id": 673,
      "brandId": 21,
      "name": "520i BUSINESS"
  },
  {
      "id": 674,
      "brandId": 21,
      "name": "528i XDRIVE COMFORT"
  },
  {
      "id": 675,
      "brandId": 21,
      "name": "528i XDRIVE EXCLUSIVE"
  },
  {
      "id": 676,
      "brandId": 21,
      "name": "528i XDRIVE M SPORT"
  },
  {
      "id": 677,
      "brandId": 21,
      "name": "525d XDRIVE COMFORT"
  },
  {
      "id": 678,
      "brandId": 21,
      "name": "525d XDRIVE EXCLUSIVE"
  },
  {
      "id": 680,
      "brandId": 21,
      "name": "535d XDRIVE COMFORT"
  },
  {
      "id": 681,
      "brandId": 21,
      "name": "535d XDRIVE EXCLUSIVE"
  },
  {
      "id": 682,
      "brandId": 21,
      "name": "535d XDRIVE M SPORT"
  },
  {
      "id": 683,
      "brandId": 21,
      "name": "530d GRAN TURISMO XDRIVE PREMIUM"
  },
  {
      "id": 684,
      "brandId": 21,
      "name": "530d GRAN TURISMO XDRIVE M SPORT"
  },
  {
      "id": 685,
      "brandId": 21,
      "name": "535d GRAN TURISMO XDRIVE PREMIUM"
  },
  {
      "id": 686,
      "brandId": 21,
      "name": "535d GRAN TURISMO XDRIVE M SPORT"
  },
  {
      "id": 687,
      "brandId": 21,
      "name": "640i CABRIO DYNAMIC"
  },
  {
      "id": 688,
      "brandId": 21,
      "name": "640i CABRIO EXCLUSIVE"
  },
  {
      "id": 689,
      "brandId": 21,
      "name": "650i CABRIO DYNAMIC"
  },
  {
      "id": 690,
      "brandId": 21,
      "name": "650i CABRIO EXCLUSIVE"
  },
  {
      "id": 691,
      "brandId": 21,
      "name": "650i CABRIO XDRIVE DYNAMIC"
  },
  {
      "id": 692,
      "brandId": 21,
      "name": "650i CABRIO XDRIVE EXCLUSIVE"
  },
  {
      "id": 693,
      "brandId": 21,
      "name": "640d COUPE DYNAMIC"
  },
  {
      "id": 694,
      "brandId": 21,
      "name": "640d COUPE EXCLUSIVE"
  },
  {
      "id": 695,
      "brandId": 21,
      "name": "640i COUPE DYNAMIC"
  },
  {
      "id": 696,
      "brandId": 21,
      "name": "640i COUPE EXCLUSIVE"
  },
  {
      "id": 697,
      "brandId": 21,
      "name": "650i COUPE DYNAMIC"
  },
  {
      "id": 698,
      "brandId": 21,
      "name": "650i COUPE EXCLUSIVE"
  },
  {
      "id": 699,
      "brandId": 21,
      "name": "650i COUPE XDRIVE DYNAMIC"
  },
  {
      "id": 700,
      "brandId": 21,
      "name": "650i COUPE XDRIVE EXCLUSIVE"
  },
  {
      "id": 701,
      "brandId": 21,
      "name": "730d EXCLUSIVE"
  },
  {
      "id": 702,
      "brandId": 21,
      "name": "740d XDRIVE EXCLUSIVE"
  },
  {
      "id": 703,
      "brandId": 21,
      "name": "740d XDRIVE M SPORT"
  },
  {
      "id": 704,
      "brandId": 21,
      "name": "730 Ld COMFORT"
  },
  {
      "id": 705,
      "brandId": 21,
      "name": "730 Ld EXCLUSIVE"
  },
  {
      "id": 706,
      "brandId": 21,
      "name": "730 Ld EXCLUSIVE PRESTIGE"
  },
  {
      "id": 707,
      "brandId": 21,
      "name": "750 Li XDRIVE HIGH END"
  },
  {
      "id": 708,
      "brandId": 21,
      "name": "X3 XDRIVE 20d COMFORT"
  },
  {
      "id": 709,
      "brandId": 21,
      "name": "X3 XDRIVE 20d EXCLUSIVE"
  },
  {
      "id": 710,
      "brandId": 21,
      "name": "X3 XDRIVE 20d M SPORT"
  },
  {
      "id": 711,
      "brandId": 21,
      "name": "X5 XDRIVE 30d FAMILY"
  },
  {
      "id": 712,
      "brandId": 21,
      "name": "X5 XDRIVE 30d EXCLUSIVE"
  },
  {
      "id": 713,
      "brandId": 21,
      "name": "X5 XDRIVE 30d M SPORT"
  },
  {
      "id": 714,
      "brandId": 21,
      "name": "X6 XDRIVE 40d LUXURY"
  },
  {
      "id": 715,
      "brandId": 21,
      "name": "X6 XDRIVE 40d SPORT"
  },
  {
      "id": 716,
      "brandId": 21,
      "name": "Z4 ROADSTAR SDRIVE 20i DYNAMIC"
  },
  {
      "id": 717,
      "brandId": 21,
      "name": "Z4 ROADSTAR SDRIVE 20i EXCLUSIVE"
  },
  {
      "id": 718,
      "brandId": 21,
      "name": "Z4 ROADSTAR SDRIVE 28i DYNAMIC"
  },
  {
      "id": 719,
      "brandId": 21,
      "name": "Z4 ROADSTAR SDRIVE 28i EXCLUSIVE"
  },
  {
      "id": 720,
      "brandId": 21,
      "name": "Z4 ROADSTAR SDRIVE 35is"
  },
  {
      "id": 721,
      "brandId": 21,
      "name": "535d GRAN TURISMO XDRIVE"
  },
  {
      "id": 400,
      "brandId": 27,
      "name": "KAMYON PRO 832 (6x4) DAMPER SASI"
  },
  {
      "id": 14,
      "brandId": 31,
      "name": "ESCALADE 6.0"
  },
  {
      "id": 16,
      "brandId": 31,
      "name": "SRX"
  },
  {
      "id": 17,
      "brandId": 31,
      "name": "ESCALADE 6.2"
  },
  {
      "id": 18,
      "brandId": 31,
      "name": "STS 4.6"
  },
  {
      "id": 19,
      "brandId": 31,
      "name": "CTS 2.8 V6"
  },
  {
      "id": 20,
      "brandId": 31,
      "name": "BLS 1.9 D"
  },
  {
      "id": 21,
      "brandId": 31,
      "name": "DTS 4.6"
  },
  {
      "id": 22,
      "brandId": 31,
      "name": "ESCALADE 6.0 HYBRID"
  },
  {
      "id": 118,
      "brandId": 32,
      "name": "SUBURBAN LTZ 5.3"
  },
  {
      "id": 119,
      "brandId": 32,
      "name": "TAHOE 6.0 HYBRID"
  },
  {
      "id": 37,
      "brandId": 40,
      "name": "CEKICI FT 85 CF 430 S 380"
  },
  {
      "id": 38,
      "brandId": 40,
      "name": "CEKICI FT 95.430 S 360 4x2"
  },
  {
      "id": 39,
      "brandId": 40,
      "name": "CEKICI FT 95 XF 530 S 380 4x2"
  },
  {
      "id": 42,
      "brandId": 40,
      "name": "KAMYON FAC CF 85 380 8x2"
  },
  {
      "id": 43,
      "brandId": 40,
      "name": "KAMYON FAC CF 85 380 S 570 8x2"
  },
  {
      "id": 44,
      "brandId": 40,
      "name": "CEKICI FT 85 CF 430 S 360"
  },
  {
      "id": 45,
      "brandId": 40,
      "name": "CEKICI FT 105 XF 460 4x2"
  },
  {
      "id": 46,
      "brandId": 40,
      "name": "CEKICI FT 95 XF 480 S 360 4x2"
  },
  {
      "id": 47,
      "brandId": 40,
      "name": "CEKICI FT 95 XF 480 S 380 4x2"
  },
  {
      "id": 48,
      "brandId": 40,
      "name": "CEKICI FT CF 85.410 4x2"
  },
  {
      "id": 49,
      "brandId": 40,
      "name": "CEKICI FT CF 85.460 LD 4x2"
  },
  {
      "id": 50,
      "brandId": 40,
      "name": "CEKICI FT CF 85 340 4x2"
  },
  {
      "id": 51,
      "brandId": 40,
      "name": "CEKICI FT XF 105.510 ELITE EDITION"
  },
  {
      "id": 52,
      "brandId": 40,
      "name": "CEKICI FT XF 105.460 ELITE EDITION"
  },
  {
      "id": 53,
      "brandId": 40,
      "name": "CEKICI FT XF 105.510"
  },
  {
      "id": 54,
      "brandId": 40,
      "name": "CEKICI CF 85.460 MD 4x2"
  },
  {
      "id": 55,
      "brandId": 43,
      "name": "CUORE 1.0 LOW GRADE"
  },
  {
      "id": 56,
      "brandId": 43,
      "name": "CUORE 1.0 LOW GRADE OV"
  },
  {
      "id": 57,
      "brandId": 43,
      "name": "CUORE 1.0 HIGH GRADE"
  },
  {
      "id": 58,
      "brandId": 43,
      "name": "CUORE 1.0 HIGH GRADE OV"
  },
  {
      "id": 59,
      "brandId": 43,
      "name": "TERIOS 1.3 SX AERO"
  },
  {
      "id": 60,
      "brandId": 43,
      "name": "TERIOS 1.3 SX AERO OV"
  },
  {
      "id": 61,
      "brandId": 43,
      "name": "TERIOS 1.3 DX OV"
  },
  {
      "id": 62,
      "brandId": 43,
      "name": "DELTA KAMYONET 2.8 TEK TEKER"
  },
  {
      "id": 64,
      "brandId": 43,
      "name": "SIRION 1.0"
  },
  {
      "id": 65,
      "brandId": 43,
      "name": "SIRION 1.3 SPORTY"
  },
  {
      "id": 66,
      "brandId": 43,
      "name": "SIRION 1.3 SPORTY OV"
  },
  {
      "id": 71,
      "brandId": 43,
      "name": "TERIOS 1.5 DX OV"
  },
  {
      "id": 77,
      "brandId": 43,
      "name": "TERIOS SILVER 1.5 OV"
  },
  {
      "id": 79,
      "brandId": 43,
      "name": "MATERIA 1.5 GOLD"
  },
  {
      "id": 80,
      "brandId": 43,
      "name": "MATERIA 1.5 GOLD OV"
  },
  {
      "id": 81,
      "brandId": 43,
      "name": "SIRION 1.5 SPORTY"
  },
  {
      "id": 82,
      "brandId": 43,
      "name": "SIRION 1.5 SPORTY OV"
  },
  {
      "id": 83,
      "brandId": 43,
      "name": "TERIOS 1.3"
  },
  {
      "id": 84,
      "brandId": 43,
      "name": "TERIOS STAR 1.5"
  },
  {
      "id": 85,
      "brandId": 43,
      "name": "TERIOS GALAXY 1.5 OV"
  },
  {
      "id": 86,
      "brandId": 43,
      "name": "TERIOS 1.5 PRIME 4x2 OV"
  },
  {
      "id": 87,
      "brandId": 43,
      "name": "TERIOS 1.5 PRIME"
  },
  {
      "id": 23,
      "brandId": 50,
      "name": "360 CHALLANGE STRALADE F1"
  },
  {
      "id": 24,
      "brandId": 50,
      "name": "612 SCAGLIETTI"
  },
  {
      "id": 25,
      "brandId": 50,
      "name": "612 SCAGLIETTI F1"
  },
  {
      "id": 26,
      "brandId": 50,
      "name": "F 430 F1"
  },
  {
      "id": 27,
      "brandId": 50,
      "name": "F 430"
  },
  {
      "id": 28,
      "brandId": 50,
      "name": "F 430 SPIDER"
  },
  {
      "id": 29,
      "brandId": 50,
      "name": "F 430 SPIDER F1"
  },
  {
      "id": 30,
      "brandId": 50,
      "name": "599 GTB"
  },
  {
      "id": 31,
      "brandId": 50,
      "name": "599 GTB F1"
  },
  {
      "id": 32,
      "brandId": 50,
      "name": "CALIFORNIA"
  },
  {
      "id": 33,
      "brandId": 50,
      "name": "458 ITALIA"
  },
  {
      "id": 1577,
      "brandId": 52,
      "name": "PUNTO 1.4 FIRE 77 S&S POPSTAR"
  },
  {
      "id": 1627,
      "brandId": 52,
      "name": "500L ROCKSTAR 1.3 M.JET 95 E6"
  },
  {
      "id": 1670,
      "brandId": 52,
      "name": "500C DOLCEVITA 1.2 FIRE 69 MTA"
  },
  {
      "id": 387,
      "brandId": 52,
      "name": "GRANDE PUNTO 3K 1.4 STARJET (95) FUN"
  },
  {
      "id": 2000,
      "brandId": 53,
      "name": "FOCUS TITANIUM 4K 1.6i (100)"
  },
  {
      "id": 2001,
      "brandId": 53,
      "name": "FOCUS III TREND 1.6i (125) SW"
  },
  {
      "id": 2002,
      "brandId": 53,
      "name": "FOCUS III TREND 1.6i (125) SW POWERSHIFT"
  },
  {
      "id": 2003,
      "brandId": 53,
      "name": "FOCUS III TREND 1.6 TDCi (95) SW"
  },
  {
      "id": 2004,
      "brandId": 53,
      "name": "FOCUS III STYLE 1.6i (125) SW"
  },
  {
      "id": 2005,
      "brandId": 53,
      "name": "FOCUS III STYLE 1.6i (125) SW POWERSHIFT"
  },
  {
      "id": 2006,
      "brandId": 53,
      "name": "FOCUS III STYLE 1.6 TDCi (115) SW"
  },
  {
      "id": 2007,
      "brandId": 53,
      "name": "FOCUS III TITANIUM 1.6i (125) SW"
  },
  {
      "id": 2008,
      "brandId": 53,
      "name": "FOCUS III TITANIUM 1.6i (125) SW POWERSHIFT"
  },
  {
      "id": 2009,
      "brandId": 53,
      "name": "FOCUS III TITANIUM 1.6i ECOBOOST (180) SW"
  },
  {
      "id": 2010,
      "brandId": 53,
      "name": "FOCUS III TITANIUM 1.6 TDCi (115) SW"
  },
  {
      "id": 2011,
      "brandId": 53,
      "name": "MY FIESTA II 5K  1.25i (82)"
  },
  {
      "id": 2012,
      "brandId": 53,
      "name": "MY FIESTA II 5K 1.4i (96) OV"
  },
  {
      "id": 2013,
      "brandId": 53,
      "name": "MONDEO TREND 2.0 TDCi 163 POWERSHIFT SEDAN"
  },
  {
      "id": 2014,
      "brandId": 53,
      "name": "MONDEO TITANIUM 2.0 TDCi 163 POWERSHIFT SEDAN"
  },
  {
      "id": 2015,
      "brandId": 53,
      "name": "MONDEO SELECTIVE 2.0TDCi 163 POWERSHIFT SEDAN"
  },
  {
      "id": 2016,
      "brandId": 53,
      "name": "MONDEO SELECTIVE 2.0 TDCi 163 POWERSHIFT SW"
  },
  {
      "id": 2017,
      "brandId": 53,
      "name": "S-MAX TITANIUM 2.0 TDCi 163 POWERSHIFT 7 K"
  },
  {
      "id": 2018,
      "brandId": 53,
      "name": "GALAXY 2.0 TDCi 163 POWERSHIFT"
  },
  {
      "id": 2019,
      "brandId": 53,
      "name": "FIESTA TREND 5K 1.4 TDCI (70)"
  },
  {
      "id": 2020,
      "brandId": 53,
      "name": "C MAX TITANIUM  2.0 TDCi"
  },
  {
      "id": 2021,
      "brandId": 53,
      "name": "FOCUS III TITANIUM 1.0i ECOBOOST (125) 5K"
  },
  {
      "id": 2022,
      "brandId": 53,
      "name": "FOCUS III TREND X 1.6i 125 5K"
  },
  {
      "id": 2023,
      "brandId": 53,
      "name": "FOCUS III TREND X 1.6i 125 4K"
  },
  {
      "id": 2024,
      "brandId": 53,
      "name": "FOCUS III TREND X 1.6i 125 SW"
  },
  {
      "id": 2025,
      "brandId": 53,
      "name": "FOCUS III TREND X 1.6i 125 5K POWERSHIFT"
  },
  {
      "id": 2026,
      "brandId": 53,
      "name": "FOCUS III TREND X 1.6i 125 4K POWERSHIFT"
  },
  {
      "id": 2027,
      "brandId": 53,
      "name": "FOCUS III TREND X 1.6i 125 SW POWERSHIFT"
  },
  {
      "id": 2028,
      "brandId": 53,
      "name": "FOCUS III TREND X 1.6 TDCI 95 5K"
  },
  {
      "id": 2029,
      "brandId": 53,
      "name": "FOCUS III TREND X 1.6 TDCI 95 4K"
  },
  {
      "id": 2030,
      "brandId": 53,
      "name": "FOCUS III TREND X 1.6 TDCI 95 SW"
  },
  {
      "id": 2031,
      "brandId": 53,
      "name": "FOCUS III TREND X 1.0 ECOBOOST 125 5K"
  },
  {
      "id": 2032,
      "brandId": 53,
      "name": "FOCUS III TREND X 1.0 ECOBOOST 125 4K"
  },
  {
      "id": 2033,
      "brandId": 53,
      "name": "FOCUS III TREND X 1.0 ECOBOOST 125 SW"
  },
  {
      "id": 2034,
      "brandId": 53,
      "name": "FOCUS III STYLE 1.0 ECOBOOST 125 5K"
  },
  {
      "id": 2035,
      "brandId": 53,
      "name": "FOCUS III STYLE 1.0 ECOBOOST 125 4K"
  },
  {
      "id": 2036,
      "brandId": 53,
      "name": "FOCUS III STYLE 1.0 ECOBOOST 125 SW"
  },
  {
      "id": 2037,
      "brandId": 53,
      "name": "RANGER XL 2.2 TDCI 150 CIFT KABIN KAMYONET"
  },
  {
      "id": 2038,
      "brandId": 53,
      "name": "RANGER XLT 2.2 TDCI 150 CIFT KABIN KAMYONET"
  },
  {
      "id": 2039,
      "brandId": 53,
      "name": "RANGER XLT 2.2 TDCI 150 OV CIFTKABIN KAMYONET"
  },
  {
      "id": 2040,
      "brandId": 53,
      "name": "C-MAX TREND 1.6 TDCI (115)"
  },
  {
      "id": 2041,
      "brandId": 53,
      "name": "FOCUS TITANIUM 5K 1.6i (100)"
  },
  {
      "id": 2042,
      "brandId": 53,
      "name": "B-MAX TREND 1.4i 90"
  },
  {
      "id": 2043,
      "brandId": 53,
      "name": "B-MAX TREND 1.6i 105 POWERSHIFT"
  },
  {
      "id": 2044,
      "brandId": 53,
      "name": "B-MAX TREND 1.5 TDCI 75"
  },
  {
      "id": 2045,
      "brandId": 53,
      "name": "B-MAX TITANIUM 1.4i 90"
  },
  {
      "id": 2046,
      "brandId": 53,
      "name": "B-MAX TITANIUM 1.0i ECOBOOST 120"
  },
  {
      "id": 2047,
      "brandId": 53,
      "name": "B-MAX TITANIUM 1.6i 105 POWERSHIFT"
  },
  {
      "id": 2048,
      "brandId": 53,
      "name": "B-MAX TITANIUM 1.5 TDCI 75"
  },
  {
      "id": 2049,
      "brandId": 53,
      "name": "RANGER XLT 2.2 TDCI 4x4 150 OV CIFT KABIN K."
  },
  {
      "id": 2050,
      "brandId": 53,
      "name": "RANGER WILDTRAK4x4 3.2 TDCI 200 OV CIFT KAB.K"
  },
  {
      "id": 2051,
      "brandId": 53,
      "name": "RANGER XL 4x4 2.2 TDCI 150 CIFT KABIN K.NET"
  },
  {
      "id": 2052,
      "brandId": 53,
      "name": "FIESTA TREND 5K 1.25i 82"
  },
  {
      "id": 2053,
      "brandId": 53,
      "name": "FIESTA TREND 5K 1.6i 105 POWERSHIFT"
  },
  {
      "id": 2054,
      "brandId": 53,
      "name": "FIESTA TREND 5K 1.5 TDCI 75"
  },
  {
      "id": 2055,
      "brandId": 53,
      "name": "FIESTA TITANIUM 5K 1.4i 96"
  },
  {
      "id": 2056,
      "brandId": 53,
      "name": "FIESTA TITANIUM 5K 1.0i ECOBOOST 100"
  },
  {
      "id": 2057,
      "brandId": 53,
      "name": "FIESTA TITANIUM 5K 1.6i 105 POWERSHIFT"
  },
  {
      "id": 2058,
      "brandId": 53,
      "name": "FIESTA TITANIUM 5K 1.5 TDCI 75"
  },
  {
      "id": 2059,
      "brandId": 53,
      "name": "KUGA TREND X 1.6 ECOBOOST 150 2WD"
  },
  {
      "id": 2060,
      "brandId": 53,
      "name": "KUGA TREND X 1.6 ECOBOOST 180 4WD A/T"
  },
  {
      "id": 2061,
      "brandId": 53,
      "name": "KUGA TITANIUM 1.6 ECOBOOST 180 4WD A/T"
  },
  {
      "id": 2062,
      "brandId": 53,
      "name": "KUGA TITANIUM 2.0 TDCI 163 4WD POWERSHIFT"
  },
  {
      "id": 2063,
      "brandId": 53,
      "name": "KUGA SELECTIVE 1.6 ECOBOOST 180 4WD A/T"
  },
  {
      "id": 2064,
      "brandId": 53,
      "name": "KUGA SELECTIVE 2.0 TDCI 163 4WD POWERSHIFT"
  },
  {
      "id": 2065,
      "brandId": 53,
      "name": "B-MAX TREND 1.6 TDCI 95"
  },
  {
      "id": 2066,
      "brandId": 53,
      "name": "B-MAX TITANIUM 1.6 TDCI 95"
  },
  {
      "id": 2067,
      "brandId": 53,
      "name": "C-MAX TREND 1.0 ECOBOOST 125"
  },
  {
      "id": 2068,
      "brandId": 53,
      "name": "C-MAX TITANIUM 1.0 ECOBOOST 125"
  },
  {
      "id": 2069,
      "brandId": 53,
      "name": "S-MAX TREND 1.6 TDCI 115 7 KOLTUK"
  },
  {
      "id": 2070,
      "brandId": 53,
      "name": "S-MAX TITANIUM 1.6 TDCI 115 7 KOLTUK"
  },
  {
      "id": 2071,
      "brandId": 53,
      "name": "FOCUS III TITANIUM 1.0 ECOBOOST 125 4K"
  },
  {
      "id": 2072,
      "brandId": 53,
      "name": "FOCUS 1.4i SEDAN TREND"
  },
  {
      "id": 2074,
      "brandId": 53,
      "name": "FIESTA TITANIUM 1.0i ECOBOOST 100 POWERSHI"
  },
  {
      "id": 2075,
      "brandId": 53,
      "name": "FIESTA TITANIUM X 5K 1.4 TDCI"
  },
  {
      "id": 2077,
      "brandId": 53,
      "name": "FIESTA TREND X 1.6i 105 POWERSHIFT"
  },
  {
      "id": 2078,
      "brandId": 53,
      "name": "FIESTA TREND X 1.5 TDCI"
  },
  {
      "id": 2079,
      "brandId": 53,
      "name": "FIESTA TREND X 1.25i 82"
  },
  {
      "id": 2080,
      "brandId": 53,
      "name": "FOCUS III MCA TREND X 1.6 125 5K"
  },
  {
      "id": 2081,
      "brandId": 53,
      "name": "FOCUS III MCA TREND X 1.6 125 4K"
  },
  {
      "id": 2082,
      "brandId": 53,
      "name": "FOCUS III MCA TREND X 1.6 125 5K POWERSHIFT"
  },
  {
      "id": 2083,
      "brandId": 53,
      "name": "FOCUS III MCA TREND X 1.6 125 4K POWERSHIFT"
  },
  {
      "id": 2084,
      "brandId": 53,
      "name": "FOCUS III MCA TREND X 1.6 TDCI 95 5K"
  },
  {
      "id": 2085,
      "brandId": 53,
      "name": "FOCUS III MCA TREND X 1.6 TDCI 95 4K"
  },
  {
      "id": 2086,
      "brandId": 53,
      "name": "FOCUS III MCA TREND X 1.6 TDCI 95 SW"
  },
  {
      "id": 2087,
      "brandId": 53,
      "name": "FOCUS III MCA STYLE 1.6 125 5K"
  },
  {
      "id": 2088,
      "brandId": 53,
      "name": "FOCUS III MCA STYLE 1.6 125 4K"
  },
  {
      "id": 2089,
      "brandId": 53,
      "name": "FOCUS III MCA STYLE 1.6 125 5K POWERSHIFT"
  },
  {
      "id": 2090,
      "brandId": 53,
      "name": "FOCUS III MCA STYLE 1.6 125 4K POWERSHIFT"
  },
  {
      "id": 2091,
      "brandId": 53,
      "name": "FOCUS III MCA STYLE 1.6 TDCI 115 5K"
  },
  {
      "id": 2092,
      "brandId": 53,
      "name": "FOCUS III MCA STYLE 1.6 TDCI 115 4K"
  },
  {
      "id": 2093,
      "brandId": 53,
      "name": "FOCUS III MCA STYLE 1.6 TDCI 115 SW"
  },
  {
      "id": 2094,
      "brandId": 53,
      "name": "FOCUS III MCA TITANIUM 1.6 125 5K"
  },
  {
      "id": 2095,
      "brandId": 53,
      "name": "FOCUS III MCA TITANIUM 1.6 125 4K"
  },
  {
      "id": 2096,
      "brandId": 53,
      "name": "FOCUS III MCA TITANIUM 1.0 ECOBOOST 125 5K"
  },
  {
      "id": 2097,
      "brandId": 53,
      "name": "FOCUS III MCA TITANIUM 1.0 ECOBOOST 125 4K"
  },
  {
      "id": 2098,
      "brandId": 53,
      "name": "FOCUS III MCA TITANIUM 1.6 125 5K POWERSHIFT"
  },
  {
      "id": 2099,
      "brandId": 53,
      "name": "FOCUS III MCA TITANIUM 1.6 125 4K POWERSHIFT"
  },
  {
      "id": 2100,
      "brandId": 53,
      "name": "FOCUS III MCA TITANIUM 1.6 125 SW POWERSHIFT"
  },
  {
      "id": 2101,
      "brandId": 53,
      "name": "FOCUS III MCA TITANIUM 1.6 TDCI 115 5 KAPI"
  },
  {
      "id": 2102,
      "brandId": 53,
      "name": "FOCUS III MCA TITANIUM 1.6 TDCI 115 4K"
  },
  {
      "id": 2103,
      "brandId": 53,
      "name": "FOCUS III MCA TITANIUM 1.6 TDCI 115 SW"
  },
  {
      "id": 2104,
      "brandId": 53,
      "name": "KUGA TREND X 1.5 ECOBOOST 150 2WD"
  },
  {
      "id": 2105,
      "brandId": 53,
      "name": "KUGA TREND X 1.5 ECOBOOST 182 AWD A/T"
  },
  {
      "id": 2106,
      "brandId": 53,
      "name": "KUGA TITANIUM 1.5 ECOBOOST 182 AWD A/T"
  },
  {
      "id": 2107,
      "brandId": 53,
      "name": "KUGA TITANIUM 2.0 TDCI 180 AWD POWERSHIFT"
  },
  {
      "id": 2108,
      "brandId": 53,
      "name": "KUGA SELECTIVE 1.5 ECOBOOST 182 AWD A/T"
  },
  {
      "id": 2109,
      "brandId": 53,
      "name": "KUGA SELECTIVE 2.0 TDCI 180 AWD POWERSHIFT"
  },
  {
      "id": 2110,
      "brandId": 53,
      "name": "MONDEO STYLE 1.5 ECOBOOST 160 SEDAN OV"
  },
  {
      "id": 2111,
      "brandId": 53,
      "name": "MONDEO STYLE 1.6 TDCI 115 SEDAN"
  },
  {
      "id": 2112,
      "brandId": 53,
      "name": "MONDEO TITANIUM 1.5 ECOBOOST 160 SEDAN OV"
  },
  {
      "id": 2113,
      "brandId": 53,
      "name": "MONDEO TITANIUM 1.5 ECOBOOST 160 HB OV"
  },
  {
      "id": 2114,
      "brandId": 53,
      "name": "MONDEO TITANIUM 1.5 ECOBOOST 160 SW OV"
  },
  {
      "id": 2115,
      "brandId": 53,
      "name": "FIESTA RED 1.0i 140 ECOBOOST"
  },
  {
      "id": 2116,
      "brandId": 53,
      "name": "FIESTA BLACK 1.0i 140 ECOBOOST"
  },
  {
      "id": 2117,
      "brandId": 53,
      "name": "FIESTA TITANIUM X 5K 1.4i 96"
  },
  {
      "id": 2118,
      "brandId": 53,
      "name": "B-MAX 1.0i ECOBOOST 125"
  },
  {
      "id": 2119,
      "brandId": 53,
      "name": "FOCUS III MCA TREND X  1.5TDCI 120 5K PWS"
  },
  {
      "id": 2120,
      "brandId": 53,
      "name": "FOCUS III MCA TREND X 1.5 TDCI 120 4K PWS"
  },
  {
      "id": 2121,
      "brandId": 53,
      "name": "FOCUS III MCA TREND X 1.5 TDCI 120 SW PWS"
  },
  {
      "id": 2122,
      "brandId": 53,
      "name": "FOCUS III MCA STYLE 1.5 TDCI 120 5K PWS"
  },
  {
      "id": 2123,
      "brandId": 53,
      "name": "FOCUS III MCA STYLE 1.5 TDCI 120 4K PWS"
  },
  {
      "id": 2124,
      "brandId": 53,
      "name": "FOCUS III MCA STYLE 1.5 TDCI 120 SW PWS"
  },
  {
      "id": 2125,
      "brandId": 53,
      "name": "FOCUS III MCA TITANIUM 1.5 TDCI 120 5K PWS"
  },
  {
      "id": 2126,
      "brandId": 53,
      "name": "FOCUS III MCA TITANIUM 1.5 TDCI 120 4K PWS"
  },
  {
      "id": 2127,
      "brandId": 53,
      "name": "FOCUS III MCA TITANIUM 1.5 TDCI 120 SW PWS"
  },
  {
      "id": 2128,
      "brandId": 53,
      "name": "MONDEO STYLE 2.0 TDCI SEDAN OV"
  },
  {
      "id": 2129,
      "brandId": 53,
      "name": "FIESTA TREND ICA 1.25i 82"
  },
  {
      "id": 2130,
      "brandId": 53,
      "name": "FIESTA TREND ICA 1.6i 105 OV"
  },
  {
      "id": 2131,
      "brandId": 53,
      "name": "FIESTA TREND ICA 1.5 TDCI 75"
  },
  {
      "id": 2132,
      "brandId": 53,
      "name": "FIESTA TREND X ICA 1.25i 82"
  },
  {
      "id": 2133,
      "brandId": 53,
      "name": "FIESTA TREND X ICA 1.6i 105 OV"
  },
  {
      "id": 2134,
      "brandId": 53,
      "name": "FIESTA TREND X ICA 1.5 TDCI 75"
  },
  {
      "id": 2135,
      "brandId": 53,
      "name": "FIESTA TITANIUM ICA 1.4i 96"
  },
  {
      "id": 2136,
      "brandId": 53,
      "name": "FIESTA TITANIUM ICA 1.6i 105 OV"
  },
  {
      "id": 2137,
      "brandId": 53,
      "name": "FIESTA TITANIUM ICA 1.0i ECOBOOST 100 OV"
  },
  {
      "id": 2138,
      "brandId": 53,
      "name": "FIESTA TITANIUM ICA 1.5 TDCI 75"
  },
  {
      "id": 2139,
      "brandId": 53,
      "name": "C-MAX TREND 1.5i EB 182 OV"
  },
  {
      "id": 2140,
      "brandId": 53,
      "name": "C-MAX TITANIUM 1.5i EB 182 OV"
  },
  {
      "id": 2141,
      "brandId": 53,
      "name": "GRAND C-MAX TITANIUM 1.5i EB 182 OV"
  },
  {
      "id": 2142,
      "brandId": 53,
      "name": "MONDEO STYLE 2.0 TDCI 180 SEDAN OV"
  },
  {
      "id": 2143,
      "brandId": 53,
      "name": "MONDEO TITANIUM 2.0 TDCI 180 SEDAN OV"
  },
  {
      "id": 2144,
      "brandId": 53,
      "name": "RANGER XLT 2.2 TDCI 4x4 150 CIFT KABIN K.NET"
  },
  {
      "id": 2145,
      "brandId": 53,
      "name": "FOCUS III 2.0 ST 250 HB"
  },
  {
      "id": 2146,
      "brandId": 53,
      "name": "GRAND C-MAX TITANIUM 1.5 TDCI 120"
  },
  {
      "id": 2147,
      "brandId": 53,
      "name": "B-MAX TITANIUM 1.5 TDCI 95"
  },
  {
      "id": 2148,
      "brandId": 53,
      "name": "S-MAX TITANIUM 2.0i ECOBOOST"
  },
  {
      "id": 2149,
      "brandId": 53,
      "name": "FIESTA TITANIUM X ICA 1.4i 96"
  },
  {
      "id": 2150,
      "brandId": 53,
      "name": "C-MAX 1.6 125 TREND"
  },
  {
      "id": 2151,
      "brandId": 53,
      "name": "KUGA ICA TREND X 1.5 ECOBOOST 150 2WD"
  },
  {
      "id": 2152,
      "brandId": 53,
      "name": "KUGA ICA TREND X 1.5 ECOBOOST 182 AWD A/T"
  },
  {
      "id": 2153,
      "brandId": 53,
      "name": "KUGA ICA TITANIUM 1.5 ECOBOOST 182 AWD A/T"
  },
  {
      "id": 2154,
      "brandId": 53,
      "name": "KUGA ICA SELECTIVE 1.5 ECOBOOST 182 AWD A/T"
  },
  {
      "id": 2155,
      "brandId": 53,
      "name": "KUGA ICA SELECTIVE 2.0TDCI 180 AWD POWERSHIFT"
  },
  {
      "id": 2156,
      "brandId": 53,
      "name": "MONDEO STYLE 2.0 TDCI 180 SEDAN MPS6"
  },
  {
      "id": 2157,
      "brandId": 53,
      "name": "MONDEO TITANIUM 2.0 TDCI 180 SEDAN MPS6"
  },
  {
      "id": 2158,
      "brandId": 53,
      "name": "C-MAX TREND 1.5 TDCI 120 POWERSHIFT"
  },
  {
      "id": 2159,
      "brandId": 53,
      "name": "C-MAX TITANIUM 1.5 TDCI 120 POWERSHIFT"
  },
  {
      "id": 2160,
      "brandId": 53,
      "name": "GRAND C-MAX TITANIUM 1.5 TDCI 120 POWERSHIFT"
  },
  {
      "id": 2161,
      "brandId": 53,
      "name": "S-MAX STYLE 1.5 ECOBOOST 160"
  },
  {
      "id": 2162,
      "brandId": 53,
      "name": "S-MAX TITANIUM 2.0 TDCI 180 POWERSHIFT"
  },
  {
      "id": 2163,
      "brandId": 53,
      "name": "GALAXY STYLE 1.5 ECOBOOST 160"
  },
  {
      "id": 2164,
      "brandId": 53,
      "name": "GALAXY TITANIUM 2.0 TDCI 180 POWERSHIFT"
  },
  {
      "id": 2165,
      "brandId": 53,
      "name": "B-MAX TREND ICA 1.25i 82"
  },
  {
      "id": 2166,
      "brandId": 53,
      "name": "B-MAX TREND X ICA 1.25i 82"
  },
  {
      "id": 2167,
      "brandId": 53,
      "name": "B-MAX TITANIUM ICA 1.4i 96"
  },
  {
      "id": 2168,
      "brandId": 53,
      "name": "B-MAX TREND ICA 1.6i 105 A/T"
  },
  {
      "id": 2169,
      "brandId": 53,
      "name": "B-MAX TREND X ICA 1.6i 105 A/T"
  },
  {
      "id": 2170,
      "brandId": 53,
      "name": "B-MAX TITANIUM ICA 1.6i 105 A/T"
  },
  {
      "id": 2171,
      "brandId": 53,
      "name": "B-MAX RED ICA 1.0i 140 ECOBOOST"
  },
  {
      "id": 2172,
      "brandId": 53,
      "name": "B-MAX TITANIUM ICA 1.0i 100 A/T"
  },
  {
      "id": 2173,
      "brandId": 53,
      "name": "B-MAX BLACK ICA 1.0i 140 ECOBOOST"
  },
  {
      "id": 2174,
      "brandId": 53,
      "name": "B-MAX TREND ICA 1.5 TDCI 75"
  },
  {
      "id": 2175,
      "brandId": 53,
      "name": "B-MAX TREND X ICA 1.5 TDCI 75"
  },
  {
      "id": 2176,
      "brandId": 53,
      "name": "B-MAX TITANIUM ICA 1.5 TDCI 75"
  },
  {
      "id": 2177,
      "brandId": 53,
      "name": "MONDEO TITANIUM 2.5 4D"
  },
  {
      "id": 2178,
      "brandId": 53,
      "name": "B-MAX TREND 1.6i 105 POWESHIFT E6"
  },
  {
      "id": 2179,
      "brandId": 53,
      "name": "B-MAX TITANIUM 1.6i 105 POWERSHIFT E6"
  },
  {
      "id": 2180,
      "brandId": 53,
      "name": "B-MAX TITANIUM 1.5 TDCI 95 E6"
  },
  {
      "id": 2181,
      "brandId": 53,
      "name": "FOCUS TITANIUM 1.0 ECOBOOST 125 4 KAPI A/T"
  },
  {
      "id": 2182,
      "brandId": 53,
      "name": "FOCUS TITANIUM 1.0 ECOBOOST 125 5 KAPI A/T"
  },
  {
      "id": 2183,
      "brandId": 53,
      "name": "MONDEO TITANIUM 2.0 TDCI 180 POWERSIFT SW"
  },
  {
      "id": 2184,
      "brandId": 53,
      "name": "RANGER ICA XLT 2.2 TDCI 160 E5"
  },
  {
      "id": 2185,
      "brandId": 53,
      "name": "RANGER ICA  XLT 2.2 TDCI 160 A/T E5"
  },
  {
      "id": 2186,
      "brandId": 53,
      "name": "RANGER ICA XLT 2.2 TDCI 160 4x4 E5"
  },
  {
      "id": 2187,
      "brandId": 53,
      "name": "RANGER ICA XLT 2.2 TDCI 160 4x4 A/T"
  },
  {
      "id": 2188,
      "brandId": 53,
      "name": "RANGER ICA WILDTRAK 3.2 4x4 200 A/T E5"
  },
  {
      "id": 2189,
      "brandId": 53,
      "name": "EDGE TITANIUM 2.0 TDCI 210 POWERSHIFT AWD"
  },
  {
      "id": 2190,
      "brandId": 53,
      "name": "FIESTA ST 1.6i ECOBOOST (182)"
  },
  {
      "id": 2191,
      "brandId": 53,
      "name": "FOCUS ST 2.0 TDCI (185) POWERSHIFT"
  },
  {
      "id": 2192,
      "brandId": 53,
      "name": "FOCUS ST 2.0i ECOBOOST (250)"
  },
  {
      "id": 2193,
      "brandId": 53,
      "name": "FOCUS RS 2.3i ECOBOOST (350) AWD"
  },
  {
      "id": 2194,
      "brandId": 53,
      "name": "FOCUS ST LINE 1.6 125 5K"
  },
  {
      "id": 2195,
      "brandId": 53,
      "name": "FOCUS ST LINE 1.0 125 ECOBOOST 5K"
  },
  {
      "id": 2196,
      "brandId": 53,
      "name": "FOCUS ST LINE 1.5 TDCI 120 5K POWERSHIFT"
  },
  {
      "id": 2197,
      "brandId": 53,
      "name": "FIESTA ST LINE1.0 ECOBOOST 100 POWERSHIFT"
  },
  {
      "id": 2198,
      "brandId": 53,
      "name": "FIESTA ST LINE 1.0 ECOBOOST 140"
  },
  {
      "id": 2199,
      "brandId": 53,
      "name": "KUGA STYLE 5D 1.5 ECOBOOST 182 A/T"
  },
  {
      "id": 2200,
      "brandId": 53,
      "name": "KUGA STYLE 5D 1.5 TDCI 120"
  },
  {
      "id": 2201,
      "brandId": 53,
      "name": "KUGA STYLE 5D 1.5 TDCI 120 POWERSHIFT"
  },
  {
      "id": 2202,
      "brandId": 53,
      "name": "KUGA TITANIUM 5D 1.5 TDCI 120"
  },
  {
      "id": 2203,
      "brandId": 53,
      "name": "KUGA TITANIUM 5D 1.5 TDCI 120 POWERSHIFT"
  },
  {
      "id": 2204,
      "brandId": 53,
      "name": "KUGA ST-LINE 5D 1.5 TDCI 120 POWERSHIFT"
  },
  {
      "id": 2205,
      "brandId": 53,
      "name": "KUGA TITANIUM 1.5 TDCI POWERSHIFT KONFOR"
  },
  {
      "id": 2206,
      "brandId": 53,
      "name": "KUGA TITANIUM 1.5 TDCI 120 POWERSHIFT TEKNO"
  },
  {
      "id": 2207,
      "brandId": 53,
      "name": "KUGA TITANIUM 1.5 TDCI 120 POWE. KONFOR+TEKNO"
  },
  {
      "id": 2208,
      "brandId": 53,
      "name": "KUGA ST-LINE 1.5 ECOBOOST 182 OV"
  },
  {
      "id": 2209,
      "brandId": 53,
      "name": "KUGA TITANIUM 2.0 TDCI 180 POWERSHIFT"
  },
  {
      "id": 2210,
      "brandId": 53,
      "name": "FIESTA TREND 1.1 85"
  },
  {
      "id": 2211,
      "brandId": 53,
      "name": "FIESTA TREND 1.0 ECOBOOST 100 OV"
  },
  {
      "id": 2212,
      "brandId": 53,
      "name": "FIESTA TITANIUM 1.1 85"
  },
  {
      "id": 2213,
      "brandId": 53,
      "name": "FIESTA TITANIUM 1.0 ECOBOOST 100 OV"
  },
  {
      "id": 2214,
      "brandId": 53,
      "name": "FIESTA ST LINE 1.0 ECOBOOST 100 OV"
  },
  {
      "id": 2215,
      "brandId": 53,
      "name": "FIESTA TREND 1.5 TDCI 85"
  },
  {
      "id": 2216,
      "brandId": 53,
      "name": "FIESTA TITANIUM 1.5 TDCI 85"
  },
  {
      "id": 2217,
      "brandId": 53,
      "name": "FIESTA TITANIUM X 1.1 85"
  },
  {
      "id": 2218,
      "brandId": 53,
      "name": "FIESTA TITANIUM X 1.5 TDCI 85"
  },
  {
      "id": 2219,
      "brandId": 53,
      "name": "MONDEO VIGNALE 2.0 TDCI 180 POWERSHIFT"
  },
  {
      "id": 2220,
      "brandId": 53,
      "name": "KUGA TITANIUM 5D 1.5 182 A/T"
  },
  {
      "id": 2221,
      "brandId": 53,
      "name": "FOCUS 1.5 TDCI 120 5 KAPI TREND X  E6"
  },
  {
      "id": 2222,
      "brandId": 53,
      "name": "FOCUS 1.5 TDCI 120 4 KAPI TREND X E6"
  },
  {
      "id": 2223,
      "brandId": 53,
      "name": "FOCUS 1.5 TDCI 120 SW TREND X E6"
  },
  {
      "id": 2224,
      "brandId": 53,
      "name": "FOCUS 1.5 TDCI 120 4 KAPI STYLE E6"
  },
  {
      "id": 2225,
      "brandId": 53,
      "name": "FOCUS 1.5 TDCI 120 4 KAPI TITANIUM E6"
  },
  {
      "id": 2226,
      "brandId": 53,
      "name": "MONDEO STYLE 1.5 TDCI 120 SEDAN"
  },
  {
      "id": 2227,
      "brandId": 53,
      "name": "MONDEO TITANIUM 1.5 TDCI 120 SEDAN"
  },
  {
      "id": 2228,
      "brandId": 53,
      "name": "ECOSPORT 1.0i ECOBOOST 125 ST-LINE OV"
  },
  {
      "id": 2229,
      "brandId": 53,
      "name": "ECOSPORT 1.5 TDCI 100 ST-LINE"
  },
  {
      "id": 2230,
      "brandId": 53,
      "name": "RANGER XLT 2.2 TDCI 160 E6"
  },
  {
      "id": 2231,
      "brandId": 53,
      "name": "RANGER XLT 2.2 TDCI 160 E6 6A/T"
  },
  {
      "id": 2232,
      "brandId": 53,
      "name": "RANGER XLT 2.2 TDCI 160 4x4 E6"
  },
  {
      "id": 2233,
      "brandId": 53,
      "name": "RANGER XLT 2.2 TDCI 160 E6 4x4 6A/T"
  },
  {
      "id": 2234,
      "brandId": 53,
      "name": "RANGER WILDTRAK 3.2 TDCI 200 4x4 E6 6A/T"
  },
  {
      "id": 2235,
      "brandId": 53,
      "name": "FIESTA TITANIUM X 5K 1.5 TDCI 75"
  },
  {
      "id": 2236,
      "brandId": 53,
      "name": "FOCUS III MCA TITANIUM X 1.6 TDCI 115 4K"
  },
  {
      "id": 2237,
      "brandId": 53,
      "name": "FOCUS III MCA TITANIUM X 1.6 TDCI 115 5K"
  },
  {
      "id": 2238,
      "brandId": 53,
      "name": "KUGA VIGNALE 1.5 ECOBOOST 182 OV"
  },
  {
      "id": 2239,
      "brandId": 53,
      "name": "KUGA VIGNALE 1.5 TDCI 120 POWERSHIFT"
  },
  {
      "id": 2240,
      "brandId": 53,
      "name": "KUGA VIGNALE 2.0 TDCI 180 POWERSHIFT"
  },
  {
      "id": 2242,
      "brandId": 53,
      "name": "FOCUS TREND X 1.5 123 4 KAPI E6.2"
  },
  {
      "id": 2243,
      "brandId": 53,
      "name": "FOCUS TREND X 1.5 123 4 KAPI 6S AT E6.2"
  },
  {
      "id": 2244,
      "brandId": 53,
      "name": "FOCUS TREND X 1.5 123 5 KAPI E6.2"
  },
  {
      "id": 2245,
      "brandId": 53,
      "name": "FOCUS TREND X 1.5 123 5 KAPI 6AT E6.2"
  },
  {
      "id": 2246,
      "brandId": 53,
      "name": "FOCUS TITANIUM 1.5 123 4 KAPI E6.2"
  },
  {
      "id": 2247,
      "brandId": 53,
      "name": "FOCUS TITANIUM 1.5 123 4 KAPI 6S AT E6.2"
  },
  {
      "id": 2248,
      "brandId": 53,
      "name": "FOCUS TITANIUM 1.5 123 5 KAPI E6.2"
  },
  {
      "id": 2249,
      "brandId": 53,
      "name": "FOCUS TITANIUM 1.5 123 5 KAPI 6S AT E6.2"
  },
  {
      "id": 2250,
      "brandId": 53,
      "name": "FOCUS ST-LINE 1.0 ECOBOOST 125 5 KAPI 8S AT"
  },
  {
      "id": 2251,
      "brandId": 53,
      "name": "FOCUS TREND X 1.5 TDCI 120 4 KAPI E6.2"
  },
  {
      "id": 2252,
      "brandId": 53,
      "name": "FOCUS TREND X 1.5 TDCI 120 4 KAPI 8S AT"
  },
  {
      "id": 2253,
      "brandId": 53,
      "name": "FOCUS TREND X 1.5 TDCI 120 5 KAPI E6.2"
  },
  {
      "id": 2254,
      "brandId": 53,
      "name": "FOCUS TREND X 1.5 TDCI 120 5 KAPI 8S AT E6.2"
  },
  {
      "id": 2255,
      "brandId": 53,
      "name": "FOCUS TREND X 1.5 TDCI 120 S.WAGON"
  },
  {
      "id": 2256,
      "brandId": 53,
      "name": "FOCUS TREND X 1.5 TDCI 120 S.WAGON 8S AT E6.2"
  },
  {
      "id": 2257,
      "brandId": 53,
      "name": "FOCUS TITANIUM 1.5 TDCI 120 4 KAPI E6.2"
  },
  {
      "id": 2258,
      "brandId": 53,
      "name": "FOCUS TITANIUM 1.5 TDCI 120 4 KAPI 8S AT E6.2"
  },
  {
      "id": 2259,
      "brandId": 53,
      "name": "FOCUS TITANIUM 1.5 TDCI 120 5 KAPI E6.2"
  },
  {
      "id": 2260,
      "brandId": 53,
      "name": "FOCUS TITANIUM 1.5 TDCI 120 5 KAPI 8S AT E6.2"
  },
  {
      "id": 2261,
      "brandId": 53,
      "name": "FOCUS TITANIUM 1.5 TDCI 120 S.WAGON E6.2"
  },
  {
      "id": 2262,
      "brandId": 53,
      "name": "FOCUS TITANIUM 1.5 TDCI 120 S.WAGON 8S AT"
  },
  {
      "id": 2263,
      "brandId": 53,
      "name": "FOCUS ST-LINE 1.5 TDCI 120 5 KAPI 8AT E6.2"
  },
  {
      "id": 2264,
      "brandId": 53,
      "name": "FOCUS ST-LINE 1.5 TDCI 120 S.WAGON 8S AT E6.2"
  },
  {
      "id": 2265,
      "brandId": 53,
      "name": "FOCUS ST-LINE 1.0 ECOBOOST 125 S.WAGON 8S AT"
  },
  {
      "id": 2266,
      "brandId": 53,
      "name": "S-MAX 2.0"
  },
  {
      "id": 2267,
      "brandId": 53,
      "name": "S-MAX STYLE 1.5 ECOBOOST 165 5 KAPI"
  },
  {
      "id": 2268,
      "brandId": 53,
      "name": "S-MAX TITANIUM 2.0 TDCI 190 5 KAPI 8AT"
  },
  {
      "id": 2269,
      "brandId": 53,
      "name": "MONDEO STYLE 1.5 ECOBOOST 165 4 KAPI 6AT"
  },
  {
      "id": 2270,
      "brandId": 53,
      "name": "MONDEO TITANIUM 1.5 ECOBOOST 165 4 KAPI 6AT"
  },
  {
      "id": 2271,
      "brandId": 53,
      "name": "MONDEO TITANIUM 1.5 ECOB00ST 165 5 KAPI 6AT"
  },
  {
      "id": 2272,
      "brandId": 53,
      "name": "MONDEO TITANIUM 1.5 ECOBOOST 165 S.WAGON 6AT"
  },
  {
      "id": 2273,
      "brandId": 53,
      "name": "MONDEO STYLE 2.0 ECOBLUE 190 4 KAPI 8AT"
  },
  {
      "id": 2274,
      "brandId": 53,
      "name": "MONDEO TITANIUM 2.0 ECOBLUE 190 4 KAPI 8AT"
  },
  {
      "id": 2275,
      "brandId": 53,
      "name": "RANGER XLT 4x2 2.0 ECOBLUE 170"
  },
  {
      "id": 2276,
      "brandId": 53,
      "name": "RANGER XLT 4x2 2.0 ECOBLUE 170 10A/T"
  },
  {
      "id": 2277,
      "brandId": 53,
      "name": "RANGER XLT 4x4 2.0 ECOBLUE 170"
  },
  {
      "id": 2278,
      "brandId": 53,
      "name": "RANGER XLT 4x4 2.0 ECOBLUE 170 10A/T"
  },
  {
      "id": 2279,
      "brandId": 53,
      "name": "RANGER WILDTRAK 4x4 2.0 ECOBLUE 213 10A/T"
  },
  {
      "id": 2280,
      "brandId": 53,
      "name": "FOCUS 1.6 TDCI 5 KAPI TREND X (109)"
  },
  {
      "id": 2281,
      "brandId": 53,
      "name": "EDGE MCA TITANIUM 2.0 TDCI 238 A/T"
  },
  {
      "id": 2282,
      "brandId": 53,
      "name": "FIESTA ST 3 KAPI 1.5 ECOBOOST 200"
  },
  {
      "id": 2283,
      "brandId": 53,
      "name": "ECOSPORT 1.0i ECOBOOST 125 STYLE OV"
  },
  {
      "id": 2284,
      "brandId": 53,
      "name": "FIESTA ST 5 KAPI 1.5 ECOBOOST 200"
  },
  {
      "id": 2285,
      "brandId": 53,
      "name": "RANGER RAPTOR 4x4 2.0 ECOBLUE 213 10A/T"
  },
  {
      "id": 2286,
      "brandId": 53,
      "name": "KUGA TITANIUM 1.5 TDCI 120 POWERSHIFT 6.2"
  },
  {
      "id": 2287,
      "brandId": 53,
      "name": "GALAXY STYLE 1.5 ECOBOOST 165 E6.2"
  },
  {
      "id": 2288,
      "brandId": 53,
      "name": "GALAXY TITANIUM 2.0 TDCI 190 8AT E6.2"
  },
  {
      "id": 2289,
      "brandId": 53,
      "name": "KUGA STYLE 1.5 ECOBOOST 120 E6.2"
  },
  {
      "id": 2290,
      "brandId": 53,
      "name": "KUGA STYLE 1.5 ECOBLUE 120 8AT E6.2"
  },
  {
      "id": 2291,
      "brandId": 53,
      "name": "KUGA TITANIUM 1.5 ECOBLUE 120 8AT E6.2"
  },
  {
      "id": 2292,
      "brandId": 53,
      "name": "KUGA ST-LINE 1.5 ECOBLUE 120 8AT E6.2"
  },
  {
      "id": 2293,
      "brandId": 53,
      "name": "KUGA ST-LINE 2.5 225 AT E6.2"
  },
  {
      "id": 2294,
      "brandId": 53,
      "name": "KUGA STYLE 1.5 ECOBLUE 120 E6.2"
  },
  {
      "id": 2295,
      "brandId": 53,
      "name": "KUGA TITANIUM X 1.5 ECOBLUE 120 8AT E6.2"
  },
  {
      "id": 2296,
      "brandId": 53,
      "name": "FOCUS ACTIVE 1.5 ECOBLUE 120 5 KAPI 8AT"
  },
  {
      "id": 2297,
      "brandId": 53,
      "name": "FOCUS ACTIVE 1.5 ECOBLUE 120 S.WAGON 8AT"
  },
  {
      "id": 2298,
      "brandId": 53,
      "name": "PUMA STYLE 1.0 ECOBOOST 95"
  },
  {
      "id": 2299,
      "brandId": 53,
      "name": "PUMA STYLE 1.0 ECOBOOST 125 7AT"
  },
  {
      "id": 2300,
      "brandId": 53,
      "name": "PUMA ST-LINE 1.0 ECOBOOST 125 7AT"
  },
  {
      "id": 2301,
      "brandId": 53,
      "name": "PUMA ST-LINE 1.0 MHEV ECOBOOST 155"
  },
  {
      "id": 2302,
      "brandId": 53,
      "name": "KUGA VIGNALE 1.5 ECOBLUE 120 8AT E6.2"
  },
  {
      "id": 2303,
      "brandId": 53,
      "name": "C-MAX TREND 1.5 TDCI 120"
  },
  {
      "id": 2304,
      "brandId": 53,
      "name": "FIESTA ICA ST 3 KAPI 1.5 ECOBOOST 200"
  },
  {
      "id": 2305,
      "brandId": 53,
      "name": "KUGA VIGNALE 2.0 ECOBLUE 190 8AT E6.2"
  },
  {
      "id": 2306,
      "brandId": 53,
      "name": "FIESTA STYLE 1.0 ECOBOOST 95 6AT"
  },
  {
      "id": 722,
      "brandId": 53,
      "name": "T. CONNECT KOMBI K210S 1.8 TDDi"
  },
  {
      "id": 723,
      "brandId": 53,
      "name": "T. CONNECT KOMBI K230L 1.8 TDDi"
  },
  {
      "id": 724,
      "brandId": 53,
      "name": "T. CONNECT KOMBI K210S 1.8 TDCi"
  },
  {
      "id": 725,
      "brandId": 53,
      "name": "T. CONNECT KOMBI K230L 1.8 TDCi"
  },
  {
      "id": 726,
      "brandId": 53,
      "name": "KAMYON CARGO 2524 (6x2)"
  },
  {
      "id": 727,
      "brandId": 53,
      "name": "CEKICI CARGO 1830T (4x2)"
  },
  {
      "id": 728,
      "brandId": 53,
      "name": "KAMYON CARGO 3230 (8x2)"
  },
  {
      "id": 729,
      "brandId": 53,
      "name": "KAMYON CARGO 2524 (6x2) DS"
  },
  {
      "id": 730,
      "brandId": 53,
      "name": "KAMYON CARGO 1824 (4x2)"
  },
  {
      "id": 731,
      "brandId": 53,
      "name": "KAMYON CARGO 2530 (6x2)"
  },
  {
      "id": 732,
      "brandId": 53,
      "name": "TRANSIT 310S JOURNEY"
  },
  {
      "id": 733,
      "brandId": 53,
      "name": "KAMYON CARGO 4030 (10x2)"
  },
  {
      "id": 734,
      "brandId": 53,
      "name": "TRANSIT 300 SF VAN"
  },
  {
      "id": 735,
      "brandId": 53,
      "name": "TRANSIT 300 SF KOMBI"
  },
  {
      "id": 736,
      "brandId": 53,
      "name": "TRANSIT 300 SF KOMBI VAN"
  },
  {
      "id": 737,
      "brandId": 53,
      "name": "TRANSIT 300 SF JOURNEY"
  },
  {
      "id": 738,
      "brandId": 53,
      "name": "TRANSIT 300 S VAN"
  },
  {
      "id": 739,
      "brandId": 53,
      "name": "TRANSIT 300 S KOMBI"
  },
  {
      "id": 740,
      "brandId": 53,
      "name": "TRANSIT 300 S KOMBI VAN"
  },
  {
      "id": 741,
      "brandId": 53,
      "name": "TRANSIT 350 E VAN"
  },
  {
      "id": 742,
      "brandId": 53,
      "name": "TRANSIT 350 ED VAN"
  },
  {
      "id": 743,
      "brandId": 53,
      "name": "TRANSIT 350 E CAMLI VAN"
  },
  {
      "id": 744,
      "brandId": 53,
      "name": "TRANSIT 350 ED CAMLI VAN"
  },
  {
      "id": 745,
      "brandId": 53,
      "name": "TRANSIT 350 E MINIBUS 12+1"
  },
  {
      "id": 746,
      "brandId": 53,
      "name": "TRANSIT 430 ED MINIBUS 14+1"
  },
  {
      "id": 747,
      "brandId": 53,
      "name": "TRANSIT 430 ED MIDIBUS 17+1"
  },
  {
      "id": 748,
      "brandId": 53,
      "name": "TRANSIT 330 M VAN"
  },
  {
      "id": 749,
      "brandId": 53,
      "name": "TRANSIT 430 ED VAN"
  },
  {
      "id": 750,
      "brandId": 53,
      "name": "TRANSIT 430 ED CAMLI VAN"
  },
  {
      "id": 751,
      "brandId": 53,
      "name": "KAMYON CARGO 2530D (6x2)"
  },
  {
      "id": 752,
      "brandId": 53,
      "name": "TRANSIT TRAVELLER MINIBUS 14+1"
  },
  {
      "id": 753,
      "brandId": 53,
      "name": "TRANSIT TRAVELLER MINIBUS 14+1 TURIZM"
  },
  {
      "id": 754,
      "brandId": 53,
      "name": "TRANSIT TRAVELLER MIDIBUS 17+1"
  },
  {
      "id": 755,
      "brandId": 53,
      "name": "TRANSIT TRAVELLER MIDIBUS 17+1 TURIZM"
  },
  {
      "id": 756,
      "brandId": 53,
      "name": "TRANSIT 300 SF JOURNEY DELUX"
  },
  {
      "id": 757,
      "brandId": 53,
      "name": "T.CONNECT KOMBI K 210S 1.8 TDDi DELUX"
  },
  {
      "id": 758,
      "brandId": 53,
      "name": "T.CONNECT KOMBI K 210S 1.8 TDCi DELUX"
  },
  {
      "id": 759,
      "brandId": 53,
      "name": "T.CONNECT KOMBI K230L 1.8 TDDi DELUX"
  },
  {
      "id": 760,
      "brandId": 53,
      "name": "T.CONNECT KOMBI K 230L 1.8 TDCi DELUX"
  },
  {
      "id": 761,
      "brandId": 53,
      "name": "TRANSIT 330 M MINIBUS"
  },
  {
      "id": 762,
      "brandId": 53,
      "name": "TRANSIT 300 SF MINIBUS"
  },
  {
      "id": 763,
      "brandId": 53,
      "name": "KAMYON CARGO 3430D (6x4)"
  },
  {
      "id": 764,
      "brandId": 53,
      "name": "T. CONNECT KOMBI GLX K210 S 1.8 TDCi 110"
  },
  {
      "id": 765,
      "brandId": 53,
      "name": "T. CONNECT KOMBI K 230 L 1.8 TDCi 110"
  },
  {
      "id": 767,
      "brandId": 53,
      "name": "TRANSIT 300 S KOMBI JOURNEY"
  },
  {
      "id": 768,
      "brandId": 53,
      "name": "KAMYON CARGO 3230S (8x2)"
  },
  {
      "id": 769,
      "brandId": 53,
      "name": "KAMYON CARGO 3230C (8x2)"
  },
  {
      "id": 770,
      "brandId": 53,
      "name": "KAMYON CARGO 2530 R (6x2)"
  },
  {
      "id": 771,
      "brandId": 53,
      "name": "KAMYON CARGO 2535 (6x2)"
  },
  {
      "id": 772,
      "brandId": 53,
      "name": "KAMYON CARGO 2535 R (6x2)"
  },
  {
      "id": 773,
      "brandId": 53,
      "name": "KAMYON CARGO 3235 S (8x2)"
  },
  {
      "id": 774,
      "brandId": 53,
      "name": "CEKICI CARGO 1835 HT (4x2)"
  },
  {
      "id": 775,
      "brandId": 53,
      "name": "T. CONNECT KOMBI K210S 1.8 TDCi (75)"
  },
  {
      "id": 776,
      "brandId": 53,
      "name": "TRANSIT 460 ED VAN (200)"
  },
  {
      "id": 777,
      "brandId": 53,
      "name": "TRANSIT 460 ED KAMYONET (200)"
  },
  {
      "id": 778,
      "brandId": 53,
      "name": "TRANSIT 350 E VAN (200)"
  },
  {
      "id": 779,
      "brandId": 53,
      "name": "TRANSIT 350 ED VAN (200)"
  },
  {
      "id": 780,
      "brandId": 53,
      "name": "TRANSIT 430 ED VAN (200)"
  },
  {
      "id": 781,
      "brandId": 53,
      "name": "TRANSIT 350 E KAMYONET (200)"
  },
  {
      "id": 782,
      "brandId": 53,
      "name": "TRANSIT 350 E CIFT KABIN KAMYONET (200)"
  },
  {
      "id": 783,
      "brandId": 53,
      "name": "TRANSIT350 ED KAMYONET (200)"
  },
  {
      "id": 784,
      "brandId": 53,
      "name": "TRANSIT 430 ED MINIBUS  14+1 (200)"
  },
  {
      "id": 785,
      "brandId": 53,
      "name": "TRANSIT 430 ED MIDIBUS 17+1 (200)"
  },
  {
      "id": 786,
      "brandId": 53,
      "name": "TRANSIT CONNECT K210S 1.8 TDCi (75) DELU"
  },
  {
      "id": 787,
      "brandId": 53,
      "name": "T.CONNECT K210S 1.8 TDCi (75) COLORLINE"
  },
  {
      "id": 788,
      "brandId": 53,
      "name": "KAMYON CARGO 3530D (6x4)"
  },
  {
      "id": 789,
      "brandId": 53,
      "name": "TRANSIT KOMBI 330 M1 (8+1)"
  },
  {
      "id": 790,
      "brandId": 53,
      "name": "KAMYON CARGO 1826 4x2"
  },
  {
      "id": 791,
      "brandId": 53,
      "name": "KAMYON CARGO 2526 6x2"
  },
  {
      "id": 792,
      "brandId": 53,
      "name": "KAMYON CARGO 2532 6x2"
  },
  {
      "id": 793,
      "brandId": 53,
      "name": "KAMYON CARGO 1824D 4x2"
  },
  {
      "id": 794,
      "brandId": 53,
      "name": "KAMYON CARGO 2526DS (6x2)"
  },
  {
      "id": 795,
      "brandId": 53,
      "name": "KAMYON CARGO 2532D (6x2)"
  },
  {
      "id": 796,
      "brandId": 53,
      "name": "KAMYON CARGO 3230 CD 8x2"
  },
  {
      "id": 797,
      "brandId": 53,
      "name": "KAMYON CARGO 3532D 6x4"
  },
  {
      "id": 798,
      "brandId": 53,
      "name": "CEKICI CARGO 1830 HT 4x2"
  },
  {
      "id": 799,
      "brandId": 53,
      "name": "CEKICI CARGO 1035HT 4x2"
  },
  {
      "id": 800,
      "brandId": 53,
      "name": "FOCUS 1.6 TDCi GHIA 5 KAPI CVT (109)"
  },
  {
      "id": 801,
      "brandId": 53,
      "name": "FOCUS 1.6 TDCi GHIA 4 KAPI CVT (109)"
  },
  {
      "id": 802,
      "brandId": 53,
      "name": "FUSION 1.6 TDCi LUX"
  },
  {
      "id": 803,
      "brandId": 53,
      "name": "MONDEO TITANIUM 2.0 TDCi SEDAN"
  },
  {
      "id": 804,
      "brandId": 53,
      "name": "FOCUS 1.6i COLLECTION SEDAN OV"
  },
  {
      "id": 805,
      "brandId": 53,
      "name": "FIESTA GHIA 5 KAPI 1.6 TDCi"
  },
  {
      "id": 806,
      "brandId": 53,
      "name": "FIESTA GHIA 5 KAPI 1.6 OV"
  },
  {
      "id": 807,
      "brandId": 53,
      "name": "FIESTA SPORT 3 KAPI 1.6 TDCi"
  },
  {
      "id": 808,
      "brandId": 53,
      "name": "FIESTA ST 3 KAPI 2.0i"
  },
  {
      "id": 809,
      "brandId": 53,
      "name": "FUSION 1.6i COMFORT 5 KAPI OV"
  },
  {
      "id": 810,
      "brandId": 53,
      "name": "FOCUS ST 2.5i 3 KAPI"
  },
  {
      "id": 811,
      "brandId": 53,
      "name": "FOCUS SPORT 1.6 TDCi 3 KAPI"
  },
  {
      "id": 812,
      "brandId": 53,
      "name": "S-MAX TITANIUM 2.0 TDCi 5 KAPI"
  },
  {
      "id": 813,
      "brandId": 53,
      "name": "FOCUS 1.6 TDCi TREND DELUX 5 KAPI (90)"
  },
  {
      "id": 814,
      "brandId": 53,
      "name": "FOCUS 1.6 TDCi TREND DELUX 4 KAPI (90)"
  },
  {
      "id": 815,
      "brandId": 53,
      "name": "FOCUS 1.6 TDCi GHIA SW (109)"
  },
  {
      "id": 817,
      "brandId": 53,
      "name": "FIESTA COOL 1.4i 5 KAPI"
  },
  {
      "id": 818,
      "brandId": 53,
      "name": "FIESTA COOL 1.4 TDCi 5 KAPI"
  },
  {
      "id": 819,
      "brandId": 53,
      "name": "FIESTA COOL 1.6i 5 KAPI OV"
  },
  {
      "id": 820,
      "brandId": 53,
      "name": "FOCUS 1.6i COLLECTION 5 KAPI (100)"
  },
  {
      "id": 821,
      "brandId": 53,
      "name": "FOCUS 1.6i COLLECTION 5 KAPI OV (100)"
  },
  {
      "id": 822,
      "brandId": 53,
      "name": "FOCUS 1.6i COLLECTION 5 KAPI (115)"
  },
  {
      "id": 823,
      "brandId": 53,
      "name": "FOCUS 1.6 TDCi COLLECTION 5 KAPI (109)"
  },
  {
      "id": 824,
      "brandId": 53,
      "name": "FOCUS 1.6i  COLLECTION 4 KAPI (100)"
  },
  {
      "id": 825,
      "brandId": 53,
      "name": "FOCUS 1.6i COLLECTION 4 KAPI OV (100)"
  },
  {
      "id": 826,
      "brandId": 53,
      "name": "FOCUS 1.6i COLLECTION 4 KAPI (115)"
  },
  {
      "id": 827,
      "brandId": 53,
      "name": "FOCUS 1.6 TDCi COLLECTION 4 KAPI (109)"
  },
  {
      "id": 828,
      "brandId": 53,
      "name": "FOCUS 1.6i COLLECTION SW (100)"
  },
  {
      "id": 829,
      "brandId": 53,
      "name": "FOCUS 1.6i COLLECTION SW OV (100)"
  },
  {
      "id": 830,
      "brandId": 53,
      "name": "FOCUS 1.6i COLLECTION SW (115)"
  },
  {
      "id": 831,
      "brandId": 53,
      "name": "FOCUS 1.6 TDCi COLLECTION SW (109)"
  },
  {
      "id": 832,
      "brandId": 53,
      "name": "FUSION 1.4 TDCi URBANITE"
  },
  {
      "id": 833,
      "brandId": 53,
      "name": "FIESTA VAN 1.4 TDCi 3 KAPI"
  },
  {
      "id": 834,
      "brandId": 53,
      "name": "FOCUS 1.6 TDCi TREND 4 KAPI (90)"
  },
  {
      "id": 835,
      "brandId": 53,
      "name": "MONDEO TITANIUM 1.6i SEDAN (125)"
  },
  {
      "id": 836,
      "brandId": 53,
      "name": "MONDEO TREND 1.6i SEDAN (125)"
  },
  {
      "id": 837,
      "brandId": 53,
      "name": "MONDEO TITANIUM 2.0 TDCi SEDAN (140)"
  },
  {
      "id": 838,
      "brandId": 53,
      "name": "MONDEO TREND 2.0 TDCi SEDAN (140)"
  },
  {
      "id": 839,
      "brandId": 53,
      "name": "MONDEO TITANIUM 2.0 TDCi SEDAN OV (130)"
  },
  {
      "id": 840,
      "brandId": 53,
      "name": "MONDEO TREND 2.0 TDCi SEDAN OV (130)"
  },
  {
      "id": 841,
      "brandId": 53,
      "name": "RANGER CIFT KABIN K.NET XLT 4x2 HI-RIDER"
  },
  {
      "id": 842,
      "brandId": 53,
      "name": "RANGER C.KABIN K.NET XLT 4x2 HI-RIDER OV"
  },
  {
      "id": 843,
      "brandId": 53,
      "name": "FOCUS C-MAX 1.6 TDCi TITANIUM 5 KAPI"
  },
  {
      "id": 844,
      "brandId": 53,
      "name": "GALAXY GHIA 2.0 TDCi 5 KAPI OV"
  },
  {
      "id": 845,
      "brandId": 53,
      "name": "S-MAX TITANIUM 2.0 TDCi 5 KAPI OV"
  },
  {
      "id": 846,
      "brandId": 53,
      "name": "FIESTA COLLECTION 1.4i 5 KAPI"
  },
  {
      "id": 847,
      "brandId": 53,
      "name": "FIESTA COLLECTION 1.4 TDCi 5 KAPI"
  },
  {
      "id": 848,
      "brandId": 53,
      "name": "FIESTA COLLECTION 1.6i 5 KAPI OV"
  },
  {
      "id": 849,
      "brandId": 53,
      "name": "FOCUS TREND 5K 1.6i (115)"
  },
  {
      "id": 850,
      "brandId": 53,
      "name": "FOCUS TREND 4K 1.6i (115)"
  },
  {
      "id": 851,
      "brandId": 53,
      "name": "FOCUS TREND SW 1.6i (115)"
  },
  {
      "id": 852,
      "brandId": 53,
      "name": "FOCUS TITANIUM 5K 1.6i (115)"
  },
  {
      "id": 853,
      "brandId": 53,
      "name": "FOCUS TITANIUM 5K 1.6i (100) OV"
  },
  {
      "id": 854,
      "brandId": 53,
      "name": "FOCUS TITANIUM 5K 1.6 TDCi (109)"
  },
  {
      "id": 855,
      "brandId": 53,
      "name": "FOCUS TITANIUM 4K 1.6i (115)"
  },
  {
      "id": 856,
      "brandId": 53,
      "name": "FOCUS TITANIUM 4K 1.6i (100) OV"
  },
  {
      "id": 857,
      "brandId": 53,
      "name": "FOCUS TITANIUM 4K 1.6 TDCi (109)"
  },
  {
      "id": 858,
      "brandId": 53,
      "name": "FOCUS TITANIUM SW 1.6i (115)"
  },
  {
      "id": 859,
      "brandId": 53,
      "name": "FOCUS TITANIUM SW 1.6i (100) OV"
  },
  {
      "id": 860,
      "brandId": 53,
      "name": "FOCUS TITANIUM SW 1.6 TDCi (109)"
  },
  {
      "id": 861,
      "brandId": 53,
      "name": "KUGA TITANUM 5K 2.0 TDCi (136)"
  },
  {
      "id": 862,
      "brandId": 53,
      "name": "MONDEO TREND 5K 1.6i (125)"
  },
  {
      "id": 863,
      "brandId": 53,
      "name": "MONDEO TITANIUM 5K 1.6i (125)"
  },
  {
      "id": 864,
      "brandId": 53,
      "name": "FIESTA TREND 5K 1.25i"
  },
  {
      "id": 865,
      "brandId": 53,
      "name": "FIESTA TREND 5K 1.4i OV"
  },
  {
      "id": 866,
      "brandId": 53,
      "name": "FIESTA TREND 5K 1.4 TDCi"
  },
  {
      "id": 867,
      "brandId": 53,
      "name": "FIESTA TITANIUM 5K 1.4i"
  },
  {
      "id": 868,
      "brandId": 53,
      "name": "FIESTA TITANIUM 5K 1.4i OV"
  },
  {
      "id": 869,
      "brandId": 53,
      "name": "FIESTA TITANIUM 5K 1.4 TDCi"
  },
  {
      "id": 870,
      "brandId": 53,
      "name": "FIESTA TITANIUM 5K 1.6 TDCi"
  },
  {
      "id": 871,
      "brandId": 53,
      "name": "KA TITANIUM 3K 1.2i"
  },
  {
      "id": 872,
      "brandId": 53,
      "name": "FOCUS 1.6 TDCi (90) TREND SW"
  },
  {
      "id": 873,
      "brandId": 53,
      "name": "FOCUS WRC 2.0 (136) POWERSHIFT"
  },
  {
      "id": 874,
      "brandId": 53,
      "name": "FOCUS WRC 2.0 (145)"
  },
  {
      "id": 875,
      "brandId": 53,
      "name": "FOCUS WRC 2.5 ST (255)"
  },
  {
      "id": 876,
      "brandId": 53,
      "name": "FOCUS CC TITANIUM 1.6i (100)"
  },
  {
      "id": 877,
      "brandId": 53,
      "name": "FOCUS CC TITANIUM 2.0i OV (145)"
  },
  {
      "id": 878,
      "brandId": 53,
      "name": "C MAX TREND 1.6i 5 KAPI"
  },
  {
      "id": 879,
      "brandId": 53,
      "name": "FOCUS TREND 1.6 TDCi (90) 5 KAPI"
  },
  {
      "id": 880,
      "brandId": 53,
      "name": "RANGER CIFT KABIN KAMYONET XLT 4x2 OV"
  },
  {
      "id": 881,
      "brandId": 53,
      "name": "RANGER CIFT K. KAMYONET THUNDER 4x4 OV"
  },
  {
      "id": 882,
      "brandId": 53,
      "name": "RANGER CIFT KABIN K.NET 4x4 WILDTRAK"
  },
  {
      "id": 883,
      "brandId": 53,
      "name": "RANGER CIFT KABIN KAMYONET XLT 4x4 OV"
  },
  {
      "id": 884,
      "brandId": 53,
      "name": "RANGER CIFT K. K.NET XLT 4x4 WILDTRAK OV"
  },
  {
      "id": 885,
      "brandId": 53,
      "name": "MONDEO TREND 2.0 TDCi (140) SEDAN OV"
  },
  {
      "id": 886,
      "brandId": 53,
      "name": "MONDEO SELECTIVE 1.6 (125) SEDAN"
  },
  {
      "id": 887,
      "brandId": 53,
      "name": "MONDEO SELECTIVE 2.0 TDCi (140) SEDAN OV"
  },
  {
      "id": 888,
      "brandId": 53,
      "name": "MONDEO TITANIUM SW 1.6i (125)"
  },
  {
      "id": 889,
      "brandId": 53,
      "name": "MONDEO TITANIUM SW 2.0 TDCI (140) OV"
  },
  {
      "id": 890,
      "brandId": 53,
      "name": "FOCUS COMFORT 5K 1.6i (100)"
  },
  {
      "id": 891,
      "brandId": 53,
      "name": "FOCUS COMFORT 5K 1.6i (100) OV"
  },
  {
      "id": 892,
      "brandId": 53,
      "name": "FOCUS COMFORT 4K 1.6i (100)"
  },
  {
      "id": 893,
      "brandId": 53,
      "name": "FOCUS COMFORT 4K 1.6i (100) OV"
  },
  {
      "id": 894,
      "brandId": 53,
      "name": "FOCUS TREND X 5K 1.6 (115)"
  },
  {
      "id": 895,
      "brandId": 53,
      "name": "FOCUS TREND X 5K 1.6 TDCi (90)"
  },
  {
      "id": 896,
      "brandId": 53,
      "name": "FOCUS TREND X 5K 1.6i (100) OV"
  },
  {
      "id": 897,
      "brandId": 53,
      "name": "FOCUS TREND X 4K 1.6 (115)"
  },
  {
      "id": 898,
      "brandId": 53,
      "name": "FOCUS TREND X 4K 1.6 TDCi (90)"
  },
  {
      "id": 899,
      "brandId": 53,
      "name": "FOCUS TREND X 4K 1.6i (100) OV"
  },
  {
      "id": 900,
      "brandId": 53,
      "name": "FOCUS TREND X SW 1.6 TDCi (90)"
  },
  {
      "id": 901,
      "brandId": 53,
      "name": "FOCUS TREND X SW 1.6i (100)"
  },
  {
      "id": 902,
      "brandId": 53,
      "name": "FOCUS TREND X SW 1.6 (115) OV"
  },
  {
      "id": 903,
      "brandId": 53,
      "name": "FOCUS COLLECTION 5K 1.6 TDCi (90)"
  },
  {
      "id": 904,
      "brandId": 53,
      "name": "FOCUS COLLECTION 4K 1.6 TDCi (90)"
  },
  {
      "id": 905,
      "brandId": 53,
      "name": "FOCUS COLLECTION SW 1.6 TDCi (90)"
  },
  {
      "id": 906,
      "brandId": 53,
      "name": "KUGA SELECTIVE 5K 2.0 TDCi 140 P.SHIFT"
  },
  {
      "id": 907,
      "brandId": 53,
      "name": "KUGA TITANIUM 5K 2.0 TDCi 140 POWERSHIFT"
  },
  {
      "id": 908,
      "brandId": 53,
      "name": "FIESTA MY FIESTA 5K 1.25i"
  },
  {
      "id": 909,
      "brandId": 53,
      "name": "FIESTA MY FIESTA 5K 1.4 OV"
  },
  {
      "id": 910,
      "brandId": 53,
      "name": "FIESTA MY FIESTA 5K 1.4 TDCi"
  },
  {
      "id": 911,
      "brandId": 53,
      "name": "FIESTA SPORT 3K 1.6i (120)"
  },
  {
      "id": 912,
      "brandId": 53,
      "name": "C-MAX TREND 1.6i (125)"
  },
  {
      "id": 913,
      "brandId": 53,
      "name": "C-MAX TITANIUM  1.6i ECOBOOST (180)"
  },
  {
      "id": 914,
      "brandId": 53,
      "name": "C-MAX TITANIUM X 1.6i ECOBOOST (180)"
  },
  {
      "id": 915,
      "brandId": 53,
      "name": "C-MAX TITANIUM 1.6 TDCi (115)"
  },
  {
      "id": 916,
      "brandId": 53,
      "name": "C-MAX TITANIUM X 1.6 TDCi (115)"
  },
  {
      "id": 917,
      "brandId": 53,
      "name": "GRAND C-MAX TITANIUM 1.6i ECOBOOST (180)"
  },
  {
      "id": 918,
      "brandId": 53,
      "name": "GRAND C-MAX TITANIUM X 1.6i ECOBOOST 180"
  },
  {
      "id": 919,
      "brandId": 53,
      "name": "GRAND C-MAX TITANIUM 1.6 TDCi (115)"
  },
  {
      "id": 920,
      "brandId": 53,
      "name": "GRAND C-MAX TITANIUM X 1.6 TDCi (115)"
  },
  {
      "id": 921,
      "brandId": 53,
      "name": "FUSION COLLECTION 1.4 TDCI"
  },
  {
      "id": 922,
      "brandId": 53,
      "name": "FOCUS III TREND 1.6i (125) 5K"
  },
  {
      "id": 923,
      "brandId": 53,
      "name": "FOCUS III TREND 1.6 TDCi (95) 5K"
  },
  {
      "id": 924,
      "brandId": 53,
      "name": "FOCUS III TREND 1.6i (125) 4K"
  },
  {
      "id": 925,
      "brandId": 53,
      "name": "FOCUS III TREND 1.6 TDCi (95) 4K"
  },
  {
      "id": 926,
      "brandId": 53,
      "name": "FOCUS III STYLE 1.6i (125) 5K"
  },
  {
      "id": 927,
      "brandId": 53,
      "name": "FOCUS III STYLE 1.6 TDCi (115) 5K"
  },
  {
      "id": 928,
      "brandId": 53,
      "name": "FOCUS III STYLE 1.6i (125) 4K"
  },
  {
      "id": 929,
      "brandId": 53,
      "name": "FOCUS III STYLE 1.6 TDCi (115) 4K"
  },
  {
      "id": 930,
      "brandId": 53,
      "name": "FOCUS III TITANIUM 1.6i (125) 5K"
  },
  {
      "id": 931,
      "brandId": 53,
      "name": "FOCUS III TITANIUM 1.6i ECOBOOST 180 5K"
  },
  {
      "id": 932,
      "brandId": 53,
      "name": "FOCUS III TITANIUM 1.6 TDCi (115) 5K"
  },
  {
      "id": 933,
      "brandId": 53,
      "name": "FOCUS III TITANIUM 1.6i (125) 4K"
  },
  {
      "id": 934,
      "brandId": 53,
      "name": "FOCUS III TITANIUM1.6i ECOBOOST (180) 4K"
  },
  {
      "id": 935,
      "brandId": 53,
      "name": "FOCUS III TITANIUM 1.6i TDCi (115) 4K"
  },
  {
      "id": 936,
      "brandId": 53,
      "name": "MONDEO TREND 1.6i (120) SEDAN"
  },
  {
      "id": 937,
      "brandId": 53,
      "name": "MONDEO TREND 1.6i ECOBOOST SEDAN"
  },
  {
      "id": 938,
      "brandId": 53,
      "name": "MONDEO TREND 1.6 TDCi (115) SEDAN"
  },
  {
      "id": 939,
      "brandId": 53,
      "name": "MONDEO TITANIUM 1.6i ECOBOOST (160) SEDA"
  },
  {
      "id": 940,
      "brandId": 53,
      "name": "MONDEO TITANIUM 1.6 TDCi (115) SEDAN"
  },
  {
      "id": 941,
      "brandId": 53,
      "name": "MONDEO TITANIUM 2.0 TDCi 140 OV SEDAN"
  },
  {
      "id": 942,
      "brandId": 53,
      "name": "MONDEO SELECTIVE 1.6i ECOBOOST 160 SEDAN"
  },
  {
      "id": 943,
      "brandId": 53,
      "name": "MONDEO SELECTIVE 1.6 TDCi (115) SEDAN"
  },
  {
      "id": 944,
      "brandId": 53,
      "name": "MONDEO SELECTIVE 2.0i ECOBOOST240P.SHIFT"
  },
  {
      "id": 945,
      "brandId": 53,
      "name": "MONDEO SELECTIVE 2.0 TDCi 140 OV SW"
  },
  {
      "id": 946,
      "brandId": 53,
      "name": "MONDEO SELECTIVE 2.0i ECOBO. 240 POW.SW"
  },
  {
      "id": 947,
      "brandId": 53,
      "name": "S-MAX TITANIUM 1.6i ECOBOOST (160) 7 K."
  },
  {
      "id": 948,
      "brandId": 53,
      "name": "S-MAX TITANIUM 2.0 TDCi 140 OV 7 KOLTUK"
  },
  {
      "id": 949,
      "brandId": 53,
      "name": "GALAXY 2.0 TDCi (140) GHIA POWERSHIFT"
  },
  {
      "id": 951,
      "brandId": 53,
      "name": "KAMYON CARGO 1832 (4x2)"
  },
  {
      "id": 952,
      "brandId": 53,
      "name": "KAMYON CARGO 2538 6x2"
  },
  {
      "id": 953,
      "brandId": 53,
      "name": "KAMYON CARGO 2538F 6x2 ROMORK"
  },
  {
      "id": 954,
      "brandId": 53,
      "name": "KAMYON CARGO 3232S 8x2"
  },
  {
      "id": 955,
      "brandId": 53,
      "name": "KAMYON CARGO 3232C 8x2"
  },
  {
      "id": 956,
      "brandId": 53,
      "name": "KAMYON CARGO 3238S 8x2"
  },
  {
      "id": 957,
      "brandId": 53,
      "name": "KAMYON CARGO 3238C 8x2"
  },
  {
      "id": 958,
      "brandId": 53,
      "name": "KAMYON CARGO 3232CD 8x2"
  },
  {
      "id": 959,
      "brandId": 53,
      "name": "KAMYON CARGO 3232SD 8x2"
  },
  {
      "id": 960,
      "brandId": 53,
      "name": "KAMYON CARGO 3530M 6x4"
  },
  {
      "id": 961,
      "brandId": 53,
      "name": "KAMYON CARGO 3532M 6x4"
  },
  {
      "id": 962,
      "brandId": 53,
      "name": "CEKICI CARGO 1838T 4x2"
  },
  {
      "id": 963,
      "brandId": 53,
      "name": "TRANSIT 350M MINIBUS (10+1)"
  },
  {
      "id": 964,
      "brandId": 53,
      "name": "T.CONNECT KOMBI K210S (90) GLX PLUS 50.Y"
  },
  {
      "id": 965,
      "brandId": 53,
      "name": "TRANSIT KAMYONET 350 M CC AWD"
  },
  {
      "id": 966,
      "brandId": 53,
      "name": "TRANSIT KAMYONET 350 M DC AWD"
  },
  {
      "id": 967,
      "brandId": 53,
      "name": "TRANSIT VAN 350 L AWD"
  },
  {
      "id": 968,
      "brandId": 53,
      "name": "KAMYON CARGO 3936 M (8x4)"
  },
  {
      "id": 970,
      "brandId": 53,
      "name": "TRANSIT MINIBUS 350 L AWD"
  },
  {
      "id": 971,
      "brandId": 53,
      "name": "TRANSIT MINIBUS 350 L 13+1"
  },
  {
      "id": 972,
      "brandId": 53,
      "name": "TRANSIT MINIBUS 430 ED 13+1 (200)"
  },
  {
      "id": 973,
      "brandId": 53,
      "name": "TRANSIT OTOBUS 430 ED 16+1 (200)"
  },
  {
      "id": 975,
      "brandId": 53,
      "name": "KAMYON CARGO 3235 C 8x2"
  },
  {
      "id": 976,
      "brandId": 53,
      "name": "KAMYON 3536D (6x4)"
  },
  {
      "id": 977,
      "brandId": 53,
      "name": "KAMYON 4136D (8x4)"
  },
  {
      "id": 985,
      "brandId": 53,
      "name": "FOCUS III TREND 1.6i 125 5K POWERSHIFT"
  },
  {
      "id": 986,
      "brandId": 53,
      "name": "FOCUS III TREND 1.6i 125 4K POWERSHIFT"
  },
  {
      "id": 987,
      "brandId": 53,
      "name": "FOCUS III STYLE 1.6i 125 5K POWERSHIFT"
  },
  {
      "id": 988,
      "brandId": 53,
      "name": "FOCUS III STYLE 1.6i 125 4K POWERSHIFT"
  },
  {
      "id": 989,
      "brandId": 53,
      "name": "FOCUS III TITANIUM 1.6i 125 5K P.SHIFT"
  },
  {
      "id": 990,
      "brandId": 53,
      "name": "FOCUS III TITANIUM 1.6i 125 4K P.SHIFT"
  },
  {
      "id": 991,
      "brandId": 53,
      "name": "FOCUS III COMFORT 1.6i (105) 5K"
  },
  {
      "id": 992,
      "brandId": 53,
      "name": "FOCUS III COMFORT 1.6i (105) 4K"
  },
  {
      "id": 993,
      "brandId": 53,
      "name": "FOCUS III COMFORT 1.6 TDCi (95) 5K"
  },
  {
      "id": 994,
      "brandId": 53,
      "name": "FOCUS III COMFORT 1.6 TDCi (95) 4K"
  },
  {
      "id": 99,
      "brandId": 61,
      "name": "HR-V 1.6 CVT 5 KAPI"
  },
  {
      "id": 117,
      "brandId": 61,
      "name": "JAZZ 1.4 ES CVT"
  },
  {
      "id": 4,
      "brandId": 66,
      "name": "NPR KAMYON"
  },
  {
      "id": 40,
      "brandId": 66,
      "name": "NKR KAMYONET"
  },
  {
      "id": 5,
      "brandId": 82,
      "name": "AVIATOR"
  },
  {
      "id": 6,
      "brandId": 82,
      "name": "TOWN CAR ULTIMATE 4.6"
  },
  {
      "id": 1489,
      "brandId": 90,
      "name": "SPRINTER OKUL 19+1 COMFORTPLUS316CDI EKSTRA U"
  },
  {
      "id": 1497,
      "brandId": 90,
      "name": "SPRINTER SERVIS 14+1 COMFORTPLUS 316 CDI UZUN"
  },
  {
      "id": 2073,
      "brandId": 90,
      "name": "C 180 COUPE 1.6 AMG"
  },
  {
      "id": 2076,
      "brandId": 90,
      "name": "C 180 ESTATE 1.6 AVANTGARDE"
  },
  {
      "id": 2241,
      "brandId": 90,
      "name": "C 200 d ESTATE 1.6 AMG"
  },
  {
      "id": 2307,
      "brandId": 90,
      "name": "E 300 COUPE 2.0  AMG 9G-TRONIC"
  },
  {
      "id": 2308,
      "brandId": 90,
      "name": "E 220d COUPE 2.0 AMG 9G-TRONIC"
  },
  {
      "id": 2309,
      "brandId": 90,
      "name": "GLA 200 FL 1.6 7G-DCT AMG"
  },
  {
      "id": 2310,
      "brandId": 90,
      "name": "GLA 200 FL 1.6 7G-DCT COMFORT"
  },
  {
      "id": 2311,
      "brandId": 90,
      "name": "GLA 200 FL 1.6 7G-DCT URBAN"
  },
  {
      "id": 2312,
      "brandId": 90,
      "name": "GLA 180 d FL 1.5 7G-DCT COMFORT"
  },
  {
      "id": 2313,
      "brandId": 90,
      "name": "GLA 180 d FL 1.5 7G-DCT URBAN"
  },
  {
      "id": 2314,
      "brandId": 90,
      "name": "GLA 180 d FL 1.5 7G-DCT AMG"
  },
  {
      "id": 2315,
      "brandId": 90,
      "name": "E 220 d 4 MATIC 2.0 9G-TRONIC ALL-TERRAIN"
  },
  {
      "id": 2316,
      "brandId": 90,
      "name": "GLC 350 e 4MATIC 2.0 7G-TRONIC AMG"
  },
  {
      "id": 2317,
      "brandId": 90,
      "name": "GLE 500 4MATIC BASE 9G-TRONIC"
  },
  {
      "id": 2318,
      "brandId": 90,
      "name": "GLS 400 4MATIC"
  },
  {
      "id": 2319,
      "brandId": 90,
      "name": "MERCEDES-AMG CLA 45 4MATIC FL"
  },
  {
      "id": 2320,
      "brandId": 90,
      "name": "CLA 180 d FL AMG"
  },
  {
      "id": 2321,
      "brandId": 90,
      "name": "C 180 1.6 COMFORT 9G-TRONIC"
  },
  {
      "id": 2322,
      "brandId": 90,
      "name": "C 180 1.6 AVANTGARDE 9G-TRONIC"
  },
  {
      "id": 2323,
      "brandId": 90,
      "name": "C 180 1.6 EXCLUSIVE 9G-TRONIC"
  },
  {
      "id": 2324,
      "brandId": 90,
      "name": "C 180 1.6 AMG 9G-TRONIC"
  },
  {
      "id": 2325,
      "brandId": 90,
      "name": "C 180 COUPE 1.6 SPORT 9G-TRONIC"
  },
  {
      "id": 2326,
      "brandId": 90,
      "name": "C 180 COUPE 1.6 AMG 9G-TRONIC"
  },
  {
      "id": 2327,
      "brandId": 90,
      "name": "C 300 COUPE 2.0 AMG 9G-TRONIC"
  },
  {
      "id": 2328,
      "brandId": 90,
      "name": "C 180 CABRIOLET 1.6 AMG 9G-TRONIC"
  },
  {
      "id": 2329,
      "brandId": 90,
      "name": "C 300 CABRILET 2.0 AMG 9G-TRONIC"
  },
  {
      "id": 2330,
      "brandId": 90,
      "name": "C 180 ESTATE 1.6 AVANTGARDE 9G-TRONIC"
  },
  {
      "id": 2331,
      "brandId": 90,
      "name": "C 180 ESTATE 1.6 EXCLUSIVE 9G-TRONIC"
  },
  {
      "id": 2332,
      "brandId": 90,
      "name": "C 180 ESTATE 1.6 AMG 9G-TRONIC"
  },
  {
      "id": 2333,
      "brandId": 90,
      "name": "E 350 d 4MATIC 3.0 AVANTGARDE 9G-TRONIC"
  },
  {
      "id": 2334,
      "brandId": 90,
      "name": "E 350 d 4MATIC 3.0 EXCLUSIVE 9-GTRONIC"
  },
  {
      "id": 2335,
      "brandId": 90,
      "name": "E 350 d 4MATIC 3.0 AMG 9G-TRONIC"
  },
  {
      "id": 2336,
      "brandId": 90,
      "name": "E 220 d 4MATIC COUPE 2.0 AMG 9G-TRONIC"
  },
  {
      "id": 2337,
      "brandId": 90,
      "name": "S 400 d 4MATIC 3.0 AMG"
  },
  {
      "id": 2338,
      "brandId": 90,
      "name": "S 400  d 4MATIC LONG 3.0 VIZYON"
  },
  {
      "id": 2339,
      "brandId": 90,
      "name": "MAYBACH S 450 4MATIC"
  },
  {
      "id": 2340,
      "brandId": 90,
      "name": "MAYBACH S 560 4MATIC"
  },
  {
      "id": 2341,
      "brandId": 90,
      "name": "MERCEDES-AMG GT C ROADSTER"
  },
  {
      "id": 2342,
      "brandId": 90,
      "name": "A 180 STYLE+"
  },
  {
      "id": 2343,
      "brandId": 90,
      "name": "A 200 AMG WHITEART"
  },
  {
      "id": 2344,
      "brandId": 90,
      "name": "A 180 d AMG WHITEART"
  },
  {
      "id": 2345,
      "brandId": 90,
      "name": "A180 d STYLE+"
  },
  {
      "id": 2346,
      "brandId": 90,
      "name": "E 300 CABRIOLET 2.0 AMG 9G-TRONIC"
  },
  {
      "id": 2347,
      "brandId": 90,
      "name": "E 400 4MATIC COUPE 3.0 AMG 9G-TRONIC"
  },
  {
      "id": 2348,
      "brandId": 90,
      "name": "CLS 400 d MATIC AMG"
  },
  {
      "id": 2349,
      "brandId": 90,
      "name": "MERCEDES-MAYBACH S 650"
  },
  {
      "id": 2350,
      "brandId": 90,
      "name": "S 450 4MATIC COUPE SPORT"
  },
  {
      "id": 2351,
      "brandId": 90,
      "name": "S 560 4MATIC COUPE SPORT"
  },
  {
      "id": 2352,
      "brandId": 90,
      "name": "G 350 d LEGEND"
  },
  {
      "id": 2353,
      "brandId": 90,
      "name": "E 200 CGI COUPE"
  },
  {
      "id": 2354,
      "brandId": 90,
      "name": "MERCEDES-MAYBACH S 560 4MATIC"
  },
  {
      "id": 2355,
      "brandId": 90,
      "name": "C 180 1.6 STYLE 9G-TRONIC"
  },
  {
      "id": 2356,
      "brandId": 90,
      "name": "E 200 CDI BLUETEC"
  },
  {
      "id": 2357,
      "brandId": 90,
      "name": "MERCEDES-AMG GT C COUPE"
  },
  {
      "id": 2358,
      "brandId": 90,
      "name": "GLC 350 e 4MATIC AMG"
  },
  {
      "id": 2359,
      "brandId": 90,
      "name": "CLA 180 1.6"
  },
  {
      "id": 2360,
      "brandId": 90,
      "name": "E 350 CABRIOLET 2.0 AMG 9G-TRONIC"
  },
  {
      "id": 2361,
      "brandId": 90,
      "name": "E 350 2.0 9G-TRONIC"
  },
  {
      "id": 2362,
      "brandId": 90,
      "name": "E 350 COUPE 2.0 AMG 9G-TRONIC"
  },
  {
      "id": 2363,
      "brandId": 90,
      "name": "A 200 STYLE 1.33 (163) 7G-DCT"
  },
  {
      "id": 2364,
      "brandId": 90,
      "name": "A 200 PROGRESSIVE 1.33 (163) 7G-DCT"
  },
  {
      "id": 2365,
      "brandId": 90,
      "name": "A 200 AMG 1.33 (163) 7G-DCT"
  },
  {
      "id": 2366,
      "brandId": 90,
      "name": "A 180 d STYLE 1.5 (116) 7G-DCT"
  },
  {
      "id": 2367,
      "brandId": 90,
      "name": "A 180 d PROGRESSIVE 1.5 (116) 7G-DCT"
  },
  {
      "id": 2368,
      "brandId": 90,
      "name": "A 180 d AMG 1.5 (116) 7G-DCT"
  },
  {
      "id": 2369,
      "brandId": 90,
      "name": "MERCEDES-AMG G 63 FL"
  },
  {
      "id": 2370,
      "brandId": 90,
      "name": "C180 FL 1.6 (156) COMFORT 9G-TRONIC"
  },
  {
      "id": 2371,
      "brandId": 90,
      "name": "C200 4MATIC FL 1.5 (184) EXCLUSIVE 9G-TRONIC"
  },
  {
      "id": 2372,
      "brandId": 90,
      "name": "C 200 4MATIC FL 1.5 (184) AMG 9G-TRONIC"
  },
  {
      "id": 2373,
      "brandId": 90,
      "name": "C 200 d FL 1.6 (160) COMFORT 9G-TRONIC"
  },
  {
      "id": 2374,
      "brandId": 90,
      "name": "C 200 d FL 1.6 (160) EXCLUSIVE 9G-TRONIC"
  },
  {
      "id": 2375,
      "brandId": 90,
      "name": "C 200 d FL 1.6 (160) AMG 9G-TRONIC"
  },
  {
      "id": 2376,
      "brandId": 90,
      "name": "E 300 CDI"
  },
  {
      "id": 2377,
      "brandId": 90,
      "name": "GLC 350e 4MATIC EXCLUSIVE 7G-TRONIC PLUS"
  },
  {
      "id": 2378,
      "brandId": 90,
      "name": "GLC 350e 4MATIC AMG 7G-TRONIC PLUS"
  },
  {
      "id": 2379,
      "brandId": 90,
      "name": "C 200 4MATIC COUPE FL 1.5 (184) AMG 9G-TRONIC"
  },
  {
      "id": 2380,
      "brandId": 90,
      "name": "C 200 CABRIOLET FL 1.5 (184) AMG 9G-TRONIC"
  },
  {
      "id": 2381,
      "brandId": 90,
      "name": "CLS 300 d AMG"
  },
  {
      "id": 2382,
      "brandId": 90,
      "name": "S 600 LONG FL VIZYON 7G-TRONIC PLUS"
  },
  {
      "id": 2383,
      "brandId": 90,
      "name": "G 500 FL MAGNETIC"
  },
  {
      "id": 2384,
      "brandId": 90,
      "name": "S 560 CABRIOLET 4.0 9G-TRONIC"
  },
  {
      "id": 2385,
      "brandId": 90,
      "name": "MERCEDES-AMG S 63 4MATIC+ LOUNGE"
  },
  {
      "id": 2386,
      "brandId": 90,
      "name": "C 200 d COUPE 1.6 (160) AMG 9G-TRONIC"
  },
  {
      "id": 2387,
      "brandId": 90,
      "name": "S 560 4MATIC COUPE AMG"
  },
  {
      "id": 2388,
      "brandId": 90,
      "name": "MERCEDES-AMG S 63 4MATIC+ COUPE PERFORMANCE"
  },
  {
      "id": 2389,
      "brandId": 90,
      "name": "A180 STYLE 1.33 (136) 7G-TRONIC"
  },
  {
      "id": 2390,
      "brandId": 90,
      "name": "MERCEDES-AMG S 63 4MATIC+ CABROLET"
  },
  {
      "id": 2391,
      "brandId": 90,
      "name": "G 350 d FL MAGNETIC"
  },
  {
      "id": 2392,
      "brandId": 90,
      "name": "B 180 1.3 (136) STYLE"
  },
  {
      "id": 2393,
      "brandId": 90,
      "name": "B 180 1.3 (136) PROGRESSIVE"
  },
  {
      "id": 2394,
      "brandId": 90,
      "name": "B 180 d 1.5 (116) STYLE"
  },
  {
      "id": 2395,
      "brandId": 90,
      "name": "B 180 d 1.5 (116) PROGRESSIVE"
  },
  {
      "id": 2396,
      "brandId": 90,
      "name": "E 400 d 4MATIC COUPE 3.0 9G-TRONIC"
  },
  {
      "id": 2397,
      "brandId": 90,
      "name": "CLA 200 1.33 AMG"
  },
  {
      "id": 2398,
      "brandId": 90,
      "name": "CLA 180 d 1.5 (116) AMG"
  },
  {
      "id": 2399,
      "brandId": 90,
      "name": "MERCEDES-AMG GT 43 4MATIC+"
  },
  {
      "id": 2400,
      "brandId": 90,
      "name": "MERCEDES-AMG A 35 4MATIC"
  },
  {
      "id": 2401,
      "brandId": 90,
      "name": "A 200 SEDAN 1.33 (163) 7G-DCT STYLE"
  },
  {
      "id": 2402,
      "brandId": 90,
      "name": "A 200 SEDAN 1.33 (163) 7G-DCT AMG"
  },
  {
      "id": 2403,
      "brandId": 90,
      "name": "A 180 d SEDAN 1.5 (116) 7G-DCT STYLE"
  },
  {
      "id": 2404,
      "brandId": 90,
      "name": "A 180 d SEDAN 1.5 (116) 7G-DCT AMG"
  },
  {
      "id": 2405,
      "brandId": 90,
      "name": "S 450 LONG 4MATIC 9G-TRONIC"
  },
  {
      "id": 2406,
      "brandId": 90,
      "name": "B 200 CDI 2.1"
  },
  {
      "id": 2407,
      "brandId": 90,
      "name": "MERCEDES-AMG CLS 53 4MATIC+"
  },
  {
      "id": 2408,
      "brandId": 90,
      "name": "S 350 d 4MATIC LONG AMG"
  },
  {
      "id": 2409,
      "brandId": 90,
      "name": "GLC 200 2.0 EXCLUSIVE 9G-TRONIC"
  },
  {
      "id": 2410,
      "brandId": 90,
      "name": "GLC 220 d 4MATIC 2.0 OFF ROAD 9G-TRONIC"
  },
  {
      "id": 2411,
      "brandId": 90,
      "name": "GLC 300 d 4MATIC 2.0  AMG 9G-TRONIC"
  },
  {
      "id": 2412,
      "brandId": 90,
      "name": "GLC 300 d 4MATIC COUPE 2.0 AMG 9-TRONIC"
  },
  {
      "id": 2413,
      "brandId": 90,
      "name": "MERCEDES-AMG GT 53 4MATIC+"
  },
  {
      "id": 2414,
      "brandId": 90,
      "name": "MERCEDES-AMG A 45 S 4MATIC+"
  },
  {
      "id": 2415,
      "brandId": 90,
      "name": "MERCEDES-AMG CLA 45 S 4MATIC+"
  },
  {
      "id": 2416,
      "brandId": 90,
      "name": "EQC 400 4MATIC"
  },
  {
      "id": 2417,
      "brandId": 90,
      "name": "A 200 SEDAN 1..33 165 STYLE BLACK ART EDITION"
  },
  {
      "id": 2418,
      "brandId": 90,
      "name": "A 200 SEDAN 1.33 163 AMG ORANGEART EDITION"
  },
  {
      "id": 2419,
      "brandId": 90,
      "name": "A 180 d SEDAN 1.5 116 STYLE BLACKART EDITION"
  },
  {
      "id": 2420,
      "brandId": 90,
      "name": "A 180 d SEDAN 1.5 116 AMG ORANGE ART EDITION"
  },
  {
      "id": 2421,
      "brandId": 90,
      "name": "G 400 D FL"
  },
  {
      "id": 2422,
      "brandId": 90,
      "name": "E 200 d 1.6 EXCLUSIVE 9G-TRONIC"
  },
  {
      "id": 2423,
      "brandId": 90,
      "name": "E 200 d 1.6 AMG 9G-TRNIC"
  },
  {
      "id": 2424,
      "brandId": 90,
      "name": "A 200 SEDAN 1.33 163 7G-DGT STYLE BLACKARTED."
  },
  {
      "id": 2425,
      "brandId": 90,
      "name": "A 200 SEDAN 1.33 163 7G-DCT AMG ORANGEARTEDI."
  },
  {
      "id": 2426,
      "brandId": 90,
      "name": "A 180 d SEDAN 1.5 116 7G-DCT STYLEBLACKARTED."
  },
  {
      "id": 2427,
      "brandId": 90,
      "name": "A 180 d SEDAN 1.5 116 7G-DCT AMG ORANGEARTED."
  },
  {
      "id": 2428,
      "brandId": 90,
      "name": "V KLASSE 2.0 DIZEL"
  },
  {
      "id": 2429,
      "brandId": 90,
      "name": "E 180 1.5 ELEGANCE 9G-TRONIC"
  },
  {
      "id": 2430,
      "brandId": 90,
      "name": "MERCEDES-AMG GT 63 S 4MATIC+"
  },
  {
      "id": 2431,
      "brandId": 90,
      "name": "MERCEDES-AMG GT C ROADSTER PERFORMANCE"
  },
  {
      "id": 2432,
      "brandId": 90,
      "name": "MERCEDES-AMG GT S COUPE PERFORMANCE"
  },
  {
      "id": 2433,
      "brandId": 90,
      "name": "MERCEDES-AMG GT R COUPE PERFORMANCE"
  },
  {
      "id": 2434,
      "brandId": 90,
      "name": "V CLASSE V 300 2.0 DIZEL"
  },
  {
      "id": 2435,
      "brandId": 90,
      "name": "GLC 200 4MATIC 2.0 EXCLUSIVE 9G-TRONIC"
  },
  {
      "id": 2436,
      "brandId": 90,
      "name": "A 180 SEDAN 1.33 136 7G-DCT PROGRESSIVE"
  },
  {
      "id": 2437,
      "brandId": 90,
      "name": "A 180 SEDAN 1.33 136 7G-DCT PROGR.BLACKART E."
  },
  {
      "id": 2438,
      "brandId": 90,
      "name": "GLB 200 1.33 163 7G-DCT PROGRESSIVE"
  },
  {
      "id": 2439,
      "brandId": 90,
      "name": "GLB 200 1.33 163 7G-DCT AMG"
  },
  {
      "id": 2440,
      "brandId": 90,
      "name": "SL 350 (306) 7-GTRONIC PLUS"
  },
  {
      "id": 2441,
      "brandId": 90,
      "name": "E 180 1.6 PREMIUM"
  },
  {
      "id": 2442,
      "brandId": 90,
      "name": "GLS 400d 4 MATIC"
  },
  {
      "id": 2443,
      "brandId": 90,
      "name": "GLA 200 1.33 163 7G-DCT PROGRESSIVE"
  },
  {
      "id": 2444,
      "brandId": 90,
      "name": "GLA 200 1.33 163 7G-DCT AMG"
  },
  {
      "id": 2445,
      "brandId": 90,
      "name": "G 400 d STRONGER THAN TIME EDITION"
  },
  {
      "id": 2446,
      "brandId": 90,
      "name": "G400 d MAGNETIC"
  },
  {
      "id": 2447,
      "brandId": 90,
      "name": "E 200 d FL EDITION 1 EXCLUSIVE"
  },
  {
      "id": 2448,
      "brandId": 90,
      "name": "E 200 d FL EDITION 1 AMG"
  },
  {
      "id": 2449,
      "brandId": 90,
      "name": "E 220 d FL 4MATIC EDITION 1 EXCLUSIVE"
  },
  {
      "id": 2450,
      "brandId": 90,
      "name": "E 220 d FL 4MATIC EDTION 1 AMG"
  },
  {
      "id": 2451,
      "brandId": 90,
      "name": "C 200 4MATIC ESTATE FL 1.5 184 AMG 9G-TRONIC"
  },
  {
      "id": 2452,
      "brandId": 90,
      "name": "C 200 d ESTATE FL 1.6 160 AMG 9G-TRONIC"
  },
  {
      "id": 2453,
      "brandId": 90,
      "name": "A180 CDI 2.0"
  },
  {
      "id": 2454,
      "brandId": 90,
      "name": "R 280 CDI 4MATIC"
  },
  {
      "id": 2455,
      "brandId": 90,
      "name": "E 300 DE 4MATIC"
  },
  {
      "id": 2456,
      "brandId": 90,
      "name": "E 300 COUPE FL 2.0 258 EDITION1 AMG 9GTRONIC"
  },
  {
      "id": 2457,
      "brandId": 90,
      "name": "E 300 CABRIOLET FL 2.0 258 EDITION1 AMG 9TRON"
  },
  {
      "id": 2458,
      "brandId": 90,
      "name": "GLE 450"
  },
  {
      "id": 2459,
      "brandId": 90,
      "name": "A 200 SEDAN 1.33 (163) 7G-DCT PROGRESSIVE"
  },
  {
      "id": 2460,
      "brandId": 90,
      "name": "MERCEDES-AMG E 63 S 4MATIC+ 4.0 (612)"
  },
  {
      "id": 2461,
      "brandId": 90,
      "name": "EQC 400 4MATIC ELECTRIC ART"
  },
  {
      "id": 2462,
      "brandId": 90,
      "name": "E 230 SEDAN 7G-TRONIC"
  },
  {
      "id": 557,
      "brandId": 90,
      "name": "KAMYON AXOR 2523 CD"
  },
  {
      "id": 648,
      "brandId": 90,
      "name": "KAMYON ACTROS 4046 K 3900"
  },
  {
      "id": 654,
      "brandId": 90,
      "name": "SPRINTER 215 CDI PANELVAN (NP25)"
  },
  {
      "id": 679,
      "brandId": 90,
      "name": "VITO CAMLIVAN 115 CDI (UZUN)"
  },
  {
      "id": 766,
      "brandId": 90,
      "name": "CLK 220 CDI"
  },
  {
      "id": 816,
      "brandId": 90,
      "name": "VIANO 2.2 CDI AMBIENTE ACTIVITIY KISA"
  },
  {
      "id": 950,
      "brandId": 90,
      "name": "SPRINTER 315 CDI K.OTOBUS O316AC 16+1"
  },
  {
      "id": 969,
      "brandId": 90,
      "name": "VITO 115 CDI K336 CAMLI K.LI KASA K.NET"
  },
  {
      "id": 974,
      "brandId": 90,
      "name": "CEKICI ACTROS 1844 LS 4x2"
  },
  {
      "id": 978,
      "brandId": 90,
      "name": "SPRINTER 315 CDI CIFT KABIN K.NET NC30"
  },
  {
      "id": 979,
      "brandId": 90,
      "name": "CEKICI ACTROS 1851 LS"
  },
  {
      "id": 980,
      "brandId": 90,
      "name": "CEKICI ACTROS 1841 LSNRA"
  },
  {
      "id": 981,
      "brandId": 90,
      "name": "CEKICI ACTROS 1841 LSNRL"
  },
  {
      "id": 982,
      "brandId": 90,
      "name": "CEKICI ACTROS 1848 LSNRL 4x2"
  },
  {
      "id": 983,
      "brandId": 90,
      "name": "CEKICI ACTROS 2041 AS 4x4"
  },
  {
      "id": 984,
      "brandId": 90,
      "name": "CEKICI ACTROS 3341 S 6x4"
  },
  {
      "id": 995,
      "brandId": 90,
      "name": "KAMYON ACTROS 3341 AK 6x6"
  },
  {
      "id": 996,
      "brandId": 90,
      "name": "KAMYON ACTROS 4151 K 8x4"
  },
  {
      "id": 997,
      "brandId": 90,
      "name": "OTOBUS TOURISMO 16 RHD"
  },
  {
      "id": 998,
      "brandId": 90,
      "name": "CEKICI ACTROS 1844 LSNRL 4x2"
  },
  {
      "id": 531,
      "brandId": 100,
      "name": "DOBLO CLASSIC CARGO PLUS 1.3 M.JET"
  },
  {
      "id": 35,
      "brandId": 118,
      "name": "BOXSTER S"
  },
  {
      "id": 36,
      "brandId": 118,
      "name": "911 TURBO"
  },
  {
      "id": 41,
      "brandId": 118,
      "name": "CAYENNE"
  },
  {
      "id": 7,
      "brandId": 119,
      "name": "TELCOLINE 4x2 CIFT KABIN K.NET"
  },
  {
      "id": 9,
      "brandId": 119,
      "name": "TELCOLINE 4x4 CIFT KABIN KAMYONET"
  },
  {
      "id": 88,
      "brandId": 123,
      "name": "CEKICI PREMIUM 370.19 ECO 4x2"
  },
  {
      "id": 96,
      "brandId": 123,
      "name": "KAMYON PREMIUM 320.26 6x2"
  },
  {
      "id": 97,
      "brandId": 123,
      "name": "KAMYON MIDLUM 150.08 4x2"
  },
  {
      "id": 98,
      "brandId": 123,
      "name": "KAMYON MIDLUM 220.16 4x2"
  },
  {
      "id": 34,
      "brandId": 128,
      "name": "KYRON DLX D20DT 4x4 LUX"
  },
  {
      "id": 15,
      "brandId": 175,
      "name": "MUSTANG GT CONVERTIBLE 4.6i V8"
  },
  {
      "id": 1,
      "brandId": 230,
      "name": "COBRA GD 272 HALK OTOBUSU"
  },
  {
      "id": 2,
      "brandId": 230,
      "name": "COBRA GD 160 OTOBUS"
  },
  {
      "id": 3,
      "brandId": 230,
      "name": "COBRA GM 220 HALK OTOBUSU"
  },
  {
      "id": 8,
      "brandId": 235,
      "name": "GALLARDO LP 570-4 SUPERLEGGARA"
  },
  {
      "id": 11,
      "brandId": 400,
      "name": "CLASS AXOS 340 CX"
  },
  {
      "id": 13,
      "brandId": 400,
      "name": "CLASS ARION 420"
  },
  {
      "id": 1850,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 2615 4WD"
  },
  {
      "id": 1851,
      "brandId": 400,
      "name": "MASSEY FERGUSON 3.050 4x4"
  },
  {
      "id": 1852,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 5420-4 KABIN 4WD"
  },
  {
      "id": 1853,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 5430-4 KABIN 4WD"
  },
  {
      "id": 1854,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 5440-4 KABIN 4WD"
  },
  {
      "id": 1855,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 5450 -4 KABIN 4WD"
  },
  {
      "id": 1856,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 5465-4  KABIN 4WD"
  },
  {
      "id": 1857,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 5475-4 KABIN 4WD"
  },
  {
      "id": 1858,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 6465 4WD"
  },
  {
      "id": 1859,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 2620"
  },
  {
      "id": 1860,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 2620 4WD"
  },
  {
      "id": 1861,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 2635"
  },
  {
      "id": 1862,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 2635 4WD"
  },
  {
      "id": 1863,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 7614 DYNA 4 ESSENTIAL"
  },
  {
      "id": 1864,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 7615 4 ESSENTIAL"
  },
  {
      "id": 1865,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 7615 DYNA 6 ESSENTIAL"
  },
  {
      "id": 1866,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 7615 DYNA 6 EFFICIENT"
  },
  {
      "id": 1867,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 7615 DYNA 6 EXCLUSIVE"
  },
  {
      "id": 1868,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 7615 DYNA VT EFFICIENT"
  },
  {
      "id": 1869,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 7615 DYNA VT EXCLUSIVE"
  },
  {
      "id": 1870,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 7616 DYNA 6 ESSENTIAL"
  },
  {
      "id": 1871,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 7616 DYNA 6 EFFICIENT"
  },
  {
      "id": 1872,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 7616 DYNA 6 EXCLUSIVE"
  },
  {
      "id": 1873,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 7616 DYNA VT EFFICIENT"
  },
  {
      "id": 1874,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 7616 DYNA VT EXCLUSIVE"
  },
  {
      "id": 1875,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 7618 DYNA 6 ESSENTIAL"
  },
  {
      "id": 1876,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 7618 DYNA 6 EFFICIENT"
  },
  {
      "id": 1877,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 7618 DYNA 6 EXCLUSIVE"
  },
  {
      "id": 1878,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 7618 DYNA VT EFFICIENT"
  },
  {
      "id": 1879,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 7618 DYNA VT EXCLUSIVE"
  },
  {
      "id": 1880,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 7619 DYNA 6 ESSENTIAL"
  },
  {
      "id": 1881,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 7619 DYNA 6 EFFICIENT"
  },
  {
      "id": 1882,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 7619 DYNA 6 EXCLUSIVE"
  },
  {
      "id": 1883,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 7619 DYNA VT EFFICIENT"
  },
  {
      "id": 1884,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 7619 DYNA VT EXCLUSIVE"
  },
  {
      "id": 1885,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 7620 DYNA 6 ESSENTIAL"
  },
  {
      "id": 1886,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 7620 DYNA 6 EFFICIENT"
  },
  {
      "id": 1887,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 7620 DYNA 6 EXCLUSIVE"
  },
  {
      "id": 1888,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 7620 DYNA VT EFFICIENT"
  },
  {
      "id": 1889,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 7620 DYNA VT EXCLUSIVE"
  },
  {
      "id": 1890,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 7622 DYNA 6 ESSENTIAL"
  },
  {
      "id": 1891,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 7622 DYNA 6 EFFICIENT"
  },
  {
      "id": 1892,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 7622 DYNA 6 EXCLUSIVE"
  },
  {
      "id": 1893,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 7622 DYNA VT EFFICIENT"
  },
  {
      "id": 1894,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 7622 DYNA VT EXCLUSIVE"
  },
  {
      "id": 1895,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 7624 DYNA 6 ESSENTIAL"
  },
  {
      "id": 1896,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 7624 DYNA 6 EFFICIENT"
  },
  {
      "id": 1897,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 7624 DYNA 6 EXCLUSIVE"
  },
  {
      "id": 1898,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 8624 DYNA VT EFFICIENT"
  },
  {
      "id": 1899,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 7624 DYNA VT EXCLUSIVE"
  },
  {
      "id": 1900,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 7626 DYNA 6 ESSENTIAL"
  },
  {
      "id": 1901,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 7626 DYNA 6 EFFICIENT"
  },
  {
      "id": 1902,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 7626 DYNA 6 EXCLUSIVE"
  },
  {
      "id": 1903,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 3640 VSF"
  },
  {
      "id": 1904,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 3650 VSF"
  },
  {
      "id": 1905,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 3660 VSF"
  },
  {
      "id": 1906,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 2615 BAHCE"
  },
  {
      "id": 1907,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 2615 BAHCE 4WD"
  },
  {
      "id": 1908,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 2630"
  },
  {
      "id": 1909,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 5410-4 KABIN 4WD"
  },
  {
      "id": 1910,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 2615 GE"
  },
  {
      "id": 1911,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 2615 GE 4WD"
  },
  {
      "id": 1912,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 2630 4WD"
  },
  {
      "id": 1913,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 5611 4WD KABINLI DYNA 4"
  },
  {
      "id": 1914,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 5612 KABINLI DYNA 4"
  },
  {
      "id": 1915,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 5613 4WD KABINLI DYNA 4"
  },
  {
      "id": 1916,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 6613 4WD KABINLI DYNA 6"
  },
  {
      "id": 1917,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 6614 4WD KABINLI DYNA 6"
  },
  {
      "id": 1918,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 6615 4WD KABINLI DYNA 6"
  },
  {
      "id": 1919,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 6616 4WD KABINLI DYNA 6"
  },
  {
      "id": 1920,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 6614 4WD KABINLI DYNA VT"
  },
  {
      "id": 1921,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 6615 4WD DYNA VT"
  },
  {
      "id": 1922,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 6616 4WD KABINLI DYNA VT"
  },
  {
      "id": 1923,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 2620 GE"
  },
  {
      "id": 1924,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 2620 GE 4WD"
  },
  {
      "id": 1925,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 2630 GE"
  },
  {
      "id": 1926,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 2630 GE 4WD"
  },
  {
      "id": 1927,
      "brandId": 400,
      "name": "MASEY FERGUSON 5430 2WD KABIN"
  },
  {
      "id": 1928,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 2630 F"
  },
  {
      "id": 1929,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 2630 F 4WD"
  },
  {
      "id": 1930,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 5445 4WD KABIN"
  },
  {
      "id": 1931,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 5455 4WD KABIN"
  },
  {
      "id": 1932,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 3625F 4WD"
  },
  {
      "id": 1933,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 3635F 4WD"
  },
  {
      "id": 1934,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 3640F 4WD"
  },
  {
      "id": 1935,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 3650F 4WD"
  },
  {
      "id": 1936,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 3660F 4WD"
  },
  {
      "id": 1937,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 3625GE 4WD"
  },
  {
      "id": 1938,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 3635GE 4WD"
  },
  {
      "id": 1939,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 3640GE 4WD"
  },
  {
      "id": 1940,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 3650GE 4WD"
  },
  {
      "id": 1941,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 3660GE 4WD"
  },
  {
      "id": 1942,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 2635 4WD KABIN"
  },
  {
      "id": 1943,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 5611 4WD KABINLI DYNA 6"
  },
  {
      "id": 1944,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 5612 4WD KABINLI DYNA 6"
  },
  {
      "id": 1945,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 5613 4WD KABINLI DYNA 6"
  },
  {
      "id": 1946,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 8727 DYNA VT EFFICIENT"
  },
  {
      "id": 1947,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 8727 DYNA VT EXCLUSIVE"
  },
  {
      "id": 1948,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 8730 DYNA VT EFFICIENT"
  },
  {
      "id": 1949,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 8730 DYNA VT EXCLUSIVE"
  },
  {
      "id": 1950,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 8732 DYNA VT EFFICIENT"
  },
  {
      "id": 1951,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 8732 DYNA VT EXCLUSIVE"
  },
  {
      "id": 1952,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 8735 DYNA VT EFFICIENT"
  },
  {
      "id": 1953,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 8735 DYNA VT EXCLUSIVE"
  },
  {
      "id": 1954,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 8737 DYNA VT EFFICIENT"
  },
  {
      "id": 1955,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 8737 DYNA VT EXCLUSIVE"
  },
  {
      "id": 1956,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 4708"
  },
  {
      "id": 1957,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 4708 4WD"
  },
  {
      "id": 1958,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 4709"
  },
  {
      "id": 1959,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 4709 4WD"
  },
  {
      "id": 1960,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 2615 4x4"
  },
  {
      "id": 1961,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 2630 4x4 KABIN"
  },
  {
      "id": 1962,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 3630F 4WD"
  },
  {
      "id": 1963,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 3630GE 4WD"
  },
  {
      "id": 1964,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 5611 DYNA 4 ESSENTIAL"
  },
  {
      "id": 1965,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 5611 DYNA 4 EFFICIENT"
  },
  {
      "id": 1966,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 5611 DYNA 6 ESSENTIAL"
  },
  {
      "id": 1967,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 5611 DYNA 6 EFFICIENT"
  },
  {
      "id": 1968,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 5612 DYNA 4 ESSENTIAL"
  },
  {
      "id": 1969,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 5612 DYNA 4 EFFICIENT"
  },
  {
      "id": 1970,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 5612 DYNA 6 ESSENTIAL"
  },
  {
      "id": 1971,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 5612 DYNA 6 EFFICIENT"
  },
  {
      "id": 1972,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 5613 DYNA 4 ESSENTIAL"
  },
  {
      "id": 1973,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 5613 DYNA 4 EFFICIENT"
  },
  {
      "id": 1974,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 5613 DYNA 6 ESSENTIAL"
  },
  {
      "id": 1975,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 5613 DYNA 6 EFFICEIENT"
  },
  {
      "id": 1976,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 6612 DYNA 4 ESSENTIAL"
  },
  {
      "id": 1977,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 6613 DYNA 4 ESSENTIAL"
  },
  {
      "id": 1978,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 6613 DYNA 6 ESSENTIAL"
  },
  {
      "id": 1979,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 6613 DYNA 6 EFFICIENT"
  },
  {
      "id": 1980,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 6613 DYNA 6 EXCLUSIVE"
  },
  {
      "id": 1981,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 6614 DYNA 6 ESSENTIAL"
  },
  {
      "id": 1982,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 6614 DYNA 6 EFFICIENT"
  },
  {
      "id": 1983,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 6614 DYNA 6 EXCLUSIVE"
  },
  {
      "id": 1984,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 6614 DYNA VT EFFICIENT"
  },
  {
      "id": 1985,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 6614 DYNA VT EXCLUSIVE"
  },
  {
      "id": 1986,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 6615 DYNA 4 ESSENTIAL"
  },
  {
      "id": 1987,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 6615 DYNA 6 ESSENTIAL"
  },
  {
      "id": 1988,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 6615 DYNA 6 EFFICIENT"
  },
  {
      "id": 1989,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 6615 DYNA 6 EXCLUSIVE"
  },
  {
      "id": 1990,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 6615 DYNA VT EFFICIENT"
  },
  {
      "id": 1991,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 6615 DYNA VT EXCLUSIVE"
  },
  {
      "id": 1992,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 6616 DYNA 6 ESSENTIAL"
  },
  {
      "id": 1993,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 6616DYNA 6 EFFICIENT"
  },
  {
      "id": 1994,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 6616 DYNA 6 EXCLUSIVE"
  },
  {
      "id": 1995,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 6616 DYNA VT EFFICIENT"
  },
  {
      "id": 1996,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 6616 DYNA VT WXCUSIVE"
  },
  {
      "id": 1997,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 2630 KABIN"
  },
  {
      "id": 1998,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF4707 KABIN ESSENTIAL 4WD"
  },
  {
      "id": 1999,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF4708 KABIN ESSENTIAL 4WD"
  },
  {
      "id": 2463,
      "brandId": 400,
      "name": "CASE JX90 4WD PS"
  },
  {
      "id": 2464,
      "brandId": 400,
      "name": "CASE JX90 4WD KABINLI PS"
  },
  {
      "id": 2465,
      "brandId": 400,
      "name": "CASE JX100 4WD KABINLI PS"
  },
  {
      "id": 2466,
      "brandId": 400,
      "name": "CASE JX110 4WD KABINLI PS 750"
  },
  {
      "id": 2467,
      "brandId": 400,
      "name": "CASE JX110 4WD KABINLI PS 1000"
  },
  {
      "id": 2468,
      "brandId": 400,
      "name": "CASE JX110 4WD KABINLI PS YFL 750"
  },
  {
      "id": 2469,
      "brandId": 400,
      "name": "CASE JX65C 4WD PS"
  },
  {
      "id": 2470,
      "brandId": 400,
      "name": "CASE JX65C 4WD PS ON YUKLEYICI"
  },
  {
      "id": 2471,
      "brandId": 400,
      "name": "CASE JX75C 4WD PS"
  },
  {
      "id": 2472,
      "brandId": 400,
      "name": "CASE JX75C PS ON YUKLEYICI"
  },
  {
      "id": 2473,
      "brandId": 400,
      "name": "CASE MAXXUM 125 T4B"
  },
  {
      "id": 2474,
      "brandId": 400,
      "name": "CASE MAXXUM 135 CVX T4B"
  },
  {
      "id": 2475,
      "brandId": 400,
      "name": "CASE JX75C 4WD KABINLI PS"
  },
  {
      "id": 2476,
      "brandId": 400,
      "name": "CASE MAXXUM 115 T4B"
  },
  {
      "id": 2477,
      "brandId": 400,
      "name": "CASE MAXXUM 135 T4B"
  },
  {
      "id": 2478,
      "brandId": 400,
      "name": "CASE MAXXUM 145 T4B"
  },
  {
      "id": 2479,
      "brandId": 400,
      "name": "CASE MAXXUM 150 TB"
  },
  {
      "id": 2480,
      "brandId": 400,
      "name": "CASE MAXXUM 115 CVX"
  },
  {
      "id": 2481,
      "brandId": 400,
      "name": "CASE MAXXUM 125 CVX T4B"
  },
  {
      "id": 2482,
      "brandId": 400,
      "name": "CASE MAXXUM 145 CVX T4B"
  },
  {
      "id": 2483,
      "brandId": 400,
      "name": "CASE JX65C 4WD KABINLI PS"
  },
  {
      "id": 2484,
      "brandId": 400,
      "name": "CASE JX65C 4WD KABINLI PS ON YUKLEMELI"
  },
  {
      "id": 2485,
      "brandId": 400,
      "name": "CASE PUMA 200 CVX  T4B"
  },
  {
      "id": 2487,
      "brandId": 400,
      "name": "CASE OPTUM 300 CVX T4B"
  },
  {
      "id": 2488,
      "brandId": 400,
      "name": "CASE JX75C 4WD KABINLI PS SRG"
  },
  {
      "id": 2489,
      "brandId": 400,
      "name": "CASE JX75C 4WD KABINLI PS ON YUK."
  },
  {
      "id": 2490,
      "brandId": 400,
      "name": "CASE JX75 KABINLI PS"
  },
  {
      "id": 2491,
      "brandId": 400,
      "name": "CASE JX75 4WD PS FL"
  },
  {
      "id": 2492,
      "brandId": 400,
      "name": "CASE JX100 4WD KABINLI PS FL"
  },
  {
      "id": 2493,
      "brandId": 400,
      "name": "CASE MAXXUM 125 STANDART T4B"
  },
  {
      "id": 2494,
      "brandId": 400,
      "name": "CASE MAXXUM 135 STANDART T4B"
  },
  {
      "id": 2495,
      "brandId": 400,
      "name": "CASE PUMA 220 CVX T4B"
  },
  {
      "id": 2496,
      "brandId": 400,
      "name": "CASE  JX75C 4WD ON YUKLEYICILI"
  },
  {
      "id": 2497,
      "brandId": 400,
      "name": "CASE JX100 4WD PS FL"
  },
  {
      "id": 2498,
      "brandId": 400,
      "name": "CASE JX 110 4WD PS 750"
  },
  {
      "id": 2501,
      "brandId": 400,
      "name": "BASAK 2043 SH / 2047 EKO"
  },
  {
      "id": 2502,
      "brandId": 400,
      "name": "BASAK 2050 SH / 2060T YUKSEK PLATFORM"
  },
  {
      "id": 2503,
      "brandId": 400,
      "name": "BASAK 2050T ASH / 2060D 4x4 YUKSEK PLATFORM"
  },
  {
      "id": 2504,
      "brandId": 400,
      "name": "BASAK 2073 SH / 73-75T LUX KABIN"
  },
  {
      "id": 2505,
      "brandId": 400,
      "name": "BASAK 2073A SH / 73-75D 4x4"
  },
  {
      "id": 2506,
      "brandId": 400,
      "name": "BASAK 2073A SH / 73-75D 4x4 LUX KABIN"
  },
  {
      "id": 2507,
      "brandId": 400,
      "name": "BASAK 2073 SH / 2085T LUX KABIN"
  },
  {
      "id": 2508,
      "brandId": 400,
      "name": "BASAK 2073A SH / 2085D 4x4"
  },
  {
      "id": 2509,
      "brandId": 400,
      "name": "BASAK 2073A SH / 2085D 4x4 LUX KABIN"
  },
  {
      "id": 2510,
      "brandId": 400,
      "name": "BASAK 2043 SH / 2047 EKO BAHCE"
  },
  {
      "id": 2511,
      "brandId": 400,
      "name": "BASAK 2050 SH / 2060 T"
  },
  {
      "id": 2512,
      "brandId": 400,
      "name": "BASAK 2050 SH / 2060 TK"
  },
  {
      "id": 2513,
      "brandId": 400,
      "name": "BASAK 2050 SH / 2060 D 4x4"
  },
  {
      "id": 2514,
      "brandId": 400,
      "name": "BASAK 2050 SH / 2060 DK 4x4 KABIN"
  },
  {
      "id": 2515,
      "brandId": 400,
      "name": "BASAK 2073 SH / 2075T KLASIK"
  },
  {
      "id": 2516,
      "brandId": 400,
      "name": "BASAK 2073 SH / 2075 T"
  },
  {
      "id": 2517,
      "brandId": 400,
      "name": "BASAK 2073 SH / 2075 TK KABIN"
  },
  {
      "id": 2518,
      "brandId": 400,
      "name": "BASAK 2073 SH / 2075D 4x4 KLASIK"
  },
  {
      "id": 2519,
      "brandId": 400,
      "name": "BASAK 2073 SH / 2075D 4x4"
  },
  {
      "id": 2520,
      "brandId": 400,
      "name": "BASAK 2073 SH /2075 DK KABIN"
  },
  {
      "id": 2521,
      "brandId": 400,
      "name": "BASAK 2080 T"
  },
  {
      "id": 2522,
      "brandId": 400,
      "name": "BASAK 2080 T KABIN"
  },
  {
      "id": 2523,
      "brandId": 400,
      "name": "BASAK 2080 D 4x4"
  },
  {
      "id": 2524,
      "brandId": 400,
      "name": "BASAK 2080 D 4x4 KABIN"
  },
  {
      "id": 2525,
      "brandId": 400,
      "name": "BASAK BE 70 4x4 KABIN"
  },
  {
      "id": 2526,
      "brandId": 400,
      "name": "BASAK BE 80 4x4 KABIN"
  },
  {
      "id": 2527,
      "brandId": 400,
      "name": "BASAK BE 90 4x4 KABIN"
  },
  {
      "id": 2528,
      "brandId": 400,
      "name": "BASAK 2060 T KABINLI"
  },
  {
      "id": 2529,
      "brandId": 400,
      "name": "BASAK 2060 D 4x4 KABINLI"
  },
  {
      "id": 2530,
      "brandId": 400,
      "name": "BASAK 2060 TB"
  },
  {
      "id": 2531,
      "brandId": 400,
      "name": "BASAK 2060 DB 4x4"
  },
  {
      "id": 2532,
      "brandId": 400,
      "name": "BASAK 2080 DB 4x4"
  },
  {
      "id": 2533,
      "brandId": 400,
      "name": "BASAK 2060 T KLASIK"
  },
  {
      "id": 2534,
      "brandId": 400,
      "name": "BASAK 2060 D 4x4 KLASIK"
  },
  {
      "id": 2535,
      "brandId": 400,
      "name": "BASAK 2073 SH / 2075D 4x4 KABIN AC"
  },
  {
      "id": 2536,
      "brandId": 400,
      "name": "BASAK 2080 4x4"
  },
  {
      "id": 2537,
      "brandId": 400,
      "name": "BASAK 2080 4x4 KABIN"
  },
  {
      "id": 2538,
      "brandId": 400,
      "name": "BASAK 2090 4x4"
  },
  {
      "id": 2539,
      "brandId": 400,
      "name": "BASAK 2090 4x4 KABIN"
  },
  {
      "id": 2540,
      "brandId": 400,
      "name": "BASAK 2060 BK"
  },
  {
      "id": 2541,
      "brandId": 400,
      "name": "BASAK 2060 BK 4WD"
  },
  {
      "id": 2542,
      "brandId": 400,
      "name": "BASAK 2060 BT"
  },
  {
      "id": 2543,
      "brandId": 400,
      "name": "BASAK 2060 BT KABINLI"
  },
  {
      "id": 2544,
      "brandId": 400,
      "name": "BASAK 2060 BT 4WD"
  },
  {
      "id": 2545,
      "brandId": 400,
      "name": "BASAK 2060 BT 4WD KABINLI"
  },
  {
      "id": 2546,
      "brandId": 400,
      "name": "BASAK 2075 BK"
  },
  {
      "id": 2547,
      "brandId": 400,
      "name": "BASAK 2075 BK KABINLI"
  },
  {
      "id": 2548,
      "brandId": 400,
      "name": "BASAK 2075 BK 4WD"
  },
  {
      "id": 2549,
      "brandId": 400,
      "name": "BASAK 2075 BK 4WD KABINLI"
  },
  {
      "id": 2550,
      "brandId": 400,
      "name": "BASAK 2075 BT"
  },
  {
      "id": 2551,
      "brandId": 400,
      "name": "BASAK 2075 BT KABINLI"
  },
  {
      "id": 2552,
      "brandId": 400,
      "name": "BASAK 2075 BT 4WD"
  },
  {
      "id": 2553,
      "brandId": 400,
      "name": "BASAK 2075 BT 4WD KABINLI"
  },
  {
      "id": 2554,
      "brandId": 400,
      "name": "BASAK 2080 S 12+12"
  },
  {
      "id": 2555,
      "brandId": 400,
      "name": "BASAK 2080 S KABINLI 12+12"
  },
  {
      "id": 2556,
      "brandId": 400,
      "name": "BASAK 2090 S 12+12"
  },
  {
      "id": 2557,
      "brandId": 400,
      "name": "BASAK 2090 S KABINLI 12+12"
  },
  {
      "id": 2558,
      "brandId": 400,
      "name": "BASAK 2060 BB BAHCE"
  },
  {
      "id": 2559,
      "brandId": 400,
      "name": "BASAK 2060 BB 4WD BAHCE"
  },
  {
      "id": 2560,
      "brandId": 400,
      "name": "BASAK 2080 BB 4WD BAHCE"
  },
  {
      "id": 2561,
      "brandId": 400,
      "name": "BASAK 2080 S 24+24"
  },
  {
      "id": 2562,
      "brandId": 400,
      "name": "BASAK 2080 S KABINLI 24+24"
  },
  {
      "id": 2563,
      "brandId": 400,
      "name": "BASAK 2090 S 24+24"
  },
  {
      "id": 2564,
      "brandId": 400,
      "name": "BASAK 2090 S KABINLI 24+24"
  },
  {
      "id": 2565,
      "brandId": 400,
      "name": "BASAK 2100 S KABINLI 4WD 24+24"
  },
  {
      "id": 2566,
      "brandId": 400,
      "name": "BASAK 2110 S KABINLI 4WD 24+24"
  },
  {
      "id": 2567,
      "brandId": 400,
      "name": "BASAK 2070 BB 4WD BAHCE"
  },
  {
      "id": 2568,
      "brandId": 400,
      "name": "BASAK 2075 BT 4WD GENIS KABINLI"
  },
  {
      "id": 2569,
      "brandId": 400,
      "name": "BASAK BE 70 4WD KABINLI"
  },
  {
      "id": 2570,
      "brandId": 400,
      "name": "BASAK BE 80 4WD KABINLI"
  },
  {
      "id": 2571,
      "brandId": 400,
      "name": "BASAK 2055 KOMPAKT 4x4"
  },
  {
      "id": 2572,
      "brandId": 400,
      "name": "BASAK 2105 SL KABIN 4x4"
  },
  {
      "id": 2573,
      "brandId": 400,
      "name": "BASAK 5120 4x4"
  },
  {
      "id": 2574,
      "brandId": 400,
      "name": "BASAK 5120 4x4 3 NA ON PTO"
  },
  {
      "id": 2601,
      "brandId": 400,
      "name": "SAME ARGON 80 4WD"
  },
  {
      "id": 2602,
      "brandId": 400,
      "name": "SAME ARGON 80 4WD KABINLI"
  },
  {
      "id": 2603,
      "brandId": 400,
      "name": "SAME EXPLORER 90T CL."
  },
  {
      "id": 2604,
      "brandId": 400,
      "name": "SAME EXPLORER 90T CL. KABINLI"
  },
  {
      "id": 2605,
      "brandId": 400,
      "name": "SAME EXPLORER 105T CL."
  },
  {
      "id": 2606,
      "brandId": 400,
      "name": "SAME EXPLORER 105T CL. KABINLI"
  },
  {
      "id": 2607,
      "brandId": 400,
      "name": "SAME FRUTTETO3 100 DT CLASSIC"
  },
  {
      "id": 2608,
      "brandId": 400,
      "name": "SAME EXPLORER3 85 DT KABINLI"
  },
  {
      "id": 2609,
      "brandId": 400,
      "name": "SAME EXPLORER3 100DT KABINLI"
  },
  {
      "id": 2612,
      "brandId": 400,
      "name": "SAME SILVER3 110 DT"
  },
  {
      "id": 2613,
      "brandId": 400,
      "name": "SAME TIGER 55"
  },
  {
      "id": 2614,
      "brandId": 400,
      "name": "SAME TIGER 55 KABINLI"
  },
  {
      "id": 2615,
      "brandId": 400,
      "name": "SAME TIGER 65 KABINLI"
  },
  {
      "id": 2616,
      "brandId": 400,
      "name": "SAME TIGER 65 4WD KABINLI"
  },
  {
      "id": 2617,
      "brandId": 400,
      "name": "SAME TIGER 75 4WD"
  },
  {
      "id": 2618,
      "brandId": 400,
      "name": "SAME TIGER 75 4WD KABINLI"
  },
  {
      "id": 2619,
      "brandId": 400,
      "name": "SAME ARGON 65 4WD KABINLI"
  },
  {
      "id": 2620,
      "brandId": 400,
      "name": "SAME ARGON 75 4WD KABINLI"
  },
  {
      "id": 2621,
      "brandId": 400,
      "name": "SAME TIGER 55 4WD"
  },
  {
      "id": 2622,
      "brandId": 400,
      "name": "SAME TIGER 55 4WD KABINLI"
  },
  {
      "id": 2623,
      "brandId": 400,
      "name": "SAME EXPLORER3 85 DT BASSO"
  },
  {
      "id": 2624,
      "brandId": 400,
      "name": "SAME ARGON 65"
  },
  {
      "id": 2625,
      "brandId": 400,
      "name": "SAME EXPLORER3 90 DT"
  },
  {
      "id": 2626,
      "brandId": 400,
      "name": "SAME EXPLORER3 105 DT"
  },
  {
      "id": 2627,
      "brandId": 400,
      "name": "SAME EXPLORER3 90 DT LUX"
  },
  {
      "id": 2628,
      "brandId": 400,
      "name": "SAME EXPLORER3 105 DT LUX"
  },
  {
      "id": 2629,
      "brandId": 400,
      "name": "SAME VIRTUS J 110 DT GS"
  },
  {
      "id": 2630,
      "brandId": 400,
      "name": "SAME VIRTUS J 120 DT GS"
  },
  {
      "id": 2631,
      "brandId": 400,
      "name": "SAME FRUTTETO3 55 NATURAL"
  },
  {
      "id": 2632,
      "brandId": 400,
      "name": "SAME FRUTTETO3 55 NATURAL 4WD"
  },
  {
      "id": 2633,
      "brandId": 400,
      "name": "SAME FRUTTETO3 65 NATURAL"
  },
  {
      "id": 2634,
      "brandId": 400,
      "name": "SAME FRUTTETO3 65 NTATURAL 4WD"
  },
  {
      "id": 2636,
      "brandId": 400,
      "name": "SAME FRUTTEO3 80 GS DT KABINLI"
  },
  {
      "id": 2637,
      "brandId": 400,
      "name": "SAME FRUTTETO3 100 GS DT KABINLI"
  },
  {
      "id": 2638,
      "brandId": 400,
      "name": "SAME EXPLORER3 85 TB DT"
  },
  {
      "id": 2639,
      "brandId": 400,
      "name": "SAME FRUTTETO3 90T CL DT"
  },
  {
      "id": 2640,
      "brandId": 400,
      "name": "SAME TIGER 55 ECO"
  },
  {
      "id": 2641,
      "brandId": 400,
      "name": "SAME TIGER 55 4WD ECO"
  },
  {
      "id": 2642,
      "brandId": 400,
      "name": "SAME EXPLORER3 95TB DT"
  },
  {
      "id": 2643,
      "brandId": 400,
      "name": "SAME FRUTTETO3 55 NATURAL (15+15)"
  },
  {
      "id": 2644,
      "brandId": 400,
      "name": "SAME FRUTTETO3 55 NATURAL 4WD (15+15)"
  },
  {
      "id": 2645,
      "brandId": 400,
      "name": "SAME FRUTTETO3 65 NATURAL (15+15)"
  },
  {
      "id": 2646,
      "brandId": 400,
      "name": "SAME FRUTTETO3 65 NATURAL 4WD (15+15)"
  },
  {
      "id": 2647,
      "brandId": 400,
      "name": "SAME FRUTTETO NATURAL 2WD (12+3)"
  },
  {
      "id": 2648,
      "brandId": 400,
      "name": "SAME DORADO 50"
  },
  {
      "id": 2649,
      "brandId": 400,
      "name": "SAME DORADO 50 KABIN"
  },
  {
      "id": 2650,
      "brandId": 400,
      "name": "SAME DORADO 50 4WD"
  },
  {
      "id": 2651,
      "brandId": 400,
      "name": "SAME DORADO 50 4WD KABIN"
  },
  {
      "id": 2652,
      "brandId": 400,
      "name": "SAME DORADO 55"
  },
  {
      "id": 2653,
      "brandId": 400,
      "name": "SAME DORADO 55 KABIN"
  },
  {
      "id": 2654,
      "brandId": 400,
      "name": "SAME DORADO 55 4WD"
  },
  {
      "id": 2655,
      "brandId": 400,
      "name": "SAME DORADO 55 4WD KABIN"
  },
  {
      "id": 2656,
      "brandId": 400,
      "name": "SAME DORADO 65"
  },
  {
      "id": 2657,
      "brandId": 400,
      "name": "SAME DORADO 65 KABIN"
  },
  {
      "id": 2658,
      "brandId": 400,
      "name": "SAME DORADO 65 4WD"
  },
  {
      "id": 2659,
      "brandId": 400,
      "name": "SAME DORADO 65 4WD KABIN"
  },
  {
      "id": 2660,
      "brandId": 400,
      "name": "SAME DORADO 75"
  },
  {
      "id": 2661,
      "brandId": 400,
      "name": "SAME DORADO 75 KABIN"
  },
  {
      "id": 2662,
      "brandId": 400,
      "name": "SAME DORADO 75 4WD"
  },
  {
      "id": 2663,
      "brandId": 400,
      "name": "SAME DORADO 75 4WD KABIN"
  },
  {
      "id": 2664,
      "brandId": 400,
      "name": "SAME DORADO 80"
  },
  {
      "id": 2665,
      "brandId": 400,
      "name": "SAME DORADO 80 KABIN"
  },
  {
      "id": 2666,
      "brandId": 400,
      "name": "SAME DORADO 80 4WD"
  },
  {
      "id": 2667,
      "brandId": 400,
      "name": "SAME DORADO 80 4WD KABIN"
  },
  {
      "id": 2668,
      "brandId": 400,
      "name": "SAME DORADO 90 4WD"
  },
  {
      "id": 2669,
      "brandId": 400,
      "name": "SAME DORADO 90 4WD KABIN"
  },
  {
      "id": 2670,
      "brandId": 400,
      "name": "SAME DORADO 100 4WD"
  },
  {
      "id": 2671,
      "brandId": 400,
      "name": "SAME DORADO 100 4WD KABIN"
  },
  {
      "id": 2672,
      "brandId": 400,
      "name": "SAME EXPLORER 105 TB"
  },
  {
      "id": 2744,
      "brandId": 400,
      "name": "DEUTZ-FAHR AGROTRON 6215 TTV"
  },
  {
      "id": 2745,
      "brandId": 400,
      "name": "DEUTZ-FAHR AGROTRON 6165 TTV"
  },
  {
      "id": 2746,
      "brandId": 400,
      "name": "DEUTZ-FAHR 5125 4WD KABIN"
  },
  {
      "id": 2747,
      "brandId": 400,
      "name": "DEUTZ-FAHR 3055E 4WD"
  },
  {
      "id": 2748,
      "brandId": 400,
      "name": "DEUTZ-FAHR 3060E"
  },
  {
      "id": 2749,
      "brandId": 400,
      "name": "DEUTZ-FAHR 3060E 4WD"
  },
  {
      "id": 2751,
      "brandId": 400,
      "name": "DEUTZ-FAHR AGROFARM 410 T ECOLINE"
  },
  {
      "id": 2752,
      "brandId": 400,
      "name": "DEUTZ-FAHR AGROFARM 410 T ECOLINE KABINLI"
  },
  {
      "id": 2753,
      "brandId": 400,
      "name": "DEUTZ-FAHR AGROFARM 420 T ECOLINE"
  },
  {
      "id": 2754,
      "brandId": 400,
      "name": "DEUTZ-FAHR AGROFARM 420 T ECOLINE KABINLI"
  },
  {
      "id": 2755,
      "brandId": 400,
      "name": "DEUTZ-FAHR AGROLUX 55"
  },
  {
      "id": 2756,
      "brandId": 400,
      "name": "DEUTZ-FAHR AGROLUX 55 KABINLI"
  },
  {
      "id": 2757,
      "brandId": 400,
      "name": "DEUTZ-FAHR AGROFARM 410 DT KABINLI"
  },
  {
      "id": 2758,
      "brandId": 400,
      "name": "DEUTZ-FAHR AGROFARM 430 DT KABINLI"
  },
  {
      "id": 2759,
      "brandId": 400,
      "name": "DEUTZ-FAHR AGROFARM 430 PL DT"
  },
  {
      "id": 2760,
      "brandId": 400,
      "name": "DEUTZ-FAHR AGROTRAC 610 DT"
  },
  {
      "id": 2761,
      "brandId": 400,
      "name": "DEUTZ-FAHR AGROTRAC 620 DT"
  },
  {
      "id": 2762,
      "brandId": 400,
      "name": "DEUTZ-FAHR AGROTRON L 720 DCR"
  },
  {
      "id": 2763,
      "brandId": 400,
      "name": "DEUTZ-FAHR AGROLUX 55 4WD"
  },
  {
      "id": 2764,
      "brandId": 400,
      "name": "DEUTZ-FAHR AGROLUX 55 4WD KABINLI"
  },
  {
      "id": 2765,
      "brandId": 400,
      "name": "DEUTZ-FAHR AGROLUX 65 KABINLI"
  },
  {
      "id": 2766,
      "brandId": 400,
      "name": "DEUTZ-FAHR AGROLUX 65 4WD KABINLI"
  },
  {
      "id": 2767,
      "brandId": 400,
      "name": "DEUTZ FAHR AGROLUX 75 DT KABINLI"
  },
  {
      "id": 2768,
      "brandId": 400,
      "name": "DEUTZ-FAHR AGROLUX 310 4WD KABINLI"
  },
  {
      "id": 2769,
      "brandId": 400,
      "name": "DEUTZ-FAHR AGROLUX 320 DT KABINLI"
  },
  {
      "id": 2770,
      "brandId": 400,
      "name": "DEUTZ-FAHR  AGROLUX 410 DT"
  },
  {
      "id": 2771,
      "brandId": 400,
      "name": "DEUTZ-FAHR AGROLUX 410 4WD KABINLI"
  },
  {
      "id": 2772,
      "brandId": 400,
      "name": "DEUTZ-FAHR AGROFARM 410 DT ECOLINE"
  },
  {
      "id": 2773,
      "brandId": 400,
      "name": "DEUTZ-FAHR 410 DT ECOLINE KABINLI"
  },
  {
      "id": 2774,
      "brandId": 400,
      "name": "DEUTZ-FAHR AGROFARM 420 DT ECOLINE"
  },
  {
      "id": 2775,
      "brandId": 400,
      "name": "DEUTZ-FAHR AGROFARM 420 DT ECOLINE KABINLI"
  },
  {
      "id": 2776,
      "brandId": 400,
      "name": "DEUTZ-FAHR AGROFARM 410 DT LUX"
  },
  {
      "id": 2777,
      "brandId": 400,
      "name": "DEUTZ-FAHR AGROFARM 420 DT LUX"
  },
  {
      "id": 2778,
      "brandId": 400,
      "name": "DEUTZ-FAHR AGROFARM 430 DT LUX"
  },
  {
      "id": 2781,
      "brandId": 400,
      "name": "DEUTZ-FAHR AGROTRON 7250 TTV"
  },
  {
      "id": 2782,
      "brandId": 400,
      "name": "DEUTZ-FAHR AGROTRON 6190 TTV"
  },
  {
      "id": 2783,
      "brandId": 400,
      "name": "DEUTZ-FAHR AGROPLUS F 55 KEYLINE"
  },
  {
      "id": 2784,
      "brandId": 400,
      "name": "DEUTZ-FAHR AGROPLUS F 55 KEYLINE 4WD"
  },
  {
      "id": 2785,
      "brandId": 400,
      "name": "DEUTZ-FAHR AGROPLUS F 65 KEYLINE"
  },
  {
      "id": 2786,
      "brandId": 400,
      "name": "DEUTZ-FAHR AGROPLUS F 65 KEYLINE 4WD"
  },
  {
      "id": 2787,
      "brandId": 400,
      "name": "DEUTZ-FAHR 5110 C DT GS"
  },
  {
      "id": 2788,
      "brandId": 400,
      "name": "DEUTZ-FAHR 5120 C DT GS"
  },
  {
      "id": 2789,
      "brandId": 400,
      "name": "DEUTZ-FAHR AGROTRON 6140.4"
  },
  {
      "id": 2790,
      "brandId": 400,
      "name": "DEUTZ-FAHR AGROTRON 6160"
  },
  {
      "id": 2791,
      "brandId": 400,
      "name": "DEUTZ-FAHR AGROPLUS F 75 KEYLINE"
  },
  {
      "id": 2792,
      "brandId": 400,
      "name": "DEUTZ-FAHR AGROPLUS F75 KEYLINE 4WD"
  },
  {
      "id": 2793,
      "brandId": 400,
      "name": "DEUTZ-FAHR AGROPLUS 315 DT"
  },
  {
      "id": 2794,
      "brandId": 400,
      "name": "DEUTZ-FAHR AGROPLUS 410 DT"
  },
  {
      "id": 2795,
      "brandId": 400,
      "name": "DEUTZ-FAHR AGROPLUS 315 GS DT"
  },
  {
      "id": 2796,
      "brandId": 400,
      "name": "DEUTZ-FAHR AGROPLUS 410 GS DT"
  },
  {
      "id": 2797,
      "brandId": 400,
      "name": "DEUTZ-FAHR 5115.4 G DT LS"
  },
  {
      "id": 2798,
      "brandId": 400,
      "name": "DEUTZ-FAHR 3045 E"
  },
  {
      "id": 2799,
      "brandId": 400,
      "name": "DEUTZ-FAHR AGROLUX 55 ECO"
  },
  {
      "id": 2800,
      "brandId": 400,
      "name": "DEUTZ-FAHR AGROLUX 55 4WD ECO"
  },
  {
      "id": 2801,
      "brandId": 400,
      "name": "DEUTZ-FAHR AGROTRON 6160 TTV"
  },
  {
      "id": 2802,
      "brandId": 400,
      "name": "DEUTZ-FAHR AGROTRON 9340 TTV"
  },
  {
      "id": 2803,
      "brandId": 400,
      "name": "DEUTZ-FAHR AGROFARM 420T ECOLINE DT"
  },
  {
      "id": 2805,
      "brandId": 400,
      "name": "DEUTZ-FAHR AGROPLUS F 55 KEYLINE (15+15)"
  },
  {
      "id": 2806,
      "brandId": 400,
      "name": "DEUTZ-FAHR AGROPLUS F 55 KEYLINE 4WD (15+15)"
  },
  {
      "id": 2807,
      "brandId": 400,
      "name": "DEUTZ-FAHR AGROPLUS F 65 KEYLINE (15+15)"
  },
  {
      "id": 2808,
      "brandId": 400,
      "name": "DEUTZ-FAHR AGROPLUS F 65 4WD (15+15)"
  },
  {
      "id": 2809,
      "brandId": 400,
      "name": "DEUTZ-FAHR AGROPLUS F 75 KEYLINE (15+15)"
  },
  {
      "id": 2810,
      "brandId": 400,
      "name": "DEUTZ-FAHR AGROPLUS F 75 KEYLINE 4WD (15+15)"
  },
  {
      "id": 2811,
      "brandId": 400,
      "name": "DEUTZ FAHR 5090 G DT LS"
  },
  {
      "id": 2812,
      "brandId": 400,
      "name": "DEUTZ FAHR 5100 G DT LS"
  },
  {
      "id": 2813,
      "brandId": 400,
      "name": "DEUTZ FAHR 5110G DT LS"
  },
  {
      "id": 2814,
      "brandId": 400,
      "name": "DEUTZ-FAHR 4050E"
  },
  {
      "id": 2815,
      "brandId": 400,
      "name": "DEUTZ-FAHR 4050E KABIN"
  },
  {
      "id": 2816,
      "brandId": 400,
      "name": "DEUTZ-FAHR 4050E 4WD"
  },
  {
      "id": 2817,
      "brandId": 400,
      "name": "DEUTZ-FAHR 4050E 4WD KABIN"
  },
  {
      "id": 2818,
      "brandId": 400,
      "name": "DEUTZ-FAHR 4055E"
  },
  {
      "id": 2819,
      "brandId": 400,
      "name": "DEUTZ-FAHR 4055E KABIN"
  },
  {
      "id": 2820,
      "brandId": 400,
      "name": "DEUTZ-FAHR 4055E 4WD"
  },
  {
      "id": 2821,
      "brandId": 400,
      "name": "DEUTZ-FAHR 4055E 4WD KABIN"
  },
  {
      "id": 2822,
      "brandId": 400,
      "name": "DEUTZ-FAHR 4065E"
  },
  {
      "id": 2823,
      "brandId": 400,
      "name": "DEUTZ-FAHR 4065E KABIN"
  },
  {
      "id": 2824,
      "brandId": 400,
      "name": "DEUTZ-FAHR 4065E 4WD"
  },
  {
      "id": 2825,
      "brandId": 400,
      "name": "DEUTZ-FAHR 4065E 4WD KABIN"
  },
  {
      "id": 2826,
      "brandId": 400,
      "name": "DEUTZ-FAHR 4075E"
  },
  {
      "id": 2827,
      "brandId": 400,
      "name": "DEUTZ-FAHR 4075E KABIN"
  },
  {
      "id": 2828,
      "brandId": 400,
      "name": "DEUTZ-FAHR 4075E 4WD"
  },
  {
      "id": 2829,
      "brandId": 400,
      "name": "DEUTZ-FAHR 4075E 4WD KABIN"
  },
  {
      "id": 2830,
      "brandId": 400,
      "name": "DEUTZ-FAHR 4080E"
  },
  {
      "id": 2831,
      "brandId": 400,
      "name": "DEUTZ-FAHR 4080E KABIN"
  },
  {
      "id": 2832,
      "brandId": 400,
      "name": "DEUTZ-FAHR 4080E 4WD"
  },
  {
      "id": 2833,
      "brandId": 400,
      "name": "DEUTZ-FAHR 4080E 4WD KABIN"
  },
  {
      "id": 2834,
      "brandId": 400,
      "name": "DEUTZ-FAHR AGROTRON 6185 TTV"
  },
  {
      "id": 2835,
      "brandId": 400,
      "name": "DEUTZ-FAHR 6185 TTV PTO E4"
  },
  {
      "id": 2836,
      "brandId": 400,
      "name": "DEUTZ-FAHR AGROTRON 7250 TTV E4"
  },
  {
      "id": 2837,
      "brandId": 400,
      "name": "DEUTZ-FAHR AGROTRON 7250 TTV PTO"
  },
  {
      "id": 2838,
      "brandId": 400,
      "name": "DEUTZ-FAHR 6130 E4"
  },
  {
      "id": 2839,
      "brandId": 400,
      "name": "DEUTZ-FAHR 6140 E4"
  },
  {
      "id": 2840,
      "brandId": 400,
      "name": "DEUTZ-FAHR AGROTRON 6155"
  },
  {
      "id": 2841,
      "brandId": 400,
      "name": "DEUTZ-FAHR AGROTRON 6155 PTO"
  },
  {
      "id": 2842,
      "brandId": 400,
      "name": "DEUTZ-FAHR 4090E 4WD"
  },
  {
      "id": 2843,
      "brandId": 400,
      "name": "DEUTZ-FAHR 4090E 4WD KABIN"
  },
  {
      "id": 2844,
      "brandId": 400,
      "name": "DEUTZ-FAHR 4100E 4WD"
  },
  {
      "id": 2845,
      "brandId": 400,
      "name": "DEUTZ-FAHR 4100E 4WD KABIN"
  },
  {
      "id": 2846,
      "brandId": 400,
      "name": "DEUTZ-FAHR 3046E"
  },
  {
      "id": 2847,
      "brandId": 400,
      "name": "DEUTZ-FAHR 3046E 4WD"
  },
  {
      "id": 2848,
      "brandId": 400,
      "name": "DEUTZ-FAHR 3050E"
  },
  {
      "id": 2849,
      "brandId": 400,
      "name": "DEUTZ-FAHR 3050E 4WD"
  },
  {
      "id": 2850,
      "brandId": 400,
      "name": "DEUTZ-FAHR 3055E"
  },
  {
      "id": 2851,
      "brandId": 400,
      "name": "LS P70"
  },
  {
      "id": 2852,
      "brandId": 400,
      "name": "LS P80"
  },
  {
      "id": 2853,
      "brandId": 400,
      "name": "LS P90"
  },
  {
      "id": 2854,
      "brandId": 400,
      "name": "LS P100 C"
  },
  {
      "id": 2855,
      "brandId": 400,
      "name": "LS ULTRA55"
  },
  {
      "id": 2856,
      "brandId": 400,
      "name": "LS ULTRA55 C"
  },
  {
      "id": 2857,
      "brandId": 400,
      "name": "LS ULTRA65"
  },
  {
      "id": 2858,
      "brandId": 400,
      "name": "LS ULTRA65 C"
  },
  {
      "id": 2859,
      "brandId": 400,
      "name": "LS TR5060 4WD"
  },
  {
      "id": 3001,
      "brandId": 400,
      "name": "KIOTI CK 35 H"
  },
  {
      "id": 3002,
      "brandId": 400,
      "name": "KIOTI RX 6010 C"
  },
  {
      "id": 3003,
      "brandId": 400,
      "name": "KIOTI DK 904 C"
  },
  {
      "id": 3004,
      "brandId": 400,
      "name": "KIOTI MEC 2210"
  },
  {
      "id": 3005,
      "brandId": 400,
      "name": "KIOTI RX 6620 C"
  },
  {
      "id": 3006,
      "brandId": 400,
      "name": "KIOTI RX 7320 C"
  },
  {
      "id": 3007,
      "brandId": 400,
      "name": "KIOTI LX 500 L TURBOLU"
  },
  {
      "id": 3008,
      "brandId": 400,
      "name": "KIOTI RX 6620"
  },
  {
      "id": 3009,
      "brandId": 400,
      "name": "KIOTI RX 7320"
  },
  {
      "id": 3010,
      "brandId": 400,
      "name": "KIOTI CK 2810 R"
  },
  {
      "id": 3011,
      "brandId": 400,
      "name": "KIOTI DK 5010N R"
  },
  {
      "id": 3012,
      "brandId": 400,
      "name": "KIOTI 5010 R"
  },
  {
      "id": 3013,
      "brandId": 400,
      "name": "KIOTI DK 5510N R"
  },
  {
      "id": 3014,
      "brandId": 400,
      "name": "KIOTI DK 5510 R"
  },
  {
      "id": 3151,
      "brandId": 400,
      "name": "ERKUNT 55 M"
  },
  {
      "id": 3152,
      "brandId": 400,
      "name": "ERKUNT 55 M 4WD"
  },
  {
      "id": 3153,
      "brandId": 400,
      "name": "ERKUNT MIMET 70 M"
  },
  {
      "id": 3154,
      "brandId": 400,
      "name": "ERKUNT NIMET 70 M 4WD"
  },
  {
      "id": 3155,
      "brandId": 400,
      "name": "ERKUNT SERVET 80.3 M"
  },
  {
      "id": 3156,
      "brandId": 400,
      "name": "ERKUNT SERVET 80.3 M 4WD"
  },
  {
      "id": 3157,
      "brandId": 400,
      "name": "ERKUNT SERVET 80.4 M"
  },
  {
      "id": 3158,
      "brandId": 400,
      "name": "ERKUNT SERVET 80.4 M 4WD"
  },
  {
      "id": 3159,
      "brandId": 400,
      "name": "ERKUNT BEREKET 60 E"
  },
  {
      "id": 3160,
      "brandId": 400,
      "name": "ERKUNT BEREKET 60 E KABINLI"
  },
  {
      "id": 3161,
      "brandId": 400,
      "name": "ERKUNT BEREKET 60 E 4WD"
  },
  {
      "id": 3162,
      "brandId": 400,
      "name": "ERKUNT BEREKET 60 E 4WD KABINLI"
  },
  {
      "id": 3163,
      "brandId": 400,
      "name": "ERKUNT NIMET 70 E"
  },
  {
      "id": 3164,
      "brandId": 400,
      "name": "ERKUNT NIMET 70 E KABINLI"
  },
  {
      "id": 3165,
      "brandId": 400,
      "name": "ERKUNT NIMET 70 E 4WD"
  },
  {
      "id": 3166,
      "brandId": 400,
      "name": "ERKUNT NIMET 70 E 4WD KABINLI"
  },
  {
      "id": 3167,
      "brandId": 400,
      "name": "ERKUNT SERVET 80.3 E 4WD"
  },
  {
      "id": 3168,
      "brandId": 400,
      "name": "ERKUNT SERVET 80.3 E 4WD KABINLI"
  },
  {
      "id": 3169,
      "brandId": 400,
      "name": "ERKUNT SERVET 80.4 E 4WD"
  },
  {
      "id": 3170,
      "brandId": 400,
      "name": "ERKUNT SERVET 80.4 E 4WD KABINLI"
  },
  {
      "id": 3171,
      "brandId": 400,
      "name": "ERKUNT NIMET 70 S"
  },
  {
      "id": 3172,
      "brandId": 400,
      "name": "ERKUNT NIMET 70 S KABINLI"
  },
  {
      "id": 3173,
      "brandId": 400,
      "name": "ERKUNT NIMET70 S 4WD"
  },
  {
      "id": 3174,
      "brandId": 400,
      "name": "ERKUNT NIMET 70 S 4WD KABINLI"
  },
  {
      "id": 3175,
      "brandId": 400,
      "name": "ERKUNT SERVET 80.3 S 4WD"
  },
  {
      "id": 3176,
      "brandId": 400,
      "name": "ERKUNT SERVET 80.3 S 4WD KABINLI"
  },
  {
      "id": 3177,
      "brandId": 400,
      "name": "ERKUNT BEREKET 60 LUKS"
  },
  {
      "id": 3178,
      "brandId": 400,
      "name": "ERKUNT BEREKET 60 LUKS KABINLI"
  },
  {
      "id": 3179,
      "brandId": 400,
      "name": "ERKUNT BEREKET 60  LUKS 4WD"
  },
  {
      "id": 3180,
      "brandId": 400,
      "name": "ERKUNT BEREKET 60 LUKS 4WD KABINLI"
  },
  {
      "id": 3181,
      "brandId": 400,
      "name": "ERKUNT NIMET 70 LUKS"
  },
  {
      "id": 3182,
      "brandId": 400,
      "name": "ERKUNT NIMET 70 LUKS KABINLI"
  },
  {
      "id": 3183,
      "brandId": 400,
      "name": "ERKUNT NIMET 70 LUKS 4WD"
  },
  {
      "id": 3184,
      "brandId": 400,
      "name": "ERKUNT NIMET 70 LUKS 4WD KABINLI"
  },
  {
      "id": 3185,
      "brandId": 400,
      "name": "ERKUNT SERVET 80.3 LUKS 4WD"
  },
  {
      "id": 3186,
      "brandId": 400,
      "name": "ERKUNT SERVET 80.3 LUKS 4WD KABINLI"
  },
  {
      "id": 3188,
      "brandId": 400,
      "name": "ERKUNT SERVET 80.4 LUKS 4WD"
  },
  {
      "id": 3189,
      "brandId": 400,
      "name": "ERKUNT SERVET 80.4 LUKS 4WD KABINLI"
  },
  {
      "id": 3190,
      "brandId": 400,
      "name": "ERKUNT KIYMET 90 LUKS 4WD"
  },
  {
      "id": 3191,
      "brandId": 400,
      "name": "ERKUNT KIYMET 90 LUKS 4WD KABINLI"
  },
  {
      "id": 3192,
      "brandId": 400,
      "name": "ERKUNT KUDRET 100 LUKS 4WD"
  },
  {
      "id": 3193,
      "brandId": 400,
      "name": "ERKUNT KUDRET 100 LUKS 4WD KABINLI"
  },
  {
      "id": 3194,
      "brandId": 400,
      "name": "ERKUNT HASMET 110 LUKS 4WD KABINLI"
  },
  {
      "id": 3195,
      "brandId": 400,
      "name": "ERKUNT KIYMET 90E 4WD"
  },
  {
      "id": 3196,
      "brandId": 400,
      "name": "ERKUNT KIYMET 90E 4WD KABINLI"
  },
  {
      "id": 3197,
      "brandId": 400,
      "name": "ERKUNT KIYMET 90E+ 4WD"
  },
  {
      "id": 3198,
      "brandId": 400,
      "name": "ERKUNT KIYMET 90E+ 4WD KABINLI"
  },
  {
      "id": 3199,
      "brandId": 400,
      "name": "ERKUNT BEREKET 65 LUKS"
  },
  {
      "id": 3200,
      "brandId": 400,
      "name": "ERKUNT BEREKET 65 LUKS KABINLI"
  },
  {
      "id": 3201,
      "brandId": 400,
      "name": "ERKUNT BEREKET 65 LUKS 4WD"
  },
  {
      "id": 3202,
      "brandId": 400,
      "name": "ERKUNT BEREKET 65 LUKS 4WD KABINLI"
  },
  {
      "id": 3203,
      "brandId": 400,
      "name": "ERKUNT BEREKET 65E"
  },
  {
      "id": 3204,
      "brandId": 400,
      "name": "ERKUNT BEREKET 65E KABINLI"
  },
  {
      "id": 3205,
      "brandId": 400,
      "name": "ERKUNT BEREKET 65E 4WD"
  },
  {
      "id": 3206,
      "brandId": 400,
      "name": "ERKUNT BEREKET 65E 4WD KABINLI"
  },
  {
      "id": 3207,
      "brandId": 400,
      "name": "ERKUNT KISMET 58E"
  },
  {
      "id": 3208,
      "brandId": 400,
      "name": "ERKUNT KISMET 58E 4WD"
  },
  {
      "id": 3209,
      "brandId": 400,
      "name": "ERKUNT SERVET 80.4 S 4WD"
  },
  {
      "id": 3210,
      "brandId": 400,
      "name": "ERKUNT SERVET 80.4 S 4WD KABINLI"
  },
  {
      "id": 3211,
      "brandId": 400,
      "name": "ERKUNT BEREKET 65M"
  },
  {
      "id": 3212,
      "brandId": 400,
      "name": "ERKUNT BEREKET 65 M 4WD"
  },
  {
      "id": 3213,
      "brandId": 400,
      "name": "ERKUNT KISMET 55 2WD PLATFORMLU"
  },
  {
      "id": 3214,
      "brandId": 400,
      "name": "ERKUNT KISMET 55 4WD PLATFORMLU"
  },
  {
      "id": 3215,
      "brandId": 400,
      "name": "ERKUNT KISMET 58E 2WD KABINLI"
  },
  {
      "id": 3216,
      "brandId": 400,
      "name": "ERKUNT KISMET 58E 4WD KABINLI"
  },
  {
      "id": 3217,
      "brandId": 400,
      "name": "ERKUNT NIMET 70 E+ 4WD PLATFORMLU"
  },
  {
      "id": 3218,
      "brandId": 400,
      "name": "ERKUNT NIMET 70E+ 4WD KABINLI"
  },
  {
      "id": 3219,
      "brandId": 400,
      "name": "ERKUNT SERVET 80.3 E+ 4WD PLATFORMLU"
  },
  {
      "id": 3220,
      "brandId": 400,
      "name": "ERKUNT SERVET 80.3 E+ 4WD KABINLI"
  },
  {
      "id": 3221,
      "brandId": 400,
      "name": "ERKUNT SERVET 80.4 E+ 4WD PLATFORMLU"
  },
  {
      "id": 3222,
      "brandId": 400,
      "name": "ERKUNT SERVET 80.4+ E4WD KABINLI"
  },
  {
      "id": 3223,
      "brandId": 400,
      "name": "ERKUNT KUDRET 105 E 4WD KABINLI"
  },
  {
      "id": 3224,
      "brandId": 400,
      "name": "ERKUNT KUDRET 105 E+ 4WD PLATFORMLU"
  },
  {
      "id": 3225,
      "brandId": 400,
      "name": "ERKUNT KUDRET 105 E+ 4WD KABINLI"
  },
  {
      "id": 3226,
      "brandId": 400,
      "name": "ERKUNT KIYMET 90 4WD KABINLI LUKS 3B"
  },
  {
      "id": 3227,
      "brandId": 400,
      "name": "ERKUNT KUDRET 100 4WD KABINLI LUKS CRD"
  },
  {
      "id": 3228,
      "brandId": 400,
      "name": "ERKUNT HASMET 110 4WD KABINLI LUKS CRD"
  },
  {
      "id": 3229,
      "brandId": 400,
      "name": "ERKUNT SERVET 85.4 E 4WD"
  },
  {
      "id": 3230,
      "brandId": 400,
      "name": "ERKUNT SERVET 85.4 E 4WD KABINLI"
  },
  {
      "id": 3231,
      "brandId": 400,
      "name": "ERKUNT SERVET 85.4 E+ 4WD"
  },
  {
      "id": 3232,
      "brandId": 400,
      "name": "ERKUNT SERVET 85.4 E+ 4WD KABINLI"
  },
  {
      "id": 3233,
      "brandId": 400,
      "name": "ERKUNT KISMET 55E"
  },
  {
      "id": 3234,
      "brandId": 400,
      "name": "ERKUNT KISMET 55E KABINLI"
  },
  {
      "id": 3235,
      "brandId": 400,
      "name": "ERKUNT KISMET 55E 4WD"
  },
  {
      "id": 3236,
      "brandId": 400,
      "name": "ERKUNT KISMET 55E 4WD KABINLI"
  },
  {
      "id": 3237,
      "brandId": 400,
      "name": "ERKUNT BEREKET 65E+ 4WD"
  },
  {
      "id": 3238,
      "brandId": 400,
      "name": "ERKUNT BEREKET 65E+ 4WD KABINLI"
  },
  {
      "id": 3239,
      "brandId": 400,
      "name": "ERKUNT SERVET 85E+ 4WD"
  },
  {
      "id": 3240,
      "brandId": 400,
      "name": "ERKUNT SERVET 85E+ 4WD KABINLI"
  },
  {
      "id": 3241,
      "brandId": 400,
      "name": "ERKUNT SERVET 85 LUKS 4WD"
  },
  {
      "id": 3242,
      "brandId": 400,
      "name": "ERKUNT SERVET 85 LUKS 4WD KABINLI"
  },
  {
      "id": 3243,
      "brandId": 400,
      "name": "ERKUNT KISMET 50E B"
  },
  {
      "id": 3244,
      "brandId": 400,
      "name": "ERKUNT KISMET 50E B 4WD"
  },
  {
      "id": 3245,
      "brandId": 400,
      "name": "ERKUNT KISMET 55E B"
  },
  {
      "id": 3246,
      "brandId": 400,
      "name": "ERKUNT KISMET 55E B 4WD"
  },
  {
      "id": 3247,
      "brandId": 400,
      "name": "ERKUNT KISMET 50E T"
  },
  {
      "id": 3248,
      "brandId": 400,
      "name": "ERKUNT KISMET 50E T 4WD"
  },
  {
      "id": 3249,
      "brandId": 400,
      "name": "ERKUNT KISMET 55E T"
  },
  {
      "id": 3250,
      "brandId": 400,
      "name": "ERKUNT KISMET 55E T 4WD"
  },
  {
      "id": 3251,
      "brandId": 400,
      "name": "ERKUNT BEREKET 65 M 4WD KABINLI"
  },
  {
      "id": 3252,
      "brandId": 400,
      "name": "ERKUNT NIMET 70 M 4WD KABINLI"
  },
  {
      "id": 3253,
      "brandId": 400,
      "name": "ERKUNT SERVET 80.3 M 4WD KABINLI"
  },
  {
      "id": 3254,
      "brandId": 400,
      "name": "ERKUNT SERVET 80.4 M 4WD KABINLI"
  },
  {
      "id": 3255,
      "brandId": 400,
      "name": "ERKUNT NIMET 75E 4WD PLATFORMLU"
  },
  {
      "id": 3256,
      "brandId": 400,
      "name": "ERKUNT NIMET 75E 4WD KABINLI"
  },
  {
      "id": 3257,
      "brandId": 400,
      "name": "ERKUNT NIMET 75+ 4WD PLATFORMLU"
  },
  {
      "id": 3258,
      "brandId": 400,
      "name": "ERKUNT NIMET 75+ 4WD KABINLI"
  },
  {
      "id": 3259,
      "brandId": 400,
      "name": "ERKUNT NIMET 75 LUKS 4WD PLATFORMLU"
  },
  {
      "id": 3260,
      "brandId": 400,
      "name": "ERKUNT NIMET 75 LUKS 4WD KABINLI"
  },
  {
      "id": 3261,
      "brandId": 400,
      "name": "ERKUNT KIYMET 95 M LUKS 4WD"
  },
  {
      "id": 3262,
      "brandId": 400,
      "name": "ERKUNT HASRET 125 LUKS CRD4 4WD KABINLI"
  },
  {
      "id": 3263,
      "brandId": 400,
      "name": "ERKUNT KUVVET 130 LUKS CRD4 4WD KABINLI PS"
  },
  {
      "id": 3351,
      "brandId": 400,
      "name": "TARAL 818"
  },
  {
      "id": 3352,
      "brandId": 400,
      "name": "TARAL 855"
  },
  {
      "id": 3353,
      "brandId": 400,
      "name": "TARAL T 850.032 EU RHD"
  },
  {
      "id": 3354,
      "brandId": 400,
      "name": "TARAL T 855.032 EU RHD"
  },
  {
      "id": 3355,
      "brandId": 400,
      "name": "TARAL T 856.032"
  },
  {
      "id": 3356,
      "brandId": 400,
      "name": "TARAL T 860.038 EU RHD"
  },
  {
      "id": 3357,
      "brandId": 400,
      "name": "TARAL VST 818"
  },
  {
      "id": 3401,
      "brandId": 400,
      "name": "AGRIA 966"
  },
  {
      "id": 3451,
      "brandId": 400,
      "name": "JOHN DEERE JD 5050E"
  },
  {
      "id": 3452,
      "brandId": 400,
      "name": "JOHN DEERE JD 5050E 4WD"
  },
  {
      "id": 3453,
      "brandId": 400,
      "name": "JOHN DEERE JD 5093E 4WD"
  },
  {
      "id": 3454,
      "brandId": 400,
      "name": "JOHN DEERE JD 5093E 4WD KABINLI"
  },
  {
      "id": 3455,
      "brandId": 400,
      "name": "JOHN DEERE JD 5080GF 4WD"
  },
  {
      "id": 3456,
      "brandId": 400,
      "name": "JOHN DEERE JD 5090GF 4WD"
  },
  {
      "id": 3457,
      "brandId": 400,
      "name": "JOHN DEERE JD 5100GF 4WD"
  },
  {
      "id": 3458,
      "brandId": 400,
      "name": "JOHN DEERE JD MILENIO 85F 4WD"
  },
  {
      "id": 3459,
      "brandId": 400,
      "name": "JOHN DEERE JD 5080R MFWD"
  },
  {
      "id": 3460,
      "brandId": 400,
      "name": "JOHN DEERE 5090R MFWD"
  },
  {
      "id": 3461,
      "brandId": 400,
      "name": "JOHN DEERE JD 5100R MFWD"
  },
  {
      "id": 3465,
      "brandId": 400,
      "name": "JOHN DEERE JD 6534 MFWD"
  },
  {
      "id": 3466,
      "brandId": 400,
      "name": "JOHN DEERE JD 6115R"
  },
  {
      "id": 3468,
      "brandId": 400,
      "name": "JOHN DEERE JD 6125R"
  },
  {
      "id": 3469,
      "brandId": 400,
      "name": "JOHN DEERE JD 6130R"
  },
  {
      "id": 3470,
      "brandId": 400,
      "name": "JOHN DEERE JD 6140R"
  },
  {
      "id": 3471,
      "brandId": 400,
      "name": "JOHN DEERE JD 6150R"
  },
  {
      "id": 3472,
      "brandId": 400,
      "name": "JOHN DEERE JD 6170R"
  },
  {
      "id": 3473,
      "brandId": 400,
      "name": "JOHN DEERE JD 6190R"
  },
  {
      "id": 3474,
      "brandId": 400,
      "name": "JOHN DEERE JD 6210R"
  },
  {
      "id": 3475,
      "brandId": 400,
      "name": "JOHN DEERE JD 7215R"
  },
  {
      "id": 3476,
      "brandId": 400,
      "name": "JOHN DEERE JD 7230R"
  },
  {
      "id": 3477,
      "brandId": 400,
      "name": "JOHN DEERE JD 7260R"
  },
  {
      "id": 3478,
      "brandId": 400,
      "name": "JOHN DEERE JD 7280R"
  },
  {
      "id": 3479,
      "brandId": 400,
      "name": "JOHN DEERE JD 8285R"
  },
  {
      "id": 3480,
      "brandId": 400,
      "name": "JOHN DEERE JD 8310R"
  },
  {
      "id": 3481,
      "brandId": 400,
      "name": "JOHN DEERE JD 8335R"
  },
  {
      "id": 3482,
      "brandId": 400,
      "name": "JOHN DEERE JD 8360R"
  },
  {
      "id": 3483,
      "brandId": 400,
      "name": "JOHN DEERE JD 6100D MFWD"
  },
  {
      "id": 3484,
      "brandId": 400,
      "name": "JOHN DEERE JD 6115D MFWD"
  },
  {
      "id": 3485,
      "brandId": 400,
      "name": "JOHN DEERE JD 6130D MFWD"
  },
  {
      "id": 3486,
      "brandId": 400,
      "name": "JOHN DEERE JD 6230 PREMIUM MFWD"
  },
  {
      "id": 3487,
      "brandId": 400,
      "name": "JOHN DEERE JD 6330 PREMIUM MFWD"
  },
  {
      "id": 3488,
      "brandId": 400,
      "name": "JOHN DEERE JD 6430 PREMIUM MFWD"
  },
  {
      "id": 3489,
      "brandId": 400,
      "name": "JOHN DEERE JD 6630 PREMIUM MFWD"
  },
  {
      "id": 3490,
      "brandId": 400,
      "name": "JOHN DEERE JD 6115 M"
  },
  {
      "id": 3491,
      "brandId": 400,
      "name": "JOHN DEERE JD 6125M"
  },
  {
      "id": 3492,
      "brandId": 400,
      "name": "JOHN DEERE JD 6130M"
  },
  {
      "id": 3493,
      "brandId": 400,
      "name": "JOHN DEERE JD 6140M"
  },
  {
      "id": 3494,
      "brandId": 400,
      "name": "JOHN DEERE JD 6150M"
  },
  {
      "id": 3495,
      "brandId": 400,
      "name": "JOHN DEERE JD 6170M"
  },
  {
      "id": 3496,
      "brandId": 400,
      "name": "JOHN DEERE JD 6105R"
  },
  {
      "id": 3497,
      "brandId": 400,
      "name": "JOHN DEERE JD 8260R ILS"
  },
  {
      "id": 3498,
      "brandId": 400,
      "name": "JOHN DEERE JD 5055E 4WD KABINLI"
  },
  {
      "id": 3499,
      "brandId": 400,
      "name": "JOHN DEERE JD 5065E 4WD KABINLI"
  },
  {
      "id": 3500,
      "brandId": 400,
      "name": "JOHN DEERE JD 5075E 4WD KABINLI"
  },
  {
      "id": 3501,
      "brandId": 400,
      "name": "JOHN DEERE 5085M 4WD IOOS"
  },
  {
      "id": 3502,
      "brandId": 400,
      "name": "JOHN DEERE 5095M 4WD IOOS"
  },
  {
      "id": 3503,
      "brandId": 400,
      "name": "JOHN DEERE 5105M 4WD IOSS"
  },
  {
      "id": 3504,
      "brandId": 400,
      "name": "JOHN DEERE 5075GL 4WD"
  },
  {
      "id": 3505,
      "brandId": 400,
      "name": "JOHN DEERE 5085GL 4WD"
  },
  {
      "id": 3506,
      "brandId": 400,
      "name": "JOHN DEERE 5625 KABINLI"
  },
  {
      "id": 3507,
      "brandId": 400,
      "name": "JOHN DEERE 5625 4WD KABINLI"
  },
  {
      "id": 3508,
      "brandId": 400,
      "name": "JOHN DEERE 5725 KABINLI"
  },
  {
      "id": 3509,
      "brandId": 400,
      "name": "JOHN DEERE 5725 4WD KABINLI"
  },
  {
      "id": 3510,
      "brandId": 400,
      "name": "JOHN DEERE JD 6100 RC 4WD KABINLI"
  },
  {
      "id": 3511,
      "brandId": 400,
      "name": "JOHN DEERE 6195R"
  },
  {
      "id": 3512,
      "brandId": 400,
      "name": "JOHN DEERE 6175R"
  },
  {
      "id": 3513,
      "brandId": 400,
      "name": "JOHN DEERE 6100 RC"
  },
  {
      "id": 3514,
      "brandId": 400,
      "name": "JOHN DEERE 5050E 12x12"
  },
  {
      "id": 3515,
      "brandId": 400,
      "name": "JOHN DEERE 5050E 4WD 12x12"
  },
  {
      "id": 3516,
      "brandId": 400,
      "name": "JOHN DEERE 5055E 12x12"
  },
  {
      "id": 3517,
      "brandId": 400,
      "name": "JOHN DEERE 5055E 4WD 12x12"
  },
  {
      "id": 3518,
      "brandId": 400,
      "name": "JOHN DEERE 5065E 12x12"
  },
  {
      "id": 3519,
      "brandId": 400,
      "name": "JOHN DEERE 5065E 4WD 12x12"
  },
  {
      "id": 3520,
      "brandId": 400,
      "name": "JOHN DEERE 5075E 12x12"
  },
  {
      "id": 3521,
      "brandId": 400,
      "name": "JOHN DEERE 5075E 4WD 12x12"
  },
  {
      "id": 3522,
      "brandId": 400,
      "name": "JOHN DEERE 5055E 4WD 12x12 KABINLI"
  },
  {
      "id": 3523,
      "brandId": 400,
      "name": "JOHN DEERE 5065E4WD 12x12 KABINLI"
  },
  {
      "id": 3524,
      "brandId": 400,
      "name": "JOHN DEERE 5075E 4WD 12x12 KABINLI HVAC"
  },
  {
      "id": 3525,
      "brandId": 400,
      "name": "JOHN DEERE 5055E 4WD 12x12 KABINLI HVAC"
  },
  {
      "id": 3526,
      "brandId": 400,
      "name": "JOHN DEERE 5065E 4WD 12x12 KABINLI HVAC"
  },
  {
      "id": 3527,
      "brandId": 400,
      "name": "JOHN DEERE 5055E 4WD KABINLI HVAC"
  },
  {
      "id": 3528,
      "brandId": 400,
      "name": "JOHN DEERE 5075E 4WD KABINLI HVAC"
  },
  {
      "id": 3529,
      "brandId": 400,
      "name": "JOHN DEERE 5075GF 4WD"
  },
  {
      "id": 3530,
      "brandId": 400,
      "name": "JOHN DEERE 5085GF 4WD"
  },
  {
      "id": 3531,
      "brandId": 400,
      "name": "JOHN DEERE 5065E 4WD KABINLI HVAC"
  },
  {
      "id": 3532,
      "brandId": 400,
      "name": "JOHN DEERE 5075GF 4ED KABINLI"
  },
  {
      "id": 3533,
      "brandId": 400,
      "name": "JOHN DEERE 5085GF 4WD KABINLI"
  },
  {
      "id": 3534,
      "brandId": 400,
      "name": "JOHN DEERE 5100GF 4WD KABINLI"
  },
  {
      "id": 3535,
      "brandId": 400,
      "name": "JOHN DEERE 8320 4WD KABINLI"
  },
  {
      "id": 3536,
      "brandId": 400,
      "name": "JOHN DEERE 6110M"
  },
  {
      "id": 3537,
      "brandId": 400,
      "name": "JOHN DEERE 6120M"
  },
  {
      "id": 3538,
      "brandId": 400,
      "name": "JOHN DEERE 6135M"
  },
  {
      "id": 3539,
      "brandId": 400,
      "name": "JOHN DEERE 6145M"
  },
  {
      "id": 3540,
      "brandId": 400,
      "name": "JOHN DEERE 6155M"
  },
  {
      "id": 3541,
      "brandId": 400,
      "name": "JOHN DEERE 6175M"
  },
  {
      "id": 3542,
      "brandId": 400,
      "name": "JOHN DEERE 6195M"
  },
  {
      "id": 3543,
      "brandId": 400,
      "name": "JOHN DEERE 6110R"
  },
  {
      "id": 3544,
      "brandId": 400,
      "name": "JOHN DEERE 6120R"
  },
  {
      "id": 3545,
      "brandId": 400,
      "name": "JOHN DEERE 6135R"
  },
  {
      "id": 3546,
      "brandId": 400,
      "name": "JOHN DEERE 6145R"
  },
  {
      "id": 3547,
      "brandId": 400,
      "name": "JOHN DEERE 6155R"
  },
  {
      "id": 3548,
      "brandId": 400,
      "name": "JOHN DEERE 6215R"
  },
  {
      "id": 3549,
      "brandId": 400,
      "name": "JOHN DEERE 6090MC"
  },
  {
      "id": 3550,
      "brandId": 400,
      "name": "JOHN DEERE 6100MC"
  },
  {
      "id": 3551,
      "brandId": 400,
      "name": "JOHN DEERE 6110MC"
  },
  {
      "id": 3552,
      "brandId": 400,
      "name": "JOHN DEERE 6090RC"
  },
  {
      "id": 3553,
      "brandId": 400,
      "name": "JOHN DEERE 6110RC"
  },
  {
      "id": 3554,
      "brandId": 400,
      "name": "JOHN DEERE 8370R 4WD KABINLI"
  },
  {
      "id": 3555,
      "brandId": 400,
      "name": "JOHN DEERE 6095MC"
  },
  {
      "id": 3556,
      "brandId": 400,
      "name": "JOHN DEERE 6105MC"
  },
  {
      "id": 3557,
      "brandId": 400,
      "name": "JOHN DEERE 6115MC"
  },
  {
      "id": 3558,
      "brandId": 400,
      "name": "JOHN DEERE 6095RC"
  },
  {
      "id": 3559,
      "brandId": 400,
      "name": "JOHN DEERE 6105RC"
  },
  {
      "id": 3560,
      "brandId": 400,
      "name": "JOHN DEERE 6230R"
  },
  {
      "id": 3561,
      "brandId": 400,
      "name": "JOHN DEERE 6250R"
  },
  {
      "id": 3562,
      "brandId": 400,
      "name": "JOHN DEERE 6115 RC"
  },
  {
      "id": 3563,
      "brandId": 400,
      "name": "JOHN DEERE 6120M SELECT"
  },
  {
      "id": 3564,
      "brandId": 400,
      "name": "JOHN DEERE 6120M PREMIUM"
  },
  {
      "id": 3565,
      "brandId": 400,
      "name": "JOHN DEERE 6140M SELECT"
  },
  {
      "id": 3566,
      "brandId": 400,
      "name": "JOHN DEERE 6140M PREMIUM"
  },
  {
      "id": 3567,
      "brandId": 400,
      "name": "JOHN DEERE 6155M SELECT"
  },
  {
      "id": 3568,
      "brandId": 400,
      "name": "JOHN DEERE 6155M PREMIUM"
  },
  {
      "id": 3569,
      "brandId": 400,
      "name": "JOHN DEERE 6195M SELECT"
  },
  {
      "id": 3570,
      "brandId": 400,
      "name": "JOHN DEERE 6195M PREMIUM"
  },
  {
      "id": 3571,
      "brandId": 400,
      "name": "JOHN DEERE 6145R PREMIUM"
  },
  {
      "id": 3572,
      "brandId": 400,
      "name": "JOHN DEERE 6145R ULTIMATE"
  },
  {
      "id": 3573,
      "brandId": 400,
      "name": "JOHN DEERE 6215R ULTIMATE"
  },
  {
      "id": 3574,
      "brandId": 400,
      "name": "JOHN DEERE 6250R ULTIMATE"
  },
  {
      "id": 3575,
      "brandId": 400,
      "name": "GOLDONI EURO 45 SN 4WD"
  },
  {
      "id": 3576,
      "brandId": 400,
      "name": "GOLDONI QUASAR 90 RS 4WD"
  },
  {
      "id": 3577,
      "brandId": 400,
      "name": "GOLDONI BASE 20 SN 4x4"
  },
  {
      "id": 3578,
      "brandId": 400,
      "name": "GOLDONI EURO 30 RS 4x4"
  },
  {
      "id": 3579,
      "brandId": 400,
      "name": "GOLDONI EURO 40 RS 4x4"
  },
  {
      "id": 3580,
      "brandId": 400,
      "name": "GOLDONI EURO 45 RS 4x4"
  },
  {
      "id": 3581,
      "brandId": 400,
      "name": "GOLDONI RONIN 40 RS 4x4"
  },
  {
      "id": 3582,
      "brandId": 400,
      "name": "GOLDONI RONIN 40 RS LIF PTO 4x4"
  },
  {
      "id": 3583,
      "brandId": 400,
      "name": "GOLDONI RONIN 40 RS KABINLI 4x4"
  },
  {
      "id": 3584,
      "brandId": 400,
      "name": "GOLDONI RONIN 40 RS KABIN LIF PTO 4x4"
  },
  {
      "id": 3585,
      "brandId": 400,
      "name": "GOLDONI RONIN 50 RS 4x4"
  },
  {
      "id": 3586,
      "brandId": 400,
      "name": "GOLDONI RONIN 50 RS LIF PTO 4x4"
  },
  {
      "id": 3587,
      "brandId": 400,
      "name": "GOLDONI RONIN 50 RS KABINLI 4x4"
  },
  {
      "id": 3588,
      "brandId": 400,
      "name": "GOLDONI RONIN 50 RS KABINLI LIF PTO 4x4"
  },
  {
      "id": 3589,
      "brandId": 400,
      "name": "GOLDONI MAXTER 60 RS 4x4"
  },
  {
      "id": 3590,
      "brandId": 400,
      "name": "GOLDONI MAXTER 60 SN 4x4"
  },
  {
      "id": 3591,
      "brandId": 400,
      "name": "GOLDONI STAR 3050 RS 4x4"
  },
  {
      "id": 3592,
      "brandId": 400,
      "name": "GOLDONI STAR 3080 4x4"
  },
  {
      "id": 3593,
      "brandId": 400,
      "name": "GOLDONI ENERGY 60R RS 4x4"
  },
  {
      "id": 3594,
      "brandId": 400,
      "name": "GOLDONI ENERGY 60 RS KABINLI 4x4"
  },
  {
      "id": 3595,
      "brandId": 400,
      "name": "GOLDONI ENERGY 80 RS 4x4"
  },
  {
      "id": 3596,
      "brandId": 400,
      "name": "GOLDONI ENERGY 80 RS KABINLI 4x4"
  },
  {
      "id": 3597,
      "brandId": 400,
      "name": "GOLDONI ENERGY 80 RS KABINLI LIF PTO 4x4"
  },
  {
      "id": 3598,
      "brandId": 400,
      "name": "GOLDONI STAR 90 RS 4x4"
  },
  {
      "id": 3599,
      "brandId": 400,
      "name": "GOLDONI STAR 90 RS KABINLI 4x4"
  },
  {
      "id": 3600,
      "brandId": 400,
      "name": "GOLDONI QUASAR 90 RS LIF PTO 4x4"
  },
  {
      "id": 3601,
      "brandId": 400,
      "name": "GOLDONI QUASAR 90 RS KABINLI 4x4"
  },
  {
      "id": 3602,
      "brandId": 400,
      "name": "GOLDONI QUASAR 90 RS KABINLI LIF PTO 4x4"
  },
  {
      "id": 3603,
      "brandId": 400,
      "name": "GOLDONI STAR 100 RS KABINLI 4x4"
  },
  {
      "id": 3604,
      "brandId": 400,
      "name": "GOLDONI STAR 100 RS LIF KABINLI 4x4"
  },
  {
      "id": 3751,
      "brandId": 400,
      "name": "TUMOSAN 6155"
  },
  {
      "id": 3752,
      "brandId": 400,
      "name": "TUMOSAN 6155 KABIN"
  },
  {
      "id": 3753,
      "brandId": 400,
      "name": "TUMOSAN 6155 4WD KABIN"
  },
  {
      "id": 3754,
      "brandId": 400,
      "name": "TUMOSAN 6165 KABIN"
  },
  {
      "id": 3755,
      "brandId": 400,
      "name": "TUMOSAN 6165 4WD KABIN"
  },
  {
      "id": 3756,
      "brandId": 400,
      "name": "TUMOSAN 6170 KABIN"
  },
  {
      "id": 3757,
      "brandId": 400,
      "name": "TUMOSAN 6170 4WD KABIN"
  },
  {
      "id": 3758,
      "brandId": 400,
      "name": "TUMOSAN 7065 4WD KABIN"
  },
  {
      "id": 3759,
      "brandId": 400,
      "name": "TUMOSAN 7070 KABIN"
  },
  {
      "id": 3760,
      "brandId": 400,
      "name": "TUMOSAN 7070 4WD KABIN"
  },
  {
      "id": 3761,
      "brandId": 400,
      "name": "TUMOSAN 7165 KABIN"
  },
  {
      "id": 3762,
      "brandId": 400,
      "name": "TUMOSAN 7165 4WD KABIN"
  },
  {
      "id": 3763,
      "brandId": 400,
      "name": "TUMOSAN 7170 KABIN"
  },
  {
      "id": 3764,
      "brandId": 400,
      "name": "TUMOSAN 7170 4WD KABIN"
  },
  {
      "id": 3765,
      "brandId": 400,
      "name": "TUMOSAN 8075 KABIN"
  },
  {
      "id": 3766,
      "brandId": 400,
      "name": "TUMOSAN 8075 4WD"
  },
  {
      "id": 3767,
      "brandId": 400,
      "name": "TUMOSAN 8075 4WD KABIN"
  },
  {
      "id": 3768,
      "brandId": 400,
      "name": "TUMOSAN 8085 KABIN"
  },
  {
      "id": 3769,
      "brandId": 400,
      "name": "TUMOSAN 8085 4WD KABIN"
  },
  {
      "id": 3770,
      "brandId": 400,
      "name": "TUMOSAN 8095 4WD KABIN"
  },
  {
      "id": 3771,
      "brandId": 400,
      "name": "TUMOSAN 8175 KABIN"
  },
  {
      "id": 3772,
      "brandId": 400,
      "name": "TUMOSAN 8175 4WD KABIN"
  },
  {
      "id": 3773,
      "brandId": 400,
      "name": "TUMOSAN 8185 4WD KABIN"
  },
  {
      "id": 3774,
      "brandId": 400,
      "name": "TUMOSAN 8195 4WD KABIN"
  },
  {
      "id": 3775,
      "brandId": 400,
      "name": "TUMOSAN 8105 4WD"
  },
  {
      "id": 3776,
      "brandId": 400,
      "name": "TUMOSAN 8105 4WD KABIN"
  },
  {
      "id": 3777,
      "brandId": 400,
      "name": "TUMOSAN 5275"
  },
  {
      "id": 3778,
      "brandId": 400,
      "name": "TUMOSAN 5275 BAHCE 4WD"
  },
  {
      "id": 3781,
      "brandId": 400,
      "name": "TUMOSAN 6055"
  },
  {
      "id": 3782,
      "brandId": 400,
      "name": "TUMOSAN 6055 KABIN"
  },
  {
      "id": 3783,
      "brandId": 400,
      "name": "TUMOSAN 6055 4WD"
  },
  {
      "id": 3784,
      "brandId": 400,
      "name": "TUMOSAN 6055 4WD KABIN"
  },
  {
      "id": 3785,
      "brandId": 400,
      "name": "TUMOSAN 6065"
  },
  {
      "id": 3786,
      "brandId": 400,
      "name": "TUMOSAN 6065 KABIN"
  },
  {
      "id": 3787,
      "brandId": 400,
      "name": "TUMOSAN 6065 4WD"
  },
  {
      "id": 3788,
      "brandId": 400,
      "name": "TUMOSAN 6065 4WD KABIN"
  },
  {
      "id": 3789,
      "brandId": 400,
      "name": "TUMOSAN 6155 4WD"
  },
  {
      "id": 3790,
      "brandId": 400,
      "name": "TUMOSAN 7075"
  },
  {
      "id": 3791,
      "brandId": 400,
      "name": "TUMOSAN 7075 KABIN"
  },
  {
      "id": 3792,
      "brandId": 400,
      "name": "TUMOSAN 7075 4WD"
  },
  {
      "id": 3793,
      "brandId": 400,
      "name": "TUMOSAN 7075 4WD KABIN"
  },
  {
      "id": 3794,
      "brandId": 400,
      "name": "TUMOSAN 7085"
  },
  {
      "id": 3795,
      "brandId": 400,
      "name": "TUMOSAN 7085 KABIN"
  },
  {
      "id": 3796,
      "brandId": 400,
      "name": "TUMOSAN 7085 4WD"
  },
  {
      "id": 3797,
      "brandId": 400,
      "name": "TUMOSAN 7085 4WD KABIN"
  },
  {
      "id": 3798,
      "brandId": 400,
      "name": "TUMOSAN 7175"
  },
  {
      "id": 3799,
      "brandId": 400,
      "name": "TUMOSAN 7175 KABIN"
  },
  {
      "id": 3800,
      "brandId": 400,
      "name": "TUMOSAN 7175 4WD"
  },
  {
      "id": 3801,
      "brandId": 400,
      "name": "TUMOSAN 7175 4WD KABIN"
  },
  {
      "id": 3802,
      "brandId": 400,
      "name": "TUMOSAN 7185"
  },
  {
      "id": 3803,
      "brandId": 400,
      "name": "TUMOSAN 7185 KABIN"
  },
  {
      "id": 3804,
      "brandId": 400,
      "name": "TUMOSAN 7185 4WD"
  },
  {
      "id": 3805,
      "brandId": 400,
      "name": "TUMOSAN 7185 4WD KABIN"
  },
  {
      "id": 3806,
      "brandId": 400,
      "name": "TUMOSAN 5285"
  },
  {
      "id": 3807,
      "brandId": 400,
      "name": "TUMOSAN 5285 BAHCE 4WD"
  },
  {
      "id": 3808,
      "brandId": 400,
      "name": "TUMOSAN 9115 4WD KABIN"
  },
  {
      "id": 3809,
      "brandId": 400,
      "name": "TUMOSAN 8195 4WD"
  },
  {
      "id": 3810,
      "brandId": 400,
      "name": "TUMOSAN 6075"
  },
  {
      "id": 3811,
      "brandId": 400,
      "name": "TUMOSAN 6075 KABIN"
  },
  {
      "id": 3812,
      "brandId": 400,
      "name": "TUMOSAN 6075 4WD"
  },
  {
      "id": 3813,
      "brandId": 400,
      "name": "TUMOSAN 6075 4WD KABIN"
  },
  {
      "id": 3814,
      "brandId": 400,
      "name": "TUMOSAN 6065 BAHCE"
  },
  {
      "id": 3815,
      "brandId": 400,
      "name": "TUMOSAN 6065 BAHCE 4WD"
  },
  {
      "id": 3816,
      "brandId": 400,
      "name": "TUMOSAN 7065 KABIN"
  },
  {
      "id": 3817,
      "brandId": 400,
      "name": "TUMOSAN 8095"
  },
  {
      "id": 3818,
      "brandId": 400,
      "name": "TUMOSAN 8095 KABIN"
  },
  {
      "id": 3819,
      "brandId": 400,
      "name": "TUMOSAN 6050"
  },
  {
      "id": 3820,
      "brandId": 400,
      "name": "TUMOSAN 6050 KABINLI"
  },
  {
      "id": 3821,
      "brandId": 400,
      "name": "TUMOSAN 6050 4WD"
  },
  {
      "id": 3822,
      "brandId": 400,
      "name": "TUMOSAN 6050 4WD KABINLI"
  },
  {
      "id": 3823,
      "brandId": 400,
      "name": "TUMOSAN 5250 BAHCE"
  },
  {
      "id": 3824,
      "brandId": 400,
      "name": "TUMOSAN 5250 BAHCE 4WD"
  },
  {
      "id": 3825,
      "brandId": 400,
      "name": "TUMOSAN 6175 4WD"
  },
  {
      "id": 3826,
      "brandId": 400,
      "name": "TUMOSAN 8195"
  },
  {
      "id": 3827,
      "brandId": 400,
      "name": "TUMOSAN 8195 KABIN"
  },
  {
      "id": 3828,
      "brandId": 400,
      "name": "TUMOSAN 5275 DAR BAHCE"
  },
  {
      "id": 3829,
      "brandId": 400,
      "name": "TUMOSAN 5275 DAR BAHCE 4WD"
  },
  {
      "id": 3830,
      "brandId": 400,
      "name": "TUMOSAN 5255 UZUN BAHCE 4WD 12+12"
  },
  {
      "id": 3831,
      "brandId": 400,
      "name": "TUMOSAN 5265 UZUN BAHCE 4WD 12+12"
  },
  {
      "id": 3832,
      "brandId": 400,
      "name": "TUMOSAN 5275 UZUN BAHCE 4WD 12+12"
  },
  {
      "id": 3833,
      "brandId": 400,
      "name": "TUMOSAN 5285 UZUN BAHCE 4WD 12+12"
  },
  {
      "id": 3834,
      "brandId": 400,
      "name": "TUMOSAN 8195 16+16 YY"
  },
  {
      "id": 3835,
      "brandId": 400,
      "name": "TUMOSAN 8195 16+16 YY KABIN"
  },
  {
      "id": 3836,
      "brandId": 400,
      "name": "TUMOSAN 8195 4WD 16+16 YY"
  },
  {
      "id": 3837,
      "brandId": 400,
      "name": "TUMOSAN 8195 4WD 16+16 YY KABIN"
  },
  {
      "id": 3838,
      "brandId": 400,
      "name": "TUMOSAN 8195 16+16"
  },
  {
      "id": 3839,
      "brandId": 400,
      "name": "TUMOSAN 8195 16+16 KABIN"
  },
  {
      "id": 3840,
      "brandId": 400,
      "name": "TUMOSAN 8195 4WD 16+16"
  },
  {
      "id": 3841,
      "brandId": 400,
      "name": "TUMOSAN 8195 4WD 16+16 KABIN"
  },
  {
      "id": 3842,
      "brandId": 400,
      "name": "TUMOSAN 8105 4WD 16+6 YY"
  },
  {
      "id": 3843,
      "brandId": 400,
      "name": "TUMOSAN 8105 4WD 16+16 YY KABIN"
  },
  {
      "id": 3844,
      "brandId": 400,
      "name": "TUMOSAN 8105 4WD 16+16"
  },
  {
      "id": 3845,
      "brandId": 400,
      "name": "TUMOSAN 8105 4WD 16+16 KABIN"
  },
  {
      "id": 3846,
      "brandId": 400,
      "name": "TUMOSAN 8175 16+16 YY"
  },
  {
      "id": 3847,
      "brandId": 400,
      "name": "TUMOSAN 8175 16+16 YY KABIN"
  },
  {
      "id": 3848,
      "brandId": 400,
      "name": "TUMOSAN 8175 4WD 16+16 YY"
  },
  {
      "id": 3849,
      "brandId": 400,
      "name": "TUMOSAN 8175 4WD 16+16 YY KABIN"
  },
  {
      "id": 3850,
      "brandId": 400,
      "name": "TUMOSAN 8175 16+16"
  },
  {
      "id": 3851,
      "brandId": 400,
      "name": "TUMOSAN 8175 16+16 KABIN"
  },
  {
      "id": 3852,
      "brandId": 400,
      "name": "TUMOSAN 8175 4WD 16+16"
  },
  {
      "id": 3853,
      "brandId": 400,
      "name": "TUMOSAN 8175 4WD 16+16 KABIN"
  },
  {
      "id": 3854,
      "brandId": 400,
      "name": "TUMOSAN 8185 4WD 16+16 YY"
  },
  {
      "id": 3855,
      "brandId": 400,
      "name": "TUMOSAN 8185 4WD 16+16 YY KABIN"
  },
  {
      "id": 3856,
      "brandId": 400,
      "name": "TUMOSAN 8185 4WD 16+16"
  },
  {
      "id": 3857,
      "brandId": 400,
      "name": "TUMOSAN 8185 4WD 16+16 KABIN"
  },
  {
      "id": 3858,
      "brandId": 400,
      "name": "TUMOSAN 8075 12+12"
  },
  {
      "id": 3859,
      "brandId": 400,
      "name": "TUMOSAN 8075 12+12 KABIN"
  },
  {
      "id": 3860,
      "brandId": 400,
      "name": "TUMOSAN 8075 4WD 12+12"
  },
  {
      "id": 3861,
      "brandId": 400,
      "name": "TUMOSAN 8075 4WD 12+12 KABIN"
  },
  {
      "id": 3862,
      "brandId": 400,
      "name": "TUMOSAN 8085 12+12"
  },
  {
      "id": 3863,
      "brandId": 400,
      "name": "TUMOSAN 8085 12+12 KABIN"
  },
  {
      "id": 3864,
      "brandId": 400,
      "name": "TUMOSAN 8085 4WD 12+12"
  },
  {
      "id": 3865,
      "brandId": 400,
      "name": "TUMOSAN 8085 4WD 12+12 KABIN"
  },
  {
      "id": 3866,
      "brandId": 400,
      "name": "TUMOSAN 8095 4WD 12+12"
  },
  {
      "id": 3867,
      "brandId": 400,
      "name": "TUMOSAN 8095 4WD 12+12 KABIN"
  },
  {
      "id": 3868,
      "brandId": 400,
      "name": "TUMOSAN 7065 12+12"
  },
  {
      "id": 3869,
      "brandId": 400,
      "name": "TUMOSAN 7065 12+12 KABIN"
  },
  {
      "id": 3870,
      "brandId": 400,
      "name": "TUMOSAN 7065 4WD 12+12"
  },
  {
      "id": 3871,
      "brandId": 400,
      "name": "TUMOSAN 7065 4WD 12+12 KABIN"
  },
  {
      "id": 4001,
      "brandId": 400,
      "name": "MCCORMIK F 70 4 E-LINE"
  },
  {
      "id": 4002,
      "brandId": 400,
      "name": "MCCORMIK F70 4"
  },
  {
      "id": 4003,
      "brandId": 400,
      "name": "MCCORMIK F85 4"
  },
  {
      "id": 4004,
      "brandId": 400,
      "name": "MCCORMIK F 100 XL 4"
  },
  {
      "id": 4005,
      "brandId": 400,
      "name": "MCCORMIK BMAX 90 4"
  },
  {
      "id": 4006,
      "brandId": 400,
      "name": "MCCORMIK BMAX 100 4"
  },
  {
      "id": 4007,
      "brandId": 400,
      "name": "MCCORMIK BMAX 105 4"
  },
  {
      "id": 4008,
      "brandId": 400,
      "name": "MCCORMIK CMAX 80 4 KABIN"
  },
  {
      "id": 4009,
      "brandId": 400,
      "name": "MCCORMIK CMAX 90 4 KABIN"
  },
  {
      "id": 4010,
      "brandId": 400,
      "name": "MCCORMIK CMAX 100 4 KABIN"
  },
  {
      "id": 4012,
      "brandId": 400,
      "name": "MCCORMIC X 60.50"
  },
  {
      "id": 4013,
      "brandId": 400,
      "name": "MCCORMIK X 70.50 E PLUS"
  },
  {
      "id": 4014,
      "brandId": 400,
      "name": "MCCORMIK X 70.80 E PLUS"
  },
  {
      "id": 4015,
      "brandId": 400,
      "name": "MCCORMIK X 7.660"
  },
  {
      "id": 4016,
      "brandId": 400,
      "name": "MCCORMIK X 7.680"
  },
  {
      "id": 4017,
      "brandId": 400,
      "name": "MCCORMICK C80L-4"
  },
  {
      "id": 4018,
      "brandId": 400,
      "name": "MCCORMICK F 90 XL-4 E-LINE"
  },
  {
      "id": 4019,
      "brandId": 400,
      "name": "MCCORMICK F80 XL 4"
  },
  {
      "id": 4020,
      "brandId": 400,
      "name": "MCCORMICK F85 GE 4 E-LINE"
  },
  {
      "id": 4021,
      "brandId": 400,
      "name": "MCCORMICK F90 GE 4 E-LINE"
  },
  {
      "id": 4022,
      "brandId": 400,
      "name": "MCCROMICK F 100 GE"
  },
  {
      "id": 4023,
      "brandId": 400,
      "name": "MCCORMICK TMAX 100 4"
  },
  {
      "id": 4024,
      "brandId": 400,
      "name": "MCCORMICK X 6.420"
  },
  {
      "id": 4025,
      "brandId": 400,
      "name": "MCCORMICK X 6.430"
  },
  {
      "id": 4026,
      "brandId": 400,
      "name": "MCCORMICK X 7.450"
  },
  {
      "id": 4027,
      "brandId": 400,
      "name": "MCCORMICK X 7.670"
  },
  {
      "id": 4028,
      "brandId": 400,
      "name": "MCCORMIK X6.440"
  },
  {
      "id": 4029,
      "brandId": 400,
      "name": "MCCORMIK GMAX 145"
  },
  {
      "id": 4030,
      "brandId": 400,
      "name": "MCCORMIK GMAX 165"
  },
  {
      "id": 4031,
      "brandId": 400,
      "name": "MCCORMICK F100 CAB/AC-4"
  },
  {
      "id": 4032,
      "brandId": 400,
      "name": "MCCORMICK X 6.440"
  },
  {
      "id": 4251,
      "brandId": 400,
      "name": "AHS KARINCA 30"
  },
  {
      "id": 4301,
      "brandId": 400,
      "name": "KUBOTA L4100"
  },
  {
      "id": 4302,
      "brandId": 400,
      "name": "KUBOTA M7040"
  },
  {
      "id": 4303,
      "brandId": 400,
      "name": "KUBOTA M9540"
  },
  {
      "id": 4304,
      "brandId": 400,
      "name": "KUBOTA M108S"
  },
  {
      "id": 4305,
      "brandId": 400,
      "name": "KUBOTA M130X"
  },
  {
      "id": 4306,
      "brandId": 400,
      "name": "KUBOTA L3200D"
  },
  {
      "id": 4307,
      "brandId": 400,
      "name": "KUBOTA M7040D NARROW"
  },
  {
      "id": 4308,
      "brandId": 400,
      "name": "KUBOTA M8540N NARROW"
  },
  {
      "id": 4309,
      "brandId": 400,
      "name": "KUBOTA B2650D 4WD"
  },
  {
      "id": 4310,
      "brandId": 400,
      "name": "KUBOTA MK5000F"
  },
  {
      "id": 4311,
      "brandId": 400,
      "name": "KUBOTA MK5000D 4WD"
  },
  {
      "id": 4312,
      "brandId": 400,
      "name": "KUBOTA M6040D 4WD NARROW"
  },
  {
      "id": 4313,
      "brandId": 400,
      "name": "KUBOTA M9540D 4WD LOW PROFILE"
  },
  {
      "id": 4314,
      "brandId": 400,
      "name": "KUBOTA M6040D 4WD"
  },
  {
      "id": 4315,
      "brandId": 400,
      "name": "KUBOTA M6040D 4WD KABIN"
  },
  {
      "id": 4316,
      "brandId": 400,
      "name": "KUBOTA M110GX-II 4WD KABIN"
  },
  {
      "id": 4317,
      "brandId": 400,
      "name": "KUBOTA M135GX-II S 4WD KABIN"
  },
  {
      "id": 4318,
      "brandId": 400,
      "name": "KUBOTA M9540D 4WD KABIN HI/LO"
  },
  {
      "id": 4319,
      "brandId": 400,
      "name": "KUBOTA MK5000DW 4WD"
  },
  {
      "id": 4320,
      "brandId": 400,
      "name": "KUBOTA MK5000 BAHCE"
  },
  {
      "id": 4321,
      "brandId": 400,
      "name": "KUBOTA MK5000 TARLA"
  },
  {
      "id": 4322,
      "brandId": 400,
      "name": "KUBOTA MK5000 4WD BAHCE"
  },
  {
      "id": 4323,
      "brandId": 400,
      "name": "KUBOTA MK5000 4WD TARLA"
  },
  {
      "id": 4324,
      "brandId": 400,
      "name": "KUBOTA  L1361 4WD"
  },
  {
      "id": 4325,
      "brandId": 400,
      "name": "KUBOTA M6040H R 4WD"
  },
  {
      "id": 4326,
      "brandId": 400,
      "name": "KUBOTA M6040H C 4WD KABIN"
  },
  {
      "id": 4327,
      "brandId": 400,
      "name": "KUBOTA M7040H R 4WD"
  },
  {
      "id": 4328,
      "brandId": 400,
      "name": "KUBOTA M7040H C 4WD KABIN"
  },
  {
      "id": 4329,
      "brandId": 400,
      "name": "KUBOTA M8540H C 4WD KABIN"
  },
  {
      "id": 4330,
      "brandId": 400,
      "name": "KUBOTA M9540H R 4WD"
  },
  {
      "id": 4331,
      "brandId": 400,
      "name": "KUBOTA M9540H C H2 4WD KABIN"
  },
  {
      "id": 4332,
      "brandId": 400,
      "name": "KUBOTA M9540H C H3 4WD HI-LO KABIN"
  },
  {
      "id": 4333,
      "brandId": 400,
      "name": "KUBOTA M5091H C KABIN"
  },
  {
      "id": 4334,
      "brandId": 400,
      "name": "KUBOTA M5111H C KABIN"
  },
  {
      "id": 4335,
      "brandId": 400,
      "name": "KUBOTA M7151 PS"
  },
  {
      "id": 4336,
      "brandId": 400,
      "name": "KUBOTA M7151 KVT"
  },
  {
      "id": 4337,
      "brandId": 400,
      "name": "KUBOTA M7171 KVT"
  },
  {
      "id": 4338,
      "brandId": 400,
      "name": "KUBOTA M6040N R 4WD NARROW"
  },
  {
      "id": 4339,
      "brandId": 400,
      "name": "KUBOTA M7040N R 4WD NARROW"
  },
  {
      "id": 4340,
      "brandId": 400,
      "name": "KUBOTA M9540L R 4WD LOW PROFILE"
  },
  {
      "id": 4341,
      "brandId": 400,
      "name": "KUBOTA M7151 HIGH END"
  },
  {
      "id": 4342,
      "brandId": 400,
      "name": "KUBOTA B1181D F"
  },
  {
      "id": 4343,
      "brandId": 400,
      "name": "KUBOTA B1241D M"
  },
  {
      "id": 4344,
      "brandId": 400,
      "name": "KUBOTA B2261D M"
  },
  {
      "id": 4345,
      "brandId": 400,
      "name": "KUBOTA B2650D M"
  },
  {
      "id": 4346,
      "brandId": 400,
      "name": "KUBOTA M4062 B R 18 F1"
  },
  {
      "id": 4347,
      "brandId": 400,
      "name": "KUBOTA M4072 B R 18 F1"
  },
  {
      "id": 4348,
      "brandId": 400,
      "name": "KUBOTA M4062 A C 18 F1"
  },
  {
      "id": 4349,
      "brandId": 400,
      "name": "KUBOTA M4072 A C 18 F1"
  },
  {
      "id": 4350,
      "brandId": 400,
      "name": "KUBOTA M5071N R 18"
  },
  {
      "id": 4351,
      "brandId": 400,
      "name": "KUBOTA M5091H R"
  },
  {
      "id": 4352,
      "brandId": 400,
      "name": "KUBOTA M5091N R 18"
  },
  {
      "id": 4353,
      "brandId": 400,
      "name": "KUBOTA M5091N R 36"
  },
  {
      "id": 4354,
      "brandId": 400,
      "name": "KUBOTA M5101N R 18"
  },
  {
      "id": 4355,
      "brandId": 400,
      "name": "KUBOTA M5101N R 36"
  },
  {
      "id": 4356,
      "brandId": 400,
      "name": "KUBOTA M5101N C 36"
  },
  {
      "id": 4357,
      "brandId": 400,
      "name": "KUBOTA M5111H R"
  },
  {
      "id": 4358,
      "brandId": 400,
      "name": "KUBOTA M5091UN B R"
  },
  {
      "id": 4359,
      "brandId": 400,
      "name": "KUBOTA M5101UN B R"
  },
  {
      "id": 4360,
      "brandId": 400,
      "name": "KUBOTA M5091UN A C"
  },
  {
      "id": 4361,
      "brandId": 400,
      "name": "KUBOTA M5101UN A C"
  },
  {
      "id": 4362,
      "brandId": 400,
      "name": "KUBOTA M5111UN B R"
  },
  {
      "id": 4401,
      "brandId": 400,
      "name": "BOZOK 45S DISK FREN"
  },
  {
      "id": 4402,
      "brandId": 400,
      "name": "BOZOK 260 2WD"
  },
  {
      "id": 4403,
      "brandId": 400,
      "name": "BOZOK 260 4WD"
  },
  {
      "id": 4404,
      "brandId": 400,
      "name": "BOZOK 255 2WD"
  },
  {
      "id": 4405,
      "brandId": 400,
      "name": "BOZOK 240"
  },
  {
      "id": 4406,
      "brandId": 400,
      "name": "BOZOK 240 4WD"
  },
  {
      "id": 4407,
      "brandId": 400,
      "name": "BOZOK BT GOLD POWER 240S KAMPANA FREN"
  },
  {
      "id": 4408,
      "brandId": 400,
      "name": "BOZOK BT GOLD POWER 240S DISK FREN"
  },
  {
      "id": 4409,
      "brandId": 400,
      "name": "BOZOK BT GOLD POWER 240S MMAX"
  },
  {
      "id": 4410,
      "brandId": 400,
      "name": "BOZOK BT GOLD POWER 255T"
  },
  {
      "id": 4411,
      "brandId": 400,
      "name": "BOZOK BT GOLD POWER 255T MMAX"
  },
  {
      "id": 4412,
      "brandId": 400,
      "name": "BOZOK BT GOLD POWER 255T 4WD"
  },
  {
      "id": 4413,
      "brandId": 400,
      "name": "BOZOK BT GOLD POWER 260"
  },
  {
      "id": 4414,
      "brandId": 400,
      "name": "BOZOK BT GOLD POWER 260 MMAX"
  },
  {
      "id": 4415,
      "brandId": 400,
      "name": "BOZOK BT GOLD POWER 260 4WD"
  },
  {
      "id": 4416,
      "brandId": 400,
      "name": "BOZOK BT GOLD POWER 260 4WD MMAX"
  },
  {
      "id": 4417,
      "brandId": 400,
      "name": "BOZOK 260G GOLD POWER 4WD"
  },
  {
      "id": 4418,
      "brandId": 400,
      "name": "BOZOK BT GOLD POWER 255T 4WD MMAX"
  },
  {
      "id": 4419,
      "brandId": 400,
      "name": "BOZOK BT GOLD POWER 3075 4WD KABIN"
  },
  {
      "id": 4420,
      "brandId": 400,
      "name": "BOZOK BT GOLD POWER 3085 4WD KABIN"
  },
  {
      "id": 4421,
      "brandId": 400,
      "name": "BOZOK BT GOLD POWER 3095 4WD KABIN"
  },
  {
      "id": 4422,
      "brandId": 400,
      "name": "BOZOK BT GOLD POWER 3105 4WD KABIN"
  },
  {
      "id": 4423,
      "brandId": 400,
      "name": "BOZOK BT GOLD POWER 255T 4WD (12x4)"
  },
  {
      "id": 4424,
      "brandId": 400,
      "name": "BOZOK BT GOLD POWER 240S DISK FREN IPTO"
  },
  {
      "id": 4501,
      "brandId": 400,
      "name": "SOLIS 50 ST"
  },
  {
      "id": 4502,
      "brandId": 400,
      "name": "SOLIS 50 ST KABINLI"
  },
  {
      "id": 4503,
      "brandId": 400,
      "name": "SOLIS 50 DT"
  },
  {
      "id": 4504,
      "brandId": 400,
      "name": "SOLIS 50 DT KABINLI"
  },
  {
      "id": 4505,
      "brandId": 400,
      "name": "SOLIS 75 ST"
  },
  {
      "id": 4506,
      "brandId": 400,
      "name": "SOLIS 75 ST KABINLI"
  },
  {
      "id": 4507,
      "brandId": 400,
      "name": "SOLIS 75 DT"
  },
  {
      "id": 4508,
      "brandId": 400,
      "name": "SOLIS 75 DT KABINLI"
  },
  {
      "id": 4509,
      "brandId": 400,
      "name": "SOLIS 90 DT"
  },
  {
      "id": 4510,
      "brandId": 400,
      "name": "SOLIS 90 DT KABINLI"
  },
  {
      "id": 4511,
      "brandId": 400,
      "name": "SOLIS 20 DT"
  },
  {
      "id": 4512,
      "brandId": 400,
      "name": "SOLIS 26 DT"
  },
  {
      "id": 4513,
      "brandId": 400,
      "name": "SOLIS 60 DT"
  },
  {
      "id": 4514,
      "brandId": 400,
      "name": "SOLIS 60 DT KABINLI"
  },
  {
      "id": 4515,
      "brandId": 400,
      "name": "SOLIS 60 TURBO"
  },
  {
      "id": 4516,
      "brandId": 400,
      "name": "SOLIS 60 TURBO 4WD"
  },
  {
      "id": 4563,
      "brandId": 400,
      "name": "HARS 399 S KABINLI"
  },
  {
      "id": 4601,
      "brandId": 400,
      "name": "FENDT 211 VARIO"
  },
  {
      "id": 4602,
      "brandId": 400,
      "name": "FENDT 309 SCR VARIO"
  },
  {
      "id": 4603,
      "brandId": 400,
      "name": "FENDT 310 SCR VARIO"
  },
  {
      "id": 4604,
      "brandId": 400,
      "name": "FENDT 311 SCR VARIO"
  },
  {
      "id": 4605,
      "brandId": 400,
      "name": "FENDT 312 SCR VARIO"
  },
  {
      "id": 4606,
      "brandId": 400,
      "name": "FENDT 313 SCR VARIO"
  },
  {
      "id": 4607,
      "brandId": 400,
      "name": "FENDT 516 VARIO SCR"
  },
  {
      "id": 4608,
      "brandId": 400,
      "name": "FENDT 720 VARIO SCR"
  },
  {
      "id": 4609,
      "brandId": 400,
      "name": "FENDT 724 VARIO SCR"
  },
  {
      "id": 4610,
      "brandId": 400,
      "name": "FENDT 828 VARIO SCR"
  },
  {
      "id": 4611,
      "brandId": 400,
      "name": "FENDT 936 VARIO SCR"
  },
  {
      "id": 4612,
      "brandId": 400,
      "name": "FENDT 934 VARIO SCR"
  },
  {
      "id": 4613,
      "brandId": 400,
      "name": "FENDT 313 VARIO 4WD KABIN"
  },
  {
      "id": 4614,
      "brandId": 400,
      "name": "FENDT 720 VARIO S4 4WD KABIN"
  },
  {
      "id": 4615,
      "brandId": 400,
      "name": "FENDT 1050 VARIO"
  },
  {
      "id": 4701,
      "brandId": 400,
      "name": "CLAAS ARION 410"
  },
  {
      "id": 4702,
      "brandId": 400,
      "name": "CLAAS AXION 830 CIS"
  },
  {
      "id": 4703,
      "brandId": 400,
      "name": "CLAAS AXION 850 CIS"
  },
  {
      "id": 4704,
      "brandId": 400,
      "name": "CLAAS AXION 930"
  },
  {
      "id": 4705,
      "brandId": 400,
      "name": "CLAAS AXION 950"
  },
  {
      "id": 4706,
      "brandId": 400,
      "name": "CLAAS ARION 540 CMATIC"
  },
  {
      "id": 4707,
      "brandId": 400,
      "name": "CLAAS ARION 640 CMATIC"
  },
  {
      "id": 4708,
      "brandId": 400,
      "name": "CLAAS AXION 810 CIS"
  },
  {
      "id": 4709,
      "brandId": 400,
      "name": "CLAAS AXION 830 CMATIC"
  },
  {
      "id": 4710,
      "brandId": 400,
      "name": "CLAAS AXION 850 CMATIC"
  },
  {
      "id": 4711,
      "brandId": 400,
      "name": "CLASS ARION 450 CIS"
  },
  {
      "id": 4712,
      "brandId": 400,
      "name": "CLASS ARION 430"
  },
  {
      "id": 4713,
      "brandId": 400,
      "name": "CLASS ARION 650 CIS"
  },
  {
      "id": 4714,
      "brandId": 400,
      "name": "CLAAS ARION 650 CMATIC"
  },
  {
      "id": 4715,
      "brandId": 400,
      "name": "CLAAS AXION 870 CMATIC"
  },
  {
      "id": 4716,
      "brandId": 400,
      "name": "CLAAS ARION 420 CIS"
  },
  {
      "id": 4717,
      "brandId": 400,
      "name": "CLAAS AXION 800 CIS"
  },
  {
      "id": 4801,
      "brandId": 400,
      "name": "ANTONIO CARRARO SUPERTIGRE 5500"
  },
  {
      "id": 4802,
      "brandId": 400,
      "name": "ANTONIO CARRARO TIGRONE 5500 JONA"
  },
  {
      "id": 4803,
      "brandId": 400,
      "name": "ANTONIO CARRARO TIGRONE 6500 JONA"
  },
  {
      "id": 4804,
      "brandId": 400,
      "name": "ANTONIO CARRARO TIGRONE 6500 JONA F"
  },
  {
      "id": 4805,
      "brandId": 400,
      "name": "ANTONIO CARRARO TGF 7800 S"
  },
  {
      "id": 4806,
      "brandId": 400,
      "name": "ANTONIO CARRARO TRX 7800 S"
  },
  {
      "id": 4807,
      "brandId": 400,
      "name": "ANTONIO CARRARO TGF 9400 S"
  },
  {
      "id": 4808,
      "brandId": 400,
      "name": "ANTONIO CARRARO TRX 9800"
  },
  {
      "id": 4809,
      "brandId": 400,
      "name": "ANTONIO CARRARO SRX 9800"
  },
  {
      "id": 4810,
      "brandId": 400,
      "name": "ANTONIO CARRARO TGF 9800"
  },
  {
      "id": 4811,
      "brandId": 400,
      "name": "ANTONIO CARRARO TIGRE 4000"
  },
  {
      "id": 4812,
      "brandId": 400,
      "name": "ANTONIO CARRARO TIGRONE 5800 JONA"
  },
  {
      "id": 4813,
      "brandId": 400,
      "name": "ANTONIO CARRARO SUPERTIGRE 6400 JONA"
  },
  {
      "id": 4814,
      "brandId": 400,
      "name": "ANTONIO CARRARO TIGRONE 5800"
  },
  {
      "id": 4815,
      "brandId": 400,
      "name": "ANTONIO CARRARO TRG 10900 E 100"
  },
  {
      "id": 4816,
      "brandId": 400,
      "name": "ANTONIO CARRARO TRX 10900 E 100"
  },
  {
      "id": 4817,
      "brandId": 400,
      "name": "ANTONIO CARRARO MACH 2 KABINLI"
  },
  {
      "id": 4818,
      "brandId": 400,
      "name": "ANTONIO CARRARO TGF 9400 S PROTECTOR S"
  },
  {
      "id": 4819,
      "brandId": 400,
      "name": "ANTONIO CARRARO SUPERTIGRE 5800"
  },
  {
      "id": 4820,
      "brandId": 400,
      "name": "ANTONIO CARRARO TIGRONE 6400 JONA F"
  },
  {
      "id": 4821,
      "brandId": 400,
      "name": "ANTONIO CARRARO TN 5800 MAJOR"
  },
  {
      "id": 4822,
      "brandId": 400,
      "name": "ANTONIO CARRARO TC 5800 F MAJOR"
  },
  {
      "id": 4823,
      "brandId": 400,
      "name": "ANTONIO CARRARO SN 5800 V MAJOR"
  },
  {
      "id": 4824,
      "brandId": 400,
      "name": "ANTONIO CARRARO TGF 7800 S PROTECTOR S"
  },
  {
      "id": 4825,
      "brandId": 400,
      "name": "ANTONIO CARRARO TGF 9900"
  },
  {
      "id": 4826,
      "brandId": 400,
      "name": "ANTONIO CARRARO TGF 9900 PROTECTOR S"
  },
  {
      "id": 4827,
      "brandId": 400,
      "name": "ANTONIO CARRARO TRX 9900"
  },
  {
      "id": 4828,
      "brandId": 400,
      "name": "ANTONIO CARRARO TRX 9900 JOYSTICK"
  },
  {
      "id": 4829,
      "brandId": 400,
      "name": "ANTONIO CARRARO TRG 10900 STARLIGHT KABIN"
  },
  {
      "id": 4830,
      "brandId": 400,
      "name": "ANTONIO CARRARO SX 7800 S"
  },
  {
      "id": 4831,
      "brandId": 400,
      "name": "ANTONIO CARRARO TIGRE 4400 F"
  },
  {
      "id": 4832,
      "brandId": 400,
      "name": "ANTONIO CARRARO TIGRE 4400 HST II"
  },
  {
      "id": 4833,
      "brandId": 400,
      "name": "ANTONIO CARRARO TRX 7800 S STARLIGT KABIN"
  },
  {
      "id": 4834,
      "brandId": 400,
      "name": "ANTONIO CARRARO SX 7800 S KABINLI"
  },
  {
      "id": 4835,
      "brandId": 400,
      "name": "ANTONIO CARRARO SRX 8400"
  },
  {
      "id": 4836,
      "brandId": 400,
      "name": "ANTONIO CARRARO TRG 9900"
  },
  {
      "id": 4837,
      "brandId": 400,
      "name": "ANTONIO CARRARO TRG 9000 KABINLI"
  },
  {
      "id": 4838,
      "brandId": 400,
      "name": "ANTONIO CARRARO MACH 4"
  },
  {
      "id": 4839,
      "brandId": 400,
      "name": "ANTONIO CARRARO TRX 5800"
  },
  {
      "id": 4840,
      "brandId": 400,
      "name": "ANTONIO CARRARO TRG 10900 R"
  },
  {
      "id": 4901,
      "brandId": 400,
      "name": "BCS VIVID DT 300 RS"
  },
  {
      "id": 4902,
      "brandId": 400,
      "name": "BCS VIVID DT 400 RS"
  },
  {
      "id": 4903,
      "brandId": 400,
      "name": "BCS INVICTIS K 300 RS"
  },
  {
      "id": 4904,
      "brandId": 400,
      "name": "BCS INVICTIS K 300 AR"
  },
  {
      "id": 4905,
      "brandId": 400,
      "name": "BCS INVICTUS K 400 RS"
  },
  {
      "id": 4906,
      "brandId": 400,
      "name": "BCS INVICTIS K 400 AR"
  },
  {
      "id": 4907,
      "brandId": 400,
      "name": "BCS INVICTIS K 600 RS"
  },
  {
      "id": 4908,
      "brandId": 400,
      "name": "BCS INVICTIS K 600 RS REV"
  },
  {
      "id": 4909,
      "brandId": 400,
      "name": "BCS INVICTIS K 600 AR"
  },
  {
      "id": 4910,
      "brandId": 400,
      "name": "BCS INVICTIS K 600 AR REV"
  },
  {
      "id": 4911,
      "brandId": 400,
      "name": "BCS VALIANT 600 RS"
  },
  {
      "id": 4912,
      "brandId": 400,
      "name": "BCS VALIANT 600 RS REV"
  },
  {
      "id": 4913,
      "brandId": 400,
      "name": "BCS VALIANT 600 AR"
  },
  {
      "id": 4914,
      "brandId": 400,
      "name": "BCS VALIANT 600 AR REV"
  },
  {
      "id": 4915,
      "brandId": 400,
      "name": "BCS VALIANT V650 RS"
  },
  {
      "id": 4916,
      "brandId": 400,
      "name": "BCS VALIANT V650 RS REV"
  },
  {
      "id": 4917,
      "brandId": 400,
      "name": "BCS VALIANT V650 AR"
  },
  {
      "id": 4918,
      "brandId": 400,
      "name": "BCS VALIANT V650 AR REV"
  },
  {
      "id": 4919,
      "brandId": 400,
      "name": "BCS VITHAR V750 RS"
  },
  {
      "id": 4920,
      "brandId": 400,
      "name": "BCS VITHAR V750 RS REV"
  },
  {
      "id": 4921,
      "brandId": 400,
      "name": "BCS VITHAR V750 AR"
  },
  {
      "id": 4922,
      "brandId": 400,
      "name": "BCS VITHAR V750 AR REV"
  },
  {
      "id": 4923,
      "brandId": 400,
      "name": "BCS VITHAR V850 RS"
  },
  {
      "id": 4924,
      "brandId": 400,
      "name": "BCS VITHAR V850 AR"
  },
  {
      "id": 4925,
      "brandId": 400,
      "name": "BCS VITHAR V950 RS"
  },
  {
      "id": 4926,
      "brandId": 400,
      "name": "BCS VITHAR V950 AR"
  },
  {
      "id": 4927,
      "brandId": 400,
      "name": "BCS VOLCAN V850 SDT RS"
  },
  {
      "id": 4928,
      "brandId": 400,
      "name": "BCS VOLCAN V850 SDT RS REV"
  },
  {
      "id": 4929,
      "brandId": 400,
      "name": "BCS VOLCAN V850 SDT AR REV"
  },
  {
      "id": 4930,
      "brandId": 400,
      "name": "BCS VOLCAN V850 SDT DS"
  },
  {
      "id": 4931,
      "brandId": 400,
      "name": "BCS VOLCAN V850 SDT DS REV"
  },
  {
      "id": 4932,
      "brandId": 400,
      "name": "BCS VOLCAN V950 SDT RS"
  },
  {
      "id": 4933,
      "brandId": 400,
      "name": "BCS VOLCAN V950 DT RS REV"
  },
  {
      "id": 4934,
      "brandId": 400,
      "name": "BCS VOLCAN V950 SDT AP REV"
  },
  {
      "id": 4935,
      "brandId": 400,
      "name": "BCS VOLCAN V950 SDT DS"
  },
  {
      "id": 4936,
      "brandId": 400,
      "name": "BCS VOLCAN V950 SDT DS REV"
  },
  {
      "id": 5051,
      "brandId": 400,
      "name": "KAAN A 250"
  },
  {
      "id": 5101,
      "brandId": 400,
      "name": "CHERY 254"
  },
  {
      "id": 5102,
      "brandId": 400,
      "name": "CHERY 504"
  },
  {
      "id": 5103,
      "brandId": 400,
      "name": "CHERY 504 KABINLI"
  },
  {
      "id": 5151,
      "brandId": 400,
      "name": "UZEL 240S"
  },
  {
      "id": 5201,
      "brandId": 400,
      "name": "TONG YANG HARMAN T603 4WD KABINLI"
  },
  {
      "id": 5202,
      "brandId": 400,
      "name": "HARMAN T1003 4WD KABINLI"
  },
  {
      "id": 5225,
      "brandId": 400,
      "name": "DORSO FUTURA L"
  },
  {
      "id": 5235,
      "brandId": 400,
      "name": "ARORA ANKA 200 T3"
  },
  {
      "id": 5236,
      "brandId": 400,
      "name": "ARORA HERKUL 200 T3"
  },
  {
      "id": 5237,
      "brandId": 400,
      "name": "ARORA HAMMER 250 ATV T3"
  },
  {
      "id": 5251,
      "brandId": 400,
      "name": "ARCTIC CAT 1000 95L T3"
  },
  {
      "id": 5252,
      "brandId": 400,
      "name": "ARCTIC CAT 700 EFI TRV 4x4 70L T3"
  },
  {
      "id": 5253,
      "brandId": 400,
      "name": "ARCTIC CAT 545 55L T3"
  },
  {
      "id": 5254,
      "brandId": 400,
      "name": "ARCTIC CAT ALTERRA 700 XT XRT"
  },
  {
      "id": 5255,
      "brandId": 400,
      "name": "ARCTIC CAT WILDCAT TRAIL XT (WT)"
  },
  {
      "id": 5265,
      "brandId": 400,
      "name": "KUBA RB 200 T3"
  },
  {
      "id": 5266,
      "brandId": 400,
      "name": "KUBA LH 500"
  },
  {
      "id": 5267,
      "brandId": 400,
      "name": "KUBA ELAN 200T XY200ST 6B"
  },
  {
      "id": 5268,
      "brandId": 400,
      "name": "KUBA JUMBO 200T LX200AU 2"
  },
  {
      "id": 5269,
      "brandId": 400,
      "name": "KUBA LH400"
  },
  {
      "id": 5270,
      "brandId": 400,
      "name": "KUBA J-MAL 700"
  },
  {
      "id": 5271,
      "brandId": 400,
      "name": "KUBA BRONZE 200-T XY 200ST-6B"
  },
  {
      "id": 5272,
      "brandId": 400,
      "name": "KUBA LH 200-T (RB)"
  },
  {
      "id": 5273,
      "brandId": 400,
      "name": "KUBA M550-T (LH500)"
  },
  {
      "id": 5274,
      "brandId": 400,
      "name": "KUBA MC2220T (RG) T3"
  },
  {
      "id": 5275,
      "brandId": 400,
      "name": "KUBA LH200ATV D (RB9 T3"
  },
  {
      "id": 5280,
      "brandId": 400,
      "name": "LINHAI LH800U 2D"
  },
  {
      "id": 5281,
      "brandId": 400,
      "name": "LINHAI LH 400"
  },
  {
      "id": 5282,
      "brandId": 400,
      "name": "KUBA LINHAI 200 T3"
  },
  {
      "id": 5283,
      "brandId": 400,
      "name": "KUBA LINHAI 500 T3"
  },
  {
      "id": 5284,
      "brandId": 400,
      "name": "KUBA LINHAI UTV LH800U 2D"
  },
  {
      "id": 5285,
      "brandId": 400,
      "name": "KUBA LINHAI LH300 ATV 3D T3"
  },
  {
      "id": 5286,
      "brandId": 400,
      "name": "KUBA HUSSAR 220T"
  },
  {
      "id": 5287,
      "brandId": 400,
      "name": "KUBA VIP TRACK 250"
  },
  {
      "id": 5288,
      "brandId": 400,
      "name": "KUBA RACER 280 4x2"
  },
  {
      "id": 5289,
      "brandId": 400,
      "name": "KUBA RACER 380 4x4"
  },
  {
      "id": 5290,
      "brandId": 400,
      "name": "KUBA VIP TRAC200 (LX200AU-2A)"
  },
  {
      "id": 5293,
      "brandId": 400,
      "name": "CFMOTO CF550 EPS"
  },
  {
      "id": 5294,
      "brandId": 400,
      "name": "CFMOTO CF1000 ATR"
  },
  {
      "id": 5295,
      "brandId": 400,
      "name": "CFMOTO CF800 ATR"
  },
  {
      "id": 5296,
      "brandId": 400,
      "name": "CFMOTO CF500 ATR"
  },
  {
      "id": 5297,
      "brandId": 400,
      "name": "CFMOTO 450L (CF400 ATR-2L)"
  },
  {
      "id": 5298,
      "brandId": 400,
      "name": "CFMOTO UTV ZFORCE 500 EX T1B"
  },
  {
      "id": 5299,
      "brandId": 400,
      "name": "CFMOTO UTV UFORCE 500 T1B"
  },
  {
      "id": 5300,
      "brandId": 400,
      "name": "CFMOTO UTV ZFORCE 800 EX T1B"
  },
  {
      "id": 5301,
      "brandId": 400,
      "name": "YAGMUR AGRIFARM 550"
  },
  {
      "id": 5302,
      "brandId": 400,
      "name": "YAGMUR AGRIPOWER S 85-4"
  },
  {
      "id": 5303,
      "brandId": 400,
      "name": "YAGMUR AGRIFARM 350 2WD"
  },
  {
      "id": 5304,
      "brandId": 400,
      "name": "YAGMUR AGRIFARM 350 4WD"
  },
  {
      "id": 5305,
      "brandId": 400,
      "name": "YAGMUR AGRIFARM 450 2WD"
  },
  {
      "id": 5306,
      "brandId": 400,
      "name": "YAGMUR AGRIFARM 450 4WD"
  },
  {
      "id": 5307,
      "brandId": 400,
      "name": "YAGMUR AGRIFARM 550 4WD"
  },
  {
      "id": 5308,
      "brandId": 400,
      "name": "YAGMUR EFSANE 350 2WD"
  },
  {
      "id": 5309,
      "brandId": 400,
      "name": "YAGMUR EFSANE 350 4WD"
  },
  {
      "id": 5310,
      "brandId": 400,
      "name": "YAGMUR EFSANE 450 2WD"
  },
  {
      "id": 5311,
      "brandId": 400,
      "name": "YAGMUR EFSANE 450 4WD"
  },
  {
      "id": 5312,
      "brandId": 400,
      "name": "YAGMUR EFSANE 550 2WD"
  },
  {
      "id": 5313,
      "brandId": 400,
      "name": "YAGMUR EFSANE 550 4WD"
  },
  {
      "id": 5352,
      "brandId": 400,
      "name": "BRANSON 5820R 4WD"
  },
  {
      "id": 5353,
      "brandId": 400,
      "name": "BRANSON 5820C 4WD"
  },
  {
      "id": 5354,
      "brandId": 400,
      "name": "BRANSON 5825R"
  },
  {
      "id": 5355,
      "brandId": 400,
      "name": "BRANSON K78C"
  },
  {
      "id": 5356,
      "brandId": 400,
      "name": "BRANSON 2900 4WD"
  },
  {
      "id": 5357,
      "brandId": 400,
      "name": "BRANSON K78R"
  },
  {
      "id": 5450,
      "brandId": 400,
      "name": "HARS 299S"
  },
  {
      "id": 5451,
      "brandId": 400,
      "name": "HARS 299S 4WD"
  },
  {
      "id": 5452,
      "brandId": 400,
      "name": "HARS 299S KABINLI"
  },
  {
      "id": 5453,
      "brandId": 400,
      "name": "HARS 399S 4WD KABINLI"
  },
  {
      "id": 5455,
      "brandId": 400,
      "name": "HARS 399S 4WD"
  },
  {
      "id": 5456,
      "brandId": 400,
      "name": "HARS 299S 4WD KABINLI"
  },
  {
      "id": 5457,
      "brandId": 400,
      "name": "HARS 240 S"
  },
  {
      "id": 5458,
      "brandId": 400,
      "name": "HARS 275 S"
  },
  {
      "id": 5459,
      "brandId": 400,
      "name": "HARS 275 S 4WD"
  },
  {
      "id": 5460,
      "brandId": 400,
      "name": "HARS 275 KABINLI"
  },
  {
      "id": 5461,
      "brandId": 400,
      "name": "HARS 275 S 4WD KABINLI"
  },
  {
      "id": 5462,
      "brandId": 400,
      "name": "HARS 399 S"
  },
  {
      "id": 5463,
      "brandId": 400,
      "name": "HARS 3060 S 4WD BAHCE"
  },
  {
      "id": 5464,
      "brandId": 400,
      "name": "HARS 3060 S 4WD TARLA"
  },
  {
      "id": 5465,
      "brandId": 400,
      "name": "HARS 3060 S BAHCE"
  },
  {
      "id": 5466,
      "brandId": 400,
      "name": "HARS 3060 S TARLA"
  },
  {
      "id": 5501,
      "brandId": 400,
      "name": "KARATAS 254"
  },
  {
      "id": 5502,
      "brandId": 400,
      "name": "KARATAS 504"
  },
  {
      "id": 5503,
      "brandId": 400,
      "name": "KARATAS 504 KABINLI"
  },
  {
      "id": 5504,
      "brandId": 400,
      "name": "KARATAS 955 CHALLENGER 2WD"
  },
  {
      "id": 5505,
      "brandId": 400,
      "name": "KARATAS 955 CHALLENGER 2WD KABINLI"
  },
  {
      "id": 5506,
      "brandId": 400,
      "name": "KARATAS 955 CHALLENGER 4WD"
  },
  {
      "id": 5507,
      "brandId": 400,
      "name": "KARATAS 955 CHALLENGER 4WD KABINLI"
  },
  {
      "id": 5508,
      "brandId": 400,
      "name": "KARATAS 6049 AGRITRAC SUPER 2WD"
  },
  {
      "id": 5509,
      "brandId": 400,
      "name": "KARATAS 6049 AGRITRAC SUPER 2WD KABINLI"
  },
  {
      "id": 5510,
      "brandId": 400,
      "name": "KARATAS 6049 AGRITRAC SUPER 4WD"
  },
  {
      "id": 5511,
      "brandId": 400,
      "name": "KARATAS 6049 AGRITRAC SUPER 4WD KABINLI"
  },
  {
      "id": 5512,
      "brandId": 400,
      "name": "KARATAS 6549 CHALLENGER 2WD 8F-2R"
  },
  {
      "id": 5513,
      "brandId": 400,
      "name": "KARATAS 6549 CHALLENGER 2WD KABINLI 8F-2R"
  },
  {
      "id": 5514,
      "brandId": 400,
      "name": "KARATAS 6549 CHALLENGER 4WD 8F-2R"
  },
  {
      "id": 5515,
      "brandId": 400,
      "name": "KARATAS 6549 CHALLENGER 4WD KABINLI 8F-2R"
  },
  {
      "id": 5516,
      "brandId": 400,
      "name": "KARATAS 6549 AGRITRAC 2WD 12F-12R"
  },
  {
      "id": 5517,
      "brandId": 400,
      "name": "KARATAS 6549 AGRITRAC 2WD KABINLI 12F-12R"
  },
  {
      "id": 5518,
      "brandId": 400,
      "name": "KARATAS 6549 AGRITRAC 4WD 12F-12R"
  },
  {
      "id": 5519,
      "brandId": 400,
      "name": "KARATAS 6549 AGRITRAC 4WD KABINLI 12F-12R"
  },
  {
      "id": 5520,
      "brandId": 400,
      "name": "KARATAS 7549 AGRITRAC 2WD"
  },
  {
      "id": 5521,
      "brandId": 400,
      "name": "KARATAS 7549 AGRITRAC 2WD KABINLI"
  },
  {
      "id": 5522,
      "brandId": 400,
      "name": "KARATAS 7549 AGRITRAC 4WD"
  },
  {
      "id": 5523,
      "brandId": 400,
      "name": "KARATAS 7549 AGRITRAC 4WD KABINLI"
  },
  {
      "id": 5524,
      "brandId": 400,
      "name": "KARATAS 9049 AGRITRAC 4WD"
  },
  {
      "id": 5525,
      "brandId": 400,
      "name": "KARATAS 9049 AGRITRAC 4WD KABINLI"
  },
  {
      "id": 5526,
      "brandId": 400,
      "name": "KARATAS AGRITRAC 10049 4WD"
  },
  {
      "id": 5527,
      "brandId": 400,
      "name": "KARATAS AGRITRAC 10049 4WD KABINLI"
  },
  {
      "id": 5530,
      "brandId": 400,
      "name": "ASYA PUMAREX T3 HS204 500CC"
  },
  {
      "id": 5531,
      "brandId": 400,
      "name": "PUMAREX HS 204 700 T1"
  },
  {
      "id": 5541,
      "brandId": 400,
      "name": "SMC TL 850 T3"
  },
  {
      "id": 5542,
      "brandId": 400,
      "name": "SMC TL 700 T3"
  },
  {
      "id": 5551,
      "brandId": 400,
      "name": "FARMTRAC 6050"
  },
  {
      "id": 5552,
      "brandId": 400,
      "name": "FARMTRAC 6050 KABINLI"
  },
  {
      "id": 5553,
      "brandId": 400,
      "name": "FARMTRAC 6050 DT"
  },
  {
      "id": 5554,
      "brandId": 400,
      "name": "FARMTRAC 6050 DT KABINLI"
  },
  {
      "id": 5555,
      "brandId": 400,
      "name": "FARMTRAC 6060 DT"
  },
  {
      "id": 5556,
      "brandId": 400,
      "name": "FARMTRAC 6060 DT KABINLI"
  },
  {
      "id": 5557,
      "brandId": 400,
      "name": "FARMTRAC 6075 DT 8+2"
  },
  {
      "id": 5558,
      "brandId": 400,
      "name": "FARMTRAC 6075 DT 8+2 KABINLI"
  },
  {
      "id": 5559,
      "brandId": 400,
      "name": "FARMTRAC 6075 DT 12+12"
  },
  {
      "id": 5560,
      "brandId": 400,
      "name": "FARMTRAC 6075 DT 12+12 KABINLI"
  },
  {
      "id": 5561,
      "brandId": 400,
      "name": "FARMTRAC FT 555"
  },
  {
      "id": 5562,
      "brandId": 400,
      "name": "FARMTRAC FT 555 DT"
  },
  {
      "id": 5563,
      "brandId": 400,
      "name": "FARMTRAC FT 675"
  },
  {
      "id": 5564,
      "brandId": 400,
      "name": "FARMTRAC FT 675 KABINLI"
  },
  {
      "id": 5565,
      "brandId": 400,
      "name": "FARMTRAC FT 675 DT"
  },
  {
      "id": 5566,
      "brandId": 400,
      "name": "FARMTRAC FT 675 DT KABINLI"
  },
  {
      "id": 5567,
      "brandId": 400,
      "name": "FARMTRAC FT 690 DT"
  },
  {
      "id": 5568,
      "brandId": 400,
      "name": "FARMTRAC FT 690 DT KABINLI"
  },
  {
      "id": 5569,
      "brandId": 400,
      "name": "FARMTRAC FT 7110 DT KABINLI"
  },
  {
      "id": 5570,
      "brandId": 400,
      "name": "FARMTRAC FT 555 KABINLI"
  },
  {
      "id": 5571,
      "brandId": 400,
      "name": "FARMTRAC FT 555 DT KABINLI"
  },
  {
      "id": 5572,
      "brandId": 400,
      "name": "FARMTRAC FT 9120 DT"
  },
  {
      "id": 5573,
      "brandId": 400,
      "name": "FARMTRAC 6045"
  },
  {
      "id": 5574,
      "brandId": 400,
      "name": "FARMTRAC 6075 DT 8+8"
  },
  {
      "id": 5575,
      "brandId": 400,
      "name": "FARMTRAC 6075 DT 8+8 KABINLI"
  },
  {
      "id": 5601,
      "brandId": 400,
      "name": "BELARUS 952.3"
  },
  {
      "id": 5619,
      "brandId": 400,
      "name": "TGB T3 550 EPS T3"
  },
  {
      "id": 5620,
      "brandId": 400,
      "name": "TGB 1000 LTFI T3"
  },
  {
      "id": 5621,
      "brandId": 400,
      "name": "TGB 550 ISE 4x4 T3"
  },
  {
      "id": 5622,
      "brandId": 400,
      "name": "TGB BLADE 550 ISE ATV T3"
  },
  {
      "id": 5623,
      "brandId": 400,
      "name": "TGB BLADE 1000 LT IRS EFI ATV T3"
  },
  {
      "id": 5635,
      "brandId": 400,
      "name": "YUKI LX175 (YK200) T3"
  },
  {
      "id": 5636,
      "brandId": 400,
      "name": "YUKI YK250 T3 TRACT"
  },
  {
      "id": 5650,
      "brandId": 400,
      "name": "KATSU VES 20"
  },
  {
      "id": 5665,
      "brandId": 400,
      "name": "APACHI TERRA (BS200AU-11) T3"
  },
  {
      "id": 5666,
      "brandId": 400,
      "name": "ISILDAR TERRA (BS200AU-11) T3"
  },
  {
      "id": 5691,
      "brandId": 400,
      "name": "ARGO 750 HDI"
  },
  {
      "id": 5700,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF7724 DYNA 6 EXCLUSIVE"
  },
  {
      "id": 5701,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF7724 DYNA VT EFFICIENT"
  },
  {
      "id": 5702,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF7724 DYNA VT EXCLUSIVE"
  },
  {
      "id": 5703,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF7726 DYNA 6 ESSENTIAL"
  },
  {
      "id": 5704,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 7726 DYNA 6 EFFICIENT"
  },
  {
      "id": 5705,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 7726 DYNA 6 EXCLUSIVE"
  },
  {
      "id": 5706,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF7726 DYNA VT EFFICIENT"
  },
  {
      "id": 5707,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF7726 DYNA VT EXCLUSIVE"
  },
  {
      "id": 5708,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 2625"
  },
  {
      "id": 5709,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 2625 4x4"
  },
  {
      "id": 5710,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 2615GE 4x4"
  },
  {
      "id": 5711,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 2625 GE 4x4"
  },
  {
      "id": 5712,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 2625F"
  },
  {
      "id": 5713,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 2625F 4x4"
  },
  {
      "id": 5714,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF5710 KABIN ESSENTIAL 4WD"
  },
  {
      "id": 5715,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF5710 KABIN ESSENTIAL4WD UST"
  },
  {
      "id": 5716,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF5711 KABIN ESSENTIAL 4WD"
  },
  {
      "id": 5717,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF5711 KABIN ESSENTIAL4WD UST"
  },
  {
      "id": 5718,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF6712 KABIN ESSENTIAL 4WD"
  },
  {
      "id": 5719,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF6712 KABIN ESSENTIAL4WD UST"
  },
  {
      "id": 5720,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF6713 KABIN ESSENTIAL 4WD"
  },
  {
      "id": 5721,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF6713 KABIN ESSENTIAL4WD UST"
  },
  {
      "id": 5722,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 8740 DYNA VT EFFICIENT"
  },
  {
      "id": 5723,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 8740 DYNA VT EXCLUSIVE"
  },
  {
      "id": 5724,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 2525F 4x4"
  },
  {
      "id": 5725,
      "brandId": 400,
      "name": "MASSEY FERGUSON 2625 GE"
  },
  {
      "id": 5726,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 3707 F ESSENTIAL"
  },
  {
      "id": 5727,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 3708 F ESSENTIAL"
  },
  {
      "id": 5728,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 3709 F ESSENTIAL"
  },
  {
      "id": 5729,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 3710 F ESSENTIAL"
  },
  {
      "id": 5730,
      "brandId": 400,
      "name": "MASSEY GERGUSON MF 3707 GE ESSENTIAL"
  },
  {
      "id": 5731,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 3708 GE ESSENTIAL"
  },
  {
      "id": 5732,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 3709 GE ESSENTIAL"
  },
  {
      "id": 5733,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 3710 GE ESSENTIAL"
  },
  {
      "id": 5734,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 5709 S DYNA 4 ESSENTIAL"
  },
  {
      "id": 5735,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 5709 S DYNA 4 EFFICIENT"
  },
  {
      "id": 5736,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 5709 S DYNA 6 ESSENTIAL"
  },
  {
      "id": 5737,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 5709 S DYNA 6 EFICIENT"
  },
  {
      "id": 5738,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 5710 S DYNA 4 ESSENTIAL"
  },
  {
      "id": 5739,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 5710 S DYNA 4 EFFICIENT"
  },
  {
      "id": 5740,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 5710 S DYNA 6 ESSENTIAL"
  },
  {
      "id": 5741,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 5710 S DYNA 6 EFFICIENT"
  },
  {
      "id": 5742,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 5711 S DYNA 4 ESSENTIAL"
  },
  {
      "id": 5743,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 5711 S DYNA 4 EFFICIENT"
  },
  {
      "id": 5744,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 5711 S DYNA 6 EESENTIAL"
  },
  {
      "id": 5745,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 5711 S DYNA 6 EFFICIENT"
  },
  {
      "id": 5746,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 5712 S DYNA 4 ESSENTIAL"
  },
  {
      "id": 5747,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 5712 S DYNA 4 EFFICIENT"
  },
  {
      "id": 5748,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 5712 S DYNA 6 ESSENTIAL"
  },
  {
      "id": 5749,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 5712 S DYNA 6 EFFICENT"
  },
  {
      "id": 5750,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 5713 S DYNA 4 ESSENTIAL"
  },
  {
      "id": 5751,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 5713 S DYNA 4 EFFICIENT"
  },
  {
      "id": 5752,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 5713 S DYNA 6 ESSENTIAL"
  },
  {
      "id": 5753,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 5713 S DYNA 6 EFFICIENT"
  },
  {
      "id": 5754,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 7714 S DYNA 4 ESSENTIAL"
  },
  {
      "id": 5755,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 7715 S DYNA 4 ESSENTIAL"
  },
  {
      "id": 5756,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 7715 S DYNA 6 ESSENTIAL"
  },
  {
      "id": 5757,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 7715 S DYNA 6 EFFICIENT"
  },
  {
      "id": 5758,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 7715 S DYNA 6 EXCLUSIVE"
  },
  {
      "id": 5759,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 7715 S DYNA VT EFFICIENT"
  },
  {
      "id": 5760,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 7715 S DYNA VT EXCLUSIVE"
  },
  {
      "id": 5761,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 7716 S DYNA 6 ESSENTIAL"
  },
  {
      "id": 5762,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 7716 S DYNA 6 EFFICIENT"
  },
  {
      "id": 5763,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 7716 S DYNA 6 EXCLUSIVE"
  },
  {
      "id": 5764,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 7716 S DYNA VT EFFICIENT"
  },
  {
      "id": 5765,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 7716 S DYNA VT EXCLUSIVE"
  },
  {
      "id": 5766,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 7718 S DYNA 6 ESSENTIAL"
  },
  {
      "id": 5767,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 7718 S DYNA 6 EFFICIENT"
  },
  {
      "id": 5768,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 7718 S DYNA 6 EXCLUSIVE"
  },
  {
      "id": 5769,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 7718 S DYNA VT EFFICIENT"
  },
  {
      "id": 5770,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 7718 S DYNA VT EXCLUSIVE"
  },
  {
      "id": 5771,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 7720 S DYNA 6 ESSENTIAL"
  },
  {
      "id": 5772,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 7720 S DYNA 6 EFFICIENT"
  },
  {
      "id": 5773,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 7720 S DYNA 6 EXCLUSIVE"
  },
  {
      "id": 5774,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 7720 S DYNA VT EFFICIENT"
  },
  {
      "id": 5775,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 7720 S DYNA VT EXCLUSIVE"
  },
  {
      "id": 5776,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 7722 S DYNA 6 ESSENTIAL"
  },
  {
      "id": 5777,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 7722 S DYNA 6 EFFICIENT"
  },
  {
      "id": 5778,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 7722 S DYNA 6 EXCLUSIVE"
  },
  {
      "id": 5779,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 7722 S DYNA VT EFFICIENT"
  },
  {
      "id": 5780,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 7722 S DYNA VT EXCLUSIVE"
  },
  {
      "id": 5781,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 7724 S DYNA 6 ESSENTIAL"
  },
  {
      "id": 5782,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 7724 S DYNA 6 EFFICIENT"
  },
  {
      "id": 5783,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 7724 S DYNA 6 EXCLUSIVE"
  },
  {
      "id": 5784,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 7724 S DYNA VT EFFICIENT"
  },
  {
      "id": 5785,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 7724 S DYNA VT EXCLUSIVE"
  },
  {
      "id": 5786,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 7726 S DYNA 6 ESSENTIAL"
  },
  {
      "id": 5787,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 7726 S DYNA 6 EFFICIENT"
  },
  {
      "id": 5788,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 7726 S DYNA 6 EXCLUSIVE"
  },
  {
      "id": 5789,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 7726 S DYNA VT EFFICIENT"
  },
  {
      "id": 5790,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 7726 S DYNA VT EXCLUSIVE"
  },
  {
      "id": 5791,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 240S SN"
  },
  {
      "id": 5792,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF8727S DYNA-VT EFFICIENT"
  },
  {
      "id": 5793,
      "brandId": 400,
      "name": "MASSEY GERGUSON MF8727S DYNA-VT ECLUSIVE"
  },
  {
      "id": 5794,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF8730S DYNA-VT EFFICIENT"
  },
  {
      "id": 5795,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF8730 DYNA-VT EXCLUSIVE"
  },
  {
      "id": 5796,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF8732S DYNA-VT EFFICIENT"
  },
  {
      "id": 5797,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 8732S DYNA-VT EXCLUSIVE"
  },
  {
      "id": 5798,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF8735S DYNA-VT EFFICENT"
  },
  {
      "id": 5799,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF8735S DYNA-VT EXCLUSIVE"
  },
  {
      "id": 5800,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF8737S DYNA-VT EFFICENT"
  },
  {
      "id": 5801,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF8737S DYNA-VT EXCLUSIVE"
  },
  {
      "id": 5802,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF8740SVT EFFICIENT"
  },
  {
      "id": 5803,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF8740S DYNA-VT EXCLUSIVE"
  },
  {
      "id": 5804,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF5708 DYNA-4 KABIN ESSENTIAL"
  },
  {
      "id": 5805,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF5709 DYNA-4 KABIN ESSENTIAL"
  },
  {
      "id": 5806,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF5710 DYNA-4 KABIN ESSENTIAL"
  },
  {
      "id": 5807,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF5711 DYNA-4 KABIN ESSENTIAL"
  },
  {
      "id": 5808,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 7719 S DYNA VT EFFICIENT"
  },
  {
      "id": 5809,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 7719 S DYNA VT EXCLUSIVE"
  },
  {
      "id": 5810,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 240 SN"
  },
  {
      "id": 5811,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 3710 F ESSENTIAL KABIN"
  },
  {
      "id": 5812,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 3710 F EFFICIENT KABIN"
  },
  {
      "id": 5813,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 3710 GE ESSENTIAL KABIN"
  },
  {
      "id": 5814,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 3710 GE EFFICIENT KABIN"
  },
  {
      "id": 5815,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 5710 DYNA 4 ESSENTIAL UST"
  },
  {
      "id": 5816,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 5711 DYNA 4 ESSENTIAL UST"
  },
  {
      "id": 5817,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 5711 DYNA 4 ESSENTIAL"
  },
  {
      "id": 5818,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 5709 M DYNA 4"
  },
  {
      "id": 5819,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 5710 M DYNA 4"
  },
  {
      "id": 5820,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 5710 M DYNA 4 UST"
  },
  {
      "id": 5821,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 5711 M DYNA 4"
  },
  {
      "id": 5822,
      "brandId": 400,
      "name": "MASSEY FERGUSON MF 5711 M DYNA 4 UST"
  },
  {
      "id": 5850,
      "brandId": 400,
      "name": "POLARIS SPORTSMAN 570"
  },
  {
      "id": 5851,
      "brandId": 400,
      "name": "POLARIS SPORTSMAN 570 EPS"
  },
  {
      "id": 5852,
      "brandId": 400,
      "name": "POLARIS SPORTSMAN TOURING 570"
  },
  {
      "id": 5853,
      "brandId": 400,
      "name": "POLARIS SPORTSMAN TOURING 570 EPS"
  },
  {
      "id": 5854,
      "brandId": 400,
      "name": "POLARIS SPORTSMAN 850"
  },
  {
      "id": 5855,
      "brandId": 400,
      "name": "POLARIS SPORTSMAN 1000"
  },
  {
      "id": 5856,
      "brandId": 400,
      "name": "POLARIS SPORTSMAN 1000 TOURING"
  },
  {
      "id": 5857,
      "brandId": 400,
      "name": "POLARIS SCRAMBLER 1000"
  },
  {
      "id": 5858,
      "brandId": 400,
      "name": "POLARIS RANGER 800 6x6"
  },
  {
      "id": 5859,
      "brandId": 400,
      "name": "POLARIS RANGER 900"
  },
  {
      "id": 5860,
      "brandId": 400,
      "name": "POLARIS RANGER 1000 D DIESEL"
  },
  {
      "id": 5861,
      "brandId": 400,
      "name": "POLARIS RANGER EV"
  },
  {
      "id": 5862,
      "brandId": 400,
      "name": "POLARIS RANGER 570"
  },
  {
      "id": 5863,
      "brandId": 400,
      "name": "POLARIS SPORTSMAN XP 1000 TOURING EPS"
  },
  {
      "id": 5864,
      "brandId": 400,
      "name": "POLARIS SPORTSMAN TOURING 570 EPS SP"
  },
  {
      "id": 5865,
      "brandId": 400,
      "name": "POLARIS SPORTMAN XP 1000 LE"
  },
  {
      "id": 5866,
      "brandId": 400,
      "name": "POLARIS SPORTSMAN XP 1000 EPS"
  },
  {
      "id": 5867,
      "brandId": 400,
      "name": "POLARIS SCRAMBLER XP 1000 EPS"
  },
  {
      "id": 5868,
      "brandId": 400,
      "name": "POLARIS RANGER CREW 1000 6 EPS"
  },
  {
      "id": 5869,
      "brandId": 400,
      "name": "POLARIS RANGER XP 1000 EPS"
  },
  {
      "id": 5870,
      "brandId": 400,
      "name": "POLARIS GENERAL 1000 EPS (ABS)"
  },
  {
      "id": 5871,
      "brandId": 400,
      "name": "POLARIS SPORTSMAN 570 EPS HUNTER SE"
  },
  {
      "id": 5872,
      "brandId": 400,
      "name": "POLARIS SPORTSMAN XP 1000 S"
  },
  {
      "id": 5901,
      "brandId": 400,
      "name": "BRP CAN-AM OUTLANDER MAX DPS 570 T3"
  },
  {
      "id": 5902,
      "brandId": 400,
      "name": "BRP CAN-AM OUTLANDER MAX  XTP 1000 EFI TB T3"
  },
  {
      "id": 5903,
      "brandId": 400,
      "name": "BRP CAN-AM OUTLANDER MAX XTP 1000R EFI CB/SY"
  },
  {
      "id": 5904,
      "brandId": 400,
      "name": "BRP CAN-AM MAVERICK SPORT 1000 DPS"
  },
  {
      "id": 5905,
      "brandId": 400,
      "name": "BRP CAN-AM TRAXTER XU HD10"
  },
  {
      "id": 5915,
      "brandId": 400,
      "name": "RKS SHADE 420 (XB400)"
  },
  {
      "id": 5931,
      "brandId": 400,
      "name": "KANUNI ATV 150 T3"
  },
  {
      "id": 5932,
      "brandId": 400,
      "name": "KANUNI ATV 180 T3"
  },
  {
      "id": 5941,
      "brandId": 400,
      "name": "CFMOTO ZFORCE 1000 (CF1000UTR-2) T1"
  },
  {
      "id": 5942,
      "brandId": 400,
      "name": "CFMOTO CFORCE 1000 T3B"
  },
  {
      "id": 5943,
      "brandId": 400,
      "name": "CFMOTO ZFORCE 550 EX (CF800UTR) T1"
  },
  {
      "id": 5944,
      "brandId": 400,
      "name": "CF MOTO CFORCE 800 EPS (CF800ATR-2) T3B"
  },
  {
      "id": 5945,
      "brandId": 400,
      "name": "CF MOTO UFORCE1000 (CF1000UTR-3) T1B"
  },
  {
      "id": 5946,
      "brandId": 400,
      "name": "CF MOTO UFORCE 550 T1B"
  },
  {
      "id": 5951,
      "brandId": 400,
      "name": "ASLAN 5.075 4WD"
  },
  {
      "id": 5952,
      "brandId": 400,
      "name": "ASLAN 5.075 4WD KABINLI"
  },
  {
      "id": 5953,
      "brandId": 400,
      "name": "ASLAN 5.085 4WD"
  },
  {
      "id": 5954,
      "brandId": 400,
      "name": "ASLAN 5.085 4WD KABINLI"
  },
  {
      "id": 5955,
      "brandId": 400,
      "name": "ASLAN 5.095 4WD"
  },
  {
      "id": 5956,
      "brandId": 400,
      "name": "ASLAN 5.095 4WD KABINLI"
  },
  {
      "id": 5957,
      "brandId": 400,
      "name": "ASLAN 5.105 4WD"
  },
  {
      "id": 5958,
      "brandId": 400,
      "name": "ASLAN 5.105 4WD KABIN"
  },
  {
      "id": 5959,
      "brandId": 400,
      "name": "ASLAN 5.075 4WD KABIN 24+24"
  },
  {
      "id": 5960,
      "brandId": 400,
      "name": "ASLAN 5.085 4WD KABIN 24+24"
  },
  {
      "id": 5961,
      "brandId": 400,
      "name": "ASLAN 5.095 4WD KABIN 24+24"
  },
  {
      "id": 5962,
      "brandId": 400,
      "name": "ASLAN 5.105 4WD KABIN 24+24"
  },
  {
      "id": 5963,
      "brandId": 400,
      "name": "ASLAN 5.075 4WD 24+24"
  },
  {
      "id": 5964,
      "brandId": 400,
      "name": "ASLAN 5.085 4WD 24+24"
  },
  {
      "id": 5965,
      "brandId": 400,
      "name": "ASLAN 5.095 4WD 24+24"
  },
  {
      "id": 5966,
      "brandId": 400,
      "name": "ASLAN 5.105 4WD 24+24"
  },
  {
      "id": 6000,
      "brandId": 400,
      "name": "MONDIAL TERRATRACK 200 (XY200ST-6B) T3"
  },
  {
      "id": 6001,
      "brandId": 400,
      "name": "MONDIAL ATV 200 AU T3"
  },
  {
      "id": 6011,
      "brandId": 400,
      "name": "QUADDY KODIAK 700 (QDY K70)"
  },
  {
      "id": 6015,
      "brandId": 400,
      "name": "URSUS C-360 CAB"
  },
  {
      "id": 6016,
      "brandId": 400,
      "name": "URSUS C-380M CAB"
  },
  {
      "id": 6017,
      "brandId": 400,
      "name": "URSUS C-382 CAB"
  },
  {
      "id": 6018,
      "brandId": 400,
      "name": "URSUS C-3102 CAB"
  },
  {
      "id": 6019,
      "brandId": 400,
      "name": "URSUS 11054 CAB"
  },
  {
      "id": 6051,
      "brandId": 400,
      "name": "NEW HOLLAND TD75D (D1)"
  },
  {
      "id": 6052,
      "brandId": 400,
      "name": "NEW HOLLAND TD75D KABINLI (D2)"
  },
  {
      "id": 6053,
      "brandId": 400,
      "name": "NEW HOLLAND TD75D 4WD (D3)"
  },
  {
      "id": 6054,
      "brandId": 400,
      "name": "NEW HOLLAND TD75D 4WD KABINLI (D4)"
  },
  {
      "id": 6055,
      "brandId": 400,
      "name": "NEW HOLLAND TD75D 4WD (D14)"
  },
  {
      "id": 6056,
      "brandId": 400,
      "name": "NEW HOLLAND TD75D 4WD KABINLI (D15)"
  },
  {
      "id": 6057,
      "brandId": 400,
      "name": "NEW HOLLAND TD75D 4WD KABINLI (D22)"
  },
  {
      "id": 6058,
      "brandId": 400,
      "name": "NEW HOLLAND TD90D (D5)"
  },
  {
      "id": 6059,
      "brandId": 400,
      "name": "NEW HOLLAND TD90D (D31)"
  },
  {
      "id": 6060,
      "brandId": 400,
      "name": "NEW HOLLAND TD90D 4WD (D7)"
  },
  {
      "id": 6061,
      "brandId": 400,
      "name": "NEW HOLLAND TD90D 4WD KABINLI (D8)"
  },
  {
      "id": 6062,
      "brandId": 400,
      "name": "NEW HOLLAND TD90D 4WD (D16)"
  },
  {
      "id": 6063,
      "brandId": 400,
      "name": "NEW HOLLAND TD90D 4WD KABINLI (D17)"
  },
  {
      "id": 6064,
      "brandId": 400,
      "name": "NEW HOLLAND TD100D 4WD (D10)"
  },
  {
      "id": 6065,
      "brandId": 400,
      "name": "NEW HOLLAND TD100D 4WD KABINLI (D11)"
  },
  {
      "id": 6066,
      "brandId": 400,
      "name": "NEW HOLLAND TD100D 4WD (D18)"
  },
  {
      "id": 6067,
      "brandId": 400,
      "name": "NEW HOLLAND TD100D 4WD KABINLI (D19)"
  },
  {
      "id": 6068,
      "brandId": 400,
      "name": "NEW HOLLAND TD110D 4WD (D12)"
  },
  {
      "id": 6069,
      "brandId": 400,
      "name": "NEW HOLLAND TD110D 4WD KABINLI (D13)"
  },
  {
      "id": 6070,
      "brandId": 400,
      "name": "NEW HOLLAND TD110D 4WD (D20)"
  },
  {
      "id": 6071,
      "brandId": 400,
      "name": "NEW HOLLAND TD110D 4WD KABINLI (D21)"
  },
  {
      "id": 6072,
      "brandId": 400,
      "name": "NEW HOLLAND TD65D BLM KABINLI"
  },
  {
      "id": 6073,
      "brandId": 400,
      "name": "NEW HOLLAND TD65D BLM 4WD"
  },
  {
      "id": 6074,
      "brandId": 400,
      "name": "NEW HOLLAND TD65D BLM 4WD SRG"
  },
  {
      "id": 6075,
      "brandId": 400,
      "name": "NEW HOLLAND TD65D BLM 4WD KABINLI"
  },
  {
      "id": 6076,
      "brandId": 400,
      "name": "NEW HOLLAND TD65D BLM 4WD KABINLI SRG"
  },
  {
      "id": 6077,
      "brandId": 400,
      "name": "NEW HOLLAND TD75D BLM PS"
  },
  {
      "id": 6078,
      "brandId": 400,
      "name": "NEW HOLLAND TD75D BLM KABINLI PS"
  },
  {
      "id": 6079,
      "brandId": 400,
      "name": "NEW HOLLAND TD75D BLM 4WD PS FL"
  },
  {
      "id": 6080,
      "brandId": 400,
      "name": "NEW HOLLAND TD75D BLM 4WD"
  },
  {
      "id": 6081,
      "brandId": 400,
      "name": "NEW HOLLAND TD75D BLM 4WD PS"
  },
  {
      "id": 6082,
      "brandId": 400,
      "name": "NEW HOLLAND TD75D BLM 4WD KABINLI PS"
  },
  {
      "id": 6083,
      "brandId": 400,
      "name": "NEW HOLLAND TD75D BLM 4WD KABINLI"
  },
  {
      "id": 6084,
      "brandId": 400,
      "name": "NEW HOLLAND TD75D BLM 4WD KABINLI PS FL"
  },
  {
      "id": 6085,
      "brandId": 400,
      "name": "NEW HOLLAND TD75D BLM 4WD KABINLI SRG"
  },
  {
      "id": 6086,
      "brandId": 400,
      "name": "NEW HOLLAND TD90D BLM PS"
  },
  {
      "id": 6087,
      "brandId": 400,
      "name": "NEW HOLLAND TD90D BLM KABINLI PS"
  },
  {
      "id": 6088,
      "brandId": 400,
      "name": "NEW HOLLAND TD90D BLM 4WD PS FL"
  },
  {
      "id": 6089,
      "brandId": 400,
      "name": "NEW HOLLAND TD90D BLM 4WD PS"
  },
  {
      "id": 6090,
      "brandId": 400,
      "name": "NEW HOLLAND TD90D BLM 4WD KABINLI"
  },
  {
      "id": 6091,
      "brandId": 400,
      "name": "NEW HOLLAND TD90D BLM KABINLI PS YFL"
  },
  {
      "id": 6092,
      "brandId": 400,
      "name": "NEW HOLLAND TD90D BLM 4WD KABINLI PS"
  },
  {
      "id": 6093,
      "brandId": 400,
      "name": "NEW HOLLAND TD100D BLM 4WD PS"
  },
  {
      "id": 6094,
      "brandId": 400,
      "name": "NEW HOLLAND TD100D BLM 4WD PS FL"
  },
  {
      "id": 6095,
      "brandId": 400,
      "name": "NEW HOLLAND TD100D BLM 4WD KABINLI"
  },
  {
      "id": 6096,
      "brandId": 400,
      "name": "NEW HOLLAND TD100D BLM 4WD KABINLI PS"
  },
  {
      "id": 6097,
      "brandId": 400,
      "name": "NEW HOLLAND TD100D BLM 4WD KABINLI PS FL"
  },
  {
      "id": 6098,
      "brandId": 400,
      "name": "NEW HOLLAND TD110D BLM 4WD PS FL 750D"
  },
  {
      "id": 6099,
      "brandId": 400,
      "name": "NEW HOLLAND TD110D BLM PS 750D"
  },
  {
      "id": 6100,
      "brandId": 400,
      "name": "NEW HOLLAND TD110D BLM 4WD KABINLI PS 1000D"
  },
  {
      "id": 6101,
      "brandId": 400,
      "name": "NEW HOLLAND TD110D BLM 4WD KABINLI PS 750D"
  },
  {
      "id": 6102,
      "brandId": 400,
      "name": "NEW HOLLAND TD110D BLM 4WD KABINLI PS FL 750"
  },
  {
      "id": 6103,
      "brandId": 400,
      "name": "NEW HOLLAND TD65D BLM"
  },
  {
      "id": 6104,
      "brandId": 400,
      "name": "NEW HOLLAND TD65D BLM KABINLI SRG"
  },
  {
      "id": 6105,
      "brandId": 400,
      "name": "NEW HOLLAND TT50J SRG"
  },
  {
      "id": 6106,
      "brandId": 400,
      "name": "NEW HOLLAND TT55J SRG"
  },
  {
      "id": 6107,
      "brandId": 400,
      "name": "NEW HOLLAND TT55J 4WD SRG"
  },
  {
      "id": 6108,
      "brandId": 400,
      "name": "NEW HOLLAND TT65J SRG"
  },
  {
      "id": 6109,
      "brandId": 400,
      "name": "NEW HOLLAND TT65J 4WD SRG"
  },
  {
      "id": 6110,
      "brandId": 400,
      "name": "NEW HOLLAND TT75J SRG"
  },
  {
      "id": 6111,
      "brandId": 400,
      "name": "NEW HOLLAND TT75J 4WD SRG"
  },
  {
      "id": 6112,
      "brandId": 400,
      "name": "NEW HOLLAND TD75D BLM 4WD KABINLI PS YFL"
  },
  {
      "id": 6113,
      "brandId": 400,
      "name": "NEW HOLLAND TT4.65 4WD PS ON YUK."
  },
  {
      "id": 6114,
      "brandId": 400,
      "name": "NEW HOLLAND TT4.65 4WD KABINLI PS ON YUK."
  },
  {
      "id": 6115,
      "brandId": 400,
      "name": "NEW HOLLAND TT4.75 4WD PS ON YUK."
  },
  {
      "id": 6116,
      "brandId": 400,
      "name": "NEW HOLLAND TT4.75 4WD KABINLI PS ON YUK."
  },
  {
      "id": 6117,
      "brandId": 400,
      "name": "NEW HOLLAND TR6.135 4WD KABINLI"
  },
  {
      "id": 6118,
      "brandId": 400,
      "name": "NEW HOLLAND TR6.150 4WD KABINLI"
  },
  {
      "id": 6119,
      "brandId": 400,
      "name": "NEW HOLLAND TT50J 4WD SRG"
  },
  {
      "id": 6120,
      "brandId": 400,
      "name": "NEW HOLLAND T450S"
  },
  {
      "id": 6121,
      "brandId": 400,
      "name": "NEW HOLLAND T450S 4WD"
  },
  {
      "id": 6122,
      "brandId": 400,
      "name": "NEW HOLLAND T450B 4WD"
  },
  {
      "id": 6123,
      "brandId": 400,
      "name": "NEW HOLLAND T580B"
  },
  {
      "id": 6124,
      "brandId": 400,
      "name": "NEW HOLLAND T580B 4WD"
  },
  {
      "id": 6125,
      "brandId": 400,
      "name": "NEW HOLLAND TS 125A"
  },
  {
      "id": 6126,
      "brandId": 400,
      "name": "NEW HOLLAND T450B"
  },
  {
      "id": 6127,
      "brandId": 400,
      "name": "NEW HOLLAND TR5.90EC 4WD KABIN"
  },
  {
      "id": 6128,
      "brandId": 400,
      "name": "NEW HOLLAND TR5.100EC 4WD KABIN"
  },
  {
      "id": 6129,
      "brandId": 400,
      "name": "NEW HOLLAND TR5.110EC 4WD KABIN"
  },
  {
      "id": 6130,
      "brandId": 400,
      "name": "NEW HOLLAND TD4.100F 4WD (B30)"
  },
  {
      "id": 6131,
      "brandId": 400,
      "name": "NEW HOLLAND TD4.100F 4WD PS (B32)"
  },
  {
      "id": 6132,
      "brandId": 400,
      "name": "NEW HOLLAND TD90D BLM 4WD KABIN (MD1) PS"
  },
  {
      "id": 6133,
      "brandId": 400,
      "name": "NEW HOLLAND TD100D BLM 4WD KABIN (MD2) PS"
  },
  {
      "id": 6134,
      "brandId": 400,
      "name": "NEW HOLLAND TD110D BLM KABIN (MD3) PS 750d"
  },
  {
      "id": 6135,
      "brandId": 400,
      "name": "NEW HOLLAND TR5 90EC 4WD KABINLI EPS"
  },
  {
      "id": 6136,
      "brandId": 400,
      "name": "NEW HOLLAND TR5.100EC 4WD KABIN EPS"
  },
  {
      "id": 6137,
      "brandId": 400,
      "name": "NEW HOLLAND TR5.110EC 4WD KABINLI EPS"
  },
  {
      "id": 6138,
      "brandId": 400,
      "name": "NEW HOLLAND TR5.110EC 4WD KABINLI SGT EPS"
  },
  {
      "id": 6139,
      "brandId": 400,
      "name": "NEW HOLLAND TD4.100F 4WD (B31)"
  },
  {
      "id": 6140,
      "brandId": 400,
      "name": "NEW HOLLAND TD4.100F 4WD PS (B33)"
  },
  {
      "id": 6141,
      "brandId": 400,
      "name": "NEW HOLLAND TD4.100F 4WD SRG"
  },
  {
      "id": 6142,
      "brandId": 400,
      "name": "NEW HOLLAND TT55J 4WD SRG LIMITED EDITION"
  },
  {
      "id": 6143,
      "brandId": 400,
      "name": "NEW HOLLAND TT65J 4WD SRG LIMITED EDITION"
  },
  {
      "id": 6144,
      "brandId": 400,
      "name": "NEW HOLLAND TT75J 4WD SRG LIMITED EDITION"
  },
  {
      "id": 6145,
      "brandId": 400,
      "name": "NEW HOLLAND TD4.100F 4WD PS (B35)"
  },
  {
      "id": 6401,
      "brandId": 400,
      "name": "CASE JX75 4WD KABIN PS YFL"
  },
  {
      "id": 6402,
      "brandId": 400,
      "name": "CASE JX65C 4WD KABINLI PS SRG"
  },
  {
      "id": 6403,
      "brandId": 400,
      "name": "CASE FARMALL90A 4WD KABIN"
  },
  {
      "id": 6404,
      "brandId": 400,
      "name": "CASE FARMALL 100A 4WD KABIN"
  },
  {
      "id": 6405,
      "brandId": 400,
      "name": "CASE FARMALL110A 4WD KABIN"
  },
  {
      "id": 6406,
      "brandId": 400,
      "name": "CASE JX90 4WD KABIN (PP1) PS"
  },
  {
      "id": 6407,
      "brandId": 400,
      "name": "CASE JX100 4WD KABIN (PP2) PS"
  },
  {
      "id": 6408,
      "brandId": 400,
      "name": "CASE JX110 4WD KABIN (PP3) PS 750"
  },
  {
      "id": 6409,
      "brandId": 400,
      "name": "CASE JX65B 4WD MS"
  },
  {
      "id": 6410,
      "brandId": 400,
      "name": "CASE JX75B 4WD MS"
  },
  {
      "id": 6411,
      "brandId": 400,
      "name": "CASE JX90B 4WD MS"
  },
  {
      "id": 6412,
      "brandId": 400,
      "name": "CASE FARMALL 90A 4WD KABINLI EPS"
  },
  {
      "id": 6413,
      "brandId": 400,
      "name": "CASE FARMALL 100A 4WD KABINLI EPS"
  },
  {
      "id": 6414,
      "brandId": 400,
      "name": "CASE FARMALL 110A 4WD KABINLI EPS"
  },
  {
      "id": 6415,
      "brandId": 400,
      "name": "CASE FARMALL 110A 4WD KABINLI CK EPS"
  },
  {
      "id": 6416,
      "brandId": 400,
      "name": "CASE PUMA X 150"
  },
  {
      "id": 6417,
      "brandId": 400,
      "name": "CASE JX55E"
  },
  {
      "id": 6418,
      "brandId": 400,
      "name": "CASE JX 55E 4WD"
  },
  {
      "id": 6419,
      "brandId": 400,
      "name": "CASE JX55E 4WD KABINLI"
  },
  {
      "id": 6420,
      "brandId": 400,
      "name": "CASE JX65E 4WD"
  },
  {
      "id": 6421,
      "brandId": 400,
      "name": "CASE JX65E 4WD SRG"
  },
  {
      "id": 6422,
      "brandId": 400,
      "name": "CASE JX65E 4WD KABINLI"
  },
  {
      "id": 6423,
      "brandId": 400,
      "name": "CASE JX65E 4WD KABINLI SRG"
  },
  {
      "id": 6701,
      "brandId": 400,
      "name": "ARBOS P5100 4WD"
  },
  {
      "id": 6702,
      "brandId": 400,
      "name": "ARBOS P5115 4WD"
  },
  {
      "id": 6703,
      "brandId": 400,
      "name": "ARBOS P5130 4WD"
  },
  {
      "id": 6725,
      "brandId": 400,
      "name": "KUBA M150 T3"
  },
  {
      "id": 6726,
      "brandId": 400,
      "name": "KUBA HUNTER 200T"
  },
  {
      "id": 6750,
      "brandId": 400,
      "name": "KARSHER PF-D KABINLI"
  },
  {
      "id": 10,
      "brandId": 421,
      "name": "COOPER JCW CLUBMAN"
  },
  {
      "id": 12,
      "brandId": 421,
      "name": "MINI COOPER 1.6 S COUNTRYMAN"
  },
  {
      "id": 1835,
      "brandId": 600,
      "name": "ASYA VOLT E-BIKE"
  },
  {
      "id": 1836,
      "brandId": 600,
      "name": "ASYA JAGUAR 500 ON ROAD"
  },
  {
      "id": 1837,
      "brandId": 600,
      "name": "ASYA OXYGEN E-BIKE"
  },
  {
      "id": 1838,
      "brandId": 600,
      "name": "ASYA ELECTRON 2000 E-BIKE"
  },
  {
      "id": 1839,
      "brandId": 600,
      "name": "ASYA E-SMART 2000 E-BIKE"
  },
  {
      "id": 1840,
      "brandId": 600,
      "name": "ASYA PANTHER 2000 E-BIKE"
  },
  {
      "id": 1841,
      "brandId": 600,
      "name": "ASYA ELEKTRA PLUS E-BIKE"
  },
  {
      "id": 1842,
      "brandId": 600,
      "name": "ASYA SONIC 50"
  },
  {
      "id": 1843,
      "brandId": 600,
      "name": "ASYA HSUN 700 ATV T3"
  },
  {
      "id": 1844,
      "brandId": 600,
      "name": "ASYA HSUN 500 ATV T3"
  },
  {
      "id": 1845,
      "brandId": 600,
      "name": "ASYA HSUN 500 UTV T1"
  },
  {
      "id": 1846,
      "brandId": 600,
      "name": "ASYA V RAPTOR"
  },
  {
      "id": 1847,
      "brandId": 600,
      "name": "ASYA SKYMAX PRO"
  },
  {
      "id": 1848,
      "brandId": 600,
      "name": "ASYA SKYMAX"
  },
  {
      "id": 1849,
      "brandId": 600,
      "name": "ASYA BUBBLY"
  },
  {
      "id": 2610,
      "brandId": 600,
      "name": "SYM QUADLANDER 300 S"
  },
  {
      "id": 2611,
      "brandId": 600,
      "name": "SYM MAXSYM 400i"
  },
  {
      "id": 2750,
      "brandId": 600,
      "name": "KAWASAKI KLZ 1000 VERSYS"
  },
  {
      "id": 2779,
      "brandId": 600,
      "name": "KAWASAKI NINJA 300 ABS"
  },
  {
      "id": 2780,
      "brandId": 600,
      "name": "KAWASAKI Z1000SX"
  },
  {
      "id": 2804,
      "brandId": 600,
      "name": "KAWASAKI Z250SL ABS"
  },
  {
      "id": 2951,
      "brandId": 600,
      "name": "BELDERIA PEXMA 100-5"
  },
  {
      "id": 2955,
      "brandId": 600,
      "name": "YUKI ZN-150T ES LEGEND"
  },
  {
      "id": 3025,
      "brandId": 600,
      "name": "WANGYE WY 150T-3"
  },
  {
      "id": 3029,
      "brandId": 600,
      "name": "ENBO FIXSTYLE 2KW"
  },
  {
      "id": 3030,
      "brandId": 600,
      "name": "ENBO FX44 ELEKTRIKLI"
  },
  {
      "id": 3031,
      "brandId": 600,
      "name": "ENBO FX44 2KW"
  },
  {
      "id": 3032,
      "brandId": 600,
      "name": "ENBO FX34 1.5 KW"
  },
  {
      "id": 3033,
      "brandId": 600,
      "name": "ENBO FX34 3KW"
  },
  {
      "id": 3034,
      "brandId": 600,
      "name": "ENBO FIXSTYLE 1KW"
  },
  {
      "id": 3035,
      "brandId": 600,
      "name": "JAJA POLO 3000 ELEKTRIKLI"
  },
  {
      "id": 3036,
      "brandId": 600,
      "name": "YUKI FULU 600 PICK UP"
  },
  {
      "id": 3037,
      "brandId": 600,
      "name": "YUKI DRIVER 125"
  },
  {
      "id": 3038,
      "brandId": 600,
      "name": "YUKI THOR 250 UTV OFFROAD"
  },
  {
      "id": 3039,
      "brandId": 600,
      "name": "YUKI LME ATV 1000 ELEKTRIKLI"
  },
  {
      "id": 3040,
      "brandId": 600,
      "name": "YUKI YK 23 SHOCK 2000 ATV ELEKTRIKLI"
  },
  {
      "id": 3041,
      "brandId": 600,
      "name": "YUKI ECHO 4000 ATV ELEKTRIKLI"
  },
  {
      "id": 3042,
      "brandId": 600,
      "name": "YUKI FX125 THUNDER OFFROAD ATV"
  },
  {
      "id": 3043,
      "brandId": 600,
      "name": "YUKI YK200A-7 TAYFUN-3"
  },
  {
      "id": 3044,
      "brandId": 600,
      "name": "YUKI J-MAL JUMBO 400"
  },
  {
      "id": 3045,
      "brandId": 600,
      "name": "YUKI JUMBO J-MAL JUMBO 700"
  },
  {
      "id": 3046,
      "brandId": 600,
      "name": "YUKI JMAL JUMBO 1000"
  },
  {
      "id": 3047,
      "brandId": 600,
      "name": "YUKI THOR 400 UTV OFFROAD"
  },
  {
      "id": 3048,
      "brandId": 600,
      "name": "YUKI ADA ONE ELEKTRIKLI"
  },
  {
      "id": 3049,
      "brandId": 600,
      "name": "YUKI ADA TWIN"
  },
  {
      "id": 3051,
      "brandId": 600,
      "name": "YUKI HS 400 ATV"
  },
  {
      "id": 3052,
      "brandId": 600,
      "name": "YUKI HS600 ATV"
  },
  {
      "id": 3053,
      "brandId": 600,
      "name": "YUKI ZN 100T-27 RETRO"
  },
  {
      "id": 3054,
      "brandId": 600,
      "name": "YUKI YK 125-7"
  },
  {
      "id": 3055,
      "brandId": 600,
      "name": "YUKI YK 100-2A"
  },
  {
      "id": 3056,
      "brandId": 600,
      "name": "YUKI YK 125-7D"
  },
  {
      "id": 3057,
      "brandId": 600,
      "name": "YUKI YK 100-M"
  },
  {
      "id": 3058,
      "brandId": 600,
      "name": "YUKI YK 100-M36"
  },
  {
      "id": 3059,
      "brandId": 600,
      "name": "YUKI YK 100-M72"
  },
  {
      "id": 3060,
      "brandId": 600,
      "name": "YUKI YK 180-M"
  },
  {
      "id": 3061,
      "brandId": 600,
      "name": "YUKI YK 180-M36"
  },
  {
      "id": 3062,
      "brandId": 600,
      "name": "YUKI YK 180-M72"
  },
  {
      "id": 3063,
      "brandId": 600,
      "name": "YUKI QM100"
  },
  {
      "id": 3064,
      "brandId": 600,
      "name": "YUKI QM170"
  },
  {
      "id": 3065,
      "brandId": 600,
      "name": "YUKI YK 200"
  },
  {
      "id": 3066,
      "brandId": 600,
      "name": "YUKI YK 162-9"
  },
  {
      "id": 3067,
      "brandId": 600,
      "name": "YUKI YK 162-9-S"
  },
  {
      "id": 3068,
      "brandId": 600,
      "name": "YUKI YK 250-21"
  },
  {
      "id": 3069,
      "brandId": 600,
      "name": "YUKI YK 21-A"
  },
  {
      "id": 3070,
      "brandId": 600,
      "name": "YUKI YK 250 GY-7"
  },
  {
      "id": 3071,
      "brandId": 600,
      "name": "YUKI YK 25"
  },
  {
      "id": 3072,
      "brandId": 600,
      "name": "YUKI YK 25L"
  },
  {
      "id": 3073,
      "brandId": 600,
      "name": "YUKI YK 24"
  },
  {
      "id": 3074,
      "brandId": 600,
      "name": "YUKI YK 250 ZH"
  },
  {
      "id": 3075,
      "brandId": 600,
      "name": "YUKI QM50QT-6E SNOOPY"
  },
  {
      "id": 3076,
      "brandId": 600,
      "name": "YUKI YB 100T-15J JUMBO"
  },
  {
      "id": 3077,
      "brandId": 600,
      "name": "YUKI YK 150 ADONIS"
  },
  {
      "id": 3078,
      "brandId": 600,
      "name": "YUKI ZN 100T-E5 LEGEND"
  },
  {
      "id": 3079,
      "brandId": 600,
      "name": "YUKI QM 250 T"
  },
  {
      "id": 3080,
      "brandId": 600,
      "name": "YUKI YB 250 ZKT OPTIMUS"
  },
  {
      "id": 3081,
      "brandId": 600,
      "name": "YUKI YK 150 150A-7 ATV"
  },
  {
      "id": 3082,
      "brandId": 600,
      "name": "YUKI LX 200 ATV"
  },
  {
      "id": 3083,
      "brandId": 600,
      "name": "YUKI J MAX-700 ATV"
  },
  {
      "id": 3084,
      "brandId": 600,
      "name": "YUKI ATV HS 400 ATV-6"
  },
  {
      "id": 3085,
      "brandId": 600,
      "name": "YUKI HS 700 ATV"
  },
  {
      "id": 3086,
      "brandId": 600,
      "name": "YUKI HS 800 ATV-2"
  },
  {
      "id": 3087,
      "brandId": 600,
      "name": "YUKI CZD 180Y12 CAZADOR UTV"
  },
  {
      "id": 3088,
      "brandId": 600,
      "name": "YUKI YK 130-16"
  },
  {
      "id": 3089,
      "brandId": 600,
      "name": "YUKI XGJ 100-7"
  },
  {
      "id": 3090,
      "brandId": 600,
      "name": "YUKI YB50QT-3 CASPER"
  },
  {
      "id": 3091,
      "brandId": 600,
      "name": "YUKI QM50T-6E SNOOPY"
  },
  {
      "id": 3092,
      "brandId": 600,
      "name": "YUKI YB 100-22 JUMBO"
  },
  {
      "id": 3093,
      "brandId": 600,
      "name": "YUKI YB150 JUMBO"
  },
  {
      "id": 3094,
      "brandId": 600,
      "name": "YUKI DRAG 200"
  },
  {
      "id": 3095,
      "brandId": 600,
      "name": "YUKI YK 162 GOLDFOX"
  },
  {
      "id": 3096,
      "brandId": 600,
      "name": "YUKI FORZA 170"
  },
  {
      "id": 3097,
      "brandId": 600,
      "name": "YUKI  CLASSIC 100"
  },
  {
      "id": 3098,
      "brandId": 600,
      "name": "YUKI YK 100 7A GUSTO"
  },
  {
      "id": 3099,
      "brandId": 600,
      "name": "YUKI LX TLA ATTACT"
  },
  {
      "id": 3100,
      "brandId": 600,
      "name": "YUKI LB 150T-9"
  },
  {
      "id": 3101,
      "brandId": 600,
      "name": "MONDIAL TOURING 100 UGK"
  },
  {
      "id": 3102,
      "brandId": 600,
      "name": "MONDIAL TOURING 100 MG PRINCE"
  },
  {
      "id": 3103,
      "brandId": 600,
      "name": "MONDIAL TOURING 100 MG SPORT"
  },
  {
      "id": 3104,
      "brandId": 600,
      "name": "MONDIAL TOURING 125 MG CLASSIC"
  },
  {
      "id": 3105,
      "brandId": 600,
      "name": "MONDIAL TOURING 125 MG SPORT"
  },
  {
      "id": 3106,
      "brandId": 600,
      "name": "MONDIAL  TOURING 125 MG DELUXE"
  },
  {
      "id": 3107,
      "brandId": 600,
      "name": "MONDIAL TOURING 150 MG KING"
  },
  {
      "id": 3108,
      "brandId": 600,
      "name": "MONDIAL 125 MX GRUMBLE"
  },
  {
      "id": 3109,
      "brandId": 600,
      "name": "MONDIAL TOURING 125 AGGRESSIVE"
  },
  {
      "id": 3110,
      "brandId": 600,
      "name": "MONDIAL TOURING 125 MC ROADRACER"
  },
  {
      "id": 3111,
      "brandId": 600,
      "name": "MONDIAL TOURING 125 MH DRIFT"
  },
  {
      "id": 3112,
      "brandId": 600,
      "name": "MONDIAL TOURING 150 MR VULTURE"
  },
  {
      "id": 3113,
      "brandId": 600,
      "name": "MONDIAL TOURING 150 MCX ROADRACER"
  },
  {
      "id": 3114,
      "brandId": 600,
      "name": "MONDIAL TOURING 250 MR DESTRO"
  },
  {
      "id": 3115,
      "brandId": 600,
      "name": "MONDIAL SCOOTER 50 REVIVAL"
  },
  {
      "id": 3116,
      "brandId": 600,
      "name": "MONDIAL SCOOTER 100 LOYAL"
  },
  {
      "id": 3117,
      "brandId": 600,
      "name": "MONDIAL SCOOTER 100 RT"
  },
  {
      "id": 3118,
      "brandId": 600,
      "name": "MONDIAL SCOOTER 125 RT AKIK"
  },
  {
      "id": 3119,
      "brandId": 600,
      "name": "MONDIAL SCOOTER 125 NT TURKUAZ"
  },
  {
      "id": 3120,
      "brandId": 600,
      "name": "MONDIAL SCOOTER 125 ZNU"
  },
  {
      "id": 3121,
      "brandId": 600,
      "name": "MONDIAL SCOOTER 150 MASH"
  },
  {
      "id": 3122,
      "brandId": 600,
      "name": "MONDIAL SCOOTER 150 ZNX"
  },
  {
      "id": 3123,
      "brandId": 600,
      "name": "MONDIAL SCOOTER 250 BUFFALO"
  },
  {
      "id": 3124,
      "brandId": 600,
      "name": "MONDIAL SCOOTER 250 JET MAX"
  },
  {
      "id": 3125,
      "brandId": 600,
      "name": "MONDIAL CUP 100 MFH"
  },
  {
      "id": 3126,
      "brandId": 600,
      "name": "MONDIAL CUP 100 MFM"
  },
  {
      "id": 3127,
      "brandId": 600,
      "name": "MONDIAL CUP 100 SFC BASIC X"
  },
  {
      "id": 3128,
      "brandId": 600,
      "name": "MONDIAL CUP 100 SFC SNAPPY X"
  },
  {
      "id": 3129,
      "brandId": 600,
      "name": "MONDIAL CUP 125 SFS"
  },
  {
      "id": 3130,
      "brandId": 600,
      "name": "MONDIAL CUP 100 HYENA"
  },
  {
      "id": 3131,
      "brandId": 600,
      "name": "MONDIAL CUP 100 HYENA X"
  },
  {
      "id": 3132,
      "brandId": 600,
      "name": "MONDIAL ATV MD 200 JACKAL X"
  },
  {
      "id": 3133,
      "brandId": 600,
      "name": "MONDIAL ATV SPIDER X 250"
  },
  {
      "id": 3134,
      "brandId": 600,
      "name": "MONDIAL ATV SAFARI LION 350"
  },
  {
      "id": 3135,
      "brandId": 600,
      "name": "MONDIAL ATV MD 250 X"
  },
  {
      "id": 3136,
      "brandId": 600,
      "name": "MONDIAL ATV BS 150 ATVU-15"
  },
  {
      "id": 3137,
      "brandId": 600,
      "name": "MONDIAL ATV VULCAN 150"
  },
  {
      "id": 3138,
      "brandId": 600,
      "name": "MONDIAL ATV VULCAN X 150"
  },
  {
      "id": 3139,
      "brandId": 600,
      "name": "MONDIAL CROSS X-TREME SUPER MOTO"
  },
  {
      "id": 3140,
      "brandId": 600,
      "name": "MONDIAL CROSS X-TREME MAX"
  },
  {
      "id": 3141,
      "brandId": 600,
      "name": "MONDIAL CROSS X-TREME MOTO CROSS"
  },
  {
      "id": 3142,
      "brandId": 600,
      "name": "MONDIAL CROSS X-TREME ENDURO"
  },
  {
      "id": 3143,
      "brandId": 600,
      "name": "MONDIAL ATV MD 200"
  },
  {
      "id": 3144,
      "brandId": 600,
      "name": "MONDIAL ATV TERRALANDER 500"
  },
  {
      "id": 3145,
      "brandId": 600,
      "name": "MONDIAL ATV TERRALANDER 625"
  },
  {
      "id": 3146,
      "brandId": 600,
      "name": "MONDIAL ATV TERRALANDER 800"
  },
  {
      "id": 3147,
      "brandId": 600,
      "name": "MONDIAL TERRALANDER 200"
  },
  {
      "id": 3148,
      "brandId": 600,
      "name": "MONDIAL TOURING 100 MG SUPERBOY"
  },
  {
      "id": 3149,
      "brandId": 600,
      "name": "MONDIAL TOURING 135 UAG"
  },
  {
      "id": 3150,
      "brandId": 600,
      "name": "MONDIAL TOURING 150 KT"
  },
  {
      "id": 3187,
      "brandId": 600,
      "name": "MONDIAL SCOOTER 110 RITMICA"
  },
  {
      "id": 3301,
      "brandId": 600,
      "name": "E-MON ASSIST SS"
  },
  {
      "id": 3302,
      "brandId": 600,
      "name": "E-MON ASSIST DS"
  },
  {
      "id": 3303,
      "brandId": 600,
      "name": "E-MON E-CUB 3000"
  },
  {
      "id": 3304,
      "brandId": 600,
      "name": "E-MON RANK 3000"
  },
  {
      "id": 3305,
      "brandId": 600,
      "name": "E-MON MIRACLE"
  },
  {
      "id": 3306,
      "brandId": 600,
      "name": "E-MON X MAN"
  },
  {
      "id": 3307,
      "brandId": 600,
      "name": "E-MON TT CAR GO"
  },
  {
      "id": 3308,
      "brandId": 600,
      "name": "E-MON DIAMOND"
  },
  {
      "id": 3309,
      "brandId": 600,
      "name": "E-MON DUO BIKE"
  },
  {
      "id": 3337,
      "brandId": 600,
      "name": "ASKOLL ES3"
  },
  {
      "id": 3358,
      "brandId": 600,
      "name": "POLARIS SCRAMBLER XP 1000 EPS ATV"
  },
  {
      "id": 3359,
      "brandId": 600,
      "name": "POLARIS SPORTSMAN 570 EFI TOURING ATV"
  },
  {
      "id": 3360,
      "brandId": 600,
      "name": "POLARIS SPORTMAN TOURING XP 1000 EPS"
  },
  {
      "id": 3361,
      "brandId": 600,
      "name": "POLARIS RANGER 570 EFI MID SIZE"
  },
  {
      "id": 3362,
      "brandId": 600,
      "name": "POLARIS RANGER EV"
  },
  {
      "id": 3363,
      "brandId": 600,
      "name": "POLARIS RANGER XP 900 EPS"
  },
  {
      "id": 3364,
      "brandId": 600,
      "name": "POLARIS RANGER DIESEL 1000"
  },
  {
      "id": 3365,
      "brandId": 600,
      "name": "POLARIS RANGER 6X6 EFI"
  },
  {
      "id": 3366,
      "brandId": 600,
      "name": "POLARIS RZR 570 EFI"
  },
  {
      "id": 3367,
      "brandId": 600,
      "name": "POLARIS RZR XP 1000 EPS"
  },
  {
      "id": 3368,
      "brandId": 600,
      "name": "POLARIS RZR XP 1000 HIGH LIFTER"
  },
  {
      "id": 3369,
      "brandId": 600,
      "name": "POLARIS RZR TURBO EPS"
  },
  {
      "id": 3370,
      "brandId": 600,
      "name": "POLARIS GENERAL 1000 EPS PREMIUM"
  },
  {
      "id": 3371,
      "brandId": 600,
      "name": "POLARIS GENERAL 1000 EPS DELUXE"
  },
  {
      "id": 3372,
      "brandId": 600,
      "name": "POLARIS ACE 570"
  },
  {
      "id": 3425,
      "brandId": 600,
      "name": "ZONTES S250"
  },
  {
      "id": 3426,
      "brandId": 600,
      "name": "ZONTES 310R ABS"
  },
  {
      "id": 3427,
      "brandId": 600,
      "name": "ZONTES 310T ABS"
  },
  {
      "id": 3428,
      "brandId": 600,
      "name": "ZONTES ZT250 S ABS"
  },
  {
      "id": 3605,
      "brandId": 600,
      "name": "KUBA 150T-B"
  },
  {
      "id": 3606,
      "brandId": 600,
      "name": "KUBA KM100T-9"
  },
  {
      "id": 3607,
      "brandId": 600,
      "name": "KUBA LC 200"
  },
  {
      "id": 3609,
      "brandId": 600,
      "name": "KUBA NOVA 125"
  },
  {
      "id": 3610,
      "brandId": 600,
      "name": "KUBA PALADIN 200"
  },
  {
      "id": 3611,
      "brandId": 600,
      "name": "KUBA PARS"
  },
  {
      "id": 3612,
      "brandId": 600,
      "name": "KUBA PLATINYUM"
  },
  {
      "id": 3613,
      "brandId": 600,
      "name": "KUBA RY18"
  },
  {
      "id": 3614,
      "brandId": 600,
      "name": "KUBA RY8"
  },
  {
      "id": 3615,
      "brandId": 600,
      "name": "KUBA SILVER BLADE"
  },
  {
      "id": 3616,
      "brandId": 600,
      "name": "KUBA STRIKE 125"
  },
  {
      "id": 3617,
      "brandId": 600,
      "name": "KUBA SUPERLIGHT 150"
  },
  {
      "id": 3618,
      "brandId": 600,
      "name": "KUBA ELAND 250 ATV"
  },
  {
      "id": 3619,
      "brandId": 600,
      "name": "KUBA HANDY 200 ATV"
  },
  {
      "id": 3620,
      "brandId": 600,
      "name": "KUBA JUMBO 200 ATV"
  },
  {
      "id": 3621,
      "brandId": 600,
      "name": "KUBA CITA 100 F"
  },
  {
      "id": 3622,
      "brandId": 600,
      "name": "KUBA CITA 100 FC"
  },
  {
      "id": 3624,
      "brandId": 600,
      "name": "KUBA CITA 125 F"
  },
  {
      "id": 3625,
      "brandId": 600,
      "name": "KUBA RAZORE 100"
  },
  {
      "id": 3626,
      "brandId": 600,
      "name": "KUBA RAZORE 150"
  },
  {
      "id": 3627,
      "brandId": 600,
      "name": "KUBA AJAX 150"
  },
  {
      "id": 3628,
      "brandId": 600,
      "name": "KUBA RAINBOW 100"
  },
  {
      "id": 3629,
      "brandId": 600,
      "name": "KUBA NIRVANA"
  },
  {
      "id": 3630,
      "brandId": 600,
      "name": "KUBA CITA 180 FC"
  },
  {
      "id": 3631,
      "brandId": 600,
      "name": "KUBA RAVAN"
  },
  {
      "id": 3632,
      "brandId": 600,
      "name": "KUBA GT5000 ELEKTRIKLI"
  },
  {
      "id": 3633,
      "brandId": 600,
      "name": "KUBA TK4000 ELEKTRIKLI"
  },
  {
      "id": 3634,
      "brandId": 600,
      "name": "KUBA K4 ELEKTRIKLI"
  },
  {
      "id": 3635,
      "brandId": 600,
      "name": "KUBA K4-C ELEKTRIKLI"
  },
  {
      "id": 3636,
      "brandId": 600,
      "name": "KUBA K4-G ELEKTRIKLI"
  },
  {
      "id": 3637,
      "brandId": 600,
      "name": "KUBA K5-C ELEKTRIKLI"
  },
  {
      "id": 3638,
      "brandId": 600,
      "name": "KUBA K5-T ELEKTRIKLI"
  },
  {
      "id": 3639,
      "brandId": 600,
      "name": "KUBA K8 ELEKTRIKLI"
  },
  {
      "id": 3640,
      "brandId": 600,
      "name": "KUBA K12 ELEKTRIKLI"
  },
  {
      "id": 3641,
      "brandId": 600,
      "name": "KUBA K16 ELEKTIKLI"
  },
  {
      "id": 3642,
      "brandId": 600,
      "name": "KUBA K18 ELEKTRIKLI"
  },
  {
      "id": 3643,
      "brandId": 600,
      "name": "KUBA K24 ELEKTRIKLI"
  },
  {
      "id": 3644,
      "brandId": 600,
      "name": "KUBA CHOK ELEKTRIKLI"
  },
  {
      "id": 3645,
      "brandId": 600,
      "name": "KUBA FILINTA 100"
  },
  {
      "id": 3646,
      "brandId": 600,
      "name": "KUBA CITA 180 R"
  },
  {
      "id": 3647,
      "brandId": 600,
      "name": "KUBA CITA 180 R GOLD"
  },
  {
      "id": 3648,
      "brandId": 600,
      "name": "KUBA RK 125"
  },
  {
      "id": 3649,
      "brandId": 600,
      "name": "KUBA F ACT"
  },
  {
      "id": 3650,
      "brandId": 600,
      "name": "KUBA ECO"
  },
  {
      "id": 3651,
      "brandId": 600,
      "name": "VITELLO ROVER ZN 100T 20B"
  },
  {
      "id": 3652,
      "brandId": 600,
      "name": "VITELLO 125 HERON"
  },
  {
      "id": 3653,
      "brandId": 600,
      "name": "VITELLO LEON 100"
  },
  {
      "id": 3654,
      "brandId": 600,
      "name": "VITELLO VT 100"
  },
  {
      "id": 3655,
      "brandId": 600,
      "name": "VITELLO LIFE 80"
  },
  {
      "id": 3656,
      "brandId": 600,
      "name": "VITELLO KING 100"
  },
  {
      "id": 3657,
      "brandId": 600,
      "name": "VITELLO HERON 100"
  },
  {
      "id": 3658,
      "brandId": 600,
      "name": "VITELLO TIGER 150"
  },
  {
      "id": 3659,
      "brandId": 600,
      "name": "VITELLO LIKYA 1500W ELEKTRIKLI"
  },
  {
      "id": 3660,
      "brandId": 600,
      "name": "VITELLO TRUVA 1500W ELEKTRIKLI"
  },
  {
      "id": 3701,
      "brandId": 600,
      "name": "CAZA MINOTAURAS"
  },
  {
      "id": 3710,
      "brandId": 600,
      "name": "CFMOTO 150 NK TOURING"
  },
  {
      "id": 3711,
      "brandId": 600,
      "name": "CFMOTO CF 400 A TOURING"
  },
  {
      "id": 3712,
      "brandId": 600,
      "name": "CFMOTO 400 NK"
  },
  {
      "id": 3713,
      "brandId": 600,
      "name": "CFMOTO TOURING 650 NK E4 ABS"
  },
  {
      "id": 3714,
      "brandId": 600,
      "name": "CFMOTO TOURING 650 MT E4 ABS"
  },
  {
      "id": 3715,
      "brandId": 600,
      "name": "CFMOTO ATV CF450 L EPS"
  },
  {
      "id": 3716,
      "brandId": 600,
      "name": "CFMOTO ATV CF550 EPS"
  },
  {
      "id": 3717,
      "brandId": 600,
      "name": "CFMOTO ATV CF800 EPS"
  },
  {
      "id": 3718,
      "brandId": 600,
      "name": "CFMOTO UTV ZFORCE 500 EX"
  },
  {
      "id": 3719,
      "brandId": 600,
      "name": "CFMOTO UTV UFORCE 500"
  },
  {
      "id": 3720,
      "brandId": 600,
      "name": "CFMOTO UTV ZFORCE 800 EX"
  },
  {
      "id": 3721,
      "brandId": 600,
      "name": "CFMOTO 250 NK"
  },
  {
      "id": 4051,
      "brandId": 600,
      "name": "KADIRGA KD XY250 GY"
  },
  {
      "id": 4052,
      "brandId": 600,
      "name": "KADIRGA ELITE KD 125"
  },
  {
      "id": 4060,
      "brandId": 600,
      "name": "KUBA RX9"
  },
  {
      "id": 4061,
      "brandId": 600,
      "name": "KUBA RUNNER 50"
  },
  {
      "id": 4062,
      "brandId": 600,
      "name": "KUBA ECO RIDER NS ELEKTRIKLI"
  },
  {
      "id": 4063,
      "brandId": 600,
      "name": "KUBA CRYSTAL 8000 ELEKTRIKLI"
  },
  {
      "id": 4064,
      "brandId": 600,
      "name": "KUBA VIPER 5000 ELEKTRIKLI"
  },
  {
      "id": 4065,
      "brandId": 600,
      "name": "KUBA PORTERO 8000 ELEKTRIKLI"
  },
  {
      "id": 4101,
      "brandId": 600,
      "name": "KYMCO XCITING 250 i"
  },
  {
      "id": 4102,
      "brandId": 600,
      "name": "KYMCO PEOPLE ONE 125i"
  },
  {
      "id": 4103,
      "brandId": 600,
      "name": "KYMCO AGILITY 200i"
  },
  {
      "id": 4104,
      "brandId": 600,
      "name": "KYMCO XCITING 250Ri"
  },
  {
      "id": 4105,
      "brandId": 600,
      "name": "KYMCO MXU 150 ATV"
  },
  {
      "id": 4106,
      "brandId": 600,
      "name": "KYMCO MXU 300R ATV"
  },
  {
      "id": 4107,
      "brandId": 600,
      "name": "KYMCO MXU 500 IRS 4x4 ATV"
  },
  {
      "id": 4108,
      "brandId": 600,
      "name": "KYMCO UXV 500i"
  },
  {
      "id": 4109,
      "brandId": 600,
      "name": "KYMCO DOWNTOWN 300i"
  },
  {
      "id": 4110,
      "brandId": 600,
      "name": "KYMCO XCITING 400i"
  },
  {
      "id": 4111,
      "brandId": 600,
      "name": "KYMCO DOWNTOWN 350i ABS"
  },
  {
      "id": 4112,
      "brandId": 600,
      "name": "KYMCO AGILITY 16+ 150i ABS E4"
  },
  {
      "id": 4113,
      "brandId": 600,
      "name": "MONDIAL KYMCO X-TOWN 125i CBS E4"
  },
  {
      "id": 4114,
      "brandId": 600,
      "name": "KYMCO X-TOWN 125i"
  },
  {
      "id": 4115,
      "brandId": 600,
      "name": "KYMCO X-TOWN 250"
  },
  {
      "id": 4116,
      "brandId": 600,
      "name": "KYMCO PEOPLE 125 ABS"
  },
  {
      "id": 4117,
      "brandId": 600,
      "name": "KYMCO AGILITY CARRY 125"
  },
  {
      "id": 4118,
      "brandId": 600,
      "name": "KYMCO AGILITY 125 (16INCH)"
  },
  {
      "id": 4201,
      "brandId": 600,
      "name": "RKS JAGUAR 100"
  },
  {
      "id": 4202,
      "brandId": 600,
      "name": "RKS RK 200 R"
  },
  {
      "id": 4203,
      "brandId": 600,
      "name": "RKS OUTLOOK 150"
  },
  {
      "id": 4204,
      "brandId": 600,
      "name": "RKS TITANIC 200"
  },
  {
      "id": 4205,
      "brandId": 600,
      "name": "RKS TITANIC 150"
  },
  {
      "id": 4206,
      "brandId": 600,
      "name": "RKS CRUISER 250"
  },
  {
      "id": 4208,
      "brandId": 600,
      "name": "RKS 320 U ATV"
  },
  {
      "id": 4209,
      "brandId": 600,
      "name": "RKS X6"
  },
  {
      "id": 4210,
      "brandId": 600,
      "name": "RKS LOGIK"
  },
  {
      "id": 4211,
      "brandId": 600,
      "name": "RKS BLACKSTER"
  },
  {
      "id": 4212,
      "brandId": 600,
      "name": "RKS TITANIC 150 S"
  },
  {
      "id": 4213,
      "brandId": 600,
      "name": "RKS RK 125"
  },
  {
      "id": 4214,
      "brandId": 600,
      "name": "RKS RY18"
  },
  {
      "id": 4215,
      "brandId": 600,
      "name": "RKS CITYBLADE 125"
  },
  {
      "id": 4216,
      "brandId": 600,
      "name": "RKS RK 150"
  },
  {
      "id": 4217,
      "brandId": 600,
      "name": "RKS RK 180"
  },
  {
      "id": 4218,
      "brandId": 600,
      "name": "RKS TITANIC (K69)"
  },
  {
      "id": 4219,
      "brandId": 600,
      "name": "RKS VLX  (K69) CROOS"
  },
  {
      "id": 4220,
      "brandId": 600,
      "name": "RKS RN180"
  },
  {
      "id": 4221,
      "brandId": 600,
      "name": "RKS NEXT 50"
  },
  {
      "id": 4222,
      "brandId": 600,
      "name": "RKS NEXT 100"
  },
  {
      "id": 4223,
      "brandId": 600,
      "name": "RKS FOCUS 50"
  },
  {
      "id": 4224,
      "brandId": 600,
      "name": "RKS RS 100"
  },
  {
      "id": 4225,
      "brandId": 600,
      "name": "RKS CAFE 152"
  },
  {
      "id": 4226,
      "brandId": 600,
      "name": "RKS TITANIUM 220"
  },
  {
      "id": 4227,
      "brandId": 600,
      "name": "RKS RX6 (RICO 50)"
  },
  {
      "id": 4228,
      "brandId": 600,
      "name": "RKS TITANIC 150 R"
  },
  {
      "id": 4229,
      "brandId": 600,
      "name": "RKS PESARO 125"
  },
  {
      "id": 4230,
      "brandId": 600,
      "name": "RKS K-LIGHT 202"
  },
  {
      "id": 4231,
      "brandId": 600,
      "name": "RKS WINNER 200"
  },
  {
      "id": 4232,
      "brandId": 600,
      "name": "RKS X POWER 50"
  },
  {
      "id": 4233,
      "brandId": 600,
      "name": "RKS RODOS (YX100-C3D)"
  },
  {
      "id": 4234,
      "brandId": 600,
      "name": "RKS RNX (PF01)"
  },
  {
      "id": 4235,
      "brandId": 600,
      "name": "RKS SPONTINI 110 (GST110T-14)"
  },
  {
      "id": 4236,
      "brandId": 600,
      "name": "RKS RT250"
  },
  {
      "id": 4252,
      "brandId": 600,
      "name": "KINETIC ELX 2 ELEKTRIKLI"
  },
  {
      "id": 4253,
      "brandId": 600,
      "name": "KINETIC ELX 3 ELEKTRIKLI"
  },
  {
      "id": 4254,
      "brandId": 600,
      "name": "KINETIC ELX 4 ELEKTRIKLI"
  },
  {
      "id": 4255,
      "brandId": 600,
      "name": "KINETIC ELX 5 ELEKTRIKLI"
  },
  {
      "id": 4371,
      "brandId": 600,
      "name": "CECTEK KINGCOBRA EVO 500"
  },
  {
      "id": 4430,
      "brandId": 600,
      "name": "RENDA RD 110-2"
  },
  {
      "id": 4440,
      "brandId": 600,
      "name": "MEGELLI 250R"
  },
  {
      "id": 4441,
      "brandId": 600,
      "name": "MEGELLI 250S"
  },
  {
      "id": 4475,
      "brandId": 600,
      "name": "OUBAO CTM 125C"
  },
  {
      "id": 4551,
      "brandId": 600,
      "name": "KTM 1190 ADVENTURE"
  },
  {
      "id": 4552,
      "brandId": 600,
      "name": "KTM 350 EXC F"
  },
  {
      "id": 4553,
      "brandId": 600,
      "name": "KTM 500 EXC"
  },
  {
      "id": 4554,
      "brandId": 600,
      "name": "KTM 50 SX"
  },
  {
      "id": 4555,
      "brandId": 600,
      "name": "KTM 65 SX"
  },
  {
      "id": 4556,
      "brandId": 600,
      "name": "KTM 85 SX"
  },
  {
      "id": 4557,
      "brandId": 600,
      "name": "KTM 125 SX"
  },
  {
      "id": 4558,
      "brandId": 600,
      "name": "KTM 150 SX"
  },
  {
      "id": 4559,
      "brandId": 600,
      "name": "KTM 250 SX"
  },
  {
      "id": 4560,
      "brandId": 600,
      "name": "KTM 250 SX F"
  },
  {
      "id": 4561,
      "brandId": 600,
      "name": "KTM 350 SX F"
  },
  {
      "id": 4562,
      "brandId": 600,
      "name": "KTM 450 SX F"
  },
  {
      "id": 4564,
      "brandId": 600,
      "name": "KTM 125 DUKE ABS"
  },
  {
      "id": 4565,
      "brandId": 600,
      "name": "KTM 200 DUKE"
  },
  {
      "id": 4566,
      "brandId": 600,
      "name": "KTM 200 DUKE ABS"
  },
  {
      "id": 4567,
      "brandId": 600,
      "name": "KTM 690 DUKE R"
  },
  {
      "id": 4568,
      "brandId": 600,
      "name": "KTM 690 SMC R"
  },
  {
      "id": 4569,
      "brandId": 600,
      "name": "KTM 990 SM R"
  },
  {
      "id": 4570,
      "brandId": 600,
      "name": "KTM 990 SM T"
  },
  {
      "id": 4571,
      "brandId": 600,
      "name": "KTM 990 SUPER DUKE R"
  },
  {
      "id": 4572,
      "brandId": 600,
      "name": "KTM 1190 ADVENTURE R"
  },
  {
      "id": 4573,
      "brandId": 600,
      "name": "KTM 390 DUKE"
  },
  {
      "id": 4574,
      "brandId": 600,
      "name": "KTM RC 200"
  },
  {
      "id": 4575,
      "brandId": 600,
      "name": "KTM 1290 SUPERDUKE R"
  },
  {
      "id": 4576,
      "brandId": 600,
      "name": "KTM RC 125 ABS"
  },
  {
      "id": 4577,
      "brandId": 600,
      "name": "KTM RC 390 ABS"
  },
  {
      "id": 4578,
      "brandId": 600,
      "name": "KTM RC8 R"
  },
  {
      "id": 4579,
      "brandId": 600,
      "name": "KTM A050 ADVENTURE"
  },
  {
      "id": 4580,
      "brandId": 600,
      "name": "KTM 1290 SUPER ADVENTURE"
  },
  {
      "id": 4581,
      "brandId": 600,
      "name": "KTM 250 DUKE"
  },
  {
      "id": 4582,
      "brandId": 600,
      "name": "KTM 250 DUKE ABS"
  },
  {
      "id": 4583,
      "brandId": 600,
      "name": "KTM RC 250 ABS"
  },
  {
      "id": 4584,
      "brandId": 600,
      "name": "KTM 250 FREERIDE"
  },
  {
      "id": 4585,
      "brandId": 600,
      "name": "KTM 350 FREERIDE"
  },
  {
      "id": 4586,
      "brandId": 600,
      "name": "KTM 1290 SUPERDUKE SPECIAL EDITION"
  },
  {
      "id": 4587,
      "brandId": 600,
      "name": "KTM 1290 SUPERDUKE GT"
  },
  {
      "id": 4588,
      "brandId": 600,
      "name": "KTM 1090 ADVENTURE"
  },
  {
      "id": 4589,
      "brandId": 600,
      "name": "KTM 1090 ADVENTURE R"
  },
  {
      "id": 4590,
      "brandId": 600,
      "name": "KTM 1290 SUPER ADVENTURE T"
  },
  {
      "id": 4591,
      "brandId": 600,
      "name": "KTM 250 SX F FACTORY"
  },
  {
      "id": 4592,
      "brandId": 600,
      "name": "KTM 450 SX F FACTORY"
  },
  {
      "id": 4594,
      "brandId": 600,
      "name": "KTM 1290 SUPER ADVENTURE R"
  },
  {
      "id": 4595,
      "brandId": 600,
      "name": "KTM 125 XCW"
  },
  {
      "id": 4596,
      "brandId": 600,
      "name": "KTM 250 EXC TPI"
  },
  {
      "id": 4597,
      "brandId": 600,
      "name": "KTM 250 EXC TPI SIX DAYS"
  },
  {
      "id": 4598,
      "brandId": 600,
      "name": "KTM 300 EXC TPI"
  },
  {
      "id": 4599,
      "brandId": 600,
      "name": "KTM 300 EXC TPI SIXDAYS"
  },
  {
      "id": 4600,
      "brandId": 600,
      "name": "KTM 250 EXC F SIX DAYS"
  },
  {
      "id": 4760,
      "brandId": 600,
      "name": "MORGAN 3 WHEEELER"
  },
  {
      "id": 4781,
      "brandId": 600,
      "name": "ELITTE YY 125 T10"
  },
  {
      "id": 4791,
      "brandId": 600,
      "name": "FOSTI FT 150 T21"
  },
  {
      "id": 4851,
      "brandId": 600,
      "name": "HAOJUE DA 135 S"
  },
  {
      "id": 4852,
      "brandId": 600,
      "name": "HAOJUE HJ150 9"
  },
  {
      "id": 4853,
      "brandId": 600,
      "name": "HAOJUE 125T 10E"
  },
  {
      "id": 4854,
      "brandId": 600,
      "name": "HAOJUE VH125 SKYMOND"
  },
  {
      "id": 4855,
      "brandId": 600,
      "name": "HAOJUE VN99"
  },
  {
      "id": 4875,
      "brandId": 600,
      "name": "CROW JL 125 -6A"
  },
  {
      "id": 4951,
      "brandId": 600,
      "name": "RMG MOTO GUSTO CRYSTAL YB150T-36"
  },
  {
      "id": 4952,
      "brandId": 600,
      "name": "RMG MOTO GUSTO LX 200 ATV"
  },
  {
      "id": 4953,
      "brandId": 600,
      "name": "RMG MOTO GUSTO  CUP 100 SPARK"
  },
  {
      "id": 4954,
      "brandId": 600,
      "name": "RMG MOTO GUSTO CUP 100 SCORPION"
  },
  {
      "id": 4955,
      "brandId": 600,
      "name": "RMG MOTO GUSTO CUP 100 R 100"
  },
  {
      "id": 4956,
      "brandId": 600,
      "name": "RMG MOTO GUSTO RANGER 100"
  },
  {
      "id": 4957,
      "brandId": 600,
      "name": "RMG MOTO GUSTO RANGER 150"
  },
  {
      "id": 4958,
      "brandId": 600,
      "name": "RMG MOTO GUSTO QM 150 9C CS FORTUNA"
  },
  {
      "id": 4959,
      "brandId": 600,
      "name": "RMG MOTO GUSTO QM 150 9R TORNADO"
  },
  {
      "id": 4960,
      "brandId": 600,
      "name": "RMG MOTO GUSTO QM 150 9R TORNADO SPORT"
  },
  {
      "id": 4961,
      "brandId": 600,
      "name": "RMG MOTO GUSTO CROSS QM 200 GY EVEREST"
  },
  {
      "id": 4962,
      "brandId": 600,
      "name": "RMG MOTO GUSTO SCOOTER YY 125 T 19 CLASICO"
  },
  {
      "id": 4963,
      "brandId": 600,
      "name": "RMG MOTO GUSTO SCOOTER YY 125 T 31 VENICE"
  },
  {
      "id": 4964,
      "brandId": 600,
      "name": "RMG MOTO GUSTO SCOOTER YB 150 T 18 RIKKO"
  },
  {
      "id": 4965,
      "brandId": 600,
      "name": "RMG MOTO GUSTO ATV LX 150-6 SKYFLY"
  },
  {
      "id": 4966,
      "brandId": 600,
      "name": "RMG MOTO GUSTO SPARK 50"
  },
  {
      "id": 4967,
      "brandId": 600,
      "name": "RMG MOTO GUSTO CLASICO"
  },
  {
      "id": 4968,
      "brandId": 600,
      "name": "RMG MOTO GUSTO RAPID"
  },
  {
      "id": 4969,
      "brandId": 600,
      "name": "RMG MOTO GUSTO STAR 100 A"
  },
  {
      "id": 4970,
      "brandId": 600,
      "name": "RMG MOTO GUSTO MONZA 100 D"
  },
  {
      "id": 4971,
      "brandId": 600,
      "name": "RMG MOTO GUSTO FORTUNA"
  },
  {
      "id": 5001,
      "brandId": 600,
      "name": "STMAX ROTA 100"
  },
  {
      "id": 5002,
      "brandId": 600,
      "name": "STMAX NOVA 100"
  },
  {
      "id": 5003,
      "brandId": 600,
      "name": "STMAX VIVA 80"
  },
  {
      "id": 5004,
      "brandId": 600,
      "name": "STMAX MEGA 100"
  },
  {
      "id": 5005,
      "brandId": 600,
      "name": "STMAX GF 920 ELEKTRIKLI"
  },
  {
      "id": 5006,
      "brandId": 600,
      "name": "STMAX GF 950 ELEKTRIKLI"
  },
  {
      "id": 5007,
      "brandId": 600,
      "name": "STMAX GF 500 ELEKTRIKLI"
  },
  {
      "id": 5008,
      "brandId": 600,
      "name": "STMAX ELIT 3000 LEKTRIKLI"
  },
  {
      "id": 5009,
      "brandId": 600,
      "name": "STMAX STAR 3000 ELEKTRIKLI"
  },
  {
      "id": 5010,
      "brandId": 600,
      "name": "STMAX BRAVO 50"
  },
  {
      "id": 5011,
      "brandId": 600,
      "name": "STMAX DARBA 50"
  },
  {
      "id": 5012,
      "brandId": 600,
      "name": "STMAX MILAN 50"
  },
  {
      "id": 5013,
      "brandId": 600,
      "name": "STMAX PARTNER ELEKTRIKLI"
  },
  {
      "id": 5014,
      "brandId": 600,
      "name": "STMAX ELEKTRIKLI PARTNER VAN"
  },
  {
      "id": 5015,
      "brandId": 600,
      "name": "STMAX GF300 3TEKERLEKLI ELEKTRIKLI KASALI YUK"
  },
  {
      "id": 5016,
      "brandId": 600,
      "name": "STMAX LINDY 50"
  },
  {
      "id": 5017,
      "brandId": 600,
      "name": "STMAX ROMA 50"
  },
  {
      "id": 5025,
      "brandId": 600,
      "name": "TRUVA YY 125 T-19"
  },
  {
      "id": 5040,
      "brandId": 600,
      "name": "SALCANO TIGER 100 SPORT"
  },
  {
      "id": 5041,
      "brandId": 600,
      "name": "SALCANO ATTACK 150 (JS 150 6H)"
  },
  {
      "id": 5042,
      "brandId": 600,
      "name": "SALCANO ASTRO 130 (SM100-S)"
  },
  {
      "id": 5043,
      "brandId": 600,
      "name": "SALCANO ASTRO 100"
  },
  {
      "id": 5044,
      "brandId": 600,
      "name": "SALCANO HUNTER 140"
  },
  {
      "id": 5045,
      "brandId": 600,
      "name": "SALCANO STMAX DORA 1500 W ELEKTRIKLI"
  },
  {
      "id": 5046,
      "brandId": 600,
      "name": "SALCANO SB 150"
  },
  {
      "id": 5047,
      "brandId": 600,
      "name": "SALCANO HUNTER"
  },
  {
      "id": 5104,
      "brandId": 600,
      "name": "HYOSUNG ST7"
  },
  {
      "id": 5105,
      "brandId": 600,
      "name": "HYOSUNG RX 125 SM"
  },
  {
      "id": 5106,
      "brandId": 600,
      "name": "HYOSUNG RT 125 D"
  },
  {
      "id": 5107,
      "brandId": 600,
      "name": "HYOSUNG X5 GD 250"
  },
  {
      "id": 5108,
      "brandId": 600,
      "name": "HYOSUNG GV250N"
  },
  {
      "id": 5109,
      "brandId": 600,
      "name": "HYOSUNG GT250RC"
  },
  {
      "id": 5110,
      "brandId": 600,
      "name": "HYOSUNG GD250R"
  },
  {
      "id": 5111,
      "brandId": 600,
      "name": "HYOSUNG GT250P"
  },
  {
      "id": 5112,
      "brandId": 600,
      "name": "HYOSUNG GD250N"
  },
  {
      "id": 5256,
      "brandId": 600,
      "name": "VESPA GTS 300 SUPER SPORT"
  },
  {
      "id": 5257,
      "brandId": 600,
      "name": "VESPA LXV 125"
  },
  {
      "id": 5258,
      "brandId": 600,
      "name": "VESPA 946 125 i.e."
  },
  {
      "id": 5259,
      "brandId": 600,
      "name": "VESPA PRIMAVERA 150 4T 3V i.e."
  },
  {
      "id": 5260,
      "brandId": 600,
      "name": "VESPA LX 125 3V i.e."
  },
  {
      "id": 5261,
      "brandId": 600,
      "name": "VESPA GTV 300 VIA DELLA MODA i.e."
  },
  {
      "id": 5262,
      "brandId": 600,
      "name": "VESPA GTV 250 i.e."
  },
  {
      "id": 5263,
      "brandId": 600,
      "name": "VESPA PX 150 TOURING"
  },
  {
      "id": 5264,
      "brandId": 600,
      "name": "VESPA SPRINT 125 3V i.e."
  },
  {
      "id": 5276,
      "brandId": 600,
      "name": "VESPA GTV SEI GIORNI 300 ABS ASR E4"
  },
  {
      "id": 5277,
      "brandId": 600,
      "name": "VESPA PRIMAVERA ELECTRICA"
  },
  {
      "id": 5278,
      "brandId": 600,
      "name": "VESPA PRIMAVERA 50 YACHT CLUB"
  },
  {
      "id": 5279,
      "brandId": 600,
      "name": "VESPA PRIMAVERA S 150 ABS E4"
  },
  {
      "id": 5291,
      "brandId": 600,
      "name": "VESPA SPRINT 50 RACING SIXTIES"
  },
  {
      "id": 5292,
      "brandId": 600,
      "name": "VESPA PRIMAVERA 150 IGET ABS"
  },
  {
      "id": 5351,
      "brandId": 600,
      "name": "PIAGGIO FLY 100"
  },
  {
      "id": 5358,
      "brandId": 600,
      "name": "PIAGGIO BEVERLY 500 CRUISER"
  },
  {
      "id": 5359,
      "brandId": 600,
      "name": "PIAGGIO BEVERLY 350 SPORT TOURING ABS"
  },
  {
      "id": 5360,
      "brandId": 600,
      "name": "PIAGGIO X EVO 400"
  },
  {
      "id": 5361,
      "brandId": 600,
      "name": "PIAGGIO X10 GT 500 ABS EXECUTIVE"
  },
  {
      "id": 5362,
      "brandId": 600,
      "name": "PIAGGIO LIBERTY 150"
  },
  {
      "id": 5363,
      "brandId": 600,
      "name": "PIAGGIO X10 GT 350 ABS"
  },
  {
      "id": 5364,
      "brandId": 600,
      "name": "PIAGGIO FLY 125 3V"
  },
  {
      "id": 5365,
      "brandId": 600,
      "name": "PIAGGIO MP3 YOURBAN ERL 300 i.e. RL"
  },
  {
      "id": 5366,
      "brandId": 600,
      "name": "PIAGGIO MP3 YOURBAN ERL 300 i.e. RL SE SPORT"
  },
  {
      "id": 5367,
      "brandId": 600,
      "name": "PIAGGIO X10 350 ie. EXECUTIVE ABS"
  },
  {
      "id": 5368,
      "brandId": 600,
      "name": "PIAGGIO MP3 BUSINESS 300i.e. LT"
  },
  {
      "id": 5369,
      "brandId": 600,
      "name": "PIAGGIO MP3 BUSINESS 500i.e. LT"
  },
  {
      "id": 5370,
      "brandId": 600,
      "name": "PIAGGIO BEVERLEY 300"
  },
  {
      "id": 5371,
      "brandId": 600,
      "name": "PIAGGIO MEDLEY 150i-GET ABS"
  },
  {
      "id": 5372,
      "brandId": 600,
      "name": "PIAGGIO LIBERTY 150i-GET ABS"
  },
  {
      "id": 5373,
      "brandId": 600,
      "name": "PIAGGIO BEVERLY SPORT TOURING 350i.e. ASR ABS"
  },
  {
      "id": 5374,
      "brandId": 600,
      "name": "PIAGGIO LIBERTY 150 E4"
  },
  {
      "id": 5375,
      "brandId": 600,
      "name": "PIAGGIO LIBERTY S150 E4"
  },
  {
      "id": 5376,
      "brandId": 600,
      "name": "PIAGGIO MEDLEY 150"
  },
  {
      "id": 5377,
      "brandId": 600,
      "name": "PIAGGIO MEDLEY S 150"
  },
  {
      "id": 5378,
      "brandId": 600,
      "name": "PIAGGIO BEVERLY SPORT TOURING 350 ABS E4"
  },
  {
      "id": 5379,
      "brandId": 600,
      "name": "PIAGGIO MP3 SPORT 300 LT ABS E4"
  },
  {
      "id": 5380,
      "brandId": 600,
      "name": "PIAGGIO MP3 SPORT 500 LT ABS E4"
  },
  {
      "id": 5381,
      "brandId": 600,
      "name": "PIAGGIO NRG 50"
  },
  {
      "id": 5382,
      "brandId": 600,
      "name": "PIAGGIO MP3 SPORT 350 LT ABS E4"
  },
  {
      "id": 5383,
      "brandId": 600,
      "name": "PIAGGIO BEVERLYSPORTTOURING 350 ABS E4 POLICE"
  },
  {
      "id": 5454,
      "brandId": 600,
      "name": "MV AGUSTA F3 675"
  },
  {
      "id": 5467,
      "brandId": 600,
      "name": "MV AGUSTA B3 800 EAS ABS RR"
  },
  {
      "id": 5468,
      "brandId": 600,
      "name": "MV AGUSTA DRAGSTER EAS ABS"
  },
  {
      "id": 5469,
      "brandId": 600,
      "name": "MV AGUSTA DRAGSTER EAS ABS RR"
  },
  {
      "id": 5470,
      "brandId": 600,
      "name": "MV AGUSTA RIVALE EAS ABS"
  },
  {
      "id": 5471,
      "brandId": 600,
      "name": "MV AGUSTA STRADALE EAS ABS"
  },
  {
      "id": 5472,
      "brandId": 600,
      "name": "MV AGUSTA TURISMO VELOCE"
  },
  {
      "id": 5473,
      "brandId": 600,
      "name": "MV AGUSTA TURISMO VELOCEEDITION"
  },
  {
      "id": 5474,
      "brandId": 600,
      "name": "MV AGUSTA TURISMO VELOCE LUSSO"
  },
  {
      "id": 5475,
      "brandId": 600,
      "name": "MVAGUSTO F3 675 RC"
  },
  {
      "id": 5476,
      "brandId": 600,
      "name": "MV AGUSTA F3 800 RC"
  },
  {
      "id": 5477,
      "brandId": 600,
      "name": "MV AGUSTA BRUTALE 800 RR SCS"
  },
  {
      "id": 5478,
      "brandId": 600,
      "name": "MV AGUSTA BRUTALE 1000 RR"
  },
  {
      "id": 5528,
      "brandId": 600,
      "name": "APRILIA RSV4 1100"
  },
  {
      "id": 5651,
      "brandId": 600,
      "name": "RIALLI XY 150T-3"
  },
  {
      "id": 5660,
      "brandId": 600,
      "name": "BEYAZ BYZ2A KAPLAN (JB2S) ELEKTRIKLI"
  },
  {
      "id": 5670,
      "brandId": 600,
      "name": "POLARIS SPORTSMAN 570 EFI"
  },
  {
      "id": 5671,
      "brandId": 600,
      "name": "POLARIS SPORTSMAN 570 EFI EPS"
  },
  {
      "id": 5673,
      "brandId": 600,
      "name": "POLARIS SPORTSMAN XP 1000 EPS"
  },
  {
      "id": 5674,
      "brandId": 600,
      "name": "POLARIS SCRAMBLER XP 1000 EPS"
  },
  {
      "id": 5675,
      "brandId": 600,
      "name": "POLARIS SPORTSMAN 570 EFI TOURING"
  },
  {
      "id": 5676,
      "brandId": 600,
      "name": "POLARIS TOURING XP 1000 EPS"
  },
  {
      "id": 5681,
      "brandId": 600,
      "name": "POLARIS SPORTSMAN 570 EFI TOURING EPS"
  },
  {
      "id": 5682,
      "brandId": 600,
      "name": "IPS POLARIS SPORTSMAN 850 TOURING EPS"
  },
  {
      "id": 5891,
      "brandId": 600,
      "name": "YUAN YA100-7"
  },
  {
      "id": 5975,
      "brandId": 600,
      "name": "HSUN HS 150 T3"
  },
  {
      "id": 6002,
      "brandId": 600,
      "name": "MOTOZEUS MS 150-7"
  },
  {
      "id": 6003,
      "brandId": 600,
      "name": "MOTOZEUS MS 150-70"
  },
  {
      "id": 6005,
      "brandId": 600,
      "name": "YUKI SCRAMBLER 125 (ZY125-15A)"
  },
  {
      "id": 6006,
      "brandId": 600,
      "name": "YUKI LUPO K 125 SCOOTER"
  },
  {
      "id": 6007,
      "brandId": 600,
      "name": "YUKI LUPO E 125 EFI"
  },
  {
      "id": 6601,
      "brandId": 600,
      "name": "KOBY L2E ELEKTRIKLI"
  },
  {
      "id": 6651,
      "brandId": 600,
      "name": "REGAL RAPTOR DADDYW DD250E-9"
  },
  {
      "id": 6751,
      "brandId": 600,
      "name": "LANYING JJ 150T-5"
  },
  {
      "id": 6775,
      "brandId": 600,
      "name": "TOMOTO HS 150T-2 UC TEKERLI"
  },
  {
      "id": 6800,
      "brandId": 600,
      "name": "YIBEN YB 125T-2"
  },
  {
      "id": 6801,
      "brandId": 600,
      "name": "YIBEN YB50QT-3"
  },
  {
      "id": 6825,
      "brandId": 600,
      "name": "XINGYANG XY 500 UE (DORT TEKERLI)"
  },
  {
      "id": 6826,
      "brandId": 600,
      "name": "XINGYANG XY 500 UEL (DORT TEKERLI)"
  },
  {
      "id": 6851,
      "brandId": 600,
      "name": "PIONEER QM200"
  },
  {
      "id": 6875,
      "brandId": 600,
      "name": "YIYING YY150T-10"
  },
  {
      "id": 6905,
      "brandId": 600,
      "name": "MOTOLUX CARGO 8800"
  },
  {
      "id": 6906,
      "brandId": 600,
      "name": "MOTOLUX CARGO 8800 i"
  },
  {
      "id": 6907,
      "brandId": 600,
      "name": "MOTOLUX CARGO 8800 I.S."
  },
  {
      "id": 6908,
      "brandId": 600,
      "name": "MOTOLUX TRANSIT 125 3 TEKER"
  },
  {
      "id": 6909,
      "brandId": 600,
      "name": "MOTOLUX TRANSIT S 125 3 TEKER"
  },
  {
      "id": 6910,
      "brandId": 600,
      "name": "MOTOLUX PIT0N 50 SCOOTER"
  },
  {
      "id": 6911,
      "brandId": 600,
      "name": "MOTOLUX ROSSI 50 CC SCOOTER"
  },
  {
      "id": 6912,
      "brandId": 600,
      "name": "ROSSI RS 125"
  },
  {
      "id": 6951,
      "brandId": 600,
      "name": "ETRIX SC S5 E-SCOOTER"
  },
  {
      "id": 6952,
      "brandId": 600,
      "name": "ETRIX SC S6 E-SCOOTER"
  },
  {
      "id": 7001,
      "brandId": 600,
      "name": "RENAULT TWIZY"
  },
  {
      "id": 7002,
      "brandId": 600,
      "name": "RENAULT TWIZY LIFE"
  },
  {
      "id": 7003,
      "brandId": 600,
      "name": "RENAULT TWIZY URBAN"
  },
  {
      "id": 7011,
      "brandId": 600,
      "name": "KUBA MY FORCE 2000N ELEKTRIKLI"
  },
  {
      "id": 7012,
      "brandId": 600,
      "name": "KUBA MY FORCE 4000E ELEKTRIKLI"
  },
  {
      "id": 7013,
      "brandId": 600,
      "name": "KUBA MY FORCE 6000E ELEKTRIKLI"
  },
  {
      "id": 7014,
      "brandId": 600,
      "name": "KUBA MY FORCE 8000E ELEKTRIKLI"
  },
  {
      "id": 7015,
      "brandId": 600,
      "name": "KUBA E-PIKAP 5000 ELEKTRIKLI"
  },
  {
      "id": 7016,
      "brandId": 600,
      "name": "KUBA E-PIKAP PLUS ELEKTRIKLI"
  },
  {
      "id": 7017,
      "brandId": 600,
      "name": "KUBA E-PIKAP 12000 ELEKTRIKLI"
  },
  {
      "id": 7018,
      "brandId": 600,
      "name": "KUBA GAZELLE (ELEKTRIKLI)"
  },
  {
      "id": 7019,
      "brandId": 600,
      "name": "KUBA EGE 50"
  },
  {
      "id": 7020,
      "brandId": 600,
      "name": "KUBA TRENDY 50 (B94)"
  },
  {
      "id": 7021,
      "brandId": 600,
      "name": "KUBA RUHA 125"
  },
  {
      "id": 7022,
      "brandId": 600,
      "name": "KUBA DRAGON 50"
  },
  {
      "id": 7023,
      "brandId": 600,
      "name": "KUBA EGE 100"
  },
  {
      "id": 7024,
      "brandId": 600,
      "name": "KUBA REIZ 50"
  },
  {
      "id": 7025,
      "brandId": 600,
      "name": "KUBA FIGHTER 50"
  },
  {
      "id": 7026,
      "brandId": 600,
      "name": "KUBA RIVA 50"
  },
  {
      "id": 7027,
      "brandId": 600,
      "name": "KUBA RTEISTER 50"
  },
  {
      "id": 7028,
      "brandId": 600,
      "name": "KUBA MATRIX 125"
  },
  {
      "id": 7029,
      "brandId": 600,
      "name": "KUBA MATRIX 150"
  },
  {
      "id": 7030,
      "brandId": 600,
      "name": "KUBA NIRVANA 150"
  },
  {
      "id": 7031,
      "brandId": 600,
      "name": "KUBA KARGO 150"
  },
  {
      "id": 7032,
      "brandId": 600,
      "name": "KUBA PIKAP 200"
  },
  {
      "id": 7033,
      "brandId": 600,
      "name": "KUBA PIKAP 200 S"
  },
  {
      "id": 7034,
      "brandId": 600,
      "name": "KUBA ZAHARA T82 (MATRIX 125)"
  },
  {
      "id": 7035,
      "brandId": 600,
      "name": "KUBA NIRVANA NRV 150 (MATRIX 150)"
  },
  {
      "id": 7036,
      "brandId": 600,
      "name": "KUBA TWISTER 50 (B94)"
  },
  {
      "id": 7037,
      "brandId": 600,
      "name": "KUBA TLV50 (DRAGON50)"
  },
  {
      "id": 7038,
      "brandId": 600,
      "name": "KUBA KM 125-6 PLUS"
  },
  {
      "id": 7039,
      "brandId": 600,
      "name": "KUBA POLLO"
  },
  {
      "id": 7040,
      "brandId": 600,
      "name": "KUBA TRENDY (GST5QT-18)"
  },
  {
      "id": 7041,
      "brandId": 600,
      "name": "KUBA PIKAP 200-MAX (SL150ZH)"
  },
  {
      "id": 7042,
      "brandId": 600,
      "name": "KUBA ROCCA 100"
  },
  {
      "id": 7043,
      "brandId": 600,
      "name": "KUBA X-BOSS"
  },
  {
      "id": 7044,
      "brandId": 600,
      "name": "KUBA KARGO-180"
  },
  {
      "id": 7045,
      "brandId": 600,
      "name": "KUBA KARGO-180 KABINLI"
  },
  {
      "id": 7051,
      "brandId": 600,
      "name": "DERBI ETX 150"
  },
  {
      "id": 7052,
      "brandId": 600,
      "name": "DERBI STX 150"
  },
  {
      "id": 7101,
      "brandId": 600,
      "name": "BOMBARDIER CANAM N SPYDER C 991"
  },
  {
      "id": 7102,
      "brandId": 600,
      "name": "BOMBARDIER ATV RENEGADE H 800"
  },
  {
      "id": 7103,
      "brandId": 600,
      "name": "BOMBARDIER CAN-AM SPYDER F3 1330 ACE"
  },
  {
      "id": 7104,
      "brandId": 600,
      "name": "CAN-AM SPYDER ROADSTER RT LIMITED 1330 A"
  },
  {
      "id": 7105,
      "brandId": 600,
      "name": "CAN-AM UTV MAVERICK 1000R TURBO X DS"
  },
  {
      "id": 7106,
      "brandId": 600,
      "name": "BOMBARDIER CAN-AM SPYDER F3-S"
  },
  {
      "id": 7107,
      "brandId": 600,
      "name": "BOMBARDIER CAN-AM SPYDER F3-S DAYTONA 500 EDI"
  },
  {
      "id": 7108,
      "brandId": 600,
      "name": "BOMBARDIER CAN-AM SPYDER F3-T"
  },
  {
      "id": 7109,
      "brandId": 600,
      "name": "BOMBARDIER CAN-AM SPYDER F3 LIMITED"
  },
  {
      "id": 7110,
      "brandId": 600,
      "name": "BRP CAN-AM SPYDER ROADSTER F3-S 1330 ACE"
  },
  {
      "id": 7111,
      "brandId": 600,
      "name": "BRP CAN-AM SPYDER RD RYKER 900 ACE INT"
  },
  {
      "id": 7112,
      "brandId": 600,
      "name": "BRP CAN-AM SPYDER ROADSTER F3T 1330 ACE SE6"
  },
  {
      "id": 7201,
      "brandId": 600,
      "name": "GILERA 200 VXR"
  },
  {
      "id": 7241,
      "brandId": 600,
      "name": "SANLG SL 150 T-9"
  },
  {
      "id": 7250,
      "brandId": 600,
      "name": "ROYAL EINFIELD DESERT STORM"
  },
  {
      "id": 7251,
      "brandId": 600,
      "name": "ROYAL EINFIELD BATTLE GREEN"
  },
  {
      "id": 7252,
      "brandId": 600,
      "name": "ROYAL EINFIELD CLASSIC 500"
  },
  {
      "id": 7253,
      "brandId": 600,
      "name": "ROYAL EINFIELD CLASSIC CROME"
  },
  {
      "id": 7254,
      "brandId": 600,
      "name": "ROYAL EINFIELD CONTITENTAL GT"
  },
  {
      "id": 7255,
      "brandId": 600,
      "name": "ROYAL EINFIELD LAGOON"
  },
  {
      "id": 7256,
      "brandId": 600,
      "name": "ROYAL EINFIELD SQUADRON BLUE"
  },
  {
      "id": 7257,
      "brandId": 600,
      "name": "ROYAL EINFIELD HIMALAYAN"
  },
  {
      "id": 7301,
      "brandId": 600,
      "name": "MOTOGUZZI STELVIO 1200 4V NTX"
  },
  {
      "id": 7302,
      "brandId": 600,
      "name": "MOTOGUZZI CALIFORNIA 1400 TOURING ABS"
  },
  {
      "id": 7303,
      "brandId": 600,
      "name": "MOTO GUZZI STONE 750"
  },
  {
      "id": 7304,
      "brandId": 600,
      "name": "MOTO GUZZI CALIFORNIA 1400 AUDACE ABS"
  },
  {
      "id": 7305,
      "brandId": 600,
      "name": "MOTO GUZZI CALIFORNIA 1400 ELDORADO ABS"
  },
  {
      "id": 7306,
      "brandId": 600,
      "name": "MOTO GUZZI CALIFORNIA 1400 CUSTOM ABS"
  },
  {
      "id": 7307,
      "brandId": 600,
      "name": "MOTO GUZZI V7 II SPECIAL 750"
  },
  {
      "id": 7308,
      "brandId": 600,
      "name": "MOTO GUZZI V7 II RACER 750"
  },
  {
      "id": 7309,
      "brandId": 600,
      "name": "MOTO GUZZI V7 II STONE 750"
  },
  {
      "id": 7310,
      "brandId": 600,
      "name": "MOTO GUZZI V7 STORNELLO 750"
  },
  {
      "id": 7311,
      "brandId": 600,
      "name": "MOTO GUZZI V9 ROAMER 850"
  },
  {
      "id": 7312,
      "brandId": 600,
      "name": "MOTO GUZZI V9 BOBBER 850"
  },
  {
      "id": 7313,
      "brandId": 600,
      "name": "MOTO GUZZI MGX 21 FLYING FORTESS"
  },
  {
      "id": 7314,
      "brandId": 600,
      "name": "MOTO GUZZI V7 III STONE 750"
  },
  {
      "id": 7315,
      "brandId": 600,
      "name": "MOTO GUZZI V7 III SPECIAL 750"
  },
  {
      "id": 7316,
      "brandId": 600,
      "name": "MOTO GUZZI V7 III RACER 750"
  },
  {
      "id": 7317,
      "brandId": 600,
      "name": "MOTO GUZZI V7 III 50 ANNIVERSARIO"
  },
  {
      "id": 7318,
      "brandId": 600,
      "name": "MOTO GUZZI V85 TT"
  },
  {
      "id": 7319,
      "brandId": 600,
      "name": "MOTO GUZZI V7 III CARBON DARK"
  },
  {
      "id": 7320,
      "brandId": 600,
      "name": "MOTO GUZZI MGX 21"
  },
  {
      "id": 7321,
      "brandId": 600,
      "name": "MOTO GUZZI V7 III STONE NIGHT PACK OS BRONZO"
  },
  {
      "id": 7322,
      "brandId": 600,
      "name": "MOTO GUZZI V7 III STONE S GRIGO SPORTIVO"
  },
  {
      "id": 7401,
      "brandId": 600,
      "name": "TRIUMPH THUNDERBIRD STORM"
  },
  {
      "id": 7402,
      "brandId": 600,
      "name": "TRIUMPH THUNDERBIRD"
  },
  {
      "id": 7403,
      "brandId": 600,
      "name": "TRIUMPH DAYTONA 675"
  },
  {
      "id": 7404,
      "brandId": 600,
      "name": "TRIUMPH DAYTONA 675 R"
  },
  {
      "id": 7405,
      "brandId": 600,
      "name": "TRIUMPH SPEED TRIPLE"
  },
  {
      "id": 7406,
      "brandId": 600,
      "name": "TRIUMPH SPEED TRIPLE R"
  },
  {
      "id": 7407,
      "brandId": 600,
      "name": "TRIUMPH STREET TRIPLE"
  },
  {
      "id": 7408,
      "brandId": 600,
      "name": "TRIUMPH STREET TRIPLE R"
  },
  {
      "id": 7409,
      "brandId": 600,
      "name": "TRIUMPH TIGER 800"
  },
  {
      "id": 7410,
      "brandId": 600,
      "name": "TRIUMPH TIGER EXPLORER"
  },
  {
      "id": 7411,
      "brandId": 600,
      "name": "TRIUMPH TIGER EXPLORER XC"
  },
  {
      "id": 7412,
      "brandId": 600,
      "name": "TRIUMPH TIGER SPORT"
  },
  {
      "id": 7413,
      "brandId": 600,
      "name": "TRIUMPH TROPHY"
  },
  {
      "id": 7414,
      "brandId": 600,
      "name": "TRIUMPH AMERICA"
  },
  {
      "id": 7415,
      "brandId": 600,
      "name": "TRIUMPH ROCKET III ROADSTER"
  },
  {
      "id": 7416,
      "brandId": 600,
      "name": "TRIUMPH ROCKET III TOURING"
  },
  {
      "id": 7417,
      "brandId": 600,
      "name": "TRIUMPH SPEEDMASTER"
  },
  {
      "id": 7418,
      "brandId": 600,
      "name": "TRIUMPH BONNEVILLE"
  },
  {
      "id": 7419,
      "brandId": 600,
      "name": "TRIUMPH BONNEVILLE T100"
  },
  {
      "id": 7420,
      "brandId": 600,
      "name": "TRIUMPH SCRAMBLER"
  },
  {
      "id": 7421,
      "brandId": 600,
      "name": "TRIUMPH THRUXTON"
  },
  {
      "id": 7422,
      "brandId": 600,
      "name": "TRIUMPH 800 XRX"
  },
  {
      "id": 7423,
      "brandId": 600,
      "name": "TRIUMPH TIGER 800 XCX"
  },
  {
      "id": 7424,
      "brandId": 600,
      "name": "TRIUMPH TIGER 800 XRT"
  },
  {
      "id": 7425,
      "brandId": 600,
      "name": "TRIUMPH TIGER 800 XCA"
  },
  {
      "id": 7426,
      "brandId": 600,
      "name": "TRIUMPH STREETTRIPLE 675 RX"
  },
  {
      "id": 7427,
      "brandId": 600,
      "name": "TRIUMPH AMERICA LT"
  },
  {
      "id": 7428,
      "brandId": 600,
      "name": "TRUIMPH THUNDERBIRD COMMANDER"
  },
  {
      "id": 7429,
      "brandId": 600,
      "name": "TRIUMPH THUNDERBIRD NIGHSTORM SE"
  },
  {
      "id": 7430,
      "brandId": 600,
      "name": "TRIUMPH BONNEVILLE SE"
  },
  {
      "id": 7431,
      "brandId": 600,
      "name": "TRIUMPH BONNEVILLE T100 BLACK"
  },
  {
      "id": 7432,
      "brandId": 600,
      "name": "TRIUMPH BONNEVILLE T100 SE"
  },
  {
      "id": 7433,
      "brandId": 600,
      "name": "TRIUMPH THRUXTON ACE"
  },
  {
      "id": 7434,
      "brandId": 600,
      "name": "TRIUMPH TIGER EXPLORER 1200 XCA"
  },
  {
      "id": 7435,
      "brandId": 600,
      "name": "TRIUMPH BONNEVILLE BOBBER"
  },
  {
      "id": 7436,
      "brandId": 600,
      "name": "TRIUMPH TIGER 800 XR"
  },
  {
      "id": 7437,
      "brandId": 600,
      "name": "TRIUMPH TIGER 800 XRX"
  },
  {
      "id": 7438,
      "brandId": 600,
      "name": "TRIUMPH TIGER EXPLORER 1200 XR"
  },
  {
      "id": 7439,
      "brandId": 600,
      "name": "TRIUMPH TIGER EXPLORER 1200 XRX"
  },
  {
      "id": 7440,
      "brandId": 600,
      "name": "TRIUMPH TIGER EXPLORER 1200 XCX"
  },
  {
      "id": 7441,
      "brandId": 600,
      "name": "TRIUMPH STREET TRIPLE S 800"
  },
  {
      "id": 7442,
      "brandId": 600,
      "name": "TRIUMPH STREET TRIPLE R 800"
  },
  {
      "id": 7443,
      "brandId": 600,
      "name": "TRIUMPH STREET TRIPLE RS 800"
  },
  {
      "id": 7444,
      "brandId": 600,
      "name": "TRIUMPH BONNEVILLE STREETWIN"
  },
  {
      "id": 7445,
      "brandId": 600,
      "name": "TRIUMPH BONNEVILLE STREET CUP"
  },
  {
      "id": 7446,
      "brandId": 600,
      "name": "TRIUMPH BONNEVILLE STREET SCRAMBLER"
  },
  {
      "id": 7447,
      "brandId": 600,
      "name": "TRIUMPH BONNEVILLE T120 ABS"
  },
  {
      "id": 7448,
      "brandId": 600,
      "name": "TRIUMPH THRUXTON 1200 ABS"
  },
  {
      "id": 7449,
      "brandId": 600,
      "name": "TRIUMPH THRUXTON 1200 R ABS"
  },
  {
      "id": 7450,
      "brandId": 600,
      "name": "TRIUMPH STREET TWIN"
  },
  {
      "id": 7451,
      "brandId": 600,
      "name": "TRIUMPH STREET CUP"
  },
  {
      "id": 7452,
      "brandId": 600,
      "name": "TRIUMPH STREET SCRAMBLER"
  },
  {
      "id": 7453,
      "brandId": 600,
      "name": "TRIUMPH BOBBER"
  },
  {
      "id": 7454,
      "brandId": 600,
      "name": "TRIUMPH TIGER EXPLORER 1200 XRT"
  },
  {
      "id": 7455,
      "brandId": 600,
      "name": "TRIUMPH BONNEVILLE BOBBER BLACK"
  },
  {
      "id": 7456,
      "brandId": 600,
      "name": "TRIUMPH BONNEVILLE SPEEDMASTER"
  },
  {
      "id": 7457,
      "brandId": 600,
      "name": "TRIUMPH BONNEVILLE T120 ACE"
  },
  {
      "id": 7458,
      "brandId": 600,
      "name": "TRIUMPH BONNEVILLE T120 DIAMOND"
  },
  {
      "id": 7459,
      "brandId": 600,
      "name": "TRIUMPH BONNEVILLE THRUXTON 1200 R"
  },
  {
      "id": 7460,
      "brandId": 600,
      "name": "TRIUMPH BONNEVILLE SCRAMBLER 1200  X"
  },
  {
      "id": 7461,
      "brandId": 600,
      "name": "TRIUMPH BONNEVILLE SCRAMBLER 1200 X SE"
  },
  {
      "id": 7462,
      "brandId": 600,
      "name": "TRIUMPH TIGER 900"
  },
  {
      "id": 7463,
      "brandId": 600,
      "name": "TRIUMPH TIGER 900 GT"
  },
  {
      "id": 7464,
      "brandId": 600,
      "name": "TRIUMPH 900 RALLY"
  },
  {
      "id": 7465,
      "brandId": 600,
      "name": "TRIUMPH TIGER 900 GT PRO"
  },
  {
      "id": 7466,
      "brandId": 600,
      "name": "TRIUMPH TIGER 900 RALLY PRO"
  },
  {
      "id": 7467,
      "brandId": 600,
      "name": "TRIUMPH TIGER 1200 XR"
  },
  {
      "id": 7468,
      "brandId": 600,
      "name": "TRIUMPH TIGER 1200 XRX"
  },
  {
      "id": 7469,
      "brandId": 600,
      "name": "TRIUMPH TIGER 1200 XCX"
  },
  {
      "id": 7470,
      "brandId": 600,
      "name": "TRIUMPH TIGER 1200 XRT"
  },
  {
      "id": 7471,
      "brandId": 600,
      "name": "TRIUMPH TIGER 1200 XCA"
  },
  {
      "id": 7472,
      "brandId": 600,
      "name": "TRIUMPH SPEED TRIPLE S"
  },
  {
      "id": 7473,
      "brandId": 600,
      "name": "TRIUMPH SPEED TRIPLE RS"
  },
  {
      "id": 7474,
      "brandId": 600,
      "name": "TRIUMPH DAYTONA MOTO2 765"
  },
  {
      "id": 7475,
      "brandId": 600,
      "name": "TRIUMPH BONNEVILLE T100 BUD EKINS EDITION"
  },
  {
      "id": 7476,
      "brandId": 600,
      "name": "TRIUMPH BONNEVILLE T120 BUD EKINS EDITION"
  },
  {
      "id": 7477,
      "brandId": 600,
      "name": "TRIUMPH THRUXTON 1200 RS"
  },
  {
      "id": 7478,
      "brandId": 600,
      "name": "TRIUMPH THRUXTON 1200 RS SHOWCASE"
  },
  {
      "id": 7479,
      "brandId": 600,
      "name": "TRIUMPH SCRAMBLER 1200 XC SHOWCASE"
  },
  {
      "id": 7480,
      "brandId": 600,
      "name": "TRIUMPH SCRAMBLER 1200 XC"
  },
  {
      "id": 7481,
      "brandId": 600,
      "name": "TRIUMPH SCRAMBLER 1200 XE"
  },
  {
      "id": 7482,
      "brandId": 600,
      "name": "TRIUMPH SCRAMBLER 1200 XE SHOWCASE"
  },
  {
      "id": 7483,
      "brandId": 600,
      "name": "TRIUMPH BONNEVILLE SPEED TWIN"
  },
  {
      "id": 7484,
      "brandId": 600,
      "name": "TRIUMPH ROCKET 3 GT"
  },
  {
      "id": 7485,
      "brandId": 600,
      "name": "TRIUMPH TIGER 1200 ALPINE EDITION"
  },
  {
      "id": 7486,
      "brandId": 600,
      "name": "TRIUMPH TIGER 1200 DESERT EDITION"
  },
  {
      "id": 7487,
      "brandId": 600,
      "name": "TRIUMPH SCRAMBLER 1200 XE BOND EDITION"
  },
  {
      "id": 7488,
      "brandId": 600,
      "name": "TRIUMPH BONNEVILLE BOBBER TFC"
  },
  {
      "id": 7525,
      "brandId": 600,
      "name": "LINTEX FUXXIN 125 ATV"
  },
  {
      "id": 7551,
      "brandId": 600,
      "name": "FENGCHI FC125 36A"
  },
  {
      "id": 7601,
      "brandId": 600,
      "name": "ARCTIC CAT 1000 ATV"
  },
  {
      "id": 7602,
      "brandId": 600,
      "name": "ARCTIC CAT 700 ATV"
  },
  {
      "id": 7603,
      "brandId": 600,
      "name": "ARCTIC CAT 450 4x4 ATV"
  },
  {
      "id": 7604,
      "brandId": 600,
      "name": "ARCTIC CAT 450i ATV"
  },
  {
      "id": 7605,
      "brandId": 600,
      "name": "WILD CAT 1000 ATV"
  },
  {
      "id": 7651,
      "brandId": 600,
      "name": "PLANET 7"
  },
  {
      "id": 7661,
      "brandId": 600,
      "name": "SUPER SOCO TS"
  },
  {
      "id": 7662,
      "brandId": 600,
      "name": "SUPER SOCO TC"
  },
  {
      "id": 7663,
      "brandId": 600,
      "name": "SUPER SOCO TC MAX"
  },
  {
      "id": 7664,
      "brandId": 600,
      "name": "SUPER SOCO CUX"
  },
  {
      "id": 7702,
      "brandId": 600,
      "name": "DORADO POSEDION V5"
  },
  {
      "id": 7703,
      "brandId": 600,
      "name": "DORADO CORVUS V3"
  },
  {
      "id": 7775,
      "brandId": 600,
      "name": "SANYA SY 125-11"
  },
  {
      "id": 7801,
      "brandId": 600,
      "name": "LINHAI LH 400 ATV"
  },
  {
      "id": 7802,
      "brandId": 600,
      "name": "LINHAI LH 700 ATV"
  },
  {
      "id": 7825,
      "brandId": 600,
      "name": "SHINARI TAIPAR 100"
  },
  {
      "id": 7826,
      "brandId": 600,
      "name": "SHINARI MONETTI 150"
  },
  {
      "id": 7851,
      "brandId": 600,
      "name": "KENBO YX 125"
  },
  {
      "id": 7875,
      "brandId": 600,
      "name": "H-MOTO KUAYENG QH 100-2A1"
  },
  {
      "id": 7901,
      "brandId": 600,
      "name": "SMC JMAX 700 ATV"
  },
  {
      "id": 7902,
      "brandId": 600,
      "name": "SMC JUMBO 300 ATV"
  },
  {
      "id": 7911,
      "brandId": 600,
      "name": "SILENCE S02 L3e ELEKTRIKLI SCOOTER"
  },
  {
      "id": 7912,
      "brandId": 600,
      "name": "SILENCE S03 L3e ELEKTRIKLI SCOOTER"
  },
  {
      "id": 7913,
      "brandId": 600,
      "name": "SILENCE S01 STD ELECTRIC SCOOTER"
  },
  {
      "id": 7914,
      "brandId": 600,
      "name": "SILENCE S02HS ELECTRIC SCOOTER"
  },
  {
      "id": 7915,
      "brandId": 600,
      "name": "SILENCE S02LS 1PL ELECTRIC SCOOTER"
  },
  {
      "id": 7916,
      "brandId": 600,
      "name": "SILENCE S02LS 2PL ELECTRIC SCOOTER"
  },
  {
      "id": 7951,
      "brandId": 600,
      "name": "BAJAJ BOXER 150"
  },
  {
      "id": 7952,
      "brandId": 600,
      "name": "BAJAJ PULSAR 200 NS"
  },
  {
      "id": 7953,
      "brandId": 600,
      "name": "BAJAJ DISCOVER 125 ST"
  },
  {
      "id": 7954,
      "brandId": 600,
      "name": "BAJAJ PULSAR RS 200"
  },
  {
      "id": 7955,
      "brandId": 600,
      "name": "BAJAJ PULSAR DISCOVER 150F"
  },
  {
      "id": 7956,
      "brandId": 600,
      "name": "BAJAJ DISCOVER 150S"
  },
  {
      "id": 7958,
      "brandId": 600,
      "name": "BAJAJ QUTE QCAR (DORT TEKERLI)"
  },
  {
      "id": 7959,
      "brandId": 600,
      "name": "BAJAJ PULSAR NS150"
  },
  {
      "id": 7960,
      "brandId": 600,
      "name": "BAJAJA PULSAR AS150"
  },
  {
      "id": 7961,
      "brandId": 600,
      "name": "BAJAJ AVENGER STREET 150"
  },
  {
      "id": 7962,
      "brandId": 600,
      "name": "BAJAJ PULSAR NS200 E4"
  },
  {
      "id": 7963,
      "brandId": 600,
      "name": "BAJAJ PULSAR RS200 E4"
  },
  {
      "id": 7964,
      "brandId": 600,
      "name": "BAJAJ DOMINAR 400 E4"
  },
  {
      "id": 7965,
      "brandId": 600,
      "name": "BAJAJ PULSAR NS160"
  },
  {
      "id": 7966,
      "brandId": 600,
      "name": "BAJAJ V15"
  },
  {
      "id": 7967,
      "brandId": 600,
      "name": "BAJAJ QUTE QCAR (DORT TEKERLI) (BINEK)"
  },
  {
      "id": 7968,
      "brandId": 600,
      "name": "BAJAJ QOUTE QCAR (DORT TEKERLI) (TICARI)"
  },
  {
      "id": 7969,
      "brandId": 600,
      "name": "BAJAJ PULSAR NS 125"
  },
  {
      "id": 7970,
      "brandId": 600,
      "name": "BAJAJ DOMINAR D 400 UG"
  },
  {
      "id": 8001,
      "brandId": 600,
      "name": "LML STAR 125"
  },
  {
      "id": 8002,
      "brandId": 600,
      "name": "LML STAR 150"
  },
  {
      "id": 8003,
      "brandId": 600,
      "name": "LML STAR 200"
  },
  {
      "id": 8025,
      "brandId": 600,
      "name": "KAISER KS 200"
  },
  {
      "id": 8026,
      "brandId": 600,
      "name": "KAISAR KS 125-3"
  },
  {
      "id": 8051,
      "brandId": 600,
      "name": "GOUPIL G3 DAMPERLI KASA DORT TEKER ELEKTRIKLI"
  },
  {
      "id": 8075,
      "brandId": 600,
      "name": "DAELIM DAYSTAR 250"
  },
  {
      "id": 8125,
      "brandId": 600,
      "name": "DI BLASI R7E"
  },
  {
      "id": 8140,
      "brandId": 600,
      "name": "JINCHENG JC 110"
  },
  {
      "id": 8150,
      "brandId": 600,
      "name": "REGAL RAPTOR DAYTONA DD250E 6C"
  },
  {
      "id": 8201,
      "brandId": 600,
      "name": "GASGAS EC 250F"
  },
  {
      "id": 8202,
      "brandId": 600,
      "name": "GASGAS TXT 125 PRO"
  },
  {
      "id": 8203,
      "brandId": 600,
      "name": "GASGAS TXT 250 PRO"
  },
  {
      "id": 8204,
      "brandId": 600,
      "name": "GASGAS TXT 250 PRO RACING"
  },
  {
      "id": 8205,
      "brandId": 600,
      "name": "GASGAS TXT 300 PRO"
  },
  {
      "id": 8206,
      "brandId": 600,
      "name": "GASGAS TXT 300 PRO RACING"
  },
  {
      "id": 8207,
      "brandId": 600,
      "name": "GASGAS TXT RANDONNE 125"
  },
  {
      "id": 8208,
      "brandId": 600,
      "name": "GASGAS EC 250 STANDART"
  },
  {
      "id": 8209,
      "brandId": 600,
      "name": "GASGAS EC 300 STANDART"
  },
  {
      "id": 8210,
      "brandId": 600,
      "name": "GASGAS EC 125 RACING"
  },
  {
      "id": 8211,
      "brandId": 600,
      "name": "GASGAS EC 250 RACING E START"
  },
  {
      "id": 8212,
      "brandId": 600,
      "name": "GASGAS EC 300 RACING E START"
  },
  {
      "id": 8213,
      "brandId": 600,
      "name": "GASGAS EC 250 F RACING"
  },
  {
      "id": 8214,
      "brandId": 600,
      "name": "GASGAS EC 450 F RACING"
  },
  {
      "id": 8215,
      "brandId": 600,
      "name": "GASGAS EC30 303 ENDUCROSS"
  },
  {
      "id": 8216,
      "brandId": 600,
      "name": "GASGAS TRIAL CONTACT"
  },
  {
      "id": 8225,
      "brandId": 600,
      "name": "HERO GLAMOUR"
  },
  {
      "id": 8226,
      "brandId": 600,
      "name": "HERO PLEASURE"
  },
  {
      "id": 8227,
      "brandId": 600,
      "name": "HERO THRILLER"
  },
  {
      "id": 8228,
      "brandId": 600,
      "name": "HERO DASH LX"
  },
  {
      "id": 8229,
      "brandId": 600,
      "name": "HERO DASH VX"
  },
  {
      "id": 8230,
      "brandId": 600,
      "name": "HERO DUET LX"
  },
  {
      "id": 8231,
      "brandId": 600,
      "name": "HERO DUET VX"
  },
  {
      "id": 8232,
      "brandId": 600,
      "name": "HERO T SPORT 150"
  },
  {
      "id": 8233,
      "brandId": 600,
      "name": "HERO HUNK 150"
  },
  {
      "id": 8234,
      "brandId": 600,
      "name": "HERO KARIZMA R"
  },
  {
      "id": 8235,
      "brandId": 600,
      "name": "HERO PLEASURE 110"
  },
  {
      "id": 8236,
      "brandId": 600,
      "name": "HERO DUET 110"
  },
  {
      "id": 8237,
      "brandId": 600,
      "name": "HERO DASH 110"
  },
  {
      "id": 8238,
      "brandId": 600,
      "name": "HERO DUET 125"
  },
  {
      "id": 8239,
      "brandId": 600,
      "name": "HERO DASH 125"
  },
  {
      "id": 8240,
      "brandId": 600,
      "name": "HERO IGNITORE 125"
  },
  {
      "id": 8241,
      "brandId": 600,
      "name": "HERO HUNK 200R ABS"
  },
  {
      "id": 8242,
      "brandId": 600,
      "name": "HERO PLEASURE+"
  },
  {
      "id": 8243,
      "brandId": 600,
      "name": "HERO DASH 110i"
  },
  {
      "id": 8244,
      "brandId": 600,
      "name": "HERO DUET 110i"
  },
  {
      "id": 8245,
      "brandId": 600,
      "name": "HERO XPULSE 200"
  },
  {
      "id": 8246,
      "brandId": 600,
      "name": "HERO XPULSE 200T"
  },
  {
      "id": 8250,
      "brandId": 600,
      "name": "DAYUN TOLEDO DY110-2"
  },
  {
      "id": 8251,
      "brandId": 600,
      "name": "DAYUN DY 125"
  },
  {
      "id": 8270,
      "brandId": 600,
      "name": "ERSI ES 125"
  },
  {
      "id": 8275,
      "brandId": 600,
      "name": "ERBIS ER 100 ASSOS"
  },
  {
      "id": 8285,
      "brandId": 600,
      "name": "TGB FCC 250 ATV"
  },
  {
      "id": 8286,
      "brandId": 600,
      "name": "TGB FCC 325 ATV"
  },
  {
      "id": 8310,
      "brandId": 600,
      "name": "QUADRO 350S"
  },
  {
      "id": 8311,
      "brandId": 600,
      "name": "QUADRO 4"
  },
  {
      "id": 8312,
      "brandId": 600,
      "name": "QUADRO QV4"
  },
  {
      "id": 8313,
      "brandId": 600,
      "name": "QUADRO QV3"
  },
  {
      "id": 8314,
      "brandId": 600,
      "name": "QOODER OXYGEN L3 ELECTRIC SCOOTER"
  },
  {
      "id": 8315,
      "brandId": 600,
      "name": "QOODER QV4 TODS"
  },
  {
      "id": 8325,
      "brandId": 600,
      "name": "ITALJET DRAGSTER 125 CBS"
  },
  {
      "id": 8326,
      "brandId": 600,
      "name": "ITALJET DRAGSTER 200 ABS"
  },
  {
      "id": 8340,
      "brandId": 600,
      "name": "INDIAN CHIEF CLASSIC"
  },
  {
      "id": 8341,
      "brandId": 600,
      "name": "INDIAN CHIEF VINTAGE"
  },
  {
      "id": 8342,
      "brandId": 600,
      "name": "INDIAN CHIEFTAN"
  },
  {
      "id": 8343,
      "brandId": 600,
      "name": "INDIAN SCOUT"
  },
  {
      "id": 8344,
      "brandId": 600,
      "name": "INDIAN ROADMASTER"
  },
  {
      "id": 8345,
      "brandId": 600,
      "name": "INDIAN CHIEF DARK HOUSE"
  },
  {
      "id": 8346,
      "brandId": 600,
      "name": "INDIAN DARKHOUSE"
  },
  {
      "id": 8371,
      "brandId": 600,
      "name": "VICTORY CROSS COUNTRY"
  },
  {
      "id": 8372,
      "brandId": 600,
      "name": "VICTORY VISION TOUR"
  },
  {
      "id": 8373,
      "brandId": 600,
      "name": "VICTORY VISION"
  },
  {
      "id": 8374,
      "brandId": 600,
      "name": "VICTORY CROSS COUNTRY LE"
  },
  {
      "id": 8375,
      "brandId": 600,
      "name": "VICTORY  GUNNER"
  },
  {
      "id": 8376,
      "brandId": 600,
      "name": "VICTORY HAMMER 8-BALL"
  },
  {
      "id": 8377,
      "brandId": 600,
      "name": "VICTORY HIGHBALL"
  },
  {
      "id": 8378,
      "brandId": 600,
      "name": "VICTORY MAGNUM"
  },
  {
      "id": 8379,
      "brandId": 600,
      "name": "VICTORY NESS MAGNUM"
  },
  {
      "id": 8380,
      "brandId": 600,
      "name": "VICTORY VEGAS 8-BALL"
  },
  {
      "id": 8381,
      "brandId": 600,
      "name": "VICTORY CROSS COUNTRY TOUR"
  },
  {
      "id": 8382,
      "brandId": 600,
      "name": "VICTORY MAGNUM X-1"
  },
  {
      "id": 8401,
      "brandId": 600,
      "name": "DAELIM S3 ADVANCE 250"
  },
  {
      "id": 8402,
      "brandId": 600,
      "name": "DAELIM VJF ROADWIN 250R"
  },
  {
      "id": 8403,
      "brandId": 600,
      "name": "DAELIM DART 125"
  },
  {
      "id": 8404,
      "brandId": 600,
      "name": "DAELIM B-BONE"
  },
  {
      "id": 8405,
      "brandId": 600,
      "name": "DAELIM AROMA"
  },
  {
      "id": 8406,
      "brandId": 600,
      "name": "DAELIM BEAGLE"
  },
  {
      "id": 8407,
      "brandId": 600,
      "name": "DAELIM S3 ADVANCE 250 ABS"
  },
  {
      "id": 8408,
      "brandId": 600,
      "name": "DAELIM DAYSTAR 250 ABS"
  },
  {
      "id": 8451,
      "brandId": 600,
      "name": "TVS NEO X3i"
  },
  {
      "id": 8452,
      "brandId": 600,
      "name": "TVS WEGO 110"
  },
  {
      "id": 8453,
      "brandId": 600,
      "name": "TVS JUPITER"
  },
  {
      "id": 8454,
      "brandId": 600,
      "name": "TVS ZEST 110"
  },
  {
      "id": 8455,
      "brandId": 600,
      "name": "TVS SCOOTY PEP+"
  },
  {
      "id": 8456,
      "brandId": 600,
      "name": "TVS JUPITER ZX 110"
  },
  {
      "id": 8457,
      "brandId": 600,
      "name": "TVS RTR APACHE 180"
  },
  {
      "id": 8458,
      "brandId": 600,
      "name": "TVS SCOOTY ZEST"
  },
  {
      "id": 8459,
      "brandId": 600,
      "name": "TVS RTR APACHE 150"
  },
  {
      "id": 8460,
      "brandId": 600,
      "name": "TVS APACHE RTR 200FI"
  },
  {
      "id": 8461,
      "brandId": 600,
      "name": "TVS JUPITER 110 FI E4"
  },
  {
      "id": 8462,
      "brandId": 600,
      "name": "TVS APACHE RTR 160 FI"
  },
  {
      "id": 8463,
      "brandId": 600,
      "name": "TVS WEGO 110 FI"
  },
  {
      "id": 8475,
      "brandId": 600,
      "name": "PUMAREX AMAZON 150  ATV"
  },
  {
      "id": 8485,
      "brandId": 600,
      "name": "KRAL ATIRA KR02 ELEKTRIKLI"
  },
  {
      "id": 8486,
      "brandId": 600,
      "name": "KRAL TETA KR18 ELEKTRIKLI"
  },
  {
      "id": 8487,
      "brandId": 600,
      "name": "KRAL ZETA KR24 ELEKTRIKLI"
  },
  {
      "id": 8488,
      "brandId": 600,
      "name": "KRAL PITA KR19 ELEKTRIKLI"
  },
  {
      "id": 8489,
      "brandId": 600,
      "name": "KRAL AVA KR 25 ELEKTRIKLI"
  },
  {
      "id": 8490,
      "brandId": 600,
      "name": "KRAL VARUNA KR14 ELEKTRIKLI"
  },
  {
      "id": 8491,
      "brandId": 600,
      "name": "KRAL VIVA KR17 ELEKTRIKLI"
  },
  {
      "id": 8492,
      "brandId": 600,
      "name": "KRAL VERSO KR26 ELEKTRIKLI"
  },
  {
      "id": 8493,
      "brandId": 600,
      "name": "KRAL MERLIN KR03 ELEKTRIKLI"
  },
  {
      "id": 8494,
      "brandId": 600,
      "name": "KRAL LEONIS KR22 ELEKTRIKLI"
  },
  {
      "id": 8495,
      "brandId": 600,
      "name": "KRAL GUNES KR05 ELEKTRIKLI"
  },
  {
      "id": 8496,
      "brandId": 600,
      "name": "KRAL VEGA KR08 ELEKTRIKLI"
  },
  {
      "id": 8497,
      "brandId": 600,
      "name": "KRAL VELLO KR21 ELEKTRIKLI"
  },
  {
      "id": 8498,
      "brandId": 600,
      "name": "KRAL BETA KR20 ELEKTRIKLI"
  },
  {
      "id": 8499,
      "brandId": 600,
      "name": "KRAL  SEDNA KR16 ELEKTRIKLI"
  },
  {
      "id": 8500,
      "brandId": 600,
      "name": "KRAL LIMA KR23 ELEKTRIKLI"
  },
  {
      "id": 8501,
      "brandId": 600,
      "name": "KRAL NOVA KR06 ELEKTRIKLI"
  },
  {
      "id": 8502,
      "brandId": 600,
      "name": "KRAL NOVA KR07 ELEKTRIKLI"
  },
  {
      "id": 8503,
      "brandId": 600,
      "name": "KRAL EROS KR10 ELEKRIKLI"
  },
  {
      "id": 8504,
      "brandId": 600,
      "name": "KRAL TITAN KR04 ELEKTRIKLI"
  },
  {
      "id": 8505,
      "brandId": 600,
      "name": "KRAL KELVIN KR06-2 ELEKTRIKLI"
  },
  {
      "id": 8506,
      "brandId": 600,
      "name": "KRAL KELVIN KR07-2 ELEKTRIKLI"
  },
  {
      "id": 8507,
      "brandId": 600,
      "name": "KRAL FIZAN KR07-2 ELEKTRIKLI"
  },
  {
      "id": 8508,
      "brandId": 600,
      "name": "KRAL VESTA KR11 ELEKTRIKLI"
  },
  {
      "id": 8509,
      "brandId": 600,
      "name": "KRAL VESTA KR12 ELEKTRIKLI"
  },
  {
      "id": 8510,
      "brandId": 600,
      "name": "KRAL TRUVA KR13 ELEKTRIKLI"
  },
  {
      "id": 8511,
      "brandId": 600,
      "name": "KRAL TITUS KR200"
  },
  {
      "id": 8512,
      "brandId": 600,
      "name": "KRAL ARGON KR150A-7 ATV"
  },
  {
      "id": 8513,
      "brandId": 600,
      "name": "KRAL KAMA LX200 ATV"
  },
  {
      "id": 8514,
      "brandId": 600,
      "name": "KRAL KR500 REGOR ATV"
  },
  {
      "id": 8515,
      "brandId": 600,
      "name": "KRAL TORRO KR1000 ATV"
  },
  {
      "id": 8516,
      "brandId": 600,
      "name": "KRAL NOSTALJI KR100 A"
  },
  {
      "id": 8517,
      "brandId": 600,
      "name": "KRAL EFE KR100-7"
  },
  {
      "id": 8518,
      "brandId": 600,
      "name": "KRAL HILAL KR100-16"
  },
  {
      "id": 8519,
      "brandId": 600,
      "name": "KRAL HILAL KR130-16"
  },
  {
      "id": 8520,
      "brandId": 600,
      "name": "KRAL SEYYAH KR100 B"
  },
  {
      "id": 8521,
      "brandId": 600,
      "name": "KRAL REIS KR100-2"
  },
  {
      "id": 8522,
      "brandId": 600,
      "name": "KRAL REIS KR125-7"
  },
  {
      "id": 8523,
      "brandId": 600,
      "name": "KRAL AGA KR100-2A"
  },
  {
      "id": 8524,
      "brandId": 600,
      "name": "KRAL AGA KR125-7D"
  },
  {
      "id": 8525,
      "brandId": 600,
      "name": "KRAL ARES KR100-2A"
  },
  {
      "id": 8526,
      "brandId": 600,
      "name": "KRAL ARES KR125-7D"
  },
  {
      "id": 8527,
      "brandId": 600,
      "name": "KRAL KAPTAN KR150-G"
  },
  {
      "id": 8528,
      "brandId": 600,
      "name": "KRAL PLUTON YB100T-22"
  },
  {
      "id": 8529,
      "brandId": 600,
      "name": "KRAL EPICO KR41 ELEKTRIKLI"
  },
  {
      "id": 8530,
      "brandId": 600,
      "name": "KRAL ASTEROIT KR24 ELEKRIKLI"
  },
  {
      "id": 8531,
      "brandId": 600,
      "name": "KRAL GETA 5000 KR43 ATV"
  },
  {
      "id": 8532,
      "brandId": 600,
      "name": "KRAL TRISTE 4500 KR39 ATV"
  },
  {
      "id": 8533,
      "brandId": 600,
      "name": "KRAL INO 250 KR30 ATV"
  },
  {
      "id": 8534,
      "brandId": 600,
      "name": "KRAL REY KR11 ELEKTRIKLI"
  },
  {
      "id": 8535,
      "brandId": 600,
      "name": "KRAL VESTA KR12X ELEKTRIKLI"
  },
  {
      "id": 8536,
      "brandId": 600,
      "name": "KRAL TRUVA KR13X EELKTRIKLI"
  },
  {
      "id": 8537,
      "brandId": 600,
      "name": "KRAL TITUS KR200X"
  },
  {
      "id": 8538,
      "brandId": 600,
      "name": "KRAL GRANDE 5000 KR39 ELEKTRIKLI"
  },
  {
      "id": 8539,
      "brandId": 600,
      "name": "KRAL BELLO 6000 KR37 ELEKTRIKLI"
  },
  {
      "id": 8540,
      "brandId": 600,
      "name": "KRAL KR40 GRANDE-6 7000"
  },
  {
      "id": 8541,
      "brandId": 600,
      "name": "KRAL VESTA KR12 5000"
  },
  {
      "id": 8601,
      "brandId": 600,
      "name": "HUSQVARNA TE 125"
  },
  {
      "id": 8602,
      "brandId": 600,
      "name": "HUSQVARNA TE 300"
  },
  {
      "id": 8603,
      "brandId": 600,
      "name": "HUSQVARNA FE 250"
  },
  {
      "id": 8604,
      "brandId": 600,
      "name": "HUSQVARNA FE 350"
  },
  {
      "id": 8605,
      "brandId": 600,
      "name": "HUSQVARNA FE 450"
  },
  {
      "id": 8606,
      "brandId": 600,
      "name": "HUSQVARNA FE 501"
  },
  {
      "id": 8607,
      "brandId": 600,
      "name": "HUSQVARNA TC 85"
  },
  {
      "id": 8608,
      "brandId": 600,
      "name": "HUSQVARNA TC 125"
  },
  {
      "id": 8609,
      "brandId": 600,
      "name": "HUSQVARNA FC 250"
  },
  {
      "id": 8610,
      "brandId": 600,
      "name": "HUSQVARNA FC 350"
  },
  {
      "id": 8611,
      "brandId": 600,
      "name": "HUSQVARNA FC 450"
  },
  {
      "id": 8612,
      "brandId": 600,
      "name": "HUSQVARNA FS 450"
  },
  {
      "id": 8613,
      "brandId": 600,
      "name": "HUSQVARNA TE 85"
  },
  {
      "id": 8614,
      "brandId": 600,
      "name": "HUSQVARNA 701 SUPERMOTO"
  },
  {
      "id": 8615,
      "brandId": 600,
      "name": "HUSQVARNA 701 ENDURO"
  },
  {
      "id": 8616,
      "brandId": 600,
      "name": "HUSQAVARNA TC 50"
  },
  {
      "id": 8617,
      "brandId": 600,
      "name": "HUSQVARNA TC 65"
  },
  {
      "id": 8618,
      "brandId": 600,
      "name": "HUSQVARNA VITPILEN 401"
  },
  {
      "id": 8619,
      "brandId": 600,
      "name": "HUSQVARNA VITPILEN 701"
  },
  {
      "id": 8620,
      "brandId": 600,
      "name": "HUSQVARNA SVARTPILEN 401"
  },
  {
      "id": 8621,
      "brandId": 600,
      "name": "HUSQVARNA TE 150"
  },
  {
      "id": 8622,
      "brandId": 600,
      "name": "HUSQVARNA TE 250i"
  },
  {
      "id": 8623,
      "brandId": 600,
      "name": "HUSQVARNA TE 300i"
  },
  {
      "id": 8624,
      "brandId": 600,
      "name": "HUSQVARNA TX 125"
  },
  {
      "id": 8625,
      "brandId": 600,
      "name": "HUSQVARNA SVARTPILEN 701"
  },
  {
      "id": 8626,
      "brandId": 600,
      "name": "HUSQAVARNA TC 85 SX"
  },
  {
      "id": 8627,
      "brandId": 600,
      "name": "HUSQVARNA 701 ENDURO LR"
  },
  {
      "id": 8628,
      "brandId": 600,
      "name": "HUSQVARNA TE 150i"
  },
  {
      "id": 8629,
      "brandId": 600,
      "name": "HUSQVARNA SVARTPILEN 250"
  },
  {
      "id": 8651,
      "brandId": 600,
      "name": "CELIK SK125"
  },
  {
      "id": 8652,
      "brandId": 600,
      "name": "CELIK XGJ 100-7A"
  },
  {
      "id": 8690,
      "brandId": 600,
      "name": "YELLOW ROCK 125 BT"
  },
  {
      "id": 8691,
      "brandId": 600,
      "name": "YELLOW ROCK 150 TQ 4E"
  },
  {
      "id": 8692,
      "brandId": 600,
      "name": "YELLOW ROCK CQ 150T-2"
  },
  {
      "id": 8693,
      "brandId": 600,
      "name": "YELLOW ROCK CROWN 150"
  },
  {
      "id": 8701,
      "brandId": 600,
      "name": "MARANTA ARDOUR 150 SCOOTER"
  },
  {
      "id": 8702,
      "brandId": 600,
      "name": "MARANTA LUCATI 100"
  },
  {
      "id": 8703,
      "brandId": 600,
      "name": "MARANTA TERRA 100"
  },
  {
      "id": 8704,
      "brandId": 600,
      "name": "MARANTA MONETTI 150"
  },
  {
      "id": 8705,
      "brandId": 600,
      "name": "MARANTA SAFIR 100"
  },
  {
      "id": 8706,
      "brandId": 600,
      "name": "MARANTA BOSS 100"
  },
  {
      "id": 8707,
      "brandId": 600,
      "name": "MARANTA BOSS 125"
  },
  {
      "id": 8708,
      "brandId": 600,
      "name": "MARANTA BOSS 125 LUX"
  },
  {
      "id": 8709,
      "brandId": 600,
      "name": "MARANTA NOVA 125"
  },
  {
      "id": 8710,
      "brandId": 600,
      "name": "MARANTA APEX 200"
  },
  {
      "id": 8711,
      "brandId": 600,
      "name": "MARANTA THUNDER 250"
  },
  {
      "id": 8725,
      "brandId": 600,
      "name": "ZELSUN MS100-16"
  },
  {
      "id": 8726,
      "brandId": 600,
      "name": "ZELSUN MS100-26"
  },
  {
      "id": 8727,
      "brandId": 600,
      "name": "ZELSUN MS125-7"
  },
  {
      "id": 8728,
      "brandId": 600,
      "name": "ZELSUN MS150-6"
  },
  {
      "id": 8729,
      "brandId": 600,
      "name": "ZELSUN MS139-9"
  },
  {
      "id": 8730,
      "brandId": 600,
      "name": "ZELSUN MS250-70"
  },
  {
      "id": 8731,
      "brandId": 600,
      "name": "ZELSUN MS01-2000 ELEKTRIKLI"
  },
  {
      "id": 8732,
      "brandId": 600,
      "name": "ZELSUN MS02-3000 ELEKTRIKLI"
  },
  {
      "id": 8733,
      "brandId": 600,
      "name": "ZELSUN MS03-3000 ELEKTRIKLI"
  },
  {
      "id": 8734,
      "brandId": 600,
      "name": "ZELSUN MS04-2000 ELEKTRIKLI"
  },
  {
      "id": 8735,
      "brandId": 600,
      "name": "ZELSUN MS05-3000 ELEKTRIKLI"
  },
  {
      "id": 8736,
      "brandId": 600,
      "name": "ZELSUN ZS100-32"
  },
  {
      "id": 8755,
      "brandId": 600,
      "name": "ZEALSUN 250 R"
  },
  {
      "id": 8775,
      "brandId": 600,
      "name": "MOTOZEEN PUMA MZ 100A"
  },
  {
      "id": 8776,
      "brandId": 600,
      "name": "MOTOZEEN LEON MZ 100B"
  },
  {
      "id": 8777,
      "brandId": 600,
      "name": "MOTOZEEN DOBLO 3000 E-SCOOTER"
  },
  {
      "id": 8778,
      "brandId": 600,
      "name": "MOTOZEEN DOBLO 3100 E-SCOOTER"
  },
  {
      "id": 8779,
      "brandId": 600,
      "name": "MOTOZEEN DOBLO 3200 E-SCOOTER"
  },
  {
      "id": 8780,
      "brandId": 600,
      "name": "MOTOZEEN POSTACI 3200 E-SCOOTER"
  },
  {
      "id": 8781,
      "brandId": 600,
      "name": "MOTOZEEN POLO 3000 E-SCOOTER"
  },
  {
      "id": 8782,
      "brandId": 600,
      "name": "MOTOZEEN PANDA 2500 E-SCOOTER"
  },
  {
      "id": 8901,
      "brandId": 600,
      "name": "BETA RR 4T 350"
  },
  {
      "id": 8902,
      "brandId": 600,
      "name": "BETA RR 4T 430"
  },
  {
      "id": 8903,
      "brandId": 600,
      "name": "BETA RR 4T 480"
  },
  {
      "id": 8904,
      "brandId": 600,
      "name": "BETA RR 4T 350 RC"
  },
  {
      "id": 8905,
      "brandId": 600,
      "name": "BETA RR 4T 430 RC"
  },
  {
      "id": 8906,
      "brandId": 600,
      "name": "BETA RR 4T 480 RC"
  },
  {
      "id": 8907,
      "brandId": 600,
      "name": "BETA RR 2T 250"
  },
  {
      "id": 8908,
      "brandId": 600,
      "name": "BETA RR 2T 250 RC"
  },
  {
      "id": 8909,
      "brandId": 600,
      "name": "BETA XTRAINER 2T 250"
  },
  {
      "id": 8910,
      "brandId": 600,
      "name": "BETA EVO 2T 250"
  },
  {
      "id": 8950,
      "brandId": 600,
      "name": "ARORA AR 185-16 FIRTINA"
  },
  {
      "id": 8951,
      "brandId": 600,
      "name": "ARORA AR 150 T-N2 NOSTALJI"
  },
  {
      "id": 8952,
      "brandId": 600,
      "name": "ARORA AR 100T-2A SPECIAL"
  },
  {
      "id": 8953,
      "brandId": 600,
      "name": "ARORA AR 170-20 ELEGANT"
  },
  {
      "id": 8954,
      "brandId": 600,
      "name": "ARORA AR 50-10 TOROS"
  },
  {
      "id": 8955,
      "brandId": 600,
      "name": "ARORA AR 125-43 YBR"
  },
  {
      "id": 8956,
      "brandId": 600,
      "name": "ARORA AR 125-48 YBR"
  },
  {
      "id": 8957,
      "brandId": 600,
      "name": "ARORA AR 150T-8H JOKER"
  },
  {
      "id": 8958,
      "brandId": 600,
      "name": "ARORA AR 200-GY"
  },
  {
      "id": 8959,
      "brandId": 600,
      "name": "ARORA AR 100-B"
  },
  {
      "id": 8960,
      "brandId": 600,
      "name": "ARORA AR 180-16 C"
  },
  {
      "id": 8961,
      "brandId": 600,
      "name": "ARORA AR 13-2E"
  },
  {
      "id": 8962,
      "brandId": 600,
      "name": "ARORA AR 13-2T"
  },
  {
      "id": 8963,
      "brandId": 600,
      "name": "ARORA AR 180-19"
  },
  {
      "id": 8964,
      "brandId": 600,
      "name": "ARORA AR 180-31"
  },
  {
      "id": 8965,
      "brandId": 600,
      "name": "ARORA AR 150-50"
  },
  {
      "id": 8966,
      "brandId": 600,
      "name": "ARORA AR 150-70"
  },
  {
      "id": 8967,
      "brandId": 600,
      "name": "ARORA AR 100-19"
  },
  {
      "id": 8968,
      "brandId": 600,
      "name": "ARORA AR 185-18"
  },
  {
      "id": 8969,
      "brandId": 600,
      "name": "ARORA AR 100-7"
  },
  {
      "id": 8970,
      "brandId": 600,
      "name": "ARORA AR 100-8A"
  },
  {
      "id": 8971,
      "brandId": 600,
      "name": "ARORA TDL 25Z DERYA ELEKTRIKLI"
  },
  {
      "id": 8972,
      "brandId": 600,
      "name": "ARORA 200-16 C JAGUAR"
  },
  {
      "id": 8973,
      "brandId": 600,
      "name": "ARORA 185-20 FIRTINA"
  },
  {
      "id": 8974,
      "brandId": 600,
      "name": "ARORA 100-5 KARGO"
  },
  {
      "id": 8975,
      "brandId": 600,
      "name": "ARORA AR 125 CAPUCCINO"
  },
  {
      "id": 8976,
      "brandId": 600,
      "name": "ARORA AR 100-8"
  },
  {
      "id": 9000,
      "brandId": 600,
      "name": "SKYTEAM BUBBLY 50"
  },
  {
      "id": 9001,
      "brandId": 600,
      "name": "SKYTEAM BUBBLY 125"
  },
  {
      "id": 9002,
      "brandId": 600,
      "name": "SKYTEAM SKYMAX 125"
  },
  {
      "id": 9003,
      "brandId": 600,
      "name": "SKYTEAM SKYMAX PRO 125"
  },
  {
      "id": 9004,
      "brandId": 600,
      "name": "SKYTEAM T-REX 125"
  },
  {
      "id": 9005,
      "brandId": 600,
      "name": "SKYTEAM V-RAPTOR 250"
  },
  {
      "id": 9006,
      "brandId": 600,
      "name": "SKYTEAM ACE 125"
  }
];

export const InsuranceList = [{
  "2006": 0,
  "2007": 0,
  "2008": 0,
  "2009": 0,
  "2010": 0,
  "2011": 0,
  "2012": 139758,
  "2013": 158472,
  "2014": 0,
  "2015": 0,
  "2016": 0,
  "2017": 0,
  "2018": 0,
  "2019": 0,
  "2020": 0,
  "id": 1,
  "brandCode": 3,
  "modelCode": 1001,
  "brandName": "ALFA ROMEO",
  "modelName": "GIULIETTA 1.4 TB M.AIR 170 TCT PROG.PLU"
},
{
  "2006": 0,
  "2007": 0,
  "2008": 0,
  "2009": 0,
  "2010": 0,
  "2011": 0,
  "2012": 146593,
  "2013": 166601,
  "2014": 178229,
  "2015": 208236,
  "2016": 0,
  "2017": 0,
  "2018": 0,
  "2019": 0,
  "2020": 0,
  "id": 2,
  "brandCode": 3,
  "modelCode": 1002,
  "brandName": "ALFA ROMEO",
  "modelName": "GIULIETTA 1.4 TB M.AIR 170 TCT DISTINCTIVE"
},
{
  "2006": 0,
  "2007": 0,
  "2008": 0,
  "2009": 0,
  "2010": 0,
  "2011": 0,
  "2012": 121395,
  "2013": 0,
  "2014": 0,
  "2015": 0,
  "2016": 0,
  "2017": 0,
  "2018": 0,
  "2019": 0,
  "2020": 0,
  "id": 3,
  "brandCode": 3,
  "modelCode": 1003,
  "brandName": "ALFA ROMEO",
  "modelName": "GIULIETTA 1.4 TB MULTIAIR (170)"
},
{
  "2006": 0,
  "2007": 0,
  "2008": 0,
  "2009": 0,
  "2010": 0,
  "2011": 0,
  "2012": 96587,
  "2013": 107095,
  "2014": 118707,
  "2015": 0,
  "2016": 0,
  "2017": 0,
  "2018": 0,
  "2019": 0,
  "2020": 0,
  "id": 4,
  "brandCode": 3,
  "modelCode": 1004,
  "brandName": "ALFA ROMEO",
  "modelName": "MITO 1.3 JTD (95) CITY"
},
{
  "2006": 0,
  "2007": 0,
  "2008": 0,
  "2009": 0,
  "2010": 0,
  "2011": 0,
  "2012": 0,
  "2013": 0,
  "2014": 538076,
  "2015": 656174,
  "2016": 0,
  "2017": 0,
  "2018": 0,
  "2019": 0,
  "2020": 0,
  "id": 5,
  "brandCode": 3,
  "modelCode": 1005,
  "brandName": "ALFA ROMEO",
  "modelName": "4C LAUNCH EDITION 1.750 TB 240 TCT"
},
{
  "2006": 0,
  "2007": 0,
  "2008": 0,
  "2009": 142079,
  "2010": 0,
  "2011": 0,
  "2012": 0,
  "2013": 0,
  "2014": 0,
  "2015": 0,
  "2016": 0,
  "2017": 0,
  "2018": 0,
  "2019": 0,
  "2020": 0,
  "id": 6,
  "brandCode": 3,
  "modelCode": 1006,
  "brandName": "ALFA ROMEO",
  "modelName": "159 2.4 DIZEL SPORTSWAGON"
},
{
  "2006": 0,
  "2007": 0,
  "2008": 0,
  "2009": 0,
  "2010": 0,
  "2011": 0,
  "2012": 0,
  "2013": 0,
  "2014": 282212,
  "2015": 301778,
  "2016": 0,
  "2017": 0,
  "2018": 0,
  "2019": 0,
  "2020": 0,
  "id": 7,
  "brandCode": 3,
  "modelCode": 1007,
  "brandName": "ALFA ROMEO",
  "modelName": "GIULIETTA 1.8 TBI 240 TCT QV"
},
{
  "2006": 0,
  "2007": 0,
  "2008": 0,
  "2009": 0,
  "2010": 0,
  "2011": 0,
  "2012": 0,
  "2013": 0,
  "2014": 118707,
  "2015": 131701,
  "2016": 0,
  "2017": 0,
  "2018": 0,
  "2019": 0,
  "2020": 0,
  "id": 8,
  "brandCode": 3,
  "modelCode": 1008,
  "brandName": "ALFA ROMEO",
  "modelName": "MITO 1.3 JTD (85) CITY"
},
{
  "2006": 0,
  "2007": 0,
  "2008": 0,
  "2009": 0,
  "2010": 0,
  "2011": 0,
  "2012": 0,
  "2013": 0,
  "2014": 0,
  "2015": 203191,
  "2016": 177288,
  "2017": 0,
  "2018": 0,
  "2019": 0,
  "2020": 0,
  "id": 9,
  "brandCode": 3,
  "modelCode": 1012,
  "brandName": "ALFA ROMEO",
  "modelName": "MITO 1.4 170 3 KAPI QV TCT S2"
},
{
  "2006": 0,
  "2007": 0,
  "2008": 0,
  "2009": 0,
  "2010": 0,
  "2011": 0,
  "2012": 0,
  "2013": 0,
  "2014": 0,
  "2015": 161054,
  "2016": 175062,
  "2017": 181853,
  "2018": 199085,
  "2019": 0,
  "2020": 0,
  "id": 10,
  "brandCode": 3,
  "modelCode": 1013,
  "brandName": "ALFA ROMEO",
  "modelName": "GIULIETTA  1.6 JTD 120 PROGRESSION"
},
{
  "2006": 0,
  "2007": 0,
  "2008": 0,
  "2009": 0,
  "2010": 0,
  "2011": 0,
  "2012": 0,
  "2013": 0,
  "2014": 0,
  "2015": 0,
  "2016": 204682,
  "2017": 212621,
  "2018": 232777,
  "2019": 0,
  "2020": 0,
  "id": 11,
  "brandCode": 3,
  "modelCode": 1014,
  "brandName": "ALFA ROMEO",
  "modelName": "GIULIETTA 1.6 JTDM 120 PROGRESSION TCT"
},
{
  "2006": 0,
  "2007": 0,
  "2008": 0,
  "2009": 0,
  "2010": 0,
  "2011": 0,
  "2012": 0,
  "2013": 0,
  "2014": 0,
  "2015": 0,
  "2016": 232816,
  "2017": 241851,
  "2018": 264776,
  "2019": 274004,
  "2020": 0,
  "id": 12,
  "brandCode": 3,
  "modelCode": 1015,
  "brandName": "ALFA ROMEO",
  "modelName": "GIULIETTA 1.6 JTDM 120 SUPER TCT"
},
{
  "2006": 0,
  "2007": 0,
  "2008": 0,
  "2009": 0,
  "2010": 0,
  "2011": 0,
  "2012": 0,
  "2013": 0,
  "2014": 0,
  "2015": 0,
  "2016": 218809,
  "2017": 227642,
  "2018": 251449,
  "2019": 0,
  "2020": 0,
  "id": 13,
  "brandCode": 3,
  "modelCode": 1016,
  "brandName": "ALFA ROMEO",
  "modelName": "GIULIETTA 1.4 TB MULTIAIR  170 SUPER TCT"
},
{
  "2006": 0,
  "2007": 0,
  "2008": 0,
  "2009": 0,
  "2010": 0,
  "2011": 0,
  "2012": 0,
  "2013": 0,
  "2014": 0,
  "2015": 0,
  "2016": 329685,
  "2017": 0,
  "2018": 0,
  "2019": 0,
  "2020": 0,
  "id": 14,
  "brandCode": 3,
  "modelCode": 1017,
  "brandName": "ALFA ROMEO",
  "modelName": "GIULIETTA 1.8 TBI 240 VELOCE TCT"
},
{
  "2006": 0,
  "2007": 0,
  "2008": 0,
  "2009": 0,
  "2010": 0,
  "2011": 0,
  "2012": 0,
  "2013": 0,
  "2014": 0,
  "2015": 0,
  "2016": 814257,
  "2017": 973536,
  "2018": 0,
  "2019": 0,
  "2020": 0,
  "id": 15,
  "brandCode": 3,
  "modelCode": 1018,
  "brandName": "ALFA ROMEO",
  "modelName": "4C 1.8 240 TCT"
},
{
  "2006": 0,
  "2007": 0,
  "2008": 0,
  "2009": 0,
  "2010": 0,
  "2011": 0,
  "2012": 0,
  "2013": 0,
  "2014": 0,
  "2015": 0,
  "2016": 879285,
  "2017": 1015912,
  "2018": 0,
  "2019": 0,
  "2020": 0,
  "id": 16,
  "brandCode": 3,
  "modelCode": 1019,
  "brandName": "ALFA ROMEO",
  "modelName": "4C SPIDER 1.8 240 TCT"
},
{
  "2006": 0,
  "2007": 0,
  "2008": 0,
  "2009": 0,
  "2010": 0,
  "2011": 0,
  "2012": 0,
  "2013": 0,
  "2014": 0,
  "2015": 0,
  "2016": 203197,
  "2017": 211081,
  "2018": 0,
  "2019": 0,
  "2020": 0,
  "id": 17,
  "brandCode": 3,
  "modelCode": 1020,
  "brandName": "ALFA ROMEO",
  "modelName": "GIULIETTA 1.6 JTD 120 SUPER"
},
{
  "2006": 0,
  "2007": 0,
  "2008": 0,
  "2009": 0,
  "2010": 0,
  "2011": 0,
  "2012": 0,
  "2013": 0,
  "2014": 0,
  "2015": 0,
  "2016": 0,
  "2017": 563197,
  "2018": 603954,
  "2019": 0,
  "2020": 0,
  "id": 18,
  "brandCode": 3,
  "modelCode": 1021,
  "brandName": "ALFA ROMEO",
  "modelName": "GIULIA 2.0 200 SUPER RWD AT"
},
{
  "2006": 0,
  "2007": 0,
  "2008": 0,
  "2009": 0,
  "2010": 0,
  "2011": 0,
  "2012": 0,
  "2013": 0,
  "2014": 0,
  "2015": 0,
  "2016": 0,
  "2017": 610107,
  "2018": 651893,
  "2019": 683427,
  "2020": 863650,
  "id": 19,
  "brandCode": 3,
  "modelCode": 1022,
  "brandName": "ALFA ROMEO",
  "modelName": "GIULIA 2.0 280 VELOCE AWD AT"
},
{
  "2006": 0,
  "2007": 0,
  "2008": 0,
  "2009": 0,
  "2010": 0,
  "2011": 0,
  "2012": 0,
  "2013": 0,
  "2014": 0,
  "2015": 0,
  "2016": 1245768,
  "2017": 1333817,
  "2018": 1435508,
  "2019": 0,
  "2020": 0,
  "id": 20,
  "brandCode": 3,
  "modelCode": 1023,
  "brandName": "ALFA ROMEO",
  "modelName": "GIULIA 2.9 510 QV RWD AT"
},
{
  "2006": 0,
  "2007": 0,
  "2008": 0,
  "2009": 0,
  "2010": 0,
  "2011": 0,
  "2012": 0,
  "2013": 0,
  "2014": 0,
  "2015": 0,
  "2016": 0,
  "2017": 701132,
  "2018": 749925,
  "2019": 0,
  "2020": 0,
  "id": 21,
  "brandCode": 3,
  "modelCode": 1024,
  "brandName": "ALFA ROMEO",
  "modelName": "STELVIO 2.0 280 AWD AT"
},
{
  "2006": 0,
  "2007": 0,
  "2008": 0,
  "2009": 578671,
  "2010": 0,
  "2011": 0,
  "2012": 0,
  "2013": 0,
  "2014": 0,
  "2015": 0,
  "2016": 0,
  "2017": 0,
  "2018": 0,
  "2019": 0,
  "2020": 0,
  "id": 22,
  "brandCode": 3,
  "modelCode": 1025,
  "brandName": "ALFA ROMEO",
  "modelName": "8C COMPETIOZEONE (4691)"
},
{
  "2006": 0,
  "2007": 0,
  "2008": 0,
  "2009": 0,
  "2010": 0,
  "2011": 0,
  "2012": 0,
  "2013": 0,
  "2014": 0,
  "2015": 0,
  "2016": 0,
  "2017": 0,
  "2018": 0,
  "2019": 0,
  "2020": 793650,
  "id": 23,
  "brandCode": 3,
  "modelCode": 1026,
  "brandName": "ALFA ROMEO",
  "modelName": "GIULIA 2.0 200 SPRINT RWD AT"
},
{
  "2006": 0,
  "2007": 0,
  "2008": 0,
  "2009": 0,
  "2010": 0,
  "2011": 0,
  "2012": 0,
  "2013": 0,
  "2014": 0,
  "2015": 0,
  "2016": 0,
  "2017": 0,
  "2018": 0,
  "2019": 0,
  "2020": 898650,
  "id": 24,
  "brandCode": 3,
  "modelCode": 1027,
  "brandName": "ALFA ROMEO",
  "modelName": "STELVIO 2.0 200 SPRINT AWD AT"
},
{
  "2006": 0,
  "2007": 0,
  "2008": 0,
  "2009": 0,
  "2010": 0,
  "2011": 0,
  "2012": 0,
  "2013": 0,
  "2014": 0,
  "2015": 0,
  "2016": 0,
  "2017": 0,
  "2018": 0,
  "2019": 0,
  "2020": 958650,
  "id": 25,
  "brandCode": 3,
  "modelCode": 1028,
  "brandName": "ALFA ROMEO",
  "modelName": "STELVIO 2.0 280 VELOCE AWD AT"
},
{
  "2006": 0,
  "2007": 0,
  "2008": 0,
  "2009": 0,
  "2010": 0,
  "2011": 0,
  "2012": 0,
  "2013": 0,
  "2014": 0,
  "2015": 0,
  "2016": 0,
  "2017": 0,
  "2018": 0,
  "2019": 0,
  "2020": 329550,
  "id": 26,
  "brandCode": 3,
  "modelCode": 1029,
  "brandName": "ALFA ROMEO",
  "modelName": "GIULIETTA 1.6 JTD 120 SPRINT TCT"
},
{
  "2006": 0,
  "2007": 0,
  "2008": 0,
  "2009": 0,
  "2010": 0,
  "2011": 0,
  "2012": 0,
  "2013": 0,
  "2014": 0,
  "2015": 0,
  "2016": 0,
  "2017": 0,
  "2018": 0,
  "2019": 0,
  "2020": 351550,
  "id": 27,
  "brandCode": 3,
  "modelCode": 1030,
  "brandName": "ALFA ROMEO",
  "modelName": "GIULIETTA 1.6 JTD 120 TI TCT"
},
{
  "2006": 59012,
  "2007": 65483,
  "2008": 72964,
  "2009": 81769,
  "2010": 91163,
  "2011": 0,
  "2012": 0,
  "2013": 0,
  "2014": 0,
  "2015": 0,
  "2016": 0,
  "2017": 0,
  "2018": 0,
  "2019": 0,
  "2020": 0,
  "id": 28,
  "brandCode": 3,
  "modelCode": 143,
  "brandName": "ALFA ROMEO",
  "modelName": "147 1.6 3 KAPI PROGRESSION"
}
];