import { baseURL } from '../../config/constant';
import Utils from '../../redux/utils';

const getAllRoles = async () => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/user_roles?limit=100&roles=all`,
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

const getUserAccessList = async (role_id, dataLength, page) => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/user_access?limit=${dataLength}&page=${page}&role_id=${role_id}`,
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

const getUserAccessListBySearch = async (role_id, dataLength, keyword) => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/user_access?limit=${dataLength}&keyword=${keyword}&role_id=${role_id}`,
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

const disableUserAccess = async (id, key) => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/user_access/${id}`,
      headers: {
        Authorization: `Bearer ${Utils.getCurrentToken()}`,
      },
      method: 'DELETE',
      data: { status: key },
    };
    const apiResponse = await Utils.CallApi(apiOptions);
    return apiResponse.data;
  } catch (error) {
    return error;
  }
};

const createUserRole = async (params) => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/user_access`,
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

const getUserAccessById = async (id) => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/user_access/${id}`,
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

const updateUserAccess = async (params, id) => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/user_access/${id}`,
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

const UserAccessApi = {
  getAllRoles,
  getUserAccessList,
  getUserAccessListBySearch,
  createUserRole,
  getUserAccessById,
  disableUserAccess,
  updateUserAccess,
};

export default UserAccessApi;
