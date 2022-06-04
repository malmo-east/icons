import * as React from "react";
import { SVGProps } from "react";

const SvgLightbulbSlash = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="lightbulb-slash_svg__fa-primary"
      d="M615.1 512c-5.188 0-10.39-1.648-14.8-5.117L9.188 42.89c-10.42-8.156-12.24-23.26-4.073-33.7 8.188-10.41 23.23-12.29 33.7-4.073l591.1 463.1c10.42 8.156 12.24 23.26 4.073 33.7C630.2 508.8 623.1 512 615.1 512z"
    />
    <path
      d="M187.6 291.8c16.53 18.84 42.34 58.23 52.22 91.45l.094.781.187 70.35c0 6.297 1.875 12.43 5.344 17.68l17.14 25.69c5.25 7.875 17.17 14.28 26.64 14.28h61.66c9.438 0 21.36-6.4 26.61-14.28l17.08-25.68c2.938-4.437 5.348-12.37 5.348-17.7l.098-44.18L148.2 212.9c6.4 29.7 20 56.8 39.4 78.9zM319.5.013C246.5.193 188.4 42.74 161.1 100.9l52.84 41.41c14.41-45.23 56.08-78.23 106.1-78.33 8.875 0 15.99 7.127 15.99 16s-7.13 16.03-16.93 16.03c-39.94 0-72.83 29.46-78.76 67.76l193.4 151.6c6.348-9.328 12.52-17.57 17.82-23.59 28.12-31.1 43.54-73.15 43.54-115.8C495.1 78.62 416.8-.237 319.5.013z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgLightbulbSlash;