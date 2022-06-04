import * as React from 'react';
import { SVGProps } from 'react';

const SvgSquareN = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
        <path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96c0-35.35-28.7-64-64-64zm16 384c0 8.822-7.178 16-16 16H64c-8.822 0-16-7.178-16-16V96c0-8.822 7.178-16 16-16h320c8.822 0 16 7.178 16 16v320zM296 128c-13.25 0-24 10.75-24 24v131.2L171.7 138.3c-5.953-8.641-16.88-12.31-26.89-9.25C134.8 132.2 128 141.5 128 152v208c0 13.3 10.8 24 24 24s24-10.75 24-24V228.8l100.3 144.8c4.5 6.7 12 10.4 19.7 10.4 2.391 0 4.797-.36 7.156-1.094C313.2 379.8 320 370.5 320 360V152c0-13.2-10.7-24-24-24z" />
    </svg>
);

export default SvgSquareN;
