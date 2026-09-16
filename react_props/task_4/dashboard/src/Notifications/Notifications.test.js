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
    const wrapper = shallow(<Notifications displayDrawer={true} />);

    expect(wrapper.find('.Notifications')).toHaveLength(1);
    expect(wrapper.find(NotificationItem)).toHaveLength(3);
  });

  test('renders three NotificationItem components when drawer is displayed', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);

    expect(wrapper.find(NotificationItem)).toHaveLength(3);
  });
});
