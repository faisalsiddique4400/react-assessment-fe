import { baseURL } from '../../config/constant';
import Utils from '../utils';

const getSubRecipes = async (dataLength, page, brand_id, keyword) => {
  const company = await Utils.getCurrentCompany();

  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/sub_recipes?company_id=${company?.id}&limit=${dataLength}&page=${page}&brand_id=${brand_id}&keyword=${keyword}`,
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

const getSubRecipeInventoryByCharacter = async (id, param, tag) => {
  const company = await Utils.getCurrentCompany();
  const brand = await Utils.getCurrentBrand();

  try {
    const apiOptions =
      +id == 3
        ? {
            endpoint: `${baseURL}/api/inventory?company_id=${
              company?.id
            }&database_id=${id}&brand_id=${
              brand?.brand_id
            }&limit=100&sort_field=ingredient_name&sort_order=asc&character=${param}&tag=${
              tag == '' ? 'company' : tag
            }`,
            headers: {
              Authorization: `Bearer ${Utils.getCurrentToken()}`,
            },
            method: 'GET',
          }
        : {
            endpoint: `${baseURL}/api/inventory?database_id=${id}}&company_id=${company?.id}&brand_id=${brand?.brand_id}&sort_field=ingredient_name&sort_order=asc&limit=100&character=${param}`,
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

const getInventoryByCharacterForWizard = async (
  id,
  param,
  tag,
  page,
  limit
) => {
  const company = await Utils.getCurrentCompany();
  const brand = await Utils.getCurrentBrand();

  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/inventory?database_id=${id}&company_id=${company?.id}&brand_id=${brand?.brand_id}&sort_field=ingredient_name&sort_order=asc&page=${page}&limit=${limit}&keyword=${param}`,
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

