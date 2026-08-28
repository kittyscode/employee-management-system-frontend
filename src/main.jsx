import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import { SearchProvider } from "./context/SearchContext";
import './index.css'
import App from './App.jsx'
import "./styles/Theme.css";

import "@fontsource/poppins/400"
import { SidebarProvider } from './context/SidebarContext.jsx';

import { NotificationProvider } from "./context/NotificationContext";


createRoot(document.getElementById('root')).render(
 <StrictMode>
  <NotificationProvider>
 <SearchProvider>
 
      <BrowserRouter>
       <SidebarProvider>
        <App />
        </SidebarProvider>
      </BrowserRouter>

      <ToastContainer
        position="top-right"
        autoClose={2000}
      />
    
    </SearchProvider>
    </NotificationProvider>
    </StrictMode>
    )
