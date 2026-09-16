import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';
import CourseListRow from './CourseListRow';

describe('CourseList', () => {
  test('renders without crashing', () => {
    shallow(<CourseList />);
  });

  test('renders 5 CourseListRow components', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.find(CourseListRow)).toHaveLength(5);
  });
});
