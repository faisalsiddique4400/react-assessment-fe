import { baseURL } from '../../config/constant';
import Utils from '../utils';

const getBrands = async (dataLength, page, keyword = '') => {
  const id = await Utils.getCurrentCompany()?.id;
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/brands?company_id=${id}&limit=${dataLength}&page=${page}&keyword=${keyword}`,
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

const getBrandById = async (Id) => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/brands/${Id}`,
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

const searchBrands = async (dataLength, page, keyword) => {
  const company = await Utils.getCurrentCompany();
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/brands?company_id=${company?.id}&keyword=${keyword}&limit=${dataLength}&page=${page}`,
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

const deleteBrands = async (brandId) => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/brands/${brandId}`,
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

const addBrand = async (params, thumbnail) => {
  const formData = new FormData();
  formData.set('data', JSON.stringify(params));
  formData.append('thumbnail', thumbnail);

  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/brands`,
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

const updateBrand = async (id, params, thumbnail) => {
  const formData = new FormData();
  formData.set('data', JSON.stringify(params));
  formData.append('thumbnail', thumbnail);

  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/brands/${id}`,
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

const BrandActions = {
  getBrands,
  searchBrands,
  deleteBrands,
  addBrand,
  updateBrand,
  getBrandById,
};

export default BrandActions;
