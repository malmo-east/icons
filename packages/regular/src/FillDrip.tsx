import * as React from 'react';
import { SVGProps } from 'react';

const SvgFillDrip = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
        <path d="M39.03 7.029c9.37-9.372 24.57-9.372 33.94 0L162.3 96.4l58.8-58.74c28.1-28.121 73.7-28.121 101.8 0L474.3 189.1c28.2 28.1 28.2 73.7 0 101.8L283.9 481.4c-37.5 37.5-98.3 37.5-135.8 0L30.63 363.9c-37.493-37.5-37.493-98.3 0-135.8l97.77-97.8-89.37-89.33c-9.37-9.37-9.37-24.57 0-33.941zM231 232.1l-68.7-67.8-97.73 97.8c-7.33 7.3-11.8 16.4-13.39 25.9H409.4l31-31.9c9.4-8.5 9.4-23.7 0-33.1L288.1 71.6c-8.5-9.37-23.7-9.37-33.1 0l-58.7 58.7 67.8 68.7c10.2 9.4 10.2 24.6 0 33.1-8.5 10.2-23.7 10.2-33.1 0zM448 448c0-25.2 32.6-79.6 51.2-108.7 6.1-9.4 19.5-9.4 25.6 0C543.4 368.4 576 422.8 576 448c0 35.3-28.7 64-64 64s-64-28.7-64-64z" />
    </svg>
);

export default SvgFillDrip;
