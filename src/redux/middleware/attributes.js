import { baseURL } from '../../config/constant';
import Utils from '../../redux/utils';

const getAllergens = async () => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/allergens`,
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

const getAdditionalInfo = async () => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/rb_attribute`,
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

const getMenuCategory = async (company_id) => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/menu_categories?company_id=${company_id}&limit=50`,
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

const exportRBCSV = async (type) => {
  const company = await Utils.getCurrentCompany();
  const brand = await Utils.getCurrentBrand();
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/export_rb_data?company_id=${company?.id}&brand_id=${brand?.brand_id}&type=${type}`,
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

const exportCSV = async (type) => {
  const company = await Utils.getCurrentCompany();
  const brand = await Utils.getCurrentBrand();
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/export_data?company_id=${company?.id}&brand_id=${brand?.brand_id}&type=${type}`,
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

const exportCSVForInventory = async (brandId, shopId) => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/download_marketlist?brand_id=${brandId}&shop_id=${shopId}`,
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

const getStatus = async () => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/ca_status`,
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

const Attributes = {
  getAllergens,
  getAdditionalInfo,
  getMenuCategory,
  exportRBCSV,
  exportCSV,
  getStatus,
  exportCSVForInventory,
};

export default Attributes;
