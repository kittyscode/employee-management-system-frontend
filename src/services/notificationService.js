import axios from "axios";

const API_URL = `${import.meta.env.VITE_API_BASE_URL}/notifications`;

const getToken = () => localStorage.getItem("token");

const getAll = () =>
    axios.get(API_URL, {
        headers: { Authorization: `Bearer ${getToken()}` }
    });

const getUnreadCount = () =>
    axios.get(`${API_URL}/unread-count`, {
        headers: { Authorization: `Bearer ${getToken()}` }
    });

const markAsRead = (id) =>
    axios.put(`${API_URL}/${id}/read`, {}, {
        headers: { Authorization: `Bearer ${getToken()}` }
    });

const markAllAsRead = () =>
    axios.put(`${API_URL}/read-all`, {}, {
        headers: { Authorization: `Bearer ${getToken()}` }
    });

export default { getAll, getUnreadCount, markAsRead, markAllAsRead };