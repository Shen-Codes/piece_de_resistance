import * as React from 'react';
import { StyledCard } from './styles';
const OneDay = (props) => {
    return (React.createElement(StyledCard, null,
        React.createElement("h4", null, props.dayOfWeek),
        React.createElement("h4", null, props.date)));
};
export default OneDay;
