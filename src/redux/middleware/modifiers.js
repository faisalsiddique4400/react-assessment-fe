import { baseURL } from '../../config/constant';
import Utils from '../utils';
const id = Utils.getCurrentCompany()?.id;
const getModifiers = async (dataLength, page, keyword) => {
  const brand = await Utils.getCurrentBrand();
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/modifiers?company_id=${id}&limit=${dataLength}&brand_id=${brand?.brand_id}&page=${page}&keyword=${keyword}`,
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

const searchModifiers = async (dataLength, page, keyword) => {
  const company = await Utils.getCurrentCompany();
  const brand = await Utils.getCurrentBrand();
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/modifiers?company_id=${company?.id}&keyword=${keyword}&brand_id=${brand?.brand_id}&limit=${dataLength}&page=${page}`,
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

const getModifiersById = async (id) => {
  const brand = await Utils.getCurrentBrand();
  const company = await Utils.getCurrentCompany();

  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/modifiers?id=${id}&limit=100&company_id=${company?.id}&brand_id=${brand?.brand_id}`,
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

const getModifiersType = async () => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/getModifierTypes?limit=3`,
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

const createModifiers = async (params) => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/modifiers`,
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

const updateModifierIngredient = async (id, params) => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/modifiers/${id}?tag=ingredient`,
      headers: {
        Authorization: `Bearer ${Utils.getCurrentToken()}`,
      },
      method: 'PUT',
      data: {
        ingredients: params,
      },
    };
    const apiResponse = await Utils.CallApi(apiOptions);

    return apiResponse.data;
  } catch (error) {
    return error;
  }
};

const updateModifier = async (id, params) => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/modifiers/${id}`,
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

const delModifier = async (rbId) => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/modifiers/${rbId}`,
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

const getMenuCategory = async (id) => {
  const company = await Utils.getCurrentCompany();
  const brand = await Utils.getCurrentBrand();
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/sub_category?parent_category_id=${id}&sort_by=id&order_by=asc&limit=50&&company_id=${company?.id}&brand_id=${brand?.brand_id}`,
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
const ModifiersActions = {
  getModifiers,
  createModifiers,
  getModifiersType,
  getModifiersById,
  searchModifiers,
  getMenuCategory,
  updateModifier,
  delModifier,
  updateModifierIngredient,
};

export default ModifiersActions;
