import axios from "axios";
export const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
export const RECIPES_API = `${REMOTE_SERVER}/api/recipes`;
const axiosWithCredentials = axios.create({ withCredentials: true });

export const findAllRecipes = async () => {
  const response = await axiosWithCredentials.get(RECIPES_API);
  return response.data;
};

export const findRecipesByPartialName = async (name: string) => {
  const response = await axios.get(`${RECIPES_API}?name=${name}`);
  return response.data;
};

export const findRecipeById = async (id: string) => {
  const response = await axios.get(`${RECIPES_API}/${id}`);
  return response.data;
};

export const deleteRecipe = async (userId: string) => {
  const response = await axios.delete(`${RECIPES_API}/${userId}`);
  return response.data;
};

export const createRecipe = async (user: any) => {
  const response = await axios.post(`${RECIPES_API}`, user);
  return response.data;
};

export const updateRecipe = async (user: any) => {
  const response = await axiosWithCredentials.put(
    `${RECIPES_API}/${user._id}`,
    user
  );
  return response.data;
};
