import * as React from "react";
import { SVGProps } from "react";

const SvgCakeSlice = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M450.6 101.7C490 143.4 512 198.6 512 256v160c-.1 16.1-6.8 33.2-18.8 45.2S464.1 479.1 448 480H64c-16.96-.9-33.21-6.8-45.2-18.8C6.81 449.2.05 432.1 0 416V271.6c.006-4.8 1.122-10.5 3.262-14 2.141-4.4 5.249-8.2 9.088-11.2L278.8 39.01c5.9-4.79 13.4-7.27 21.1-7.01 57.3 3.12 111.2 28.07 150.7 69.7zM464 384H48v32c0 4.2 1.69 8.3 4.69 11.3 3 3 7.07 4.7 11.31 4.7h384c4.2 0 8.3-1.7 11.3-4.7s4.7-7.1 4.7-11.3v-32zm0-80H48v48h416v-48z" />
  </svg>
);

export default SvgCakeSlice;