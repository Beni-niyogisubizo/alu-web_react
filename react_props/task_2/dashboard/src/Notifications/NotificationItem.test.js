import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe('NotificationItem', () => {
  test('renders without crashing', () => {
    shallow(<NotificationItem />);
  });

  test('renders correct type and value', () => {
    const wrapper = shallow(
      <NotificationItem type="default" value="test" />
    );

    expect(wrapper.prop('data-notification-type')).toEqual('default');
    expect(wrapper.text()).toEqual('test');
  });

  test('renders correct html', () => {
    const wrapper = shallow(
      <NotificationItem
        type="urgent"
        html={{ __html: '<u>test</u>' }}
      />
    );

    expect(wrapper.html()).toContain('<u>test</u>');
  });
});
