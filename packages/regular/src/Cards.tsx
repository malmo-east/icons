import * as React from 'react';
import { SVGProps } from 'react';

const SvgCards = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
        <path d="M171.4 174.3c3-11.1 14.4-17.7 24.7-14.7l103.8 27.5c26 7 41.4 33.7 34.5 59.7-7 26-33.7 41.4-59.7 34.4l-8.8-2.3-1.2-.3 17.8 30.7 12-6.9c6.7-3.9 15.2-1.6 19 5 3.9 6.7 1.6 15.2-5.1 19.1l-48.2 27.8c-6.6 3.8-15.1 1.6-19-5.1-3.8-6.7-1.6-15.2 5.1-19l12.1-7-17.8-30.7c-.1.4-.2.8-.3 1.1l-2.4 8.9c-7.8 26-33.6 41.4-59.6 34.4-26-7.8-41.4-33.7-34.5-59.6l27.6-103zM220.7 7.468c26.6-15.374 60.7-6.25 76.1 20.382l167 289.25c15.3 26.7 6.2 60.7-20.4 76.1L250.5 504.5c-26.6 15.4-60.6 6.3-76-20.3L7.468 194.9c-15.374-26.7-6.25-60.7 20.382-76.1L220.7 7.468zm24 41.572L51.85 160.4c-3.67 2.1-4.93 6.8-2.81 10.5L216.1 460.2c2.1 3.6 6.8 4.9 10.4 1.9l192.9-110.5c3.7-2.1 4.9-6.8 2.8-10.5l-167-289.25c-2.1-3.67-6.8-4.93-10.5-2.81zM324.1 499l135.3-78.1c41.9-24.2 56.3-77.8 32.1-119.8L354.7 64.25c1.8-.17 3.5-1.15 5.3-1.15h224c30.9 0 56 25.97 56 56V456c0 30.9-25.1 56-56 56H360c-13.6 0-26.2-4.9-35.9-13.9v.9zm255.7-363.3c-14-11.8-34.5-9.5-46.9 3.2l-4.8 5.3-5-5.3c-12.5-12.7-33.2-15-46.7-3.2-15.7 13.5-16.5 37.4-2.5 51.9l48.5 50c3 3.2 8.2 3.2 11.5 0l48.1-50c14-14.5 13.3-38.4-2.2-51.9z" />
    </svg>
);

export default SvgCards;
