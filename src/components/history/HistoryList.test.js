import React from 'react';
import { shallow } from 'enzyme';
import HistoryList from './HistoryList';

describe('HistoryList component', () => {
  it('matches a snapshot', () => {
    const historyArray = [{ url: 'sampleurl.com', method: 'POST', body: 'sample body' }];
    const wrapper = shallow(<HistoryList onClick={() => {}} history={historyArray} />);
    expect(wrapper).toMatchSnapshot();
  });
});
