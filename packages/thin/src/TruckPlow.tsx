import * as React from "react";
import { SVGProps } from "react";

const SvgTruckPlow = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M440 192c30.9 0 56 25.1 56 56v96c0 9-3 17.3-8 24h40V200c0-2.1.8-4.2 2.3-5.7l96-95.96c3.2-3.12 8.2-3.12 11.4 0 3.1 3.16 3.1 8.16 0 11.36L544 203.3v169.4l93.7 93.6c3.1 3.2 3.1 8.2 0 11.4a8.15 8.15 0 0 1-11.4 0L532.7 384H464c0 53-43 96-96 96-53.9 0-96-43-96-96h-48c0 53-43 96-96 96-53.02 0-96-43-96-96v-.8C13.74 379.5 0 363.4 0 344v-96c0-30.9 25.07-56 56-56h72V72c0-22.09 17.9-40 40-40h102.4c13.7 0 26.5 7.04 33.8 18.64L393.5 192H440zM168 48c-13.3 0-24 10.75-24 24v120h230.5L290.7 59.18A24.064 24.064 0 0 0 270.4 48H168zm294.5 319.1c10.1-2.8 17.5-13 17.5-23.1v-96c0-22.1-17.9-40-40-40H56c-22.09 0-40 17.9-40 40v96c0 10.1 7.39 20.3 17.48 23.1 7.99-45 47.27-79.1 94.52-79.1 47.6 0 87.1 34.6 94.7 80h50.6c7.6-45.4 47.1-80 94.7-80 47.3 0 86.5 34.1 94.5 79.1zM128 304c-44.18 0-80 35.8-80 80s35.82 80 80 80c44.2 0 80-35.8 80-80s-35.8-80-80-80zm240 160c44.2 0 80-35.8 80-80s-35.8-80-80-80-80 35.8-80 80 35.8 80 80 80z" />
  </svg>
);

export default SvgTruckPlow;