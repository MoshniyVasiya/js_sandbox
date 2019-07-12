import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
// import countries from './countries.json'

class CountrySelect extends React.Component {   
    constructor(props) { 
        super(props);

if (CountrySelect.Countries){   

} else {    
    CountrySelect.Countries = fetch('/countries.json')
    .then(res => res.json())
}
        this.state = {  
            selectedCode: CountrySelect.defaultProps,
            countries: [],
            error: false,
        }
        // console.log(countries)
    }

    componentWillMount() {  
        fetch('/countries.json')
         .then(res => res.json())
         .then(countries => this.setState({ countries }))
         .catch((error) => this.setState({ error }))
    }

onClick(code) { 
    this.setState({selectedCode: code})
}
render() { 
    if (this.state.error) { 
        return <div>{this.state.error.toString()}</div>
    }
    
    return (    
        <div style={{fontSize:'14px', maxHeight: `${this.props.maxHeight}px`}}>
            {this.state.countries.map((country, key) => (   
            <div 
                key={country.name + key}
                // onClick={() => this.onClick(country.code)}
                onClick={this.onClick.bind(this, country.code)}

                style={{ backgroundColor: this.state.selectedCode === country.code
                 ? 'Lightgreen'
                 : ''
                }}
                >
                {country.name} - {country.code}
            </div>
            ))} 
        </div>
    )
}
}
CountrySelect.defaultProps = { 
    maxHeight: 150,
    defaultCountry: 'UA',
}

CountrySelect.propTypes = { 
    maxHeight: PropTypes.number.isRequired,
    defaultCountry: PropTypes.string,
    // children: PropTypes.node,
    // onClick: PropTypes.func,
    // active: PropTypes.bool,
    // obj: PropTypes.object,
    // custon: PropTypes.shape({   
    //     a: PropTypes.number,
    //     b: PropTypes.string,
    // })
}

ReactDOM.render(
    <div>   
        <CountrySelect 
        maxHeight={200}
        defaultCountry="AL"
        //   MyProp={<div>Hello</div>}
        />
        <CountrySelect />

    </div>
), document.getElementById('root');

