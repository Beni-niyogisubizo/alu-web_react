import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('Notifications', () => {
  test('renders without crashing', () => {
    shallow(<Notifications />);
  });

  test('renders the menu item', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('.menuItem')).toHaveLength(1);
    expect(wrapper.find('.menuItem').text()).toEqual('Your notifications');
  });

  test('does not display drawer by default', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('.Notifications')).toHaveLength(0);
  });

  test('displays drawer when displayDrawer is true', () => {
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

    expect(wrapper.find(NotificationItem)).toHaveLength(1);
    expect(wrapper.find(NotificationItem).at(0).prop('value')).toEqual(
      'No new notifications for now'
    );
  });

  test('renders one NotificationItem for each notification', () => {
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
        html: { __html: '<strong>Urgent requirement</strong>' },
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
});
