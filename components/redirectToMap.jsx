import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import Link from 'next/link';

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
    <Link href='/map/'>Play</Link>
  );
};

export default RedirectToMap;