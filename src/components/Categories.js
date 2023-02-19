import React, {Component} from 'react'

export class Categories extends Component{
    categories = [
        {value:'', text: 'Choose..', disabled: true, hidden: true},
        {value:'food', text: 'Food'},
        {value:'drink', text: 'Drink'},
        {value:'hobbies', text: 'Hobbies'},
        {value:'other', text: 'Other'}
    ];
    
    constructor(props){
        super(props);
        this.state={
            selectedCategory: this.categories[0].value
            };
        this.handleChange = this.handleChange.bind(this);
    };

    handleChange = (event) => {
        this.setState({selectedCategory: event.target.value});
        this.props.onChange(event.target.value);
    };


    render() {
        return(
            <select value={this.state.selectedCategory} onChange={this.handleChange}>
                {this.categories.map(categoryOption => (
                        <option
                                value={categoryOption.value}
                                disabled={categoryOption.disabled}
                                hidden={categoryOption.hidden}
                                key={categoryOption.value}
                        >
                                {categoryOption.text}
                        </option>
                ))};
            </select>
        );
    };
};
