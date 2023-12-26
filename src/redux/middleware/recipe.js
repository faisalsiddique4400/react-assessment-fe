import { baseURL } from '../../config/constant';
import fileDownload from 'js-file-download';
import Utils from '../utils';

const getRecipes = async (dataLength, page, brand_id, type, keyword) => {
  const company = await Utils.getCurrentCompany();
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/rb_recipes?company_id=${company?.id}&limit=${dataLength}&page=${page}&brand_id=${brand_id}&recipe_type_id=${type}&keyword=${keyword}`,
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

const getRecipesFilters = async () => {
  const company = await Utils.getCurrentCompany();
  const brand = await Utils.getCurrentBrand();

  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/filter/recipe_builder?company_id=${company?.id}&brand_id=${brand?.brand_id}`,
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
const recipesFiltersForRD = async (
  dataLength,
  page,
  filters,
  brand_id,
  recipe_type_id,
  keyword
) => {
  const company = await Utils.getCurrentCompany();
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/rb_recipes?company_id=${
        company?.id
      }&keyword=${keyword}&recipe_type_id=${recipe_type_id}&limit=${dataLength}&page=${page}&brand_id=${brand_id}${
        filters?.allergens_id != ''
          ? `&allergens_id=${filters?.allergens_id}`
          : ''
      }${
        filters?.category_id != '' ? `&category_id=${filters?.category_id}` : ''
      }${
        filters?.is_verified != '' ? `&is_verified=${filters?.is_verified}` : ''
      }${filters?.calorie != '' ? `&calorie=${filters?.calorie}` : ''}`,
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
const recipesFilters = async (dataLength, page, filters, brand_id) => {
  const company = await Utils.getCurrentCompany();
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/rb_recipes?company_id=${company?.id}&limit=${dataLength}&page=${page}&category_id=${filters?.category_id}&allergens_id=${filters?.allergens_id}&is_verified=${filters?.is_verified}&calorie=${filters?.calorie}&brand_id=${brand_id}`,
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

const getDetailRecipe = async (id) => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/rb_recipes/${id}`,
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

const getApprovalById = async (id) => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/rb_approval_recipe/${id}`,
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

const searchRecipe = async (dataLength, page, keyword) => {
  const company = await Utils.getCurrentCompany();
  const brand = await Utils.getCurrentBrand();
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/rb_recipes?company_id=${company?.id}&keyword=${keyword}&brand_id=${brand?.brand_id}&limit=${dataLength}&page=${page}`,
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

const delRecipe = async (rbId) => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/rb_recipes/${rbId}`,
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
const recipeType = async () => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/rb_recipe_type`,
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

const createRecipe = async (params, thumbnail) => {
  const formData = new FormData();
  formData.set('data', JSON.stringify(params));
  formData.append('thumbnail', thumbnail);

  const apiOptions = {
    endpoint: `${baseURL}/api/rb_recipes`,
    headers: {
      'Content-Type':
        'multipart/form-data; boundary=<calculated when request is sent>',
      Authorization: `Bearer ${Utils.getCurrentToken()}`,
    },
    method: 'POST',
    data: formData,
  };
  const apiResponse = await Utils.CallApi(apiOptions);

  return apiResponse.data;
};

const updateRecipe = async (params, thumbnail, method, id) => {
  const formData = new FormData();
  formData.set('data', JSON.stringify(params));
  formData.append('thumbnail', thumbnail);
  formData.append('_method', method);
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/rb_recipes/${id}`,
      headers: {
        'Content-Type':
          'multipart/form-data; boundary=<calculated when request is sent>',
        Authorization: `Bearer ${Utils.getCurrentToken()}`,
      },
      method: 'POST',
      data: formData,
    };
    const apiResponse = await Utils.CallApi(apiOptions);

    return apiResponse.data;
  } catch (error) {
    return error;
  }
};

const getRecipeLink = async (rbId) => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/download/recipe_builder/${rbId}?key=production`,
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

const uploadRecipes = async (csv) => {
  try {
    const formData = new FormData();
    // formData.set('uploadType', type);
    formData.append('module', 'company');
    formData.append('csv', csv);
    formData.append('brand_id', await Utils.getCurrentBrand()?.brand_id);

    const apiOptions = {
      endpoint: `${baseURL}/api/bulk_upload_recipes`,
      headers: {
        Authorization: `Bearer ${Utils.getCurrentToken()}`,
      },
      method: 'POST',
      data: formData,
    };
    const apiResponse = await Utils.CallApi(apiOptions);
    return apiResponse.data;
  } catch (error) {
    return error;
  }
};

const getMarketList = async () => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/download_marketlist`,
      headers: {
        Authorization: `Bearer ${Utils.getCurrentToken()}`,
      },
      method: 'GET',
      responseType: 'blob',
    };
    const apiResponse = await Utils.CallApi(apiOptions);
    fileDownload(apiResponse.data?.data, 'test.xls');
    return apiResponse.data;
  } catch (error) {
    return error;
  }
};

const markRecipe = async (payload, id) => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/rb_recipes_status/${id}`,
      headers: {
        Authorization: `Bearer ${Utils.getCurrentToken()}`,
      },
      method: 'PUT',
      data: payload,
    };
    const apiResponse = await Utils.CallApi(apiOptions);
    return apiResponse.data;
  } catch (error) {
    return error;
  }
};

const RecipeActions = {
  createRecipe,
  recipesFilters,
  getRecipesFilters,
  getRecipes,
  searchRecipe,
  delRecipe,
  recipeType,
  getDetailRecipe,
  updateRecipe,
  getApprovalById,
  getRecipeLink,
  uploadRecipes,
  getMarketList,
  markRecipe,
  recipesFiltersForRD,
};

export default RecipeActions;
