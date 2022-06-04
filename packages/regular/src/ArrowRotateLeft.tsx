import * as React from 'react';
import { SVGProps } from 'react';

const SvgArrowRotateLeft = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
        <path d="M40 16c13.25 0 24 10.75 24 24v102.1C103.7 75.57 176.3 32.11 256.1 32.11 379.6 32.11 480 132.5 480 256S379.6 479.9 256.1 479.9c-52.31 0-103.3-18.33-143.5-51.77-10.19-8.5-11.56-23.62-3.062-33.81 8.5-10.22 23.66-11.56 33.81-3.062C174.9 417.5 214.9 432 256 432c97.03 0 176-78.97 176-176S353 80 256 80c-66.54 0-126.8 38.28-156.5 96H200c13.3 0 24 10.8 24 24s-10.7 24-24 24H40c-13.25 0-24-10.7-24-24V40c0-13.25 10.75-24 24-24z" />
    </svg>
);

export default SvgArrowRotateLeft;
