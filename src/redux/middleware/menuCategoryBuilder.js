import { baseURL } from '../../config/constant';
import Utils from '../../redux/utils';

const updateMenuCategoryBuilder = async (id, body) => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/rb_menu_category/${id}`,
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

const addMenuCategoryBuilder = async (params) => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/rb_menu_category`,
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

const getMenuCategoryByIdBuilder = async (id) => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/rb_menu_category/${id}`,
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

const getMenuCategoryBuilder = async (limit, page) => {
  const company = await Utils.getCurrentCompany();
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/rb_menu_category?company_id=${company?.id}&limit=${limit}&page=${page}
      `,
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

const searchCategoryBuilder = async (limit, keyword) => {
  const company = await Utils.getCurrentCompany();
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/rb_menu_category?company_id=${company?.id}&keyword=${keyword}&limit=${limit}`,
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

const deleteCategoryBuilder = async (id) => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/rb_menu_category/${id}`,
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

const MenuCategoryBuilderActions = {
  addMenuCategoryBuilder,
  updateMenuCategoryBuilder,
  getMenuCategoryByIdBuilder,
  getMenuCategoryBuilder,
  searchCategoryBuilder,
  deleteCategoryBuilder,
};

export default MenuCategoryBuilderActions;
