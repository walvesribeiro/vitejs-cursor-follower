function toSVGPoint(svg: SVGGraphicsElement, x: number, y: number) {
  let point = new DOMPoint(x, y);
  return point.matrixTransform(svg.getScreenCTM()!.inverse());
}

export function setupMouseMove(
  svg: SVGGraphicsElement,
  line: SVGGraphicsElement
) {
  document.addEventListener('mousemove', (e) => {
    let point = toSVGPoint(svg, e.clientX, e.clientY);
    line.setAttribute('x2', `${point.x}`);
    line.setAttribute('y2', `${point.y}`);
  });
}
