import * as React from "react";
import { SVGProps } from "react";

const SvgChalkboardUser = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M616 0H184c-13.2 0-24 10.77-24 24v64c0 4.42 3.6 8 8 8s8-3.58 8-8V24c0-4.406 3.594-8 8-8h432c4.406 0 8 3.594 8 8v368c0 4.406-3.594 8-8 8h-72v-64c0-8.838-7.164-16-16-16H400c-8.836 0-16 7.162-16 16v64h-24c-4.406 0-8 3.578-8 8s3.6 8 8 8h256c13.22 0 24-10.77 24-24V24c0-13.23-10.8-24-24-24zm-88 400H400v-64h128v64zm-336-48h-64C57.31 352 0 409.31 0 480c0 17.67 14.33 32 32 32h256c17.67 0 32-14.33 32-32 0-70.7-57.3-128-128-128zm96 144H32c-8.822 0-16-7.178-16-16 0-61.76 50.24-112 112-112h64c61.76 0 112 50.24 112 112 0 8.8-7.2 16-16 16zM160 320c53.02 0 96-42.98 96-96s-43-96-96-96-96 42.1-96 96 42.1 96 96 96zm0-176c44.11 0 80 35.89 80 80s-35.89 80-80 80-80-35.9-80-80 35.9-80 80-80z" />
  </svg>
);

export default SvgChalkboardUser;