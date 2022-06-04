import * as React from "react";
import { SVGProps } from "react";

const SvgRepeat = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M480 256c-17.67 0-32 14.31-32 32 0 52.94-43.06 96-96 96H192v-40c0-9.469-5.578-18.06-14.23-21.94-8.67-3.76-18.77-2.26-25.87 4.14l-80 72c-5.01 4.5-7.9 11-7.9 17.8s2.891 13.28 7.938 17.84l80 72C156.4 509.9 162.2 512 168 512c3.312 0 6.615-.688 9.756-2.062C186.4 506.1 192 497.5 192 488v-40h160c88.22 0 160-71.78 160-160 0-17.7-14.3-32-32-32zM160 128h159.1l.9 40c0 9.469 5.578 18.06 14.23 21.94 3.17 1.36 6.47 2.06 8.87 2.06 5.812 0 11.57-2.125 16.07-6.156l80-72C445.1 109.3 448 102.8 448 95.1s-2.891-13.28-7.938-17.84l-80-72c-7.047-6.312-17.19-7.875-25.83-4.094C325.6 5.938 319.1 14.53 319.1 24l.9 40H160C71.78 64 0 135.8 0 224c0 17.69 14.33 32 32 32s32-14.31 32-32c0-52.9 43.1-96 96-96z" />
  </svg>
);

export default SvgRepeat;