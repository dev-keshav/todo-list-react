import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { setState } from 'react';
import axios from 'axios'

import React, { Component } from 'react'
import Plan from './Plan';

class App extends Component {

  state = {
    items:[],
    text:""
  }

  handleChange = e => {
    this.setState({text: e.target.value})
  }

  handleAdd = e => {
    if(this.state.text !== ""){
      const items = [...this.state.items, this.state.text];
      this.setState({items: items, text: ""});

      // Database Google sheet
      // -------------------------------------
      // e.preventDefault();
      console.log(items);

      const data={
        Items: items
      }
      axios.post('https://sheet.best/api/sheets/3cc94a77-67df-4503-9284-c7fd0783ff47', data).then((response)=>{
        console.log(response);

        // --------------------------------------------

      })
    }
  }

  handleDelete = id => {
    console.log("Deleted", id);
    const Olditems = [...this.state.items]
    console.log("Olditems", Olditems);
    const items = Olditems.filter((element, i) => {
      return i !== id
    })
    console.log("Newitems", items);
    this.setState({ items: items });
  }

  render() {
    return (
      <div className='container-fluid my-4'>
        <div className='row'>
          <div className='col-sm-6 mx-auto shadow-lg p-3'>
            <h3 className='text-center text-white pp'>Aaj kya kya kroge? Add kro yaha</h3>
            <div className="container-fluid">
            <div className='row'>
              <div className='col-9'>
                <input type='text' className='form-control' placeholder='write your plan here' value={this.state.text} onChange={this.handleChange}/>
              </div>
              <div className='col-2'>
                <button className='btn btn-warning px-4 font-weight-bold' onClick={this.handleAdd}>Add</button>
              </div>
              </div>
              <div className='container'>
                <ul className='list-unstyled row'>
                  {
                    this.state.items.map((value, i)=>{
                      return <Plan key={i} id={i} value={value} sendData={this.handleDelete} />
                    })
                  }
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default App;


