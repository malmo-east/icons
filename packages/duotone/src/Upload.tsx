import * as React from "react";
import { SVGProps } from "react";

const SvgUpload = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="upload_svg__fa-primary"
      d="M105.4 182.6c-12.49-12.49-12.49-32.75 0-45.25l128-128C239.6 3.125 247.8 0 256 0s16.38 3.125 22.62 9.375l128 128c12.49 12.49 12.49 32.75 0 45.25-12.5 12.49-32.76 12.5-45.25.001L288 109.3V352c0 17.67-14.33 32-32 32s-32-14.33-32-32V109.3l-73.4 73.3c-12.5 12.5-32.7 12.5-45.2 0z"
    />
    <path
      d="M480 352H320c0 35.35-28.65 64-64 64s-64-28.65-64-64H32c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h448c17.67 0 32-14.33 32-32v-96c0-17.7-14.3-32-32-32zm-48 104c-13.2 0-24-10.8-24-24s10.8-24 24-24 24 10.8 24 24-10.8 24-24 24z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgUpload;
