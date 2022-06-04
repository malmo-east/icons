import * as React from 'react';
import { SVGProps } from 'react';

const SvgClockThreeThirty = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
        <path d="M232 256c0-13.3 10.7-24 24-24h104c13.3 0 24 10.7 24 24s-10.7 24-24 24h-80v112c0 13.3-10.7 24-24 24s-24-10.7-24-24V256zM0 256C0 114.6 114.6 0 256 0s256 114.6 256 256-114.6 256-256 256S0 397.4 0 256zm256 208c114.9 0 208-93.1 208-208S370.9 48 256 48 48 141.1 48 256s93.1 208 208 208z" />
    </svg>
);

export default SvgClockThreeThirty;
