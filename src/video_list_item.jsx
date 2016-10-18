import React, { Component } from "react";

export default class VideoListItem extends Component {
	constructor(props){
		super(props)
	}
	render(){
		return(
			<li className="list-group-item" onClick={() => this.props.onVideoSelect(this.props.video)}>
			<div className="video-list media">
				<div className="media-left">
					<img className="media-object" alt="video-thumbnail" src={this.props.video.snippet.thumbnails.default.url} />
				</div>

				<div className="media-body">
					<div className="media-heading">{this.props.video.snippet.title}</div>
				</div>

			</div>
		</li>
		);
	}
}

