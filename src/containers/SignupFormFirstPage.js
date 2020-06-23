import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Card from '../components/Card';
import CardBody from '../components/CardBody';
import InputField from '../components/InputField';
import { validate } from '../utils/helpers';
import CardFooter from '../components/CardFooter';
import CardHeader from '../components/CardHeader';
import ProgressBar from '../components/ProgressBar';

const SignupFormFirstPage = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <Card>
        <CardHeader>Signup</CardHeader>
        <ProgressBar step={1} totalSteps={3} />
        <CardBody>
          <Field
            name="email"
            component={InputField}
            type="email"
            label="Email"
          />
          <Field
            name="password"
            component={InputField}
            type="password"
            label="Password"
          />
          <Field
            name="confirm_password"
            component={InputField}
            type="password"
            label="Confirm Password"
          />
        </CardBody>
        <CardFooter>
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
})(SignupFormFirstPage);
