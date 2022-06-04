import * as React from 'react';
import { SVGProps } from 'react';

const SvgBarcodeScan = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
        <path d="M112 55.1v136H64v-136c0-12.36 10.75-24 24-24 13.3 0 24 11.64 24 24zm-48 400v-136h48v136c0 14.2-10.7 24-24 24-13.25 0-24-9.8-24-24zm96 8v-144h32v144c0 9.7-7.2 16-16 16s-16-6.3-16-16zm64-8v-136h48v136c0 14.2-10.7 24-24 24s-24-9.8-24-24zm24-424c13.3 0 24 11.64 24 24v136h-48v-136c0-12.36 10.7-24 24-24zm88 424v-136h48v136c0 14.2-10.7 24-24 24s-24-9.8-24-24zm24-424c13.3 0 24 11.64 24 24v136h-48v-136c0-12.36 10.7-24 24-24zm104 432v-144h32v144c0 9.7-7.2 16-16 16s-16-6.3-16-16zm16-432c8.8 0 16 8.06 16 16v144h-32v-144c0-7.94 7.2-16 16-16zm48 424v-136h48v136c0 14.2-10.7 24-24 24s-24-9.8-24-24zm24-424c13.3 0 24 11.64 24 24v136h-48v-136c0-12.36 10.7-24 24-24zm-392 16c0-7.94 7.2-16 16-16s16 8.06 16 16v144h-32v-144zm-136 184h592c13.3 0 24 11.6 24 24 0 14.2-10.7 24-24 24H24c-13.25 0-24-9.8-24-24 0-12.4 10.75-24 24-24z" />
    </svg>
);

export default SvgBarcodeScan;
