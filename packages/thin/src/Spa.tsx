import * as React from "react";
import { SVGProps } from "react";

const SvgSpa = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M190.8 207.7c3.3 1.1 8.6-2.6 9.5-6 14.62-62.49 45.97-118.3 85.97-153.2.719-.594 2.625-.594 3.344-.031 40 34.87 71.34 90.78 86 153.4.844 3.688 4.156 6.188 7.781 6.188.594 0 1.219-.063 1.812-.219 4.312-1 6.969-5.312 5.969-9.594-15.38-65.81-48.59-124.8-91.09-161.8-6.875-5.844-17.53-5.844-24.28.031-42.5 37.06-75.69 95.96-91.06 161.7a7.972 7.972 0 0 0 6.054 9.525zM560.5 192c-30.25.125-135 6.342-213.2 80.34-24.6 21.36-44.5 47.06-59.3 76.56-14.8-29.5-34.7-55.2-59.9-76.3-78.41-74.21-183.2-80.43-213.4-80.55C6.813 192 0 198.8 0 207.5c.25 27.6 7.469 123.2 88.78 193.9C171.8 480 254.8 479.9 286.9 480v-8l2.2 8h1.219c32.34 0 114.9-.906 196.7-78.34C568.5 330.7 575.8 235.1 576 207.5c0-8.7-6.8-15.5-15.5-15.5zm-84.3 197.8c-77.41 73.31-152.7 74.18-185.9 74.18h-4.6c-33.19 0-108.5-.906-186.1-74.4C23 322.1 16.25 233.3 15.5 208c28.75.125 128.3 6 202.7 76.4 27.41 23.81 47.81 52.18 62.41 86.71 2.5 5.875 12.25 5.875 14.75 0 14.59-34.53 35-62.9 62.66-86.93C431.8 214.4 530.6 208.2 560 208c-.4 26.7-7.6 115.5-83.8 181.8z" />
  </svg>
);

export default SvgSpa;
