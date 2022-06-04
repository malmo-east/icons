import * as React from "react";
import { SVGProps } from "react";

const SvgHollyBerry = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M356.1 204.8c16.16-5.625 29.16-17.22 36.6-32.59 7.438-15.41 8.438-32.78 2.844-48.9-5.969-17.16-19-30.1-35.78-38.03a15.946 15.946 0 0 0-20.94 8.562c-3.438 8.156.406 17.53 8.563 20.94 8.407 3.531 14.94 10.47 17.91 19.03 2.813 8.093 2.313 16.75-1.406 24.47-3.719 7.687-10.22 13.5-18.28 16.28-16.72 5.875-34.94-3.031-40.72-19.69-2.938-8.374-12.19-12.75-20.38-9.874-8.344 2.937-12.78 12.03-9.875 20.37 9.219 26.4 34.03 42.97 60.53 42.97C343 208.3 350.1 207.2 356.1 204.8zm-202 0a63.651 63.651 0 0 0 20.94 3.531c26.5 0 51.31-16.56 60.53-42.97 2.906-8.343-1.531-17.44-9.875-20.37C218.4 142.1 209.1 146.5 206.2 154.9c-5.8 16.6-24.1 25.5-40.7 19.7-8.1-2.8-14.6-9.5-18.3-16.3-3.7-7.7-5.1-16.4-1.4-24.5 3-8.6 9.5-15.5 17.9-19 8.157-3.406 12-12.78 8.563-20.94-3.375-8.125-12.75-11.97-20.94-8.562A63.952 63.952 0 0 0 115.5 123.3c-5.594 16.12-4.594 33.5 2.844 48.9 7.456 15.4 20.456 27 35.756 32.6zm165-141.7c0-34.38-27.8-63.1-64-63.1s-64 28.72-64 63.1 28.72 63.1 64 63.1 64-26.92 64-63.1zm-64 32.89c-17.66 0-32.01-14.34-32.01-31.1s14.34-31.1 32-31.1 32 14.34 32 31.1-13.39 31.1-31.99 31.1zm-10 162.51c1.375-11.09-3.125-21.65-12.06-28.31a31.465 31.465 0 0 0-31.44-3.49c-31.31 13.81-64.82 21.06-97.13 21.06-1.375 0-2.938 0-4.031-.031-9.407 0-18.28 4.5-23.84 12.09C70.95 267.5 69.39 277.4 72.33 286.1c4.031 12.56 6.938 25.72 8.657 39.22.781 5.968-3.531 11.5-9.813 12.62-12.724 2.26-25.634 3.46-38.534 3.46-.938 0-.656-.063-2.844-.031-9.563 0-18.63 4.625-24.25 12.37-5.5 7.625-7.032 17.44-4.031 26.37 10.19 29.78 13.5 61.78 9.844 94.93-1.344 11.75 3.469 22.1 12.88 30.09C30.2 509.7 37.29 512 44.54 512c4.469 0 9.032-.906 13.44-2.719 30.72-12.97 62.38-19.53 94.07-19.53 1.156 0 2.469.063 3.406.031 9.438 0 18.34-4.5 23.94-12.12 5.594-7.625 7.188-17.47 4.219-26.37-4.063-12.12-7-25.25-8.75-39.06-.781-5.875 3.563-11.37 9.907-12.5 14.13-2.53 27.53-3.406 41.16-3.562 9.813.438 18.81-4.53 24.47-12.34 5.531-7.625 7.063-17.41 4.094-26.31C244.1 326.8 240.9 292.6 245.1 258.5zm-144.7 21.3zm78.7 88.4c-23.19 4.125-39 25.25-36.03 48.09 1.844 14.47 4.844 28.4 8.969 41.43-36.03.031-71.94 7.375-108.9 20.9 4-36.65.594-72.03-10.19-105.2a249.859 249.859 0 0 0 43.85-3.969c23.13-4.125 38.88-25.34 35.91-48.22C110.9 307.1 107.1 293.2 103.9 279.8h.531c36.5 0 74.19-8.093 108.7-23.72-4.313 37.03-.906 74.28 9.875 108.1-14.206.02-28.906 1.32-43.906 4.02zm327.3-14.4c-5.625-7.75-14.69-12.37-24.41-12.37-13.25-.063-27.59-1-41.25-3.437-6.25-1.125-10.56-6.656-9.782-12.66 1.719-13.47 4.625-26.62 8.625-39.03 2.969-8.906 1.406-18.78-4.188-26.4a29.59 29.59 0 0 0-23.84-12.09h-.469c-33.47 1.062-68.22-6.718-100.7-21.03-8.125-3.562-17.53.063-21.09 8.156-3.594 8.093.094 17.53 8.157 21.09 35.38 15.62 73.35 23.81 110.1 23.81h.532c-4.094 13.37-7.063 27.28-8.875 41.4-2.97 22.9 12.78 44.12 35.88 48.25a250.436 250.436 0 0 0 43.88 3.969c-10.78 33.22-14.28 68.65-12.56 106.4-34.69-14.62-70.5-21.1-106.5-22.03 4.125-13.03 7.125-26.94 8.938-41.28.625-4.375 1.78-19.75-9.907-33.22-11-12.69-29.41-19.12-54.63-19.12H303.1c-8.844.031-16 7.187-15.97 16.03.031 8.843 7.188 15.97 16 15.97 14.94 0 26.31 2.937 30.78 8.093 2.906 3.375 2.469 7.25 2.344 8.031-1.75 13.78-4.688 26.9-8.75 39.03-2.969 8.906-1.375 18.75 4.219 26.37 5.656 7.75 14.25 12.37 24.34 12.12 33.31.125 65.41 6.125 97.16 19.53C458.4 511.1 462.1 512 467.4 512c7.219 0 14.31-2.312 20.31-6.843 9.407-7.093 14.22-18.34 12.88-29.1-3.656-33.25-.344-65.25 9.907-95.15C513.5 371.2 511.9 361.4 506.4 353.8z" />
  </svg>
);

export default SvgHollyBerry;
