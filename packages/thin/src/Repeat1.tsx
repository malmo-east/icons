import * as React from "react";
import { SVGProps } from "react";

const SvgRepeat1 = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M264 320c4.422 0 8-3.594 8-8V200c0-4.4-3.6-8-8-8h-24c-4.4 0-8 3.6-8 8s3.6 8 8 8h16v104c0 4.4 3.6 8 8 8zm240-80.9c-4.422 0-8 3.594-8 8 0 84.7-68.2 152.9-152 152.9H192l.005-72a24 24 0 0 0-14.82-22.17A24.022 24.022 0 0 0 168 304a24.05 24.05 0 0 0-16.99 7.031l-80.01 80c-9.375 9.371-9.375 24.57 0 33.94l80.01 80C155.6 509.6 161.8 512 168 512c3.09 0 6.22-.598 9.188-1.828C186.2 506.5 192 497.7 192 488v-72h152c92.6 0 168-75.4 168-168.9 0-3.5-3.6-8-8-8zM176 488a7.978 7.978 0 0 1-4.943 7.391A7.627 7.627 0 0 1 168 496a7.989 7.989 0 0 1-5.672-2.346l-80.02-80C80.3 411.6 80 409.2 80 408s.305-3.615 2.344-5.654l79.1-79.99C163.9 320.8 165.9 320 168 320c1.049 0 2.072.205 3.047.61a7.977 7.977 0 0 1 4.943 7.39v160zm143.1-376.9V184a24 24 0 0 0 14.82 22.17c3.88 1.23 6.98 1.83 9.18 1.83 6.246 0 12.38-2.441 16.99-7.031l80.01-80c9.373-9.371 9.373-24.57 0-33.94l-80.01-80C356.4 2.441 350.2 0 343.1 0c-3.09 0-6.203.598-9.174 1.828C325.8 5.547 319.1 14.3 319.1 24l-.005 71.1H168c-92.64 0-168 75.38-168 168 0 4.406 3.578 8 8 8s8-3.594 8-8c0-83.81 68.19-152 152-152h151.1zm16-87.1a7.981 7.981 0 0 1 4.943-7.391C341.9 16.21 342.9 16 343.1 16c2.143 0 4.162.838 5.674 2.346l80.01 80C431.7 100.4 432 102.8 432 104s-.305 3.615-2.344 5.654l-80 79.99C348.1 191.2 346.1 192 343.1 192a7.966 7.966 0 0 1-3.057-.61A7.98 7.98 0 0 1 335.1 184V24z" />
  </svg>
);

export default SvgRepeat1;