import React, {Component} from 'react';
import './App.css';
//import image from './images/gym-background.jpg';
import GithubCorner from 'react-github-corner';
import {DropdownItem, DropdownMenu, UncontrolledDropdown, DropdownToggle, Dropdown} from 'reactstrap';

class App extends Component {
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
      <div className='wrapper'>
        <GithubCorner href="https://github.com/username/repo"/>

        <div className='box'>
          <h1 className='mainH1'>4 week Revolution</h1>
          <ul>
            <li>About</li>
            <li>Calendar</li>
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
                    <DropdownMenu >
                      <DropdownItem>
                        day 1
                      </DropdownItem>
                      <DropdownItem divider/>
                      <DropdownItem>
                        day 2
                      </DropdownItem>
                      <DropdownItem divider/>
                      <DropdownItem>
                        day 3
                      </DropdownItem>
                      <DropdownItem divider/>
                      <DropdownItem>
                        day 4
                      </DropdownItem>
                      <DropdownItem divider/>
                      <DropdownItem>
                        day 5
                      </DropdownItem>
                      <DropdownItem divider/>
                      <DropdownItem>
                        day 6
                      </DropdownItem>
                      <DropdownItem divider/>
                      <DropdownItem>
                        day 7
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>

                  <DropdownItem divider/>
                  <UncontrolledDropdown>
                    <DropdownToggle nav>
                      week 2
                    </DropdownToggle>
                    <DropdownMenu >
                      <DropdownItem>
                        day 1
                      </DropdownItem>
                      <DropdownItem divider/>
                      <DropdownItem>
                        day 2
                      </DropdownItem>
                      <DropdownItem divider/>
                      <DropdownItem>
                        day 3
                      </DropdownItem>
                      <DropdownItem divider/>
                      <DropdownItem>
                        day 4
                      </DropdownItem>
                      <DropdownItem divider/>
                      <DropdownItem>
                        day 5
                      </DropdownItem>
                      <DropdownItem divider/>
                      <DropdownItem>
                        day 6
                      </DropdownItem>
                      <DropdownItem divider/>
                      <DropdownItem>
                        day 7
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  <DropdownItem divider/>
                  <UncontrolledDropdown nav>
                    <DropdownToggle nav>
                      week 3
                    </DropdownToggle>
                    <DropdownMenu >
                      <DropdownItem>
                        day 1
                      </DropdownItem>
                      <DropdownItem divider/>
                      <DropdownItem>
                        day 2
                      </DropdownItem>
                      <DropdownItem divider/>
                      <DropdownItem>
                        day 3
                      </DropdownItem>
                      <DropdownItem divider/>
                      <DropdownItem>
                        day 4
                      </DropdownItem>
                      <DropdownItem divider/>
                      <DropdownItem>
                        day 5
                      </DropdownItem>
                      <DropdownItem divider/>
                      <DropdownItem>
                        day 6
                      </DropdownItem>
                      <DropdownItem divider/>
                      <DropdownItem>
                        day 7
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  <DropdownItem divider/>
                  <UncontrolledDropdown nav>
                    <DropdownToggle nav>
                      week 4
                    </DropdownToggle>
                    <DropdownMenu >
                      <DropdownItem>
                        day 1
                      </DropdownItem>
                      <DropdownItem divider/>
                      <DropdownItem>
                        day 2
                      </DropdownItem>
                      <DropdownItem divider/>
                      <DropdownItem>
                        day 3
                      </DropdownItem>
                      <DropdownItem divider/>
                      <DropdownItem>
                        day 4
                      </DropdownItem>
                      <DropdownItem divider/>
                      <DropdownItem>
                        day 5
                      </DropdownItem>
                      <DropdownItem divider/>
                      <DropdownItem>
                        day 6
                      </DropdownItem>
                      <DropdownItem divider/>
                      <DropdownItem>
                        day 7
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </DropdownMenu>
              </Dropdown>
            </li>
          </ul>
        </div>
      </div>
    );
  }
};

export default App;