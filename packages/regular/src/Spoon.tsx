import * as React from 'react';
import { SVGProps } from 'react';

const SvgSpoon = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
        <path d="M449.5 242.1c-11.8 13.6-26.2 24.6-42.4 32.5-17 7.9-33.7 12.5-51.7 13.4-4.7 0-9.3-.3-14-1-20.5-3.6-39.5-13.4-54.4-28.1L40.96 504.1c-2.2 3.2-4.85 5.1-7.79 6.4-2.94 1.3-6.12 2-9.34 2.1-3.23.1-6.43-.5-9.42-1.7-2.98-1.3-5.699-3.1-7.978-5.3a24.17 24.17 0 0 1-5.283-8c-1.207-3-1.8-6.2-1.743-9.4.057-4.1.762-6.4 2.074-9.4 1.312-2.9 3.203-5.6 5.561-7.8L253.2 224.1c-14.7-14-24.5-33-28.1-53.5-1.8-20.3 1.4-40.8 9.2-59.6 7.8-18.79 20-35.45 35.6-48.53C305.5 24.74 354.3 2.34 406.1.001c14.1-.458 28.1 1.902 41.2 6.942 13.2 5.037 25.2 12.657 35.4 22.407 49.6 49.6 34.7 144.85-33.2 212.75zm-.7-178.77c-11.6-10.48-26.9-15.97-42.6-15.26-39.1 2.4-75.7 19.72-102.4 48.38-10.1 8.05-18.2 18.35-23.6 30.05-5.5 11.7-8.1 23.6-7.7 37.4 2.7 11.2 9 23 18.2 31.3l26.2 26.1c8.3 9.2 19.2 15.5 31.3 18.2 2.4.3 3.9.5 7.2.5 23.5-2.3 45.1-13.7 60.2-31.8 47.4-47.4 62.9-115.14 33.2-144.87z" />
    </svg>
);

export default SvgSpoon;
