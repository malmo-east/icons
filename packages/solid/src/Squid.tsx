import * as React from "react";
import { SVGProps } from "react";

const SvgSquid = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M289.9 336.9c-1.7.6-3.2 1.6-4.6 2.9-1.2 1.2-2.2 2.7-2.9 4.3-.6 1.6-1 3.4-1 5.1 0 1.8.4 3.5 1 5.2.7 1.6 1.7 3.1 2.9 4.3l36 35.5c1.5 1.5 3.3 2.7 5.2 3.5 2 .8 4.1 1.2 6.2 1.2 2.1 0 4.2-.4 6.1-1.2 2-.8 3.7-2 5.2-3.5l60.8-60.4c4.5-4.5 9.9-8.1 15.8-10.5 5.9-2.4 12.2-3.6 18.6-3.5 6.4 0 12.7 1.3 18.5 3.9 5.9 2.5 11.2 6.1 15.6 10.7l34.8 38.7.2.5c2.5 3 3.9 6.9 3.7 10.9-.1 4-1.7 7.7-4.5 10.6a94.47 94.47 0 0 1-61.7 27.7c-23.3 1.3-46.2-6.1-64.4-20.7l-14.8 14.8c-5 5-11.1 8.8-17.7 11.2-6.6 2.4-13.7 3.3-20.7 2.6-11.8-1.3-22.7-6.6-30.9-15.1l-31.4-31.4c-3.3-3.4-7.8-6.1-12.5-6.1s-9.2 2.7-12.5 6.1l-.4.3c-3.3 3.3-5.1 7.8-5.1 12.6 0 4.7 1.8 9.2 5.1 12.5l20.3 20.3c9 9 14.1 21.2 14.1 33.9 0 12.8-5.1 25-14.1 34l-8.8 8.7c-2.7 2.8-6.3 4.6-10.1 5-3.9-.4-7.8-.5-11-2.6-2.8-1.4-3.5-3.1-4.7-5.1-1.1-2.1-1.8-4.3-2-6.6-1.1-2.4.1-4.7.9-6.9s2.1-4.2 3.7-5.8l9.4-9.4c3-3 4.7-7 4.7-11.3 0-4.2-1.7-8.3-4.7-11.3l-39.5-39.4c-1.9-1.9-4.2-3.3-6.7-5-2.5 0-5.1-.3-7.7.1-2.7.3-5.2 1.1-7.4 2.5-2.3 1.4-4.2 3.3-5.6 5.6l-22.9 29.2c-3 4.2-4.5 9.3-4.2 14.4.4 5.2 2.6 10 6.2 13.7 2 2 4.3 3.6 6.9 4.7 2.6 1.1 5.4.8 8.3.8h9.6c3.9.8 7.7 2.1 10.7 4.5 3 2.5 5.1 5.9 5.9 9.7.4 2.3.3 3.8-.4 6.9-.6 2.3-1.7 4.3-3.2 6.1-1.5 1.8-3.3 3.2-5.5 4.2-2.1 1-4.4 1.5-6.7.6h-10.6c-7 .9-13.9-.4-20.4-3.1-6.4-2.6-12.3-6.5-17.3-11.4-9.1-9.2-14.5-21.3-15.4-34.2-.9-12.9 2.9-25.6 10.6-36l22.4-28.8c3-4.2 4.4-9.4 3.9-15.5-.4-4.3-2.7-9.2-6.4-12.9-3.7-3.6-8.5-5.9-13.7-6.4-5.2-.4-10.4.9-14.7 3.9l-28.61 22.4c-10.32 7.8-23.08 11.5-35.96 10.7a53.9 53.9 0 0 1-34.18-15.5c-4.98-4.9-8.919-10.8-11.604-17.3A53 53 0 0 1 0 346.6v-11.5c.018-1.4.54-3.7 1.529-5.8.989-2.1 2.422-4 4.199-5.4 1.777-1.5 3.857-2.6 6.092-3.2 2.24-.6 4.58-1.6 6.87-.4 3.81.8 7.24 2.9 9.67 5.9 2.44 3.1 3.72 6.9 3.64 9.9v10.5c.02 2.8.6 5.5 1.7 8.1 1.1 2.6 2.69 4.9 4.7 6.9 3.65 3.6 8.47 5.8 12.7 6.2 6.02.4 11.11-1.1 15.27-4.1l29.18-22.8c2.22-1.5 4.1-3.4 5.55-5.6 1.3-2.3 2.2-4.8 2.5-7.4.3-2.6.1-5.3-.8-7.8-1.7-2.5-2.2-4.8-4.05-6.7L59.3 273.9c-3-3.8-7.07-4.6-11.32-4.6-4.24 0-8.31.8-11.31 4.6l-9.34 9.4c-1.65.8-3.64 2.9-5.83 3.7-2.19.8-4.53 1.2-6.85.1-2.32.7-4.57 0-6.594-1.2a16.694 16.694 0 0 1-5.112-4.7c-2.16-3.2-3.111-7.1-2.684-11 .427-3.8 2.205-7.4 5.02-10.1l8.77-8.8c9-9 21.21-14 33.93-14 12.73 0 24.94 5 33.94 14l20.28 20.4c3.3 2.4 7.8 5.1 12.5 5.1s9.2-2.7 12.5-5.1l.4-.4c3.3-4.2 5.2-7.8 5.2-12.5s-1.9-9.2-5.2-12.6l-31.44-31.4c-8.5-8.2-13.86-19.1-15.17-31.7-.65-7 .26-13.2 2.66-19.9 2.4-6.6 6.23-12.6 11.23-17.6l14.72-14.9c-15.5-18.1-21.98-41.07-20.68-64.34A94.037 94.037 0 0 1 116.7 4.702c2.8-2.774 6.6-4.393 10.6-4.54a15.82 15.82 0 0 1 10.8 3.74l.6.224 38.5 34.784c4.6 4.43 8.3 9.72 10.8 15.58 2.5 5.85 3.9 12.15 3.9 18.53-.8 6.37-1.1 12.69-3.5 18.6-3.3 5.9-6 11.28-10.5 15.78l-60.4 60.8c-1.5 1.5-2.7 3.2-3.5 5.2-.8 1.9-1.2 4-1.2 6.1 0 2.1.4 4.2 1.2 6.2.8 1.9 2 3.7 3.5 5.2l35.8 35.8c1.2.4 1.8 1.4 4.3 2.9 1.6.7 2.5 1 5.2 1 1.7 0 3.5-.3 5.1-1 1.6-1.5 2.2-2.5 4.3-2.9 1.3-1.3 2.3-2.8 3-4.5.7-1.7 1-3.6 1-5.4-.1-12.3 1.8-24.6 4.9-36.3 7.6-20.4 18.4-37.4 32.5-53.4 18.2-17.3 37.9-33.8 59-48.54l-16-58.43c-.7-2.47-.8-5.07-.2-7.57.5-2.5 1.7-4.83 3.3-6.802 1.6-1.971 3.7-3.523 6.1-4.525 2.3-1.003 4.9-1.426 7.4-1.235l98.6 7.616c11.6 1.053 23 3.496 34 7.266A364.483 364.483 0 0 1 496-.002c4.2 0 8.3 1.686 11.3 4.686 3 3.001 4.7 7.066 4.7 10.416-1.2 31.46-6.2 61.76-14.9 91.1 3.8 11 6.2 22.4 7.3 34l7.6 98.6c.2 2.5-.3 5.1-1.3 7.5-1 2.3-2.6 4.4-4.6 6-1.9.8-4.3 2.8-6.8 3.4-2.5.5-5.1.5-7.6-.2l-58.4-16c-14.7 21-31.2 40.8-49.3 58.9-15.9 14.2-32.9 25-52.4 31.8-11.7 3.9-24 5.9-36.4 4.9-1.8.8-3.6 1.1-5.3 1.8zm-94.6-45.6c3-3 4.7-7.1 4.7-12.2 0-2.3-.9-5.4-2.7-8-1.8-2.6-4.3-4.7-7.2-5.9-2.9-1.2-7-1.5-9.2-.9-3.1.6-6 2.1-8.2 4.4-2.3 2.2-3.8 5.1-4.4 8.2-.6 2.2-.3 6.3.9 9.2 1.2 2.9 3.3 5.4 5.9 7.2 2.6 1.8 5.7 1.8 8.9 1.8 4.2 0 8.3-.8 11.3-3.8zm48 48c3-3 4.7-7.1 4.7-12.2 0-2.3-.9-5.4-2.7-8-1.8-2.6-4.3-4.7-7.2-5.9-2.9-1.2-7-1.5-9.2-.9-3.1.6-6 2.1-8.2 4.4-2.3 2.2-3.8 5.1-4.4 8.2-.6 2.2-.3 6.3.9 9.2 1.2 2.9 3.3 5.4 5.9 7.2 2.6 1.8 5.7 1.8 8.9 1.8 4.2 0 8.3-.8 11.3-3.8z" />
  </svg>
);

export default SvgSquid;
