
export const defaultSorted = [{ dataField: "id", order: "asc" }];
export const sizePerPageList = [
  { text: "3", value: 3 },
  { text: "5", value: 5 },
  { text: "10", value: 10 }
];
export const DealerTypeCssClasses = ["", "warning", "info","danger"];
export const DealerTypeTitles = [{id:1,name:"Bayi"},{id:2,name:"Galeri"},{id:3,name:"Bayi&Galeri"}];
export const CapacityTitles = [
  { name: "1. Seviye (0-5 ARAÇ)", id: 1 },
  { name: "2. Seviye (5-10 ARAÇ)", id: 2 },
  { name: "3. Seviye (10-15 ARAÇ)", id: 3 },
  { name: "4. Seviye (15-20 ARAÇ)", id: 4 },
  { name: "5. Seviye (20-25 ARAÇ)", id: 5 },
];

export const initialFilter = {
  filter:{
    name: "",
    dealerTypeId:"",
    capacityId:"",
    taxOffice:"",
    taxIdentityNo: "",
    isActive:"true"
  },
  sortOrder: "asc",
  sortField: "id",
  pageNumber: 1,
  pageSize: 10
};


export const arrayProgress = [
  {
    id: 1,
    title: "Bayi",
    description: "Bayi Bilgilerini Giriniz",
    icon: "/media/svg/icons/Home/Building.svg",
    iconType:"svg"

  },
  {
    id: 2,
    title: "Bayi İletişim",
    description: "Bayinin İletişim Bilgilerini Giriniz",
    icon: "/media/svg/icons/Communication/Adress-book1.svg",
    iconType:"svg"
  },
  {
    id: 3,
    title: "Bayi Yöneticisi",
    description: "Bayi için bir yönetici atayın",
    icon: "/media/svg/icons/Communication/Add-user.svg",
    iconType:"svg"
  },

  {
    id: 4,
    title: "Bayi Adres",
    description: "Bayinin Adres Bilgilerini Giriniz",
    icon: "/media/svg/icons/Map/Marker1.svg",
    iconType:"svg"
  },
  {
    id: 5,
    title: "Sonuç",
    description: "Bilgilerinizi kontrol ediniz",
    icon: "/media/svg/icons/Code/Done-circle.svg",
    iconType:"svg"
  }
];

