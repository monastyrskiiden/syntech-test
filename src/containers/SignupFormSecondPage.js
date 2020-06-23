import React from 'react';
import { Field, reduxForm, Fields } from 'redux-form';
import Card from '../components/Card';
import CardBody from '../components/CardBody';
import CardFooter from '../components/CardFooter';
import CardHeader from '../components/CardHeader';
import ProgressBar from '../components/ProgressBar';
import {
  validate,
  normalizeDate,
  toDateString,
  maxLength,
} from '../utils/helpers';
import Select from '../components/Select';
import DatesError from '../components/DatesError';

const maxLength2 = maxLength(2);
const maxLength4 = maxLength(4);

let SignupFormSecondPage = ({ handleSubmit, previousPage }) => {
  return (
    <form onSubmit={handleSubmit}>
      <Card>
        <CardHeader>Signup</CardHeader>
        <ProgressBar step={2} totalSteps={3} />
        <CardBody>
          <div className="date">
            <label className="date__label">Date of Birth</label>
            <Fields names={['day', 'month', 'year']} component={DatesError} />
            <div className="date__picker">
              <Field
                name="day"
                type="number"
                className="date__item"
                component="input"
                placeholder="DD"
                format={toDateString}
                parse={maxLength2}
                normalize={normalizeDate}
              />
              <Field
                name="month"
                type="number"
                className="date__item"
                component="input"
                placeholder="MM"
                format={toDateString}
                parse={maxLength2}
                normalize={normalizeDate}
              />
              <Field
                name="year"
                type="number"
                className="date__item"
                component="input"
                placeholder="YYYY"
                format={toDateString}
                parse={maxLength4}
                normalize={normalizeDate}
              />
            </div>
          </div>
          <div className="radio">
            <label className="radio__label">Gender</label>
            <div className="radio__group">
              <div className="radio__item">
                <Field
                  id="male"
                  name="gender"
                  component="input"
                  type="radio"
                  value="male"
                />
                <label htmlFor="male">Male</label>
              </div>
              <div className="radio__item">
                <Field
                  id="female"
                  name="gender"
                  component="input"
                  type="radio"
                  value="female"
                />
                <label htmlFor="female">Female</label>
              </div>
              <div className="radio__item">
                <Field
                  id="unspecified"
                  name="gender"
                  component="input"
                  type="radio"
                  value="unspecified"
                />
                <label htmlFor="unspecified">Unspecified</label>
              </div>
            </div>
          </div>
          <Field
            name="how_hear_about_us"
            label="Where did you hear about is?"
            component={Select}
          >
            <option value=""></option>
            <option value="facebook">facebook</option>
            <option value="google">google</option>
            <option value="email">email</option>
          </Field>
        </CardBody>
        <CardFooter>
          <button type="button" className="prev" onClick={previousPage}>
            Back
          </button>
          <button type="submit" className="next">
            Next <i className="fa fa-arrow-right"></i>
          </button>
        </CardFooter>
      </Card>
    </form>
  );
};

export default reduxForm({
  form: 'signup',
  destroyOnUnmount: false,
  initialValues: {
    gender: 'unspecified',
    how_hear_about_us: '',
  },
  validate,
})(SignupFormSecondPage);
