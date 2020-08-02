import React from 'react';

export const Label = (props) => {
    const {content, className, style} = props;
    return (
        <div className={className}
             style={style}>
            {content}
        </div>
    );
}