import React from "react";
import { useState } from "react";
import './Home.css';
import { Button, Form} from 'semantic-ui-react'
import axios from "axios";

function Home(){
    const [Rating, setRating] = useState(1);
    const [Mood, setMood] = useState("");
    const curr = new Date();
    const [date, setdate] = useState(`${curr.getDate()}/${curr.getMonth()}/${curr.getFullYear()}`);

    const postData = () => {
        axios.post('https://63ae2ab2ceaabafcf17415e4.mockapi.io/moodi/v1/mooddata',{
            Mood,
            Rating,
            date
        })
    }

    return (
        <div className='center-container'>
            <h1 className="items">
                Welcome! How was your day?
            </h1>
            <Form className="items">
                <Form.Field className="form-element">
                    <label>Your mood</label>
                    <input placeholder="mood" onChange={e => setMood(e.target.value)}/>
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
                <Button type="submit" className="submit-btn" onClick={postData}>Submit</Button>
            </Form>
        </div>
    );
}

export default Home;