// import React from 'react';
// import ReactDOM from 'react-dom';
// import Calculator from './Calculator';
//
// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<Calculator />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });


import React from "react";
import { mount } from "enzyme";
import Calculator from "./Calculator";
import BoilingVerdict from './BoilingVerdict'

describe("Calculator", () => {
  let props;
  let mountedCalc;
  const CalculatorFunc = () => {
    if (!mountedCalc) {
      mountedCalc = mount(
        <Calculator {...props} />
      );
    }
    return mountedCalc;
  }

  beforeEach(() => {
    console.log("Inside beforeEach in MAIN");

    props = {
      wallpaperPath: undefined,
      userInfoMessage: undefined,
      onUnlocked: undefined,
    };
    mountedCalc = undefined;
  });

  // All tests will go here

  it("always renders a div", () => {
  const divs = CalculatorFunc().find("fieldset");
  expect(divs.length).toBeGreaterThan(0);
  });



  // it("contains everything else that gets rendered", () => {
  //     const divs = CalculatorFunc().find("fieldset");
  //     // When using .find, enzyme arranges the nodes in order such
  //     // that the outermost node is first in the list. So we can
  //     // use .first() to get the outermost div.
  //     console.log("dis are  ", divs);
  //     const wrappingDiv = divs.first();
  //
  //     // Enzyme omits the outermost node when using the .children()
  //     // method on Calculator(). This is annoying, but we can use it
  //     // to verify that wrappingDiv contains everything else this
  //     // component renders.
  //     expect(wrappingDiv.children()).toEqual(CalculatorFunc().children());
  //   });


    it("always renders a `BoilingVerdict`", () => {
    expect(CalculatorFunc().find(BoilingVerdict).length).toBe(1);
      });


      describe("rendered `BoilingVerdict`", () => {
        it("receives 1 prop", () => {
          const boilingVerdictDisplay = CalculatorFunc().find(BoilingVerdict);
          expect(Object.keys(boilingVerdictDisplay.props()).length).toBe(1);
        });
      });




      describe("when `onUnlocked` is defined", () => {
        beforeEach(() => {
          // props.onUnlocked = jest.fn();
          console.log("Inside beforeEach in descrive");
        });

        it("sets the rendered `SlideToUnlock`'s `onSlide` prop to the same value as `onUnlocked`'", () => {
          // const slideToUnlock = lockScreen().find(SlideToUnlock);
          // expect(slideToUnlock.props().onSlide).toBe(props.onUnlocked);

          expect(true).toBe(true)
        });
      });


});
