import * as React from "react";
import { SVGProps } from "react";

const SvgShip = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M191.1 32c0-17.67 15.2-32 32-32H352c17.7 0 32 14.33 32 32v32h40c30.9 0 56 25.07 56 56v118.4l25.9 9.7c38.1 14.3 48.7 63.2 19.9 92l-69.7 68c-8.5 10.2-23.7 10.2-33.1 0-9.3-8.5-9.3-23.7 0-33.1l68.9-68.8c4.1-4.1 2.6-11.1-2.9-13.2l-198.2-74.3c-2.7-.7-3.8-.7-5.6 0L86.96 293c-5.45 2.1-7.86 9.1-2.85 13.2L152.1 375c10.2 9.4 10.2 24.6 0 33.1-8.5 10.2-23.7 10.2-33.1 0l-68.83-68c-28.8-28.8-18.2-77.7 19.93-92l25-9.7V119.1c0-30.03 26-56 56-56h40V32zm-48 188.4 125.2-46.7c12.7-5.6 25.8-5.6 39.4 0L432 220.4V120c0-4.4-3.6-8-8-8H151.1c-3.5 0-8 3.6-8 8v100.4zm48 243.6c29.7 0 59.4-15.3 80.9-33.9 9.1-9 22.8-9 31.1 0 22.4 18.6 52 33.9 80 33.9 29.7 0 59.4-15.3 80.9-33.9 9.1-9 22.8-9 31.9 0 17 15 39.3 26.8 61.3 31.7 12.9 2.9 21.1 15.7 18.2 28.7-2.9 12.9-15.8 21-28.7 18.1-28.7-6.4-52.3-20.4-67.6-30.4-27.2 19.5-60.5 33.8-96 33.8-33.7 0-67-14.3-96-33.8-27.2 19.5-60.5 33.8-96 33.8-33.7 0-67-14.3-95.12-33.8-14.37 10-37.99 24-66.68 30.4-12.93 2.9-25.766-5.2-28.667-18.1-2.901-13 5.231-25.8 18.167-28.7 22.2-5 43.96-17.7 60.3-31.7 9.99-9 23.7-9 32.8 0 21.6 18.6 51.2 33.9 79.2 33.9z" />
  </svg>
);

export default SvgShip;
