import { baseURL } from '../../config/constant';
import Utils from '../../redux/utils';

const updateIngredientCategory = async (id, body) => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/ingredient_categories/${id}`,
      headers: {
        Authorization: `Bearer ${Utils.getCurrentToken()}`,
      },
      method: 'PUT',
      data: body,
    };
    const apiResponse = await Utils.CallApi(apiOptions);
    return apiResponse.data;
  } catch (error) {
    return error;
  }
};

const addIngredientCategory = async (params) => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/ingredient_categories`,
      headers: {
        Authorization: `Bearer ${Utils.getCurrentToken()}`,
      },
      method: 'POST',
      data: params,
    };
    const apiResponse = await Utils.CallApi(apiOptions);

    return apiResponse.data;
  } catch (error) {
    return error;
  }
};

const getIngredientCategoryById = async (id) => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/ingredient_categories/${id}`,
      headers: {
        Authorization: `Bearer ${Utils.getCurrentToken()}`,
      },
      method: 'GET',
    };
    const apiResponse = await Utils.CallApi(apiOptions);

    return apiResponse.data;
  } catch (error) {
    return error;
  }
};

const getIngredientCategory = async (limit, page) => {
  const company = await Utils.getCurrentCompany();
  const brand = await Utils.getCurrentBrand();

  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/ingredient_categories?company_id=${company?.id}&brand_id=${brand?.brand_id}&limit=${limit}&page=${page}`,
      headers: {
        Authorization: `Bearer ${Utils.getCurrentToken()}`,
      },
      method: 'GET',
    };
    const apiResponse = await Utils.CallApi(apiOptions);

    return apiResponse.data;
  } catch (error) {
    return error;
  }
};

const searchIngredientCategory = async (company_id, limit, keyword) => {
  const company = await Utils.getCurrentCompany();

  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/ingredient_categories?company_id=${company?.id}&keyword=${keyword}&limit=${limit}`,
      headers: {
        Authorization: `Bearer ${Utils.getCurrentToken()}`,
      },
      method: 'GET',
    };
    const apiResponse = await Utils.CallApi(apiOptions);

    return apiResponse.data;
  } catch (error) {
    return error;
  }
};

const deleteIngredientCategory = async (id) => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/ingredient_categories/${id}`,
      headers: {
        Authorization: `Bearer ${Utils.getCurrentToken()}`,
      },
      method: 'DELETE',
    };
    const apiResponse = await Utils.CallApi(apiOptions);

    return apiResponse.data;
  } catch (error) {
    return error;
  }
};

const IngredientCategoryActions = {
  addIngredientCategory,
  updateIngredientCategory,
  getIngredientCategoryById,
  getIngredientCategory,
  searchIngredientCategory,
  deleteIngredientCategory,
};

export default IngredientCategoryActions;
