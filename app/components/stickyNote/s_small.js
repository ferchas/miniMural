import React, { Component } from 'react';

class StickyNoteSmall extends Component  {

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      note: '',
      disabled: 'disabled',
    };
  }

  handleDoubleClick(e) {
   e.stopPropagation();
   this.setState({disabled:''});
  }

  handleChangeTitle(e) {
    this.setState({title: e.target.value});
  }

  handleChangeNote(e) {
    this.setState({note: e.target.value});
  }

  handleMouseLeave(e) {
     this.setState({disabled:'disabled'});
  }

	render(){
		return(
			<div className="sticky-note"
        onDoubleClick={(event)=>this.handleDoubleClick(event)}
        onMouseLeave={(event)=>this.handleMouseLeave(event)}
        >
        <input type="text" placeholder='New Note'
          value={this.state.title}
          onChange={(event)=>this.handleChangeTitle(event)}
          disabled={this.state.disabled}
        />
        <textarea placeholder="Double click to edit note"
          value={this.state.note}
          onChange={(event)=>this.handleChangeNote(event)}
          disabled={this.state.disabled}
        />
      </div>
		);
	}
}

module.exports = StickyNoteSmall;
