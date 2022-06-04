import * as React from "react";
import { SVGProps } from "react";

const SvgIceSkate = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M72 383.1h400c22.06 0 40-17.94 40-40v-41.2c0-45.91-31.41-85.78-76.5-97.03L320 177.7V7.1c0-4.406-3.578-8-8-8s-8 3.594-8 8v17.75L82.64 80.94C52.83 89.41 32 116.8 32 147.6V344c0 22.1 17.94 39.1 40 39.1zM48 147.6c0-23.62 16.05-44.72 38.77-51.19L304 42.25V112h-40c-4.422 0-8 3.594-8 8s3.578 8 8 8h40v47.1h-40c-4.422 0-8 3.594-8 8s3.578 8 8 8h47.04l120.7 28.38C469.6 229.8 496 263.3 496 301.9v42.13c0 13.22-10.77 24-24 24H72c-13.23 0-24-10.78-24-24V147.6zm520 267.5c-4.422 0-8 3.594-8 8v16c0 30.88-25.12 56-56 56h-80v-72c0-4.406-3.578-8-8-8s-8 3.594-8 8v72H136v-72c0-4.406-3.578-8-8-8s-8 3.594-8 8v72H8c-4.422 0-8 3.594-8 8s3.578 8 8 8h496c39.7 0 72-32.31 72-71.1v-16c0-4.4-3.6-8.9-8-8.9z" />
  </svg>
);

export default SvgIceSkate;
