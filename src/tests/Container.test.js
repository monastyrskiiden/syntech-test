import React from 'react';
import { shallow } from 'enzyme';
import Container from '../components/Container';

describe('Container', () => {
  let wrapper;

  it('should renders without errors', () => {
    wrapper = shallow(<Container />);

    expect(wrapper).toBeTruthy();
  });

  it('should render header text', () => {
    const text = 'This is the text node';
    wrapper = shallow(<Container>{text}</Container>);

    expect(wrapper.text()).toEqual(text);
  });
});
