import React from 'react';
import { shallow } from 'enzyme';
import Postman from './Postman';

jest.mock('../services/fetchWithError.js');

describe('Postman container', () => {
  it('can fetch from an api and set state', () => {
    const wrapper = shallow(<Postman />);
    const postmanContainer = wrapper.instance();
    return postmanContainer.handleSubmit({ preventDefault: () => {} })
      .then(() => {
        expect(wrapper.state('result')).toEqual(JSON.stringify({ response:'sample response' }, null, 2));
      });
  });
});


