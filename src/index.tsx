import { IPolonTiltParams } from "./types";

const PolonTilt = (
  ref: IPolonTiltParams['ref'],
  _options?: Partial<IPolonTiltParams['options']>
) => {
  const options: IPolonTiltParams['options'] = {
    scaleOnClickAmount: 0.9,
    rotationAmount: 40,
    scaleAmount: 1,
    animationDelay: 0.1,
    animationTimingFunction: '',
    ..._options,
  };

  if (ref.current) {
    ref.current.style.transition = `transform ${options.animationDelay}s ${options.animationTimingFunction}`;
  }

  const onMouseUp = () => {
    const element = ref.current!;

    element.style.transform = `perspective(500px) scale(${options.scaleAmount.toString()}) rotateX(0) rotateY(0)`;
  };

  const onMouseDown = () => {
    const element = ref.current!;

    element.style.transform = `perspective(500px) scale(${options.scaleOnClickAmount.toString()}) rotateX(0) rotateY(0)`;
  };

  const onMouseOut = () => {
    const element = ref.current!;

    element.style.transform = 'perspective(500px) scale(1) rotateX(0) rotateY(0)';
  };

  const onMouseMove = (e: any) => {
    const element = ref.current!;

    const elementHeight = element.clientHeight;
    const elementWidth = element.clientWidth;

    const mousePositionX = e.nativeEvent.layerX;
    const mousePositionY = e.nativeEvent.layerY;

    const rotationX =
      -options.rotationAmount * ((mousePositionY - elementHeight / 2) / elementHeight);
    const rotationY = options.rotationAmount * ((mousePositionX - elementWidth / 2) / elementWidth);

    element.style.transform = `perspective(500px) scale(${options.scaleAmount.toString()}) rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
  };

  return {
    ref,
    onMouseMove,
    onMouseOut,
    onMouseDown,
    onMouseUp,
  };
};

export default PolonTilt;
