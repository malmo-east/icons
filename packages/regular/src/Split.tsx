import * as React from 'react';
import { SVGProps } from 'react';

const SvgSplit = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
        <path d="M504.1 367c9.375 9.375 9.375 24.56 0 33.94l-80 80c-3.8 4.76-9.9 7.06-16.1 7.06s-12.28-2.344-16.97-7.031c-9.375-9.375-9.375-24.56 0-33.94L430.1 408H320a23.985 23.985 0 0 1-16.97-7.031L182.1 280H24c-13.25 0-24-10.7-24-24s10.75-24 24-24h158.1l120.1-120.1c5.3-5.4 11.4-7.9 17.8-7.9h110.1l-39.03-39.03c-9.375-9.375-9.375-24.56 0-33.94s24.56-9.375 33.94 0l80 80c9.375 9.375 9.375 24.56 0 33.94l-80 80C420.3 229.7 414.2 232 408 232s-12.28-2.344-16.97-7.031c-9.375-9.375-9.375-24.56 0-33.94L430.1 152H330L226 256l104 104h100.1l-39.03-39.03c-9.375-9.375-9.375-24.56 0-33.94s24.56-9.375 33.94 0L504.1 367z" />
    </svg>
);

export default SvgSplit;
