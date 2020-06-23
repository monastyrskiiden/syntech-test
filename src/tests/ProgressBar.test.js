import React from 'react';
import { shallow } from 'enzyme';
import ProgressBar from '../components/ProgressBar';

function createProps() {
  return {
    step: 2,
    totalSteps: 3,
  };
}

describe('ProgressBar', () => {
  let wrapper;
  let props;

  beforeEach(() => {
    props = createProps();
  });

  it('should renders without error', () => {
    wrapper = shallow(<ProgressBar />);

    expect(wrapper).toBeTruthy();
  });

  it('should render correct width', () => {
    const expectedWidth = (100 / props.totalSteps) * props.step + '%';

    wrapper = shallow(<ProgressBar {...props} />);

    expect(wrapper.find('div').children()).toHaveStyle({
      width: expectedWidth,
    });
  });
});
