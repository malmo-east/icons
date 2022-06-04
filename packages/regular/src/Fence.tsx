import * as React from "react";
import { SVGProps } from "react";

const SvgFence = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M64 32a24 24 0 0 1 19.53 10.05l39.97 56c2.9 4.05 4.5 8.05 4.5 13.95v48h64v-48c0-5.9 1.6-9.9 4.5-13.95l40-56C240.1 35.74 248.2 32 256 32c7.8 0 15 3.74 19.5 10.05l40 56c2.9 4.05 4.5 8.05 4.5 13.95v48h64v-48c0-5.9 1.6-9.9 4.5-13.95l40-56C432.1 35.74 440.2 32 448 32c7.8 0 15 3.74 19.5 10.05l40 56c2.9 4.05 4.5 8.05 4.5 13.95v336c0 17.7-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32v-48h-64v48c0 17.7-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32v-48h-64v48c0 17.7-14.3 32-32 32H32c-17.67 0-32-14.3-32-32V112c0-5.9 1.563-9.9 4.47-13.95l40-56A24 24 0 0 1 64 32zm256 320h64V208h-64v144zM128 208v144h64V208h-64zm-80-88.3V432h32V119.7L64 97.29 48 119.7zm192 0V432h32V119.7l-16-22.41-16 22.41zM464 432V119.7l-16-22.41-16 22.41V432h32z" />
  </svg>
);

export default SvgFence;