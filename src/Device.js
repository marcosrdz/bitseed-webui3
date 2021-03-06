import React, { Component } from 'react'
import AddressesPanel from './Panels/AddressesPanel'
import DeviceInformationPanel from './Panels/DeviceInformationPanel'

export default class Device extends Component {
  render() {
    return (
      <React.Fragment>
        <DeviceInformationPanel />
        <br />
        <AddressesPanel />
      </React.Fragment>
    )
  }
}
