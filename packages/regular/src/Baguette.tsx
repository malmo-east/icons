import * as React from 'react';
import { SVGProps } from 'react';

const SvgBaguette = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
        <path d="M565.7 7.055C550.8 2.303 534.7 0 518.2 0c-36.6 0-74.87 11.38-105.9 32.65L80.88 259.7C36.02 290.44 4.42 343.14.35 394c-1.979 24.08 4.307 48.37 17.61 68.4 13.4 20.16 33.41 35.27 56.29 42.54C89.24 509.7 105.4 512 121.8 512c36.58 0 74.82-11.41 105.9-32.68l331.4-227.1c44.87-30.74 76.46-83.44 80.53-134.3 1.98-24.08-4.307-48.37-17.61-68.4-13.42-20.09-33.42-35.2-56.32-42.465zM531.1 212.7l-330.5 227c-22.5 15.5-51.2 24.3-78.8 24.3-11.87 0-22.99-1.623-33.07-4.832-12.52-3.975-23.47-12.27-30.83-23.34-7.389-11.13-10.86-24.61-9.752-38.04 2.91-36.4 26.95-75.98 59.81-98.5l17.42-11.93 49.6 49.6C179.7 341.7 185.8 344 192 344s12.28-2.344 16.97-7.031c9.375-9.375 9.375-24.56 0-33.94L165.7 259.8l73.66-50.46L287.02 257c4.68 4.7 10.78 7 16.98 7s12.28-2.344 16.97-7.031c9.375-9.375 9.375-24.56 0-33.94L279.6 181.7l73.66-50.46 45.72 45.72C403.7 181.7 409.8 184 416 184s12.28-2.344 16.97-7.031c9.375-9.375 9.375-24.56 0-33.94l-39.38-39.38 45.84-31.41C461.9 56.84 490.6 48 518.2 48c11.86 0 22.97 1.617 33.01 4.803 12.52 3.975 23.47 12.27 30.83 23.34 7.391 11.13 10.86 24.6 9.752 38.04C588.9 150.6 564.8 190.2 531.1 212.7z" />
    </svg>
);

export default SvgBaguette;
