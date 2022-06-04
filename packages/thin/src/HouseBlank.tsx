import * as React from "react";
import { SVGProps } from "react";

const SvgHouseBlank = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M282.7 2.011c3-2.681 7.6-2.681 10.6 0L573.3 250c3.3 2.9 3.6 7.1-.2 11.3-2 3.3-7.1 3.6-10.4-.2l-50.7-44V448c0 35.3-28.7 64-64 64H128c-35.35 0-64-28.7-64-64V217.1l-50.7 44c-3.303 3.8-8.359 3.5-11.288.2-2.93-4.2-2.624-8.4.684-11.3L282.7 2.011zM80 202.9V448c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48V202.9L288 18.69 80 202.9z" />
  </svg>
);

export default SvgHouseBlank;
