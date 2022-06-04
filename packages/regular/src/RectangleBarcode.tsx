import * as React from 'react';
import { SVGProps } from 'react';

const SvgRectangleBarcode = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
        <path d="M144 151.1v208c0 14.2-10.7 24-24 24s-24-9.8-24-24v-208c0-12.4 10.7-24 24-24s24 11.6 24 24zm64-8v224c0 9.7-7.2 16-16 16s-16-6.3-16-16v-224c0-7.9 7.2-16 16-16s16 8.1 16 16zm32 8c0-12.4 10.7-24 24-24s24 11.6 24 24v208c0 14.2-10.7 24-24 24s-24-9.8-24-24v-208zm160 0v208c0 14.2-10.7 24-24 24s-24-9.8-24-24v-208c0-12.4 10.7-24 24-24s24 11.6 24 24zm48-8c0-7.9 7.2-16 16-16s16 8.1 16 16v224c0 9.7-7.2 16-16 16s-16-6.3-16-16v-224zM0 95.1c0-34.45 28.65-64 64-64h448c35.3 0 64 29.55 64 64v320c0 36.2-28.7 64-64 64H64c-35.35 0-64-27.8-64-64v-320zm48 0v320c0 9.7 7.16 16 16 16h448c8.8 0 16-6.3 16-16v-320c0-7.94-7.2-16-16-16H64c-8.84 0-16 8.06-16 16z" />
    </svg>
);

export default SvgRectangleBarcode;
