import * as React from "react";
import { SVGProps } from "react";

const SvgFlask = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="flask_svg__fa-primary"
      d="M137.1 320H309l72.1 117.3c4.6 4.5 1.5 10.7-4 10.7H70.89c-5.535 0-8.566-6.188-5.77-10.7L137.1 320z"
    />
    <path
      d="M437.2 403.5 319.1 215V64h7.1c13.25 0 23.1-10.75 23.1-24V24c0-13.25-10.75-24-23.1-24H120c-13.2 0-23.99 10.75-23.99 24v16c0 13.25 10.75 24 23.1 24h7.1L128 215 10.8 403.5C-18.48 450.6 15.27 512 70.89 512h306.2c55.61 0 89.41-61.5 60.11-108.5zM377.1 448H70.89c-5.535 0-8.565-6.187-5.77-10.7l126.9-204L191.9 64h63.99l.06 169.3 126.9 204c2.85 4.5-.25 10.7-5.75 10.7z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgFlask;
