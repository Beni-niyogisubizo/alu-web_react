import React from 'react';
import PropTypes from 'prop-types';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';

export const NotificationItemShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
});

function Notifications({ displayDrawer, listNotifications }) {
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
            {listNotifications.length === 0 ? (
              <li>No new notification for now</li>
            ) : (
              listNotifications.map((notification) => (
                <NotificationItem
                  key={notification.id}
                  type={notification.type}
                  value={notification.value}
                  html={notification.html}
                />
              ))
            )}
          </ul>
        </div>
      )}
    </React.Fragment>
  );
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

export default Notifications;
