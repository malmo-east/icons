import * as React from 'react';
import { SVGProps } from 'react';

const SvgOverline = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
        <path d="M424 0H24C10.75 0 0 10.75 0 24s10.75 24 24 24h400c13.3 0 24-10.75 24-24S437.3 0 424 0zM224 96c-97.2 0-176 78.8-176 176v64c0 97.2 78.8 176 176 176s176-78.8 176-176v-64c0-97.2-78.8-176-176-176zm128 240c0 70.58-57.42 128-128 128S96 406.58 96 336v-64c0-70.58 57.42-128 128-128s128 57.42 128 128v64z" />
    </svg>
);

export default SvgOverline;
