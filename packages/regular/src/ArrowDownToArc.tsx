import * as React from 'react';
import { SVGProps } from 'react';

const SvgArrowDownToArc = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
        <path d="M256 464c114.9 0 208-93.1 208-208.9 0-12.4 10.7-24 24-24s24 11.6 24 24C512 397.4 397.4 512 256 512S0 397.4 0 255.1c0-12.4 10.75-24 24-24s24 11.6 24 24C48 370.9 141.1 464 256 464zm17.6-119.7c-4.6 4.9-10.9 7.7-17.6 7.7-6.7 0-13.9-2.8-17.6-7.7l-104-112c-9-9.7-9.3-24.9 1.3-33.9 9.7-9 24.9-9.3 33.9 1.3l62.4 67.2V24c0-13.25 10.7-24 24-24s24 10.75 24 24v242.9l62.4-67.2c9-10.6 24.2-10.3 33.9-1.3s10.3 24.2 1.3 33.9l-104 112z" />
    </svg>
);

export default SvgArrowDownToArc;
