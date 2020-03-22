import React from 'react';
import { shallow } from 'enzyme';
import HistoryItem from './HistoryItem';

describe('HistoryItem component', () => {
  it('matches a snapshot', () => {
    const wrapper = shallow(<HistoryItem method="POST" url="myApi.com" body="sample body" onClick={() => {}}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
