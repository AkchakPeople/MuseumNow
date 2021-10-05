import { Route, Switch } from 'react-router-dom';
import { HomePage } from './HomePage';
import React from 'react';
import { UserPage } from './UserPage';

export const Router: React.FC = () => {
  return (
    <>
      <Switch>
        <Route path='/users' component={UserPage} />
        <Route path='/' component={HomePage} />
      </Switch>
    </>
  );
};
