import React, { Component } from 'react';

class StickyNoteSmall extends Component  {

  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      title: this.props.title,
      note: this.props.note,
      disabled: 'disabled',
    };
  }

  // componentWillReceiveProps(nextProps){
  //   console.log("nextProps", nextProps);
  // }

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
    this.props.changeText({
      title: this.state.title,
      note: this.state.note,
      id: this.state.id
    });
    this.setState({disabled:'disabled'});
  }

  handleClick(e) {
    this.props.selectMyNote(this.state.id);
  }


	render(){
		return(
			<div
        className={this.props.selected ? 'sticky-note-selected sticky-note': 'sticky-note'}
        onDoubleClick={(event)=>this.handleDoubleClick(event)}
        onClick={(event)=>this.handleClick(event)}
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
