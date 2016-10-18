import React, { Component } from "react";

export default class SearchBar extends Component {
	constructor(props) {
		super(props)
		this.state = { term: "" };
		this.handleChange = this.handleChange.bind(this)
	}
	handleChange(e){
		this.setState({term: e.target.value})
		this.props.onSearchTermChange(this.state.term)
	}
	render() {
		return (
			<div>
				<input 
				onChange={this.handleChange}
				value={this.state.term}
				/>
			</div>
		);
	}
}