import React from 'react';
import { Layout, Menu } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Header } = Layout;

const NavBar = () => {
  const navigate = useNavigate();

  const loginHandler = () => {
    navigate("/Dashboard");
  };

  return (
    <Layout style={{ background: 'transparent' }}>
      <Header
        className="flex justify-between items-center px-5 mt-6"
        style={{
          background: 'transparent',
          boxShadow: 'none',
          borderBottom: 'none'
        }}
      >
        <div className="text-gray-400 text-4xl italic font-extrabold">
          Accedo
        </div>

        <Menu
          theme="dark"
          mode="vertical"
          defaultSelectedKeys={['1']}
          style={{
            background: 'transparent',
            borderBottom: 'none'
          }}
          className="bg-transparent"
        >
          <Menu.Item
            key="1"
            className="hover:scale-110 shadow  transition-all duration-500 ease-in-out font-bold scale-111 "
            onClick={loginHandler}
          >
            Dashboard
          </Menu.Item>
        </Menu>
      </Header>
    </Layout>
  );
};

export default NavBar;
