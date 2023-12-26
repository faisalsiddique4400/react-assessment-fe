/* eslint-disable no-unused-vars */
import { baseURL } from '../../config/constant';
import Utils from '../utils';

const getWasteFilter = async () => {
  try {
    const { id } = Utils.getCurrentCompany();
    const { brand_id } = Utils.getCurrentBrand();

    const apiOptions = {
      endpoint: `${baseURL}/api/filter/waste?company_id=${id}&brand_id=${brand_id}`,
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

const searchWastage = async (dataLength, page, keyword) => {
  const { id } = Utils.getCurrentCompany();
  const { brand_id } = Utils.getCurrentBrand();
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/waste?company_id=${id}&brand_id=${brand_id}&keyword=${keyword}&limit=${dataLength}`,
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

const getWastage = async (filters = null, limit = 6, page, search) => {
  try {
    const { id } = Utils.getCurrentCompany();
    const { brand_id } = Utils.getCurrentBrand();

    const apiOptions = {
      endpoint: `${baseURL}/api/waste?company_id=${id}&brand_id=${brand_id}&limit=${limit}&page=${page}&keyword=${search}`,
      headers: {
        Authorization: `Bearer ${Utils.getCurrentToken()}`,
      },
      method: 'GET',
      params:
        filters != null
          ? Object.fromEntries(
              Object.entries(filters).filter(([_, v]) => v != '')
            )
          : filters,
    };
    const apiResponse = await Utils.CallApi(apiOptions);
    return apiResponse.data;
  } catch (error) {
    return error;
  }
};

const getWasteType = async () => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/waste_type`,
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

const getWasteReason = async () => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/waste_reason`,
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

const addWastage = async (data) => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/waste`,
      headers: {
        Authorization: `Bearer ${Utils.getCurrentToken()}`,
      },
      method: 'POST',
      data,
    };
    const apiResponse = await Utils.CallApi(apiOptions);
    return apiResponse.data;
  } catch (error) {
    return error;
  }
};

const WastageActions = {
  getWasteFilter,
  searchWastage,
  getWastage,
  getWasteType,
  getWasteReason,
  addWastage,
};

export default WastageActions;
