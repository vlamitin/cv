import React from 'react';
import './experience.scss';

import {ExperienceItem} from "./experience-item";
import {LabeledList} from "Common";

export class Experience extends React.Component {

    static defaultProps = {
        className: 'experience'
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
                <LabeledList items={items}
                      label={label}
                      itemProps={itemProps}
                      ItemComponent={ExperienceItem}
                      labelClassName={labelClassName}
                />
            </section>
        );
    }
}