const getAllSubRecipeInventory = async (
  id,
  page,
  limit,
  brandId,
  shopId,
  ingredient_category_id,
  ingredient_type,
  keyword
) => {
  const company = await Utils.getCurrentCompany();
  const role_id = await Utils.getCurrentUser()?.roles[0]?.id;

  try {
    const apiOptions =
      +id == 3
        ? {
            endpoint: `${baseURL}/api/inventory?company_id=${
              company?.id
            }&database_id=${id}&keyword=${keyword}&brand_id=${brandId}&shop_id=${shopId}&sort_field=ingredient_name&sort_order=asc&limit=${limit}&page=${page}&distinct_ingredients=1&tag=${
              role_id == 4 ? 'shop' : role_id == 5 ? 'brand' : 'company'
            }${
              ingredient_category_id != ''
                ? `&ingredient_category_id=${ingredient_category_id}`
                : ''
            }${
              ingredient_type != '' ? `&ingredient_type=${ingredient_type}` : ''
            }`,
            headers: {
              Authorization: `Bearer ${Utils.getCurrentToken()}`,
            },
            method: 'GET',
          }
        : {
            endpoint: `${baseURL}/api/inventory?database_id=${id}&sort_field=ingredient_name&sort_order=asc&limit=${limit}&page=${page}`,
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

const getAllIventoriesForList = async (
  id,
  page,
  limit,
  brandId,
  shopId,
  ingredient_category_id,
  ingredient_type,
  keyword,
  sort_field,
  sort,
  stock
) => {
  const company = await Utils.getCurrentCompany();
  const role_id = await Utils.getCurrentUser()?.roles[0]?.id;
  try {
    const apiOptions =
      +id == 3
        ? {
            endpoint: `${baseURL}/api/inventory?company_id=${
              company?.id
            }&database_id=${id}&keyword=${keyword}&brand_id=${brandId}&shop_id=${shopId}&sort_field=${sort_field}&sort_order=${
              sort === 1 ? 'asc' : 'desc'
            }&limit=${limit}&page=${page}&distinct_ingredients=1&tag=${
              role_id == 4 ? 'shop' : role_id == 5 ? 'brand' : 'company'
            }${
              ingredient_category_id != ''
                ? `&ingredient_category_id=${ingredient_category_id}`
                : ''
            }${
              ingredient_type != '' ? `&ingredient_type=${ingredient_type}` : ''
            }${stock ? `&stock=${stock}` : ''}`,
            headers: {
              Authorization: `Bearer ${Utils.getCurrentToken()}`,
            },
            method: 'GET',
          }
        : {
            endpoint: `${baseURL}/api/inventory?database_id=${id}&sort_field=ingredient_name&sort_order=asc&limit=${limit}&page=${page}`,
            headers: {
              Authorization: `Bearer ${Utils.getCurrentToken()}`,
            },
            method: 'GET',
          };
    const apiResponse = await Utils.CallApi(apiOptions);
    // console.log(apiResponse);
    return apiResponse.data;
  } catch (error) {
    return error;
  }
};

const getAllInventory = async (id, page, limit, brandId, shopId) => {
  const company = await Utils.getCurrentCompany();
  const role_id = await Utils.getCurrentUser()?.roles[0]?.id;

  try {
    const apiOptions =
      +id == 3
        ? {
            endpoint: `${baseURL}/api/inventory?company_id=${
              company?.id
            }&database_id=${id}&brand_id=${brandId}&shop_id=${shopId}&limit=${limit}&sort_field=ingredient_name&sort_order=asc&page=${page}&distinct_ingredients=1&tag=${
              role_id == 4 ? 'shop' : role_id == 5 ? 'brand' : 'company'
            }&ingredient_type=ingredient`,
            headers: {
              Authorization: `Bearer ${Utils.getCurrentToken()}`,
            },
            method: 'GET',
          }
        : {
            endpoint: `${baseURL}/api/inventory?database_id=${id}&sort_field=ingredient_name&sort_order=asc&limit=${limit}&page=${page}`,
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

const searchAllSubRecipeInventory = async (
  id,
  page,
  limit,
  brandId,
  shopId,
  keyword,
  ingredient_type,
  sort_field,
  sort
) => {
  const company = await Utils.getCurrentCompany();
  const role_id = await Utils.getCurrentUser()?.roles[0]?.id;

  try {
    const apiOptions =
      +id == 3
        ? {
            endpoint: `${baseURL}/api/inventory?company_id=${
              company?.id
            }&database_id=${id}&brand_id=${brandId}&sort_field=ingredient_name&sort_order=asc&shop_id=${shopId}&limit=${limit}&page=${page}&distinct_ingredients=1&tag=${
              role_id == 4 ? 'shop' : role_id == 5 ? 'brand' : 'company'
            }&keyword=${keyword}${
              ingredient_type != '' ? `&ingredient_type=${ingredient_type}` : ''
            }&sort_field=${sort_field}&sort_order=${
              sort === 1 ? 'asc' : 'desc'
            }`,
            headers: {
              Authorization: `Bearer ${Utils.getCurrentToken()}`,
            },
            method: 'GET',
          }
        : {
            endpoint: `${baseURL}/api/inventory?database_id=${id}&sort_field=ingredient_name&sort_order=asc&limit=${limit}&page=${page}`,
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

const getSubRecipeInventory = async (id, param) => {
  const company = await Utils.getCurrentCompany();
  const brand = await Utils.getCurrentBrand();
  const role_id = await Utils.getCurrentUser()?.roles[0]?.id;
  try {
    const apiOptions =
      +id == 3
        ? {
            endpoint: `${baseURL}/api/inventory?company_id=${
              company?.id
            }&brand_id=${
              brand?.brand_id
            }&database_id=${id}&sort_field=ingredient_name&sort_order=asc&limit=100&keyword=${param}&tag=${
              role_id == 4 ? 'shop' : role_id == 5 ? 'brand' : 'company'
            }`,
            headers: {
              Authorization: `Bearer ${Utils.getCurrentToken()}`,
            },
            method: 'GET',
          }
        : {
            endpoint: `${baseURL}/api/inventory?database_id=${id}&sort_field=ingredient_name&sort_order=asc&limit=100&keyword=${param}`,
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

const getSubRecipeInventoryForPurchaseOrder = async (
  id,
  param,
  supplier_id,
  shop
) => {
  const company = await Utils.getCurrentCompany();
  const brand = await Utils.getCurrentBrand();
  const role_id = await Utils.getCurrentUser()?.roles[0]?.id;

  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/inventory?company_id=${
        company?.id
      }&limit=100&sort_field=ingredient_name&sort_order=asc&shop_id=${shop}&brand_id=${
        brand?.brand_id
      }&supplier_id=${supplier_id}&ingredient_type=ingredient&tag=${
        role_id == 4 ? 'shop' : role_id == 5 ? 'brand' : 'company'
      }`,
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

const getSubRecipeUnits = async () => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/unit?limit=10`,
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

const getStorageUnits = async () => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/storage_unit`,
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

const createSubRecipe = async (params, thumbnail) => {
  const formData = new FormData();
  formData.set('data', JSON.stringify(params));
  formData.append('thumbnail', thumbnail);

  const apiOptions = {
    endpoint: `${baseURL}/api/sub_recipes`,
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

const updateSubRecipe = async (params, thumbnail, id) => {
  const formData = new FormData();
  formData.set('data', JSON.stringify(params));
  formData.append('thumbnail', thumbnail);
  formData.append('_method', 'PUT');
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/sub_recipes/${id}`,
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

const getSubRecipesFilters = async () => {
  const company = await Utils.getCurrentCompany();
  const brand = await Utils.getCurrentBrand();

  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/filter/sub_recipe?company_id=${company?.id}&brand_id=${brand?.brand_id}`,
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

const downloadSubRecipe = async (rbId) => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/download/sub_recipe/${rbId}?key=production`,
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

const getIngredientDetail = async (id, brand_id) => {
  const company = await Utils.getCurrentCompany();

  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/sub_recipes/${id}?company_id=${company?.id}&brand_id=${brand_id}`,
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
      endpoint: `${baseURL}/api/sub_recipes/${id}`,
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
const subRecipesFilters = async (dataLength, page, filters) => {
  const company = await Utils.getCurrentCompany();
  const brand = await Utils.getCurrentBrand();

  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/sub_recipes?company_id=${
        company?.id
      }&brand_id=${brand?.brand_id}&limit=${dataLength}&page=${page}${
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

const searchSubRecipe = async (dataLength, page, keyword) => {
  const company = await Utils.getCurrentCompany();
  const brand = await Utils.getCurrentBrand();

  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/sub_recipes?company_id=${company?.id}&brand_id=${brand?.brand_id}&keyword=${keyword}&limit=${dataLength}&page=${page}`,
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

const delSubRecipe = async (sub_recipes_Id) => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/sub_recipes/${sub_recipes_Id}`,
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

const uploadSubRecipes = async (csv) => {
  try {
    const formData = new FormData();
    // formData.set('uploadType', 'sub_recipe');
    formData.append('module', 'company');
    formData.append('csv', csv);
    formData.append('brand_id', Utils.getCurrentBrand()?.brand_id);

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

const createSubRecipeInventory = async (data) => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/bulk_upload_recipes`,
      headers: {
        Authorization: `Bearer ${Utils.getCurrentToken()}`,
      },
      method: 'POST',
      data: data,
    };
    const apiResponse = await Utils.CallApi(apiOptions);
    return apiResponse.data;
  } catch (error) {
    return error;
  }
};

const SubRecipeActions = {
  getSubRecipes,
  getSubRecipeInventory,
  getSubRecipeUnits,
  getStorageUnits,
  createSubRecipe,
  updateSubRecipe,
  getSubRecipesFilters,
  subRecipesFilters,
  searchSubRecipe,
  delSubRecipe,
  downloadSubRecipe,
  getIngredientDetail,
  getDetailRecipe,
  uploadSubRecipes,
  createSubRecipeInventory,
  getSubRecipeInventoryByCharacter,
  getAllSubRecipeInventory,
  getSubRecipeInventoryForPurchaseOrder,
  searchAllSubRecipeInventory,
  getAllInventory,
  getAllIventoriesForList,
  getInventoryByCharacterForWizard,
};

export default SubRecipeActions;
