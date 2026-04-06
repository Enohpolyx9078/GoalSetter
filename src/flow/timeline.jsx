import React from 'react';
import { useNavigate } from 'react-router-dom';

export function Timeline({ goalName, setTimeline }) {
    const timeline = React.useRef();
    const nav = useNavigate();

    async function formatTimeline(dateString) {
        const [year, month, day] = dateString.split("-");
        let monthString;
        switch (month) {
            case "01":
                monthString = "January";
                break;
            case "02":
                monthString = "February";
                break;
            case "03":
                monthString = "March";
                break;
            case "04":
                monthString = "April";
                break;
            case "05":
                monthString = "May";
                break;
            case "06":
                monthString = "June";
                break;
            case "07":
                monthString = "July";
                break;
            case "08":
                monthString = "August";
                break;
            case "09":
                monthString = "September";
                break;
            case "10":
                monthString = "October";
                break;
            case "11":
                monthString = "November";
                break;
            case "12":
                monthString = "December";
                break;
        }
        return monthString + " " + day + ", " + year;
    }

    async function toNext() {
        const dateString = await formatTimeline(timeline.current.value);
        setTimeline(dateString);
        nav('/breakdown');
    }

    return (
        <section>
            <h1 className="text-display text-3xl nb-card nb-blue">{ goalName }</h1>
            <section className="mt-4">
                <div className="nb-card nb-orange">
                    <h2 className="text-heading text-2xl">When will this be done?</h2>
                    <input ref={ timeline } className="nb-input mr-4" name="timeline" type="date" />
                    <p className="text-body mt-4">Remember, goals are best when they're close. You'll be much more likely to acheive your goal if you have an upcoming date to achieve it.
                    </p>
                    <button onClick={toNext} className="nb-btn nb-pink mt-4">Keep Going</button>
                </div>
            </section>
        </section>
    );
}