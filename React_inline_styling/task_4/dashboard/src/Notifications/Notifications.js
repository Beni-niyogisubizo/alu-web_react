import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
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

const opacityKeyframes = {
  from: {
    opacity: 0.5,
  },
  to: {
    opacity: 1,
  },
};

const bounceKeyframes = {
  '0%': {
    transform: 'translateY(0px)',
  },
  '33%': {
    transform: 'translateY(-5px)',
  },
  '66%': {
    transform: 'translateY(5px)',
  },
  '100%': {
    transform: 'translateY(0px)',
  },
};

const styles = StyleSheet.create({
  menuItem: {
    float: 'right',
    backgroundColor: '#fff8f8',
    cursor: 'pointer',

    ':hover': {
      animationName: [opacityKeyframes, bounceKeyframes],
      animationDuration: '1s, 0.5s',
      animationIterationCount: '3',
    },
  },

  notifications: {
    position: 'relative',
    border: '1px dashed #e1003c',
    padding: '10px',

    '@media (max-width: 900px)': {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'white',
      border: 'none',
      padding: 0,
      fontSize: '20px',
    },
  },

  notificationList: {
    '@media (max-width: 900px)': {
      padding: 0,
    },
  },

  closeIcon: {
    width: '15px',
    height: '15px',
  },

  closeButton: {
    position: 'absolute',
    right: '10px',
    top: '10px',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
  },
});

class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    return (
      nextProps.listNotifications.length >
      this.props.listNotifications.length
    );
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    const { displayDrawer, listNotifications } = this.props;

    const handleClose = () => {
      console.log('Close button has been clicked');
    };

    return (
      <React.Fragment>
        {!displayDrawer && (
          <div className={css(styles.menuItem)}>
            Your notifications
          </div>
        )}

        {displayDrawer && (
          <div className={css(styles.notifications)}>
            <button
              type="button"
              aria-label="Close"
              onClick={handleClose}
              className={css(styles.closeButton)}
            >
              <img
                className={css(styles.closeIcon)}
                src={closeIcon}
                alt="close"
              />
            </button>

            <p>Here is the list of notifications</p>

            <ul className={css(styles.notificationList)}>
              {listNotifications.length === 0 ? (
                <NotificationItem
                  type="default"
                  value="No new notifications for now"
                  markAsRead={this.markAsRead}
                />
              ) : (
                listNotifications.map((notification) => (
                  <NotificationItem
                    key={notification.id}
                    id={notification.id}
                    type={notification.type}
                    value={notification.value}
                    html={notification.html}
                    markAsRead={this.markAsRead}
                  />
                ))
              )}
            </ul>
          </div>
        )}
      </React.Fragment>
    );
  }
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
