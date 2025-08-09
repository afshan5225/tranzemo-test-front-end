import React, { useEffect, useState } from 'react';
import { useAppContext } from '../../context/useAppcontext';
import { Table, Button, Space } from 'antd';
import { useNavigate } from 'react-router-dom';

const Layout = () => {
  const { axios } = useAppContext();
  const [dataSource, setDataSource] = useState([]);
  const navigate = useNavigate();

  const fetchdetails = async () => {
    try {
      const res = await axios.get('/details', {
        params: { deleted: true }
      });
      setDataSource(res.data.data); 
    } catch (error) {
      console.error("Error fetching details:", error);
    }
  };

  useEffect(() => {
    fetchdetails();
  }, []);

  
  const handleDelete = async (record) => {
  try {
    await axios.patch(`/details/${record.id}`, { deleted: false });
    console.log(`Deleted record: ${record.id}`);
    fetchdetails()
  } catch (error) {
    console.error('Error deleting record:', error);
  }
};

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email'
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      key: 'gender'
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <Space>
          
          <Button  onClick={() => handleDelete(record)}>Approve</Button>
        </Space>
      )
    }
  ];

  return (
    <div style={{ padding: 20 }}>
      <Table
        dataSource={dataSource}
        columns={columns}
        rowKey="id" 
        pagination={{ pageSize: 10 }}
      />
    </div>
  );
};

export default Layout;
