import * as React from "react";
import { SVGProps } from "react";

const SvgScanner = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M176 384c0 8.835 7.164 15.1 16 15.1 8.838 0 16-7.164 16-15.1 0-8.837-7.162-15.1-16-15.1-8.8-.9-16 6.3-16 15.1zm-96 0c0 8.835 7.164 15.1 16 15.1 8.838 0 16-7.164 16-15.1 0-8.837-7.162-15.1-16-15.1-8.84-.9-16 6.3-16 15.1zm473.4-103.9L43.48 32.84c-4-1.1-8.75-.281-10.69 3.687-1.922 3.1-.266 8.781 3.719 10.69l509.1 247.2C554.7 298.4 560 306.9 560 316.1V440c0 13.22-10.77 23.1-24 23.1H40c-13.23 0-24-10.78-24-23.1V328.9c0-13.22 10.77-23.1 24-23.1h440c4.422 0 8-3.594 8-7.1s-3.6-10.7-8-10.7H40c-22.06 0-40 17.94-40 39.1v111.1C0 462.1 17.94 480 40 480h496c22.06 0 40-17.94 40-39.1V316.1c0-15.3-8.9-29.4-22.6-36z" />
  </svg>
);

export default SvgScanner;