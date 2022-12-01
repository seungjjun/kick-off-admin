/* eslint-disable import/no-extraneous-dependencies */
import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router';

import App from './App';

test('App', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
  );
});
