import * as React from "react";
import { SVGProps } from "react";

const SvgTty = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="tty_svg__fa-primary"
      d="M504.9 102.9C367.7-34.31 144.3-34.32 7.083 102.9c-7.975 7.973-9.375 20.22-3.391 29.74l42.17 67.47c6.141 9.844 18.47 13.88 29.35 9.632l84.36-33.74C169.5 172.1 175.6 161.1 174.5 151.3l-5.303-53.27c56.15-19.17 117.4-19.17 173.6.006L337.5 151.3c-1.139 10.59 4.997 20.78 14.96 24.73l84.35 33.73c10.83 4.303 23.22.16 29.33-9.615l42.18-67.48c5.98-9.465 4.58-21.765-3.42-29.765z"
    />
    <path
      d="M187.1 352c-6.625 0-12 5.375-12 12v40c0 6.625 5.375 12 12 12h40c6.625 0 12-5.375 12-12v-40c0-6.625-5.375-12-12-12h-40zm48-32h39.1c6.625 0 12-5.375 12-12v-40c0-6.625-5.375-12-12-12h-40c-6.625 0-12 5.375-12 12v40c.9 6.6 7.1 12 12.9 12zm96 0h39.1c6.625 0 12-5.375 12-12v-40c0-6.625-5.375-12-12-12h-40c-6.625 0-12 5.375-12 12v40c.9 6.6 7.1 12 12.9 12zm-192 0h39.1c6.625 0 11.1-5.375 11.1-12v-40c0-6.625-5.375-12-12-12h-40c-6.625 0-12 5.375-12 12v40c1.8 6.6 8 12 13.8 12zm228 44v40c0 6.625 5.375 12 12 12h40c6.625 0 12-5.375 12-12v-40c0-6.625-5.375-12-12-12h-40c-5.8 0-12 5.4-12 12zm-84-12c-6.625 0-12 5.375-12 12v40c0 6.625 5.375 12 12 12h40c6.625 0 12-5.375 12-12v-40c0-6.625-5.375-12-12-12h-40zm184 96h-40c-6.625 0-12 5.375-12 12v40c0 6.625 5.375 12 12 12h40c6.625 0 12-5.375 12-12v-40c0-6.6-4.5-12-12-12zm0-192h-40c-6.625 0-12 5.375-12 12v40c0 6.625 5.369 12 11.99 12h39.1c6.625 0 12.01-5.375 12.01-12v-40c.9-6.6-3.6-12-11.1-12zm-96 192h-232c-6.625 0-12 5.375-12 12v40c0 6.625 5.375 12 12 12h232c6.625 0 12-5.375 12-12v-40c0-6.6-4.5-12-12-12zM43.97 320h40c6.625 0 11.99-5.375 11.99-12v-40c0-6.625-5.375-12-12-12h-40c-6.625 0-12 5.375-12 12v40c0 6.6 5.39 12 12.01 12zm47.99 32c-6.625 0-12 5.375-12 12v40c0 6.625 5.375 12 12 12h40c6.625 0 12-5.375 12-12v-40c0-6.625-5.375-12-12-12h-40zm-8 96h-40c-6.625 0-12 5.375-12 12v40c0 6.625 5.375 12 12 12h40c6.625 0 12-5.375 12-12v-40c0-6.6-5.37-12-12-12z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgTty;
