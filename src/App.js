import './App.css';
import React from 'react'
import AdditionalPizzaFields from './components/AdditionalPizzaFields'
import AdditionalSandwichFields from './components/AdditionalSandwichFields'
import AdditionalSoupFields from './components/AdditionalSoupFields'
import {isPizza, isSandwich, isSoup, saveDish} from "./utils/utils";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            time: "",
            type: "",
            dishList: [],
            no_of_slices: null,
            diameter: null,
            spiciness_scale: null,
            slices_of_bread: null
        }
    }

    handleChange = (e, propToChange) => {
        const updatedValue = {};
        updatedValue[propToChange] = e.target.value;
        this.setState(updatedValue)
    };

    postData = (e) => {
        saveDish(e, this.state)
            .then(res => {
                if (res.status !== 200) {
                    alert('error')
                }
                console.log(res)
            });

    };

    formHasErrors = () => {
        const {type, name, time, no_of_slices, diameter, spiciness_scale, slices_of_bread} = this.state;
        if (isPizza(type)) {
            if (no_of_slices === null) return true;
            if (diameter === null) return true;
        }
        if (isSoup(type)) {
            if (spiciness_scale === null) return true;
        }
        if (isSandwich(type)) {
            if (slices_of_bread === null) return true;
        }
        return name === '' || time === '' || type === '';
    };

    render() {
        const {type, name, time} = this.state;
        return (
            <div className="App">
                <div className="container">
                    <form
                        onSubmit={this.postData}
                    >
                        <label htmlFor="name">Name:
                            <input
                                id="name"
                                type="text"
                                placeholder="name"
                                value={name}
                                onChange={(e) => this.handleChange(e, "name")}
                            />
                        </label>
                        {name === '' && <p>The field cannot be empty</p>}
                        <label htmlFor="preparation_time">Preparation time:
                            <input
                                id="preparation_time"
                                type="time"
                                step='1'
                                min="00:00:00"
                                max="23:59:59"
                                placeholder="preparation_time"
                                value={time}
                                onChange={(e) => this.handleChange(e, "time")}
                            />
                        </label>
                        {time === '' && <p>The field cannot be empty</p>}
                        <label htmlFor="type">Type:
                            <select
                                id="type"
                                value={type}
                                onChange={(e) => this.handleChange(e, "type")}
                            >
                                <option value="Select type"/>
                                <option value="pizza">Pizza</option>
                                <option value="soup">Soup</option>
                                <option value="sandwich">Sandwich</option>
                            </select>
                        </label>
                        {type === '' && <p>The field cannot be empty</p>}
                        {isPizza(type) && <AdditionalPizzaFields
                            onNoOfSliceChange={this.handleChange}
                            onDiameterChange={this.handleChange}
                        />}
                        {isSoup(type) && <AdditionalSoupFields
                            onSpicinessScaleChange={this.handleChange}
                        />}
                        {isSandwich(type) && <AdditionalSandwichFields
                            onSlicesOfBreadChange={this.handleChange}
                        />}
                        <button
                            type="submit"
                            disabled={this.formHasErrors()}
                        >
                            Submit
                        </button>
                    </form>
                </div>

            </div>
        );
    }

}

export default App;
