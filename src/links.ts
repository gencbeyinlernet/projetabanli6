import type { MouseEvent } from 'react';

// A plain left click stays inside the site; modified clicks keep the browser's
// default (new tab, copy link) so the full public address still works.
export function isPlainLeftClick(event: MouseEvent) {
  return event.button === 0 && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey;
}
