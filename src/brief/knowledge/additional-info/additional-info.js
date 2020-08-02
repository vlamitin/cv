import React from 'react';

import {AdditionalInfoItem} from "./additional-info-item";
import {LabeledList} from "Common";
import "./additional-info.scss";

export class AdditionalInfo extends React.Component {

    static defaultProps = {
        className: 'additional-info',
        listClassName:'additional-info-container'
    };

    render(){
        const {
            value: {
                label = 'AdditionalInfo',
                items
            },
            className,
            listClassName,
            labelClassName
        } = this.props;

        return (
            <LabeledList items={items}
                         label={label}
                         ItemComponent={AdditionalInfoItem}
                         className={className}
                         labelClassName={labelClassName}
                         listClassName={listClassName}
            />
        );
    }
}
