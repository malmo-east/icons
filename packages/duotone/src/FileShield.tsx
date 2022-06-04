import * as React from "react";
import { SVGProps } from "react";

const SvgFileShield = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path
      className="file-shield_svg__fa-primary"
      d="M224 160V0l160 160H224zm199.1 65.7c5.7-2.3 12.1-2.3 17.8 0l120 48c9.1 3.7 15.1 12.5 15.1 22.3 0 63.3-25.9 168.8-134.8 214.2-5.9 2.4-12.5 2.4-18.4 0C313.9 464.8 288 359.3 288 296c0-9.8 5.1-18.6 15.1-22.3l120-48zm8.9 48.1v187.9c68.2-33 91.5-99 95.4-150.6L432 273.8z"
    />
    <path
      d="M0 64C0 28.65 28.65 0 64 0h160v160h160v47l-92.8 37.2c-21.3 8.5-35.2 29.1-35.2 52 0 56.5 18.9 148 94.2 208.2-9 4.9-19.3 7.6-30.2 7.6H64c-35.35 0-64-28.7-64-64V64z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgFileShield;
