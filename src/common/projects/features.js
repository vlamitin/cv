import React from 'react';
import './features.scss';
import {FeatureItem} from "./feature-item";
import {LabeledList} from "Common/labeled-list";

export class Features extends React.Component {

    static defaultProps = {
        className: 'features',
        labelClassName: 'features-label',
        listClassName: 'items',
        defaults: {
            label: "Features"
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

        console.log(value);
        const {label, items} = {...defaults, ...value};

        return (
            <LabeledList items={items}
                         label={label}
                         ItemComponent={FeatureItem}
                         className={className}
                         labelClassName={labelClassName}
                         listClassName={listClassName}
            />
        );
    }
}