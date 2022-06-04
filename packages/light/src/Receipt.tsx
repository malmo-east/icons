import * as React from "react";
import { SVGProps } from "react";

const SvgReceipt = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M288 143.1c8.8 0 16 8.1 16 16 0 9.7-7.2 16-16 16H96c-8.84 0-16-6.3-16-16 0-7.9 7.16-16 16-16h192zM80 352c0-8.8 7.16-16 16-16h192c8.8 0 16 7.2 16 16s-7.2 16-16 16H96c-8.84 0-16-7.2-16-16zm208-112.9c8.8 0 16 8.1 16 16 0 9.7-7.2 16-16 16H96c-8.84 0-16-6.3-16-16 0-7.9 7.16-16 16-16h192zM79.27 50.1 124.7 4.687c6.2-6.249 16.4-6.249 22.6 0L192 49.37l44.7-44.683c6.2-6.249 16.4-6.249 22.6 0L304.7 50.1l52.8-46.141a15.919 15.919 0 0 1 17.1-2.529C380.3 4.024 384 9.722 384 16v480c0 6.3-3.7 11.1-9.4 14.6-5.7 2.6-12.4 1.6-17.1-2.6l-52.8-46.1-45.4 45.4c-6.2 6.3-16.4 6.3-22.6 0L192 462.6l-44.7 44.7c-6.2 6.3-16.4 6.3-22.6 0l-45.43-45.4L26.54 508c-4.73 4.2-11.43 5.2-17.152 2.6C3.671 507.1 0 502.3 0 496V16A16 16 0 0 1 26.54 3.959L79.27 50.1zm-9.81 377c6.34-4.7 15.9-4.4 21.85 1.6L136 473.4l44.7-44.7c6.2-6.3 16.4-6.3 22.6 0l44.7 44.7 44.7-44.7c5.9-6 15.5-6.3 21.8-1.6l37.5 33.6V51.26l-37.5 32.78c-6.3 5.55-15.9 5.23-21.8-.73L248 38.63l-44.7 44.68c-6.2 6.25-16.4 6.25-22.6 0L136 38.63 91.31 83.31c-5.95 5.96-15.51 6.28-21.85.73L32 51.26V460.7l37.46-33.6z" />
  </svg>
);

export default SvgReceipt;