import React from 'react';
 
class FormTwo extends React.Component {
  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            onChange={event => this.props.handleFirstNameChange(event)}
            value={this.props.formData.firstName}
          />
          <input
            type="text"
            onChange={event => this.props.handleLastNameChange(event)}
            value={this.props.formData.lastName}
          />
          <input type="submit"/>
        </form>
        {this.listOfSubmissions()}
      </div>
    )
  }
}
 
export default FormTwo;