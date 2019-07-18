import React, { setState } from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formValue : 'change me',
      exercises: [
        "pushups",
        "situps",
        "benchpress"
      ],
      selectValue: 'exercises'
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleValueChange = this.handleValueChange.bind(this);
    this.handleAddSelect = this.handleAddSelect.bind(this);
  }
 

  handleSubmit = (event) => {
    event.preventDefault();

  }

  handleInput = (event) => {
    this.setState({
      formValue: event.target.value
    })
  }

  handleValueChange = (event) => {
    setState({
      selectValue: event.target.value
    })
  }

  handleAddSelect = (event) => {
    event.preventDefault();

    console.log('handling add to select')
    this.setState({
      exercises: this.state.exercises.concat(this.state.formValue),
      formValue: ''
    })
  }

  mapExercises = (exercises) => {
    console.log('mapping exercises');
    let pArr = exercises.map((e, i) => {
      return <option value={e} key={i}>{e}</option>
    })

    console.log(pArr);
    return pArr;
    
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} >
          <select value={this.state.selectValue} onChange={this.handleValueChange}>
            {this.mapExercises(this.state.exercises)}
          </select>
        </form>
        <form onSubmit={this.handleAddSelect} >
          <input type="text" value={this.state.formValue} onChange={this.handleInput} />
          <input type="submit" value="submit" />
        </form>

      </div>
      
    )
  }
}


export default App;
