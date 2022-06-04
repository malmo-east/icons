import * as React from 'react';
import { SVGProps } from 'react';

const SvgPipeCircleCheck = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
        <path d="M48 336V176h416v18.91c10.4-2.81 21.1-2.91 32-2.91 5.408 0 10.72.256 16 .703V120c0-13.2-10.8-24-24-24s-24 10.8-24 24v8H48v-8c0-13.2-10.75-24-24-24S0 106.8 0 120v272c0 13.2 10.75 24 24 24s24-10.75 24-24v-8h272.7c-.4-5.3-.7-10.6-.7-16 0-10.91.992-21.63 2.912-32H48zm448-112c-79.5 0-144 64.5-144 144s64.48 144 144 144 144-64.48 144-144-64.5-144-144-144zm67.9 114.7-72 80a16.12 16.12 0 0 1-11.49 5.312c-4.385.096-8.641-1.568-11.74-4.672l-40-40c-6.24-6.273-6.24-16.38 0-22.66 6.271-6.24 16.38-6.24 22.66 0l28.06 28.1 60.7-67.46c5.92-6.592 16.03-7.104 22.59-1.215C569.3 322 569.8 332.1 563.9 338.7z" />
    </svg>
);

export default SvgPipeCircleCheck;
