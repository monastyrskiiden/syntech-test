import React from 'react';
import { shallow } from 'enzyme';
import InputField from '../components/InputField';

function createProps() {
  return {
    input: {},
    label: 'Label',
    type: 'text',
    placeholder: 'Placeholder',
    meta: { touched: false, error: '', active: false },
  };
}

describe('InputField', () => {
  let wrapper;
  let props;

  beforeEach(() => {
    props = createProps();
  });

  it('should render label with a given text', () => {
    wrapper = shallow(<InputField {...props} />);

    expect(wrapper.exists('label')).toBeTruthy();
    expect(wrapper.find('label').text()).toBe(props.label);
  });

  it('should render an error instead of the label if an error exists and input is touched', () => {
    props.meta.error = 'Error text';
    props.meta.touched = true;

    wrapper = shallow(<InputField {...props} />);

    expect(wrapper.find('label').text()).toBe(props.meta.error);
  });

  it('should render an input', () => {
    wrapper = shallow(<InputField {...props} />);

    expect(wrapper.exists('input')).toBeTruthy();
  });

  it('should pass {type, placeholder} to the input', () => {
    wrapper = shallow(<InputField {...props} />);

    expect(wrapper.find('input').props()).toMatchObject({
      placeholder: props.placeholder,
      type: props.type,
    });
  });
});
