import React, { Component, useEffect, useState } from 'react';
import { useRoutes } from 'hookrouter';

import Page from './page';

class App extends Component {
    state = {
        error: null,
        errorInfo: ''
    };

    componentDidCatch = (error, errorInfo) => {
        this.setState({ error, errorInfo });
    };

    render() {
        const {
            error,
            errorInfo = ''
        } = this.state;

        if (error) {
            return (
                <div className="cv-load-error">
                    {`${error.toString()}\r\n\r\n${errorInfo.toString()}`}
                </div>
            );
        }
        return <Routes />
    }
}

const Routes = () => {
    return useRoutes({
        '/': () => <CV jsonPath="/cv_en.json" />,
        '/en': () => <CV jsonPath="/cv_en.json" />,
        '/ru': () => <CV jsonPath="/cv_ru.json" />
    })
}

const CV = ({ jsonPath }) => {
    const [cv, setSv] = useState(null)

    useEffect(() => {
        fetch(jsonPath)
            .then(response => response.json())
            .then(res => {
                document.title = res.title
                setSv(res)
            })
    }, [jsonPath])

    console.log('cv', cv)

    if (!cv) {
        return (
            <div className="cv-loading">
                { 'Loading ...' }
            </div>
        );
    }

    const { pages = [] } = cv;

    return pages.map((cv, index) => <Page value={cv} key={index}/>);
}

export default App;
