import * as React from 'react';
import { SVGProps } from 'react';

const SvgValueAbsolute = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
        <path d="M24 32C10.75 32 0 42.75 0 56v400c0 13.3 10.75 24 24 24s24-10.75 24-24V56c0-13.25-10.75-24-24-24zm344.1 111c-9.375-9.375-24.56-9.375-33.94 0L256 222.1 176.1 143c-9.375-9.375-24.56-9.375-33.94 0s-9.375 24.56 0 33.94L222.1 256l-79.03 79.03c-9.375 9.375-9.375 24.56 0 33.94C147.7 373.7 153.8 376 160 376s12.28-2.344 16.97-7.031L256 289.9l79.03 79.03C339.7 373.7 345.8 376 352 376s12.28-2.344 16.97-7.031c9.375-9.375 9.375-24.56 0-33.94L289.9 256l79.03-79.03c9.37-9.37 9.37-24.57-.83-33.97zM488 32c-13.25 0-24 10.75-24 24v400c0 13.25 10.75 24 24 24s24-10.7 24-24V56c0-13.25-10.7-24-24-24z" />
    </svg>
);

export default SvgValueAbsolute;
