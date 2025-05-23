// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// Silence console errors
global.console.error = (...args: any[]) => {
  const message = args[0];
  // Silence known @testing-library/react warning about userEvent
  if (message && message.includes('@testing-library/user-event')) {
    return;
  }
  console.warn(...args);
};