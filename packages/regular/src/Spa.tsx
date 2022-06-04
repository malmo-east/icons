import * as React from 'react';
import { SVGProps } from 'react';

const SvgSpa = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
        <path d="M568.3 192c-21.4.2-84.5 3.6-147.8 36-26.62-78.25-69.25-146.5-121.7-192.2-2.9-2.55-6.9-3.8-10.8-3.8s-7.8 1.25-10.8 3.75C224.8 81.5 182.1 149.8 155.5 228 92.25 195.6 29.12 192.2 7.75 192 3.375 192 0 195.4 0 199.9c.25 27.88 7.125 126.2 88.75 199.3C171 479.1 252.4 480 285.9 480h4.438c33.5 0 114.8-.976 196.9-80.85C568.9 326 575.8 227.7 576 199.9c0-4.5-3.4-7.9-7.7-7.9zM122.2 364.8l-.7-.8-.75-.625c-42.38-38-60.13-84.38-67.63-119.3C92 250.8 145.1 267.5 188.1 309.4l.75.75.75.625c23.5 21.12 41.13 46.37 54 77.5l17.75 43C227.6 428.6 175.8 416.9 122.2 364.8zm165.8 5.1c-13-31.63-33.25-65.25-66.38-94.87-8-7.75-16.25-14.28-24.62-20.65C217 190.5 248.8 133.6 288 92c39.25 41.62 71 98.5 91 162.4-8.375 6.375-16.62 12.9-24.62 20.65C321.2 304.7 301 338.3 288 369.9zm167.2-6.5-.7.6-.75.75c-53.63 52.25-105.5 63.87-139.3 66.5l17.88-43c12.87-31.12 30.5-56.37 54-77.5l.75-.625.75-.75c43-41.88 96.25-58.62 135-65.25C515.4 279 497.6 325.4 455.2 363.4z" />
    </svg>
);

export default SvgSpa;
