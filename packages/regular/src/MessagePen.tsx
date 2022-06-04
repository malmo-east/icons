import * as React from 'react';
import { SVGProps } from 'react';

const SvgMessagePen = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
        <path d="M325.7 117.3c-7.031-7.031-18.45-7.031-25.47 0L282 135.53l48.01 48.01 18.24-18.24c7.029-7.035 7.029-18.44 0-25.47L325.7 117.3zM174.4 243.1c-1.7 1.6-2.8 3.8-3.3 6.1l-9.521 47.61c-.779 4.19 2.921 7.89 7.121 7.09l47.61-9.52a12.058 12.058 0 0 0 6.131-3.281l90.58-90.57L264.1 152.5l-89.7 90.6zM447.1 0h-384C27.85 0-.9 28.75-.9 63.1v287.1c0 35.25 28.75 63.1 64 63.1h96v83.1c0 9.836 11.02 15.55 19.12 9.7l124.9-93.7h144c35.25 0 64-28.75 64-63.1V63.1C511.1 28.75 483.2 0 447.1 0zM464 352c0 8.75-7.25 16-16 16H288l-80 60v-60H64c-8.75 0-16-7.25-16-16V64c0-8.75 7.25-16 16-16h384c8.75 0 16 7.25 16 16v288z" />
    </svg>
);

export default SvgMessagePen;
