import React from 'react';
import Bullet from './bullet.svg';
import './duties-item.scss';

export class DutiesItem extends React.Component {
    static defaultProps = {
        className: 'duties-item',
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
