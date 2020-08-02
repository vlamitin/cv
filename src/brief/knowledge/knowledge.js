import React from 'react'
import {Technologies} from "./technologies";
import {AdditionalInfo} from "./additional-info";
import './knowledge.scss';

export class Knowledge extends React.Component {

    static defaultProps = {
        className: 'knowledge',
        labelClassName: 'knowledge-label',
    };

    render() {

        const {
            value: {
                technologies,
                additionalInfo,
            },
            className,
            labelClassName
        } = this.props;

        return (
            <div className={className}>

                <Technologies value={technologies}
                              labelClassName={labelClassName}
                />

                <AdditionalInfo value={additionalInfo}
                           labelClassName={labelClassName}
                />
                
            </div>
        );
    }
}
