import * as React from "react";
import { SVGProps } from "react";

const SvgFile = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M0 64C0 28.65 28.65 0 64 0h140.1c12.7 0 25 5.057 34 14.06L369.9 145.9c9 9 14.1 21.3 14.1 34V448c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V64zm368 384V179.9c0-1.3-.1-2.6-.2-3.9H248c-22.1 0-40-17.9-40-40V16.24c-1.3-.16-2.6-.24-3.9-.24H64c-26.51 0-48 21.49-48 48v384c0 26.5 21.49 48 48 48h256c26.5 0 48-21.5 48-48zm-6.9-288c-.8-1-1.6-1.9-2.5-2.7L226.7 25.37c-.8-.87-2.6-1.69-2.7-2.44V136c0 13.3 10.7 24 24 24h113.1z" />
  </svg>
);

export default SvgFile;
