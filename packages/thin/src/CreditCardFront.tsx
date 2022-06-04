import * as React from "react";
import { SVGProps } from "react";

const SvgCreditCardFront = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M96 296c0-4.4 3.58-8 8-8h368c4.4 0 8 3.6 8 8s-3.6 8-8 8H104c-4.42 0-8-3.6-8-8zm0 64c0-4.4 3.58-8 8-8h80c4.4 0 8 3.6 8 8s-3.6 8-8 8h-80c-4.42 0-8-3.6-8-8zm280-8c4.4 0 8 3.6 8 8s-3.6 8-8 8H232c-4.4 0-8-3.6-8-8s3.6-8 8-8h144zm8-216c0-22.1 17.9-40 40-40h48c22.1 0 40 17.9 40 40v32c0 22.1-17.9 40-40 40h-48c-22.1 0-40-17.9-40-40v-32zm16 0v32c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24v-32c0-13.3-10.7-24-24-24h-48c-13.3 0-24 10.7-24 24zM512 32c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V96c0-35.35 28.65-64 64-64h448zm0 16H64c-26.51 0-48 21.49-48 48v320c0 26.5 21.49 48 48 48h448c26.5 0 48-21.5 48-48V96c0-26.51-21.5-48-48-48z" />
  </svg>
);

export default SvgCreditCardFront;