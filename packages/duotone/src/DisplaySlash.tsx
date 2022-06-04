import * as React from "react";
import { SVGProps } from "react";

const SvgDisplaySlash = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="display-slash_svg__fa-primary"
      d="M615.1 512c-5.156 0-10.38-1.674-14.79-5.112L9.188 42.89c-10.44-8.172-12.26-23.26-4.068-33.7C13.245-1.22 28.28-3.09 38.81 5.112l591.1 463.1c10.44 8.172 12.26 23.27 4.068 33.7C630.2 508.8 623.1 512 615.1 512z"
    />
    <path
      d="M455.1 464h-72l-16-48h39.99l-81.65-64H95.1V171.5l-64-50.2V368c0 26.5 21.5 48 47.1 48h191.1l-16 48h-70.2c-13.25 0-24 10.75-24 24s10.75 24 24 24h271.1c13.25 0 24-10.75 24-24s-9-24-23.1-24zm104-464H80C67.7 0 56.59 4.77 48.1 12.38l65 50.72h430v288h-62.59l81.31 63.73c26.08-.53 45.28-21.23 45.28-46.83V48c0-26.5-20.6-48-48-48z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgDisplaySlash;
