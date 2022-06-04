import * as React from "react";
import { SVGProps } from "react";

const SvgUserSlash = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="user-slash_svg__fa-primary"
      d="M630.8 469.1 38.81 5.109A23.96 23.96 0 0 0 24.03 0C16.91 0 9.845 3.156 5.127 9.187c-8.187 10.44-6.375 25.53 4.062 33.7L601.2 506.9c10.5 8.203 25.56 6.328 33.69-4.078 8.21-10.422 6.31-25.522-4.09-33.722z"
    />
    <path
      d="M447.1 127.1C447.1 57.31 390.7 0 319.1 0c-68.9 0-125.4 55.93-126.8 125.4l160.6 125.8c54.6-14.5 94.2-63.9 94.2-124.1zM264.9 304.3C171.28 306.722 96 383.17 96 477.4c0 19.14 15.52 34.67 34.66 34.67h378.7c5.625 0 10.73-1.65 15.42-4.029L264.9 304.3z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgUserSlash;
