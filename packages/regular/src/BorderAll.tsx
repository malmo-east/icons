import * as React from 'react';
import { SVGProps } from 'react';

const SvgBorderAll = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
        <path d="M384 32c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V96c0-35.35 28.65-64 64-64h320zm0 48H248v152h152V96c0-8.84-7.2-16-16-16zm16 200H248v152h136c8.8 0 16-7.2 16-16V280zm-200-48V80H64c-8.84 0-16 7.16-16 16v136h152zM48 416c0 8.8 7.16 16 16 16h136V280H48v136z" />
    </svg>
);

export default SvgBorderAll;
