import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';

describe('Login', () => {
  test('renders without crashing', () => {
    shallow(<Login />);
  });

  test('renders two input and two label elements', () => {
    const wrapper = shallow(<Login />);

    expect(wrapper.find('input')).toHaveLength(2);
    expect(wrapper.find('label')).toHaveLength(2);
  });
});
