import React, { Component } from 'react';

class RecipeSearch extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            items: [],
            isLoaded: false,
         }
    }

    componentDidMount(){
        fetch('')
        .then(res => res.json())
        .then(json => {
            this.setState({
                isLoaded: true,
                items: json, 
            })
        })
    }

    render() { 
        return (
            const { isLoaded, items } = this.state;

            if (!isLoaded){
                return <div>Laoding...</div>
            }
            <div className='RecipeSearch'>

            </div>
         );
    }
}
 
export default RecipeSearch;