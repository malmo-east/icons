import * as React from "react";
import { SVGProps } from "react";

const SvgTowerObservation = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M144 120c0-13.3 10.7-24 24-24h176c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H168c-13.3 0-24-10.7-24-24v-32zm16 0v32c0 4.4 3.6 8 8 8h176c4.4 0 8-3.6 8-8v-32c0-4.4-3.6-8-8-8H168c-4.4 0-8 3.6-8 8zM252.3.907c2.3-1.21 5.1-1.21 7.4 0l184 96.003c3.9 2.04 5.4 6.89 3.4 10.79-2.1 3.9-6.9 5.4-10.8 3.4L416 100.5V184c0 22.1-17.9 40-40 40h-30.3l52.9 272H504c4.4 0 8 3.6 8 8s-3.6 8-8 8H8c-4.418 0-8-3.6-8-8s3.582-8 8-8h105.4l52.9-272H136c-22.1 0-40-17.9-40-40v-83.5l-20.3 10.6c-3.92 2-8.75.5-10.79-3.4-2.05-3.9-.53-8.75 3.39-10.79L252.3.907zM112 92.15V184c0 13.3 10.7 24 24 24h240c13.3 0 24-10.7 24-24V92.15L256 17.02 112 92.15zM382.3 496l-6.2-27.3L256 373.6l-121 95.1-5.3 27.3h252.6zM256 353.3l85.5-67.2-12.1-62.1H182.6l-12.1 62.1 85.5 67.2zm-88.9-49.6-27.4 140.9 103.4-81.2-76-59.7zm101 59.7 104.2 81.2-27.4-140.9-76.8 59.7z" />
  </svg>
);

export default SvgTowerObservation;