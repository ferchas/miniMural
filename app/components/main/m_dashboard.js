import React, { Component } from 'react';

import StickyNoteSmall from '../stickyNote/s_small';

class Dashboard extends Component  {

  constructor(props) {
    super(props);
    this.stickys = [];
  }

  addStickyNote() {

    this.stickys.push(<StickyNoteSmall key={this.stickys.length} title='New Note'/>);
    this.forceUpdate();
    console.log(this.stickys);
  }

  handleDoubleClick() {
    this.addStickyNote();
  }

	render(){
		return(
      <div className="dashboard" onDoubleClick={()=> this.handleDoubleClick ()}>
        {this.stickys}
        <p>Double click to add a sticky</p>
      </div>
		);
	}
}

module.exports = Dashboard;
