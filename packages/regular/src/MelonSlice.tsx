import * as React from 'react';
import { SVGProps } from 'react';

const SvgMelonSlice = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
        <path d="M425.3 7.031C420.7 2.344 414.5 0 408.4 0a24 24 0 0 0-16.97 7.031l-76.73 76.73C318 97.99 320 112.8 320 128c0 106-85.96 192-192 192-15.25 0-30.01-1.963-44.23-5.322l-76.74 76.74C2.531 395.9 0 402 0 408.4s2.531 12.47 7.031 16.97C62.91 481.2 137.2 512 216.2 512c79.03 0 153.3-30.77 209.2-86.64C481.2 369.5 512 295.2 512 216.2S481.2 62.89 425.3 7.031zM143.1 367.2c119.8-7.951 215.7-103.9 223.4-223.8.082.07-.08-.08 0 0 11.7 22.4 17.5 47.2 17.5 72.8 0 44.82-17.46 86.96-49.16 118.6C303.1 366.5 260.1 384 216.2 384c-25.6 0-50.32-5.697-72.73-16.49.13-.11.33-.21-.37-.31zm248.3 24.2c-46.8 46.8-109 72.6-175.2 72.6-58.12 0-113.2-19.88-157.4-56.42l22.83-22.83C119.7 415.3 166.6 432 216.2 432c57.63 0 111.8-22.45 152.6-63.22C409.5 328 432 273.8 432 216.2c0-49.53-16.94-96.28-47.5-134.4l23.07-23.07C444.1 102.1 464 158.1 464 216.2c0 66.2-25.8 128.4-72.6 175.2z" />
    </svg>
);

export default SvgMelonSlice;
