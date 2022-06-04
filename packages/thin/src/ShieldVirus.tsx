import * as React from "react";
import { SVGProps } from "react";

const SvgShieldVirus = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="m466.5 83.68-192-80.01C269.6 1.641 261.3 0 256.1 0c-5.4 0-13.6 1.641-18.5 3.672l-192 80.01C27.69 91.07 16 108.6 16 127.1 16 385.2 205.2 512 255.9 512 307.92 512 496 383.8 496 128c0-19.4-11.7-36.93-29.5-44.32zM255.1 496C212.1 496 32 374 32 127.1c0-12.99 7.734-24.57 19.75-29.53l191.1-79.99c3.85-.37 9.95-1.58 13.25-1.58 3.188 0 9.383 1.232 12.29 2.441l192 80.02C472.3 103.4 480 114.1 480 127.1 480 405.6 270.9 496 255.1 496zM288 255.1c-8.836 0-16 7.164-16 16s7.164 15.1 16 15.1 16-7.163 16-15.1-7.2-16-16-16zm-64-64c-8.836 0-16 7.164-16 16s7.164 16 15.1 16 16-7.164 16-16-6.3-16-15.1-16zm160 16h-12.12c-13.55 0-16.05-12.61-16.05-16.28 0-3.301 1.024-7.314 4.734-11.02l8.576-8.578c6.238-6.237 9.357-14.43 9.357-22.62 0-17.61-14.22-31.1-31.98-31.1-8.545 0-16.58 3.328-22.62 9.375l-8.578 8.578c-3.926 3.922-8.191 4.75-11.08 4.75C296.3 140.2 288 134.2 288 124.1v-13c0-17.65-14.36-32-32-32s-32 14.35-32 32v13c0 10.1-8.3 16.1-16.2 16.1-2.889 0-7.156-.828-11.08-4.75l-8.62-8.55c-6-6.1-14.1-9.4-22.6-9.4-17.75 0-31.98 14.38-31.98 31.1 0 8.193 3.119 16.39 9.357 22.62l8.574 8.578c3.71 3.71 4.735 7.723 4.735 11.02 0 3.645-2.557 16.28-16.05 16.28H128c-17.64 0-32 14.36-32 32s14.36 32 32 32h12.12c13.55 0 16.05 12.61 16.05 16.29 0 3.302-1.024 7.315-4.734 11.02L142.9 307.9c-6.045 6.047-9.375 14.08-9.375 22.62 0 17.67 14.3 32 32 32 8.547 0 16.58-3.328 22.63-9.375l8.574-8.57c3.928-3.93 8.195-4.75 11.08-4.75C215.7 339.8 224 345.8 224 355.9v12.12c0 17.64 14.36 32 32 32s32-14.36 32-32V355.9c0-10.05 8.254-16.06 16.23-16.06 2.889 0 7.154.82 11.08 4.75l8.578 8.574c6.043 6.043 14.08 9.371 22.62 9.371 17.68 0 32-14.3 32-32 0-8.547-3.328-16.58-9.373-22.62l-8.578-8.578c-3.708-3.707-4.732-7.718-4.732-11.02 0-3.558 2.47-16.29 16.05-16.29H384c17.64 0 32-14.36 32-32S401.6 207.1 384 207.1zm0 48h-12.12c-19.29 0-32.06 15.78-32.06 32.23 0 7.862 2.918 15.88 9.436 22.4l8.576 8.576a15.944 15.944 0 0 1 4.688 11.31c0 8.545-6.884 15.1-16 15.1a15.933 15.933 0 0 1-11.31-4.688l-8.576-8.576c-6.518-6.523-14.53-9.436-22.4-9.436-16.45 0-32.23 12.77-32.23 32.06v12.12c0 8.844-7.156 16-16 16s-16-7.156-16-16v-12.12c0-19.29-15.78-32.06-32.23-32.06-7.859 0-15.88 2.913-22.39 9.436l-8.576 8.576a15.948 15.948 0 0 1-11.31 4.688c-9.132 0-16-7.469-16-15.1 0-4.093 1.562-8.189 4.688-11.31l8.576-8.576c6.519-6.519 9.436-14.53 9.436-22.4 0-16.45-12.77-32.23-32.06-32.23H128c-8.844 0-16-7.156-16-16s7.156-16 16-16h12.12c19.29 0 32.06-15.78 32.06-32.23 0-7.861-2.918-15.88-9.436-22.4l-8.544-7.67a15.944 15.944 0 0 1-4.688-11.31c0-8.545 6.884-15.1 16-15.1 4.094 0 8.188 1.562 11.31 4.688l8.578 7.622c6.5 6.6 14.5 9.5 22.4 9.5 16.45 0 32.23-12.78 32.23-32.07V111.1c0-8.848 7.156-16 16-16s16 7.152 16 16v12.12c0 19.29 15.78 32.07 32.23 32.07 7.863 0 15.88-2.92 22.4-9.436l8.576-8.577a15.948 15.948 0 0 1 11.31-4.688c9.132 0 16 7.469 16 15.1 0 4.093-1.562 8.189-4.688 11.31l-8.576 8.577c-6.519 6.518-9.436 14.53-9.436 22.4 0 16.45 12.77 32.23 32.06 32.23h12.12c8.844 0 16 7.156 16 16S392.8 255.1 384 255.1z" />
  </svg>
);

export default SvgShieldVirus;