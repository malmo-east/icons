import * as React from "react";
import { SVGProps } from "react";

const SvgPenRuler = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M373.2 16.97c21.9-21.871 57.3-21.871 79.2 0L495 59.6c21.9 21.87 21.9 57.3 0 79.2L182.3 451.6a97.59 97.59 0 0 1-40.8 24.2L20.52 511.3c-5.62.8-11.693.2-15.833-4-4.14-4.1-5.689-10.2-4.036-15.8l35.579-121c4.53-15.4 12.86-29.4 24.21-40.8L373.2 16.97zm56.6 22.63c-9.4-9.38-24.6-9.38-34 0L341 94.4l76.6 75.7 54.8-53.9c9.4-9.4 9.4-24.6 0-33.97L429.8 39.6zM66.93 379.5l-27.3 92.9 92.77-27.3c10.3-3.1 19.7-8.6 27.2-16.2l234.5-235.3-75.7-76.6L83.07 352.4c-7.57 7.5-13.12 16.9-16.14 27.1zM173.3 27.31l70.8 70.87-22.6 22.62-31.8-31.83-34.4 34.33c-6.2 6.3-16.4 6.3-22.6 0-6.3-6.2-6.3-16.4 0-22.6L167 66.34l-16.4-16.4c-12.5-12.5-32.7-12.5-45.2 0L49.94 105.4c-12.5 12.5-12.5 32.7 0 45.2l70.86 70.9-22.62 22.6-70.87-70.8c-24.99-25-24.99-65.6 0-90.55l55.44-55.44c24.95-24.99 65.55-24.99 90.55 0zM338.7 484.7l-70.8-70.9 22.6-22.6 70.9 70.9c12.5 12.5 32.7 12.5 45.2 0l55.5-55.5c12.5-12.5 12.5-32.7 0-45.2l-16.4-17.3-34.4 35.2c-6.2 6.3-16.4 6.3-22.6 0-6.3-6.2-6.3-16.4 0-22.6l34.3-34.4-31.8-31.8 22.6-22.6 70.9 70.8c25 25 25 65.6 0 90.6l-55.4 55.4c-25 25-65.6 25-90.6 0z" />
  </svg>
);

export default SvgPenRuler;