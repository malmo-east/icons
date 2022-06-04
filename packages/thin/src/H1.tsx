import * as React from "react";
import { SVGProps } from "react";

const SvgH1 = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M312.2 64c-4.425 0-8.006 3.594-8.006 8v168H16.01V72c0-4.406-3.581-8-8.006-8S0 67.59 0 72v368c0 4.4 3.581 8 8.006 8s8.006-3.594 8.006-8V256h288.2v184c0 4.406 3.581 8 8.006 8 4.425 0 8.006-3.594 8.006-8V72c.076-4.41-3.524-8-8.024-8zm238.9 368h-55.57V72a8 8 0 0 0-4.425-7.156c-2.721-1.344-5.973-1.062-8.382.75l-64.08 48c-3.534 2.656-4.253 7.656-1.611 11.22 2.674 3.531 7.694 4.219 11.21 1.594L480.4 88v344h-56.51c-4.425 0-8.006 3.594-8.006 8s3.616 8 8.016 8H552c4.4 0 8-3.6 8-8s-3.6-8-8.9-8z" />
  </svg>
);

export default SvgH1;