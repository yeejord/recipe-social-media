import axios from "axios";
export const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
export const USERS_API = `${REMOTE_SERVER}/api/users`;
const axiosWithCredentials = axios.create({ withCredentials: true });

export const findAllUsers = async () => {
  const response = await axiosWithCredentials.get(USERS_API);
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
export const findCoursesForUser = async (userId: string) => {
  const response = await axiosWithCredentials.get(
    `${USERS_API}/${userId}/courses`
  );
  return response.data;
};
export const follow = async (userId: string, otherId: string) => {
  const response = await axiosWithCredentials.post(
    `${USERS_API}/${userId}/follow/${otherId}`
  );
  return response.data;
};
export const unfollow = async (userId: string, otherId: string) => {
  const response = await axiosWithCredentials.delete(
    `${USERS_API}/${userId}/follow/${otherId}`
  );
  return response.data;
};
