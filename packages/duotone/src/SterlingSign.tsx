import * as React from "react";
import { SVGProps } from "react";

const SvgSterlingSign = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path
      className="sterling-sign_svg__fa-primary"
      d="M176.4 95.1c-35.6 0-64.4 29.7-64.4 65.3v172.1c0 29-7.9 57.5-22.8 82.4l-.68 1.1H288c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-11.53 0-22.166-6.2-27.846-16.2-5.681-10.1-5.525-22.4.406-32.3l29.76-49.6C43.27 367 48 349.9 48 332.5V160.4C48 89.47 105.5 32 176.4 32c13.8 0 27.5 2.22 39.7 6.59l82 27.05c16.8 5.59 25.8 23.71 20.3 40.46-5.6 16.8-23.8 25.8-40.5 20.3l-81.2-27.1c-6.5-2.18-13.4-3.3-20.3-3.3v-.9z"
    />
    <path
      d="M48 288H32c-17.67 0-32-14.3-32-32s14.33-32 32-32h16v64zm64-64h112c17.7 0 32 14.3 32 32s-14.3 32-32 32H112v-64z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgSterlingSign;