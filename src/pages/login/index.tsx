import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import "./login.scss";
import AuthActions from '../../redux/middleware/auth';
import Utils from '../../redux/utils';
import { useNavigate } from 'react-router-dom';
import { css } from '@emotion/react';
import { ClipLoader } from 'react-spinners';
import { Alert, Space } from 'antd';


const Login = () => {


  const navigate = useNavigate();
  const { UserLogin } = AuthActions;
  const { t } = useTranslation('translation', {
    keyPrefix: 'login',
  });

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const validateForm = () => {
    let isValid = true;

    if (!username.trim()) {
      setUsernameError(`${t('User Required')}`);
      isValid = false;
    } else {
      setUsernameError('');
    }

    if (!password.trim()) {
      setPasswordError(`${t('Password Required')}`);
      isValid = false;
    } else {
      setPasswordError('');
    }

    return isValid;
  };

  const handleLoginSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      setLoading(true); // Set loading to true when login is in progress

      const response = await UserLogin({ email: username, password });

      console.log('Login success:', response);
      if (response?.success) {
        Utils.setCurrentToken(response?.data);
        setUsername('');
        setPassword('');
        setRememberMe(false);
        setError('');
        navigate('/app/movies', { state: { successMessage: 'Login successful!' } });
      }
    } catch (error) {
      console.error('Login error:', error);
      setError('Invalid credentials. Please try again.');
    } finally {
      setLoading(false); // Reset loading state when login attempt is complete
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLoginSubmit}>
        <h2 className="sign-in-heading">{t("title")}</h2>
        <div className="form-group">
          <input
            type="text"
            placeholder="Email"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {usernameError && <div className="error-message">{usernameError}</div>}
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {passwordError && <div className="error-message">{passwordError}</div>}
        </div>
        <div className="form-group checkbox-container">
          <input
            type="checkbox"
            id="rememberMe"
            name="rememberMe"
            checked={rememberMe}
            onChange={() => setRememberMe(!rememberMe)}
          />
          <label htmlFor="rememberMe">{t("Checkbox lable")}</label>
        </div>
        {error && <div className="error-message">{error}</div>}
        {loading ? (
          <ClipLoader cssOverride={{
            display: 'block',
            margin: '0 auto'
          }}
            size={50}
            color={'#2BD17E'}
            loading={loading}
          />
        ) : (
          <button type="submit">{t("title")}</button>
        )}

        {/* Display success message using Ant Design Alert */}
        {successMessage && (
          <Alert message={successMessage} type="success" showIcon closable onClose={() => setSuccessMessage('')} />
        )}
      </form>
    </div>
  );
};

export default Login;
