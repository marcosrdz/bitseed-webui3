

import React, { Component } from 'react'
import { Button } from 'reactstrap'
import APIClient from '../APIClient'
import PanelHeader from './PanelHeader'

export default class ExplorerPanel extends Component {

  constructor(props) {
    super()
    this.state = {
      panelHeaderShowLoadingIndicator: false
    }
  }
  componentWillUnmount() {
    clearInterval(this.interval)
  }

  componentDidMount() {
   // this.interval = setInterval(() => this.getNetworkInformation(), 1000)
  }

  render() {
    return (
      <div style={{ textAlign: 'center'}}>
      <div style={{ width: '60%',   marginLeft: 'auto', marginRight: 'auto', textAlign: 'left'}}>
      <PanelHeader title="Explorer" subtitle="Bitcoin Blockchain"/>
      </div>
    </div>
    )
  }
}