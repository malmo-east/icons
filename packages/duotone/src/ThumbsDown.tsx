import * as React from "react";
import { SVGProps } from "react";

const SvgThumbsDown = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="thumbs-down_svg__fa-primary"
      d="M96 32.04H32c-17.67 0-32 14.32-32 31.1v223.1c0 17.67 14.33 31.1 32 31.1h64c17.67 0 32-14.33 32-31.1V64.03c0-17.67-14.3-31.99-32-31.99z"
    />
    <path
      d="M467.3 240.2c7.8-8.5 12.7-19.8 12.7-32.3 0-23.47-16.87-42.92-39.14-47.09 4.44-7.21 7.14-15.71 7.14-25.71 0-21.32-14-39.18-33.25-45.43.75-2.55 1.25-6.06 1.25-9.69C416 53.47 394.5 32 368 32h-58.69c-34.61 0-68.28 11.22-95.97 31.98L179.2 89.57C167.1 98.63 160 112.9 160 127.1l.107 160s-.023-.023 0 0c.07 13.99 6.123 27.94 17.91 37.36l16.3 13.03C276.2 403.9 239.4 480 302.5 480c30.96 0 49.47-24.52 49.47-48.11 0-15.15-11.76-58.12-34.52-96.02H464c26.52 0 48-21.47 48-47.98 0-25.39-19.8-45.99-44.7-47.69z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgThumbsDown;
