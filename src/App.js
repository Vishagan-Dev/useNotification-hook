import Notificaation from "./component/Notification";
import useNotifications from "./Hooks/useNotifications";

export default function App() {
  const { notifications, showNotification, closeNotification } =
    useNotifications();

  const handleClick = (e) => {
    const { target } = e;
    const type = target.getAttribute("data-type");

    showNotification({
      type,
      message: `${type} Notification`,
      timeOut: 2000,
    });
  };

  return (
    <>
      <div className="alert-wrapper">
        {notifications.map((item, index) => (
          <Notificaation
            key={item?.id}
            id={item.id}
            data={item}
            handleClose={closeNotification}
            position={index}
          />
        ))}
      </div>
      <div className="content">
        <h1>Add Notification</h1>
        <div className="actions">
          <button className="info" onClick={handleClick} data-type="INFO">
            Info
          </button>
          <button className="success" onClick={handleClick} data-type="SUCCESS">
            Success
          </button>
          <button className="warning" onClick={handleClick} data-type="WARNING">
            Warning
          </button>
          <button className="error" onClick={handleClick} data-type="ERROR">
            Error
          </button>
        </div>
      </div>
    </>
  );
}
