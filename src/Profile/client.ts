import axios from "axios";
export const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
export const USERS_API = `${REMOTE_SERVER}/api/users`;
const axiosWithCredentials = axios.create({ withCredentials: true });

export const findAllUsers = async () => {
  const response = await axiosWithCredentials.get(USERS_API);
  return response.data;
};

export const findUsersByPartialName = async (name: string) => {
  const response = await axios.get(`${USERS_API}?name=${name}`);
  return response.data;
};

export const findUserById = async (id: string) => {
  const response = await axios.get(`${USERS_API}/${id}`);
  return response.data;
};

export const deleteUser = async (userId: string) => {
  const response = await axios.delete(`${USERS_API}/${userId}`);
  return response.data;
};

export const signin = async (credentials: any) => {
  const response = await axiosWithCredentials.post(
    `${USERS_API}/signin`,
    credentials
  );
  return response.data;
};

export const signup = async (user: any) => {
  const response = await axiosWithCredentials.post(`${USERS_API}/signup`, user);
  return response.data;
};

export const createUser = async (user: any) => {
  const response = await axios.post(`${USERS_API}`, user);
  return response.data;
};

export const updateUser = async (user: any) => {
  const response = await axiosWithCredentials.put(
    `${USERS_API}/${user._id}`,
    user
  );
  return response.data;
};

export const profile = async () => {
  const response = await axiosWithCredentials.post(`${USERS_API}/profile`);
  return response.data;
};

export const signout = async () => {
  const response = await axiosWithCredentials.post(`${USERS_API}/signout`);
  return response.data;
};
export const following = async (userId: string) => {
  const response = await axiosWithCredentials.get(
    `${USERS_API}/${userId}/myfollowing`
  );
  return response.data;
};

export const amFollowing = async (userId: string) => {
  const response = await axiosWithCredentials.get(
    `${USERS_API}/amfollowing/${userId}`
  );
  return response.data;
};

export const followers = async (userId: string) => {
  const { data } = await axiosWithCredentials.get(
    `${USERS_API}/${userId}/myfollowers`
  );
  return data;
};
export const follow = async (toId: string) => {
  const response = await axiosWithCredentials.put(
    `${USERS_API}/follow/${toId}`
  );
  return response.data;
};
export const unfollow = async (toId: string) => {
  const response = await axiosWithCredentials.put(
    `${USERS_API}/unfollow/${toId}`
  );
  return response.data;
};
export const saveRecipe = async (recipeId: string) => {
  const response = await axiosWithCredentials.put(
    `${USERS_API}/saveRecipe/${recipeId}`
  );
  return response.data;
};
export const unsaveRecipe = async (recipeId: string) => {
  const response = await axiosWithCredentials.put(
    `${USERS_API}/unsaveRecipe/${recipeId}`
  );
  return response.data;
};
export const savedRecipesFor = async (userId: string, search: string = "") => {
  if (search) {
    const response = await axios.get(
      `${USERS_API}/savedRecipes/${userId}/?search=${search}`
    );
    return response.data;
  }
  const response = await axios.get(`${USERS_API}/savedRecipes/${userId}`);
  return response.data;
};
