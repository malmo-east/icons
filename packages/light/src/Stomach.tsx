import * as React from "react";
import { SVGProps } from "react";

const SvgStomach = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M401.1 98.25c-58.75-10.62-111.9 17-140 61.75H240c-44.2 0-80-35.8-80-80V15.1C160 7.2 152.8 0 144 0s-16 7.2-16 15.1V80c0 61.9 50.1 112 112 112h6.75c-3.95 12.8-6.75 26-6.75 40v56c0 44.18-35.82 80-80 80h-48C50.14 368 0 418.14 0 479.1v15.1c0 8.8 7.2 15.1 15.1 15.1S32 504.8 32 496v-16c0-32.38 19.25-60.25 47-72.88 11.12-5.125 24.38-2 33.38 6.125l62.38 56.88C208 497.1 249.1 512 292.8 512 413.6 512 512 413.6 512 292.8V237c0-66.5-45.5-126.9-110.9-138.75zM376 128c57.4 0 104 46.6 104 104v60.75c0 12.12-1.25 23.87-3.5 35.37-31.25 15-68.13 7.75-92.75-19C354.1 276.9 311.5 265.2 272 276.2V232c0-57.4 46.6-104 104-104zm-83.2 352c-35.5 0-70.25-12.38-97.13-34.13L145.2 400H160c53.88 0 99-38.25 109.6-89 30.75-13.75 66.62-6.375 90.62 19.88 22.5 24.37 52.38 37.25 82.75 37.25 7.5 0 14.1-1.25 22.38-2.875C437 432.6 370.4 480 292.8 480z" />
  </svg>
);

export default SvgStomach;
