import { baseURL } from '../../config/constant';
import Utils from '../utils';
const getVariation = async (dataLength, page, search) => {
  const company = await Utils.getCurrentCompany();
  const brand = await Utils.getCurrentBrand();

  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/variations?company_id=${company?.id}&brand_id=${brand?.brand_id}&limit=${dataLength}&page=${page}&keyword=${search}`,
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

const createVariation = async (params) => {
  const company = await Utils.getCurrentCompany();
  const brand = await Utils.getCurrentBrand();

  const apiOptions = {
    endpoint: `${baseURL}/api/variations?company_id=${company?.id}&brand_id=${brand?.brand_id}`,
    headers: {
      Authorization: `Bearer ${Utils.getCurrentToken()}`,
    },
    method: 'POST',
    data: params,
  };
  const apiResponse = await Utils.CallApi(apiOptions);

  return apiResponse.data;
};

const updateVariation = async (params, id) => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/variations/${id}`,
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

const searchVariation = async (dataLength, keyword) => {
  const company = await Utils.getCurrentCompany();
  const brand = await Utils.getCurrentBrand();
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/variations?company_id=${company?.id}&brand_id=${brand?.brand_id}&limit=${dataLength}&keyword=${keyword}`,
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
const deleteVariation = async (id) => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/variations/${id}`,
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
const getDetailvariations = async (id) => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/variations/${id}`,
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
const VariationActions = {
  getVariationType,
  searchVariation,
  getVariation,
  deleteVariation,
  createVariation,
  updateVariation,
  getDetailvariations,
};

export default VariationActions;
