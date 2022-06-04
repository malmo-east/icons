import * as React from 'react';
import { SVGProps } from 'react';

const SvgCircleHalf = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
        <path d="M224.1 1.971C241.6-.211 256 14.33 256 31.1V480c0 17.7-14.4 32.2-31.9 30C97.75 494.3 0 386.6 0 255.1 0 125.4 97.75 17.69 224.1 1.971zM208 53.55C116.3 75.21 48 157.7 48 255.1c0 99.2 68.3 181.7 160 203.3V53.55z" />
    </svg>
);

export default SvgCircleHalf;
