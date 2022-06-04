import * as React from 'react';
import { SVGProps } from 'react';

const SvgSolarSystem = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
        <path d="M255.1 192c-35.38 0-63.1 28.63-63.1 63.1 0 35.37 28.63 63.99 64 63.99s64-27.69 64-63.09c0-35.4-28.6-64-64.9-64zm.9 80c-8.8 0-16-7.2-16-16 0-8.838 7.164-16 16-16s16 7.162 16 16c0 8.8-7.2 16-16 16zm214.4 123.1c11.38 23.5 4.747 51.88-15.75 68.13s-49.5 16.12-69.87-.25-26.75-44.62-15.37-68.24c11.5-23.5 37.74-36 63.24-30 49.75-80.24 40-187.1-29.5-256.7-59.88-59.74-150-77.4-228-44.53-4.25-12.27-11.35-24-21.05-33.75-2-2.125-4.402-3.626-6.527-5.374 97.5-45.1 213.3-25.75 289.5 50.62C524.3 162.2 535.4 296.6 470.4 395.1zm-112.5 87.1c2 2.125 4.404 3.625 6.529 5.375-97.5 45.1-213.3 25.75-289.4-50.62C-12.28 349.8-23.38 215.4 41.62 116c-11.37-23.47-4.74-51.86 15.76-68.11s49.5-16.13 69.87.25c20.38 16.37 26.75 44.62 15.37 68.24-11.5 23.5-37.74 35.1-63.24 29.1-49.75 80.24-40 187.1 29.5 256.7 59.88 59.74 150 77.4 228 44.53 4.22 14.09 11.32 25.79 21.02 35.49zm33.9-361.9c-16.62-16.62-42.01-17.62-60.76-4.743-23.5-12.5-49.1-19.51-74.97-19.51-72.38 0-135.8 48.63-154.5 118.6-18.75 69.87 11.75 143.7 74.5 179.1 62.75 36.12 142 25.75 193.1-25.49 51-50.1 59.62-127.6 27.37-188.1C409.4 162.3 408.4 136.9 391.8 120.3zm-56.6 214.9c-40.88 41.62-106.9 45.01-151.9 7.891S129.3 240.5 162.5 192.5c33.13-47.1 97.49-62.6 148.2-33.73 1 10.75 5.011 21.23 13.14 29.35 8.125 8.123 18.63 12.13 29.26 13.13 24 42.75 18.4 97.65-17.9 133.95z" />
    </svg>
);

export default SvgSolarSystem;
