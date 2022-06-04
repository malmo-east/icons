import * as React from "react";
import { SVGProps } from "react";

const SvgDiscDrive = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 96c-88.4 0-160 71.6-160 160s71.63 160 160 160 160-71.63 160-160S344.4 96 256 96zm0 304c-79.4 0-144-64.6-144-144s64.6-144 144-144 144 64.6 144 144-64.6 144-144 144zm0-176c-17.7 0-32 14.3-32 32s14.33 32 32 32 32-14.33 32-32-14.3-32-32-32zm0 48c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.178 16 16-7.2 16-16 16zm248 192h-24V104c0-39.69-32.3-72-72-72H104c-39.7 0-72 32.31-72 72v360H8c-4.422 0-8 3.6-8 8s3.578 8 8 8h496c4.422 0 8-3.594 8-8s-3.6-8-8-8zm-40 0H48V104c0-30.88 25.12-56 56-56h304c30.88 0 56 25.12 56 56v360z" />
  </svg>
);

export default SvgDiscDrive;