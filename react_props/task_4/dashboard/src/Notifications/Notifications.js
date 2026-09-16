import React from 'react';
import PropTypes from 'prop-types';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';

function Notifications({ displayDrawer }) {
  const handleClose = () => {
    console.log('Close button has been clicked');
  };

  return (
    <React.Fragment>
      <div className="menuItem">
        Your notifications
      </div>

      {displayDrawer && (
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
      )}
    </React.Fragment>
  );
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
};

Notifications.defaultProps = {
  displayDrawer: false,
};

export default Notifications;
