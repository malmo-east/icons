import * as React from 'react';
import { SVGProps } from 'react';

const SvgCalendarWeek = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
        <path d="M336 256c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H112c-8.8 0-16-7.2-16-16v-64c0-8.8 7.2-16 16-16h224zM128 0c13.3 0 24 10.75 24 24v40h144V24c0-13.25 10.7-24 24-24s24 10.75 24 24v40h40c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V128c0-35.35 28.65-64 64-64h40V24c0-13.25 10.7-24 24-24zm272 192H48v256c0 8.8 7.16 16 16 16h320c8.8 0 16-7.2 16-16V192z" />
    </svg>
);

export default SvgCalendarWeek;
