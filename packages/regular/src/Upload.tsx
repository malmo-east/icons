import * as React from 'react';
import { SVGProps } from 'react';

const SvgUpload = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
        <path d="M448 304H320v48h128c8.822 0 16 7.178 16 16v80c0 8.822-7.178 16-16 16H64c-8.822 0-16-7.178-16-16v-80c0-8.8 7.18-16 16-16h128v-48H64c-35.35 0-64 28.65-64 64v80c0 35.35 28.65 64 64 64h384c35.35 0 64-28.65 64-64v-80c0-35.3-28.7-64-64-64zM136.1 176.1 232 81.94V352c0 13.25 10.75 24 24 24s24-10.75 24-24V81.94l95.03 95.03C379.7 181.7 385.8 184 392 184s12.28-2.344 16.97-7.031c9.375-9.375 9.375-24.56 0-33.94l-136-136c-9.375-9.375-24.56-9.375-33.94 0l-136 136c-9.375 9.375-9.375 24.56 0 33.94s24.57 9.331 33.07-.869zM432 408c0-13.26-10.75-24-24-24s-24 10.7-24 24c0 13.25 10.75 24 24 24s24-10.7 24-24z" />
    </svg>
);

export default SvgUpload;
