import { baseURL } from '../../config/constant';
import Utils from '../../redux/utils';

const UserLogin = (payload) => {
  // eslint-disable-next-line no-async-promise-executor
  return new Promise(async (resolve, reject) => {
    try {
      const { email, password } = payload;
      const apiOptions = {
        endpoint: `${baseURL}/auth/login`,
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
        data: {
          email,
          password,
        },
      };
      const apiResponse = await Utils.CallApi(apiOptions);
      resolve(apiResponse.data);
    } catch (error) {
      reject(error);
    }
  });
};

const UserAuthLogin = (payload) => {
  // eslint-disable-next-line no-async-promise-executor
  return new Promise(async (resolve, reject) => {
    try {
      const apiOptions = {
        endpoint: `${baseURL}/api/custom_login`,
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
        data: payload,
      };
      const apiResponse = await Utils.CallApi(apiOptions);
      resolve(apiResponse.data);
    } catch (error) {
      reject(error);
    }
  });
};

const UserSignUp = (payload) => {
  // eslint-disable-next-line no-async-promise-executor
  return new Promise(async (resolve, reject) => {
    try {
      const { email, phone, full_name, company, comment } = payload;
      const apiOptions = {
        endpoint: `${baseURL}/api/user_signup_request`,
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
        data: {
          full_name: full_name,
          phone: phone,
          email: email,
          comment: comment,
          company: company,
        },
      };
      const apiResponse = await Utils.CallApi(apiOptions);
      resolve(apiResponse.data);
    } catch (error) {
      reject(error);
    }
  });
};

const ForgotPassword = (payload) => {
  // eslint-disable-next-line no-async-promise-executor
  return new Promise(async (resolve, reject) => {
    try {
      const apiOptions = {
        endpoint: `${baseURL}/api/password/forgotPassword`,
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
        data: {
          email: payload,
        },
      };
      const apiResponse = await Utils.CallApi(apiOptions);
      resolve(apiResponse.data);
    } catch (error) {
      reject(error);
    }
  });
};

const ResetPassword = (email, password, confirm_password, token) => {
  // eslint-disable-next-line no-async-promise-executor
  return new Promise(async (resolve, reject) => {
    try {
      const apiOptions = {
        endpoint: `${baseURL}/api/password/resetPassword`,
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
        data: {
          email: email,
          password: password,
          confirm_password: confirm_password,
          token: token,
        },
      };
      const apiResponse = await Utils.CallApi(apiOptions);
      resolve(apiResponse.data);
    } catch (error) {
      reject(error);
    }
  });
};

const VerifyEmail = (email) => {
  // eslint-disable-next-line no-async-promise-executor
  return new Promise(async (resolve, reject) => {
    try {
      const apiOptions = {
        endpoint: `${baseURL}/api/password/resendEmailSend`,
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
        data: {
          email: email,
        },
      };
      const apiResponse = await Utils.CallApi(apiOptions);
      resolve(apiResponse.data);
    } catch (error) {
      reject(error);
    }
  });
};

const VerifyUser = (id, token, email, password) => {
  // eslint-disable-next-line no-async-promise-executor
  return new Promise(async (resolve, reject) => {
    try {
      const apiOptions = {
        endpoint: `${baseURL}/api/users_verify/${id}?token=${token}`,
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
        data: {
          email: email,
          password: password,
        },
      };
      const apiResponse = await Utils.CallApi(apiOptions);
      resolve(apiResponse.data);
    } catch (error) {
      reject(error);
    }
  });
};

const AuthActions = {
  UserLogin,
  ForgotPassword,
  ResetPassword,
  VerifyEmail,
  VerifyUser,
  UserSignUp,
  UserAuthLogin,
};

export default AuthActions;
