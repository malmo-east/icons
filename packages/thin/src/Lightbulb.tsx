import * as React from "react";
import { SVGProps } from "react";

const SvgLightbulb = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M255.9 415.1H128.1c-8.813 0-15.98 7.18-15.97 16.03l-.03 23.17c.01 6.324 2.115 12.49 5.606 17.75l16.82 25.62c5.207 7.854 17.24 14.28 26.64 14.28h61.67c9.4 0 21.4-6.422 26.61-14.28l17.08-25.68c2.919-4.404 5.341-12.41 5.348-17.7l-.052-22.33c-.022-8.76-7.122-16.86-15.922-16.86zm-.2 39.3c-.004 2.148-1.467 6.994-2.654 8.785l-17.03 25.69c-2.257 3.406-9.212 7.147-13.29 7.147H161.3c-4.075 0-11.03-3.738-13.29-7.143l-16.99-25.63a16.16 16.16 0 0 1-2.699-8.932l-.037-22.31h127.5L255.7 454.4zm60.6-402.87C283 18.28 238.9 0 192 0c-.2 0-.4.013-.6.013C94.7.31 16 79.55 16 176.7c0 42.78 15.47 84.06 43.59 116.2 13.51 15.45 38.54 52.09 48.01 84.05.498 4.375 4.421 7.5 8.842 7 4.359-.516 7.503-4.484 6.974-8.875l-.374-2.094c-10.37-34.98-37.08-74.17-51.5-90.64-25.53-29.23-39.6-66.77-39.6-105.7 0-89.81 70.08-160.4 159.6-160.7h.53c42.65 0 82.75 16.63 112.1 46.86 30.36 30.38 47.07 70.78 47.07 113.8 0 38.91-14.07 76.44-39.6 105.7-14.41 16.47-41.13 55.66-51.81 92.16 0 .031-.063.563-.063.578-.529 4.391 2.522 8.672 6.881 9.188.343.032.685.047 1.027.047 3.923 0 7.254-2.719 7.721-6.766 9.652-32.55 34.68-69.19 48.2-84.64C352.5 260.7 368 219.4 368 176.7c0-47.3-18.4-91.78-51.7-125.17zM199.1 72c0-4.422-3.58-7.989-7.97-7.989-65.91 0-119.6 53.82-119.6 119.1 0 4.422 3.58 8 7.97 8s8.89-2.711 8.89-7.111c0-57.34 46.48-104 103.6-104 4.41 0 7.11-3.58 7.11-8z" />
  </svg>
);

export default SvgLightbulb;