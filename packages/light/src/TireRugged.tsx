import * as React from "react";
import { SVGProps } from "react";

const SvgTireRugged = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M232 184c0-13.3 10.7-24 24-24s24 10.7 24 24-10.7 24-24 24-24-10.7-24-24zm-37.1 26.9c12.6 4.1 19.5 17.7 15.5 30.3-4.1 12.6-17.7 19.5-30.3 15.4-12.6-4.1-19.5-17.7-15.4-30.3 4.1-12.6 17.6-19.5 30.2-15.4zm122.2 0c12.6-4.1 26.1 2.8 30.2 15.4 4.1 12.6-2.8 26.2-15.4 30.3-12.6 4.1-26.2-2.8-30.2-15.4-4.1-12.6 2.8-26.2 15.4-30.3zm-38.2 117.5c-7.8-10.8-5.4-25.8 5.3-33.6 10.7-7.8 25.7-5.4 33.5 5.3 7.8 10.8 5.5 25.8-5.3 33.6-10.7 7.8-25.7 5.4-33.5-5.3zm-45.8 0c-7.8 10.7-22.8 13.1-33.5 5.3-10.8-7.8-13.1-22.8-5.3-33.6 7.8-10.7 22.8-13.1 33.5-5.3s13.1 22.8 5.3 33.6zM416 256c0 88.4-71.6 160-160 160S96 344.4 96 256 167.6 96 256 96s160 71.6 160 160zM256 384c70.7 0 128-57.3 128-128s-57.3-128-128-128-128 57.3-128 128 57.3 128 128 128zM183.4 35.59C188.9 14.92 207.7 0 229.8 0h52.4c22 0 40.9 14.92 46.4 35.59 11 3.63 21.7 8.06 31.9 13.23 18.5-10.72 42.4-7.96 58 7.62l37.1 37.08c15.5 15.58 18.3 38.58 7.6 57.98 5.1 10.2 9.6 20.9 13.2 31.9 20.7 5.5 34.7 24.3 34.7 46.4v52.4c0 22.1-14 40.9-34.7 46.4-3.6 11-8.1 21.7-13.2 31.9 10.7 18.5 7.9 42.4-7.6 58l-37.1 37.1c-15.6 15.5-39.5 18.3-58 7.6-10.2 5.1-20.9 9.6-31.9 13.2-5.5 20.7-24.4 35.6-46.4 35.6h-52.4c-22.1 0-40.9-14.9-46.4-35.6-11-3.6-21.7-8.1-31.9-13.2-19.4 10.7-42.4 7.9-57.99-7.6l-37.07-37.1c-15.59-15.6-18.35-39.5-7.62-58-5.17-10.2-9.6-20.9-13.23-31.9-20.67-5.5-35.594-24.3-35.594-46.4v-52.4c0-22.1 14.924-40.9 35.594-46.4 3.63-11 8.06-21.7 13.23-31.9-10.73-19.4-7.97-42.4 7.62-57.98l37.07-37.08c15.59-15.58 38.59-18.34 57.99-7.62 10.2-5.16 20.9-9.6 31.9-13.23zM229.8 32c-8.3 0-15.2 6.26-15.9 14.46l-1.4 13.97-10.6 2.96c-15.4 4.33-30.1 10.48-43.9 18.2l-9.5 5.38-10.9-8.94c-6.3-5.24-16.5-4.79-21.5 1.04L79.07 116.1c-5.83 5-6.28 15.2-1.04 21.5l8.94 10.9-5.38 9.5c-7.72 13.8-13.87 28.5-18.2 43.9l-2.96 10.6-13.97 1.4c-8.2.8-15.36 7.6-15.36 15.9v52.4c0 8.3 7.16 15.2 15.36 15.9l13.97 1.4 2.96 10.6c4.33 15.4 10.48 30.1 18.2 43l5.38 10.4-8.94 10.9c-5.24 6.3-4.79 15.6 1.04 21.5l37.03 37c5 5.9 15.2 6.3 21.5.2l10.9-8.1 9.5 5.4c13.8 7.7 28.5 13.9 43.9 18.2l10.6 3 1.4 13.9c.7 8.2 7.6 14.5 15.9 14.5h52.4c8.3 0 15.1-6.3 15.9-14.5l1.4-13.9 10.5-3c15.5-4.3 30.2-10.5 43.1-18.2l10.4-5.4 10.9 8.1c6.3 6.1 15.6 5.7 21.4-.2l37.1-37c5.9-5.9 6.3-15.2.2-21.5l-8.1-10.9 5.4-10.4c7.7-12.9 13.9-27.6 18.2-43l3-10.6 13.9-1.4c8.2-.7 13.6-7.6 13.6-15.9v-52.4c0-8.3-5.4-15.1-13.6-15.9l-13.9-1.4-3-11.4c-4.3-14.6-10.5-29.3-18.2-43.1l-5.4-9.5 8.1-10.9c6.1-6.3 5.7-16.5-.2-21.5l-37.1-37.03c-5.8-5.83-15.1-6.27-21.4-1.04l-10.9 8.94-10.4-5.38c-12.9-7.72-27.6-13.87-43.1-18.21l-10.5-2.95-1.4-13.97c-.8-8.2-7.6-14.46-15.9-14.46h-52.4z" />
  </svg>
);

export default SvgTireRugged;