import * as React from "react";
import { SVGProps } from "react";

const SvgToiletPaperBlankUnder = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="toilet-paper-blank-under_svg__fa-primary"
      d="M416 0c-53 0-96 86-96 192 0 84.04 27.07 155.3 64.68 181.3C394.5 380.1 405 384 416 384H128v96c0 17.67 14.33 32 32 32h320c17.67 0 32-14.33 32-32V192C512 86 469 0 416 0zm-32.9 192c0-35.38 14.38-64 32-64s31.1 28.62 31.1 64-12.6 64-30.2 64-32.9-28.6-32.9-64z"
    />
    <path
      d="M416 384H96c-53 0-96-85.1-96-192C0 86.9 43 0 96 0h320c-53 0-96 86-96 192s43 192 96 192z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgToiletPaperBlankUnder;
