import { baseURL } from '../../config/constant';
import Utils from '../../redux/utils';

const getSupplier = async (limit, current, brandId, keyword) => {
  const company = await Utils.getCurrentCompany();
  const shop = await Utils.getCurrentShop();

  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/suppliers?limit=${limit}&company_id=${
        company?.id
      }&shop_id=${
        shop?.shop_id ? shop?.shop_id : ''
      }&page=${current}&brand_id=${brandId}&keyword=${keyword}`,
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

const getSupplierOfShop = async (limit, current, shop_id) => {
  const company = await Utils.getCurrentCompany();

  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/suppliers?limit=${limit}&company_id=${company?.id}&page=${current}&shop_id=${shop_id}&status=1`,
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

const getSupplierForWizard = async (limit) => {
  const company = await Utils.getCurrentCompany();
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/suppliers?limit=${limit}&company_id=${company?.id}`,
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

const getSupplierCity = async () => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/supplier_city`,
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

const addSupplier = async (params) => {
  const apiOptions = {
    endpoint: `${baseURL}/api/suppliers`,
    headers: {
      Authorization: `Bearer ${Utils.getCurrentToken()}`,
    },
    method: 'POST',
    data: params,
  };
  const apiResponse = await Utils.CallApi(apiOptions);

  return apiResponse.data;
};

const getSupplierById = async (id) => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/suppliers/${id}`,
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

const searchSupplier = async (dataLength, page, keyword) => {
  const company = await Utils.getCurrentCompany();

  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/suppliers?company_id=${company?.id}&keyword=${keyword}&limit=${dataLength}&page=${page}`,
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

const deleteSupplier = async (id) => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/suppliers/${id}`,
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

const disableSupplier = async (id, key) => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/users/${id}`,
      headers: {
        Authorization: `Bearer ${Utils.getCurrentToken()}`,
      },
      method: 'DELETE',
      data: { status: key },
    };
    const apiResponse = await Utils.CallApi(apiOptions);
    return apiResponse.data;
  } catch (error) {
    return error;
  }
};

const updateSupplier = async (id, params) => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/suppliers/${id}`,
      headers: {
        Authorization: `Bearer ${Utils.getCurrentToken()}`,
      },
      method: 'PUT',
      data: params,
    };
    const apiResponse = await Utils.CallApi(apiOptions);

    return apiResponse.data;
  } catch (error) {
    return error;
  }
};

const getSupplierTaggedIngredients = async (
  supplier_id,
  limit,
  current,
  shopId
) => {
  const company = await Utils.getCurrentCompany();
  const brand = await Utils.getCurrentBrand();
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/inventory?limit=${limit}&sort_field=ingredient_name&sort_order=asc&supplier_id=${supplier_id}&distinct_ingredients=1&company_id=${company?.id}&page=${current}&shop_id=${shopId}&brand_id=${brand?.brand_id}&ingredient_type=ingredient`,
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

