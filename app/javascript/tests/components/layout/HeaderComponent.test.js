import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../../components/layout/HeaderComponent';
import testHelpers from '../../helpers';

describe('Header', () => {
  let wrapper;
  const state = {
    user: {
      isLoggedIn: false,
    },
  };

  beforeEach(() => {
    wrapper = testHelpers.mountWithRouter(<Header />, state);
  });

  it('renders', () => {
    expect(wrapper.find(Header)).toHaveLength(1);
  });

  describe('account link', () => {
    it('renders a link', () => {
      expect(wrapper.find(Link)).toHaveLength(1);
    });

    describe('when the user is logged in', () => {
      const newState = {
        user: {
          isLoggedIn: true,
        },
      };

      beforeEach(() => {
        wrapper = testHelpers.mountWithRouter(<Header />, newState);
      });

      it('renders a link to the account page', () => {
        expect(wrapper.find(Link).props().to).toEqual('/account');
      });
    });

    describe('when the user is not logged in', () => {
      const newState = {
        user: {
          isLoggedIn: false,
        },
      };

      beforeEach(() => {
        wrapper = testHelpers.mountWithRouter(<Header />, newState);
      });

      it('renders a link to the sign-in page', () => {
        expect(wrapper.find(Link).props().to).toEqual('/sign-in');
      });
    });
  });
});
