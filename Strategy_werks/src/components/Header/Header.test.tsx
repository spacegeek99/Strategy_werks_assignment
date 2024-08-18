import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import Header from './Header';
import configureStore from 'redux-mock-store';
const mockStore = configureStore([]);
const store = mockStore([]);

test('renders with redux', () => {
  render(
    <Provider store={store}>
      <Header />  // Ensure this is the correct component being tested
    </Provider>
  );
  expect(screen.getByText(/Virtualised List/i)).toBeInTheDocument();
});
