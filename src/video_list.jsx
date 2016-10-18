import React, { Component } from "react";

import VideoListItem from "./video_list_item.jsx";

export default class VideoList extends Component {
	constructor(props){
		super(props)
	}
	render(){
		return(
			<ul className="col-md-4 list-group">
				{this.props.videos.map( (c, index) => 
					<VideoListItem 
					key={index}
					video={c}
					onVideoSelect={this.props.onVideoSelect}
					/> )}
			</ul>
		);
	}
}