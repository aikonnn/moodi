import React from "react";
import { useState, useEffect } from "react";
import './Home.css';
import { Button, Form} from 'semantic-ui-react'
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Update(){
    const navi = useNavigate();

    const [ID, setID] = useState(0);
    const [Rating, setRating] = useState(1);
    const [Mood, setMood] = useState("");
    const [date, setDate] = useState("");

    useEffect(() => {
        setID(localStorage.getItem('ID'))
        setRating(localStorage.getItem('Rating'));
        setMood(localStorage.getItem('Mood'));
        setDate(localStorage.getItem('Date'));
    }, []);

    const updateData = () => {
        axios.put(`https://63ae2ab2ceaabafcf17415e4.mockapi.io/moodi/v1/mooddata/${ID}`, {
            Mood,
            Rating,
            date
	    })
        .then(
            navi("/view")
        )
    }

    return (
        <div className='center-container'>
            <h1 className="items">
                Update your status
            </h1>
            <Form className="items">
                <Form.Field className="form-element">
                    <label>Your mood</label>
                    <input placeholder="mood" 
                    defaultValue={Mood}
                    onChange={e => setMood(e.target.value)}/>
                </Form.Field>
                <Form.Field className="form-element">
                    <label>Rate your day</label>
                    <input type="range" 
                            min="1" 
                            max="10" 
                            className="slider" 
                            defaultValue={Rating} 
                            onChange = {e => setRating(e.target.value)}
                            step = "1" />
                    <div>{Rating}</div>
                </Form.Field>
                <Button type="submit" className="submit-btn" onClick={updateData}>Update</Button>
            </Form>
        </div>
    );
}

export default Update;