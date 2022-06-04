import * as React from 'react';
import { SVGProps } from 'react';

const SvgLaptop = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
        <path d="M616 352H24c-13.25 0-24 10.8-24 24v16c0 48.5 39.47 88 88 88h464c48.53 0 88-39.47 88-88v-16c0-13.2-10.7-24-24-24zm-64 80H88c-19.31 0-35.48-13.77-39.2-32h542.4c-3.7 18.2-19.9 32-39.2 32zM112 88c0-4.406 3.594-8 8-8h400c4.406 0 8 3.594 8 8v232h48V88c0-30.87-25.1-56-56-56H120c-30.87 0-56 25.13-56 56v232h48V88z" />
    </svg>
);

export default SvgLaptop;
