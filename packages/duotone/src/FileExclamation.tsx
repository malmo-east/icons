import * as React from "react";
import { SVGProps } from "react";

const SvgFileExclamation = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path
      className="file-exclamation_svg__fa-primary"
      d="M256 0v128h128L256 0zm-64 352c13.25 0 24-10.75 24-24V216c0-13.2-10.7-24-24-24s-24 10.8-24 24v112c0 13.3 10.8 24 24 24zm0 31.1c-17.67 0-32 14.33-32 32s14.33 32 32 32 32-14.33 32-32c0-16.8-14.3-32-32-32z"
    />
    <path
      d="M256 128V0H48C21.49 0 0 21.49 0 48v416c0 26.5 21.49 48 48 48h288c26.51 0 48-21.49 48-48V128H256zm-88 88c0-13.2 10.8-24 24-24s24 10.75 24 24v112c0 13.25-10.75 24-24 24s-24-10.75-24-24V216zm24 232c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32c0 17.7-14.3 32-32 32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgFileExclamation;
