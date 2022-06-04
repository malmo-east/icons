import * as React from "react";
import { SVGProps } from "react";

const SvgShieldQuartered = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path
      className="shield-quartered_svg__fa-primary"
      d="M288.7-.008c4.7 0 9.2 1.016 13.4 2.921L490.4 82.79c22 9.33 38.5 31.01 38.3 56.31-.1 24.9-2.6 53.8-9.6 84.9H288.7V-.008zM261.6 503.2C131 440.7 75.96 321.3 56.74 224H288v285.1c-9.9 0-18.1-2-26.4-5.9zM288.7-.008 287.1 0h.2"
    />
    <path
      d="M288 224H56.74c-6.14-31.1-8.62-60-9.64-84.9.77-25.3 17.22-46.98 39.2-56.31L274.7 2.913c4.1-1.905 8.7-2.921 13.3-2.92V224zm27.1 279.2c-8.3 3.9-17.3 5.9-26.4 5.9V224h230.4c-18.3 97.3-73.4 216.7-204 279.2zM288-.008l.7.008z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgShieldQuartered;
