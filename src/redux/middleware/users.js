import { baseURL } from '../../config/constant';
import Utils from '../../redux/utils';

const getUsers = async (limit, current, brand, keyword) => {
  const company = await Utils.getCurrentCompany();

  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/users?limit=${limit}&company_id=${company?.id}&page=${current}&brand_id=${brand}&keyword=${keyword}`,
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

const addUsers = async (params) => {
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

const getUserById = async (id) => {
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

const searchUsers = async (dataLength, page, keyword) => {
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

const disableUser = async (id, key) => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/users/${id}`,
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

const getShopBrands = async (id, query) => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/shop_has_brands?${query}=${id}`,
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

const getUserDesignation = async () => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/user_designations?limit=100`,
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
const getUserCompany = async () => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/companies?limit=100`,
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

const getUserCompanyById = async (id) => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/companies/${id}`,
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
const getUserBrands = async (company_id) => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/brands?company_id=${company_id}&limit=100`,
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
const getUserBranches = async () => {
  const company = await Utils.getCurrentCompany();

  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/shops?limit=10&company_id=${company?.id}&limit=100`,
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

const updateUser = async (params, id) => {
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
const UsersApi = {
  getUsers,
  addUsers,
  getUserById,
  searchUsers,
  deleteUser,
  disableUser,
  getUserRoles,
  getUserDesignation,
  getUserCompany,
  getUserBrands,
  getUserBranches,
  getUserPermissions,
  updateUser,
  getShopBrands,
  getUserCompanyById,
};

export default UsersApi;
