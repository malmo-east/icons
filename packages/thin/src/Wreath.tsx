import * as React from "react";
import { SVGProps } from "react";

const SvgWreath = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M290.3 385.1 224 407.6l-66.19-22.5c-7-2.281-14.75-1-20.7 3.312C131.3 392.7 128 399.1 128 406.1v83.91c0 6.906 3.281 13.28 8.984 17.47 5.906 4.344 13.64 5.594 20.94 3.406L224 488.5l66.19 22.41c2.31.79 4.71 1.09 7.11 1.09 4.844 0 9.641-1.5 13.64-4.406C316.7 503.4 320 496.1 320 489.1v-83.91c0-6.938-3.281-13.31-9-17.5-5.9-3.49-13.6-4.79-20.7-2.59zm13.7 104c0 2.531-1.75 4.094-2.516 4.656-1.859 1.344-4.172 1.781-6.281 1.031L224 471.6l-71.03 24.03c-2.172.656-4.641.313-6.516-1.062C145.5 493.9 144 492.4 144 489.1v-83.91c0-2.469 1.578-4 2.516-4.688 1.859-1.344 4.188-1.781 6.266-1.062L224 424.5l71.11-24.13c2.188-.688 4.625-.25 6.422 1.062.968.668 2.468 2.168 2.468 4.668v83zM447.1 224c0-15.78-6.843-30.59-18.61-40.9 6.953-13.91 7.548-30.2 1.454-44.89-6.188-14.78-18.39-25.9-33.5-30.77 1.203-15.78-4.199-31.01-15.03-41.83-10.84-10.88-25.99-16.11-41.77-14.96-4.891-15.22-16.03-27.47-30.81-33.54-14.44-6.031-30.7-5.403-44.83 1.535-10.3-11.81-25.12-18.66-40.92-18.66-15.78 0-30.58 6.844-40.88 18.63-13.97-6.969-30.26-7.628-44.88-1.535C123.4 23.34 112.3 35.63 107.5 50.66c-15.78-1.44-31 4.1-41.78 14.92-10.95 10.81-16.28 26.08-14.99 41.82-15.2 4.9-27.49 16-33.54 30.8-6.08 14.5-5.38 30.7 1.58 44.8C6.906 193.3 0 208.1 0 223.1c0 15.75 6.844 30.53 18.61 40.88-6.952 13.91-7.59 30.18-1.481 44.86 6.14 14.6 18.4 25.58 33.58 30.42-1.406 16.1 3.89 31.15 14.1 42.15 9 9.125 21.05 14.45 34.81 15.35.187.031.359.031.547.031 4.171 0 7.687-3.25 7.968-7.469a7.983 7.983 0 0 0-7.453-8.5c-6.828-.468-16.62-2.688-24.55-10.72-8.969-8.875-12.44-21.69-9.516-35.16.47-2.125.047-4.344-1.172-6.156s-3.125-3.03-5.266-3.406c-13.45-2.344-24.09-10.62-29.17-22.69-5-12.03-3.594-25.56 3.766-36.25 2.137-.84 2.587-3.04 2.177-5.14-.42-2.1-1.65-4-3.45-5.2-10.95-7.2-17.5-19.2-17.5-33 0-12.94 6.578-24.94 17.58-32.1a8.14 8.14 0 0 0 3.484-5.125c.416-1.175-.014-3.375-1.204-5.175-7.375-10.94-8.797-24.5-3.812-36.38 4.953-12.09 15.8-20.69 29.03-23 2.142-.42 4.052-1.62 5.262-3.42s1.64-4.1 1.18-6.2c-2.91-13.23.56-25.88 9.54-34.76 8.88-8.87 21.63-12.22 34.84-9.53 2.2.47 4.4.03 6.2-1.19a8.057 8.057 0 0 0 3.391-5.312C123.7 47.88 132.2 37 144.4 31.88c11.91-5 25.5-3.562 36.28 3.812 1.766 1.25 3.969 1.594 6.062 1.25a7.972 7.972 0 0 0 5.141-3.438C199.1 22.53 211.1 16 224 16s24.94 6.531 32.13 17.5c1.172 1.781 3.016 3 5.109 3.438 2.109.406 4.281 0 6.047-1.219 10.91-7.312 24.52-8.812 36.38-3.812 12.08 4.938 20.67 15.81 23 29.06a7.931 7.931 0 0 0 3.406 5.25c1.797 1.219 4.016 1.625 6.141 1.188 13.16-2.812 26.11.781 34.86 9.531 8.859 8.844 12.33 21.56 9.516 34.85a7.93 7.93 0 0 0 1.203 6.125C383 119.7 384.9 120.9 387 121.3c13.14 2.312 24 10.91 29.06 23.03 5 12.03 3.594 25.6-3.766 36.28-1.234 1.75-1.688 3.939-1.281 6.064a8.046 8.046 0 0 0 3.469 5.156C425.5 199 432 211 432 223.1c0 12.91-6.453 24.85-17.28 32a8.087 8.087 0 0 0-3.438 5.156 7.988 7.988 0 0 0 1.281 6.062c7.406 10.75 8.859 24.28 3.891 36.22-5.031 12.06-15.66 20.35-29.17 22.72-2.156.375-4.047 1.594-5.266 3.406s-1.641 4.031-1.172 6.156c2.906 13.41-.563 26.22-9.547 35.19-8.141 8.158-17.86 10.31-24.56 10.69-4.422.281-7.781 4.062-7.531 8.469.266 4.406 3.891 7.562 8.438 7.531 13.61-.812 25.71-6.109 34.98-15.39 10.95-10.94 16.3-26.27 15.01-42.14 15.25-4.875 27.52-15.85 33.62-30.48 6.078-14.62 5.398-30.9-1.617-44.87C441.3 254.5 447.1 239.7 447.1 224zm-130.9-31.9c-1.031-3.312-1.359-7-1.75-10.66-.734-7.031-1.578-14.97-6.156-21.59-4.75-6.781-11.98-10.19-18.38-13.22-3.141-1.469-6.297-2.906-8.844-4.781-2.375-1.812-4.719-4.531-7.219-7.406C269.2 129.1 264 123.9 256.3 121.3c-7.484-2.471-15.12-.844-21.86.594-7.5 1.625-13.31 1.625-20.81 0-6.83-1.494-14.43-3.094-21.93-.594-7.7 2.6-12.9 7.8-17.5 14-2.5 2.875-4.844 5.594-7.234 7.406-2.466 1.894-5.666 3.394-9.166 4.994-6.3 3-13.4 6.3-18.1 13.1-4.547 6.594-5.391 14.53-6.125 21.56-.375 2.74-.775 7.34-1.775 10.54-1 3.1-2.7 6.2-4.4 9.3-3.5 6.2-7.4 13.3-7.4 21.8 0 8.469 3.922 15.59 7.391 21.84 1.703 3.096 3.453 6.127 4.422 9.189 1.031 3.312 1.359 7 1.75 10.66.734 7.031 1.578 14.97 6.156 21.6 4.75 6.781 11.98 10.19 18.38 13.22 3.101.591 6.301 2.891 8.801 4.791 2.4 1.8 4.8 4.5 7.3 7.4 4.6 5.4 9.8 11.4 17.5 14 2.812.938 5.641 1.281 8.438 1.281 4.656 0 9.219-.969 13.42-1.875 7.5-1.625 13.31-1.625 20.81 0 6.734 1.438 14.33 3.125 21.91.563 7.688-2.625 12.92-8.656 17.53-14 2.5-2.877 4.844-5.596 7.234-7.408 2.422-1.845 5.656-3.376 9.078-4.97 6.297-2.969 13.42-6.312 18.16-13.06 4.547-6.594 5.391-14.53 6.125-21.56.39-3.625.719-7.312 1.734-10.62 1-3.125 2.734-6.125 4.438-9.22C324.1 239.6 328 232.5 328 224c0-8.471-3.922-15.6-7.391-21.85-1.709-3.05-3.409-6.15-4.409-10.05zm-9.6 46c-2.219 4.031-4.383 8.062-5.68 12.13 0 .031 0 0 0 0-1.406 4.562-1.914 9.25-2.383 13.78-.594 5.594-1.156 10.88-3.344 14.06-2.266 3.252-6.922 5.408-11.84 7.752-4.016 1.875-8.172 3.844-11.94 6.688-3.719 2.812-6.734 6.312-9.672 9.688-3.594 4.188-7 8.125-10.53 9.312-3.344 1.127-8.266.031-13.42-1.062-8.812-1.875-18.75-1.875-27.56 0C205.1 311.6 200.2 312.6 196.8 311.6c-3.5-1.2-6.9-5.2-10.5-9.4-3-3.3-6-6.8-9.8-9.7-3.422-2.531-7.5-4.5-11.59-6.438-5.01-2.362-9.81-4.662-12.11-7.962-2.219-3.219-2.781-8.5-3.375-14.09-.425-4.51-.925-9.11-2.325-13.81-1.3-4-3.5-8-5.7-12.1-2.8-5-5.4-9.8-5.4-15s2.6-8.2 5.4-13.2c2.219-4.031 4.375-8.031 5.688-12.16 1.412-4.54 1.912-9.24 2.412-14.64.6-4.7 1.1-9.8 3.3-13 2.2-3.2 6.9-5.6 11.9-7.9 4.016-1.875 8.172-3.844 11.94-6.688 3.66-2.812 6.66-6.312 9.66-9.712 3.594-4.188 7-8.125 10.53-9.312 1-.344 2.141-.469 3.391-.469 2.922 0 6.406.75 10.03 1.531 8.812 1.875 18.75 1.875 27.56 0 5.172-1.094 10.05-2.125 13.38-1.094 3.578 1.22 6.984 5.156 10.58 9.344 2.938 3.375 5.953 6.877 9.75 9.752 3.422 2.531 7.5 4.5 11.59 6.438 5.031 2.375 9.781 4.625 12.08 7.906 2.219 3.22 2.781 8.5 3.375 14.09.469 4.533.969 9.19 2.391 13.81 1.297 4.062 3.453 8.062 5.672 12.09 2.781 5.031 5.405 9.763 5.405 14.11S309.4 233.1 306.6 238.1z" />
  </svg>
);

export default SvgWreath;
