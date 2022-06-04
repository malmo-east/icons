import * as React from 'react';
import { SVGProps } from 'react';

const SvgHouseFlag = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
        <path d="M472 0c13.3 0 24 10.75 24 24v8h128c8.8 0 16 7.16 16 16v128c0 8.8-7.2 16-16 16H496v320h-48V24c0-13.25 10.7-24 24-24zm-56 192.7L272 85.88 112 204.6V432c0 17.7 14.3 32 32 32h48V344c0-22.1 17.9-40 40-40h80c22.1 0 40 17.9 40 40v120h48c5.8 0 11.3-1.6 16-4.3v50.7c-5.2 1-10.5 1.6-16 1.6H144c-44.18 0-80-35.8-80-80V240.2l-25.7 19.1c-10.64 7.9-25.67 5.6-33.573-5-7.898-10.6-5.67-25.7 4.974-33.6L257.7 36.73c8.5-6.31 20.1-6.31 28.6 0L416 132.1v60.6zM240 352v112h64V352h-64z" />
    </svg>
);

export default SvgHouseFlag;
