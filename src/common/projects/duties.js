import React from 'react';
import './duties.scss';
import {DutiesItem} from "./duties-item";
import {LabeledList} from "Common/labeled-list";

export class Duties extends React.Component {

    static defaultProps = {
        className: 'duties',
        labelClassName: 'duties-label',
        listClassName: 'items',
        defaults: {
            label: "Duties"
        }
    };

    render() {

        const {
            defaults,
            value,
            className,
            labelClassName,
            listClassName
        } = this.props;

        if (value === null || typeof value === 'undefined') {
            return null;
        }

        const {label, items} = {...defaults, ...value};

        return (
            <LabeledList items={items}
                         label={label}
                         ItemComponent={DutiesItem}
                         className={className}
                         labelClassName={labelClassName}
                         listClassName={listClassName}
            />
        );
    }
}
