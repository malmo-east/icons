import * as React from "react";
import { SVGProps } from "react";

const SvgMace = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M288 184c-22.06 0-40 17.94-40 40s17.9 40 40 40 40-17.94 40-40-17.9-40-40-40zm0 64c-13.23 0-24-10.77-24-24s10.8-24 24-24 24 10.77 24 24-10.8 24-24 24zm216-32h-80.81C419.1 147.5 364.5 92.89 296 88.81V8c0-4.422-3.6-8-8-8s-8 3.578-8 8v80.81C211.5 92.89 156.9 147.5 152.8 216H72c-4.422 0-8 3.575-8 7.997s3.578 8.004 8 8.004h80.81c1.182 19.85 6.611 38.4 15.44 55.08l-156.5 156.5C4.156 451.2 0 461.2 0 471.1s4.156 20.81 11.7 28.34C19.5 508.1 29.73 512 39.98 512c10.23 0 20.48-3.906 28.28-11.7l156.5-156.6c16.74 8.9 35.34 14.3 55.24 15.5v80.81c0 4.422 3.578 7.993 8 7.993s8-3.571 8-7.993V359.2c68.5-4.074 123.1-58.69 127.2-127.2H504c4.422 0 8-3.582 8-8.004S508.4 216 504 216zM56.95 488.1c-9.344 9.344-24.59 9.344-33.94 0-4.53-3.6-7.01-9.7-7.01-17 0-6.453 2.484-12.5 7.016-17.03l153.5-153.4a136.907 136.907 0 0 0 33.94 33.95L56.95 488.1zM288 344c-66.17 0-120-53.83-120-120s53.8-120 120-120 120 53.83 120 120-53.8 120-120 120z" />
  </svg>
);

export default SvgMace;
