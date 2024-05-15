import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

const RedirectToMap = () => {
  const [redirect, setRedirect] = useState(false);

  const redirectToPage = () => {
    // Set redirect state to true
    setRedirect(true);
  };

  // If redirect state is true, redirect to the specified path
  if (redirect) {
    return <Redirect to="@/app/map/page.jsx" />;
  }

  return (
    <button className='playButton bigButton' onClick={redirectToPage}>
      PLAY
    </button>
  );
};

export default RedirectToMap;