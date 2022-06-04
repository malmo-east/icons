import * as React from 'react';
import { SVGProps } from 'react';

const SvgToolbox = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
        <path d="m502.6 214.6-77.25-77.25C419.4 131.4 411.2 128 402.7 128H384V88c0-30.87-25.1-56-56-56H184c-30.9 0-56 25.13-56 56v40h-18.7c-8.5 0-16.67 3.4-22.67 9.4L9.373 214.6C3.371 220.6 0 228.8 0 237.3V416c0 35.35 28.65 64 64 64h384c35.35 0 64-28.65 64-64V237.3c0-8.5-3.4-16.7-9.4-22.7zM176 88c0-4.406 3.594-8 8-8h144c4.406 0 8 3.594 8 8v40H176V88zm-60.1 88h280.2l67.9 67.9V296h-88v-16.9c0-12.4-10.7-23.1-24-23.1s-24 10.75-24 23.1V296H184v-16.9c0-12.4-10.7-23.1-24-23.1s-24 10.7-24 23.1V296H48v-52.1l67.9-67.9zM448 432H64c-8.837 0-16-7.163-16-16v-72h88v16c0 13.3 10.7 24 23.1 24 14.2 0 24.9-10.7 24.9-24v-16h144v16c0 13.3 10.7 24 24 24s24-10.75 24-23.1V344h88v72c0 8.8-7.2 16-16 16z" />
    </svg>
);

export default SvgToolbox;
