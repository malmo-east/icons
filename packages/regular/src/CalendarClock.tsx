import * as React from 'react';
import { SVGProps } from 'react';

const SvgCalendarClock = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
        <path d="M127.1 0c14.2 0 24 10.75 24 24v40H296V24c0-13.25 10.7-24 24-24s24 10.75 24 24v40h40c35.3 0 64 28.65 64 64v64H47.1v256c0 8.8 8.06 16 16 16h221.4c12.2 18.8 28 35.1 46.3 48H64c-35.35 0-64-28.7-64-64V128c0-35.35 28.65-64 64-64h40V24c0-13.25 10.7-24 24-24h-.9zM576 368c0 79.5-64.5 144-144 144s-144.9-64.5-144.9-144S352.5 224 432 224s144 64.5 144 144zm-160.9-64v64c0 8.8 8.1 16 16 16H480c8.8 0 16-7.2 16-16s-7.2-16-16-16h-32.9v-48c0-8.8-6.3-16-16-16-7.9 0-16 7.2-16 16z" />
    </svg>
);

export default SvgCalendarClock;
