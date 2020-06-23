import React from 'react';
import { shallow } from 'enzyme';
import Select from '../components/Select';

function createProps() {
  return {
    input: {},
    label: 'Label',
  };
}

describe('Select', () => {
  let wrapper;
  let props;
  const children = [
    <option key="0" value=""></option>,
    <option key="1" value="facebook">
      facebook
    </option>,
    <option key="2" value="google">
      google
    </option>,
    <option key="3" value="email">
      email
    </option>,
  ];

  beforeEach(() => {
    props = createProps();
  });

  it('should renders without errors', () => {
    wrapper = shallow(<Select {...props} />);

    expect(wrapper).toBeTruthy();
  });

  it('should render label with a given text', () => {
    wrapper = shallow(<Select {...props} />);

    expect(wrapper.exists('label')).toBeTruthy();
    expect(wrapper.find('label').text()).toBe(props.label);
  });

  it('should render a select', () => {
    wrapper = shallow(<Select {...props} />);

    expect(wrapper.exists('select')).toBeTruthy();
  });

  it('should render children options', () => {
    wrapper = shallow(<Select {...props}>{children}</Select>);

    expect(
      wrapper.find('select').containsAllMatchingElements(children)
    ).toBeTruthy();
  });
});
