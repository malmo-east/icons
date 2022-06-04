import * as React from "react";
import { SVGProps } from "react";

const SvgEnvelopesBulk = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M296 256H56c-30.88 0-56 25.1-56 56v144c0 30.9 25.12 56 56 56h240c30.88 0 56-25.12 56-56V312c0-30.9-25.1-56-56-56zm40 200c0 22.06-17.94 40-40 40H56c-22.06 0-40-17.94-40-40V343.9l135 95.2c7.4 5 16.2 8 25 8s17.62-2.938 24.98-8.828L336 343v113zm0-133.5L191 425.7c-8.812 7.062-21.16 7.062-29.97 0L16 322.5V312c0-22.06 17.94-40 40-40h240c22.06 0 40 17.94 40 40v10.5zM72 224c4.42 0 8-3.6 8-8V56c0-22.06 17.94-40 40-40h304c22.06 0 40 17.94 40 40v48c0 4.422 3.578 8 8 8s8-3.6 8-8V56c0-30.88-25.1-56-56-56H120C89.13 0 64 25.12 64 56v160c0 4.4 3.58 8 8 8zm512-80H280c-30.9 0-56 25.1-56 56 0 4.4 3.6 8 8 8s8-3.6 8-8c0-22.1 17.9-40 40-40h304c22.06 0 40 17.94 40 40v160c0 22.06-17.94 40-40 40H392c-4.422 0-8 3.578-8 8s3.6 8 8 8h192c30.88 0 56-25.12 56-56V200c0-30.9-25.1-56-56-56zm-8 136c4.422 0 8-3.578 8-8v-64c0-4.422-3.578-8-8-8h-64c-4.422 0-8 3.578-8 8v64c0 4.422 3.578 8 8 8h64zm-56-64h48v48h-48v-48z" />
  </svg>
);

export default SvgEnvelopesBulk;