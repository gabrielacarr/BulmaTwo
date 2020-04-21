import React, { Component } from 'react'

export default class PropsExample extends Component {
    render() {
        console.log(typeof this.props)
        console.log( this.props)
        return (
            <div>
                {this.props.prop1}
                {this.props.prop2} 
            </div>
        )
    }
}


// function foo(param1){console.log(param1)}
// foo("Justin")
