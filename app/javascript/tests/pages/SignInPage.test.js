import React from 'react';
import testHelpers from '../helpers';
import SignIn from '../../pages/SignInPage';
import SignInForm from '../../forms/SignInForm';

describe('SignIn', () => {
  let wrapper;

  beforeEach(() => {
    const state = {
      user: {},
    };

    wrapper = testHelpers.mountWithRouter(<SignIn />, state);
  });

  it('renders', () => {
    expect(wrapper.find(SignIn)).toHaveLength(1);
  });

  it('renders the sign in form', () => {
    expect(wrapper.find(SignInForm)).toHaveLength(1);
  });

  it('does not render the login error message', () => {
    expect(wrapper.find('.login-error-message')).toHaveLength(0);
  });

  describe('log in error message present', () => {
    let newWrapper;
    beforeEach(() => {
      const state = {
        user: {
          loginErrorMessage: 'Sup dog',
        },
      };

      newWrapper = testHelpers.mountWithRouter(<SignIn />, state);
    });

    it('renders the error message html', () => {
      expect(newWrapper.find('.login-error-message')).toHaveLength(1);
    });
  });
});
