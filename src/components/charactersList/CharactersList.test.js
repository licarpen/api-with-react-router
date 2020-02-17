import React from 'react';
import { shallow } from 'enzyme';
import CharactersList from './CharactersList';

describe('CharactersList component', () => {
  it('matches a snapshot', () => {
    const wrapper = shallow(<CharactersList />);
    expect(wrapper).toMatchSnapshot();
  });
});
