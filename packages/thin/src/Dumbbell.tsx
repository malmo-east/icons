import * as React from "react";
import { SVGProps } from "react";

const SvgDumbbell = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M632 248h-24V128c0-17.67-14.33-32-32-32h-32c-5.957 0-11.22 2.068-16 4.904V96c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v152H208V96c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v4.904C107.2 98.07 101.1 96 96 96H64c-17.67 0-32 14.3-32 32v120H8c-4.406 0-8 3.6-8 8s3.594 8 8 8h24v120c0 17.67 14.33 32 32 32h32c5.957 0 11.22-2.068 16-4.904V416c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V264h224v152c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-4.904c4.8 2.804 10 4.904 16 4.904h32c17.67 0 32-14.33 32-32V264h24c4.4 0 8-3.6 8-8s-3.6-8-8-8zM96 400H64c-8.824 0-16-7.178-16-16V128c0-8.822 7.176-16 16-16h32c8.824 0 16 7.178 16 16v256c0 8.8-7.2 16-16 16zm96 16c0 8.822-7.176 16-16 16h-32c-8.8 0-16-7.2-16-16V96c0-8.822 7.176-16 16-16h32c8.8 0 16 7.18 16 16v320zm320 0c0 8.822-7.176 16-16 16h-32c-8.824 0-16-7.178-16-16V96c0-8.822 7.176-16 16-16h32c8.8 0 16 7.18 16 16v320zm80-32c0 8.822-7.176 16-16 16h-32c-8.824 0-16-7.178-16-16V128c0-8.822 7.176-16 16-16h32c8.824 0 16 7.178 16 16v256z" />
  </svg>
);

export default SvgDumbbell;