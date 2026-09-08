import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  test('renders without crashing', () => {
    shallow(<App />);
  });

  test('renders App-header', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.App-header')).toHaveLength(1);
  });

  test('renders App-body', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.App-body')).toHaveLength(1);
  });

  test('renders App-footer', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.App-footer')).toHaveLength(1);
  });
});
