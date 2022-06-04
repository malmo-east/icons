import * as React from 'react';
import { SVGProps } from 'react';

const SvgTireRugged = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
        <path d="M384 256c0 70.7-57.3 128-128.9 128-69.8 0-128-57.3-128-128s58.2-128 128-128c71.6 0 128.9 57.3 128.9 128zm-128.9-96c-12.4 0-24 10.7-24 24s11.6 24 24 24c14.2 0 24.9-10.7 24.9-24s-10.7-24-24.9-24zm-44.8 81.2c4.1-12.6-2.8-26.2-15.4-30.3-12.6-4.1-26.1 2.8-30.2 15.4-4.1 12.6 2.8 26.2 15.4 30.3 12.6 4.1 26.2-2.8 30.2-15.4zm137-14.9c-4.1-12.6-17.6-19.5-30.2-15.4-12.6 4.1-19.5 17.7-15.4 30.3 4 12.6 17.6 19.5 30.2 15.4 12.6-4.1 19.5-17.7 15.4-30.3zm-63.1 68.5c-10.7 7.8-13.1 22.8-5.3 33.6 7.8 10.7 22.8 13.1 33.5 5.3 10.8-7.8 13.1-22.8 5.3-33.6-7.8-10.7-22.8-13.1-33.5-5.3zm-84.6 38.9c10.7 7.8 25.7 5.4 33.5-5.3 7.8-10.8 5.4-25.8-5.3-33.6-10.7-7.8-25.7-5.4-33.5 5.3-7.8 10.8-5.5 25.8 5.3 33.6zM283.1.001c26.9 0 50.3 16.719 59.6 40.749 1.4.57 2.8 1.15 4.2 1.74 23.6-10.38 51.9-5.7 71 13.35l38.3 38.28c19 19.08 23.7 47.38 13.3 70.98.6 1.4 1.2 2.8 1.7 4.2 24.1 9.4 40.8 31.8 40.8 59.6v54.2c0 26.9-16.7 50.3-40.8 59.6-.5 1.4-1.1 2.8-1.7 4.2 10.4 23.6 5.7 51.9-13.3 71l-38.3 38.3c-19.1 19-47.4 23.7-71 13.3-1.4.6-2.8 1.2-4.2 1.7-9.3 24.1-32.7 40.8-59.6 40.8h-54.2c-27.8 0-50.3-16.7-59.6-40.8-1.4-.5-2.8-1.1-4.2-1.7-23.6 10.4-51.9 5.7-70.97-13.3l-38.29-38.3c-19.05-19.1-23.73-47.4-13.36-71-.58-1.4-1.16-2.8-1.72-4.2C16.72 333.4 0 310 0 283.1v-54.2c0-27.8 16.72-50.2 40.75-59.6.57-1.4 1.15-2.8 1.74-4.2-10.38-23.6-5.7-51.9 13.35-70.98l38.29-38.29C113.2 36.78 141.5 32.1 165.1 42.48c1.4-.59 2.8-1.16 4.2-1.72C178.6 16.72 201.1 0 228.9 0l54.2.001zM211.2 76.86l-14.3 4.82c-7.7 2.61-15.2 5.72-22.4 9.29L161 97.64l-11.8-9.21c-6.4-4.91-15.4-4.36-21.1 1.34L89.78 128.1c-5.71 5.7-6.26 14.7-1.34 21.1l9.2 11.8-6.66 13.5c-3.58 7.2-6.69 14.7-9.31 22.4l-4.81 14.3-14.89 1.9c-7.96 1-14.87 7.8-14.87 15.8v54.2c0 8 6.91 14.8 14.87 15.8l14.89 1.9 4.81 14.3c2.62 7.7 5.73 15.2 9.31 22.4l6.66 12.6-9.2 12.7c-4.92 6.4-4.37 15.4 1.34 21.1l38.32 38.3c5.7 5.7 14.7 6.3 21.1 1.4l11.8-9.2 13.5 6.6c7.2 3.6 14.7 6.7 22.4 9.3l14.3 4.8 1.9 14.9c1 7.1 7.8 14 15.8 14h54.2c8 0 14.8-6.9 15.8-14l1.9-14.9 14.3-4.8c7.7-2.6 15.2-5.7 22.4-9.3l12.6-6.6 12.7 9.2c6.4 4.9 15.4 4.3 21.1-1.4l38.3-38.3c5.7-5.7 6.3-14.7 1.4-21.1l-9.2-12.7 6.6-12.6c3.6-7.2 6.7-14.7 9.3-22.4l4.8-14.3 14.9-1.9c7.1-1 14-7.8 14-15.8v-54.2c0-8-6.9-14.8-14-15.8l-14.9-1.9-4.8-14.3c-2.6-7.7-5.7-15.2-9.3-22.4l-6.6-13.5 9.2-11.8c4.9-6.4 4.3-15.4-1.4-21.1l-38.3-38.32c-5.7-5.71-14.7-6.26-21.1-1.34l-12.7 9.2-12.6-6.66c-7.2-3.58-14.7-6.69-22.4-9.3l-14.3-4.82-1.9-14.89c-1-7.96-7.8-13.97-15.8-13.97h-54.2c-8 0-14.8 6.01-15.8 13.97l-1.9 14.89z" />
    </svg>
);

export default SvgTireRugged;
