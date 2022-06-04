import * as React from "react";
import { SVGProps } from "react";

const SvgHospitalUser = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path
      className="hospital-user_svg__fa-primary"
      d="M352 272c0-44.2 35.8-80 80-80s80 35.8 80 80-35.8 80-80 80-80-35.8-80-80zm130.9 112c51.4 0 93.1 41.7 93.1 93.1 0 19.3-15.6 34.9-34.9 34.9H322.9c-19.3 0-34.9-15.6-34.9-34.9 0-51.4 41.7-93.1 93.1-93.1h101.8z"
    />
    <path
      d="M0 48C0 21.49 21.49 0 48 0h224c26.5 0 48 21.49 48 48v319.8c-38.2 21.4-64 62.2-64 109.1 0 12.9 3.6 24.9 9.9 35.1H48c-26.51 0-48-21.5-48-48v-80h144c8.8 0 16-7.2 16-16s-7.2-16-16-16H0v-64h144c8.8 0 16-7.2 16-16s-7.2-16-16-16H0V48zm136 56h-24c-8.8 0-16 7.2-16 16v16c0 8.8 7.2 16 16 16h24v24c0 8.8 7.2 16 16 16h16c8.8 0 16-7.2 16-16v-24h24c8.8 0 16-7.2 16-16v-16c0-8.8-7.2-16-16-16h-24V80c0-8.84-7.2-16-16-16h-16c-8.8 0-16 7.16-16 16v24z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgHospitalUser;
