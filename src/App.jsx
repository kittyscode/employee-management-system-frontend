import "./App.css";
import { Routes, Route } from "react-router-dom";


import Layout from "./components/layout/Layout";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

import EmployeeList from "./pages/employees/EmployeeList";
import AddEmployee from "./pages/employees/AddEmployee";
import EditEmployee from "./pages/employees/EditEmployee";

import DepartmentList from "./pages/departments/DepartmentList";
import AddDepartment from "./pages/departments/AddDepartment";
import EditDepartment from "./pages/departments/EditDepartment";
import ProtectedRoute from "./components/ProtectedRoute";
import Report from "./pages/Reports";
import Profile from "./pages/Profile";
import Settings from "./pages/Setting";
function App() {
  return (
    <>
      <Routes>

        {/* Login Page (No Sidebar & Navbar) */}
        <Route path="/" element={<Login />} />

        {/* Dashboard Pages */}
     <Route
  path="/dashboard"
  element={
    <ProtectedRoute>
      <Layout>
        <Dashboard />
      </Layout>
    </ProtectedRoute>
  }
/>

        <Route
          path="/employees"
          element={
            <Layout>
              <EmployeeList />
            </Layout>
          }
        />

       <Route
  path="/employees/add"
  element={
    <ProtectedRoute>
      <Layout>
        <AddEmployee />
      </Layout>
    </ProtectedRoute>
  }
/>

      <Route
  path="/employees/edit/:id"
  element={
    <ProtectedRoute>
      <Layout>
        <EditEmployee />
      </Layout>
    </ProtectedRoute>
  }
/>

        <Route
  path="/departments"
  element={
    <ProtectedRoute>
      <Layout>
        <DepartmentList />
      </Layout>
    </ProtectedRoute>
  }
/>
<Route
  path="/departments/add"
  element={
    <ProtectedRoute>
      <Layout>
        <AddDepartment />
      </Layout>
    </ProtectedRoute>
  }
/>

        <Route
  path="/departments/edit/:id"
  element={
    <ProtectedRoute>
      <Layout>
        <EditDepartment />
      </Layout>
    </ProtectedRoute>
  }
/>
       <Route
  path="/reports"
  element={
    <ProtectedRoute>
      <Layout>
        <Report />
      </Layout>
    </ProtectedRoute>
  }
/>  

<Route
    path="/profile"
    element={
        <ProtectedRoute>
            <Layout>
                <Profile />
            </Layout>
        </ProtectedRoute>
    }
/>

<Route
 path="/settings"
 element={
   <ProtectedRoute>
      <Layout>
          <Settings/>
      </Layout>
   </ProtectedRoute>
 }
/>
      </Routes>

      {/* <ToastContainer
        position="top-right"
        autoClose={2500}
      />
     */}
    </>
  );
}

export default App;