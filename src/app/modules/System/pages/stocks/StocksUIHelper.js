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


export const initialFilter = {
  filter: {
    vinNo :"",
    engineNo :"",
    categoryId:0,// kategoriler
    brandId:0,//markalar
    modelId:0,//modeller
    year:"",
    plateNo:"",
    colorId:0,//renkler
    fuelTypeId:0,//Yakıt Tipleri
    kilometer:0,
    gearTypeId:0,//Vites tipleri
    caseTypeId:0,// kasa tipleri
    enginePower:0,//motor gücü
    engineCapacity:0,//motor hacmi
    swap:false,
    statusId:0,// Sıfır ,İkinci El
    buyingPrice:0,
    sellingPrice:0,
    cashSellingPrice:0,
    swapSellingPrice:0,
    fromWhoId:0,//kimden (Müşteri,Esnaf,İhale)
    sourceId:0,//Kaynak(Kredi Kapama,Takas,Nakit)
    insuranceCode:0,//Kasko Kodu
    insuranceValue:0,// Kasko değeri
    description:"",
    brand:"",
    model:"",
    color:"",
    fuelType:"",
    gearType:"",
    caseType:"",
    status:"",
    fromWho:"",
    source:"",
  },
  sortOrder: "asc",
  sortField: "id",
  pageNumber: 1,
  pageSize: 10
};



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

export const ModelList = [{
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