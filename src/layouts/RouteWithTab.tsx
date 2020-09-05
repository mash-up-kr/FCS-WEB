import React from 'react';
import { Route, RouteProps } from 'react-router-dom';
import styled from 'styled-components';

import { Tab } from '../components/common/Tab';

interface Props extends RouteProps {
  component: React.ComponentClass;
}

const RouteWithHeader = ({ component: Component, ...restProps }: Props): JSX.Element => (
  <Route
    {...restProps}
    render={routeProps => (
      <Container>
        <Component {...routeProps} />

        <Tab />
      </Container>
    )}
  />
);

const Container = styled.div`
  height: 100%;
`;

export default RouteWithHeader;
