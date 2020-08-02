import React, {Component} from 'react';

import Page from './page';

class App extends Component {

    static defaultProps = {
        errorClassName: 'cv-load-error',
        loadingClassName: 'cv-loading',
        loadingContent: 'Loading ...'
    };

    state = {};

    componentDidCatch = (error, errorInfo) => {
        this.setState({error, errorInfo});
    };

    componentDidMount = () => {
        (fetch('http://localhost:3000/cv.json')
            .then(response => response.json())
            .then(value => this.setState({value}))
            .catch(error => {
                this.setState({error})
            }));
    };

    render() {

        const {
            errorClassName,
            loadingClassName,
            loadingContent
        } = this.props;

        const {
            value,
            error,
            errorInfo = ''
        } = this.state;

        if (typeof error !== "undefined") {
            return (
                <div className={errorClassName}>
                    {`${error.toString()}\r\n\r\n${errorInfo.toString()}`}
                </div>
            );
        }

        if (typeof value === 'undefined') {
            return (
                <div className={loadingClassName}>
                    {loadingContent}
                </div>
            );
        }

        const {
            pages = []
        } = value;

        return pages.map(this.renderPage);
    }

    renderPage = (value, index) => {
        return (
            <Page value={value} key={index}/>
        );
    }
}

export default App;
