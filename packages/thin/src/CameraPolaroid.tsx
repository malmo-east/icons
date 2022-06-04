import * as React from "react";
import { SVGProps } from "react";

const SvgCameraPolaroid = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M568.1 327.3 512 256V80c0-26.51-21.49-48-48-48H112c-26.51 0-48 21.49-48 48v176L7.01 327.3C2.475 332.97.006 339.86.004 347.12L0 448c0 17.6 14.4 32 32 32h512c17.6 0 32-14.4 32-32V347.3c0-7.3-2.5-15.2-7.9-20zM76.5 265.1l3.502-4.383V80c0-17.64 14.36-32 31.1-32h352c17.64 0 32 14.36 32 32v181.6L555.5 336H20.54l55.96-70.9zM560 448c0 8.822-7.178 16-16 16H32c-8.822 0-16-7.178-16-16l.004-96h543.1v96zM428 96h-24c-11.03 0-20 8.969-20 20v24c0 11.03 8.969 20 20 20h24c11.03 0 20-8.969 20-20v-24c0-11.9-9-20-20-20zm4 44c0 2.172-1.828 4-4 4h-24c-2.172 0-4-1.828-4-4v-24c0-2.172 1.828-4 4-4h24c2.172 0 4 1.828 4 4v24zm-144-28c-44.11 0-80 35.89-80 80s35.89 80 80 80 80-35.89 80-80-35.9-80-80-80zm0 144c-35.3 0-64-28.7-64-64s28.7-64 64-64 64 28.7 64 64-28.7 64-64 64zM104 416h368c4.422 0 8-3.578 8-8s-3.578-8-8-8H104c-4.422 0-8 3.578-8 8s3.58 8 8 8z" />
  </svg>
);

export default SvgCameraPolaroid;
