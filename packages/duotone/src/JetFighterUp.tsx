import * as React from "react";
import { SVGProps } from "react";

const SvgJetFighterUp = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path
      className="jet-fighter-up_svg__fa-primary"
      d="M346.8 112.6c3.4 8 5.2 16.6 5.2 25.3v278.8l58.5 50.4c3.5 3 5.5 8.3 5.5 12.9v16c0 8.8-7.2 16-16 16h-96v-64c0-8.8-7.2-16-16-16s-16 7.2-16 16v64h-96c-8.8 0-16-7.2-16-16v-16c0-4.6 1.1-9.9 5.5-12.9l58.5-50.4V137.9c0-8.7 1.8-17.3 5.2-25.3L273.3 9.697C275.8 3.814 281.6 0 288 0c6.4 0 12.2 3.814 14.7 9.697L346.8 112.6zM56 256c13.25 0 24 10.7 24 24v112c0 13.3-10.75 24-24 24s-24-10.7-24-24V280c0-13.3 10.75-24 24-24zm488 136c0 13.3-10.7 24-24 24s-24-10.7-24-24V280c0-13.3 10.7-24 24-24s24 10.7 24 24v112z"
    />
    <path
      d="M80 384v-88l144-80v168H80zm272 0V216l144 80v88H352z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgJetFighterUp;
