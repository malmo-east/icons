import * as React from "react";
import { SVGProps } from "react";

const SvgUpRightFromSquare = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="up-right-from-square_svg__fa-primary"
      d="M512 24v136c0 12.94-7.781 24.61-19.75 29.56-12 4.906-25.72 2.203-34.88-6.938L416 141.3 214.6 342.7c-6.2 6.2-14.4 9.3-22.6 9.3s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L370.8 96l-41.38-41.38c-9.156-9.156-11.91-22.91-6.938-34.88C327.4 7.797 339.1 0 352 0h136c13.3 0 24 10.74 24 24z"
    />
    <path
      d="M384 320c-17.67 0-32 14.33-32 32v96H64V160h96c17.67 0 32-14.32 32-32s-14.33-32-32-32H64c-35.35 0-64 28.65-64 64v288c0 35.34 28.65 64 64 64h288c35.35 0 64-28.66 64-64v-96c0-17.7-14.3-32-32-32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgUpRightFromSquare;
