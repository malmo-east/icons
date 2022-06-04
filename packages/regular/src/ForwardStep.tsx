import * as React from "react";
import { SVGProps } from "react";

const SvgForwardStep = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M264 64c-13.25 0-24 10.75-24 24v105.8L66.59 69.97A31.799 31.799 0 0 0 48 64a32.245 32.245 0 0 0-14.66 3.529A32.023 32.023 0 0 0 16 96.009v319.1c0 12 6.687 22.98 17.34 28.48C37.97 446.8 43 448 48 448c6.562 0 13.06-2 18.59-5.969L240 318.2V424c0 13.25 10.75 24 24 24s24-10.7 24-24V88c0-13.25-10.7-24-24-24zm-24 195.2L64 384.9V127.1l176 125.7v6.4z" />
  </svg>
);

export default SvgForwardStep;