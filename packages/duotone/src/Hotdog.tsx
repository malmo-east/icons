import * as React from "react";
import { SVGProps } from "react";

const SvgHotdog = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="hotdog_svg__fa-primary"
      d="M208.4 322.1c2.246-12.97 3.867-22.33 16.22-34.68 12.35-12.35 21.71-13.97 34.68-16.22 14.35-2.493 32.19-5.488 51.78-25.08s22.58-37.43 25.08-51.78c2.246-12.98 3.867-22.33 16.22-34.69 12.35-12.35 21.71-13.97 34.68-16.22 14.35-2.5 32.15-5.425 51.74-25.01 6.237-6.235 6.237-16.36 0-22.59-6.239-6.239-16.36-6.239-22.59 0-12.35 12.35-21.66 13.92-34.63 16.17-14.35 2.493-32.19 5.486-51.78 25.07s-22.58 37.43-25.08 51.78c-2.246 12.98-3.867 22.33-16.22 34.68-12.35 12.35-21.71 13.98-34.68 16.22-14.42 2.55-32.22 5.45-51.82 25.05s-22.6 37.5-25.1 51.8c-2.246 12.97-3.867 22.33-16.22 34.69-12.35 12.35-21.71 13.97-34.68 16.22-14.35 2.493-32.19 5.486-51.78 25.07-6.239 6.243-6.239 16.34 0 22.58 6.237 6.239 16.34 6.239 22.58 0 12.35-12.35 21.71-13.97 34.68-16.22 14.35-2.5 32.19-5.491 51.78-25.08 19.64-19.56 22.64-37.46 25.14-51.76zm163.8-302c-24.84-24.84-63.46-26.45-86.19-3.727L16.38 286c-22.727 22.7-21.113 61.4 3.72 86.2l3.569 3.532c.305-.305.478-.687.788-.984l351.3-351.3L372.2 20.1zm119.7 119.7-3.367-3.532L137.2 487.5c-.299.313-.682.482-.985.787l3.53 3.571c24.84 24.83 63.46 26.45 86.19 3.727l269.6-269.7C518.4 203.2 516.7 164.6 491.9 139.8z"
    />
    <path
      d="M488.6 23.44c-31.07-31.19-81.75-31.16-112.8.031L24.46 374.8C3.63 394.76-4.73 424.45 2.63 452.4c7.36 27.95 29.07 49.65 57.02 57.01 27.95 7.364 57.64-.995 77.6-21.83l351.3-351.3c31.15-31.08 31.25-81.78.05-112.84zm-49.8 94.96c-19.59 19.59-37.39 22.51-51.74 25.01-12.97 2.242-22.33 3.868-34.68 16.22-12.35 12.35-13.97 21.71-16.22 34.69-2.495 14.35-5.488 32.19-25.08 51.78s-37.43 22.58-51.78 25.08c-12.97 2.246-22.33 3.867-34.68 16.22-12.42 12.4-14.02 21.7-16.22 34.7-2.494 14.35-5.488 32.19-25.08 51.78-19.59 19.59-37.43 22.58-51.78 25.08-12.97 2.242-22.33 3.868-34.68 16.22-6.239 6.239-16.35 6.239-22.58 0-6.239-6.239-6.239-16.34 0-22.58 19.59-19.59 37.43-22.58 51.78-25.07 12.98-2.25 22.33-3.871 34.68-16.22 12.35-12.35 13.97-21.71 16.22-34.69 2.496-14.35 5.49-32.19 25.08-51.78 19.59-19.59 37.43-22.58 51.78-25.08 12.98-2.242 22.33-3.867 34.68-16.22 12.35-12.35 13.97-21.7 16.22-34.68 2.496-14.35 5.49-32.19 25.08-51.78s37.43-22.58 51.78-25.07c12.98-2.25 22.28-3.812 34.63-16.17 6.237-6.239 16.35-6.239 22.59 0 5.3 6.26 5.3 16.36 0 22.56z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgHotdog;