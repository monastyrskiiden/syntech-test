import React from 'react';
import { shallow } from 'enzyme';
import CardHeader from '../components/CardHeader';

describe('CardHeader', () => {
  let wrapper;

  it('should renders without errors', () => {
    const text = 'This is the text node';
    wrapper = shallow(<CardHeader>{text}</CardHeader>);

    expect(wrapper).toBeTruthy();
  });

  it('should render header text', () => {
    const text = 'This is the text node';
    wrapper = shallow(<CardHeader>{text}</CardHeader>);

    expect(wrapper.text()).toEqual(text);
  });
});
