import { baseURL } from '../../config/constant';
import Utils from '../../redux/utils';

const updateBuyingUnit = async (id, body) => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/buying_unit/${id}`,
      headers: {
        Authorization: `Bearer ${Utils.getCurrentToken()}`,
      },
      method: 'PUT',
      data: body,
    };
    const apiResponse = await Utils.CallApi(apiOptions);
    return apiResponse.data;
  } catch (error) {
    return error;
  }
};

const addBuyingUnit = async (params) => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/buying_unit`,
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

const getBuyingUnitById = async (id) => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/buying_unit/${id}`,
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

const getBuyingUnit = async (limit, page, keyword) => {
  const company = await Utils.getCurrentCompany();
  const shop = await Utils.getCurrentShop();
  const brand = await Utils.getCurrentBrand();

  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/buying_unit?company_id=${company?.id}&brand_id=${brand?.brand_id}&shop_id=${shop?.shop_id}&limit=${limit}&page=${page}&keyword=${keyword}`,
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

const searchBuyingUnit = async (company_id, limit, keyword) => {
  const company = await Utils.getCurrentCompany();

  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/buying_unit?company_id=${company?.id}&keyword=${keyword}&limit=${limit}`,
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

const deleteBuyingUnit = async (id) => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/buying_unit/${id}`,
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

const IngredientCategoryActions = {
  addBuyingUnit,
  updateBuyingUnit,
  getBuyingUnitById,
  getBuyingUnit,
  searchBuyingUnit,
  deleteBuyingUnit,
};

export default IngredientCategoryActions;
