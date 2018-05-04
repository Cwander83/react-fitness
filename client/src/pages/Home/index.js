import React, {Component} from 'react';
import './style.css';
import {NavLink} from "react-router-dom";
import GithubCorner from 'react-github-corner';
import Wrapper from '../../components/Wrapper';
import {DropdownItem, DropdownMenu, UncontrolledDropdown, DropdownToggle, Dropdown} from 'reactstrap';

class Home extends Component {
	constructor(props) {
		super(props);

		this.toggle = this
			.toggle
			.bind(this);
			this.state = {
				dropdownOpen: false
			};
		}

	toggle() {
		this.setState({
			dropdownOpen: !this.state.dropdownOpen
					});
		}
	render() {
		return (
			<Wrapper>
					<GithubCorner href="https://github.com/username/repo"/>	
            <div className='box'>
		        <h1 className='mainH1'>4 week Revolution</h1>
					<ul>
						<li><NavLink to="/dashboard" style={{color: 'white'}} activeStyle={{color: 'white'}}>Dashboard</NavLink></li>
						<li><NavLink to="/calendar" style={{color: 'white'}} activeStyle={{color: 'white'}}>Calendar</NavLink></li>
						<li>
    <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
		<DropdownToggle
			tag="span"
			onClick={this.toggle}
			data-toggle="dropdown"
			aria-expanded={this.state.dropdownOpen}>
			Workout Plan
		</DropdownToggle>
		<DropdownMenu>
		<UncontrolledDropdown>
	<DropdownToggle nav>
			week 1
	</DropdownToggle>			
	</UncontrolledDropdown>
	<DropdownItem divider/>
	<UncontrolledDropdown>
	<DropdownToggle nav>
			week 2
	</DropdownToggle>			
	</UncontrolledDropdown>
			<DropdownItem divider/>
	<UncontrolledDropdown nav>
	<DropdownToggle nav>
		week 3
	</DropdownToggle>
											
	</UncontrolledDropdown>
	<DropdownItem divider/>
	<UncontrolledDropdown nav>
	<DropdownToggle nav>
							week 4
</DropdownToggle>

</UncontrolledDropdown>
	</DropdownMenu>
	</Dropdown>
							</li>
					</ul>
			</div>
	</Wrapper>
				
				)
		}
	
};

export default Home;