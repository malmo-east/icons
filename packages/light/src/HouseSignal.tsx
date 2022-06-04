import * as React from "react";
import { SVGProps } from "react";

const SvgHouseSignal = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M325.6 3.852c6-5.136 14.8-5.136 20.8 0l224 192.048c6.7 5.7 7.5 15.8 1.7 22.5-5.7 6.7-15.8 7.5-22.5 1.7L512 187.9V352c0 35.3-28.7 64-64 64H296.4c-2.6-10.9-5.9-21.6-9.8-32H448c17.7 0 32-14.3 32-32V160.5L336 37.07 192 160.5V260c-10.2-7.4-20.8-14.1-32-20.1v-52l-37.6 32.2c-1 .9-2.1 1.6-3.2 2.2-6.9-3.2-13.9-4.4-20.99-6.2-3.87-6.5-2.6-16 3.39-20.2l224-192.048zM368 176c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32v-64c0-17.7 14.3-32 32-32h64zm-64 96h64v-64h-64v64zm-48 224c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-114.9-93.1-208-208-208-8.836 0-16-7.2-16-16s7.164-16 16-16c132.5 0 240 107.5 240 240zM0 480c0-17.7 14.33-32 32-32s32 14.3 32 32-14.33 32-32 32-32-14.3-32-32zm0-112c0-8.8 7.164-16 16-16 79.53 0 144 64.5 144 144 0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9-50.14-112-112-112-8.836 0-16-7.2-16-16z" />
  </svg>
);

export default SvgHouseSignal;
