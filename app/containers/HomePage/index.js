/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import Form from './Form';
import Input from './Input';
import Section from './Section';
import { changeString, sendInput } from './actions';
import { makeSelectString } from './selectors';
import reducer from './reducer';
import saga from './saga';

export function HomePage({ string, onSubmitForm, onChangeString }) {
  useInjectReducer({ key: 'homePage', reducer });
  useInjectSaga({ key: 'homePage', saga });

  return (
    <article>
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="A React.js Boilerplate application homepage"
        />
      </Helmet>
      <div>
        <Section>
          <Form onSubmit={onSubmitForm}>
            <label>
              <Input
                id="string"
                type="text"
                placeholder="input a string"
                value={string}
                onChange={onChangeString}
              />
            </label>
          </Form>
        </Section>
      </div>
    </article>
  );
}

HomePage.propTypes = {
  onSubmitForm: PropTypes.func,
  onChangeString: PropTypes.func,
  string: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  string: makeSelectString(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangeString: evt => dispatch(changeString(evt.target.value)),
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(sendInput(evt));
      dispatch(changeString(''));
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomePage);
