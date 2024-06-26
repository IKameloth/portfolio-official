import { RefObject, useEffect } from "react";
type Event = MouseEvent | TouchEvent;

export function useOnClickOutSide<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: (event: Event) => void
) {
  useEffect(() => {
    const listener = (event: Event) => {
      const element = ref?.current;

      if (!element || element.contains((event.target as Node) || null)) return;

      return handler(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}
