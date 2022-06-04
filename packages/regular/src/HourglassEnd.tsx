import * as React from 'react';
import { SVGProps } from 'react';

const SvgHourglassEnd = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
        <path d="M0 24C0 10.75 10.75 0 24 0h336c13.3 0 24 10.75 24 24s-10.7 24-24 24h-8v18.98c0 40.32-16.9 78.12-44.5 107.52L225.9 256l81.6 81.5C335.1 366 352 404.7 352 445v19h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.25 0-24-10.7-24-24s10.75-24 24-24h8v-19c0-40.3 16.01-79 44.52-107.5L158.1 256l-81.58-81.5C48.01 145.1 32 107.3 32 66.98V48h-8C10.75 48 0 37.25 0 24zm304 42.98V48H80v18.98c0 27.58 10.96 54.02 30.5 73.52l81.5 81.6 81.5-81.6C293 121 304 94.56 304 66.98z" />
    </svg>
);

export default SvgHourglassEnd;
