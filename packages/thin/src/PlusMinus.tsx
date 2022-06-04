import * as React from "react";
import { SVGProps } from "react";

const SvgPlusMinus = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M16 200h168v168c0 4.406 3.594 8 8 8s8-3.594 8-8V200h168c4.406 0 8-3.594 8-8s-3.594-8-8-8H200V16c0-4.406-3.594-8-8-8s-8 3.59-8 8v168H16c-4.41 0-8 3.6-8 8s3.59 8 8 8zm352 264H16c-4.406 0-8 3.594-8 8s3.59 8 8 8h352c4.406 0 8-3.594 8-8s-3.6-8-8-8z" />
  </svg>
);

export default SvgPlusMinus;
