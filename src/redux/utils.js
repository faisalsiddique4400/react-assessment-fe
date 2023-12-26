import axios from 'axios';
// import { ResponseDialog } from '../components';

async function CallApi(apiOptions) {
  let apiResponse = {};

  const config = {
    method: apiOptions?.method,
    url: apiOptions?.endpoint,
    headers: apiOptions?.headers,
    data: apiOptions?.data,
    params: apiOptions?.params,
    responseType: apiOptions?.responseType,
  };

  await axios(config)
    .then((result) => {
      apiResponse = result;
    })
    .catch((error) => {
      if (error.response.status === 401) {
        let responseDialogData = {
          OnClick: () => {
            setCurrentUser();
            setCurrentToken();
            const location = window.location;
            window.location.href = location.origin;
          },
          type: 'error',
          messageArray: [
            `OOPS!`,
            `Your Token has been Expired`,
            `Kindly Login again.`,
          ],
        };
        // ResponseDialog(responseDialogData);
      }
      apiResponse = error;
    });

  return apiResponse;
}

const setCurrentUser = (user) => {
  try {
    if (user) {
      localStorage.setItem('__chefAdminUser', JSON.stringify(user));
    } else {
      localStorage.removeItem('__chefAdminUser');
    }
  } catch (error) {
    console.log('setCurrentUser -> error', error);
  }
};

const getCurrentUser = () => {
  let user = null;
  try {
    user =
      localStorage.getItem('__chefAdminUser') != null
        ? JSON.parse(localStorage.getItem('__chefAdminUser'))
        : null;
  } catch (error) {
    console.log('getCurrentUser -> error', error);
    user = null;
  }
  return user;
};

const setCurrentToken = (token) => {
  try {
    if (token) {
      localStorage.setItem('__chefAdminToken', JSON.stringify(token));
    } else {
      localStorage.removeItem('__chefAdminToken');
    }
  } catch (error) {
    console.log('setCurrentToken -> error', error);
  }
};

const getCurrentToken = () => {
  let token = null;
  try {
    token =
      localStorage.getItem('__chefAdminToken') != null
        ? JSON.parse(localStorage.getItem('__chefAdminToken'))
        : null;
  } catch (error) {
    console.log('getCurrentToken -> error', error);
    token = null;
  }
  return token;
};

const setCurrentUserPermission = (permissions) => {
  try {
    if (permissions) {
      localStorage.setItem(
        '__chefAdminPermissions',
        JSON.stringify(permissions)
      );
    } else {
      localStorage.removeItem('__chefAdminPermissions');
    }
  } catch (error) {
    console.log('setCurrentUserPermission -> error', error);
  }
};

const getCurrentUserPermission = () => {
  let permission = null;
  try {
    permission =
      localStorage.getItem('__chefAdminPermissions') != null
        ? JSON.parse(localStorage.getItem('__chefAdminPermissions'))
        : null;
  } catch (error) {
    console.log('__chefAdminPermissions -> error', error);
    permission = null;
  }
  return permission;
};

const setCurrentMenu = (permissions) => {
  try {
    if (permissions) {
      localStorage.setItem('__chefAdminMenu', JSON.stringify(permissions));
    } else {
      localStorage.removeItem('__chefAdminMenu');
    }
  } catch (error) {
    console.log('setCurrentUserMenu -> error', error);
  }
};

const getCurrentMenu = () => {
  let permission = null;
  try {
    permission =
      localStorage.getItem('__chefAdminMenu') != null
        ? JSON.parse(localStorage.getItem('__chefAdminMenu'))
        : null;
  } catch (error) {
    console.log('getCurrentMenu -> error', error);
    permission = null;
  }
  return permission;
};

const setBrandList = (brandList) => {
  try {
    if (brandList) {
      localStorage.setItem('__chefAdminBrands', JSON.stringify(brandList));
    } else {
      localStorage.removeItem('__chefAdminBrands');
    }
  } catch (error) {
    console.log('setBrandList -> error', error);
  }
};

const getBrandList = () => {
  let brandList = null;
  try {
    brandList =
      localStorage.getItem('__chefAdminBrands') != null
        ? JSON.parse(localStorage.getItem('__chefAdminBrands'))
        : null;
  } catch (error) {
    console.log('getBrandList -> error', error);
    brandList = null;
  }
  return brandList;
};

const setShopList = (shopList) => {
  try {
    if (shopList) {
      localStorage.setItem('__chefAdminShops', JSON.stringify(shopList));
    } else {
      localStorage.removeItem('__chefAdminShops');
    }
  } catch (error) {
    console.log('setShopList -> error', error);
  }
};

