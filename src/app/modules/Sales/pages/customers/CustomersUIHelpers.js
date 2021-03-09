export const CustomerStatusCssClasses = ["danger", "success", "info", ""];
export const CustomerStatusTitles = ["Suspended", "Active", "Pending", ""];
export const CustomerTypeCssClasses = ["","success", "primary","warning"];
export const defaultSorted = [{ dataField: "id", order: "asc" }];
export const sizePerPageList = [
  { text: "3", value: 3 },
  { text: "5", value: 5 },
  { text: "10", value: 10 }
];
export const initialFilter = {
  filter: {
    lastName: "",
    firstName: "",
    email: "",
    personalPhone: "",
    workPhone: "",
    identityNo: "",
    advancePayment: "",
    paymentMethod: "",
    customerSource: "",
  },
  sortOrder: "asc", // asc||desc
  sortField: "id",
  pageNumber: 1,
  pageSize: 10
};
export const  CUSTOMERTYPELIST = [
  { name: "BİREYSEL", id: 1 },
  { name: "KURUMSAL", id: 2 }
];

export const  PAYMENTMETHODLIST = [
  { name: "KREDİ KULLANDIRIMI", id: 1 },
  { name: "KREDİ KARTI", id: 2 },
  { name: "NAKİT", id: 3 },
];

export const  CUSTOMERSOURCELIST = [
  { name: "MÜŞTERİ", id: 1 },
  { name: "ESNAF", id: 2 },
  { name: "İHALE", id: 3 },
];
export const arrayProgress = [
  {
    id: 1,
    title: "Müşteri Tipi",
    description: "Müşteri Tipini Seçiniz",
    icon: "/media/svg/icons/Code/Git4.svg",
    iconType:"svg"

  },
  {
    id: 2,
    title: "Müşteri",
    description: "Müşteri Bilgilerini Giriniz",
    icon: "/media/svg/icons/Communication/Group.svg",
    iconType:"svg"

  },
  {
    id: 3,
    title: "Müşteri Adres",
    description: "Müşterinin Adres Bilgilerini Giriniz",
    icon: "/media/svg/icons/Home/Mailbox.svg",
    iconType:"svg"
  },
  {
    id: 4,
    title: "Araç Seçimi",
    description: "Müşterinin İlgilendiği Araçları Seçiniz",
    icon: "fas fa-car-side",
    iconType:"Fontawesome"
  },

  {
    id: 5,
    title: "Sonuç",
    description: "Bilgilerinizi kontrol ediniz",
    icon: "/media/svg/icons/Code/Done-circle.svg",
    iconType:"svg"
  }
];

