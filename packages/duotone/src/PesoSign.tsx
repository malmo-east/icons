import * as React from "react";
import { SVGProps } from "react";

const SvgPesoSign = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path
      className="peso-sign_svg__fa-primary"
      d="M32 64c0-17.67 14.33-32 32-32h112c97.2 0 176 78.8 176 176s-78.8 176-176 176H96v64c0 17.7-14.33 32-32 32s-32-14.3-32-32V64zm64 256h80c61.9 0 112-50.1 112-112S237.9 96 176 96H96v224z"
    />
    <path
      d="M32 192c-17.67 0-32-14.3-32-32s14.33-32 32-32v64zm0 96c-17.67 0-32-14.3-32-32s14.33-32 32-32v64zm64 0v-64h190.9c-3.6 24.9-15.4 47.2-32.5 64H96zm255.3-64h.7c17.7 0 32 14.3 32 32s-14.3 32-32 32h-19.2c10-19.5 16.4-41.1 18.5-64zm-18.5-96H352c17.7 0 32 14.3 32 32s-14.3 32-32 32h-.7c-2.1-22.9-8.5-44.5-18.5-64zM96 128h158.4c17.1 16.8 28.9 39.1 32.5 64H95.1l.9-64z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgPesoSign;
