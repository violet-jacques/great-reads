import React from 'react';
import { Link } from 'react-router-dom';

export default ({ isLoggedIn }) => {
  const path = isLoggedIn ? '/account' : '/sign-in';

  return (
    <div>
      <Link to={path}>account</Link>
    </div>
  );
};
