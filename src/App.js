import React from 'react';
import styled from 'styled-components';
import NoMatch from './static/nomatch1.jpg';

const App = ({ className }) => (
    <div className={className}>
      <img src={NoMatch} alt="logo" />
    </div>
);

export default styled(App)`
  width: 100%;
  text-align: center;
`;
