import { baseURL } from '../../config/constant';
import Utils from '../../redux/utils';

const createLead = async (payload) => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/lead`,
      headers: {
        Authorization: `Bearer ${Utils.getCurrentToken()}`,
      },
      method: 'POST',
      data: payload,
    };
    const apiResponse = await Utils.CallApi(apiOptions);

    return apiResponse.data;
  } catch (error) {
    return error;
  }
};
const getLeads = async (limit, page) => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/leads?limit=${limit}&page=${page}`,
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

const getSearchLeads = async (limit, keyword) => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/leads?limit=${limit}&keyword=${keyword}`,
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

const LeadGenerationApi = {
  createLead,
  getLeads,
  getSearchLeads,
};

export default LeadGenerationApi;
