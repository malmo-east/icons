import * as React from "react";
import { SVGProps } from "react";

const SvgCloudFog = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M160 320h320c53 0 96-43 96-96s-43-96-96-96c-.625 0-1.125.25-1.625.25C479.5 122.1 480 117.6 480 112c0-44.25-35.7-80-80-80-24.62 0-46.25 11.25-61 28.75C320.4 24.75 283.3 0 240 0c-61.9 0-112 50.13-112 112 0 7.25.75 14.25 2.125 21.25C91.75 145.7 64 181.5 64 224c0 53 43 96 96 96zm-24.9-171.5 13.48-4.391-2.78-13.909c-1.2-6.3-1.8-13.1-1.8-18.2 0-52.93 43.06-96 96-96 35.67 0 68.16 19.96 84.79 52.1l11.01 21.28 15.44-18.32C363.8 56.19 381.1 48 400 48c35.29 0 64 28.71 64 64 0 4.691-.416 8.91-1.27 12.9l-4.148 19.35h19.79a17.8 17.8 0 0 0 2.902-.238C524.8 144.7 560 180.3 560 224c0 44.11-35.89 80-80 80H160c-44.1 0-80-35.9-80-80 0-34.4 22.1-64.8 55.1-75.5zM576 408c0-4.406-3.578-8-8-8H8c-4.422 0-8 3.6-8 8s3.578 8 8 8h560c4.4 0 8-3.6 8-8zm56 88H296c-4.4 0-8 3.6-8 8s3.6 8 7.1 8H632c4.422 0 8-3.594 8-8s-3.6-8-8-8zm-416 0H72c-4.42 0-8 3.6-8 8s3.58 8 8 8h144c4.4 0 8-3.6 8-8s-3.6-8-8-8z" />
  </svg>
);

export default SvgCloudFog;
