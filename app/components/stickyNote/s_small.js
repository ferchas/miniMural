import React, { Component } from 'react';

class StickyNoteSmall extends Component  {

  constructor(props) {
    super(props);
    this.idSelected = false ;
    this.state = {
      title: '',
      note: '',
      disabled: 'disabled',
      class: 'sticky-note',
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentWillReceiveProps(nextProps){
    console.log("nextProps", nextProps);
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

  handleClick(e) {
    this.props.selectMyNote(this.props.id);
    this.setState({class: 'sticky-note-selected sticky-note'});
    // console.log("handleClick", this.props.selectSN);
  }


	render(){
		return(
			<div
        className={this.state.class}
        onDoubleClick={(event)=>this.handleDoubleClick(event)}
        onClick={this.handleClick}
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
