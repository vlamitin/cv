import React from 'react';
import Bullet from './bullet.svg';
import './feature-item.scss';

export class FeatureItem extends React.Component {
    static defaultProps = {
        className: 'feature',
        classNames: {
            bullet: 'bullet',
            content: "content"
        }
    };

    static getKey = (item) => {
        return item;
    };

    render() {

        const {
            value,
            className,
            classNames
        } = this.props;

        return (
            <div className={className}>
                <div className={classNames.bullet}>
                    <Bullet />
                </div>
                <div className={classNames.content}>{value}</div>
            </div>
        );
    }
}