import * as React from "react";
import { SVGProps } from "react";

const SvgGun = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path
      className="gun_svg__fa-primary"
      d="M544 64h-16v-8c0-13.26-10.7-24-24-24s-24 10.74-24 24v8H43.17C19.33 64 0 83.33 0 107.2v89.66C0 220.7 19.33 240 43.17 240c21.26 0 36.61 20.35 30.77 40.79l-40.69 158.4C27.41 459.6 42.76 480 64.02 480h103.8c14.29 0 26.84-9.469 30.77-23.21L256 240h178.7c8.486 0 16.62-3.369 22.63-9.373L480 208h64c17.67 0 32-14.33 32-32V96c0-17.67-14.3-32-32-32zm-64 96H64v-32h416v32z"
    />
    <path
      d="M328.5 298.6c-1.1 3.2-4.1 5.4-7.6 5.4h-81.8l-12.7 48h94.58c24.16 0 45.5-15.41 53.13-38.28L398.6 240h-50.62l-19.48 58.6zM64 128v32h416v-32H64z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgGun;
