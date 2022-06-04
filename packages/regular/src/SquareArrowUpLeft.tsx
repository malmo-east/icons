import * as React from 'react';
import { SVGProps } from 'react';

const SvgSquareArrowUpLeft = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
        <path d="M193.9 192h97.34c13.25 0 24-10.75 24-24s-10.75-24-24-24H136c-13.2 0-24 10.8-24 24v155.3c0 13.25 10.75 24 24 24s24-10.75 24-24v-97.4l135 135c4.7 4.8 10.8 7.1 17 7.1s12.28-2.344 16.97-7.031c9.375-9.375 9.375-24.56 0-33.94L193.9 192zM384 32H64C28.65 32 0 60.66 0 96v320c0 35.34 28.65 64 64 64h320c35.35 0 64-28.66 64-64V96c0-35.34-28.7-64-64-64zm16 384c0 8.82-7.178 16-16 16H64c-8.822 0-16-7.18-16-16V96c0-8.82 7.178-16 16-16h320c8.822 0 16 7.18 16 16v320z" />
    </svg>
);

export default SvgSquareArrowUpLeft;
