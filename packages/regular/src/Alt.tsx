import * as React from 'react';
import { SVGProps } from 'react';

const SvgAlt = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
        <path d="M416 424c0 13.26 10.75 24 24 24h176c13.25 0 24-10.74 24-24 0-13.25-10.75-24-24-24H440c-13.3 0-24 10.7-24 24zM640 88c0-13.25-10.7-24-24-24H486.5c-26.69 0-51.59 11.88-68.41 32.59l-233.6 288.6C176.9 394.6 165.6 400 153.5 400H24c-13.25 0-24 10.8-24 24s10.75 24 24 24h129.5c26.69 0 51.59-11.88 68.41-32.59l233.6-288.6C463.1 117.4 474.4 112 486.5 112H616c13.3 0 24-10.7 24-24z" />
    </svg>
);

export default SvgAlt;
