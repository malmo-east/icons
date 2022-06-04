import * as React from "react";
import { SVGProps } from "react";

const SvgTurkishLiraSign = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path
      className="turkish-lira-sign_svg__fa-primary"
      d="M95.1 32c18.6 0 32 14.33 32 32v352h64.7c68.2 0 124.4-53.5 127.8-121.6l.4-8c.9-17.6 15.9-31.2 33.6-30.4 17.6.9 31.2 15.9 29.5 33.6l.5 8C378.5 399.8 294.1 480 191.8 480H96c-17.67 0-32-14.3-32-32V64c0-17.67 14.33-32 32-32h-.9z"
    />
    <path
      d="m64 184.1-23.21 6.7c-16.99 4.8-34.703-5-39.558-22-4.855-17 4.984-34.7 21.978-39.6L64 117.6v66.5zm0 96-23.21 6.7c-16.99 4.8-34.703-5-39.558-22-4.855-17 4.984-34.7 21.978-39.6L64 213.6v66.5zm64-18.2v-66.6l119.2-34.1c17-4.8 34.7 5 39.6 22 4.8 17-5 34.7-22 39.6L128 261.9zm0-96V99.29l119.2-34.06c17-4.85 34.7 4.99 39.6 21.98 4.8 16.99-5 34.69-22 39.59L128 165.9z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgTurkishLiraSign;
