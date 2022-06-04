import * as React from "react";
import { SVGProps } from "react";

const SvgSunset = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path
      className="sunset_svg__fa-primary"
      d="M551.1 463.1H24c-13.2 0-24 11.7-24 24 0 14.1 10.8 24 24 24h527.1c13.2 0 24-10.8 24-24 .9-12.3-9.9-24-24-24zM268 217c1.459 1.162 3.166 1.746 4.76 2.621 1.266.701 2.385 1.535 3.748 2.062C280.2 223.1 284.1 224 288 224s7.771-.887 11.48-2.316c1.363-.527 2.482-1.361 3.748-2.062 1.594-.875 3.301-1.459 4.76-2.621l80-64c13.81-11.06 16.05-31.19 5-45-11.02-13.81-31.19-16.03-44.97-5L320 125.4V32c0-17.69-14.33-32-32-32s-32 14.31-32 32v93.42L227.1 103c-12.9-11.03-33-8.75-44.1 5-11.05 13.81-8.812 33.94 5 45l80 64z"
    />
    <path
      d="m529.3 365.3-109-19.7-19.7-109.1c-1.975-10.93-14.59-16.16-23.72-9.826l-91.01 63.16-91.01-63.16c-9.16-6.274-21.76-1.074-23.76 9.826l-19.7 109-109.01 19.8c-10.93 1.977-16.16 14.6-9.826 23.72l29.85 43.02h105.5c18.99-46.79 64.29-80.01 117.9-80.01s98.9 33.23 117.9 80.01h105.5l29.85-43.02c6.336-9.12 1.136-21.72-9.764-23.72zM285.8 384c-35.43 0-65.97 19.41-82.52 48.01h165C351.8 403.4 321.3 384 285.8 384z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgSunset;