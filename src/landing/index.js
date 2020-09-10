import * as React from 'react';
import { useDispatch } from 'react-redux';
import TotalDays from '../utils/totalDays';
import { setTotalDays } from '../actions';
import Calendar from '../calendar';
const Landing = () => {
    const [input, setInput] = React.useState('');
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        const totalDays = TotalDays(input);
        dispatch(setTotalDays(totalDays));
    };
    const handleChange = (e) => {
        e.preventDefault;
        setInput(e.target.value);
    };
    return (React.createElement("div", null,
        React.createElement("form", { onSubmit: handleSubmit },
            React.createElement("label", null, "Please enter your birthday as format YYYY-MM-DD"),
            React.createElement("input", { type: "text", value: input, onChange: () => handleChange }),
            React.createElement("button", { onSubmit: handleSubmit }, "Submit")),
        React.createElement("h1", null, input),
        React.createElement(Calendar, null)));
};
export default Landing;
