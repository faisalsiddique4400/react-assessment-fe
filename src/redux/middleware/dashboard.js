import { baseURL } from '../../config/constant';
import Utils from '../utils';

const fetchDashboardInfo = async (company_id, brand_id, shop_id, tag = '') => {
  try {
    const filters = {
      company_id,
      brand_id,
      branch_id: shop_id,
      tag,
    };
    const apiOptions = {
      endpoint: `${baseURL}/api/dashboard?role_id=${
        Utils.getCurrentUser()?.roles[0]?.id
      }`,
      headers: {
        Authorization: `Bearer ${Utils.getCurrentToken()}`,
      },
      method: 'GET',
      params: filters,
    };
    const apiResponse = await Utils.CallApi(apiOptions);
    return apiResponse.data;
  } catch (error) {
    return error;
  }
};
const DashBoardActions = {
  fetchDashboardInfo,
};

export default DashBoardActions;
