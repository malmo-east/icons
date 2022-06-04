import * as React from "react";
import { SVGProps } from "react";

const SvgTrashUndo = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M225.9 192.1c8.8 9 8 25-2 33.8L199.1 248H240c48.6 0 88 39.4 88 88v24c0 13.3-10.7 24-24 24s-24-10.7-24-24v-24c0-22.1-17.9-40-40-40h-40.9l24.8 22.1c10 8.8 10.8 23.9 2 33.8-8.8 10-24.8 10.8-33.8 2l-72-64c-5.2-4.5-8.1-11-8.1-18.8 0-6 2.9-12.5 8.1-17l72-64c9-8.8 25-8 33.8 2zM424 80c13.3 0 24 10.75 24 24 0 13.3-10.7 24-24 24h-11.6l-24 324.7c-2.5 33.4-30.3 59.3-63.8 59.3H123.4c-33.48 0-61.31-25.9-63.79-59.3L35.56 128H24c-13.25 0-24-10.7-24-24 0-13.25 10.75-24 24-24h69.82l36.68-55.06C140.9 9.357 158.4 0 177.1 0h93.8c18.7 0 36.2 9.358 46.6 24.94L354.2 80H424zM177.1 48c-2.6 0-6 1.34-6.6 3.56L151.5 80h145l-19-28.44c-1.5-2.22-4-3.56-6.6-3.56h-93.8zm187.2 80H83.69l23.81 321.2c.6 8.3 7.6 14.8 15.9 14.8h201.2c8.3 0 15.3-6.5 15.9-14.8L364.3 128z" />
  </svg>
);

export default SvgTrashUndo;
