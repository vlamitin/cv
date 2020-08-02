import React from "react";
import './experience-item.scss';
import {Paragraphs, TechStack, Projects} from "Common";

export class ExperienceItem extends React.Component {

    static defaultProps = {
        className: 'experience-item',
        titleClassName: 'title',
        durationClassName: 'duration',
        companyClassName: 'company',
    };

    static getKey = ({title, company, startDate}) => {
        return `${title}${company}${startDate}`;
    };

    render() {

        const {
            value: {
                title,
                startDate,
                endDate,
                company,
                description,
                techStack,
                projects
            },
            ongoingText = 'Present',
            dateDelimiter = ' - ',
            className,
            titleClassName,
            durationClassName,
            companyClassName
        } = this.props;

        const duration = `${startDate} ${dateDelimiter} ${typeof endDate !== 'undefined' ? endDate : ongoingText}`;

        return (
            <div className={className}>
                <div className={titleClassName}>{title}</div>
                <div className={durationClassName}>{duration}</div>
                <div className={companyClassName}>{company}</div>
                <Paragraphs value={description}/>
                <TechStack value={techStack}/>
                <Projects value={projects}/>
            </div>
        );
    }
}