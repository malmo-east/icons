import * as React from "react";
import { SVGProps } from "react";

const SvgNarwhal = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M526 141.2 618.91 35 592.1 182.5c-.781 4.359 2.094 8.516 6.438 9.312.562.088.962-.712 1.462-.712a8.01 8.01 0 0 0 7.875-6.562l32-176c.625-3.547-1.156-7.078-4.406-8.641C632.3-.734 628.4 0 625.1 2.703l-112 128a8.004 8.004 0 0 0 .75 11.28c4.25 2.917 9.25 2.617 12.15-.783zm-30 145.9c-8.836 0-16 7.162-16 16s7.164 16 16 16 16-7.164 16-16-7.2-16-16-16zm-32-128c-72.28 0-142.2 25.84-197.1 72.85L154.4 328.3c-3.125 2.674-6.762 3.874-10.32 3.874C135.8 333.1 128 326.6 128 317v-34.9l49.8-30.5c8.8-5.9 14.2-15.9 14.2-27.5v-81c0-9.391-7.709-16.01-16.01-16.01-2.969 0-6.012.86-8.807 2.721l-71.17 47.4L24.88 130.7c-2.801-1.865-5.852-2.727-8.826-2.727C7.729 128 0 134.6 0 144.1v80.93a31.968 31.968 0 0 0 14.25 26.57L64 282.1v69.88C64 440.4 135.6 512 224 512h240c97.03 0 176-78.95 176-176 0-97.1-79-176.9-176-176.9zm0 336H224c-79.4 0-144-64.6-144-144v-78l-56.92-34.89C18.65 235.3 16 230.4 16 224.1l.008-80.94 75.17 50.05h9.684L176 143.1v81.01c0 5.381-2.648 10.35-6.611 12.98L112 273.1v43.88c0 17.66 14.39 32.03 32.09 32.03 7.547 0 14.91-2.742 20.72-7.723L277.3 244.1c52-43.6 118.3-69 186.7-69 88.22 0 160 71.79 160 160 0 89.1-71.8 160-160 160z" />
  </svg>
);

export default SvgNarwhal;