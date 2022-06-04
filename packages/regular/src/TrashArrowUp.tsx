import * as React from "react";
import { SVGProps } from "react";

const SvgTrashArrowUp = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M224 175.1c6.4 0 12.5 3.4 16.1 7.9l80 80c10.2 9.4 10.2 24.6 0 33.1-8.5 10.2-23.7 10.2-33.1 0l-39-38.2V392c0 13.3-10.7 24-24 24s-24-10.7-24-24V257.9l-39.9 38.2c-8.5 10.2-23.7 10.2-33.1 0-9.3-8.5-9.3-23.7 0-33.1l80-80c4.5-4.5 10.6-7.9 17-7.9zm93.5-150.16L354.2 80H424c13.3 0 24 10.75 24 24 0 13.3-10.7 24-24 24h-11.6l-24 324.7c-2.5 33.4-30.3 59.3-63.8 59.3H123.4c-33.48 0-61.31-25.9-63.79-59.3L35.56 128H24c-13.25 0-24-10.7-24-24 0-13.25 10.75-24 24-24h69.82l36.68-55.06C140.9 9.357 158.4 0 177.1 0h93.8c18.7 0 36.2 9.358 46.6 24.94zM151.5 80h145l-19-28.44c-1.5-2.22-4-3.56-6.6-3.56h-93.8c-2.6 0-6 1.34-6.6 3.56L151.5 80zm-44 369.2c.6 8.3 7.6 14.8 15.9 14.8h201.2c8.3 0 15.3-6.5 15.9-14.8L364.3 128H83.69l23.81 321.2z" />
  </svg>
);

export default SvgTrashArrowUp;
