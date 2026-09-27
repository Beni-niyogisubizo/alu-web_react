import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('Footer', () => {
  test('renders without crashing', () => {
    shallow(<Footer />);
  });

  test('renders Copyright text', () => {
    const wrapper = shallow(<Footer />);

    expect(wrapper.text()).toContain('Copyright');
  });
});
