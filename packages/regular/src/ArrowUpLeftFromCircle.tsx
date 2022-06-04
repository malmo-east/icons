import * as React from 'react';
import { SVGProps } from 'react';

const SvgArrowUpLeftFromCircle = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
        <path d="M312 336c6.156 0 12.28-2.344 16.97-7.031 9.375-9.375 9.375-24.56 0-33.94L81.94 48H192c13.25 0 24-10.75 24-24S205.3 0 192 0H24C10.75 0 0 10.75 0 24v168c0 13.25 10.75 24 24 24s24-10.7 24-24V81.94l247 247c4.7 4.76 10.8 7.06 17 7.06zM288 64c-13.25 0-24 10.75-24 24s10.8 24 24 24c97.03 0 176 78.97 176 176s-78.97 176-176 176-176-79-176-176c0-13.25-10.75-24-24-24s-24 10.8-24 24c0 123.5 100.5 224 224 224s224-100.5 224-224S411.5 64 288 64z" />
    </svg>
);

export default SvgArrowUpLeftFromCircle;
