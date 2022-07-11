global.___loader = {
  enqueue: jest.fn(),
};

const noop = () => {};
Object.defineProperty(window, 'scrollTo', { value: noop, writable: true });
