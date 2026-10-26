import React, { useEffect } from 'react';

const FORM_URL = 'https://docs.google.com/forms/d/1lRyMG9O1UMiV9np24jeh8hyaPQFAZOP57Tv4Lw3H4hE/viewform';

export const WebSubmissionPage: React.FC = () => {
  useEffect(() => {
    window.location.replace(FORM_URL);
  }, []);

  return (
    <p className="min-h-screen bg-bg px-6 pt-36 text-center text-cream">
      Redirecting to the web project submission form…{' '}
      <a className="underline" href={FORM_URL}>Continue if you are not redirected</a>
    </p>
  );
};
