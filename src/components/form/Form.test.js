import React from 'react';
import { shallow } from 'enzyme';
import Form from './Form';

describe('Form component', () => {
  it('matches a snapshot', () => {
    const wrapper = shallow(<Form onChange={() => {}} onSubmit={() => {}} method="POST" url="mywebsite.com" body="text body to send"/>);
    expect(wrapper).toMatchSnapshot();
  });
});
