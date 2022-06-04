import * as React from 'react';
import { SVGProps } from 'react';

const SvgClockEight = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
        <path d="M280 256c0 8-4.9 15.5-10.7 19.1l-96 64c-11 8.2-25.9 5.2-33.3-5.8-7.3-11-4.3-25.9 6.7-33.3l85.3-56.8V120c0-13.3 10.7-24 24-24s24 10.7 24 24v136zm232 0c0 141.4-114.6 256-256 256S0 397.4 0 256 114.6 0 256 0s256 114.6 256 256zM256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48z" />
    </svg>
);

export default SvgClockEight;
