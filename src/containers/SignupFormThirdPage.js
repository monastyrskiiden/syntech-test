import React from 'react';
import { reduxForm } from 'redux-form';
import Card from '../components/Card';
import CardHeader from '../components/CardHeader';
import ProgressBar from '../components/ProgressBar';
import CardBody from '../components/CardBody';
import { validate } from '../utils/helpers';

let SignupFormThirdPage = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <Card>
        <CardHeader>Thank You!</CardHeader>
        <ProgressBar step={3} totalSteps={3} />
        <CardBody>
          <i className="fa fa-check-circle circle" aria-hidden="true"></i>
          <div>
            <button className="dashboard-btn" type="submit">
              Go to Dashboard <i className="fa fa-arrow-right"></i>
            </button>
          </div>
        </CardBody>
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
})(SignupFormThirdPage);
