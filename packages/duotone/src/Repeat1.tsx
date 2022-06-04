import * as React from "react";
import { SVGProps } from "react";

const SvgRepeat1 = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="repeat-1_svg__fa-primary"
      d="M264 320c13.3 0 24-10.7 24-24v-80a23.96 23.96 0 0 0-9.969-19.47C271.8 192 263.7 190.8 256.4 193.2l-24 8c-12.6 4.2-19.4 17.8-15.2 30.4 3.4 10.1 11.9 16.4 22.8 16.4v48c0 13.3 10.8 24 24 24z"
    />
    <path
      d="M480 256c-17.67 0-32 14.31-32 32 0 52.94-43.06 96-96 96H192v-40c0-9.469-5.578-18.06-14.23-21.94-8.641-3.781-18.75-2.219-25.83 4.094l-80 72C66.89 402.7 64 409.2 64 416s2.891 13.28 7.938 17.84l80 72C156.4 509.9 162.2 512 168 512c3.312 0 6.615-.688 9.756-2.062C186.4 506.1 192 497.5 192 488v-40h160c88.22 0 160-71.78 160-160 0-17.7-14.3-32-32-32zM160 128h159.1l.9 40c0 9.469 5.578 18.06 14.23 21.94 12.41 5.431 22.38-1.007 25.83-4.094l80-72C445.1 109.3 448 102.8 448 95.1s-2.891-13.28-7.938-17.84l-80-72C353-.156 342.9-1.719 334.2 2.062 325.6 5.938 319.1 14.53 319.1 24l.9 40H160C71.78 64 0 135.8 0 224c0 17.69 14.33 32 32 32s32-14.31 32-32c0-52.9 43.1-96 96-96z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgRepeat1;
