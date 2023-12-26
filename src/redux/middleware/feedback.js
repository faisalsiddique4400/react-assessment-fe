import { baseURL } from '../../config/constant';
import Utils from '../../redux/utils';

const getScreens = async () => {
  const role = await Utils.getCurrentUser()?.roles[0]?.id;
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

const getFeedbackTypes = async () => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/issue_types`,
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

const createFeedback = async (params, thumbnail) => {
  const formData = new FormData();
  formData.set('data', JSON.stringify(params));
  formData.append('thumbnail', thumbnail);

  const apiOptions = {
    endpoint: `${baseURL}/api/feedback`,
    headers: {
      'Content-Type':
        'multipart/form-data; boundary=<calculated when request is sent>',
      Authorization: `Bearer ${Utils.getCurrentToken()}`,
    },
    method: 'POST',
    data: formData,
  };
  const apiResponse = await Utils.CallApi(apiOptions);

  return apiResponse.data;
};

const getFeedbacks = async (dataLength, page) => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/feedback?limit=${dataLength}&page=${page}`,
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

const getFeedbackBySearch = async (dataLength, keyword) => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/feedback?limit=${dataLength}&keyword=${keyword}`,
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

const getFeedbackById = async (id) => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/feedback/${id}`,
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

const FeedbackApi = {
  getScreens,
  getFeedbackTypes,
  createFeedback,
  getFeedbacks,
  getFeedbackBySearch,
  getFeedbackById,
};

export default FeedbackApi;
