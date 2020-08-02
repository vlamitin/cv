import React from 'react';
import './project-item.scss';
import { Paragraphs } from "Common";
import {Features} from './features';

export class ProjectItem extends React.Component {
    static defaultProps = {
        className: 'project',
        classNames: {
            name: 'name',
            description: "description"
        }
    };

    static getKey = (item) => {
        return item.name;
    };

    render() {

        const {
            value,
            className,
            classNames
        } = this.props;

        const { name, description, features } = value;

        // <div className={classNames.featuresContainer}>
        // <Label content={featuresLabel} className={classNames.featuresLabel} />
        // <Paragraphs value={features} className={classNames.features} />
        // </div>


        return (
            <div className={className}>
                <div className={classNames.name}>{name}</div>
                <Paragraphs value={description} className={classNames.description} />
                <Features value={features}/>
            </div>
        );
    }
}