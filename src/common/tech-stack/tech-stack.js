import React from 'react';
import './tech-stack.scss';
import TechStackItem from './tech-stack-item';
import {LabeledList} from 'Common/labeled-list';

export class TechStack extends React.Component {

    static defaultProps = {
        className: "tech-stack",
        labelClassName:'tech-stack-label',
        listClassName:'items',
    };

    render() {
        const {
            className,
            listClassName,
            labelClassName,
            value
        } = this.props;

        return (
            <LabeledList label={value.label}
                         items={value.items}
                         ItemComponent={TechStackItem}
                         className={className}
                         listClassName={listClassName}
                         labelClassName={labelClassName}
            />
        );
    }
}
