import * as React from "react";
import { SVGProps } from "react";

const SvgTrademark = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M248 96.01H8c-4.406 0-8 3.578-8 8s3.594 8 8 8h112V408c0 4.422 3.594 8.006 8 8.006s8-3.606 8-8.006V112h112c4.406 0 8-3.578 8-8s-3.6-7.99-8-7.99zm386.6.44c-3.156-1.094-6.812-.047-8.906 2.656L464 306.1l-161.7-207c-2.1-2.73-5.8-3.78-8.9-2.65-3.2 1.1-5.4 4.15-5.4 7.55v304c0 4.4 3.6 8 8 8s8-3.578 8-8V127.3l153.7 197.6c3 3.906 9.625 3.906 12.62 0L624 127.3V408c0 4.422 3.594 8 8 8s8-3.6 8-8V104c0-3.4-2.2-6.45-5.4-7.55z" />
  </svg>
);

export default SvgTrademark;
