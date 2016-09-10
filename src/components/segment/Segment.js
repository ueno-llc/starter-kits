import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import Container from 'components/container';

import s from './Segment.styl';

/**
 * Segment component
 */
export default class Segment extends Component {

  static propTypes = {
    compact: PropTypes.bool,
    children: PropTypes.node,
  };

  /**
   * Render method
   * @return {Component}
   */
  render() {
    const {
      children,
      compact,
    } = this.props;

    const classes = classNames(s.segment, {
      [s.compact]: compact,
    });

    return (
      <section className={classes}>
        <Container>
          {children}
        </Container>
      </section>
    );
  }
}
