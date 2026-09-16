import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';
import { getLatestNotification } from '../utils/utils';

describe('Notifications', () => {
  test('renders without crashing', () => {
    shallow(<Notifications />);
  });

  test('renders three NotificationItem components', () => {
    const wrapper = shallow(<Notifications />);

    expect(wrapper.find(NotificationItem)).toHaveLength(3);
  });

  test('renders notification text', () => {
    const wrapper = shallow(<Notifications />);

    expect(wrapper.text()).toContain(
      'Here is the list of notifications'
    );
  });

  test('first html NotificationItem renders the correct html', () => {
    const wrapper = shallow(<Notifications />);
    const htmlNotification = wrapper.find(NotificationItem).at(2);

    expect(htmlNotification.prop('html')).toEqual({
      __html: getLatestNotification(),
    });
  });
});
