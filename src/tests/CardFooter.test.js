import React from 'react';
import { shallow } from 'enzyme';
import CardFooter from '../components/CardFooter';

describe('CardFooter', () => {
  let wrapper;

  it('should renders without errors', () => {
    wrapper = shallow(<CardFooter />);

    expect(wrapper).toBeTruthy();
  });

  it('should render children', () => {
    const children = <h2>This is the child element</h2>;
    wrapper = shallow(<CardFooter>{children}</CardFooter>);

    expect(wrapper.contains(children)).toBeTruthy();
  });
});
