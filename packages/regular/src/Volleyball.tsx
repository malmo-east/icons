import * as React from 'react';
import { SVGProps } from 'react';

const SvgVolleyball = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
        <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm208 256c0 2.652-.299 5.227-.398 7.859-18.11 4.344-35.53 6.898-51.8 7.492.63-7.425 1.053-15.97 1.053-25.46 0-41.86-8.22-101.9-42.95-163.7C426.5 119.4 464 183.4 464 256zm-46.6 130.1c-22.77 4.941-44.27 7.037-64.36 7.037-78.03 0-134.7-31.63-161.1-50.94 24.73-31.41 50.76-50.33 64.96-59.31 23.61 12.61 76.61 35.9 146.3 35.9 16.74 0 34.55-1.633 53.04-4.848C447.5 341.5 434.5 365.9 417.4 386.1zM288.8 50.85c63.93 70.44 76.13 146.2 76.13 193.6 0 9.253-.466 17.42-1.102 24.26-39.6-5.715-69.03-18.82-83.89-26.62C278.9 209.1 269 128.6 207.1 54.04c15.7-3.81 32-6.04 48.9-6.04 11.2 0 22.1 1.14 32.8 2.85zM158.9 72.18c12.9 13.54 23.9 27.38 32.5 41.22-36.5 17.1-98.44 56-142.8 130.7 4.26-74.6 47.76-138.7 110.3-171.92zm-97 258.02c34.72-108.4 113-156.4 151.2-174 14.85 37.16 18.21 69.2 18.88 85.97-28.04 17.39-92.75 66.2-126.4 157.1A208.34 208.34 0 0 1 61.9 330.2zm83.9 101.9c5.297-17.85 11.45-34.62 19.07-48.99 32.82 22.98 96.49 57.71 183.5 58.98C320.5 455.1 289.2 464 256 464c-40.5 0-78.2-11.8-110.2-31.9z" />
    </svg>
);

export default SvgVolleyball;
