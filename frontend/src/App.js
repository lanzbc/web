import logo from './image/logo.png';
import wave from './image/wave.png';


import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import axios from "axios";
import React, { Component, useState } from "react";


import styled from "styled-components";
import {Nav, NavItem, Dropdown,  DropdownToggle, DropdownMenu, DropdownItem , Label, Input, Table } from 'reactstrap';
import {Slider, RangeSlider} from 'reactrangeslider';
import TimeRangeSlider from 'react-time-range-slider';
import Time from 'react-time'

import Basic from "./components/Basic";

const Styles = styled.div`

`;

class App extends Component {
  constructor(props) {
    super(props);
      this.featureRef = React.createRef();
      this.changeStartHandler = this.changeStartHandler.bind(this);
      this.timeChangeHandler = this.timeChangeHandler.bind(this);
      this.changeCompleteHandler = this.changeCompleteHandler.bind(this);
      this.state = {
          value: {
              start: "00:00",
              end: "23:59"
          }
      }
    
  }


  changeStartHandler(time){
      console.log("Start Handler Called", time);
  }

  timeChangeHandler(time){
      this.setState({
          value: time
      });
  }

  changeCompleteHandler(time){
      console.log("Complete Handler Called", time);
  }

  
  // componentDidMount() {
  //   this.refreshList();
  // }
  // refreshList = () => {
  //   axios
  //     .get("http://localhost:8000/api/todos/")
  //     .then(res => this.setState({ todoList: res.data }))
  //     .catch(err => console.log(err));
  // };
  // displayCompleted = status => {
  //   if (status) {
  //     return this.setState({ viewCompleted: true });
  //   }
  //   return this.setState({ viewCompleted: false });
  // };
  // renderTabList = () => {
  //   return (
  //     <div className="my-5 tab-list">
  //       <span
  //         onClick={() => this.displayCompleted(true)}
  //         className={this.state.viewCompleted ? "active" : ""}
  //       >
  //         complete
  //       </span>
  //       <span
  //         onClick={() => this.displayCompleted(false)}
  //         className={this.state.viewCompleted ? "" : "active"}
  //       >
  //         Incomplete
  //       </span>
  //     </div>
  //   );
  // };
  // renderItems = () => {
  //   const { viewCompleted } = this.state;
  //   const newItems = this.state.todoList.filter(
  //     item => item.completed === viewCompleted
  //   );
  //   return newItems.map(item => (
  //     <li
  //       key={item.id}
  //       className="list-group-item d-flex justify-content-between align-items-center"
  //     >
  //       <span
  //         className={`todo-title mr-2 ${
  //           this.state.viewCompleted ? "completed-todo" : ""
  //         }`}
  //         title={item.description}
  //       >
  //         {item.title}
  //       </span>
  //       <span>
  //         <button
  //           onClick={() => this.editItem(item)}
  //           className="btn btn-secondary mr-2"
  //         >
  //           {" "}
  //           Edit{" "}
  //         </button>
  //         <button
  //           onClick={() => this.handleDelete(item)}
  //           className="btn btn-danger"
  //         >
  //           Delete{" "}
  //         </button>
  //       </span>
  //     </li>
  //   ));
  // };
  // createItem = () => {
  //   const item = { title: "", description: "", completed: false };
  //   this.setState({ activeItem: item, modal: !this.state.modal });
  // };
  // editItem = item => {
  //   this.setState({ activeItem: item, modal: !this.state.modal });
  // };
  // toggle = () => {
  //   this.setState({ modal: !this.state.modal });
  // };
  handleSubmit = item => {
    this.toggle();
    if (item.id) {
      axios
        .put(`http://localhost:8000/api/todos/${item.id}/`, item)
        .then(res => this.refreshList());
      return;
    }
    axios
      .post("http://localhost:8000/api/todos/", item)
      .then(res => this.refreshList());
  };
  handleDelete = item => {
    axios
      .delete(`http://localhost:8000/api/todos/${item.id}`)
      .then(res => this.refreshList());
  };



//===========================================================================================

