import { baseURL } from '../../config/constant';
import Utils from '../utils';

const getMenu = async (dataLength, page, brandId, keyword = '') => {
  const company = await Utils.getCurrentCompany();

  const type = keyword.length > 1 ? 'keyword' : 'char';

  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/menu?company_id=${company?.id}&${type}=${keyword}&brand_id=${brandId}&limit=${dataLength}&page=${page}&status=1`,
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

const getManageMenu = async (dataLength, page, brandId, keyword) => {
  const company = await Utils.getCurrentCompany();

  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/menu?company_id=${company?.id}&brand_id=${brandId}&limit=${dataLength}&page=${page}&keyword=${keyword}`,
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

const getMenuDetail = async (id, brandId, itemType) => {
  const company = await Utils.getCurrentCompany();
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/menu?company_id=${company?.id}&brand_id=${brandId}&limit=50&status=1&item_type=${itemType}&id=${id}`,
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

const updateManageMenu = async (id, body) => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/menu/${id}`,
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

const changeStatusMenu = async (id, status, type) => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/disable_menu/${id}`,
      headers: {
        Authorization: `Bearer ${Utils.getCurrentToken()}`,
      },
      method: 'PUT',
      data: {
        status: status,
        item_type: type,
      },
    };
    const apiResponse = await Utils.CallApi(apiOptions);
    return apiResponse.data;
  } catch (error) {
    return error;
  }
};

const getMenuFilters = async () => {
  const company = await Utils.getCurrentCompany();
  const brand = await Utils.getCurrentBrand();
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/filter/menu?company_id=${company?.id}&brand_id=${brand?.brand_id}`,
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

const menuFilters = async (dataLength, page, filters, keyword) => {
  const company = await Utils.getCurrentCompany();
  const brand = await Utils.getCurrentBrand();

  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/menu?company_id=${company?.id}&brand_id=${brand?.brand_id}&limit=${dataLength}&page=${page}&keyword=${keyword}&menu_category_id=${filters?.category_id}&calorie=${filters?.calorie}&allergens_id=${filters?.allergens_id}&is_verified=${filters?.is_verified}&status=1`,
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

const menuPillFilter = async (dataLength, page, filters) => {
  const company = await Utils.getCurrentCompany();
  const brand = await Utils.getCurrentBrand();

  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/menu?company_id=${company?.id}&sort_by=sequence&order_by=asc&brand_id=${brand?.brand_id}&limit=${dataLength}&page=${page}&menu_category_id=${filters}&status=1`,
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

const submitMenuSequence = async (params) => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/category_sequence`,
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

const manageMenuPillFilter = async (dataLength, page, filters) => {
  const company = await Utils.getCurrentCompany();
  const brand = await Utils.getCurrentBrand();

  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/menu?company_id=${company?.id}&brand_id=${brand?.brand_id}&limit=${dataLength}&page=${page}&menu_category_id=${filters}`,
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

const searchMenu = async (dataLength, page, keyword) => {
  const company = await Utils.getCurrentCompany();
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/menu?company_id=${company?.id}&brand_id=${
        Utils.getCurrentBrand()?.brand_id
      }&keyword=${keyword}&limit=${dataLength}&page=${page}&status=1`,
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

const searchManageMenu = async (dataLength, page, keyword) => {
  const company = await Utils.getCurrentCompany();
  const brand = await Utils.getCurrentBrand();

  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/menu?company_id=${company?.id}&brand_id=${brand?.brand_id}&keyword=${keyword}&limit=${dataLength}&page=${page}`,
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

const RecipeActions = {
  menuFilters,
  getMenuFilters,
  getMenu,
  searchMenu,
  getMenuDetail,
  menuPillFilter,
  submitMenuSequence,
  getManageMenu,
  searchManageMenu,
  changeStatusMenu,
  updateManageMenu,
  manageMenuPillFilter,
};

export default RecipeActions;
