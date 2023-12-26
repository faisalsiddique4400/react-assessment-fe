import { baseURL } from '../../config/constant';
import Utils from '../utils';

const getRecipes = async (dataLength, page, brandId, keyword) => {
  const company = await Utils.getCurrentCompany();

  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/recipes?company_id=${company?.id}&parent_variation=true&limit=${dataLength}&page=${page}&brand_id=${brandId}&keyword=${keyword}`,
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

const getVariationType = async () => {
  const company = await Utils.getCurrentCompany();
  const brand = await Utils.getCurrentBrand();
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/getVariationTypes?limit=3&company_id=${company?.id}&brand_id=${brand?.brand_id}`,
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

const getVariations = async (variation_type_id) => {
  const company = await Utils.getCurrentCompany();
  const brand = await Utils.getCurrentBrand();

  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/variations?company_id=${company?.id}&brand_id=${brand?.brand_id}&variation_type_id=${variation_type_id}&limit=5`,
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

const submitVariations = async (params) => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/variations`,
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

const getRecipesFilters = async () => {
  const company = await Utils.getCurrentCompany();
  const brand = await Utils.getCurrentBrand();

  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/filter/recipe?company_id=${company?.id}&brand_id=${brand?.brand_id}`,
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

const recipesFilters = async (dataLength, page, filters, keyword) => {
  const company = await Utils.getCurrentCompany();
  const brand = await Utils.getCurrentBrand();

  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/recipes?company_id=${company?.id}&brand_id=${
        brand?.brand_id
      }&limit=${dataLength}&page=${page}&keyword=${keyword}${
        filters?.allergens_id != ''
          ? `&allergens_id=${filters?.allergens_id}`
          : ''
      }${
        filters?.category_id != ''
          ? `&menu_category_id=${filters?.category_id}`
          : ''
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

const getIngredientDetail = async (id, brandId) => {
  const company = await Utils.getCurrentCompany();
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/recipes/${id}?company_id=${company?.id}&brand_id=${brandId}`,
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
      endpoint: `${baseURL}/api/recipes?company_id=${company?.id}&brand_id=${brand?.brand_id}&keyword=${keyword}&limit=${dataLength}&page=${page}`,
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
      endpoint: `${baseURL}/api/recipes/${rbId}`,
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

const createRecipe = async (params, thumbnail) => {
  const formData = new FormData();
  formData.set('data', JSON.stringify(params));
  formData.append('thumbnail', thumbnail);

  const apiOptions = {
    endpoint: `${baseURL}/api/recipes`,
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

const downloadRecipe = async (rbId) => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/download/recipe/${rbId}?key=production`,
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

const updateRecipe = async (params, thumbnail, method, id) => {
  const formData = new FormData();
  formData.set('data', JSON.stringify(params));
  formData.append('thumbnail', thumbnail);
  formData.append('_method', method);
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/recipes/${id}`,
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

const exportCookBook = async () => {
  const brand = await Utils.getCurrentBrand();
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/download_cookbook/recipe/${brand?.brand_id}?key=production`,
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

const RecipeApiActions = {
  getIngredientDetail,
  getVariationType,
  recipesFilters,
  getRecipesFilters,
  getRecipes,
  submitVariations,
  searchRecipe,
  downloadRecipe,
  delRecipe,
  getVariations,
  createRecipe,
  updateRecipe,
  exportCookBook,
};

export default RecipeApiActions;
