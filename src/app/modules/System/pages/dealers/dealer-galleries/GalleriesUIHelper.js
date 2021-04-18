
export const defaultSorted = [{ dataField: "id", order: "asc" }];
export const sizePerPageList = [
  { text: "3", value: 3 },
  { text: "5", value: 5 },
  { text: "10", value: 10 }
];
export const GalleryLevelList = [
  { name: "1. Seviye (0-5 ARAÇ)", id: 1 },
  { name: "2. Seviye (5-10 ARAÇ)", id: 2 },
  { name: "3. Seviye (10-15 ARAÇ)", id: 3 },
  { name: "4. Seviye (15-20 ARAÇ)", id: 4 },
  { name: "5. Seviye (20-25 ARAÇ)", id: 5 },
];
export const DealerTypeTitles = [{id:2,name:"Galeri"},{id:3,name:"Bayi&Galeri"}];

export const initialFilter = {
  filter:{
    name: "",
    level:undefined,
    dealer:"",
    taxOffice:"",
    taxIdentityNo: "",
  },
  sortOrder: "asc",
  sortField: "id",
  pageNumber: 1,
  pageSize: 10
};

