import * as React from 'react';
import { SVGProps } from 'react';

const SvgSquareQ = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
        <path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96c0-35.35-28.7-64-64-64zm16 384c0 8.822-7.178 16-16 16H64c-8.822 0-16-7.178-16-16V96c0-8.822 7.178-16 16-16h320c8.822 0 16 7.178 16 16v320zM224 128c-70.6 0-128 57.4-128 128s57.41 128 128 128c26.64 0 51.37-8.209 71.88-22.18l15.15 15.15C315.7 381.7 321.8 384 328 384s12.28-2.344 16.97-7.031c9.375-9.375 9.375-24.56 0-33.94l-15.15-15.15C343.8 307.4 352 282.6 352 256c0-70.6-57.4-128-128-128zm70.7 164.7-29.69-29.69c-9.375-9.375-24.56-9.375-33.94 0s-9.375 24.56 0 33.94l29.69 29.69C249.7 332.4 237.3 336 224 336c-44.13 0-80-35.89-80-80s35.9-80 80-80 80 35.89 80 80c0 13.3-3.6 25.7-9.3 36.7z" />
    </svg>
);

export default SvgSquareQ;
