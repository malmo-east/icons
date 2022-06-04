import * as React from "react";
import { SVGProps } from "react";

const SvgGaugeCircleMinus = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M256 464c29.4 0 57.3-6.1 82.6-17.1 7.4 14.7 16.8 28.2 27.8 40.1-34.3 16-70.9 25-110.4 25C114.6 512 0 397.4 0 256S114.6 0 256 0c119.4 0 219.6 81.67 247.1 192.2-1.8-.1-4.4-.2-7.1-.2-14 0-27.5 1.6-40.6 4.7C429.9 110.7 350.3 48 256 48 141.1 48 48 141.1 48 256s93.1 208 208 208zm-56-112c0-22.3 13.1-41.6 31.1-50.6V119.1c0-12.4 11.6-24 24-24 14.2 0 24 11.6 24 24v182.3c19.8 9 32.9 28.3 32.9 50.6 0 30.9-25.1 56-56 56s-56-25.1-56-56zm-8-192c0 17.7-14.3 32-32 32s-32-14.3-32-32 14.3-32 32-32 32 14.3 32 32zM80 256c0-17.7 14.33-32 32-32 17.7 0 32 14.3 32 32s-14.3 32-32 32c-17.67 0-32-14.3-32-32zm304-96c0 17.7-14.3 32-32 32s-32-14.3-32-32 14.3-32 32-32 32 14.3 32 32zm256 208c0 79.5-64.5 144-144 144s-144-64.5-144-144 64.5-144 144-144 144 64.5 144 144zm-80-16.9H432c-8.8 0-16 8.1-16 16 0 9.7 7.2 16 16 16h128c8.8 0 16-6.3 16-16 0-7.9-7.2-16-16-16z" />
  </svg>
);

export default SvgGaugeCircleMinus;
