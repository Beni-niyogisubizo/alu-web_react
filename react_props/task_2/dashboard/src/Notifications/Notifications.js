import React from 'react';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';

function Notifications() {
  const handleClose = () => {
    console.log('Close button has been clicked');
  };

  return (
    <div className="Notifications">
      <button
        type="button"
        aria-label="Close"
        onClick={handleClose}
        style={{
          position: 'absolute',
          right: '10px',
          top: '10px',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        <img src={closeIcon} alt="close" />
      </button>

      <p>Here is the list of notifications</p>

      <ul>
        <NotificationItem
          type="default"
          value="New course available"
        />

        <NotificationItem
          type="urgent"
          value="New resume available"
        />

        <NotificationItem
          type="urgent"
          html={{ __html: getLatestNotification() }}
        />
      </ul>
    </div>
  );
}

export default Notifications;
