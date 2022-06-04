import * as React from 'react';
import { SVGProps } from 'react';

const SvgBedFront = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
        <path d="M80 160c0-17.6 14.4-32 32-32h96c17.6 0 32 14.4 32 32v32h32v-32c0-17.6 14.4-32 32-32h96c17.6 0 32 14.4 32 32v32h48V96c0-35.2-28.8-64-64-64H96c-35.2 0-64 28.8-64 64v96h48v-32zm368 64H64c-35.35 0-64 28.7-64 64v168c0 13.3 10.75 24 23.1 24S48 469.3 48 456v-40h416v40c0 13.3 10.7 24 24 24s24-10.7 24-24V288c0-35.3-28.7-64-64-64zm16 144H48v-80c0-8.875 7.125-16 16-16h384c8.875 0 16 7.125 16 16v80z" />
    </svg>
);

export default SvgBedFront;
