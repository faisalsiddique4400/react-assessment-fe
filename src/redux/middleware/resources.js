import { baseURL } from '../../config/constant';
import Utils from '../utils';

const getCountries = async (dataLength, page) => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/countries?limit=${dataLength}&page=${page}`,
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

const getCities = async (dataLength, page, id) => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/cities?country_id=${id}&limit=${dataLength}&page=${page}`,
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

const getConsumptionMethods = async (dataLength, page) => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/consumption_methods?limit=${dataLength}&page=${page}`,
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

const uploadMarketList = async (csv) => {
  try {
    const formData = new FormData();
    formData.set('source', 'api');
    formData.append('file', csv);
    formData.append('brand_id', Utils.getCurrentBrand()?.brand_id);

    const apiOptions = {
      endpoint: `${baseURL}/api/bulk_upload_marketlist`,
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

const ResourcesActions = {
  getCountries,
  getConsumptionMethods,
  getCities,
  uploadMarketList,
};

export default ResourcesActions;
