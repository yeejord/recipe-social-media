import axios from "axios";
export const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
export const RECIPES_API = `${REMOTE_SERVER}/api/recipes`;
const axiosWithCredentials = axios.create({ withCredentials: true });

export const getFeed = async (userid: string, search: string = "") => {
  if (search) {
    const response = await axiosWithCredentials.get(
      `${RECIPES_API}/${userid}/?search=${search}`
    );
    return response.data;
  }
  const response = await axiosWithCredentials.get(`${RECIPES_API}/${userid}`);
  return response.data;
};

export const getAllRecipes = async (search: string = "") => {
  if (search) {
    const response = await axiosWithCredentials.get(
      `${RECIPES_API}/?search=${search}`
    );
    return response.data;
  }
  const response = await axiosWithCredentials.get(`${RECIPES_API}`);
  return response.data;
};

export const findRecipeById = async (id: string) => {
  const response = await axios.get(`${RECIPES_API}/${id}`);
  return response.data;
};

export const deleteRecipe = async (recipeId: string) => {
  const response = await axios.delete(`${RECIPES_API}/${recipeId}`);
  return response.data;
};

export const createRecipe = async (recipe: any) => {
  const response = await axios.post(`${RECIPES_API}`, recipe);
  return response.data;
};

export const updateRecipe = async (recipe: any) => {
  const response = await axiosWithCredentials.put(
    `${RECIPES_API}/${recipe._id}`,
    recipe
  );
  return response.data;
};
