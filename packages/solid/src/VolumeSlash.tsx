import * as React from "react";
import { SVGProps } from "react";

const SvgVolumeSlash = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="m630.8 469.1-88.78-69.59C583.9 362.8 608 310.9 608 256c0-57.12-25.84-111.1-70.88-147.1-10.22-8.344-25.34-6.906-33.78 3.344-8.406 10.25-6.906 25.38 3.344 33.78C540.6 172.9 560 213.3 560 256c0 42.69-19.44 83.09-53.31 110.9-1.045.857-1.599 2.029-2.46 3.013l-44.33-34.74c.504.031.971.325 1.477.325 5.344 0 10.75-1.781 15.19-5.406C499.1 311.6 512 284.7 512 256c0-28.65-12.91-55.62-35.44-74.06-10.28-8.344-25.41-6.875-33.75 3.406-8.406 10.25-6.906 25.38 3.375 33.78C457.5 228.4 464 241.8 464 256s-6.5 27.62-17.81 36.88c-7.719 6.311-10.48 16.41-7.824 25.39L384 275.7V64c0-12.59-7.337-24.01-18.84-29.16-11.5-5.188-25.01-3.116-34.43 5.259L214.9 143.1 38.81 5.111A23.956 23.956 0 0 0 24.03 0C16.91 0 9.839 3.158 5.12 9.189c-8.188 10.44-6.37 25.53 4.068 33.7l591.1 463.1c10.5 8.203 25.57 6.328 33.69-4.078C643.1 492.4 641.2 477.3 630.8 469.1zM64 208v96c0 26.51 21.49 47.1 48 47.1h83.84L330.74 471c5.96 6.2 13.56 9 21.26 9 4.438 0 8.959-.931 13.16-2.837C376.7 472 384 460.6 384 448v-50.34L88.75 166.3C74.05 174.5 64 189.1 64 208z" />
  </svg>
);

export default SvgVolumeSlash;