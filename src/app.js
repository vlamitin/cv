import React, {Component} from 'react';

import Page from './page';

class App extends Component {

    static defaultProps = {
        errorClassName: 'cv-load-error',
        loadingClassName: 'cv-loading',
        loadingContent: 'Loading ...'
    };

    state = {
        cv: null
    };

    componentDidCatch = (error, errorInfo) => {
        this.setState({error, errorInfo});
    };

    componentDidMount = () => {
        (fetch('/cv.json')
            .then(response => response.json())
            .then(cv => {
                document.title = cv.title
                this.setState({cv})
            })
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
            cv,
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

        if (!cv) {
            return (
                <div className={loadingClassName}>
                    {loadingContent}
                </div>
            );
        }

        const {
            pages = []
        } = cv;

        return pages.map(this.renderPage);
    }

    renderPage = (cv, index) => {
        return (
            <Page value={cv} key={index}/>
        );
    }
}

export default App;
