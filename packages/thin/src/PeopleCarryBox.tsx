import * as React from "react";
import { SVGProps } from "react";

const SvgPeopleCarryBox = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M384 128H256c-17.7 0-32 14.3-32 32v128c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V160c0-17.7-14.3-32-32-32zm16 160c0 8.822-7.178 16-16 16H256c-8.8 0-16-7.2-16-16V160c0-8.822 7.178-16 16-16h128c8.822 0 16 7.178 16 16v128zm112-184c28.71 0 52-23.29 52-52S540.7 0 511.1 0c-28.71 0-51.99 23.29-51.99 52s24.19 52 52.89 52zm0-88c19.85 0 36 16.15 36 36s-16.15 36-36 36-36-16.15-36-36 16.2-36 36-36zm91.5 242.3L585 178.17c-4.625-20-18.62-36.88-37.5-44.88-26.92-11.64-48.97-.928-56.12 3.25-22.62 13.38-39.62 34.5-48.12 59.38l-8.721 26.28a7.997 7.997 0 0 0 5.064 10.11c4.193 1.396 8.729-.873 10.12-5.068l8.684-26.15c7.307-21.38 21.91-39.42 41.05-50.73 21.37-12.47 41.24-2.582 41.81-2.336 14.13 5.988 24.66 18.61 28.16 33.74l18.5 80.13c3.475 15.02-.566 30.94-10.76 42.53l-67.25 75.88a15.988 15.988 0 0 0-3.93 8.869l-10.13 92.67C494.1 489.9 488.2 496 480 496l-1.795-.158a15.761 15.761 0 0 1-10.69-5.855c-2.65-3.31-3.848-7.46-3.357-11.77l9.986-92.63c1.115-9.664 5.189-18.76 11.71-26.23l43.38-49a16 16 0 0 0 3.541-14.49l-16.75-66.88c-1.557-6.221-5.584-11.71-11.38-14.45-2.893-1.363-4.594-1.188-6.752-1.121-5.867.181-11.06 3.83-12.93 9.39L477.5 244.9c-3.051 9.627-9.143 17.64-17.84 23.96l-23.95 15.26a7.994 7.994 0 0 0-3.701 6.746c0 6.314 6.973 10.14 12.3 6.746l23.94-15.26c12.62-9.125 20.5-20 24.5-32.63l6.875-20.38 17.63 70.38-43.37 49c-8.625 9.875-14.12 22-15.62 35l-10 92.75c-2 17.62 10.75 33.38 28.25 35.25 1.186.178 2.186.278 2.586.278 16.12 0 29.1-12.12 31.75-28.5l10.12-92.63L589.1 315c13.6-15.5 19-36.7 14.4-56.7zm34.1 206.2L591.47 349c-1.641-4.109-6.346-6.109-10.39-4.453-4.094 1.625-6.094 6.281-4.453 10.39l46.11 115.5c3.781 9.516-.906 20.39-10.33 24.22-9.641 3.703-20.53-.984-24.2-10.14l-28.63-79.25c-1.516-4.156-6.141-6.266-10.25-4.812-4.156 1.516-6.314 6.094-4.812 10.25l28.73 79.52c5.422 13.45 18.53 21.69 32.38 21.69 4.219 0 8.516-.766 12.67-2.375C635.9 502.4 644.6 482.2 637.6 464.5zM181.1 269.4c-9.4-6.8-15.5-14.8-18.7-24.8l-8.1-24c-1.525-4.523-5.893-7.318-10.66-7.193-9.34.193-17.44 6.693-19.74 15.793l-16.7 66.7c-1.3 4.2.1 10.5 3.6 14.5l43.3 48.92c6.592 7.547 10.67 16.64 11.77 26.19l10.01 92.84c.484 4.262-.707 8.424-3.355 11.72a15.667 15.667 0 0 1-10.59 5.803C161.9 495.8 160 495.1 160 496a15.899 15.899 0 0 1-15.84-14.24l-10.12-92.63a15.994 15.994 0 0 0-3.932-8.875L62.89 304.4c-10.24-11.65-14.27-27.57-10.79-42.61l18.37-80.1c3.504-15.14 14.03-27.76 28.26-33.79.56-.2 19.37-10 41.67 2.4 19.3 11.4 33.9 29.4 41 50.6l8.73 26.28c1.47 4.22 5.97 6.52 10.17 5.12s6.463-5.92 5.07-10.11l-8.77-26.29c-8.377-25-25.38-46-48.12-59.38-7.24-4.195-29.25-14.88-56.12-3.25-18.88 8-32.88 24.88-37.5 44.88l-18.37 80.13c-4.625 20 .749 41.25 14.37 56.75l67.25 75.88 10.12 92.63C130 499.8 143.8 512 160 512c1.25 0 2.25-.125 3.5-.25 17.62-1.875 30.25-17.62 28.25-35.25l-10-92.75c-1.5-13-7-25.12-15.62-35l-43.37-49 17.62-70.38 6.876 20.38c4 12.5 11.87 23.5 24.5 32.63l23.96 15.27C201 301 207.1 297.2 207.1 290.9a7.992 7.992 0 0 0-3.701-6.742L181.1 269.4zM90.71 400.5c-4.141-1.438-8.734.672-10.25 4.812L51.95 484.3c-3.812 9.469-14.72 14.16-24.21 10.44-9.531-3.859-14.22-14.73-10.45-24.23l46.13-115.5c1.641-4.109-.36-8.766-4.453-10.39-4.094-1.641-8.766.344-10.39 4.453l-46.14 115.5c-7 17.66 1.658 37.84 19.42 45.03a34.572 34.572 0 0 0 12.53 2.359c13.85 0 27-8.297 32.52-21.97l28.62-79.25c1.493-4.142-.657-9.642-4.817-10.242zM127.1 104c28.71 0 52-23.29 52-52S156.7 0 128 0 75.99 23.29 75.99 52s23.29 52 51.11 52zm0-88c19.85 0 36 16.15 36 36s-16.15 36-36 36-36-16.15-36-36 17-36 36-36z" />
  </svg>
);

export default SvgPeopleCarryBox;