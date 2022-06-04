import * as React from "react";
import { SVGProps } from "react";

const SvgGhost = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path
      className="ghost_svg__fa-primary"
      d="M128 159.1c-17.62 0-31.1 14.38-31.1 32.01s14.38 32.01 31.1 32.01 32-14.38 32-32.01-14.4-32.01-32-32.01zm128 0c-17.62 0-32 14.38-32 32.01s14.38 32.01 32 32.01 32-14.38 32-32.01-14.4-32.01-32-32.01z"
    />
    <path
      d="M186.1.103C81 3.23 0 94.853 0 200.003v264c0 14.25 17.3 21.38 27.3 11.25l24.95-18.5c6.625-5 16-4 21.5 2.25l43 48.31c6.25 6.251 16.37 6.251 22.62 0l40.62-45.81c6.375-7.25 17.62-7.25 24 0l40.63 45.81c6.25 6.251 16.38 6.251 22.62 0l43-48.31c5.5-6.25 14.88-7.25 21.5-2.25l24.95 18.5c10 10.13 27.3 3.002 27.3-11.25V192C384 83.98 294.9-3.147 186.1.103zM128 224c-17.62 0-31.1-14.38-31.1-32.01s14.38-32.01 31.1-32.01 32 14.38 32 32.01S145.6 224 128 224zm128 0c-17.62 0-32-14.38-32-32.01s14.38-32.01 32-32.01c17.62 0 32 14.38 32 32.01S273.6 224 256 224z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgGhost;
