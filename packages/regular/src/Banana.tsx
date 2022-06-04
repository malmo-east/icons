import * as React from "react";
import { SVGProps } from "react";

const SvgBanana = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M293.3 146.4c0 51.19-12.77 69.4-12.77 80.76 0 13.15 10.75 23.91 24.04 23.91 10.1 0 19.46-6.406 22.78-16.51 4.207-12.82 13.98-43.75 13.98-88.14 0-51.31-13.34-83.79-13.34-88.68 0-5.878 5.104-9.955 8.524-9.955 4.266 0 71.47 60.86 71.47 167.2 0 18.26-1.852 28.59-1.852 32.08 0 4.617 3.758 23.9 24.03 23.9 26.98 0 25.83-31.53 25.83-56.07C456 106.2 387.9 0 336.5 0c-28.9 0-56.4 24.25-56.4 57.97 0 20.03 13.2 37.48 13.2 88.43zm281.8 244.1c0-3.695-.864-7.445-2.687-10.96l-15.12-29.17c-21.05-40.62-63.08-64.65-106.9-64.65-13.43 0-27.02 2.257-40.22 6.984l-84.84 30.34L297.6 294.6c-23.2-23.2-53.9-35.1-84.8-35.1-23.72 0-47.57 6.985-68.29 21.25L106.3 307.1c-6.69 4.6-11.2 12.1-11.2 19.7 0 14.96 12.7 23.92 24.04 23.92a23.8 23.8 0 0 0 13.61-4.269l38.13-26.29a72.072 72.072 0 0 1 40.91-12.72c10.64 0 21.24 2.344 30.97 6.949-50.62 62.37-128.3 100.1-211.4 100.1C14.42 414.4 0 428.8 0 446.5v31.45c0 17.72 14.66 32.09 32.46 32.09h28.98c68.41 0 286.5 25.73 363.9-171.6 9.021-3.226 17.95-4.721 26.53-4.721 27.65 0 51.7 15.53 63.7 38.63l15.12 29.17c3.484 6.737 11.74 13.01 21.41 13.01 12-.029 23-9.929 23-24.029z" />
  </svg>
);

export default SvgBanana;
