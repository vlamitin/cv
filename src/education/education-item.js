import React from "react";
import './education-item.scss';

export class EducationItem extends React.Component {

    static defaultProps = {
        className: 'education-item',
        degreeClassName: 'degree',
        institutionClassName: 'institution',
        classOfClassName: 'class-of'
    };

    static getKey = ({degree, institution}) => {
        return degree + institution;
    };

    render() {

        const {
            value: {
                degree,
                institution,
                preInstitution = '(',
                postInstitution = ')',
                preClassOf = 'Class of ',
                postClassOf = '.',
                classOf,
            },
            className,
            degreeClassName,
            institutionClassName,
            classOfClassName
        } = this.props;

        return (
            <React.Fragment>
                <div className={className}>
                    <div className={degreeClassName}>{degree}</div>
                    <div className={institutionClassName}>{`${preInstitution}${institution}${postInstitution}`}</div>
                    <div className={classOfClassName}>{`${preClassOf}${classOf}${postClassOf}`}</div>
                </div>

            </React.Fragment>
        );
    }
}
