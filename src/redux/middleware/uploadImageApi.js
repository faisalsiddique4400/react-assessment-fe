import { baseURL } from '../../config/constant';
import Utils from '../../redux/utils';

const getTaggedImages = async (limit, page, type) => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/get_tagged_images?limit=${limit}&type=${type}&page=${page}&brand_id=${
        Utils.getCurrentBrand()?.brand_id
      }&company_id=${Utils.getCurrentCompany()?.id}`,
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

const getUntaggedImages = async (limit, page, type) => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/get_untagged_images?limit=${limit}&type=${type}&page=${page}&brand_id=${
        Utils.getCurrentBrand()?.brand_id
      }&company_id=${Utils.getCurrentCompany()?.id}`,
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

const getUntaggedRecipes = async (type) => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/get_untagged_recipes?limit=1000&type=${type}&brand_id=${
        Utils.getCurrentBrand()?.brand_id
      }&company_id=1`,
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

const uploadRecipeImages = async (recipe_id, image, type) => {
  const formData = new FormData();
  formData.set('recipe_id', recipe_id);
  formData.append('image', image);
  formData.append('type', type);
  formData.append('brand_id', Utils.getCurrentBrand()?.brand_id);
  formData.append('company_id', 1);

  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/bulk_images_upload`,
      headers: {
        'Content-Type':
          'multipart/form-data; boundary=<calculated when request is sent>',
        Authorization: `Bearer ${Utils.getCurrentToken()}`,
      },
      method: 'POST',
      data: formData,
    };
    const apiResponse = await Utils.CallApi(apiOptions);

    return apiResponse.data;
  } catch (error) {
    return error;
  }
};

const searchUploadImages = async (
  end_point,
  dataLength,
  page,
  keyword,
  type
) => {
  const company = Utils.getCurrentCompany();
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/${end_point}?limit=${dataLength}&type=${type}&company_id=${company?.id}&keyword=${keyword}&page=${page}`,
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

const assignUntaggedImage = async (payload, id) => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/link_untagged_image/${id}`,
      headers: {
        Authorization: `Bearer ${Utils.getCurrentToken()}`,
      },
      method: 'PUT',
      data: payload,
    };
    const apiResponse = await Utils.CallApi(apiOptions);

    return apiResponse.data;
  } catch (error) {
    return error;
  }
};
const removetaggedImage = async (brand_id, company_id, id) => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/untag_thumbnail/${id}?type=recipe&brand_id=${brand_id}&company_id=${company_id}`,
      headers: {
        Authorization: `Bearer ${Utils.getCurrentToken()}`,
      },
      method: 'PUT',
    };
    const apiResponse = await Utils.CallApi(apiOptions);

    return apiResponse.data;
  } catch (error) {
    return error;
  }
};
const UploadRecipeApi = {
  getTaggedImages,
  getUntaggedImages,
  getUntaggedRecipes,
  uploadRecipeImages,
  searchUploadImages,
  assignUntaggedImage,
  removetaggedImage,
};

export default UploadRecipeApi;
