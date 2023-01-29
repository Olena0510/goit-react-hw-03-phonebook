import { Component } from "react";
import PropTypes from 'prop-types';
import { Wrapper, Title, LabelForm, InputForm, FormBtn } from "./ContactsForm.styled";

export class ContactsForm extends Component {

    static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

    state = {
        name: '',
        number: ''
    };
    
    handleInputChange = event => {
        const {name, value} = event.currentTarget
    this.setState(
      {
        [name]: value,
      })
  }

handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.resetForm();
};

resetForm = () => {
    this.setState({
        name: '',
        number: ''
    });
}

    render() {
        const { name, number } = this.state;
        
        return (
            <Wrapper>
                <Title>Phonebook</Title>
                <form onSubmit={this.handleSubmit}>
                    <LabelForm htmlFor = {this.InputName}>Name</LabelForm>
                    <InputForm
                        id={this.InputName}
                        value={name}
                        onChange = {this.handleInputChange}
                   type="text"
                   name="name"
                   pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                   title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                   required
                    />  
                    
                    <LabelForm htmlFor = {this.InputNumber}>Number</LabelForm>
                    <InputForm
                        id={this.InputNumber}
                        value={number}
                        onChange = {this.handleInputChange}
                   type="tel"
                   name="number"
                   pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                   title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                   required
/>  
                   <FormBtn type="submit">Add contact</FormBtn>
                </form>
            </Wrapper>
        )
    }

}