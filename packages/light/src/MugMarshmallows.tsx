import * as React from "react";
import { SVGProps } from "react";

const SvgMugMarshmallows = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M400 160.1H32c-17.67 0-32 14.33-32 32V384c0 53.1 42.98 96 96 96h192c53.02 0 96-42.93 96-95.95l16 .013c61.75 0 112-50.19 112-111.9S461.8 160.1 400 160.1zM352 384c0 35.29-28.71 64-64 64H96c-35.29 0-64-28.71-64-64V192h64v80c0 8.8 7.2 16 16 16s16-7.2 16-16v-80h224v192zm48-32h-16V192h16c44.1 0 80 35.9 80 80s-35.9 80-80 80zM189.2 123.8c6.516 5.969 16.62 5.516 22.61-.984l49.11-53.63c6.125-6.688 16.05-6.703 22.2.015l49.09 53.61C335.4 126.3 339.7 128 344 128c3.859 0 7.734-1.391 10.81-4.203 6.516-5.969 6.953-16.08.984-22.61l-49.08-53.59c-18.38-20.12-51.08-20.11-69.42-.016l-49.09 53.61C182.2 107.7 182.7 117.8 189.2 123.8zM48 128c8.84 0 16-7.2 16-16V80.25C64 71.3 71.16 64 79.94 64H176c8.8 0 16-7.16 16-16s-7.2-16-16-16H79.94C53.5 32 32 53.64 32 80.25V112c0 8.8 7.16 16 16 16z" />
  </svg>
);

export default SvgMugMarshmallows;
