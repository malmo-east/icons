import * as React from 'react';
import { SVGProps } from 'react';

const SvgDog = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
        <path d="M448 112c0 8.8-7.2 16-16 16s-16-7.2-16-16 7.2-16 16-16 16 7.2 16 16zM64.23 220.2c-1.1-.4-2.18-.7-3.26-1.1-27.39-9.6-49.03-32.4-56.373-61.8l-3.88-15.5c-3.215-13.7 4.603-25.9 17.463-29.1 12.86-3.2 25.89 4.6 29.1 17.5l3.88 15.5c4.46 17.8 20.46 30.3 38.81 30.3H290.7l26.8-161.11C318.1 6.296 326.4 0 335.1 0c5.6 0 10 2.64 14.2 7.126L368 32h76.1c12.7 0 25 5.06 34 14.06L496 64h32c26.5 0 48 21.49 48 48v32c0 53-43 96-96 96h-45.3l-2.7 15.1V448c0 35.3-28.7 64-64 64h-16c-35.3 0-64-28.7-64-64v-68.4c-10.4 2.3-21.1 3.8-32 4.2-2.7.1-5.3.2-8 .2s-5.3-.1-8-.2c-10.9-.4-21.6-1.9-32-4.2V448c0 35.3-28.7 64-64 64h-16c-35.35 0-64-28.7-64-64V224c0-1.3.08-2.6.23-3.8zM336 319.8V448c0 8.8 7.2 16 16 16h16c8.8 0 16-7.2 16-16V274.3L302.2 224H112.1l-.1.9V448c0 8.8 7.2 16 16 16h16c8.8 0 16-7.2 16-16V319.8l58.4 13c9.5 2.1 19.4 3.2 29.6 3.2 10.2 0 20.1-1.1 29.6-3.2l58.4-13zm1.1-130.7 52 32L394 192h86c26.5 0 48-21.5 48-48v-32h-51.9l-32-32h-88.8l-18.2 109.1z" />
    </svg>
);

export default SvgDog;
