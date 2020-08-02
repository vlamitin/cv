import React from 'react';
import {List} from "./list";
import {Label} from './label';

export class LabeledList extends React.Component {

    static defaultProps = {
        className: 'labeled-list',
        labelClassName: 'label',
        listClassName: 'item-container',
    };

    render() {

        const {
            label,
            className,
            labelClassName,
            listClassName,
            ...listProps
        } = this.props;

        return (
            <div className={className}>
                {
                    typeof label !== 'undefined' &&
                    <Label content={label} className={labelClassName}/>
                }
                <List {...listProps}
                      className={listClassName}
                />
            </div>
        );
    }
}