import * as React from "react";
import { SVGProps } from "react";

const SvgFilmCanister = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M544 128H320V80h8c13.3 0 24-10.75 24-24 0-13.26-10.7-24-24-24h-72V16c0-8.838-7.2-16-16-16H112c-8.8 0-16 7.162-16 16v16H24C10.75 32 0 42.74 0 56c0 13.25 10.75 24 24 24h8v384h-8c-13.25 0-24 10.7-24 24s10.75 24 24 24h304c13.25 0 24-10.75 24-24 0-13.26-10.75-24-24-24h-8v-48h160c17.62 0 32-14.38 32-32v-32c0-17.62 14.38-32 32-32s32-14.38 32-32V160c0-17.6-14.4-32-32-32zM272 464H80V80h192v384zm168-104c0 8.875-7.125 16-16 16h-16c-8.875 0-16-7.125-16-16v-16c0-8.875 7.125-16 16-16h16c8.875 0 16 7.125 16 16v16zm0-160c0 8.875-7.125 16-16 16h-16c-8.875 0-16-7.125-16-16v-16c0-8.875 7.125-16 16-16h16c8.875 0 16 7.125 16 16v16zm96 0c0 8.875-7.125 16-16 16h-16c-8.875 0-16-7.125-16-16v-16c0-8.875 7.125-16 16-16h16c8.875 0 16 7.125 16 16v16z" />
  </svg>
);

export default SvgFilmCanister;