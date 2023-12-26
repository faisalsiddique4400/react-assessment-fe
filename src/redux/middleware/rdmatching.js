import { baseURL } from '../../config/constant';
import Utils from '../../redux/utils';

const getMAtchUnMatch = async (limit, type, current, keyword) => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/untagged_rb_ingredients?database_id=3&ingredient_type=ingredient&limit=${limit}&keyword=${keyword}&company_id=${
        Utils.getCurrentCompany()?.id
      }&page=${current}&is_matched=${type}&brand_id=${
        Utils.getCurrentBrand()?.brand_id
      }`,
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
const searchMAtchUnMatch = async (limit, type, keyword) => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/untagged_rb_ingredients?database_id=3&limit=${limit}&company_id=${
        Utils.getCurrentCompany()?.id
      }&is_matched=${type}&keyword=${keyword}&ingredient_type=ingredient&brand_id=${
        Utils.getCurrentBrand()?.brand_id
      }`,
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
const getUnmatchdropdown = async () => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/inventory?limit=500&sort_field=ingredient_name&sort_order=asc&distinct_ingredients=1&company_id=${
        Utils.getCurrentCompany()?.id
      }&brand_id=${
        Utils.getCurrentBrand()?.brand_id
      }&ingredient_type=ingredient`,
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
const updateUnmatch = async (data, id) => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/rb_matched_ingredient/${id}`,
      headers: {
        Authorization: `Bearer ${Utils.getCurrentToken()}`,
      },
      method: 'PUT',
      data: data,
    };
    const apiResponse = await Utils.CallApi(apiOptions);

    return apiResponse.data;
  } catch (error) {
    return error;
  }
};
const RdMatchingApi = {
  getMAtchUnMatch,
  getUnmatchdropdown,
  updateUnmatch,
  searchMAtchUnMatch,
};

export default RdMatchingApi;
