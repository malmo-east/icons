import * as React from "react";
import { SVGProps } from "react";

const SvgCompassSlash = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M633.9 483.4c7 5.5 8.1 14.7 2.7 22.5-5.5 7-15.6 8.1-22.5 2.7L6.086 28.56C-.849 23.08-2.033 13.02 3.443 6.086 8.918-.849 18.98-2.033 25.91 3.443L633.9 483.4zm-185.1-44.1 26.1 20.5c-43 32.8-96.7 52.2-155.8 52.2-140.5 0-256-114.6-256-256 0-36.8 8.66-71.8 22.64-103.4l26.06 20.6c-10.2 25.6-16.7 53.5-16.7 82.8 0 123.7 101.2 224 224 224 48 0 93.3-15.1 129.7-40.7zM576 256c0 36.8-7.8 71.8-21.7 103.4l-26.1-20.6c10.2-25.6 15.8-53.5 15.8-82.8 0-123.7-100.3-224-224.9-224-47.1 0-91.5 15.07-127.9 40.74l-26.1-20.57C208.1 19.43 261.8 0 319.1 0 461.4 0 576 114.6 576 256zm-389.1 92.6 30.7-91.9 26.7 21.1-27 80.9 91.1-30.4 30 23.8-111 37c-25 8.3-48.8-15.5-40.5-40.5zm225.7-225.7c25-8.3 48.8 15.5 40.5 40.5l-30.7 91.9-26.7-21.1 27-80.9-91.1 30.4-30-23.8 111-37z" />
  </svg>
);

export default SvgCompassSlash;
