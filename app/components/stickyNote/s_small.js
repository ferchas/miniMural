import React, { Component } from 'react';

class StickyNoteSmall extends Component  {
	render(){
		return(
			<div className="sticky-note">
        <h2>{this.props.title}</h2>
        <p>Double click to edit note</p>
      </div>
		);
	}
}

module.exports = StickyNoteSmall;
