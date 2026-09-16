import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('Notifications', () => {
  test('renders without crashing', () => {
    shallow(<Notifications />);
  });

  test('renders menu item', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('.menuItem')).toHaveLength(1);
  });

  test('does not display Notifications drawer by default', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('.Notifications')).toHaveLength(0);
  });

  test('displays Notifications drawer when displayDrawer is true', () => {
    const wrapper = shallow(
      <Notifications displayDrawer={true} />
    );

    expect(wrapper.find('.Notifications')).toHaveLength(1);
  });

  test('renders default message when listNotifications is empty', () => {
    const wrapper = shallow(
      <Notifications
        displayDrawer={true}
        listNotifications={[]}
      />
    );

    expect(wrapper.find(NotificationItem)).toHaveLength(0);
    expect(wrapper.text()).toContain('No new notification for now');
  });

  test('renders the correct number of NotificationItem components', () => {
    const listNotifications = [
      {
        id: 1,
        type: 'default',
        value: 'New course available',
      },
      {
        id: 2,
        type: 'urgent',
        value: 'New resume available',
      },
      {
        id: 3,
        type: 'urgent',
        html: {
          __html: '<strong>Urgent requirement</strong>',
        },
      },
    ];

    const wrapper = shallow(
      <Notifications
        displayDrawer={true}
        listNotifications={listNotifications}
      />
    );

    expect(wrapper.find(NotificationItem)).toHaveLength(3);
  });

  test('renders the correct NotificationItem props', () => {
    const listNotifications = [
      {
        id: 1,
        type: 'default',
        value: 'New course available',
      },
    ];

    const wrapper = shallow(
      <Notifications
        displayDrawer={true}
        listNotifications={listNotifications}
      />
    );

    const notificationItem = wrapper.find(NotificationItem).at(0);

    expect(notificationItem.prop('type')).toEqual('default');
    expect(notificationItem.prop('value')).toEqual(
      'New course available'
    );
  });
});
