import * as React from "react";
import { SVGProps } from "react";

const SvgOmega = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M448 472c0 4.422-3.578 8-8 8H288c-4.422 0-8-3.578-8-8v-31.19a7.991 7.991 0 0 1 5.688-7.656C373.2 406.7 432 331.1 432 245.3 432 136.5 338.7 48 224 48S16 136.5 16 245.3c0 85.89 58.8 161.4 146.3 187.9 3.4 1 5.7 4.1 5.7 7.6V472c0 4.4-3.6 8-8 8H8c-4.422 0-8-3.6-8-8s3.578-8 8-8h144v-17.33C60.83 416.6 0 336.4 0 245.3 0 127.7 100.5 32.1 224 32.1s224 95.65 224 213.2c0 91.13-60.83 171.4-152 201.4V464h144c4.4 0 8 3.6 8 8z" />
  </svg>
);

export default SvgOmega;
