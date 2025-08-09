import React, { useState } from "react";
import { Modal, Form, Input, Select, Button, message } from "antd";
import { useAppContext } from "../../context/useAppcontext";
import { useNavigate } from "react-router-dom";
import { PlusOutlined } from "@ant-design/icons";
import { toast } from 'react-toastify';

const { Option } = Select;

const Adduser = () => {
  const navigate = useNavigate();
  const { axios } = useAppContext();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = async () => {
    try {
      setLoading(true);
      const values = await form.validateFields();

      await axios.post(`/details`, {
        name: values.name,
        email: values.email,
        gender: values.gender,
      });

      toast.success(" User added successfully!");
      form.resetFields();
      setIsModalOpen(false);
      navigate("/dashboard");
    } catch (error) {
      console.error("Error adding user:", error);
      toast.error(" Failed to add user. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    form.resetFields();
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
     
      <div className="flex flex-col items-center mx-190 gap-4">
        <Button
          type="primary"
          shape="circle"
          icon={<PlusOutlined />}
          onClick={showModal}
          className="!w-20 !h-20 !rounded-full !bg-gray-500 !border-none
                     flex items-center justify-center 
                     transition-transform duration-200 hover:scale-110 hover:!bg-gray-600"
        />
        <p className="mt-2 text-gray-700 font-medium">Add User</p>
      </div>

     
      <Modal
        title="Add New User"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Submit"
        cancelText="Cancel"
        confirmLoading={loading}
      >
        <Form form={form} layout="vertical" name="add_user_form">
          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: "Please enter name" }]}
          >
            <Input placeholder="Enter name" />
          </Form.Item>

          <Form.Item
            name="email"
            label="Email"
            rules={[
              { required: true, message: "Please enter email" },
              { type: "email", message: "Please enter a valid email" },
            ]}
          >
            <Input placeholder="Enter email" />
          </Form.Item>

          <Form.Item
            name="gender"
            label="Gender"
            rules={[{ required: true, message: "Please select gender" }]}
          >
            <Select placeholder="Select gender">
              <Option value="male">Male</Option>
              <Option value="female">Female</Option>
              
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Adduser;
