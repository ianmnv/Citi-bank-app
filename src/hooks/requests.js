import axios from "axios";
axios.defaults.baseURL = "http://localhost:9000";

async function httpGetUser(id) {
  try {
    const response = await axios.get(`/users/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

async function httpGetAllUsers() {
  try {
    const response = await axios.get(`/users`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export { httpGetUser, httpGetAllUsers };
