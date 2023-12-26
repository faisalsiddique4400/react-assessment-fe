import { baseURL } from '../../config/constant';
import Utils from '../../redux/utils';

const getSubscriptionPlans = async () => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/subscription/get_packages?limit=8`,
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

const getSubscriptionById = async (id) => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/subscription/user/${id}`,
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

const changePlans = async (param) => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/subscription/change_plan`,
      headers: {
        Authorization: `Bearer ${Utils.getCurrentToken()}`,
      },
      method: 'POST',
      data: param,
    };
    const apiResponse = await Utils.CallApi(apiOptions);
    return apiResponse.data;
  } catch (error) {
    return error;
  }
};

const cancelSubscription = async (param) => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/subscription/cancel`,
      headers: {
        Authorization: `Bearer ${Utils.getCurrentToken()}`,
      },
      method: 'POST',
      data: param,
    };
    const apiResponse = await Utils.CallApi(apiOptions);
    return apiResponse.data;
  } catch (error) {
    return error;
  }
};

const SubscriptionApi = {
  getSubscriptionPlans,
  changePlans,
  cancelSubscription,
  getSubscriptionById,
};

export default SubscriptionApi;
