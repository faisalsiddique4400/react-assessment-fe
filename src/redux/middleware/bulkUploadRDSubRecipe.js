import { baseURL } from '../../config/constant';
import Utils from '../utils';

const uploadIngredients = async (file, module) => {
  const brand = await Utils.getCurrentBrand();
  const formData = new FormData();
  formData.set('file', file);
  formData.set('brand_id', brand?.brand_id);
  formData.append('module', module);
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/bulk_upload_marketlist`,
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

const uploadRecipes = async (file, module) => {
  const brand = await Utils.getCurrentBrand();
  const formData = new FormData();
  formData.set('csv', file);
  formData.set('brand_id', brand?.brand_id);
  formData.append('module', module);
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/bulk_upload_recipes`,
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

const BulkUpload = {
  uploadIngredients,
  uploadRecipes,
};

export default BulkUpload;
