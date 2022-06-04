import * as React from "react";
import { SVGProps } from "react";

const SvgBoltLightning = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <defs>
      <style />
    </defs>
    <path
      className="bolt-lightning_svg__fa-primary"
      d="M381.2 172.8c-4.1-7.9-12.3-12.8-21.2-12.8H203.4l50.84-127.1c2.969-7.375 2.062-15.78-2.406-22.38S239.1 0 232 0H56C43.97 0 33.81 8.906 32.22 20.84l-32 240a23.832 23.832 0 0 0 5.718 18.96A24.058 24.058 0 0 0 24 288h146.3l-41.78 194.1c-2.406 11.22 3.469 22.56 14 27.09 3.08 2.21 6.28 2.81 9.48 2.81 7.719 0 15.22-3.75 19.81-10.44l208-304c4.99-7.36 5.59-16.86 1.39-24.76z"
    />
  </svg>
);

export default SvgBoltLightning;
