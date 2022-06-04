import * as React from "react";
import { SVGProps } from "react";

const SvgLeafHeart = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="leaf-heart_svg__fa-primary"
      d="m382.9 277.2-70.63 71.36c-4.584 4.582-11.88 4.582-16.46 0L225.1 277.2c-20.52-20.73-19.27-55.11 3.646-74.28 20-16.67 49.59-13.65 67.92 4.898l7.188 7.188 7.188-7.188c18.34-18.55 48.13-21.57 68.03-4.898C402.1 222.1 403.4 256.5 382.9 277.2z"
    />
    <path
      d="M486.2 39.98c-4.639-10.34-18.99-10.66-24.66-.828-31.09 53.82-93.33 74.56-149.3 61.23-25.25-6.008-52.6-6.555-80.93.008-65.4 15.14-117.1 68.35-131.4 134.2-5.1 24.51-4.78 48.31-.47 70.61C21.89 368.2.992 449 .668 450.4c-3.094 12.88 4.859 25.86 17.75 28.96 1.872.44 3.772.64 5.612.64 10.85 0 20.69-7.414 23.33-18.42.246-1.016 14.82-58.13 68.96-108.1 30.51 57.96 90.8 94.46 155.7 94.46 22.87 0 44.65-4.518 64.69-12.46C441.9 400.7 512 293.2 512 165.4c0-43.5-9.3-88.64-25.8-125.42zM382.9 277.2l-70.63 71.36c-4.584 4.582-11.88 4.582-16.46 0L225.1 277.2c-20.52-20.73-19.27-55.11 3.646-74.28 20-16.67 49.59-13.65 67.92 4.898l7.188 7.188 7.188-7.188c18.34-18.55 48.13-21.57 68.03-4.898C402.1 222.1 403.4 256.5 382.9 277.2z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgLeafHeart;
