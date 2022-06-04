import * as React from 'react';
import { SVGProps } from 'react';

const SvgCircleLocationArrow = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
        <path d="m358.2 182.7-84 196c-3.5 8.1-11.4 13.3-21.1 13.3-.5 0-2-.1-3.5-.4-10.2-2.1-17.6-11.2-17.6-21.6v-90h-90.9c-9.5 0-18.6-7.4-20.7-17.6-2.1-10.1 3.4-20.5 12.9-24.6l196-84c8.5-3.5 18-1.7 24.3 4.7 5.5 6.3 8.2 15.8 4.6 24.2zM512 256c0 141.4-114.6 256-256 256S0 397.4 0 256 114.6 0 256 0s256 114.6 256 256zM256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48z" />
    </svg>
);

export default SvgCircleLocationArrow;
