import { renderHook } from 'test-utils';
import { useWindowSize } from 'hooks/useWindowSize';
import { setWindowSize } from 'helpers/testing';

describe('useWindowSize', () => {
  it('should return current window dimensions', () => {
    const hook = renderHook(() => useWindowSize());

    expect(typeof hook.result.current).toBe('object');
    expect(typeof hook.result.current.width).toBe('number');
    expect(typeof hook.result.current.height).toBe('number');
  });

  it('should re-render after height change', () => {
    const hook = renderHook(() => useWindowSize());

    setWindowSize('height', 1024);
    expect(hook.result.current.height).toBe(1024);

    setWindowSize('height', 2024);
    expect(hook.result.current.height).toBe(2024);
  });

  it('should re-render after width change', () => {
    const hook = renderHook(() => useWindowSize());

    setWindowSize('width', 1024);
    expect(hook.result.current.width).toBe(1024);

    setWindowSize('width', 2024);
    expect(hook.result.current.width).toBe(2024);
  });
});
