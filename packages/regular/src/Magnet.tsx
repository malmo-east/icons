import * as React from 'react';
import { SVGProps } from 'react';

const SvgMagnet = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
        <path d="M0 88c0-30.93 25.07-56 56-56h48c30.9 0 56 25.07 56 56v168c0 35.3 28.7 64 64 64s64-28.7 64-64V88c0-30.93 25.1-56 56-56h48c30.9 0 56 25.07 56 56v168c0 123.7-100.3 224-224 224S0 379.7 0 256V88zm224 344c97.2 0 176-78.8 176-176v-64h-64v64c0 61.9-50.1 112-112 112s-112-50.1-112-112v-64H48v64c0 97.2 78.8 176 176 176z" />
    </svg>
);

export default SvgMagnet;
