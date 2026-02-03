export const BREAKPOINTS = {
  mobile: 768,
  tablet: 1024,
} as const;

export const MEDIA_QUERIES = {
  mobile: `(max-width: ${BREAKPOINTS.mobile - 1}px)`,
  tablet: `(min-width: ${BREAKPOINTS.mobile}px) and (max-width: ${BREAKPOINTS.tablet - 1}px)`,
  desktop: `(min-width: ${BREAKPOINTS.tablet}px)`,
  mobileOrTablet: `(max-width: ${BREAKPOINTS.tablet - 1}px)`,
} as const;

export const TOUCH_TARGET_SIZE = 44; // Minimum touch target size in pixels
