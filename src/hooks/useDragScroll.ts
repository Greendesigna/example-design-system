import { useEffect, useRef } from 'react';

/**
 * Lets mouse users drag a horizontally scrolling row, like a swipe on a phone.
 * Touch and trackpad scrolling already work natively, so only the mouse is handled.
 * A drag does not count as a click on the items inside the row.
 */
export function useDragScroll<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let pressed = false;
    let moved = false;
    let startX = 0;
    let startScroll = 0;

    const onDown = (event: PointerEvent) => {
      if (event.pointerType !== 'mouse' || event.button !== 0) return;
      pressed = true;
      moved = false;
      startX = event.clientX;
      startScroll = el.scrollLeft;
    };

    const onMove = (event: PointerEvent) => {
      if (!pressed) return;
      const delta = event.clientX - startX;
      if (!moved && Math.abs(delta) > 4) {
        moved = true;
        el.classList.add('is-dragging');
      }
      if (moved) el.scrollLeft = startScroll - delta;
    };

    const onUp = () => {
      pressed = false;
      el.classList.remove('is-dragging');
    };

    // Runs before the item's own click handler, so a drag never opens an NFT.
    const onClickCapture = (event: MouseEvent) => {
      if (!moved) return;
      event.stopPropagation();
      event.preventDefault();
      moved = false;
    };

    el.addEventListener('pointerdown', onDown);
    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp);
    window.addEventListener('pointercancel', onUp);
    el.addEventListener('click', onClickCapture, true);

    return () => {
      el.removeEventListener('pointerdown', onDown);
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
      window.removeEventListener('pointercancel', onUp);
      el.removeEventListener('click', onClickCapture, true);
    };
  }, []);

  return ref;
}
