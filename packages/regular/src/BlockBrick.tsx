import * as React from "react";
import { SVGProps } from "react";

const SvgBlockBrick = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M0 96c0-35.35 28.65-64 64-64h320c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V96zm144 32h160V80H144v48zm-48 0V80H64c-8.84 0-16 7.16-16 16v32h48zm-48 48v56h152v-56H48zm48 160v-56H48v56h48zm-48 48v32c0 8.8 7.16 16 16 16h136v-48H48zm96-48h160v-56H144v56zm256 0v-56h-48v56h48zm0 48H248v48h136c8.8 0 16-7.2 16-16v-32zM248 176v56h152v-56H248zm152-48V96c0-8.84-7.2-16-16-16h-32v48h48z" />
  </svg>
);

export default SvgBlockBrick;