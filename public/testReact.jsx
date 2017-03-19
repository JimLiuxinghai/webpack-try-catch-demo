import React from 'react'
export default class testReact extends React.Component {
    static defaultProps = {
        data: {}
    }

    componentDidMount() {
        console.log('mount....');
    }

    render() {
        return (<p>test</p>);
    }
}
