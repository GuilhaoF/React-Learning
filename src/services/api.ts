import axios from "axios";

const http = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const api = {
  //funcoes
  getAllAlbuns: async () => {
    let response = await http.get("/abuns");
    return response.data;
  },
  getAlbumToPagination: async (page: number, limit: number) => {
    const pageLimit = (page - 1) * limit <= 0 ? 0 : ((page - 1) * limit);
    let response = await http.get(
      `/albums?_start=${pageLimit}&_limit=${limit}`
    );
    return response.data;
  },
  getAlbum: async (id: number) => {
    let response = await http.get("/albuns", { params: { id } });
    return response.data[0];
  },
  getAllPhotos: async (albumId: number) => {
    let response = await http.get("/photos", { params: { albumId } });
    return response.data
  },
  getPhoto : async(id:number) =>{
    let response = await http.get('/photos',{params: {id}})
    return response.data
  }
}