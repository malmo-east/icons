import * as React from 'react';
import { SVGProps } from 'react';

const SvgClockFiveThirty = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
        <path d="M280 392c0 13.3-10.7 24-24 24s-24-10.7-24-24V256c0-10.6 6.9-19.9 17-23 10.2-3.9 21.1.9 26.1 9.7l64 96c8.2 11 5.2 25.9-5.8 32.4-11 8.2-25.9 5.2-33.3-5.8l-20-30V392zm-24 120C114.6 512 0 397.4 0 256S114.6 0 256 0s256 114.6 256 256-114.6 256-256 256zm208-256c0-114.9-93.1-208-208-208S48 141.1 48 256s93.1 208 208 208 208-93.1 208-208z" />
    </svg>
);

export default SvgClockFiveThirty;
