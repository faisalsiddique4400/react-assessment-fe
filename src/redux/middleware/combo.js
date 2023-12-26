import { baseURL } from '../../config/constant';
import Utils from '../utils';
const getCombos = async (dataLength, page, keyword) => {
  const brand = await Utils.getCurrentBrand();

  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/combos?company_id=${
        Utils.getCurrentCompany()?.id
      }&limit=${dataLength}&brand_id=${
        brand?.brand_id
      }&page=${page}&keyword=${keyword}`,
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

const comboFilter = async (dataLength, filters) => {
  const brand = await Utils.getCurrentBrand();

  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/combos?company_id=${
        Utils.getCurrentCompany()?.id
      }&limit=${dataLength}&brand_id=${
        brand?.brand_id
      }&menu_category_id=${filters}`,
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

const searchCombo = async (dataLength, keyword) => {
  const brand = await Utils.getCurrentBrand();
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/combos?company_id=${
        Utils.getCurrentCompany()?.id
      }&brand_id=${brand?.brand_id}&limit=${dataLength}&keyword=${keyword}`,
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

const deleteCombo = async (id) => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/combos/${id}`,
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

const createCombo = async (params, thumbnail) => {
  const formData = new FormData();
  formData.set('data', JSON.stringify(params));
  formData.append('thumbnail', thumbnail);

  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/combos`,
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
const getRecipesForCombo = async (menu_category_id) => {
  const brand = await Utils.getCurrentBrand();
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/recipes?company_id=${
        Utils.getCurrentCompany()?.id
      }&brand_id=${
        brand?.brand_id
      }&limit=1000&menu_category_id=${menu_category_id}`,
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
const getDetailRecipeforcombo = async (id) => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/recipes/${id}`,
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

const updateCombo = async (params, thumbnail, id) => {
  const formData = new FormData();
  formData.set('data', JSON.stringify(params));
  formData.append('_method', 'PUT');
  formData.append('thumbnail', thumbnail == null ? {} : thumbnail);
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/combos/${id}`,
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
const getDetailCombo = async (id) => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/combos/${id}`,
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

const getSubCategoriesForCombo = async (parent_category_id, limit, page) => {
  const company = await Utils.getCurrentCompany();
  const brand = await Utils.getCurrentBrand();
  const shop = await Utils.getCurrentShop();
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/sub_category?parent_category_id=${parent_category_id}&sort_by=created_at&order_by=desc&company_id=${
        company?.id
      }&brand_id=${brand?.brand_id}&shop_id=${
        shop?.shop_id ? shop?.shop_id : ''
      }&limit=${limit}&page=${page}&has_items=true
      `,
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

const ComboActions = {
  getCombos,
  searchCombo,
  deleteCombo,
  createCombo,
  getDetailRecipeforcombo,
  getRecipesForCombo,
  updateCombo,
  getDetailCombo,
  comboFilter,
  getSubCategoriesForCombo,
};

export default ComboActions;
