import * as React from 'react';
import { SVGProps } from 'react';

const SvgStretcher = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
        <path d="M616 224H186.3L41.4 71.48c-9.156-9.625-24.34-10-33.94-.875s-10 24.31-.875 33.94l152 159.1C163.1 269.3 169.4 272 175.1 272H616c13.25 0 24-10.75 24-24s-10.7-24-24-24zM480 384c-6.871 0-13.36 1.367-19.56 3.37l-51.77-37.83L470.99 304h-81.34l-22.55 15.8-21.65-15.82H265l62.32 45.54-51.77 37.83C269.4 385.4 262.9 384 255.1 384c-35.35 0-64 28.66-64 63.1 0 35.35 28.65 64 64 64s64-27.8 64-63.1c0-10.31-2.669-19.92-7.003-28.54l55-40.2 55 40.2C418.7 428.1 415.1 437.7 415.1 448c0 35.35 28.65 64 64 64s64-28.65 64-64c.9-35.3-27.8-64-63.1-64zm-224.9 80c-8.822 0-16-7.178-16-16s7.178-16 15.1-16c10.6 0 16.9 7.2 16.9 16s-6.3 16-16 16zm224.9 0c-8.824 0-16-7.178-16-16s7.2-16 16-16c8.822 0 16 7.178 16 16s-7.2 16-16 16z" />
    </svg>
);

export default SvgStretcher;
