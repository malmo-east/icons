import * as React from "react";
import { SVGProps } from "react";

const SvgFlagCheckered = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path
      className="flag-checkered_svg__fa-primary"
      d="M432 118.8V26.05c-48.43 12.27-80.11 3.695-112-6.801v84.8c30.2 7.961 60.4 15.92 96 15.92 4.8-.869 10.2-.469 16-1.169zM544 176V88c-35.87 14.48-80.42 27.22-112 30.84v88c31.6-3.64 76.1-16.34 112-30.84zm-19.9 184.9c12.2-5 19.9-16.5 19.9-28.8V264c-35.87 14.48-80.42 27.22-112 30.84v88.55c26.8-1.79 56.8-8.29 92.1-22.49zM96 208v-88c44.12-20.34 80.23-28.89 112-31.04V1.602C178.2 4.316 142.3 12.93 96 32.38V32C96 14.25 81.75 0 64 0S32 14.25 32 32l-.04 464c0 8.75 7.25 16 16 16H80c8.75 0 16-7.2 16-16V296c44.12-20.34 80.23-28.89 112-31.04v-88C176.2 179.1 140.1 187.7 96 208zm224-16v-88c-34.56-9.109-69.3-17.97-112-15.08v88c42.7-2.82 77.4 5.98 112 15.08zm96 15.1c-35.6 0-65.8-7.961-96-15.92v88c30.2 7.961 60.4 15.92 96 15.92 4.758 0 10.23-.46 16-1.125v-88c-5.8 1.525-11.2 1.125-16 1.125zm-208 57v88.15c42.65-2.867 77.47 5.812 112 14.91V280c-34.6-9.1-69.3-17.9-112-15.9z"
    />
    <path
      d="M96 384c44.17-20.37 80.2-28.75 112-30.88V264.1c-31.8 3-67.9 11.6-112 31.9v88zm0-264v88c44.12-20.34 80.23-28.89 112-31.04v-88c-31.8 2.15-67.9 10.7-112 31.04zm112 56.1v88c42.7-2.887 77.44 5.973 112 15.08v-88c-34.6-8.28-69.3-17.08-112-15.08zM320 104V19.25C288.59 8.91 256.51-2.8 208 1.61v87.36c42.7-2.89 77.4 5.97 112 15.03zm0 176v87.98c34.62 9.125 69.24 18.23 112 15.36V294.8c-5.766.664-11.24 1.125-16 1.125C380.4 295.1 350.2 288 320 280zm96-160.9c-35.6 0-65.8-7.961-96-15.92v88c30.2 7.961 60.4 15.92 96 15.92 4.758 0 10.23-.46 16-1.125v-88c-5.8 1.525-11.2 1.125-16 1.125zM544 264v-88c-35.87 14.48-80.42 27.22-112 30.84v88c31.6-3.64 76.1-16.34 112-30.84zm0-233.26c0-25-28.81-37.99-53.17-26.49C468.5 14.8 449.2 21.68 432 26.05v92.8c31.6-3.65 76.1-16.35 112-30.85V30.74z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgFlagCheckered;
