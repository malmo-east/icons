import * as React from "react";
import { SVGProps } from "react";

const SvgCrow = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M440 96c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-13.25 10.7-24 24-24s24 10.75 24 24zM3.299 409.7c-5.374-7-4.042-17 2.973-22.4L320 146.1V96c0-53.02 42.1-96 96-96 28.4 0 53.1 12.36 71.6 31.1H560c44.2 0 80 36.72 80 80l-128 32V192c0 78.8-47.5 146.5-115.4 176.1l50.2 121.8c3.4 8.2-.5 17.5-8.7 20.9-8.2 3.4-17.5-.5-20.9-8.7l-50.9-123.7c-14.9 3.7-31.2 5.6-46.3 5.6h-12.8l43.6 105.9c3.4 8.2-.5 17.5-8.7 20.9-8.2 3.4-17.5-.5-20.9-8.7L272.6 384H63.2l-37.47 28.7c-7.02 5.4-17.058 4-22.432-3h.001zM506.5 63.1c3.6 10.91 5.5 21.68 5.5 32.9v15l89.9-22.46C593.7 73.9 577.1 63.1 560 63.1h-53.5zM205.9 315.2c62.1-13.1 107.7-66.1 113.5-127.4l-186.7 143 73.2-15.6zM480 192V96c0-35.35-28.7-64-64-64s-64 28.65-64 64v78.4c0 83.1-58.2 154.9-139.5 172.1l-25.7 5.5H320c88.4 0 160-71.6 160-160z" />
  </svg>
);

export default SvgCrow;
