import * as React from "react";
import { SVGProps } from "react";

const SvgPuzzlePiece = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <defs>
      <style />
    </defs>
    <path
      className="puzzle-piece_svg__fa-primary"
      d="M512 288c0 35.35-21.49 64-48 64-32.43 0-31.72-32-55.64-32-13.46 0-24.36 10.9-24.36 24.4V480c0 17.67-14.33 32-32 32h-71.64C266.9 512 256 501.1 256 487.6c0-24.5 32-23.2 32-55.6 0-26.51-28.65-48-64-48s-64 21.49-64 48c0 32.43 32 31.72 32 55.64 0 13.46-10.9 24.36-24.4 24.36H32c-17.67 0-32-14.33-32-32V344.4C0 330.9 10.91 320 24.36 320c23.69 0 23.24 32 55.64 32 26.5 0 48-28.7 48-64s-21.5-64.9-48-64.9c-32.43 0-31.72 32-55.64 32-13.45 0-24.36-10-24.36-23.5v-71.64c0-17.67 14.33-31.1 32-31.1h135.6c13.5-1.76 24.4-11.76 24.4-25.26 0-23.69-32-23.24-32-55.64 0-26.51 28.65-47.1 64-47.1s64 21.49 64 47.1c0 32.43-32 31.72-32 55.64 0 13.45 10.91 24.36 24.36 24.36H352c17.67 0 32 14.33 32 31.1v71.64c0 13.45 10.91 24.36 24.36 24.36 23.69 0 23.24-32 55.64-32 26.5.04 48 29.64 48 64.94z"
    />
  </svg>
);

export default SvgPuzzlePiece;