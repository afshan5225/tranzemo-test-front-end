import React from 'react';
import { Menu } from 'antd';
import {
  DashboardOutlined,
  CheckCircleOutlined,
} from '@ant-design/icons';
import { useNavigate, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  
  const currentPath = location.pathname;

  return (
    <div className="min-h-screen w-56 shadow-md bg-white border-r border-gray-200">
      <div className="text-purple-700 text-2xl font-bold italic text-center py-6 border-b border-gray-200">
        
      </div>
      <Menu
        mode="inline"
        selectedKeys={[currentPath]}
        className="border-none"
        onClick={({ key }) => navigate(key)}
      >
        <Menu.Item
          key="/dashboard/layout"
          icon={<DashboardOutlined />}
          className="hover:!bg-purple-100"
        >
          Dashboard
        </Menu.Item>
        <Menu.Item
          key="/dashboard/add"
          icon={<CheckCircleOutlined />}
          className="hover:!bg-purple-100"
        >
          Add user
        </Menu.Item>
         <Menu.Item
          key="/dashboard/approve"
          icon={<CheckCircleOutlined />}
          className="hover:!bg-purple-100"
        >
          Approve
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Sidebar;
