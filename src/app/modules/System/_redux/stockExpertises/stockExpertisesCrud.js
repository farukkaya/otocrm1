import axios from "axios";

export const EXPERTİSES_URL = "StockExpertises";
export const getAll=()=> axios.get(`${EXPERTİSES_URL}/GetAll`);
export const getStockExpertiseById=(stockExpertiseId) =>axios.get(`${EXPERTİSES_URL}/GetById?id=${stockExpertiseId}`);
export const getStockExpertiseByStock=(stockId) =>axios.get(`${EXPERTİSES_URL}/GetByStock?stockId=${stockId}`);
export const createStockExpertise=(stockExpertise) =>axios.post(`${EXPERTİSES_URL}/Insert`, stockExpertise);
export const updateStockExpertise=(stockExpertise) =>axios.put(`${EXPERTİSES_URL}/Update`, stockExpertise);
export const deleteStockExpertise=(stockExpertiseId) =>axios.delete(`${EXPERTİSES_URL}/Delete?id=${stockExpertiseId}`);

