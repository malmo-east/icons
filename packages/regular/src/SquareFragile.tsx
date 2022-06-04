import * as React from 'react';
import { SVGProps } from 'react';

const SvgSquareFragile = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
        <path d="M128 134.3c0-13.2 9.1-22.3 22.3-22.3H176l32 64-32 32 80 64-32-64 48-32-32-64h57.7c12.3 0 22.3 9.1 22.3 22.3V224c0 47.6-34.6 87.1-80 94.7V368h32c8.8 0 16 7.2 16 16s-7.2 16-16 16h-96c-8.8 0-16-7.2-16-16s7.2-16 16-16h32v-49.3c-45.4-7.6-80-47.1-80-94.7v-89.7zM0 96c0-35.35 28.65-64 64-64h320c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V96zm48 0v320c0 8.8 7.16 16 16 16h320c8.8 0 16-7.2 16-16V96c0-8.84-7.2-16-16-16H64c-8.84 0-16 7.16-16 16z" />
    </svg>
);

export default SvgSquareFragile;
