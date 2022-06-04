import * as React from "react";
import { SVGProps } from "react";

const SvgChessClock = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M176 192c-61.9 0-112 50.1-112 112s50.1 112 112 112 112-50.1 112-112-50.1-112-112-112zm0 208c-52.93 0-96-43.07-96-96 0-52.94 43.07-96 96-96s96 43.06 96 96c0 52.9-43.1 96-96 96zm288-208c-61.9 0-112 50.1-112 112s50.14 112 112 112 112-50.1 112-112-50.1-112-112-112zm0 208c-52.93 0-96-43.07-96-96 0-52.94 43.07-96 96-96s96 43.06 96 96c0 52.9-43.1 96-96 96zm112-272H184V48h64c4.4 0 8-3.58 8-8s-3.6-8-8-8H104c-4.41 0-8 3.58-8 8s3.59 8 8 8h64v80H64c-35.35 0-64 28.7-64 64v224c0 35.35 28.65 64 64 64h512c35.35 0 64-28.65 64-64V192c0-35.3-28.7-64-64-64zm48 288c0 26.47-21.53 48-48 48H64c-26.47 0-48-21.53-48-48V192c0-26.47 21.53-48 48-48h512c26.47 0 48 21.53 48 48v224zM392 96h144c4.4 0 8-3.58 8-8s-3.6-8-8-8H392c-4.4 0-8 3.58-8 8s3.6 8 8 8zM176 232c-4.406 0-8 3.578-8 8v64c0 4.422 3.594 8 8 8s8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm333.3 18.8a7.972 7.972 0 0 0-5.656 2.344l-45.25 45.25C456.8 299.9 456 301.1 456 304c0 2.906 2.281 8 8 8a7.946 7.946 0 0 0 5.656-2.344l45.25-45.25a7.975 7.975 0 0 0 2.344-5.656c.05-4.25-3.45-7.95-7.95-7.95z" />
  </svg>
);

export default SvgChessClock;
