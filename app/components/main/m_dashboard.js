import React, { Component } from 'react';

import StickyNoteSmall from '../stickyNote/s_small';

class Dashboard extends Component  {

  constructor(props) {
    super(props);
    this.selectNote = [];
    this.toCopy = [];
    this.keyPressShift = false;
    this.state = {
      stickys: [],
    };
    // set bin at function
    this.selectMyNote = this.selectMyNote.bind(this);
  }

  addStickyNote() {
    this.setState({stickys: this.state.stickys.concat(
      <StickyNoteSmall
        key={this.state.stickys.length}
        id={this.state.stickys.length + 1}
        selectSN={this.selectNote}
        selectMyNote={this.selectMyNote}
      />)
    });
  }

  selectMyNote(keyComp) {
    if(!this.keyPressShift) {
      this.selectNote = [keyComp];
    } else if(!this.selectNote.find((e) => e === keyComp)) {
      this.selectNote.push(keyComp);
    }
  }

  cloneStickyNote(){
    const stickyNoteList = this.toCopy.map((e)=> {
      return this.state.stickys[e -1];
    });
    
    const newStick = stickyNoteList.map((child, index) => {
      const keyComp = this.state.stickys.length +  index + 1;
      const id = this.state.stickys.length + index + 1;
      return React.cloneElement(child, {
        key:keyComp,
        id:id,
        selectSN: this.selectNote,
        selectMyNote:this.selectMyNote,
      });
    });
    console.log(newStick);
    this.setState({stickys: this.state.stickys.concat(newStick)});
  }

  // ---- Handle Events ----
  handleDoubleClick() {
    this.addStickyNote();
  }

  handleKeyDown(event) {
    let charCode = String.fromCharCode(event.which).toLowerCase();
    // add to buff stycky that will be copied
    if((event.ctrlKey || event.metaKey) && charCode === 'c') {
      this.toCopy = this.selectNote;
    }
    // copy Sticky note
    if((event.ctrlKey || event.metaKey) && charCode === 'v') {
      this.cloneStickyNote();
    }
    // code shift 16
    if(event.which === 16) {
      this.keyPressShift = true;
    }
  }

  handleKeyUp(e) {
    this.keyPressShift= false;
  }

	render(){
		return(
      <div className="dashboard" tabIndex="1"
        onDoubleClick={()=> this.handleDoubleClick ()}
        onKeyDown={(event)=>this.handleKeyDown(event)}
        onKeyUp={(event)=>this.handleKeyUp(event)}
      >
        {this.state.stickys}
        <p>Double click to add a sticky note</p>
      </div>
		);
	}
}

module.exports = Dashboard;
