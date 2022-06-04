import * as React from "react";
import { SVGProps } from "react";

const SvgWavePulse = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M640 248c0 4.4-3.6 8-8 8H484.9l-61.78 123.6c-1.5 2.969-4.719 4.781-7.906 4.406a7.991 7.991 0 0 1-6.938-5.781L320.1 72.5l-88.3 401.3c-.8 3.5-3.9 6.1-7.5 6.2-3.562 0-6.969-2.375-7.938-5.812L153.1 256H8c-4.406 0-8-3.6-8-8s3.594-8 8-8h152a7.999 7.999 0 0 1 7.688 5.812l55.34 193.7L312.2 38.25c.8-3.56 3.9-6.12 7.6-6.25 3.562 0 6.969 2.375 7.938 5.812l90.34 316.2 54.81-109.6C474.2 241.7 476.1 240 480 240h152c4.4 0 8 3.6 8 8z" />
  </svg>
);

export default SvgWavePulse;
