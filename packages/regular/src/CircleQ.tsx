import * as React from 'react';
import { SVGProps } from 'react';

const SvgCircleQ = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
        <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208-93.3 208-208 208zm0-336c-70.6 0-128 57.4-128 128s57.41 128 128 128c26.64 0 51.37-8.209 71.88-22.18l15.15 15.15C347.7 381.7 353.8 384 360 384s12.28-2.344 16.97-7.031c9.375-9.375 9.375-24.56 0-33.94l-15.15-15.15C375.8 307.4 384 282.6 384 256c0-70.6-57.4-128-128-128zm70.7 164.7-29.69-29.69c-9.375-9.375-24.56-9.375-33.94 0s-9.375 24.56 0 33.94l29.69 29.69C281.7 332.4 269.3 336 256 336c-44.13 0-80-35.89-80-80s35.9-80 80-80 80 35.89 80 80c0 13.3-3.6 25.7-9.3 36.7z" />
    </svg>
);

export default SvgCircleQ;
