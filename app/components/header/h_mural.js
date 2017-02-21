import React, { Component } from 'react';

class Header extends Component  {
	render(){
		return(
			<header>
				<div className="header-logo">
					<a  href="/">
						<img width="165" height="auto" className="header-logo" src="https://mural.co/public/assets/images/logo.svg" alt="Mural" />
					</a>
				</div>
      </header>
		);
	}
}

module.exports = Header;
