import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStudent } from '../reducers/newStudentEntry';
import { postStudent } from '../reducers/students'

const initialState = {
    name: '',
    email: '',
    campusId: ''
}

class NewStudentEntry extends Component {
    constructor(){
        super();
        this.state = initialState
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }
    handleChange (event){
        const value = event.target.value
        this.setState ({
            [event.target.name]: value
        })
    }
    
    handleSubmit(event){
        event.preventDefault();
        this.props.postStudent(this.state)
        this.props.history.push('/')

        this.setState(initialState)

    }

  render () {
    return (
      <div>
        <div className="col-sm-2"></div>
        <div className="col-sm-8">
          <h2>Create a new Student</h2>
          <form onSubmit={this.handleSubmit}>
            <label>
              Name:
              <input
                className="form-control"
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </label>
            <hr />
            <label>
              Email:
              <input
                className="form-control"
                type="text"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </label>
            <hr />
            <label>
              CampusId:
              <input
                className="form-control"
                name="campusId"
                value={this.state.campusId}
                onChange={this.handleChange}
              />
            </label>
            <hr />
            <input
              className="btn btn-success"
              type="submit"
            />
          </form>
        </div>
      </div>
    );
  } 
}

const mapDispatchToProps = {
    postStudent
};

export default connect(
  null,
  mapDispatchToProps
)(NewStudentEntry);
