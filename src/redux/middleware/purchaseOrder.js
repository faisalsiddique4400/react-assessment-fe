import { baseURL } from '../../config/constant';
import Utils from '../../redux/utils';

const getPO = async (limit, current) => {
  const company = await Utils.getCurrentCompany();

  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/users?limit=${limit}&company_id=${company?.id}&page=${current}`,
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

const acceptPO = async (params, id) => {
  const apiOptions = {
    endpoint: `${baseURL}/api/accept_supply_stock/${id}`,
    headers: {
      Authorization: `Bearer ${Utils.getCurrentToken()}`,
    },
    method: 'PUT',
    data: params,
  };
  const apiResponse = await Utils.CallApi(apiOptions);

  return apiResponse.data;
};

const addPO = async (params) => {
  const apiOptions = {
    endpoint: `${baseURL}/api/users`,
    headers: {
      Authorization: `Bearer ${Utils.getCurrentToken()}`,
    },
    method: 'POST',
    data: params,
  };
  const apiResponse = await Utils.CallApi(apiOptions);

  return apiResponse.data;
};

const getPOById = async (id) => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/users/${id}`,
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

const searchPO = async (dataLength, page, keyword) => {
  const company = await Utils.getCurrentCompany();

  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/users?company_id=${company?.id}&keyword=${keyword}&limit=${dataLength}&page=${page}`,
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

const deletePO = async (rbId) => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/users//${rbId}`,
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

const updatePO = async (params, id) => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/users/${id}`,
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

const PurchaseApi = {
  getPO,
  addPO,
  acceptPO,
  getPOById,
  searchPO,
  deletePO,
  updatePO,
};

export default PurchaseApi;
