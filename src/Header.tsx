import React from 'react';
import { Dropdown, Space } from 'antd';
import { useMsal, useAccount, UnauthenticatedTemplate, AuthenticatedTemplate } from '@azure/msal-react';
import "./Header.css";
import { CaretDownFilled, HomeOutlined, LogoutOutlined } from '@ant-design/icons';

const Header: React.FC = () => {
  const { instance, inProgress } = useMsal();
  const account = useAccount(instance.getAllAccounts()[0]);

  const handleLogin = async () => {
    if (inProgress !== "none") {
      console.log('Interaction already in progress. Aborting login.');
      return;
    }

    try {
      await instance.loginPopup();
    } catch (e) {
      console.log('Error during login:', e);
    }
  };

  const handleLogout = async () => {
    if (inProgress !== "none") {
      console.log('Interaction already in progress. Aborting logout.');
      return;
    }

    try {
      await instance.logoutRedirect({ postLogoutRedirectUri: "/" });
    } catch (e) {
      console.log('Error during logout:', e);
      console.error(e);
    }
  };

  const items = [
    {
      key: '1',
      label: (
        <a href="/">
          Home
        </a>
      ),
      icon: <HomeOutlined />
    },
    {
      key: '2',
      label: (
        <a onClick={handleLogout}>
          Logout
        </a>
      ),
      icon: <LogoutOutlined />,
      disabled: false,
      danger: true,
    }
  ];

  return (
    <>
      <div className="navbar">
        <ul className="navbar-items">
          <li className="navbar-item navbar-brand">
            <div style={{display:'flex', padding:'none', textAlign:'center'}}>
              <a style={{textDecoration:"none", textAlign:'center'}} href="/">Sample Site</a>
            </div>
          </li>
          <AuthenticatedTemplate>
            <Dropdown menu={{ items }}>
              <a onClick={(e) => e.preventDefault()}>
                <div className='navbar-item'>
                  <Space>
                    <div>
                      {account?.username}
                    </div>
                    <CaretDownFilled />
                  </Space>
                </div>
              </a>
            </Dropdown>
          </AuthenticatedTemplate>
          <UnauthenticatedTemplate>
            <div>
              <button className="loginButton" onClick={handleLogin}>
                Login
              </button>
            </div>
          </UnauthenticatedTemplate>
        </ul>
      </div>
    </>
  )
};

export { Header };
