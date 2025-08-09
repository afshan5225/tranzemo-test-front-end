import { Layout } from 'antd';
import React from 'react';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

const { Header, Content, Sider } = Layout;

const Dashboard = () => {
  return (
    <Layout className="min-h-screen">
   
      <Header className="!bg-gradient-to-bl from-purple-600 to-pink-800 flex justify-between items-center px-6 shadow-md">
       
        <div className="text-white text-3xl italic font-extrabold tracking-wide">
          Accedo
        </div>

        
        <a
          href="/"
          className="text-white text-2xl hover:text-yellow-300 transition-colors duration-200 font-medium  bg-red-500"
        >
          Go back
        </a>
      </Header>

    
      <Layout>
       
        <Sider
          width={230}
          className="!bg-white border-r border-gray-200 shadow-sm"
        >
          <Sidebar />
        </Sider>

        
        <Layout className="p-6 bg-gray-50">
          <Content className="bg-white shadow-md rounded-lg p-6 min-h-[80vh]">
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
