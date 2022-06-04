import * as React from "react";
import { SVGProps } from "react";

const SvgBold = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M274.8 243.3c36.1-18.6 61.2-55.9 61.2-99.3 0-61.75-50.25-111.1-112-111.1L8 32c-4.406 0-8 3.58-8 8s3.594 8 8 8h40v416H8c-4.406 0-8 3.6-8 8s3.594 8 8 8h240c66.16 0 120-53.83 120-120 0-56.9-40-104.5-93.2-116.7zM224 48c52.94 0 96 43.06 96 96s-43.06 96-96 96H64V48h160zm24 416H64V256h184c57.3 0 104 46.7 104 104s-46.7 104-104 104z" />
  </svg>
);

export default SvgBold;
