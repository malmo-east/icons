import * as React from 'react';
import { SVGProps } from 'react';

const SvgBurgerSoda = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
        <path d="M238.3 464c5.9 18.2 16.3 34.7 30.1 48H96c-8.11 0-15.93-3.9-21.87-8.6-5.94-5.5-9.56-13.1-10.13-21.2L33.6 176H24c-6.37 0-12.47-2.5-16.971-7.9C2.529 164.5 0 158.4 0 152c0-6.4 2.529-12.5 7.029-17 4.501-4.5 10.601-7 16.971-7h133.2l24.6-97.76c2.1-8.64 7.1-16.31 14.1-21.788 6.2-5.48 15.7-8.455 24.6-8.452H264c6.4 0 12.5 2.529 16.1 7.029C285.5 11.53 288 17.63 288 24c0 6.37-2.5 12.47-7.9 16.97-3.6 4.5-9.7 7.03-16.1 7.03h-37.2l-20 80h121.3c6.4 0 12.5 2.5 17 7s7 10.6 7 17-2.5 12.5-7 16.1c-4.5 5.4-10.6 7.9-17 7.9H81.7l28.8 288h127.8zm278.4-188.7c-3-3-4.7-7.1-4.7-11.3 0-3.2.9-6.3 2.7-8.9 1.8-2.6 3.4-4.7 7.2-5.9 2.9-1.2 6.1-1.5 9.2-.9 3.1.6 6 2.1 8.2 4.4 2.3 2.2 3.8 5.1 4.4 8.2.6 2.2-.6 6.3-.9 9.2-1.2 2.9-3.3 5.4-5.9 7.2-2.6 1.8-5.7 2.7-8.9 2.7-4.2 0-8.3-1.7-11.3-4.7zm-80-16c-3-3-4.7-7.1-4.7-11.3 0-3.2.9-6.3 2.7-8.9 1.8-2.6 3.4-4.7 7.2-5.9 2.9-1.2 6.1-1.5 9.2-.9 3.1.6 6 2.1 8.2 4.4 2.3 2.2 3.8 5.1 4.4 8.2.6 2.2-.6 6.3-.9 9.2-1.2 2.9-3.3 5.4-5.9 7.2-2.6 1.8-5.7 2.7-8.9 2.7-4.2 0-8.3-1.7-11.3-4.7zm-80 16c-3-3-4.7-7.1-4.7-11.3 0-3.2.9-6.3 2.7-8.9 1.8-2.6 3.4-4.7 7.2-5.9 2.9-1.2 6.1-1.5 9.2-.9 3.1.6 6 2.1 8.2 4.4 2.3 2.2 3.8 5.1 4.4 8.2.6 2.2-.6 6.3-.9 9.2-1.2 2.9-3.3 5.4-5.9 7.2-2.6 1.8-5.7 2.7-8.9 2.7-4.2 0-8.3-1.7-11.3-4.7zm280 116.5c-2.2 4.9-5.4 9.4-9.3 13.1 3 7.3 3.7 15.2 4.6 23.1-.9 22.3-8.9 43.6-24.6 59.4-15.8 15.7-37.1 23.7-59.4 24.6H348c-22.2-.1-43.6-8.9-59.3-24.7-16.6-15.7-24.5-37.1-24.5-59.3 0-7.9 1.6-15.8 4.6-23.1-4.3-4.8-7.6-8.7-9.8-14-2.2-5.4-3.2-11.1-2.9-16.9.3-5.7 1.9-11.3 4.7-16.4 2.7-5.1 6.5-9.5 10.3-12.9-6-11.6-7.8-25.6-6.9-37.8.9-13.1 5.4-25.7 12.9-36.4 20.5-25.4 46.6-45.7 76.3-59.3 28.7-13.6 62-20.2 94.6-19.2 32.6-1.9 65 5.6 94.7 19.2 29.6 13.6 55.7 33.9 76.2 59.3 7.5 10.7 12 23.3 12.9 36.4.9 12.2-1.8 26.2-7.8 37.8 4.9 3.7 8.9 8.4 11.7 13.8 2.7 5.4 4.2 11.4 4.3 17.5 0 5.4-1.1 10.8-3.3 15.8zm-320.3-94.7c-2.6 4.5-4.1 8.7-5.3 13.1.6 4.4 1.5 8.8 3.5 11.9 2 4.8 5.1 8.1 8.9 10.4 3.7 2.3 8.1 3.5 12.5 3.5h223.9c4.4 0 8.7-1.2 12.5-3.5 3.8-2.3 6.9-5.6 8.9-9.5 2-3.9 2.9-8.3 2.6-12.7-.3-4.4-1.7-8.7-4.3-13.2-16-18.2-36.2-33.3-59.1-43.4-22.8-10-47.6-15.6-72.5-13.7-24.9-1.9-49.7 3.7-72.5 13.7-22.8 10.1-43 25.2-59 43.4h-.1zm257.1 156.4c6.7-6.8 10.5-16 10.5-25.5 0-3.2-1.3-6.2-3.5-8.5-2.3-2.2-5.3-3.5-8.5-3.5H324c-3.2 0-6.2 1.3-8.5 3.5-2.2 2.3-3.5 5.3-3.5 8.5 0 9.5 3.8 18.7 10.5 25.5 6.8 6.7 16 10.5 25.5 10.5h200c9.5 0 18.7-3.8 25.5-10.5z" />
    </svg>
);

export default SvgBurgerSoda;
