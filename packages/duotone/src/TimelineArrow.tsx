import * as React from "react";
import { SVGProps } from "react";

const SvgTimelineArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="timeline-arrow_svg__fa-primary"
      d="M48 96c0-44.18 35.82-80 80-80 44.2 0 80 35.82 80 80 0 44.2-35.8 80-80 80-44.18 0-80-35.8-80-80zm80 24c13.3 0 24-10.7 24-24 0-13.25-10.7-24-24-24s-24 10.75-24 24c0 13.3 10.7 24 24 24zm144-24c0-44.18 35.8-80 80-80s80 35.82 80 80c0 44.2-35.8 80-80 80s-80-35.8-80-80zm80 24c13.3 0 24-10.7 24-24 0-13.25-10.7-24-24-24s-24 10.75-24 24c0 13.3 10.7 24 24 24zm-48 296c0 44.2-35.8 80-80 80s-80-35.8-80-80 35.8-80 80-80 80 35.8 80 80zm-80-24c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24z"
    />
    <path
      d="M352 175.1c11.4 0 22.2-1.5 32-5.8v53.8h146.7l-41.3-40.5c-12.5-12.5-12.5-32.7 0-45.2s32.7-12.5 45.2 0l96 96c12.5 12.5 12.5 32.7 0 45.2l-96 96c-12.5 12.5-32.7 12.5-45.2 0s-12.5-32.7 0-45.2l41.3-41.4H256v54.7c-9.8-4.3-20.6-6.7-32-6.7-11.4 0-22.2 2.4-32 6.7V288H32c-17.67 0-32-14.3-32-32s14.33-32 32-32h64v-54.7c9.8 4.3 20.6 6.7 32 6.7 11.4 0 22.2-2.4 32-6.7V224h160v-54.7c9.8 4.3 20.6 6.7 32 6.7v-.9z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgTimelineArrow;
