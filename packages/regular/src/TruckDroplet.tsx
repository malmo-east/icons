import * as React from 'react';
import { SVGProps } from 'react';

const SvgTruckDroplet = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
        <path d="M136 205.1c0-26.1 39.4-82.1 59.9-109.39 6.1-8.17 17.2-8.17 24.2 0C240.6 123 280 179 280 205.1c0 37.3-32.2 66.9-72 66.9s-72-29.6-72-66.9zM480 512c-53.9 0-96-43-96-96H256c0 53-43 96-96 96-53.9 0-96-43-96-96-35.35 0-64-28.7-64-64V64C0 28.65 28.65 0 64 0h288c35.3 0 64 28.65 64 64v32h42.7c14.9 0 29.1 5.9 39.6 16.4l93.3 93.3c10.5 10.5 16.4 24.7 16.4 39.6V368h8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-40c0 53-43 96-96 96zM48 64v288c0 8.8 7.16 16 16 16h12.84c16.6-28.7 47.66-48 83.16-48s66.6 19.3 83.2 48H352c8.8 0 16-7.2 16-16V64c0-8.84-7.2-16-16-16H64c-8.84 0-16 7.16-16 16zm510 176c-.1-.1-.2-.3-.3-.4l-93.3-93.3c-1.5-1.5-3.5-2.3-5.7-2.3H416v96h142zM160 464c26.5 0 48-21.5 48-48s-21.5-48-48-48-48 21.5-48 48 21.5 48 48 48zm320-96c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.5-48-48-48z" />
    </svg>
);

export default SvgTruckDroplet;
