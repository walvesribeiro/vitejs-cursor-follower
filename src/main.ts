import './style.css';
import { setupMouseMove } from './counter.ts';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<svg id="svg" xmlns="http://www.w3.org/2000/svg" viewBox="-150 -150 500 500">
  <circle cx="75" cy="25" r="20" fill="none" stroke="blue" />
  <circle cx="125" cy="25" r="20" fill="none" stroke="blue" />
  <line marker-start="url(#pupila)" id="line1" x1="75" y1="25" stroke="red" />
  <line marker-start="url(#pupila)" id="line2" x1="125" y1="25" stroke="red" />
  <defs>
    <marker id="pupila" viewBox="0 0 10 10" refX="16" refY="5" markerWidth="10"
      markerHeight="10" orient="auto-start-reverse">
      <rect width="10" height="10" fill="none" stroke="red"/>
      <circle fill="none" stroke="green" r="4" cy="5" cx="5" />
    </marker>
  </defs>
</svg>
`;

setupMouseMove(
  document.querySelector<SVGGraphicsElement>('#svg')!,
  document.querySelector<SVGGraphicsElement>('#line1')!
);
setupMouseMove(
  document.querySelector<SVGGraphicsElement>('#svg')!,
  document.querySelector<SVGGraphicsElement>('#line2')!
);
