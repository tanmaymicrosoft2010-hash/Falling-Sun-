import React, { lazy, Suspense } from 'react';

const Form = lazy(() => import('../components/Form'));

export const FormPage: React.FC = () => (
  <Suspense fallback={<p className="p-6 font-sans text-ink">Loading team registration…</p>}>
    <Form />
  </Suspense>
);
