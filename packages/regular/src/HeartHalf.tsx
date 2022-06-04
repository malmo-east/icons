import * as React from 'react';
import { SVGProps } from 'react';

const SvgHeartHalf = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
        <path d="M47.59 300.4C17.23 272.1 0 232.4 0 190.9v-5.8c0-69.9 50.52-129.52 119.4-141 44.7-7.59 92 7.27 124.6 39.92L256 96v372.5c0 6.4-5.1 11.5-11.5 11.5-2.9 0-5.7-1.1-7.8-3.1L47.59 300.4zM208 384.5V115.9c-21.5-20.23-51.4-29.34-80.7-24.46C81.55 99.07 48 138.7 48 185.1v5.8c0 28.2 11.71 55.2 32.34 74.4L208 384.5z" />
    </svg>
);

export default SvgHeartHalf;
