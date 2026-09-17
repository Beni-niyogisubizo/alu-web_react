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
    expect(wrapper.find('button[aria-label="Close"]')).toHaveLength(0);
  });

  test('displays drawer when displayDrawer is true', () => {
    const wrapper = shallow(
      <Notifications displayDrawer={true} />
    );

    expect(wrapper.find('button[aria-label="Close"]')).toHaveLength(1);
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
  test('markAsRead logs the correct message', () => {
    const consoleSpy = jest
      .spyOn(console, 'log')
      .mockImplementation(() => {});

    const wrapper = shallow(<Notifications />);
    const instance = wrapper.instance();

    instance.markAsRead(1);

    expect(consoleSpy).toHaveBeenCalledWith(
      'Notification 1 has been marked as read'
    );

    consoleSpy.mockRestore();
  });
  test('does not rerender when listNotifications has the same length', () => {
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

    const instance = wrapper.instance();
    const renderSpy = jest.spyOn(instance, 'render');

    wrapper.setProps({
      listNotifications: [
        {
          id: 1,
          type: 'urgent',
          value: 'Updated notification',
        },
      ],
    });

    expect(renderSpy).not.toHaveBeenCalled();

    renderSpy.mockRestore();
  });

  test('rerenders when listNotifications becomes longer', () => {
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

    const instance = wrapper.instance();
    const renderSpy = jest.spyOn(instance, 'render');

    wrapper.setProps({
      listNotifications: [
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
      ],
    });

    expect(renderSpy).toHaveBeenCalled();

    renderSpy.mockRestore();
  });
});
