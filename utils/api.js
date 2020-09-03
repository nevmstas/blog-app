// import axios from "axios";

// export default axios.create({
//   baseURL: "https://simple-blog-api.crew.red/",
//   responseType: "json"
// });

const API_URL = 'https://simple-blog-api.crew.red'

export async function getAllPosts(){
  const response = await fetch(API_URL + '/posts');
  const posts = await response.json()
  return posts
}

export async function getPostById(id){
  const response = await fetch(API_URL + '/posts/' + id);
  const post = await response.json();
  return post;
}

