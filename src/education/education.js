import React from 'react';
import {EducationItem} from "./education-item";
import './education.scss';
import {LabeledList} from "Common";

export class Education extends React.Component {

    static defaultProps = {
        className: 'education',
        itemContainerClassName: 'item-container'
    };

    render() {

        const {
            items,
            label,
            className,
            labelClassName,
            ...itemProps
        } = this.props;

        return (
            <section className={className}>
                <LabeledList label={label}
                             items={items}
                             itemProps={itemProps}
                             ItemComponent={EducationItem}
                             labelClassName={labelClassName}
                />
            </section>
        );
    }
}