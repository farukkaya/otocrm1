
export const defaultSorted = [{ dataField: "id", order: "asc" }];
export const sizePerPageList = [
  { text: "3", value: 3 },
  { text: "5", value: 5 },
  { text: "10", value: 10 }
];
export const DealerTypeCssClasses = ["", "warning", "info"];
export const DealerTypeTitles = [{id:1,name:"Bayi&Galeri"},{id:2,name:"Bayi"}];

export const initialFilter = {
  filter:{
    dealerType:"",
    name: "",
    admin:"",
    taxOffice:"",
    taxIdentityNo: "",
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

