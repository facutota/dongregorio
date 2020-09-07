import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry'
import './App.css';



class App extends Component {
	
	constructor(){
		super()
		this.state = {
			camiones: [],
			searchfield: ''
		}
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => this.setState({ camiones: users}));
	}

	onSearchChange = (event) => {
		this.setState( {searchfield: event.target.value} )		
	}

	render(){
		const { caminones, searchfield } = this.state;
		const filteredCamiones = camiones.filter(camion => {
			return camion.name.toLowerCase().includes(searchfield.toLowerCase());
		})
		
			return !camiones.length ?
				<h1> Loading </h1> :
				 (
					<div className = 'tc'>
						<h1 className='f2' >Camiones Don Gregorio</h1>
						<SearchBox searchChange={this.onSearchChange} />
						<Scroll>
							<ErrorBoundry>
								<CardList camiones={filteredCamiones} />
							</ErrorBoundry>
						</Scroll>

					</div>
					);
		}
		

	}
	

export default App;
