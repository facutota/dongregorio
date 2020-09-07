import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
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
		const filteredCamiones = this.state.camiones.filter(camion => {
			return camion.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
		if(this.state.camiones.length === 0){
			return <h1> Loading </h1>
		}else{

			return (
					<div className = 'tc'>
						<h1 className='f2' >Camiones Don Gregorio</h1>
						<SearchBox searchChange={this.onSearchChange} />
						<Scroll>
							<CardList camiones={filteredCamiones} />
						</Scroll>

					</div>
					);
		}
		}

	}
	

export default App;
