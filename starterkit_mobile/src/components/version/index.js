// @flow
import * as React from "react"
import { Button, Text } from "react-native"

export type Props = {
  version: string,
  onPress: () => void
}

export type State = {
  clicks: number
}

/**
 * Component that shows the current version of the application and count clicks
 * @export default
 * @class Version
 * @memberof Components
 * @extends {React.Component<Props, State>}
 * @param {String} version version of the app
 * @param {Function} onPress on press button handler function
 */
export default class Version extends React.Component<Props, State> {
  state = {
    clicks: 0
  }

  increment = () => {
    this.setState({ clicks: this.state.clicks + 1 }, () => {
      this.props.onPress()
    })
  }

  render() {
    const { version } = this.props
    const { clicks } = this.state
    return (
      <React.Fragment>
        <Button title="Press me" onPress={this.increment} />
        <Text>Version {version}</Text>
        <Text>Clicks {clicks}</Text>
      </React.Fragment>
    )
  }
}
