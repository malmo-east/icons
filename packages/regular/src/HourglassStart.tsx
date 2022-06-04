import * as React from 'react';
import { SVGProps } from 'react';

const SvgHourglassStart = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
        <path d="M24 464h8v-19c0-40.3 16.01-79 44.52-107.5L158.1 256l-81.58-81.5C48.01 145.1 32 107.3 32 66.98V48h-8C10.75 48 0 37.25 0 24S10.75 0 24 0h336c13.3 0 24 10.75 24 24s-10.7 24-24 24h-8v18.98c0 40.32-16.9 78.12-44.5 107.52L225.9 256l81.6 81.5C335.1 366 352 404.7 352 445v19h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.25 0-24-10.7-24-24s10.75-24 24-24zm249.5-92.5L192 289.9l-81.5 81.6C90.96 390.1 80 417.4 80 445v19h224v-19c0-27.6-11-54.9-30.5-73.5z" />
    </svg>
);

export default SvgHourglassStart;
