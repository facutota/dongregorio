import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import Logo from '../components/logo/Logo';
import './App.css';

import {setSearchField, requestCamiones } from '../actions';

const mapStateToProps = state => {
	return {
		searchField: state.searchCamiones.searchField,
		camiones: state.requestCamiones.camiones,
		isPending: state.requestCamiones.isPending,
		error: state.requestCamiones.error
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
		onRequestCamiones: () => dispatch(requestCamiones())
	}
}

class App extends Component {
	
	componentDidMount(){
		this.props.onRequestCamiones();
	}

	

	render(){
		const { searchField, onSearchChange, camiones, isPending } = this.props;
		const filteredCamiones = camiones.filter(camion => {
			return camion.name.toLowerCase().includes(searchField.toLowerCase());
		})

		return isPending ?
			<h1> Loading </h1> :
		 	(
					<div className = 'tc'>	
						<Logo />					
						<h1 className='f2' >Camiones Don Gregorio</h1>
						
						<SearchBox searchChange={onSearchChange} />
						<Scroll>
							<CardList camiones={filteredCamiones} />
						</Scroll>

					</div>
			);
		}
		

	}
	

export default connect(mapStateToProps, mapDispatchToProps)(App);
