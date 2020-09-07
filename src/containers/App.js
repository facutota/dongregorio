import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

import {setSearchField } from '../actions';

const mapStateToProps = state => {
	return {
		searchField: state.searchField
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onSearchChange: (event) => dispatch(setSearchField(event.target.value))
	}
}

class App extends Component {
	
	constructor(){
		super()
		this.state = {
			camiones: []		
		}
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => this.setState({ camiones: users}));
	}

	

	render(){
		const { camiones } = this.state;
		const { searchField, onSearchChange } = this.props;
		const filteredCamiones = camiones.filter(camion => {
			return camion.name.toLowerCase().includes(searchField.toLowerCase());
		})
		if(camiones.length === 0){
			return <h1> Loading </h1>
		}else{

			return (
					<div className = 'tc'>
						<h1 className='f2' >Camiones Don Gregorio</h1>
						<SearchBox searchChange={onSearchChange} />
						<Scroll>
							<CardList camiones={filteredCamiones} />
						</Scroll>

					</div>
					);
		}
		}

	}
	

export default connect(mapStateToProps, mapDispatchToProps)(App);
