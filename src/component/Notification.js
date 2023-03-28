import { useEffect, useState } from "react";

const Notificaation = ({ id, data, position, handleClose }) => {
  const [loader, setLoader] = useState(0);
  const { message, type, timeOut } = data;
  let intervalId;

  const handleLoader = () => {
    intervalId = setInterval(() => {
      if (loader > 100) {
        clearInterval(intervalId);
        setTimeout(() => handleClose(id),1000);
      } else {
        setLoader((prev) => prev + 10);
      }
    }, timeOut / 10);
  };

  // Loader
  useEffect(() => {
    handleLoader();
    return () => {
      clearInterval(intervalId);
    };
  }, [loader]);

  return (
    <div
      onMouseEnter={() => clearInterval(intervalId)}
      onMouseLeave={handleLoader}
      className={`alert-msg ${type.toLowerCase()} ${loader > 100 ? "exit" : ""}`}
      style={{ top: `${position * 100}px` }}
    >
      {message}
      <span className="loader" style={{ width: `${loader}%` }}></span>
      <span className="close-btn" onClick={() => handleClose(id)}>
        X
      </span>
    </div>
  );
};

export default Notificaation;
