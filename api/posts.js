import axios from "axios";

const POSTS_URL = "https://665dbb4ae88051d604080754.mockapi.io/articles";

export const fetchPosts = async () => (await axios.get(POSTS_URL)).data;

export const fetchPost = async (id) =>
  (await axios.get(`${POSTS_URL}/${id}`)).data;
