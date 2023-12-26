import { baseURL } from '../../config/constant';
import Utils from '../../redux/utils';

const updateMenuCategory = async (id, body) => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/menu_categories/${id}`,
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

const addMenuCategory = async (params) => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/menu_categories`,
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

const getMenuCategoryById = async (id) => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/menu_categories/${id}`,
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

const getMenuCategory = async (limit, page) => {
  const company = await Utils.getCurrentCompany();
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/menu_categories?company_id=${company?.id}&limit=${limit}&page=${page}`,
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

const searchCategory = async (limit, keyword) => {
  const company = await Utils.getCurrentCompany();
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/menu_categories?company_id=${company?.id}&keyword=${keyword}&limit=${limit}`,
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

const deleteCategory = async (id) => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/menu_categories/${id}`,
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

const getParentCategories = async () => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/parent_category?status=1
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

const getSubCategories = async (parent_category_id, limit, page, keyword) => {
  const company = await Utils.getCurrentCompany();
  const brand = await Utils.getCurrentBrand();
  const shop = await Utils.getCurrentShop();
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/sub_category?parent_category_id=${parent_category_id}&sort_by=created_at&order_by=desc&company_id=${
        company?.id
      }&brand_id=${brand?.brand_id}&shop_id=${
        shop?.shop_id ? shop?.shop_id : ''
      }&limit=${limit}&page=${page}
      &keyword=${keyword}`,
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

const getSubCategoriesForMenu = async (parent_category_id, limit) => {
  const company = await Utils.getCurrentCompany();
  const brand = await Utils.getCurrentBrand();
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/sub_category?parent_category_id=${parent_category_id}&sort_by=sequence&order_by=asc&company_id=${company?.id}&brand_id=${brand?.brand_id}&limit=${limit}`,
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

const getSubCategoriesForInventory = async (parent_category_id, limit) => {
  const company = await Utils.getCurrentCompany();
  const brand = await Utils.getCurrentBrand();
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/sub_category?parent_category_id=${parent_category_id}&sort_by=sequence&order_by=asc&company_id=${company?.id}&brand_id=${brand?.brand_id}&limit=${limit}`,
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

const getSubCategoriesForWizard = async (parent_category_id, limit) => {
  const company = await Utils.getCurrentCompany();
  const brand = await Utils.getCurrentBrand();
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/sub_category?parent_category_id=${parent_category_id}&sort_by=created_at&order_by=desc&company_id=${company?.id}&brand_id=${brand?.brand_id}&limit=${limit}`,
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

const getSubCategoryById = async (id) => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/sub_category/${id}`,
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

const addSubCategories = async (params) => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/sub_category`,
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

const updateSubCategories = async (id, body) => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/sub_category/${id}`,
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

const searchSubCategories = async (parent_category_id, limit, keyword) => {
  const company = await Utils.getCurrentCompany();
  const brand = await Utils.getCurrentBrand();
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/sub_category?parent_category_id=${parent_category_id}&sort_by=id&order_by=asc&keyword=${keyword}&company_id=${company?.id}&brand_id=${brand?.brand_id}&limit=${limit}
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

const deleteSubCategory = async (params, id) => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/sub_category/${id}`,
      headers: {
        Authorization: `Bearer ${Utils.getCurrentToken()}`,
      },
      method: 'DELETE',
      data: params,
    };
    const apiResponse = await Utils.CallApi(apiOptions);

    return apiResponse.data;
  } catch (error) {
    return error;
  }
};

const getSubCategoriesById = async (id) => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/sub_category/${id}`,
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

const MenuCategoryActions = {
  addMenuCategory,
  updateMenuCategory,
  getMenuCategoryById,
  getMenuCategory,
  searchCategory,
  deleteCategory,
  getParentCategories,
  getSubCategories,
  addSubCategories,
  updateSubCategories,
  getSubCategoriesById,
  searchSubCategories,
  deleteSubCategory,
  getSubCategoriesForWizard,
  getSubCategoryById,
  getSubCategoriesForMenu,
  getSubCategoriesForInventory,
};

export default MenuCategoryActions;
