import * as React from "react";
import { SVGProps } from "react";

const SvgChalkboardUser = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="chalkboard-user_svg__fa-primary"
      d="M160 320c53.02 0 96-42.98 96-96s-42.98-96-96-96c-53.9 0-96 42.1-96 96 0 53 42.1 96 96 96zm32 32h-64C57.31 352 0 409.31 0 480c0 17.67 14.33 32 32 32h256c17.67 0 32-14.33 32-32 0-70.7-57.3-128-128-128zm32-288v49.81C262.1 136 288 176.8 288 224c0 41.81-20.14 78.1-51.24 102.4 18.54 5.4 35.44 14.3 50.54 25.6h96.69v-48c0-8.838 7.164-16 16-16h96c8.836 0 16 7.162 16 16v48h64V64H224z"
    />
    <path
      d="M592 0H208c-26.5 0-48 22.25-48 49.63V96c23.42 0 45.1 6.781 63.1 17.81V64h352v288H287.3c22.07 16.48 39.54 38.5 50.76 64h253.9c26.54 0 48.04-22.2 48.04-49.6V49.63C640 22.25 618.5 0 592 0z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgChalkboardUser;
