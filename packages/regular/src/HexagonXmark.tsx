import * as React from "react";
import { SVGProps } from "react";

const SvgHexagonXmark = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M175 175c9.4-9.3 24.6-9.3 33.1 0l47 47.1L303 175c9.4-9.3 24.6-9.3 33.1 0 10.2 9.4 10.2 24.6 0 33.1l-46.2 47 46.2 47.9c10.2 9.4 10.2 24.6 0 33.1-8.5 10.2-23.7 10.2-33.1 0l-47.9-46.2-47 46.2c-8.5 10.2-23.7 10.2-33.1 0-9.3-8.5-9.3-23.7 0-33.1l47.1-47.9-47.1-47c-9.3-8.5-9.3-23.7 0-33.1zM15.96 218.6 108.5 66.56C121.5 45.1 144.9 32 169.1 32H342c25.1 0 48.5 13.1 61.5 34.56L496 218.6c14 23 14 51.8 0 74.8l-92.5 152c-13 21.5-36.4 34.6-61.5 34.6H169.1c-24.2 0-47.6-13.1-60.6-34.6l-92.54-152a71.866 71.866 0 0 1 0-74.8zm41 24.9c-4.67 7.7-4.67 17.3 0 25l92.54 152c4.3 7.1 12.1 11.5 19.6 11.5H342c8.4 0 16.2-4.4 20.5-11.5l92.5-152c4.7-7.7 4.7-17.3 0-25L362.5 91.52C358.2 84.37 350.4 80 342 80H169.1c-7.5 0-15.3 4.37-19.6 11.52L56.96 243.5zM403.5 66.56l-41 24.96 41-24.96zM15.96 293.4l41-24.9z" />
  </svg>
);

export default SvgHexagonXmark;
