import '@testing-library/jest-dom';

// jsdom polyfill for ResizeObserver (not available in test environment)
if (typeof globalThis.ResizeObserver === 'undefined') {
  globalThis.ResizeObserver = class ResizeObserver {
    observe() {}
    unobserve() {}
    disconnect() {}
  };
}
