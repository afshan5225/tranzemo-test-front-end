import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Form, Input, Select, Button, message, Spin } from 'antd';
import { useAppContext } from '../../context/useAppcontext';


const { Option } = Select;

const Edit = () => {
  
  const { id } = useParams();
  const navigate = useNavigate();
  const { axios } = useAppContext();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`/details/${id}`);
        form.setFieldsValue({
          name: res.data.name,
          email: res.data.email,
          gender: res.data.gender
        });
      } catch (error) {
        message.error('Failed to load user details');
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [id, axios, form]);

 
  const handleSubmit = async (values) => {
    try {
      await axios.patch(`/details/${id}`, values);
      message.success('User updated successfully');
      navigate('/dashboard'); 
    } catch (error) {
      message.error('Failed to update user');
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spin size="large" />
      </div>
    );
  }

  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Edit User</h2>
      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
      >
        <Form.Item
          name="name"
          label="Name"
          rules={[{ required: true, message: 'Please enter name' }]}
        >
          <Input placeholder="Enter name" />
        </Form.Item>

        <Form.Item
          name="email"
          label="Email"
          rules={[
            { required: true, message: 'Please enter email' },
            { type: 'email', message: 'Please enter a valid email' }
          ]}
        >
          <Input placeholder="Enter email" />
        </Form.Item>

        <Form.Item
          name="gender"
          label="Gender"
          rules={[{ required: true, message: 'Please select gender' }]}
        >
          <Select placeholder="Select gender">
            <Option value="male">Male</Option>
            <Option value="female">Female</Option>
            
          </Select>
        </Form.Item>

        <Form.Item>
          <div className="flex justify-between">
            <Button onClick={() => navigate('/dashboard')}>Cancel</Button>
            <Button type="primary" htmlType="submit">Save Changes</Button>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Edit;
