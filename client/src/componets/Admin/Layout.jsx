import React, { useEffect, useState } from 'react';
import { useAppContext } from '../../context/useAppcontext';
import { Table, Button, Space, Spin, message, Select } from 'antd';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const { Option } = Select;

const Layout = () => {
  const { axios } = useAppContext();
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);
  const [gender, setGender] = useState("all"); 
  const navigate = useNavigate();

  const fetchdetails = async () => {
    setLoading(true);
    try {
      let params = { deleted: false };
      if (gender !== "all") {
        params.gender = gender;
      }

      const res = await axios.get('/details', { params });
      setDataSource(res.data.data);
    } catch (error) {
      console.error("Error fetching details:", error);
      toast.error("Failed to fetch details");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchdetails();
  }, [gender]);

  const handleEdit = (record) => {
    navigate(`edit/${record.id}`);
  };

  const handleDelete = async (record) => {
    try {
      await axios.patch(`/details/${record.id}`, { deleted: true });
      toast.success('User deleted successfully');
      fetchdetails();
    } catch (error) {
      console.error('Error deleting record:', error);
      toast.error('Failed to delete user');
    }
  };

  const columns = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Email', dataIndex: 'email', key: 'email' },
    { title: 'Gender', dataIndex: 'gender', key: 'gender' },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <Space>
          <Button type="primary" onClick={() => handleEdit(record)}>Edit</Button>
          <Button danger onClick={() => handleDelete(record)}>Delete</Button>
        </Space>
      )
    }
  ];

  return (
    <div style={{ padding: 20 }}>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <Spin size="large" />
        </div>
      ) : (
        <>
        
          <div style={{ marginBottom: 16 }}>
            <Select
              value={gender}
              onChange={setGender}
              style={{ width: 200 }}
              placeholder="Select gender"
            >
              <Option value="all">All</Option>
              <Option value="male">Male</Option>
              <Option value="female">Female</Option>
            </Select>
          </div>

          <Table
            dataSource={dataSource}
            columns={columns}
            rowKey="id"
            pagination={{ pageSize: 10 }}
          />
        </>
      )}
    </div>
  );
};

export default Layout;
