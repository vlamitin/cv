import React from 'react';
import "./tech-stack-item.scss";

export default class TechStackItem extends React.Component {

    static defaultProps = {
        className: 'tech-stack-item'
    };

    static getKey = (item) => {
        return item;
    };

    render() {
        const {value, className} = this.props;

        return (
            <div className={className}>{value}</div>
        );
    }
}