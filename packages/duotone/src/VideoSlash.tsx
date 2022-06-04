import * as React from "react";
import { SVGProps } from "react";

const SvgVideoSlash = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="video-slash_svg__fa-primary"
      d="M630.8 469.1 38.81 5.111A23.956 23.956 0 0 0 24.03 0C16.91 0 9.84 3.158 5.121 9.189-3.066 19.63-1.249 34.72 9.189 42.89l591.1 463.1c10.5 8.203 25.57 6.328 33.69-4.078C643.1 492.4 641.2 477.3 630.8 469.1z"
    />
    <path
      d="M32 399.1c0 26.51 21.49 47.1 47.1 47.1h287.1c19.57 0 36.34-11.75 43.81-28.56L32 121.8v277.3zm525.6-297.4L448 177.26v148.5l93.6 73.36 15.99 11.02c21.22 14.59 50.41-.297 50.41-25.8V127.5c-.9-25.4-29.1-40.37-50.4-25.8zM367.1 63.1H113.9L416 299.8V111.1c-.9-25.61-21.5-48-48.9-48z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgVideoSlash;
