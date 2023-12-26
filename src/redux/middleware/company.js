import { baseURL } from '../../config/constant';
import Utils from '../utils';

const getCompany = async (dataLength, page) => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/companies?limit=${dataLength}&page=${page}`,
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

const getCompanyById = async (Id) => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/companies/${Id}`,
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

const searchCompany = async (dataLength, page, keyword) => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/companies?keyword=${keyword}&limit=${dataLength}&page=${page}`,
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

const removeCompany = async (company_id) => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/companies/${company_id}`,
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

const updateStatus = async (company_id, status) => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/update_company_status/${company_id}`,
      headers: {
        Authorization: `Bearer ${Utils.getCurrentToken()}`,
      },
      method: 'POST',
      data: { status },
    };
    const apiResponse = await Utils.CallApi(apiOptions);

    return apiResponse.data;
  } catch (error) {
    return error;
  }
};

const addCompany = async (params, thumbnail) => {
  const formData = new FormData();
  formData.set('data', JSON.stringify(params));
  formData.append('thumbnail', thumbnail);

  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/companies`,
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

const updateCompany = async (id, params, thumbnail) => {
  const formData = new FormData();
  formData.set('data', JSON.stringify(params));
  formData.append('thumbnail', thumbnail);

  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/companies/${id}`,
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

const CompanyActions = {
  getCompany,
  searchCompany,
  removeCompany,
  updateStatus,
  addCompany,
  updateCompany,
  getCompanyById,
};

export default CompanyActions;
