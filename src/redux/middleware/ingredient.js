import { baseURL } from '../../config/constant';
import Utils from '../../redux/utils';

const getDatabase = async () => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/rb_database`,
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

const getDatabaseById = async (id) => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/rb_database/${id}`,
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

const deleteRBIngredientById = async (id) => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/rb_inventory/${id}`,
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

const getIngredient = async () => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/rb_ingredient_category`,
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

const getUnits = async () => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/rb_units`,
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

const postInventory = async (inventory) => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/rb_inventory`,
      headers: {
        Authorization: `Bearer ${Utils.getCurrentToken()}`,
      },
      method: 'POST',
      data: inventory,
    };
    const apiResponse = await Utils.CallApi(apiOptions);

    return apiResponse.data;
  } catch (error) {
    return error;
  }
};
const updateInventory = async (inventory, id) => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/rb_inventory/${id}`,
      headers: {
        Authorization: `Bearer ${Utils.getCurrentToken()}`,
      },
      method: 'PUT',
      data: inventory,
    };
    const apiResponse = await Utils.CallApi(apiOptions);

    return apiResponse.data;
  } catch (error) {
    return error;
  }
};

const getInventory = async (id, char, company_id) => {
  try {
    const apiOptions =
      +id == 3
        ? {
            endpoint: `${baseURL}/api/rb_inventory?database_id=${id}&limit=300&next=0&${
              char?.length > 1 ? 'keyword' : 'character'
            }=${char}&company_id=${company_id}`,
            headers: {
              Authorization: `Bearer ${Utils.getCurrentToken()}`,
            },
            method: 'GET',
          }
        : {
            endpoint: `${baseURL}/api/rb_inventory?database_id=${id}&limit=300&next=0&${
              char?.length > 1 ? 'keyword' : 'character'
            }=${char}`,
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

const getInventoryWithPagination = async (
  id,
  char,
  company_id,
  dataLength,
  page,
  brandId
) => {
  try {
    const apiOptions =
      +id == 3
        ? {
            endpoint: `${baseURL}/api/rb_inventory?database_id=${id}&brand_id=${brandId}&limit=${dataLength}&page=${page}&${
              char?.length > 1 ? 'keyword' : 'character'
            }=${char}&company_id=${company_id}`,
            headers: {
              Authorization: `Bearer ${Utils.getCurrentToken()}`,
            },
            method: 'GET',
          }
        : {
            endpoint: `${baseURL}/api/rb_inventory?database_id=${id}&limit=300&next=0&${
              char?.length > 1 ? 'keyword' : 'character'
            }=${char}`,
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

const getRBInventoryById = async (id) => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/rb_inventory/${id}`,
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

const getInventoryById = async (id) => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/inventory/${id}`,
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

const createNonRbInventory = async (inventory) => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/inventory`,
      headers: {
        Authorization: `Bearer ${Utils.getCurrentToken()}`,
      },
      method: 'POST',
      data: inventory,
    };
    const apiResponse = await Utils.CallApi(apiOptions);

    return apiResponse.data;
  } catch (error) {
    return error;
  }
};

const addSuplierToInventory = async (inventory, id) => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/inventory_supplier/${id}`,
      headers: {
        Authorization: `Bearer ${Utils.getCurrentToken()}`,
      },
      method: 'POST',
      data: inventory,
    };
    const apiResponse = await Utils.CallApi(apiOptions);

    return apiResponse.data;
  } catch (error) {
    return error;
  }
};

const updateNonRbInventory = async (inventory, id) => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/inventory/${id}`,
      headers: {
        Authorization: `Bearer ${Utils.getCurrentToken()}`,
      },
      method: 'PUT',
      data: inventory,
    };
    const apiResponse = await Utils.CallApi(apiOptions);

    return apiResponse.data;
  } catch (error) {
    return error;
  }
};

const deleteInventory = async (id) => {
  // const company=Utils.getCurrentCompany();
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/inventory/${id}`,
      headers: {
        Authorization: `Bearer ${Utils.getCurrentToken()}`,
      },
      method: 'DELETE',
      data: { company_id: Utils.getCurrentCompany()?.id },
    };
    const apiResponse = await Utils.CallApi(apiOptions);

    return apiResponse.data;
  } catch (error) {
    return error;
  }
};

const IngredientActions = {
  getDatabase,
  getDatabaseById,
  deleteRBIngredientById,
  getIngredient,
  getInventory,
  getUnits,
  getAllergens,
  postInventory,
  createNonRbInventory,
  addSuplierToInventory,
  updateNonRbInventory,
  getInventoryById,
  getRBInventoryById,
  updateInventory,
  getInventoryWithPagination,
  deleteInventory,
};

export default IngredientActions;
