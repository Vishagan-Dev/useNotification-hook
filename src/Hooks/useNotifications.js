import { useRef, useState } from "react";

const useNotifications = () => {
  const [notifications, setNotifications] = useState([]);
  const counter = useRef(0);

  // adding notifications
  const showNotification = ({ type, message, timeOut }) => {
    counter.current += 1;
    setNotifications((prev) => [
      ...prev,
      {
        id: counter.current,
        type,
        message,
        timeOut,
      },
    ]);
  };

  // Close notifications
  const closeNotification = (id) => {
    setNotifications(prev => prev.filter((ele) => ele.id !== id));
  };

  return {
    notifications,
    showNotification,
    closeNotification,
  };
};

export default useNotifications;
