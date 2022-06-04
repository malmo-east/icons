import * as React from "react";
import { SVGProps } from "react";

const SvgGramophone = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M352 447.1v-32c0-17.67-14.33-32-32-32H64c-17.67 0-32 14.33-32 32v32c-17.67 0-32 15.2-32 32.9s14.33 32 32 32h320c17.67 0 32-14.33 32-32s-14.3-32.9-32-32.9zM48 416c0-8.824 7.178-16 16-16h256c8.822 0 16 7.176 16 16v32H48v-32zm304 80H32c-8.822 0-16-7.176-16-16s7.178-16 16-16h320c8.822 0 16 7.176 16 16s-7.2 16-16 16zM56.1 319.1c4.469 0 9.156-1.324 13.41-4.215 55.92-38.2 134.6-80.82 218.8-89.85l42.87 8.973C352.9 241.4 368 261.7 368 284.3c0 28.47-23.17 51.63-51.64 51.63l-148.3-.094c-4.422 0-8 3.594-8 8s3.578 8 8 8l148.3.094C353.7 351.1 384 321.6 384 284.3c0-29.62-19.81-56.25-48.84-64.94l-46.51-9.777C226.5 169.1 178.5 71.22 150.9 13.6 146.5 4.419 138 .063 129.5.063c-10.12 0-20.37 6.118-23.48 17.66L32.82 289.8c-4.49 16.5 8.7 29.3 23.28 29.3zm65.4-297.26c.6-5.56 6.8-5.84 7.8-5.84 2.266 0 5.342.777 7.117 4.473 25.98 54.16 69.64 145.2 128.9 192.3-64.74 10.99-133.4 41.08-204.8 89.86C59.13 303.5 57.71 304 56.2 304c-2.498 0-5.135-1.34-6.721-3.418-1.459-1.91-1.836-4.059-1.137-6.629L121.5 21.84z" />
  </svg>
);

export default SvgGramophone;
