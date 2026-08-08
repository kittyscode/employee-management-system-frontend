# Employee Management System — Frontend

A modern and responsive **Employee Management System frontend** built using React and Vite.

The application provides a dashboard interface for managing employees and departments and viewing organizational reports. It communicates with a Spring Boot REST API using Axios.

---

## 🚀 Project Overview

The Employee Management System frontend provides an admin-style interface for managing employee information and organizational data.

### Main Features

- Dashboard
- Employee management
- Department management
- Employee search
- Employee status
- Department assignment
- Employee pagination
- Reports and statistics
- Total payroll overview
- REST API integration
- Responsive user interface

---

## ✨ Key Features

### 📊 Dashboard

The dashboard provides an overview of the organization.

It displays:

- Total employees
- Total departments
- Active employees
- Total payroll

---

### 👨‍💼 Employee Management

The employee module allows users to manage employee records.

Features include:

- View employees
- Add employee
- Edit employee
- Delete employee
- Search employees
- Pagination
- Employee status
- Department assignment

Employee information includes:

- Name
- Email
- Salary
- Department
- Status
- Joining date

---

### 🏢 Department Management

The department module allows users to manage organizational departments.

Features include:

- View departments
- Add department
- Edit department
- Delete department
- Assign employees to departments

---

### 📈 Reports

The Reports section provides organizational statistics retrieved from the backend API.

The dashboard includes:

- Total employees
- Total departments
- Active employees
- Total payroll

---

## 🛠️ Technology Stack

### Frontend

- React
- JavaScript
- JSX
- Vite
- React Router
- CSS3

### Libraries

- Axios — API communication
- React Icons — UI icons
- Recharts — charts and data visualization

### Tools

- VS Code
- npm
- Git
- GitHub
- Postman

---

## 🏗️ Application Architecture

```text
React Frontend
      │
      ▼
   Pages
      │
      ▼
Reusable Components
      │
      ▼
  Service Layer
      │
      ▼
    Axios
      │
      ▼
Spring Boot REST API
      │
      ▼
    MySQL
