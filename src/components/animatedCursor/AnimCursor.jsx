import React from "react";
import AnimatedCursor from "react-animated-cursor";

const AnimCursor = () => {
  return (
    <AnimatedCursor
      innerSize={8}
      outerSize={16}
      color="109, 22, 233"
      outerAlpha={0.5}
      innerScale={0.8}
      outerScale={4}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="password"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="tel"]',
        'input[type="url"]',
        'input[type="search"]',
        'input[type="date"]',
        'input[type="time"]',
        'input[type="datetime-local"]',
        'input[type="month"]',
        'input[type="week"]',
        'input[type="file"]',
        'input[type="color"]',
        'input[type="radio"]',
        'input[type="checkbox"]',
        'input[type="submit"]',
        'input[type="reset"]',
        'input[type="button"]',
        'input[type="image"]',
        'input[type="range"]',
        'input[type="hidden"]',
        'label[for]',
        'button',
        'select',
        'textarea',
        '.link'
      ]}
    />
  );
};

export default AnimCursor;
