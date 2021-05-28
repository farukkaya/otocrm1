export const defaultSorted = [{ dataField: "createdDate", order: "desc" }];
export const sizePerPageList = [
  { text: "3", value: 3 },
  { text: "5", value: 5 },
  { text: "10", value: 10 }
];
export const initialFilter = {
  filter: {
    dealerId:"",
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    identityNo: "",
    username: "",
    profession:"",
    isActive:"true"
  },
  sortOrder: "desc", // asc||desc
  sortField: "createdDate",
  pageNumber: 1,
  pageSize: 10
};