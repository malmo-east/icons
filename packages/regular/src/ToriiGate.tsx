import * as React from 'react';
import { SVGProps } from 'react';

const SvgToriiGate = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
        <path d="M0 112V0l71.37 23.79C87.68 29.23 104.8 32 121.1 32H390c17.2 0 34.3-2.77 50.6-8.21L512 0v112c0 35.3-28.7 64-64 64v64h40c13.3 0 24 10.7 24 24s-10.7 24-24 24h-40v200c0 13.3-10.7 24-24 24s-24-10.7-24-24V288H112v200c0 13.3-10.7 24-24 24-13.25 0-24-10.7-24-24V288H24c-13.25 0-24-10.7-24-24s10.75-24 24-24h40v-64c-35.35 0-64-28.7-64-64zm64 16h384c8.8 0 16-7.2 16-16V66.6l-8.2 2.73C434.6 76.4 412.4 80 390 80H121.1c-21.49 0-43.7-3.6-64.91-10.67L48 66.6V112c0 8.8 7.16 16 16 16zm48 112h120v-64H112v64zm168-64v64h120v-64H280z" />
    </svg>
);

export default SvgToriiGate;
