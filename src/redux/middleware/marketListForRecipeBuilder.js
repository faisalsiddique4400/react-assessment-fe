import { baseURL } from '../../config/constant';
import Utils from '../../redux/utils';
import fileDownload from 'js-file-download';

const getRBMarketList = async () => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/rb_download_marketlist`,
      headers: {
        Authorization: `Bearer ${Utils.getCurrentToken()}`,
      },
      method: 'GET',
    };
    const apiResponse = await Utils.CallApi(apiOptions);
    fileDownload(apiResponse.data?.data, 'test.xlsx');
    return apiResponse.data;
  } catch (error) {
    return error;
  }
};

const RB_Bulk_Upload_MarketList = async (file, source, brand_id) => {
  const formData = new FormData();
  formData.set('file', file);
  formData.append('source', source);
  formData.append('brand_id', brand_id);

  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/rb_bulk_upload_marketlist`,
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

const MarketListForRB = {
  getRBMarketList,
  RB_Bulk_Upload_MarketList,
};

export default MarketListForRB;
