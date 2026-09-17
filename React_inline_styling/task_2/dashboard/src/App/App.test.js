import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  test('renders without crashing', () => {
    shallow(<App />);
  });

  test('contains Notifications', () => {
    expect(wrapper.find(Notifications)).toHaveLength(1);
  });

  test('contains Header', () => {
    expect(wrapper.find(Header)).toHaveLength(1);
  });

  test('contains Footer', () => {
    expect(wrapper.find(Footer)).toHaveLength(1);
  });

  test('renders Login and not CourseList when isLoggedIn is false', () => {
    expect(wrapper.find(Login)).toHaveLength(1);
    expect(wrapper.find(CourseList)).toHaveLength(0);
  });

  test('renders CourseList and not Login when isLoggedIn is true', () => {
    const loggedInWrapper = shallow(<App isLoggedIn={true} />);

    expect(loggedInWrapper.find(Login)).toHaveLength(0);
    expect(loggedInWrapper.find(CourseList)).toHaveLength(1);
  });

  test('passes listNotifications to Notifications', () => {
    const notifications = wrapper.find(Notifications);

    expect(notifications.prop('listNotifications')).toHaveLength(3);
  });

  test('passes listCourses to CourseList when logged in', () => {
    const loggedInWrapper = shallow(<App isLoggedIn={true} />);
    const courseList = loggedInWrapper.find(CourseList);

    expect(courseList.prop('listCourses')).toHaveLength(3);
  });
  test('passes listCourses to CourseList when logged in', () => {
    const loggedInWrapper = shallow(<App isLoggedIn={true} />);
    const courseList = loggedInWrapper.find(CourseList);

    expect(courseList.prop('listCourses')).toHaveLength(3);
  });

  test('calls logOut and displays alert when control and h are pressed', () => {
    const logOut = jest.fn();
    const alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {});

    const appWrapper = shallow(<App logOut={logOut} />);

    const event = new KeyboardEvent('keydown', {
      key: 'h',
      ctrlKey: true,
    });

    document.dispatchEvent(event);

    expect(alertSpy).toHaveBeenCalledWith('Logging you out');
    expect(logOut).toHaveBeenCalledTimes(1);

    appWrapper.unmount();
    alertSpy.mockRestore();
  });
});
