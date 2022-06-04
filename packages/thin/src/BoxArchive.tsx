import * as React from "react";
import { SVGProps } from "react";

const SvgBoxArchive = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M480 32H32C14.31 32 0 46.31 0 64v64c0 8.812 7.188 16 16 16h16v288c0 26.5 21.49 48 48 48h352c26.51 0 48-21.49 48-48V144h16c8.8 0 16-7.2 16-16V64c0-17.69-14.3-32-32-32zm-16 400c0 17.64-14.36 32-32 32H80c-17.64 0-32-14.36-32-32V144h416v288zm32-304H16V64c0-8.82 7.178-16 16-16h448c8.822 0 16 7.18 16 16v64zM168 256h176c4.4 0 8-3.6 8-8s-3.6-8-8-8H168c-4.4 0-8 3.6-8 7.1s3.6 8.9 8 8.9z" />
  </svg>
);

export default SvgBoxArchive;
