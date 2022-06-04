import * as React from "react";
import { SVGProps } from "react";

const SvgClockDesk = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M224 96c13.3 0 24 10.7 24 24v94.1l40.1 40.9c10.2 9.4 10.2 24.6 0 33.1-8.5 10.2-23.7 10.2-33.1 0l-48-48c-4.5-3.6-7-9.7-7-16.1V120c0-13.3 10.7-24 24-24zm0-96c123.7 0 224 100.3 224 224v240c0 26.5-21.5 48-48 48H48c-26.51 0-48-21.5-48-48V224C0 100.3 100.3 0 224 0zm0 48c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176S321.2 48 224 48z" />
  </svg>
);

export default SvgClockDesk;
