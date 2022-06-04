import * as React from "react";
import { SVGProps } from "react";

const SvgBedPulse = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M96 318.3v1.689h1.689C97.12 319.4 96.56 318.9 96 318.3zm80 1.7c44.13 0 80-35.88 80-79.1s-35.88-79.1-80-79.1-80 34.1-80 78.2 35.9 80 80 80zm80-1.7-1.7 1.7h1.7v-1.7zM544 160h-82.1l-11.2 23.9c-9.2 19.3-28.9 31.9-50.7 32.1-21.23 0-40.97-12.31-50.3-31.35l-12.08-24.64H304c-8.836 0-16 7.161-16 15.1v175.1L64 352V80.01c0-8.834-7.164-15.1-16-15.1H16c-8.836 0-16 7.163-16 15.1V496c0 8.8 7.164 16 16 16h32c8.84 0 16-7.2 16-16v-47.1h512V496c0 8.836 7.164 16 16 16h32c8.836 0 16-7.164 16-16V256c0-53.9-43-96-96-96zm80-111.99H508.8L483.92 10.7c-2.324-3.48-5.539-6.131-9.158-7.977-1.172-.602-2.486-.55-3.738-.951C468.8 1.035 466.5 0 464.1 0c-.625 0-1.25.025-1.875.078a24.02 24.02 0 0 0-19.94 13.7l-42.72 90.81-21.12-43.12a23.995 23.995 0 0 0-21.54-13.44L208 48.02c-8.8-.01-16 7.16-16 16v15.99c0 8.836 7.163 15.1 15.1 16l133.1.01 36.46 74.55C382.5 178.8 390.8 184 400 184c9.219-.078 17.78-5.438 21.72-13.78l45.91-97.52 8.406 12.62C480.5 91.1 487.1 96.01 496 96.01h128c8.836 0 16-7.164 16-16v-16c0-8.83-7.2-16-16-16z" />
  </svg>
);

export default SvgBedPulse;
