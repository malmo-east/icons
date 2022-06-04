import * as React from 'react';
import { SVGProps } from 'react';

const SvgOption = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
        <path d="M440 112h176c13.3 0 24-10.7 24-24 0-13.26-10.7-24-24-24H440c-13.3 0-24 10.74-24 24 0 13.3 10.7 24 24 24zm176 288H486.5c-12.12 0-23.47-5.406-31.09-14.81L221.9 96.59C205.1 75.88 180.2 64 153.5 64H24C10.75 64 0 74.75 0 88s10.75 24 24 24h129.5c12.12 0 23.47 5.406 31.09 14.81l233.6 288.6C434.9 436.1 459.8 448 486.5 448H616c13.25 0 24-10.75 24-24s-10.7-24-24-24z" />
    </svg>
);

export default SvgOption;
