// @flow
import * as React from "react"

import { JestMockFn } from "jest"
import Version from "../"

import type { Props, State } from "../"
import { ShallowWrapper, shallow } from "enzyme"

describe("Version component ", () => {
  describe("(happy path)", () => {
    let spy: JestMockFn
    let wrapper: ShallowWrapper<Version, Props, State>

    beforeEach(() => {
      spy = jest.fn()
      wrapper = shallow<Version, Props, State>(
        <Version version="2.354.3347-alpha4" onPress={spy} />
      )
    })

    it("should call the handler when the button is pressed", () => {
      expect(spy.mock.calls.length).toBe(0)
      wrapper.find("Button").simulate("press")
      expect(spy.mock.calls.length).toBe(1)
    })

    it("should increment the clicks when the button state is pressed", () => {
      expect(wrapper.state().clicks).toBe(0)
      wrapper.find("Button").simulate("press")
      expect(wrapper.state().clicks).toBe(1)
    })

    it("should render properly", () => {
      expect(wrapper).toMatchSnapshot()
      wrapper.find("Button").simulate("press")
      expect(wrapper).toMatchSnapshot()
    })
  })
})
