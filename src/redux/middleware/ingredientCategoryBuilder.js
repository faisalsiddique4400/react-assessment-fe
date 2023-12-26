import { baseURL } from '../../config/constant';
import Utils from '../../redux/utils';

const updateIngredientCategoryBuilder = async (id, body) => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/rb_ingredient_category/${id}`,
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

const addIngredientCategoryBuilder = async (params) => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/rb_ingredient_category`,
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

const getIngredientCategoryByIdBuilder = async (id) => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/rb_ingredient_category/${id}`,
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

const getIngredientCategoryBuilder = async (limit, page) => {
  const company = await Utils.getCurrentCompany();
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/rb_ingredient_category?company_id=${company?.id}&limit=${limit}&page=${page}`,
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

const searchIngredientCategoryBuilder = async (limit, keyword) => {
  const company = await Utils.getCurrentCompany();

  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/rb_ingredient_category?company_id=${company?.id}&keyword=${keyword}&limit=${limit}`,
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

const deleteIngredientCategoryBuilder = async (id) => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/rb_ingredient_category/${id}`,
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

const IngredientCategoryBuilderActions = {
  addIngredientCategoryBuilder,
  updateIngredientCategoryBuilder,
  getIngredientCategoryByIdBuilder,
  getIngredientCategoryBuilder,
  searchIngredientCategoryBuilder,
  deleteIngredientCategoryBuilder,
};

export default IngredientCategoryBuilderActions;
