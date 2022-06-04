import * as React from 'react';
import { SVGProps } from 'react';

const SvgWrench = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
        <path d="M507.5 117.1c-2.1-12.13-12.37-21.75-24.5-25.13-12.12-3.25-25.12.125-33.1 9l-59.5 58.63-32.5-5.4-5.375-32.38 58.75-58.75c8.75-8.875 12.25-21.88 8.875-33.88-3.375-12.13-13.12-21.5-25.25-24.63-53.12-13.13-107.1 2.125-146.6 40.75-37.62 37.63-52.62 91.38-40.75 143.3L23.1 371.1C8.5 387.5 0 408.1 0 429.1s8.5 42.5 23.1 58 37.02 24.9 58 24.9c21.88 0 42.5-8.5 58-24l183.4-183.3c51.75 11.88 105.6-3.125 143.5-41 38.9-38 54.5-94.2 41.5-146.6zm-74.6 112.8c-28.5 28.5-70.25 38.13-108.1 25.25l-14.12-4.75L106.98 454c-12.75 12.88-35.25 12.88-47.1 0-6.499-6.375-9.999-14.88-9.999-24 0-9 3.5-17.63 9.999-24l203.9-203.8-4.625-14.13C244.4 149.2 253.1 107.5 282.2 79.24c20.37-20.25 47.12-31.25 74.1-31.25h1.125L301.1 105.4l15.12 90.5 90.5 15.13 57.37-57.25c.41 27.32-10.59 55.42-31.19 76.12zM87.1 407.1c-8.875 0-15.1 7.125-15.1 16s7.125 16 15.1 16 15.1-7.125 15.1-16c.9-8-5.33-16-15.1-16z" />
    </svg>
);

export default SvgWrench;
