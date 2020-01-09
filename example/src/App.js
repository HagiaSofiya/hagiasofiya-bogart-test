import React, { Component } from 'react'

import { Button, CodeButton, LinkButton, FaucetRequestButton } from 'hagiasofiya-bogart-test'

export default class App extends Component {
	render() {
		return (
			<div>
				<Button text="Button" />
				<CodeButton text="Code Button" />
				<FaucetRequestButton text="Faucet Request Button" />
				<br></br>
				<LinkButton text="Link Button" />
			</div>
		)
	}
}