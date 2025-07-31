declare module 'react-slick' {
  import React from 'react';
  
  export interface Settings {
    accessibility?: boolean;
    adaptiveHeight?: boolean;
    arrows?: boolean;
    asNavFor?: any;
    autoplay?: boolean;
    autoplaySpeed?: number;
    centerMode?: boolean;
    centerPadding?: string;
    className?: string;
    cssEase?: string;
    customPaging?: (index: number) => React.ReactNode;
    dots?: boolean;
    dotsClass?: string;
    draggable?: boolean;
    easing?: string;
    edgeFriction?: number;
    fade?: boolean;
    focusOnSelect?: boolean;
    infinite?: boolean;
    initialSlide?: number;
    lazyLoad?: boolean | string;
    pauseOnDotsHover?: boolean;
    pauseOnFocus?: boolean;
    pauseOnHover?: boolean;
    responsive?: Array<{
      breakpoint: number;
      settings: Settings | 'unslick';
    }>;
    rtl?: boolean;
    slide?: string;
    slidesToScroll?: number;
    slidesToShow?: number;
    speed?: number;
    swipe?: boolean;
    swipeEvent?: (swipeDirection: string) => void;
    swipeToSlide?: boolean;
    touchMove?: boolean;
    touchThreshold?: number;
    useCSS?: boolean;
    useTransform?: boolean;
    variableWidth?: boolean;
    vertical?: boolean;
    verticalSwiping?: boolean;
    waitForAnimate?: boolean;
    afterChange?: (currentSlide: number) => void;
    beforeChange?: (currentSlide: number, nextSlide: number) => void;
    init?: () => void;
    onSwipe?: (swipeDirection: string) => void;
    onLazyLoad?: (slidesToLoad: number[]) => void;
    onReInit?: () => void;
    onSetPosition?: () => void;
    onEdge?: (swipeDirection: string) => void;
    onBeforeChange?: (oldIndex: number, newIndex: number) => void;
    onAfterChange?: (index: number) => void;
    prevArrow?: React.ReactNode;
    nextArrow?: React.ReactNode;
  }

  export interface SliderProps extends Settings {
    children?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
  }

  export default class Slider extends React.Component<SliderProps> {}
} 