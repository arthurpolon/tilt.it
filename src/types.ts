import { RefObject, CSSProperties } from 'react';

export interface IPolonTiltParams {
  ref: RefObject<any | null | undefined>;
  options: {
    rotationAmount: number;
    scaleAmount: number;
    scaleOnClickAmount: number;
    animationDelay: number;
    animationTimingFunction: CSSProperties['transitionTimingFunction'];
  };
}

export interface IPolonTiltParams {
  ref: RefObject<any | null | undefined>;
  options: {
    rotationAmount: number;
    scaleAmount: number;
    scaleOnClickAmount: number;
    animationDelay: number;
    animationTimingFunction: CSSProperties['transitionTimingFunction'];
  };
}