/**
 *
 * ListPage
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import StringsList from 'components/StringsList';
import {
  makeSelectStrings,
  makeSelectError,
  makeSelectLoading,
  makeSelectRendered,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import { loadStrings } from './actions';

export function ListPage({ strings, loading, error, rendered, renderStrings }) {
  useInjectReducer({ key: 'listPage', reducer });
  useInjectSaga({ key: 'listPage', saga });

  const stringsListProps = {
    loading,
    error,
    strings,
  };

  if (rendered === false) {
    renderStrings();
  }

  return (
    <div>
      <Helmet>
        <title>ListPage</title>
        <meta name="ListPage" content="List of Strings" />
      </Helmet>
      <StringsList {...stringsListProps} />
    </div>
  );
}

ListPage.propTypes = {
  strings: PropTypes.array,
  loading: PropTypes.bool,
  error: PropTypes.bool,
  rendered: PropTypes.bool,
  renderStrings: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  strings: makeSelectStrings(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
  rendered: makeSelectRendered(),
});

function mapDispatchToProps(dispatch) {
  return {
    renderStrings: () => dispatch(loadStrings()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(ListPage);
