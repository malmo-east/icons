import * as React from 'react';
import { SVGProps } from 'react';

const SvgHouseCircleXmark = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
        <path d="M272.5 5.7c8.9-7.6 22.1-7.6 31 0l222.6 188.9c-9.8-1.7-19.8-2.6-30.1-2.6-14.2 0-28.1 1.7-41.3 4.9L288 55.47 112 204.8V432c0 17.7 14.3 32 32 32h48V312c0-22.1 17.9-40 40-40h112c1.5 0 2.9.1 4.3.2-9.5 14.6-16.8 30.7-21.7 47.8H240v144h108.5c12.2 18.8 28 35.1 46.3 48H144c-44.18 0-80-35.8-80-80V245.5l-24.47 20.8c-10.11 8.6-25.25 7.3-33.83-2.8-8.575-10.1-7.334-25.2 2.773-33.8L272.5 5.7zM352 368c0-79.5 64.5-144 144-144s144 64.5 144 144-64.5 144-144 144-144-64.5-144-144zm166.6 0 36.7-36.7c6.3-6.2 6.3-16.4 0-22.6-6.2-6.3-16.4-6.3-22.6 0L496 345.4l-36.7-36.7c-6.2-6.3-16.4-6.3-22.6 0-6.3 6.2-6.3 16.4 0 22.6l36.7 36.7-36.7 36.7c-6.3 6.2-6.3 16.4 0 22.6 6.2 6.3 16.4 6.3 22.6 0l36.7-36.7 36.7 36.7c6.2 6.3 16.4 6.3 22.6 0 6.3-6.2 6.3-16.4 0-22.6L518.6 368z" />
    </svg>
);

export default SvgHouseCircleXmark;
