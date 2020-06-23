import React from 'react';
import { shallow } from 'enzyme';
import Card from '../components/Card';

describe('Card', () => {
  let wrapper;

  it('should renders without errors', () => {
    wrapper = shallow(<Card />);

    expect(wrapper).toBeTruthy();
  });

  it('should render children', () => {
    const children = <h2>This is the child element</h2>;
    wrapper = shallow(<Card>{children}</Card>);

    expect(wrapper.contains(children)).toBeTruthy();
  });
});
