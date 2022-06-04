import * as React from "react";
import { SVGProps } from "react";

const SvgOm = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M420.1 200c-24.25 0-47.88 9.75-65 26.88l-24.25 24.25C322.8 259.4 311.4 264 299.9 264h-65.4c14.12-21.75 20.88-48.88 15-77.75-8.5-41.65-43.1-74.45-85.1-81.05-33.2-5-64.77 5.2-87.77 26.8-7.125 6.625-6 18.25 1.75 24.12L91.5 166c6.13 4.5 14.4 3.9 20.3-1 12.2-10.4 28.6-15 45.6-12.1 21.6 3.5 39.6 20.3 44.7 41.6 8.7 36.7-19.1 69.5-54.5 69.5l-39.6.2c-9 0-14.75 9.375-10.75 17.38l12 24.13c2 3.875 5.75 6.125 9.875 6.5L156 312c41.88 0 76 34.13 76 76s-34.1 76-76 76c-82.88 0-104.9-20.75-142.6-76.75C9.25 381.1 0 384.4 0 391.4 0 421.1 20.5 512 156 512c68.38 0 124-55.63 124-124 0-28.75-10.25-55-26.75-76h46.63c24.12 0 47.88-9.75 65-26.88l24.25-24.25C397.2 252.6 408.5 248 420.1 248c24.1 0 43.9 19.8 43.9 43.9V400c0 17.62-14.38 32-32 32-26.5 0-48.75-5.125-69.38-29.88C359 397.9 352 400.4 352 405.9v27.5c0 13.87 9.749 46.53 79.1 46.53 44.13 0 80-32 80-80l.9-108.03c0-50.7-41.2-91.9-91.9-91.9zM360.6 61c4 4 10.62 4 14.75 0l21.5-21.62c2.05-2 3.15-4.63 3.15-7.38s-1.125-5.375-3.125-7.375L375.4 3c-2-1.875-4.6-3-7.4-3s-5.5 1.125-7.375 3L339 24.62c-2 2-3 4.63-3 7.38s1 5.375 3 7.375L360.6 61zm16.2 89.8c76.25 0 96.12-20 100.4-26 1.8-2.8 2.8-6 2.8-9.3V80c0-12.75-14.83-20.1-25.71-12.75-25.75 19.63-53.54 29.5-83.04 29.5-50.75 0-89-29.13-89.5-29.38-13.88-10.88-32.88 6-23.25 21.25 1.6 2.5 40.5 62.18 118.3 62.18z" />
  </svg>
);

export default SvgOm;
