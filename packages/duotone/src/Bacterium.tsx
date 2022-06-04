import * as React from "react";
import { SVGProps } from "react";

const SvgBacterium = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path
      className="bacterium_svg__fa-primary"
      d="M240.1 320c0 26.51-21.5 48-48.01 48S144 346.5 144 320s21.5-48 48.01-48 48.09 21.5 48.09 48z"
    />
    <path
      d="M543 102.9c-3.711-12.51-16.92-19.61-29.53-15.92l-15.12 4.48c-11.05-20.65-27.98-37.14-48.5-47.43l3.783-14.46c3.309-12.64-4.299-25.55-16.99-28.83-12.76-3.309-25.67 4.295-28.96 16.92l-3.76 14.37c-7.344-.25-14.81.203-22.33 1.469C366.5 36.05 351.7 39.73 337.3 43.94l-4.301-12.03c-4.406-12.3-17.1-18.81-30.34-14.34-12.35 4.371-18.8 17.88-14.41 30.2l4.303 12.04c-20.6 8.889-40.16 19.64-58.69 31.83L225.9 81.01c-8.8-10.45-22.8-12.59-33.3-4.8-10.5 7.82-12.7 22.62-4.8 33.09l7.975 10.63C178.8 134.3 163.3 150.3 149.1 167.4l-11.1-8.1c-10.5-7.7-25.4-5.4-33.2 5.2-7.748 10.54-5.428 25.33 5.164 33.03l11.09 8.066C109.2 224.1 98.79 243.7 90.18 264.3l-12.93-4.431c-12.45-4.248-25.92 2.293-30.18 14.65C42.78 286.9 49.38 300.3 61.78 304.6l13.05 4.474c-3.717 13.27-6.978 26.71-9.28 40.53-1.432 8.592-1.63 17.07-1.112 25.41l-15.45 4.566c-12.59 3.709-19.74 16.87-16 29.38 3.062 10.28 12.51 16.91 22.75 16.91 2.242 0 4.514-.307 6.771-.984l15.02-4.441c10.78 20.21 27.57 36.73 48.53 47.24l-3.852 14.75c-3.293 12.63 4.33 25.53 17.02 28.83 1.973.535 3.973.735 5.973.735 10.56 0 20.19-7.049 22.98-17.7l3.816-14.63c1.369.05 2.868.342 4.231.342 22.18 0 42.99-6.896 60.78-18.51l11.45 11.74c4.654 4.77 10.84 7.172 17.04 7.172 5.969 0 11.92-2.217 16.54-6.68 9.416-9.096 9.633-24.06.494-33.43l-12.19-12.5c7.805-12.29 13.56-26.13 16.11-41.4 1.186-7.107 3.082-13.95 5.158-20.7l12.04 5.635a23.777 23.777 0 0 0 10.08 2.246c8.922 0 17.46-5.018 21.51-13.59 5.582-11.8.479-25.89-11.4-31.45l-11.73-5.486c.895-1.318 1.592-2.773 2.523-4.062 3.186-4.424 6.844-8.434 10.46-12.49a159.943 159.943 0 0 1 15.6-15.28c4.275-3.627 8.572-7.221 13.23-10.4 1.494-1.031 3.1-1.896 4.63-2.877l5.23 11.81c3.927 8.834 12.63 14.1 21.75 14.1 3.2 0 6.448-.647 9.571-2 11.1-5.28 17.44-19.22 12.15-31.18L401.9 258.5c5.438-1.512 10.86-3.078 16.52-4.021 16.8-2.797 31.88-9.459 45.02-18.54l13.33 12.02c4.547 4.109 10.25 6.125 15.94 6.125 6.463 0 12.91-2.617 17.6-7.773 8.814-9.68 8.072-24.62-1.654-33.38l-12.95-11.68c11.32-18.9 16.99-41.02 15.52-64.23l15.81-4.681C539.6 128.6 546.7 115.4 543 102.9zM192 368c-26.51 0-48.01-21.49-48.01-48s21.5-48 48.01-48 48.1 21.5 48.1 48-21.5 48-48.1 48zm80-136c-13.25 0-23.92-10.75-23.92-24 0-13.26 10.67-23.1 23.92-23.1 13.26 0 23.1 10.74 23.1 23.1 0 13.3-9.8 24-23.1 24z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgBacterium;
