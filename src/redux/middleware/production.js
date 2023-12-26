import { baseURL } from '../../config/constant';
import Utils from '../utils';

const getProductionRecipes = async (dataLength, page, keyword) => {
  const company = await Utils.getCurrentCompany();
  const brand = await Utils.getCurrentBrand();
  const shop = await Utils.getCurrentShop();
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/production_recipe?company_id=${company?.id}&brand_id=${brand?.brand_id}&limit=${dataLength}&page=${page}&shop_id=${shop?.shop_id}&keyword=${keyword}`,
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
const createProductionRecipe = async (params, thumbnail) => {
  const formData = new FormData();
  formData.set('data', JSON.stringify(params));
  formData.append('thumbnail', thumbnail);

  const apiOptions = {
    endpoint: `${baseURL}/api/production_recipe`,
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

const createProductionPlan = async (params) => {
  const apiOptions = {
    endpoint: `${baseURL}/api/production_recipe`,
    headers: {
      Authorization: `Bearer ${Utils.getCurrentToken()}`,
    },
    method: 'POST',
    data: params,
  };
  const apiResponse = await Utils.CallApi(apiOptions);

  return apiResponse.data;
};
const getProductionRecipesFilters = async () => {
  const company = await Utils.getCurrentCompany();
  const brand = await Utils.getCurrentBrand();

  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/filter/production_recipe?company_id=${company?.id}&brand_id=${brand?.brand_id}`,
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
const updateProductionRecipe = async (params, thumbnail, id) => {
  const formData = new FormData();
  formData.set('data', JSON.stringify(params));
  formData.append('thumbnail', thumbnail);
  formData.append('_method', 'PUT');
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/production_recipe/${id}`,
      headers: {
        'Content-Type':
          'multipart/form-data; boundary=<calculated when request is sent>',
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

const updateProductionPlan = async (params, id) => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/production_recipe/${id}`,
      headers: {
        Authorization: `Bearer ${Utils.getCurrentToken()}`,
      },
      method: 'PUT',
      data: params,
    };
    const apiResponse = await Utils.CallApi(apiOptions);

    return apiResponse.data;
  } catch (error) {
    return error;
  }
};

const getIngredientDetail = async (id) => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/production_recipe/${id}`,
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
      endpoint: `${baseURL}/api/production_recipe/${id}`,
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

const finishPlan = async (id) => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/finish_production/${id}`,
      headers: {
        Authorization: `Bearer ${Utils.getCurrentToken()}`,
      },
      method: 'PUT',
    };
    const apiResponse = await Utils.CallApi(apiOptions);
    return apiResponse.data;
  } catch (error) {
    return error;
  }
};

const ProductionRecipesFilters = async (dataLength, page, filters) => {
  const company = await Utils.getCurrentCompany();
  const brand = await Utils.getCurrentBrand();

  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/production_recipe?company_id=${company?.id}&brand_id=${brand?.brand_id}&limit=${dataLength}&page=${page}&menu_category_id=${filters?.category_id}&is_verified=${filters?.is_verified}&calorie=${filters?.calorie}`,
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
const getProductionRecipeInventory = async () => {
  const company = await Utils.getCurrentCompany();

  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/inventory?company_id=${company?.id}&sort_field=ingredient_name&sort_order=asc`,
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
const searchProductionRecipe = async (dataLength, page, keyword) => {
  const company = await Utils.getCurrentCompany();
  const brand = await Utils.getCurrentBrand();
  const shop = await Utils.getCurrentShop();
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/production_recipe?company_id=${company?.id}&brand_id=${brand?.brand_id}&shop_id=${shop?.shop_id}&keyword=${keyword}&limit=${dataLength}&page=${page}`,
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

const delProductionRecipe = async (Production_recipes_Id) => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/production_recipe/${Production_recipes_Id}`,
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
const ProductionAction = {
  getProductionRecipes,
  createProductionRecipe,
  getProductionRecipesFilters,
  getIngredientDetail,
  getProductionRecipeInventory,
  getDetailRecipe,
  ProductionRecipesFilters,
  searchProductionRecipe,
  delProductionRecipe,
  updateProductionRecipe,
  updateProductionPlan,
  createProductionPlan,
  finishPlan,
};

export default ProductionAction;
