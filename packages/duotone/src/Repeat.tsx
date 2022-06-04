import * as React from "react";
import { SVGProps } from "react";

const SvgRepeat = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="repeat_svg__fa-primary"
      d="M448 95.1a24.07 24.07 0 0 1-7.938 17.85l-80 72C355.6 189.9 349.8 192 343.1 192c-3.312 0-6.618-.688-9.759-2.062C325.6 186.1 320 177.5 320 168l-.9-40H160c-52.9 0-96 43.1-96 96 0 17.69-14.33 32-32 32S0 241.7 0 224C0 135.78 71.78 64 160 64h160l-.005-40c0-9.469 5.583-18.06 14.24-21.94 8.641-3.781 18.78-2.219 25.83 4.094l80 72C445.1 82.72 448 89.19 448 95.1z"
    />
    <path
      d="M512 288c0 88.22-71.78 160-160 160H192l.007 40c0 9.469-5.585 18.06-14.24 21.94C174.6 511.3 171.3 512 168 512a24.109 24.109 0 0 1-16.07-6.156l-80-72C66.89 429.3 64 422.8 64 416s2.891-13.28 7.938-17.84l80-72C159 319.8 169.1 318.3 177.8 322.1c8.6 3.8 14.2 12.4 14.2 21.9v40h160c52.94 0 96-43.06 96-96 0-17.69 14.33-32 32-32s32 14.3 32 32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgRepeat;
