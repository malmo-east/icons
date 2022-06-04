import * as React from "react";
import { SVGProps } from "react";

const SvgKitMedical = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path
      className="kit-medical_svg__fa-primary"
      d="M512 32h-32v448h32c35.35 0 64-28.66 64-64V96c0-35.34-28.7-64-64-64zM0 96v320c0 35.34 28.65 64 64 64h32V32H64C28.65 32 0 60.66 0 96zm128 384h320V32H128v448zm48-250c0-8.837 7.164-16 16-16h53.1v-54c0-8.836 7.165-16 16-16h52c8.836 0 16 7.164 16 16v54H384c8.836 0 16 7.163 16 16v52c0 8.835-7.164 16-16 16h-54v54c0 8.836-7.164 16-16 16h-52c-8.835 0-16-7.164-16-16v-54h-54c-8.836 0-16-7.165-16-16v-52z"
    />
    <path
      d="M96 480h32V32H96v448zM448 32v448h32V32h-32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgKitMedical;
