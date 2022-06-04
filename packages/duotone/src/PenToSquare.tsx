import * as React from "react";
import { SVGProps } from "react";

const SvgPenToSquare = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="pen-to-square_svg__fa-primary"
      d="M392.4 21.66c21.9-21.873 57.3-21.873 79.2 0l18.7 18.74c21.9 21.87 21.9 57.33 0 79.2l-30 30.1-98-97.98 30.1-30.06zm45.3 150.64L270.3 339.6c-6.1 6.2-13.6 10.8-21.9 13.6l-88.8 29.6c-9.5 2.8-18.1.6-24.6-6.7-6.4-5.6-8.6-15.1-5.8-23.7l29.6-88.8c2.8-8.3 7.4-15.8 13.6-21.9L339.7 74.34l98 97.96z"
    />
    <path
      d="M0 160c0-53.9 42.98-96 96-96h96c17.7 0 32 14.33 32 32 0 17.7-14.3 32-32 32H96c-17.67 0-32 14.3-32 32v256c0 17.7 14.33 32 32 32h256c17.7 0 32-14.3 32-32v-96c0-17.7 14.3-32 32-32s32 14.3 32 32v96c0 53-43 96-96 96H96c-53.02 0-96-43-96-96V160z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgPenToSquare;