  render() {
    let now = new Date()
    let wasDate = new Date("Thu Jul 18 2013 15:48:59 GMT+0400")
    return (
      <main className="content">
        <div className="row ">
          <div className="col-md-10 col-sm-10 mx-auto p-0">
              <Table size="sm">
              <tr>
                <th>
                  <p class="left">
                  <h1>
                    <span class="contentHeader">CONVERT SOUND  </span>
                    <img height = '50' src={wave} alt="logo" />
                  </h1>
                  <div>
                    <p>Today: <Time value={now} format="YYYY/MM/DD HH:mm:ss" /></p>
                  </div>
                  </p>          
                </th>
                <th>
                <p class="right">
                  <img height = '50' src={logo} alt="logo" />
                </p>
                </th>
              </tr>
              </Table>

            <div className="card p-3">
            
            <div id="drop-area">
              <form class="my-form">
                    <Styles>
                        <div className="test1">
                            <Basic /> 
                        </div>
                    </Styles> 
              </form>
            </div>
            


            
            <div id="content1">
            <h3 for="exampleText" size="lg">File information:</h3>
            <Table size="sm">
              <thead>
                <tr>
                  <th width= '400'>Item</th>
                  <th width= '800'>Value</th>
                  <th width= '200'>Unit</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Size</th>
                  <td>-</td>
                  <td>Kb</td>
                </tr>
                <tr>
                  <th scope="row">Bit rate</th>
                  <td>-</td>
                  <td>kbps</td>
                </tr>
                <tr>
                  <th scope="row">Sampling frequency</th>
                  <td>-</td>
                  <td>kHz</td>
                </tr>
                <tr>
                  <th scope="row">Byte per second</th>
                  <td>-</td>
                  <td>Byte/s</td>
                </tr>
                <tr>
                  <th scope="row">Bit per sample</th>
                  <td>-</td>
                  <td>Bit/sample</td>
                </tr>
                <tr>
                  <th scope="row">Length</th>
                  <td>hh:mm:ss</td>
                  <td>-</td>
                </tr>
                <tr>
                  <th scope="row">Creation date</th>
                  <td>y/m/d hh:mm:ss</td>
                  <td>-</td>
                </tr>
                <tr>
                  <th scope="row">Update date</th>
                  <td>y/m/d hh:mm:ss</td>
                  <td>-</td>
                </tr>
                <tr>
                  <th scope="row">Sound type</th>
                  <td>Stereo</td>
                  <td>-</td>
                </tr>
              </tbody>
            </Table>
            <Label for="exampleText" size="lg">Initial Audio</Label><br/>
            <audio controls>
              <source src="audio.mp3" type="audio/mpeg"/>
            </audio>
            <br/><br/>






            <h3 for="exampleText" size="lg">Convert setting:</h3>
            <Table size="sm">
              <thead>
                <tr>
                  <th width= '400'>Item</th>
                  <th width= '800'>Value</th>
                  <th width= '200'>Unit</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Sampling frequency</th>
                  
                  <td>
                      <Dropdown group isOpen={this.state.dropdownOpen} size="sm" color = "white" toggle={this.toggle}>
                        <DropdownToggle caret>
                          32
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem header>Header</DropdownItem>
                          <DropdownItem disabled>Action</DropdownItem>
                          <DropdownItem>Another Action</DropdownItem>
                          <DropdownItem divider/>
                        </DropdownMenu>
                      </Dropdown>
                  </td>
                  <td>kHz</td>
                </tr>
                <tr>
                  <th scope="row">Byte per second</th>
                  <td> 128</td>
                  <td>Byte/s</td>
                </tr>
                <tr>
                  <th scope="row">Length</th>
                  <td>

                  {/* <div>
                    <RangeSlider 
                    defaultValue = {this.props.value}
                    step={ 5 } 
                    min={0}
                    max={240}
                    />
                  </div> */}
                  <span>
                    
                  </span>

                  <div>
                  <p> 
                    <span class="slider-time">00:00:00</span> - <span class="slider-time2">00:00:00</span>

                  </p>
                    <TimeRangeSlider
                      disabled={false}
                      format={24}
                      maxValue={"23:59"}
                      minValue={"00:00"}
                      name={"time_range"}
                      onChangeStart={this.changeStartHandler}
                      onChangeComplete={this.changeCompleteHandler}
                      onChange={this.timeChangeHandler}
                      step={15}
                      value={this.state.value}/>
                  </div>

                  {/* <input
                  type="range"
                  value={this.props.value}
                  min={this.props.min}
                  max={this.props.max}
                  on Input={this .props .handleChange}
                  step={this.props.step} /> */}


                  </td>
                  <td>-</td>
                </tr>
                <tr>
                  <th scope="row">Sound type</th>
                  <td><Dropdown group isOpen={this.state.dropdownOpen} size="sm" color = "white" toggle={this.toggle}>
                    <DropdownToggle caret>
                      Stereo
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem header>Header</DropdownItem>
                      <DropdownItem disabled>Action</DropdownItem>
                      <DropdownItem>Another Action</DropdownItem>
                      <DropdownItem divider/>
                    </DropdownMenu>
                  </Dropdown></td>
                  <td>-</td>
                </tr>
                <tr>
                  <th scope="row">File type</th>
                  <td><Dropdown group isOpen={this.state.dropdownOpen} size="sm" color = "white" toggle={this.toggle}>
                    <DropdownToggle caret>
                      csv
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem header>Header</DropdownItem>
                      <DropdownItem disabled>Action</DropdownItem>
                      <DropdownItem>Another Action</DropdownItem>
                      <DropdownItem divider/>
                    </DropdownMenu>
                  </Dropdown></td>
                  <td>-</td>
                </tr>
                <tr>
                  <th scope="row">Data coversion operation</th>
                  <td><Dropdown group isOpen={this.state.dropdownOpen} size="sm" toggle={this.toggle}>
                    <DropdownToggle caret>
                      Complement-Raw
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem header>Header</DropdownItem>
                      <DropdownItem disabled>Action</DropdownItem>
                      <DropdownItem>Another Action</DropdownItem>
                      <DropdownItem divider/>
                    </DropdownMenu>
                  </Dropdown></td>
                  <td>-</td>
                </tr>
              </tbody>
            </Table>
            <Label for="exampleText" size="lg">Audio Convert</Label><br/>
            <audio controls>
              <source src="horse.mp3" type="audio/mpeg"/>
            </audio>

            <div className="">
              <p class="right">
                <button onClick={this.createItem} className="btn btn-primary">
                  Convert file
                </button>{' '}
                <button onClick={this.createItem} className="btn btn-primary">
                  Export file
                </button>
              </p>  
            </div>


            <p class="center" >
              <div className="text-success">
                Convert done!
              </div>
            </p> 
            </div>
             
              <ul className="list-group list-group-flush">
              </ul>
            </div>
          </div>
        </div>

        <div class="footer-copyright text-center py-3">© 2020 Copyright:
          <a href="https://www.facebook.com/DiamondElectricVietnamCoLtd/"> Diamond Electric Viet Nam</a>
        </div>
      </main>
    );
  }
}
export default App;