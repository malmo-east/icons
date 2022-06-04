import * as React from 'react';
import { SVGProps } from 'react';

const SvgJ = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
        <path d="M160 480C71.78 480 0 410.99 0 326.2V280c0-13.2 10.75-24 24-24s24 10.8 24 24v46.19C48 384.5 98.25 432 160 432s112-47.47 112-105.8V56c0-13.25 10.8-24 24-24s24 10.75 24 24v270.2C320 411 248.2 480 160 480z" />
    </svg>
);

export default SvgJ;
