import React from 'react';
import './additional-info-item.scss';

export class AdditionalInfoItem extends React.Component {

    static defaultProps = {
        className: 'interest-item',
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
