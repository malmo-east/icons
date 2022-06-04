import * as React from "react";
import { SVGProps } from "react";

const SvgAnkh = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path
      className="ankh_svg__fa-primary"
      d="M120 488c0 13.3 10.8 24 24 24h32c13.25 0 24-10.75 24-24V336h-80v152zM160 0C89.25 0 32 55.63 32 144c0 37.6 15.5 78 36.63 112h182.8C272.5 222 288 181.6 288 144 288 55.63 230.8 0 160 0zm0 244.9c-20.9-22.8-48-66.3-48-100.9 0-39.5 18.38-64 48-64s48 24.5 48 64c0 34.6-27.1 78.1-48 100.9z"
    />
    <path
      d="M296 256H24c-13.25 0-24 10.8-24 24v32c0 13.25 10.75 24 24 24h272c13.25 0 24-10.75 24-24v-32c0-13.2-10.8-24-24-24z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgAnkh;
