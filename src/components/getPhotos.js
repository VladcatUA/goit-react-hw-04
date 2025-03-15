import axios from "axios";

const API_KEY = "VFy-ULC0z1rYTLrhwrV2WjCHjcXrsLEv0qs-q1lpCq8";
const BASE_URL = "https://api.unsplash.com/";

export const getPhotosFromUnsplash = async (query, page) => {
    const { data } = await axios.get(`${BASE_URL}/search/photos/`, {
      params: {
        client_id: API_KEY,
        orientation: "landscape",
        page: page,
        query: query,
      },
    });
  
    return data;
  };