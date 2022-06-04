import * as React from 'react';
import { SVGProps } from 'react';

const SvgCircleX = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
        <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208-93.3 208-208 208zm103.5-330.3c-10.11-8.578-25.28-7.297-33.83 2.828L256 218.8l-69.7-82.3c-8.5-10.1-23.7-11.4-33.8-2.8-10.1 8.5-11.4 23.7-2.8 33.8l74.9 88.5-74.88 88.5c-8.562 10.11-7.297 25.27 2.828 33.83C157 382.1 162.5 384 167.1 384c6.812 0 13.59-2.891 18.34-8.5L256 293.2l69.67 82.34C330.4 381.1 337.2 384 344 384c5.469 0 10.98-1.859 15.48-5.672 10.12-8.562 11.39-23.72 2.828-33.83L287.4 256l74.88-88.5c8.62-10.1 7.32-25.3-2.78-33.8z" />
    </svg>
);

export default SvgCircleX;
