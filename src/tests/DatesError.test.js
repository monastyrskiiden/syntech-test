import React from 'react';
import { shallow } from 'enzyme';
import DatesError from '../components/DatesError';

function createProps() {
  return {
    day: {
      meta: {
        touched: false,
        error: 'Day Error',
      },
    },
    month: {
      meta: {
        touched: false,
        error: 'Month Error',
      },
    },
    year: {
      meta: {
        touched: false,
        error: 'Year Error',
      },
    },
  };
}

describe('DatesError', () => {
  let wrapper;
  let fieldsProp;

  beforeEach(() => {
    fieldsProp = createProps();
  });

  it('should render day error', () => {
    fieldsProp.day.meta.touched = true;

    wrapper = shallow(<DatesError {...fieldsProp} />);

    expect(wrapper.text()).toBe(fieldsProp.day.meta.error);
  });

  it('should render month error', () => {
    fieldsProp.month.meta.touched = true;

    wrapper = shallow(<DatesError {...fieldsProp} />);

    expect(wrapper.text()).toBe(fieldsProp.month.meta.error);
  });

  it('should render year error', () => {
    fieldsProp.year.meta.touched = true;

    wrapper = shallow(<DatesError {...fieldsProp} />);

    expect(wrapper.text()).toBe(fieldsProp.year.meta.error);
  });

  it('should render empty lable if no errors', () => {
    const emptyString = '';

    wrapper = shallow(<DatesError {...fieldsProp} />);

    expect(wrapper.exists('label')).toBeTruthy();
    expect(wrapper.text()).toBe(emptyString);
  });
});
