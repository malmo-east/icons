import * as React from 'react';
import { SVGProps } from 'react';

const SvgScrewdriver = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
        <path d="m507.3 59.69-55-55a15.991 15.991 0 0 0-20.91-1.488l-125.5 94.07a32.005 32.005 0 0 0-12.8 25.6v62l-81 81C167.3 242.1 129.5 266.4 115.8 280.1L12 383.8c-16 16.12-16 42.13 0 58.13L70.13 500c8 8 18.5 12 29 12 10.62 0 21.12-4 29.12-12L232 396.3c26.12-26.12 30.5-65.38 14.12-96.38l80.1-81h61.1c10.07 0 19.56-4.742 25.6-12.8L507 80.62c6.6-6.39 5.9-15.3.3-20.93zM197.1 362.4l-98.87 98.75-48.25-48.25L149.6 314c13.38-13.38 35-13.38 48.37 0 13.33 13.4 13.33 35-.87 48.4zm184-191.5h-40v-40l96.87-72.63L453.8 74l-72.7 96.9z" />
    </svg>
);

export default SvgScrewdriver;
