import * as React from "react";
import { SVGProps } from "react";

const SvgArrowsRetweet = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M352 400H159.1c-13.23 0-24-10.78-24-24V90.4l106.5 99.44c2.5 1.46 4.4 2.16 6.4 2.16a7.96 7.96 0 0 0 5.844-2.531c3.016-3.25 2.844-8.312-.39-11.31l-120-112a7.978 7.978 0 0 0-10.91 0l-120 112c-3.235 3-3.407 8.062-.391 11.31 3.03 3.219 8.078 3.406 11.3.375L119.1 90.4V376c0 22.06 17.94 40 40 40H352c4.422 0 8-3.594 8-8s-3.6-8-8-8zm285.8-77.5c-3-3.219-8.078-3.375-11.3-.375L520 421.565V136c0-22.06-17.94-40-40-40H288c-4.4 0-8 3.59-8 8s3.6 8 8 8h192c13.23 0 24 10.78 24 24v285.6l-106.5-99.44c-3.203-3-8.266-2.844-11.3.375-3.016 3.25-2.844 8.312.39 11.31l120 112C508.1 447.3 510 448 512 448s3.923-.719 5.455-2.156l120-112c3.245-3.044 3.445-8.044.345-11.344z" />
  </svg>
);

export default SvgArrowsRetweet;
