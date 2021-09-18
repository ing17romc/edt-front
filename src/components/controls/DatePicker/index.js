import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ternaryOperation } from '../../utils/functions';

const propTypes = {
    id: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    eventChange: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
    readOnly: PropTypes.bool,
    required: PropTypes.bool,
    title: PropTypes.string,
};

const dateformat = (month, day, year) => `${month}/${day}/${year}`;

const DatePicker = ({id, title, value, eventChange, disabled, readOnly, required, ref=null}) => {

    let strDay = '';
    let strMonth = '';
    let strYear = '';

    if ((Date.parse(value))) {
        const _value = new Date(value);
        strDay = _value.getDate().toString();
        strMonth = _value.getMonth().toString();
        strYear = _value.getFullYear().toString();
    }

    const [day, setDay] = useState(strDay);
    const [month, setMonth] = useState(strMonth);
    const [year, setYear] = useState(strYear);
    const [days, setDays] = useState([]);

    const onChangeDay = e => {
        setDay(e.target.value);
        const strNewDate = dateformat(month, e.target.value, year);
        updateDate(strNewDate);
    };
    const onChangeMonth = e => {
        setMonth(e.target.value);
        const strNewDate = dateformat(e.target.value, day, year);
        updateDate(strNewDate);
    };
    const onChangeYear = e => {
        setYear(e.target.value);
        const strNewDate = dateformat(month, day, e.target.value);
        updateDate(strNewDate);
    };

    const updateDate = (strNewDate) => {
        if ((Date.parse(strNewDate) && !strNewDate.startsWith('/') && !strNewDate.endsWith('/') && !strNewDate.includes('//'))) {

            eventChange({ id: id, value: strNewDate });
        } else {
            eventChange({ id: id, value: '' });
        }
    };



    const id_day = `day_${id}`;
    const id_month = `month_${id}`;
    const id_year = `year_${id}`;

    const titleDay = 'Día';
    const titleMonth = 'Mes';
    const titleYear = 'Año';

    const controlStyle = ternaryOperation(disabled, 'disabled', '');

    const style = (_value) => {
        if (disabled) {
            return "disabled";
        } else if (readOnly) {
            return "readOnly";
        } else if (required && !_value) {
            return "required";
        } else {
            return "";
        }
    };

    const values = (min = 1, max = 12) => {
        const array = [];

        for (let i = min; i <= max; i++) {
            array.push(i.toString())
        }
        return array;
    }



    useEffect(() => {
        const isLeapYear = (_year) => {
            return ternaryOperation(_year % 400 === 0, true ,
                ternaryOperation(_year % 100 === 0, false ,
                    _year % 4 === 0));
        };

        let endDay = 31;
        if (year && isLeapYear(parseInt(year)) && month === '2') {
            endDay = 29
        } else if (month === '2') {
            endDay = 28
        } else if (['4', '6', '9', '11'].includes(month)) {
            endDay = 30
        }
        if (day && parseInt(day) > endDay) {
            setDay('');
        }

        setDays(values(1, endDay));
    }, [month, year, day]);

    return <div className={'control-container  '} >
        <div className='container-date '>
            <div className={`title ${controlStyle}`}>
                <span htmlFor={id} >{title}</span>
            </div>
            <div className='day'>
                <div className={style(day)} >
                    <select
                        id={id_day}
                        name={id_day}
                        value={day}
                        onChange={e => onChangeDay(e)}
                        disabled={readOnly | disabled}
                        required={required}
                        ref={ref}>
                        <option value={''} >{titleDay}</option>
                        {
                            days.map(element =>
                                <option
                                    key={element}
                                    value={element}>

                                    {element}

                                </option>
                            )
                        }
                    </select>
                    <span htmlFor={id_day} >
                        {ternaryOperation(day !== '', titleDay, '')}
                    </span>
                </div>
            </div>
            <div className='month'>
                <div className={style(month)} >
                    <select
                        id={id_month}
                        name={id_month}
                        value={month}
                        onChange={e => onChangeMonth(e)}
                        disabled={readOnly | disabled}
                        required={required}
                        ref={ref}>
                        <option value={''} >{titleMonth}</option>
                        {
                            values(1, 12).map(element =>
                                <option
                                    key={element}
                                    value={element}>

                                    {element}

                                </option>
                            )
                        }
                    </select>
                    <span htmlFor={id_month} >
                        {ternaryOperation(month !== '', titleMonth, '')}
                    </span>
                </div>
            </div>
            <div className='year'>
                <div className={style(year)} >
                    <select
                        id={id_year}
                        name={id_year}
                        value={year}
                        onChange={e => onChangeYear(e)}
                        disabled={readOnly | disabled}
                        required={required}
                        ref={ref}>
                        <option value={''} >{titleYear}</option>
                        {
                            values(1900, 2100).map(element =>
                                <option
                                    key={element}
                                    value={element}>

                                    {element}

                                </option>)
                        }
                    </select>
                    <span htmlFor={id_year} >
                        {ternaryOperation(year !== '', titleYear, '')}
                    </span>
                </div>
            </div>
        </div>
    </div>;
};

DatePicker.propTypes = propTypes;

export default DatePicker;
