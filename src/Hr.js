import React from 'react';

export default React.createClass({
    style() {
        return {
            ...this.props.style,
            border:"0px", 
            height: "1px", 
            background: "rgba( 0, 0, 0, .1 )"
        }
    },

    render() {
        return (
            <hr style={ this.style() }/>
        )
    }
});