const getShopList = () => {
  let shopList = null;
  try {
    shopList =
      localStorage.getItem('__chefAdminShops') != null
        ? JSON.parse(localStorage.getItem('__chefAdminShops'))
        : null;
  } catch (error) {
    console.log('getShopList -> error', error);
    shopList = null;
  }
  return shopList;
};

const setCompanyList = (companyList) => {
  try {
    if (companyList) {
      localStorage.setItem('__chefAdminCompany', JSON.stringify(companyList));
    } else {
      localStorage.removeItem('__chefAdminCompany');
    }
  } catch (error) {
    console.log('setCompanyList -> error', error);
  }
};

const getCompanyList = () => {
  let companyList = null;
  try {
    companyList =
      localStorage.getItem('__chefAdminCompany') != null
        ? JSON.parse(localStorage.getItem('__chefAdminCompany'))
        : null;
  } catch (error) {
    console.log('getCompanyList -> error', error);
    companyList = null;
  }
  return companyList;
};

const setCurrentCompany = (company) => {
  try {
    if (company) {
      localStorage.setItem('__currentCompany', JSON.stringify(company));
    } else {
      localStorage.removeItem('__currentCompany');
    }
  } catch (error) {
    console.log('setCurrentCompany -> error', error);
  }
};

const getCurrentCompany = () => {
  let company = null;
  try {
    company =
      localStorage.getItem('__currentCompany') != null
        ? JSON.parse(localStorage.getItem('__currentCompany'))
        : null;
  } catch (error) {
    console.log('getCurrentCompany -> error', error);
    company = null;
  }
  return company;
};

const setCurrentBrand = (brand) => {
  try {
    if (brand) {
      localStorage.setItem('__currentBrand', JSON.stringify(brand));
    } else {
      localStorage.removeItem('__currentBrand');
    }
  } catch (error) {
    console.log('setCurrentBrand -> error', error);
  }
};

const getCurrentBrand = () => {
  let brand = null;
  try {
    brand =
      localStorage.getItem('__currentBrand') != null
        ? JSON.parse(localStorage.getItem('__currentBrand'))
        : null;
  } catch (error) {
    console.log('getCurrentBrand -> error', error);
    brand = null;
  }
  return brand;
};

const setCurrentShop = (shop) => {
  try {
    if (shop) {
      localStorage.setItem('__currentShop', JSON.stringify(shop));
    } else {
      localStorage.removeItem('__currentShop');
    }
  } catch (error) {
    console.log('setCurrentShop -> error', error);
  }
};

const getCurrentShop = () => {
  let shop = null;
  try {
    shop =
      localStorage.getItem('__currentShop') != null
        ? JSON.parse(localStorage.getItem('__currentShop'))
        : null;
  } catch (error) {
    console.log('getCurrentBrand -> error', error);
    shop = null;
  }
  return shop;
};

const renderErrorItem = (errorList) => {
  let errorItem;
  const {
    number_of_columns,
    recipe_exists,
    column_errors,
    sub_recipe_exists,
    messages,
  } = errorList;

  if (number_of_columns) {
    errorItem = number_of_columns;
  }
  if (recipe_exists) {
    errorItem = recipe_exists;
  }
  if (sub_recipe_exists) {
    errorItem = sub_recipe_exists;
  }
  if (column_errors) {
    errorItem = column_errors;
  }
  if (messages) {
    errorItem = messages;
  }

  return errorItem;
};

export const getScreenPermission = (Option) => {
  let screens = null;
  try {
    screens =
      localStorage.getItem('__chefAdminPermissions') != null
        ? JSON.parse(localStorage.getItem('__chefAdminPermissions'))
        : null;
  } catch (error) {
    console.log(
      '>>>>: src/helpers/Utils.js  : getScreenPermission -> error',
      error
    );
    screens = null;
  }

  if (screens) {
    const selectedPagePermission = screens.find((x) => x.permission === Option);
    return selectedPagePermission;
  }

  return null;
};

const Utils = {
  CallApi,
  getCurrentUser,
  setCurrentUser,
  setCurrentToken,
  getCurrentToken,
  setBrandList,
  getBrandList,
  setShopList,
  getShopList,
  getCurrentUserPermission,
  setCurrentUserPermission,
  setCurrentMenu,
  getCurrentMenu,
  setCompanyList,
  getCompanyList,
  getCurrentCompany,
  setCurrentCompany,
  getCurrentBrand,
  setCurrentBrand,
  getCurrentShop,
  setCurrentShop,
  renderErrorItem,
  getScreenPermission,
};

export default Utils;
