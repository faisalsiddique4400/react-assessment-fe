import { baseURL } from '../../config/constant';
import Utils from '../../redux/utils';

const getReportTopBar = async () => {
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/reports_top_bar`,
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

const getReports = async (
  tag,
  report_type,
  limit,
  duration,
  period_from,
  period_to
) => {
  const company = await Utils.getCurrentCompany();
  const brand = await Utils.getCurrentBrand();
  const branch = await Utils.getCurrentShop();
  const user = await Utils.getCurrentUser();
  try {
    const apiOptions = {
      endpoint: `${baseURL}/api/reports?company_id=${company?.id}&role_id=${
        user?.roles[0]?.id
      }&branch_id=${branch?.shop_id || 28}&brand_id=${
        brand?.brand_id
      }&tag=${tag}&report_type=${report_type}&limit=${limit}&duration=${duration}&period_from=${period_from}&period_to=${period_to}`,
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

const ReportsApi = {
  getReportTopBar,
  getReports,
};

export default ReportsApi;
