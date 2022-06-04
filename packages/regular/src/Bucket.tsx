import * as React from 'react';
import { SVGProps } from 'react';

const SvgBucket = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
        <path d="M96 160H48v-8C48 68.05 116.1 0 200 0h48c83.9 0 152 68.05 152 152v8h-48v-8c0-57.44-46.6-104-104-104h-48C142.6 48 96 94.56 96 152v8zM0 216c0-13.3 10.75-24 24-24h400c13.3 0 24 10.7 24 24s-10.7 24-24 24h-6l-28.7 229.1c-3 24-23.5 42.9-47.7 42.9H106.4c-24.23 0-44.65-18.9-47.66-42.9L30 240h-6c-13.25 0-24-10.7-24-24zm106.4 248h235.2l28-224H78.37l28.03 224z" />
    </svg>
);

export default SvgBucket;
