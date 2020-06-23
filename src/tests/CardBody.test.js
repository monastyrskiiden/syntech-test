import React from 'react';
import { shallow } from 'enzyme';
import CardBody from '../components/CardBody';

describe('CardBody', () => {
  let wrapper;

  it('should renders without errors', () => {
    wrapper = shallow(<CardBody />);

    expect(wrapper).toBeTruthy();
  });

  it('should render children', () => {
    const children = <h2>This is the child element</h2>;
    wrapper = shallow(<CardBody>{children}</CardBody>);

    expect(wrapper.contains(children)).toBeTruthy();
  });
});
