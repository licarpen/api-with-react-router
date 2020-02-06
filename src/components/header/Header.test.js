import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';
import routeData from 'react-router';


describe('Header component', () => {
  const mockLocation = {
    pathname: '/character',
    hash: '',
    search: '',
    state: ''
  };
  
  beforeEach(() => {
    jest.spyOn(routeData, 'useLocation').mockReturnValue(mockLocation);
  });

  it('matches a snapshot', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });
});
