import { baseURL } from '../../config/constant';
import Utils from '../../redux/utils';
const getCategory = async () => {
  const company = await Utils.getCurrentCompany();
  const brand = await Utils.getCurrentBrand();

  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/rb_menu_category?company_id=${company?.id}&brand_id=${brand?.brand_id}`,
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
const getMenuCategory = async (id) => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/menu_categories?company_id=${id}&limit=50`,
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

const getIngredientCategory = async (id) => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/rb_ingredient_category?company_id=${id}&limit=1000`,
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

const createIngredientCategory = async (param) => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/rb_ingredient_category`,
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

const createMenuCategory = async (category) => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/rb_menu_category`,
      headers: {
        Authorization: `Bearer ${Utils.getCurrentToken()}`,
      },
      method: 'POST',
      data: {
        category_name: category,
      },
    };
    const apiResponse = await Utils.CallApi(apiOptions);

    return apiResponse.data;
  } catch (error) {
    return error;
  }
};

const CategoryActions = {
  getCategory,
  getIngredientCategory,
  createIngredientCategory,
  createMenuCategory,
  getMenuCategory,
};

export default CategoryActions;
