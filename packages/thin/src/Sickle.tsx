import * as React from "react";
import { SVGProps } from "react";

const SvgSickle = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M511.7 153.1C501 100.2 446.1 0 318.7 0c-89.6 0-165.9 61.41-185.4 149.3-10.6 47.6 1.2 99.8 32.1 143.4 1.7 3.6 6.7 4.4 11.2 1.8 3.594-2.562 4.438-7.562 1.875-11.19C150.1 243.5 139.3 195.9 148.9 152.8 166.78 72.26 236.62 16 318.7 16c117.9 0 167.5 91.75 177.7 140-13-17.13-29.22-31.03-48.13-41.22-45.22-24.88-102.9-23.35-147 3.969-66.5 41.03-88.19 123.7-51.1 190.5l-29.66 29.03c-3.156 3.094-3.219 8.156-.125 11.31a8.023 8.023 0 0 0 5.719 2.406c2.033 0 4.033-.75 5.596-2.281l34.13-33.41c2.658-2.625 3.189-6.719 1.219-9.906-36.81-60.13-18.09-136.6 42.63-174 39.28-24.35 90.69-25.78 130.1-3.562 16.94 9.156 31.41 21.56 43.06 36.88 4.5 5.938 12.22 7.906 18.94 4.75C509.5 167.4 513.1 160.4 511.7 153.1zM196.5 377.3s.1 0 0 0 .1 0 0 0l-78.9-78.9c-3.156-3.156-8.219-3.094-11.31 0a7.99 7.99 0 0 0 0 11.31l11.4 11.38-106.8 106.8c-14.47 14.5-14.47 38.07 0 52.57l20.63 20.63C38.73 508.4 48.26 512 57.76 512c9.533 0 19.03-3.594 26.28-10.84L190.9 394.3l11.44 11.43a8.002 8.002 0 0 0 5.656 2.344 7.946 7.946 0 0 0 5.656-2.344 7.994 7.994 0 0 0 0-11.31L196.5 377.3zM72.73 489.8c-8.25 8.189-21.69 8.252-29.94 0l-20.62-20.6c-8.221-8.252-8.221-21.69 0-29.94l106.8-106.8 50.58 50.52L72.73 489.8z" />
  </svg>
);

export default SvgSickle;
