import React, { Component } from "react";
import PropTypes from "prop-types";


export default class ContactForm extends Component {
    state = {
    name: '',
    number: '',
    };
// Оновлення стану (звертаємося до імя властивості обєкта[])
    handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    };
// Викликається під час відправлення форми
    handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state); // Проп, який передається формі для виклику під час сабміту
    this.setState({ name: '', number: '' }); // Очищає форму після сабміту
    };


    render() {
    const { name, number } = this.state;
    return (
        <form onSubmit={this.handleSubmit}>
            <label >
                Name
                <input
                    type="text"
                    placeholder="Enter name"
                    name="name"
                    value={name}
                    onChange={this.handleChange}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
            </label>
        <label>
                Number
                <input
                    type="tel"
                    placeholder="Enter number"
                    name="number"
                    value={number}
                    onChange={this.handleChange}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                />
            </label>
            <button type="submit">
                Add contact
            </button>
        </form>
    );
    }
}

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};