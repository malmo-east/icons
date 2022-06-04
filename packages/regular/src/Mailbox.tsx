import * as React from "react";
import { SVGProps } from "react";

const SvgMailbox = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M184 192h-80c-13.25 0-24 10.7-24 24 0 13.25 10.75 24 24 24h80c13.25 0 24-10.75 24-24 0-13.3-10.7-24-24-24zM432 64H144C64.5 64 0 128.5 0 208v207.1c0 17.62 14.38 31.1 32 31.1h512c17.62 0 32-14.37 32-31.1V208c0-79.5-64.5-144-144-144zM240 400H48V208c0-53 43-96 96-96s96 43 96 96v192zm288 0H288V208c0-37-14.4-70.5-37.4-96H432c53 0 96 43 96 96v192zm-64-208H360c-13.2 0-24 10.8-24 24s10.8 24 24 24h56v32c0 8.8 7.2 16 16 16h32c8.836 0 16-7.164 16-15.1v-64c0-9.7-7.2-16.9-16-16.9z" />
  </svg>
);

export default SvgMailbox;
