import * as React from "react";
import { SVGProps } from "react";

const SvgWineBottle = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="m507.3 84.69-80-80c-6.25-6.25-16.38-6.25-22.62 0-5.127 5.127-5.812 12.75-2.527 18.82l-92.57 92.37C260.1 99.63 207.5 112 170.7 148.8L22.2 297.3c-29.62 29.75-29.62 77.88 0 107.6l84.88 84.88C121.3 504.1 140.5 512 160.7 512c20.38 0 39.5-7.875 53.75-22.25l148.6-148.6c36.63-36.63 49-90.25 32.75-139l92.61-92.31c2.39 1.26 4.99 2.16 7.59 2.16 4.094 0 8.188-1.562 11.31-4.688 6.29-6.212 6.29-16.372-.01-22.622zM191.1 467.1c-16.75 16.62-45.63 16.62-62.25 0l-84.88-84.88c-17.12-17.25-17.12-45.13 0-62.38l14.25-14.25 147.1 147.3-14.22 14.21zm37.7-37L81.72 283l89.38-89.38 147.1 147.1-89.4 89.38zm112-112L193.7 171c50.88-50.25 111.8-22.5 113.6-21.75l10 4.25 34.94-34.59 40.88 40.88-34.82 34.71 4.125 9.875C379.1 243.5 370.5 288 340.8 318.1zm75-180.9-40.79-40.79 49.62-49.13 40.62 40.62-49.45 49.3z" />
  </svg>
);

export default SvgWineBottle;
