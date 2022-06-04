import * as React from 'react';
import { SVGProps } from 'react';

const SvgNote = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
        <path d="M384 32H64.01C28.66 32 .006 60.65.006 96L0 416c0 35.34 28.65 64 64 64h245.4c16.97 0 33.25-6.742 45.25-18.75l74.63-74.64C441.3 374.6 448 358.3 448 341.4V96c0-35.2-28.8-64-64-64zm16 288h-79.1c-17.67 0-32 14.33-32 32l.004 79.88H64c-8.836 0-16-7.164-16-16L48.02 96c0-8.836 7.162-16 16-16h319.1c8.836 0 16 7.164 16 16v224z" />
    </svg>
);

export default SvgNote;
