import * as React from "react";
import { SVGProps } from "react";

const SvgTvRetro = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M448 96H299.2l79.17-67.86c6.719-5.75 7.5-15.84 1.75-22.55-5.781-6.734-15.88-7.469-22.56-1.734L256 90.92 154.4 3.859c-6.656-5.734-16.75-5-22.56 1.734-5.74 6.707-4.94 16.797 1.76 22.547L212.8 96H64c-35.35 0-64 28.65-64 63.1v287.1C0 483.3 28.65 512 64 512h384c35.35 0 64-28.65 64-63.1V160c0-35.3-28.7-64-64-64zm32 352c0 17.64-14.36 32-32 32H64c-17.64 0-32-14.36-32-32V160c0-17.64 14.36-32 32-32h384c17.64 0 32 14.36 32 32v288zM320.1 160h-192c-35.35 0-64 28.65-64 64v160c0 35.35 28.65 64 64 64h191.1c35.35 0 64.01-28.65 64.01-64V224c.89-35.3-27.81-64-63.11-64zM352 384c0 17.64-14.36 32-32 32H128c-17.64 0-32-14.36-32-32V224c0-17.64 14.36-32 32-32h192c17.64 0 32 14.36 32 32v160zm80-200c-13.25 0-24 10.74-24 24 0 13.25 10.75 24 24 24 13.26 0 24-10.75 24-24 0-13.3-10.7-24-24-24zm0 64c-13.25 0-24 10.74-24 24 0 13.25 10.75 24 24 24 13.26 0 24-10.75 24-24 0-13.3-10.7-24-24-24z" />
  </svg>
);

export default SvgTvRetro;
