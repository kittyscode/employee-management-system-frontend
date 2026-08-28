import { createContext, useState, useEffect, useCallback } from "react";
import notificationService from "../services/notificationService";
import messageService from "../services/notificationService";

export const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
    const [notifications, setNotifications] = useState([]);
    const [messages, setMessages] = useState([]);
    const [unreadNotifications, setUnreadNotifications] = useState(0);
    const [unreadMessages, setUnreadMessages] = useState(0);

    const fetchCounts = useCallback(async () => {
        try {
            const [notifCountRes, msgCountRes] = await Promise.all([
                notificationService.getUnreadCount(),
                messageService.getUnreadCount()
            ]);
            setUnreadNotifications(notifCountRes.data);
            setUnreadMessages(msgCountRes.data);
        } catch (error) {
            console.log("Failed to fetch counts", error);
        }
    }, []);

    const fetchNotifications = async () => {
        try {
            const res = await notificationService.getAll();
            setNotifications(res.data);
        } catch (error) {
            console.log("Failed to fetch notifications", error);
        }
    };

    const fetchMessages = async () => {
        try {
            const res = await messageService.getAll();
            setMessages(res.data);
        } catch (error) {
            console.log("Failed to fetch messages", error);
        }
    };

    const markNotificationRead = async (id) => {
        await notificationService.markAsRead(id);
        fetchCounts();
        fetchNotifications();
    };

    const markAllNotificationsRead = async () => {
        await notificationService.markAllAsRead();
        fetchCounts();
        fetchNotifications();
    };

    const markMessageRead = async (id) => {
        await messageService.markAsRead(id);
        fetchCounts();
        fetchMessages();
    };

    const markAllMessagesRead = async () => {
        await messageService.markAllAsRead();
        fetchCounts();
        fetchMessages();
    };

    useEffect(() => {
        fetchCounts();
        const interval = setInterval(fetchCounts, 20000); // poll every 20s
        return () => clearInterval(interval);
    }, [fetchCounts]);

    return (
        <NotificationContext.Provider
            value={{
                notifications,
                messages,
                unreadNotifications,
                unreadMessages,
                fetchNotifications,
                fetchMessages,
                markNotificationRead,
                markAllNotificationsRead,
                markMessageRead,
                markAllMessagesRead
            }}
        >
            {children}
        </NotificationContext.Provider>
    );
};