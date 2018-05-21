import React, {Component} from 'react';
import "../../styles/style.css";
//import {NavLink} from "react-router-dom";
import {DropdownItem, DropdownMenu, UncontrolledDropdown, DropdownToggle, Dropdown} from 'reactstrap';


class WeeksDropDown extends Component {
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




render (){
return (
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
)
}
}

export default WeeksDropDown;