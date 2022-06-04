import * as React from "react";
import { SVGProps } from "react";

const SvgPawClaws = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M116 158.8c10.51 38.41 38.88 65.26 66.76 65.26 3.605 0 7.189-.45 10.74-1.38 30.87-8.125 46.37-50 34.5-93.37C217.5 90.84 189.1 64 161.3 64c-3.6 0-7.2.45-10.8 1.38-7.4 1.94-13.8 5.9-19.2 11.24 5.2-23.65 16.8-45.44 34.4-62.96a7.994 7.994 0 0 0 0-11.31c-3.094-3.094-8.156-3.156-11.31 0C127 29.62 112 65.94 112 104.6l.057 23.57c0 .105-.004-.105 0 0-.157 9.73 1.143 20.13 3.943 30.63zm19.1-62.41c4.2-5.72 10.1-13.06 19.5-15.53 2.1-.57 3.5-.86 6.7-.86 20.91 0 42.97 22.99 51.31 53.48 5.848 21.36 4.158 43.09-4.518 58.14-3.299 5.721-9.207 13.06-18.6 15.53a26.479 26.479 0 0 1-6.691.856c-20.91 0-42.97-22.99-51.31-53.48C125.6 133.2 127.3 111.4 135.1 96.39zM318.5 222.6c3.547.93 7.15 1.38 10.75 1.38 27.88 0 56.23-26.84 66.74-65.26 2.848-10.41 4.094-20.83 3.957-30.62.004-.104 0 .103 0 0l.053-23.5c0-38.63-15.03-74.94-42.34-102.2-3.156-3.156-8.219-3.094-11.31 0a7.994 7.994 0 0 0 0 11.31c17.54 17.53 29.16 39.31 34.38 62.97-5.451-5.342-11.87-9.307-19.24-11.24A40.38 40.38 0 0 0 350.7 64c-27.88 0-56.24 26.84-66.75 65.25-11.85 43.35 3.65 85.25 34.55 93.35zm-19.1-89.1c8.4-31.4 30.4-53.5 51.3-53.5 2.275 0 4.525.29 6.676.852 9.412 2.477 15.32 9.816 18.62 15.54 8.678 15.04 10.37 36.78 4.518 58.14-8.346 30.49-30.41 53.48-51.31 53.48-2.275 0-4.525-.29-6.676-.852-9.412-2.477-15.32-9.816-18.62-15.54C295.3 176.6 293.6 154.8 299.4 133.5zM74.88 318.8c29.12-7 44.25-40.75 33.87-75.38C99.66 213 73.84 191.1 47.99 191.1c-3.629 0-7.26.416-10.85 1.277-7.027 1.689-13.19 5-18.43 9.441 5.516-24.49 19.67-46.55 40.47-61.43l9.469-6.75C72.25 131.1 73.09 126.1 70.5 123.4c-2.53-3.7-7.59-4.5-11.16-1.9l-9.46 6.8C18.66 150.6 0 186.8 0 225.2V248c0 .275.266.438.293.705.168 6.502.94 13.16 2.964 19.92 9.098 30.36 34.93 51.4 60.79 51.4A51.35 51.35 0 0 0 74.88 318.8zM18.6 264c-4.367-14.57-3.213-29.29 3.166-40.38 3.121-5.428 8.971-12.41 19.12-14.85a30.453 30.453 0 0 1 7.105-.834c19.08 0 38.62 17.2 45.45 39.99 4.365 14.57 3.211 29.29-3.166 40.38C87.15 293.8 81.3 300.8 71.15 303.2a30.453 30.453 0 0 1-7.105.834C44.97 304 25.43 286.8 18.6 264zm236.5-8C175.73 256 64 378.8 64 456.2c-.9 34.9 26.75 55.8 71.7 55.8 48.87 0 81.13-25.12 120.2-25.12 39.6.02 72 25.12 120.3 25.12 44.1 0 71.75-20.88 71.75-55.75C447.1 378.8 335.4 256 255.1 256zm121.1 240c-22.84 0-42.4-6.461-61.32-12.71C296.4 477.2 277.3 470.9 256 470.9c-21.05 0-39.1 6.266-58.32 12.33C178.7 489.5 158.1 496 135.8 496c-20.82 0-55.74-5.164-55.74-39.75 0-70.6 108.6-184.2 175.1-184.2s175.1 113.6 175.1 184.2C431.1 490.8 397.1 496 376.2 496zm74.9-367c-3.875-2.203-8.75-.844-10.91 2.984-2.188 3.844-.875 8.719 2.969 10.92 22.64 12.93 39.03 33.9 46.82 58.07-4.723-3.504-9.971-6.324-15.99-7.771a46.349 46.349 0 0 0-10.85-1.277c-25.86 0-51.68 21.04-60.78 51.4-10.37 34.63 4.75 68.38 33.87 75.38a46.343 46.343 0 0 0 10.84 1.279c25.84 0 51.57-21.04 60.78-51.4 2.025-6.762 2.812-13.42 2.978-19.92C511.7 248.4 512 248.3 512 248v-15.5c0-42.7-23-82.3-60.9-103.5zm42.3 134.1c-6.922 22.83-26.47 40.04-45.47 40.04-2.41 0-4.801-.281-7.102-.834-10.15-2.439-15.1-9.42-19.12-14.85-6.379-11.09-7.533-25.81-3.168-40.38 6.832-22.8 26.37-39.99 45.45-39.99 2.416 0 4.807.281 7.107.834 10.15 2.439 15.1 9.42 19.12 14.85 6.383 11.93 7.583 26.73 3.183 40.33z" />
  </svg>
);

export default SvgPawClaws;