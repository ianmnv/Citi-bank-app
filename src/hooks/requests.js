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

async function httpPostNewUser(state, navigate, dispatch) {
  try {
    const request = await axios.post("/users", {
      username: state.username,
      fullName: state.fullName,
      email: state.email,
      password: state.password,
      gender: state.gender,
      card: state.card,
    });
    dispatch({ type: "sign-in", value: request.data });
    navigate("/");
    return request.data;
  } catch (error) {
    console.error(error);
    alert("Something went wrong, please try again");
  }
}

export { httpGetUser, httpGetAllUsers, httpPostNewUser };
