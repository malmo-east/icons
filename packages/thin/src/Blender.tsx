import * as React from "react";
import { SVGProps } from "react";

const SvgBlender = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M416 384H160c-35.35 0-64 28.65-64 64v32c0 17.67 14.33 32 32 32h320c17.67 0 32-14.33 32-32v-32c0-35.3-28.7-64-64-64zm48 96c0 8.822-7.178 16-16 16H128c-8.822 0-16-7.178-16-16v-32c0-26.47 21.53-48 48-48h256c26.47 0 48 21.53 48 48v32zM152 352.7c.422 4.406 4.313 7.594 8.703 7.234a8.004 8.004 0 0 0 7.234-8.703L136.8 16h356.9l-16.37 64h-149.3c-4.422 0-8 3.578-8 8s3.57 8 7.97 8h145.2l-20.47 80h-124.8c-4.422 0-8 3.578-8 8s3.67 8 8.07 8h120.7l-20.47 80h-100.2c-4.422 0-8 3.578-8 8s3.57 8 7.97 8h96.12l-15.87 62.02c-1.094 4.281 1.484 8.641 5.766 9.734.684.146 1.284.246 1.984.246 3.578 0 6.828-2.406 7.75-6.016l88-344c.61-2.391.078-4.938-1.438-6.891S506.5 0 504 0H40C17.94 0 0 17.94 0 40v176c0 22.1 17.94 40 40 40h103l9 96.7zM40 240c-13.23 0-24-10.77-24-24V40c0-13.23 10.77-24 24-24h80.71l20.84 224H40zm248 176c-17.67 0-32 14.33-32 32s14.33 32 32 32 32-14.33 32-32-14.3-32-32-32zm0 48c-8.822 0-16-7.178-16-16s7.178-16 16-16 16 7.178 16 16-7.2 16-16 16z" />
  </svg>
);

export default SvgBlender;