import * as React from "react";
import { SVGProps } from "react";

const SvgFloppyDiskPen = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M224 240c-48.53 0-88 39.47-88 88s39.5 88 88 88 88-39.47 88-88-39.5-88-88-88zm0 160c-39.69 0-72-32.3-72-72s32.3-72 72-72 72 32.3 72 72-32.3 72-72 72zm29.3 64H64c-26.47 0-48-21.53-48-48V96c0-26.47 21.53-48 48-48v104c0 22.1 17.94 40 40 40h176c22.1 0 40-17.9 40-40V56.09a47.498 47.498 0 0 1 7.312 5.977l90.63 90.63C427 161.8 432 173.8 432 186.6v44.8c0 4.422 3.594 8 8 8s8-3.578 8-8v-44.8c0-17.09-6.656-33.16-18.75-45.25l-90.63-90.63C326.7 38.83 310.3 32 293.4 32H64C28.72 32 0 60.7 0 96v320c0 35.3 28.72 64 64 64h189.3c4.406 0 8-3.578 8-8s-3.6-8-8-8zM80 48h213.4c2.7 0 7.1.52 10.6 1.32V152c0 13.23-10.78 24-24 24H104c-13.22 0-24-10.8-24-24V48zm485.5 207.7-21.1-21.11c-7.029-7.029-16.24-10.54-25.46-10.54s-18.43 3.51-25.45 10.54l-186.1 186.1a17.993 17.993 0 0 0-4.924 9.203l-14.28 71.41C287 506.9 291.5 512 296.1 512c.59 0 1.189-.065 1.797-.185l71.42-14.29a17.995 17.995 0 0 0 9.195-4.922l186.1-186C579.5 292.5 579.5 269.7 565.5 255.7zM367.1 481.8 306 494.14l12.74-62.26 130.1-130.1 49.31 49.31L367.1 481.8zm187-186.5-43.85 43.73-49.33-49.33 43.79-43.79c3.777-3.777 8.797-5.857 14.14-5.857s10.36 2.08 14.14 5.857l21.1 21.11c3.81 3.68 5.91 8.78 5.91 14.08s-2.1 10.4-5.9 14.2z" />
  </svg>
);

export default SvgFloppyDiskPen;