const getSupplierUnTaggedIngredients = async (
  supplier_id,
  limit,
  current,
  shopId
) => {
  const company = await Utils.getCurrentCompany();
  const brand = await Utils.getCurrentBrand();
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/inventory?limit=${limit}&sort_field=ingredient_name&sort_order=asc&not_supplier_id=${supplier_id}&distinct_ingredients=1&company_id=${company?.id}&page=${current}&shop_id=${shopId}&brand_id=${brand?.brand_id}&ingredient_type=ingredient`,
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

const getSupplierSearchIngredients = async (
  supplier_id,
  limit,
  keyword,
  supplier_type
) => {
  const company = await Utils.getCurrentCompany();
  const brand = await Utils.getCurrentBrand();
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/inventory?limit=${limit}&sort_field=ingredient_name&sort_order=asc&${supplier_type}=${supplier_id}&distinct_ingredients=1&company_id=${company?.id}&keyword=${keyword}&brand_id=${brand?.brand_id}`,
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

const getBuyingUnits = async (supplier_id) => {
  const company = await Utils.getCurrentCompany();
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/buying_unit?company_id=${company?.id}&limit=100&supplier_id=${supplier_id},
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

const getSupplyStatus = async (status) => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/inventory_supply_status?status_type=${status}`,
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

const getInventorySupply = async (status, limit, page, shop, brand_id) => {
  const company = await Utils.getCurrentCompany();
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/inventory_supply?company_id=${company?.id}&limit=${limit}&request_type_id=${status}&page=${page}&shop_id=${shop}&brand_id=${brand_id}`,
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

const searchInventorySupply = async (
  status,
  limit,
  page,
  shop,
  brand_id,
  keyword
) => {
  const company = await Utils.getCurrentCompany();
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/inventory_supply?company_id=${company?.id}&limit=${limit}&request_type_id=${status}&page=${page}&shop_id=${shop}&brand_id=${brand_id}&keyword=${keyword}`,
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

const getInventorySupplyById = async (id) => {
  // const company = await Utils.getCurrentCompany();
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/inventory_supply/${id}`,
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

const createInventorySupply = async (params) => {
  const apiOptions = {
    endpoint: `${baseURL}/api/inventory_supply`,
    headers: {
      Authorization: `Bearer ${Utils.getCurrentToken()}`,
    },
    method: 'POST',
    data: params,
  };
  const apiResponse = await Utils.CallApi(apiOptions);

  return apiResponse.data;
};

const updateInventorySupply = async (params, id) => {
  const apiOptions = {
    endpoint: `${baseURL}/api/inventory_supply/${id}`,
    headers: {
      Authorization: `Bearer ${Utils.getCurrentToken()}`,
    },
    method: 'PUT',
    data: params,
  };
  const apiResponse = await Utils.CallApi(apiOptions);

  return apiResponse.data;
};

const getInventoryTransfer = async (
  status,
  limit,
  page,
  shop,
  transfer_status,
  brand_id
) => {
  const company = await Utils.getCurrentCompany();
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/inventory_supply?company_id=${company?.id}&limit=${limit}&request_type_id=${status}&transfer_status_id=${transfer_status}&page=${page}&request_to_shop_id=${shop}&brand_id=${brand_id}`,
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

const searchInventoryTransfer = async (
  status,
  limit,
  page,
  shop,
  transfer_status,
  brand_id,
  keyword
) => {
  const company = await Utils.getCurrentCompany();
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/inventory_supply?company_id=${company?.id}&limit=${limit}&request_type_id=${status}&transfer_status_id=${transfer_status}&page=${page}&request_to_shop_id=${shop}&brand_id=${brand_id}&keyword=${keyword}`,
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

const updateInventorySupplyStatus = async (params, id) => {
  const apiOptions = {
    endpoint: `${baseURL}/api/update_supply_status/${id}`,
    headers: {
      Authorization: `Bearer ${Utils.getCurrentToken()}`,
    },
    method: 'PUT',
    data: params,
  };
  const apiResponse = await Utils.CallApi(apiOptions);

  return apiResponse.data;
};

const getInventoryForRequisition = async (id, param, brand_id, shop_id) => {
  const company = await Utils.getCurrentCompany();

  try {
    const apiOptions =
      +id == 3
        ? {
            endpoint: `${baseURL}/api/inventory?company_id=${company?.id}&database_id=${id}&sort_field=ingredient_name&sort_order=asc&limit=100&keyword=${param}&brand_id=${brand_id}&shop_id=${shop_id}&ingredient_type=ingredient`,
            headers: {
              Authorization: `Bearer ${Utils.getCurrentToken()}`,
            },
            method: 'GET',
          }
        : {
            endpoint: `${baseURL}/api/inventory?database_id=${id}&sort_field=ingredient_name&sort_order=asc&limit=100&keyword=${param}`,
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

const deleteInventorySupply = async (params, id) => {
  const apiOptions = {
    endpoint: `${baseURL}/api/inventory_supply/${id}`,
    headers: {
      Authorization: `Bearer ${Utils.getCurrentToken()}`,
    },
    method: 'DELETE',
    data: params,
  };
  const apiResponse = await Utils.CallApi(apiOptions);

  return apiResponse.data;
};

const acceptInventorySupply = async (params, id) => {
  const apiOptions = {
    endpoint: `${baseURL}/api/accept_supply_stock/${id}`,
    headers: {
      Authorization: `Bearer ${Utils.getCurrentToken()}`,
    },
    method: 'PUT',
    data: params,
  };
  const apiResponse = await Utils.CallApi(apiOptions);

  return apiResponse.data;
};

const SupplierApi = {
  getSupplier,
  getSupplierCity,
  addSupplier,
  getSupplierById,
  searchSupplier,
  deleteSupplier,
  disableSupplier,
  updateSupplier,
  getSupplierTaggedIngredients,
  getSupplierUnTaggedIngredients,
  getBuyingUnits,
  getSupplierSearchIngredients,
  getSupplierForWizard,
  getSupplyStatus,
  getInventorySupply,
  createInventorySupply,
  getInventorySupplyById,
  getSupplierOfShop,
  updateInventorySupply,
  getInventoryTransfer,
  updateInventorySupplyStatus,
  getInventoryForRequisition,
  deleteInventorySupply,
  acceptInventorySupply,
  searchInventorySupply,
  searchInventoryTransfer,
};

export default SupplierApi;
