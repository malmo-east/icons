import * as React from "react";
import { SVGProps } from "react";

const SvgBolt = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M240.5 224H352c13.3 0 25.3 8.3 29.1 20.7 5.5 12.5 2 26.6-8 35.4l-256 224c-11.3 9.8-27.83 10.6-39.91 1.8-12.09-8.8-16.49-24.8-10.6-38.5L143.5 288H31.1c-12.43 0-24.367-8.3-29.056-20.7a32.094 32.094 0 0 1 8.886-35.4L266.9 7.918c11.3-9.838 27.8-10.587 39.9-1.804 12.1 8.786 16.5 24.756 10.6 38.496L240.5 224z" />
  </svg>
);

export default SvgBolt;
