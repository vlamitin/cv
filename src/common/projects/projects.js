import React from 'react';
import './projects.scss';
import {ProjectItem} from "./project-item";
import {LabeledList} from "Common/labeled-list";

export class Projects extends React.Component {

    static defaultProps = {
        className: 'projects',
        labelClassName: 'projects-label',
        listClassName: 'items',
        defaults: {
            label: "Projects"
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
                         ItemComponent={ProjectItem}
                         className={className}
                         labelClassName={labelClassName}
                         listClassName={listClassName}
            />
        );
    }
}