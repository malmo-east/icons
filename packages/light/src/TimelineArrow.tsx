import * as React from "react";
import { SVGProps } from "react";

const SvgTimelineArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M175.1 80c0 29.8-19.5 54.9-48 61.1V256H352V141.1c-27.6-6.2-48.9-31.3-48.9-61.1 0-35.35 29.6-64 64.9-64 35.3 0 64 28.65 64 64 0 29.8-20.4 54.9-48 61.1V256h195.8l-62-51.7c-7.7-5.7-7.7-15.8-2.1-22.5 5.7-7.7 15.8-7.7 22.5-2.1l95.9 79.9c.6.5 1.2 1 1.7 1.6 2.6 2.8 4.2 6.6 4.2 10.8 0 .3-.9.7-.9.1.7 4.4-.7 7.5-2.8 10.1-.6.7-1.3 1.5-2.1 2.1l-96 80c-6.7 5.6-16.8 4.7-22.5-2.1-5.6-6.7-5.6-16.8 2.1-22.5l62-51.7H256v82c27.6 7.1 48 32.2 48 62 0 35.3-28.7 64-64 64s-64-28.7-64-64c0-29.8 20.4-54.9 48-62v-82H16c-8.836 0-16-7.2-16-16s7.164-16 16-16h80V141.1c-27.6-6.2-48-31.3-48-61.1 0-35.35 28.65-64 64-64 35.3 0 64 28.65 64 64h-.9zm-64-32c-16.77 0-32 14.33-32 32s15.23 32 32 32c18.6 0 32-14.33 32-32s-13.4-32-32-32zm128 416c18.6 0 32-14.3 32-32s-13.4-32-32-32c-16.8 0-32 14.3-32 32s15.2 32 32 32zM368 48c-17.7 0-32 14.33-32 32s14.3 32 32 32 32-14.33 32-32-14.3-32-32-32z" />
  </svg>
);

export default SvgTimelineArrow;
