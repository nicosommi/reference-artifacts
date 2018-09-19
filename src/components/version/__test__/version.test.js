// @flow
import * as React from "react"

import { JestMockFn } from "jest"
import Version from "../"

import type { Props, State } from "../"
import { ShallowWrapper, shallow } from "enzyme"

describe("Version component ", () => {
  describe("onTouch", () => {
    let spy: JestMockFn
    let wrapper: ShallowWrapper<Version, Props, State>

    beforeEach(() => {
      spy = jest.fn()
      wrapper = shallow<Version, Props, State>(
        <Version version="2.354.3347-alpha4" onPress={spy} />
      )
      wrapper.find("Button").simulate("press")
    })

    it("should render the version prop", () => {
      expect(spy.mock.calls.length).toBe(1)
    })

    it("should increment the clicks", () => {
      expect(wrapper.state().clicks).toBe(1)
    })

    it("should refresh clicks after a touch", () => {
      expect(wrapper).toMatchSnapshot()
    })
  })
})
