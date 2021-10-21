import axios from 'axios';

const baseUrl = publisherData.baseUrl;

export async function getPageById(id) {
  return axios.get(`${baseUrl}/wp-json/wp/v2/pages/${id}`).then((res) => {
    return res.data;
  });
}

export async function getPost(slug) {
  return axios.get(`${baseUrl}/wp-json/wp/v2/posts?slug=${slug}`).then((res) => {
    return res;
  });
}
