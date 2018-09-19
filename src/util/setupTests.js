require("react-native-mock-render/mock")

import Adapter from "enzyme-adapter-react-16"
import Enzyme from "enzyme"

jest.mock("react-native", () => require("react-native-mock-render"), {
  virtual: true
})

Enzyme.configure({ adapter: new Adapter() })
