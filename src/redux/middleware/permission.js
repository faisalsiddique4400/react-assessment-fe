import { baseURL } from '../../config/constant';
import Utils from '../../redux/utils';

const getPermission = async (limit, current) => {
  // const company = await Utils.getCurrentCompany();

  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/permissions?limit=${limit}&page=${current}`,
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

const getParentPermission = async () => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/parent_permissions`,
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

const addPermission = async (params) => {
  const apiOptions = {
    endpoint: `${baseURL}/api/permissions`,
    headers: {
      Authorization: `Bearer ${Utils.getCurrentToken()}`,
    },
    method: 'POST',
    data: params,
  };
  const apiResponse = await Utils.CallApi(apiOptions);

  return apiResponse.data;
};

const getPermissionById = async (id) => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/permissions/${id}`,
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

const searchPermission = async (dataLength, page, keyword) => {
  const company = await Utils.getCurrentCompany();

  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/permissions?company_id=${company?.id}&keyword=${keyword}&limit=${dataLength}&page=${page}`,
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

const deleteUser = async (rbId) => {
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

const disablePermission = async (id, key) => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/permissions/${id}`,
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

const getUserRoles = async () => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/user_roles?limit=100`,
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

const getUserPermissions = async (role) => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/user_permssions?limit=100&role_id=${role}`,
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

const updatePermission = async (params, id) => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/permissions/${id}`,
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
const UsersApi = {
  getPermission,
  addPermission,
  getPermissionById,
  searchPermission,
  deleteUser,
  disablePermission,
  getUserRoles,
  getUserPermissions,
  updatePermission,
  getParentPermission,
};

export default UsersApi;
