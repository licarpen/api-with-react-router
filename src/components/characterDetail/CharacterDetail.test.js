import React from 'react';
import { shallow } from 'enzyme';
import CharacterDetail from './CharacterDetail';

describe('CharacterDetail component', () => {
  it('matches a snapshot', () => {
    const wrapper = shallow(<CharacterDetail match={{ params: {
      id: '1'
    } }}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
