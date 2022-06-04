import * as React from "react";
import { SVGProps } from "react";

const SvgCameraRotate = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M464 96h-88l-12.38-32.88C356.6 44.38 338.8 32 318.8 32H193.3c-20 0-38 12.38-45 31.12L136 96H48c-26.5 0-48 21.5-48 48v288c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V144c0-26.5-21.5-48-48-48zm32 336c0 17.64-14.36 32-32 32H48c-17.64 0-32-14.36-32-32V144c0-17.64 14.36-32 32-32h99.11l16.12-43.28C167.9 56.33 179.9 48 193.3 48h125.5c13.25 0 25.26 8.326 29.9 20.76L364.9 112H464c17.64 0 32 14.36 32 32v288zM352 184c-4.422 0-8 3.578-8 8v38.28C324.1 201.1 291.4 184 256 184c-44.28 0-84.67 27.78-100.5 69.14-1.6 4.16.5 8.76 4.6 10.36 4.125 1.562 8.75-.484 10.33-4.609C183.9 223.7 218.3 200 256 200c33.65 0 64.54 18.92 80.39 48H288c-4.422 0-8 3.578-8 8s3.6 8 8 8h64c4.422 0 8-3.578 8-8v-64c0-4.4-3.6-8-8-8zm-.1 128.5c-4.062-1.531-8.734.484-10.33 4.609C328.1 352.3 293.7 376 256 376c-33.65 0-64.54-18.92-80.39-48H224c4.422 0 8-3.578 8-8s-3.6-8-8-8h-64c-4.422 0-8 3.578-8 8v64c0 4.422 3.578 8 8 8s8-3.6 8-8v-38.28C187.9 374 220.6 392 256 392c44.28 0 84.67-27.78 100.5-69.14 1.6-4.16-.5-8.76-4.6-10.36z" />
  </svg>
);

export default SvgCameraRotate;