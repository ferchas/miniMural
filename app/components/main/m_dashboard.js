import React, { Component } from 'react';

import StickyNoteSmall from '../stickyNote/s_small';

class Dashboard extends Component  {

  constructor(props) {
    super(props);
    this.toCopy = [];
    this.keyPressShift = false;
    this.state = {
      stickys: [],
    };
  }

  addStickyNote() {
    this.setState({stickys: this.state.stickys.concat(
      {
        id: this.state.stickys.length +1,
        selected: false,
        title: '',
        note: '',
      }
    )});
  }

  selectMyNote(keyComp) {
    const stickys = this.state.stickys.map((st, index) => {
      if(!this.keyPressShift) {
        st.selected = (index === (keyComp-1))? true: false;
      }
      else if(index === (keyComp-1)) {
        // multimple select
        st.selected = true;
      }
      return st;
    });
    this.setState({stickys: stickys});

  }

  changeText(e) {
    let stickys = this.state.stickys;
    stickys[e.id - 1].title = e.title;
    stickys[e.id - 1].note = e.note;
    this.setState({stickys: stickys});
  }

  toCopyNote() {
    this.toCopy = this.state.stickys.filter((st) => {
      return st.selected;
    });

  }

  cloneStickyNote() {
    let count = this.state.stickys.length;
    let newSticky = [];
    this.toCopy.forEach((e)=> {
      const data_copy = JSON.parse(JSON.stringify(e));
      count++;
      data_copy.id = count;
      newSticky.push(data_copy);
    });
    this.setState({stickys: this.state.stickys.concat(newSticky)});


  }

  // ---- Handle Events ----
  handleDoubleClick() {
    this.addStickyNote();
  }

  handleKeyDown(e) {
    let charCode = String.fromCharCode(e.which).toLowerCase();
    // add to buff stycky that will be copied
    if((e.ctrlKey || e.metaKey) && charCode === 'c') {
      this.toCopyNote();
    }
    // copy Sticky note
    if((e.ctrlKey || e.metaKey) && charCode === 'v') {
      this.cloneStickyNote();
    }
    // code shift 16
    if(e.which === 16) {
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
          {this.state.stickys.map((noteSt) =>{
            return (
              <StickyNoteSmall
                key={noteSt.id}
                id={noteSt.id}
                selected={noteSt.selected}
                title={noteSt.title}
                note={noteSt.note}
                selectMyNote={(e)=>this.selectMyNote(e)}
                changeText={(e)=>this.changeText(e)}
              />
            );
          })}
          <p>Double click to add a sticky note</p>
        </div>
		);
	}
}

module.exports = Dashboard;
