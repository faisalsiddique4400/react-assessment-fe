import { baseURL } from '../../config/constant';
import Utils from '../utils';

const getShops = async (dataLength, page, brand_id, keyword) => {
  const company = await Utils.getCurrentCompany();
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/shops?brand_id=${brand_id}&limit=${dataLength}&page=${page}&company_id=${company?.id}&keyword=${keyword}`,
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

const getBranchById = async (Id) => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/shops/${Id}`,
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

const searchShops = async (dataLength, page, keyword) => {
  const company = await Utils.getCurrentCompany();
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/shops?brand_id=${
        Utils.getCurrentBrand()?.brand_id
      }&keyword=${keyword}&limit=${dataLength}&page=${page}&company_id=${
        company?.id
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

const addBranch = async (params) => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/shops`,
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

const updateBranch = async (id, params) => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/shops/${id}`,
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

const removeBranch = async (id) => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/shops/${id}`,
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

const getBrands = async (dataLength, page) => {
  const id = await Utils.getCurrentCompany()?.id;
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/brands?company_id=${id}&limit=${dataLength}&page=${page}`,
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

const getCities = async (id) => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/cities?country_id=${id}&limit=100`,
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

const checkCentralKitchen = async (is_ck) => {
  const company = await Utils.getCurrentCompany();
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/validate_shop_ck?company_id=${company?.id}&is_ck=${is_ck}`,
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

const GetBranchFromBrand = async (brand_id) => {
  const user = await Utils.getCurrentUser();
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/user_has_shops?user_id=${user?.id}&brand_id=${brand_id}`,
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

const BranchActions = {
  getBrands,
  getShops,
  searchShops,
  updateBranch,
  addBranch,
  getBranchById,
  removeBranch,
  getCities,
  checkCentralKitchen,
  GetBranchFromBrand,
};

export default BranchActions;
