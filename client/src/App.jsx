import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './componets/Admin/Login';
import Dashboard from './componets/Admin/Dashboatd';
import Layout from './componets/Admin/Layout';
import Approval from './componets/Admin/Approval';
import Adduser from './componets/Admin/Adduser';
import Edit from './componets/Admin/edit';
import { ToastContainer } from "react-toastify";



function App() {
  return (
    <>
    <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Protected route */}
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Layout />} />
          <Route path="layout" element={<Layout />} />
          <Route path="approve" element={<Approval />} />
          <Route path="add" element={<Adduser />} />
          <Route path="edit/:id" element={<Edit />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
