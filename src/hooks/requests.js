import axios from "axios";
axios.defaults.baseURL = "http://localhost:9000";

async function httpGetUser(username) {
  try {
    const response = await axios.get(`/users/${username}`);
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

async function httpPostNewUser(user, navigate, dispatch) {
  try {
    const request = await axios.post("/users", {
      username: user.username,
      fullName: user.fullName,
      email: user.email,
      password: user.password,
      gender: user.gender,
      card: user.card,
    });
    dispatch({ type: "sign-in", value: request.data });
    navigate("/");
    return request.data;
  } catch (error) {
    console.error(error);
    alert("Something went wrong, please try again");
  }
}

async function httpPutNewData(data, id, navigate) {
  try {
    await axios.put(`/users/${id}`, data);
    navigate(`/`);
    alert("Information updated");
  } catch (error) {
    console.error(error);
    return { error: error };
  }
}

export { httpGetUser, httpGetAllUsers, httpPostNewUser, httpPutNewData };
