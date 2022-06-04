import * as React from "react";
import { SVGProps } from "react";

const SvgPipeSmoking = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="pipe-smoking_svg__fa-primary"
      d="M401.9 247.1c7.73 4.865 9.747 15.15 4.522 22.65l-117.7 168.8C259.1 484.5 208.8 512 154.1 512H128C57.31 512 0 454.69 0 384V256c0-17.67 14.33-32 32-32h192c17.67 0 32 14.33 32 32v64l69.8-102.6c4.847-7.122 14.45-9.137 21.74-4.545L401.9 247.1z"
    />
    <path
      d="M640 32c0 17.69-14.31 32-32 32h-26.12c-32.81 0-63 16.47-80.72 44.09L407 252.7c-1.246-2.158-2.855-4.125-5.127-5.554l-54.34-34.21c-2.322-1.463-4.869-2.03-7.432-2.199L448 64c30.06-40.09 77.9-64 127.1-64H608c17.7 0 32 14.31 32 32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgPipeSmoking;
