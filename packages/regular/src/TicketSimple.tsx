import * as React from 'react';
import { SVGProps } from 'react';

const SvgTicketSimple = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
        <path d="M576 208c-26.5 0-48 21.5-48 48s21.5 48 48 48v80c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64v-80c26.51 0 48-21.5 48-48s-21.49-48-48-48v-80c0-35.35 28.65-64 64-64h448c35.3 0 64 28.65 64 64v80zM64 112c-8.84 0-16 7.2-16 16v44.8c28.69 16.6 48 47.7 48 83.2s-19.31 66.6-48 83.2V384c0 8.8 7.16 16 16 16h448c8.8 0 16-7.2 16-16v-44.8c-28.7-16.6-48-47.7-48-83.2s19.3-66.6 48-83.2V128c0-8.8-7.2-16-16-16H64z" />
    </svg>
);

export default SvgTicketSimple;
