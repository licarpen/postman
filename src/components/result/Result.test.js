import React from 'react';
import { shallow } from 'enzyme';
import Result from './Result';

describe('Result component', () => {
  it('matches a snapshot', () => {
    const wrapper = shallow(<Result result="sample result"/>);
    expect(wrapper).toMatchSnapshot();
  });
});
