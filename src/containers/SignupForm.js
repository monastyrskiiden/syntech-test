import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import SignupFormFirstPage from './SignupFormFirstPage';
import SignupFormSecondPage from './SignupFormSecondPage';
import SignupFormThirdPage from './SignupFormThirdPage';
import Container from '../components/Container';

class SignupForm extends Component {
  state = {
    page: 1,
  };

  nextPage = () => this.setState({ page: this.state.page + 1 });

  previousPage = () => this.setState({ page: this.state.page - 1 });

  render() {
    const { onSubmit } = this.props;
    const { page } = this.state;
    return (
      <TransitionGroup>
        <Container>
          <CSSTransition
            key={page}
            in={true}
            appear={true}
            timeout={1000}
            classNames="fade"
          >
            <div>
              {page === 1 && <SignupFormFirstPage onSubmit={this.nextPage} />}
              {page === 2 && (
                <SignupFormSecondPage
                  previousPage={this.previousPage}
                  onSubmit={this.nextPage}
                />
              )}
              {page === 3 && <SignupFormThirdPage onSubmit={onSubmit} />}
            </div>
          </CSSTransition>
        </Container>
      </TransitionGroup>
    );
  }
}

SignupForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SignupForm;
