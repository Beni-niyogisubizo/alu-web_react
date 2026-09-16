import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';

describe('CourseListRow', () => {
  test('renders one cell with colspan 2 when isHeader is true and textSecondCell is null', () => {
    const wrapper = shallow(
      <CourseListRow isHeader={true} textFirstCell="Available courses" />
    );

    expect(wrapper.find('th')).toHaveLength(1);
    expect(wrapper.find('th').prop('colSpan')).toEqual('2');
    expect(wrapper.find('th').text()).toEqual('Available courses');
  });

  test('renders two th cells when isHeader is true and textSecondCell is provided', () => {
    const wrapper = shallow(
      <CourseListRow
        isHeader={true}
        textFirstCell="Course name"
        textSecondCell="Credit"
      />
    );

    expect(wrapper.find('th')).toHaveLength(2);
    expect(wrapper.find('th').at(0).text()).toEqual('Course name');
    expect(wrapper.find('th').at(1).text()).toEqual('Credit');
  });

  test('renders two td cells when isHeader is false', () => {
    const wrapper = shallow(
      <CourseListRow
        textFirstCell="ES6"
        textSecondCell="60"
      />
    );

    expect(wrapper.find('td')).toHaveLength(2);
    expect(wrapper.find('td').at(0).text()).toEqual('ES6');
    expect(wrapper.find('td').at(1).text()).toEqual('60');
  });
});
