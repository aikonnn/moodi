import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import {Button, Table} from 'semantic-ui-react';
import { Link } from "react-router-dom";
import './View.css'

function View(){
    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get(`https://63ae2ab2ceaabafcf17415e4.mockapi.io/moodi/v1/mooddata`)
            .then((response) => {
                setAPIData(response.data);
            })
    }, []);

    const deleteData = (id) => {
        axios.delete(`https://63ae2ab2ceaabafcf17415e4.mockapi.io/moodi/v1/mooddata/${id}`)
        .then(() => {
            getData();
        })
    }

    const getData = () => {
        axios.get(`https://63ae2ab2ceaabafcf17415e4.mockapi.io/moodi/v1/mooddata`)
            .then((getData) => {
                 setAPIData(getData.data);
             })
    }

    const setData = (data) => {
        let {id, Mood, Rating, date} = data;
        console.log(Mood);
        localStorage.setItem('ID', id);
        localStorage.setItem('Mood', Mood);
        localStorage.setItem('Rating', Rating);
        localStorage.setItem('Date', date);
    }

    return (
        <div className="center-container">
            <h1 className="items">
                Here's your mood records!
            </h1>
            <Table singleLine className="table">
                <Table.Header>
                    <Table.Row className="table-row">
                        <Table.HeaderCell className="header-cell">Date</Table.HeaderCell>
                        <Table.HeaderCell className="header-cell">Mood</Table.HeaderCell>
                        <Table.HeaderCell className="header-cell">Rating</Table.HeaderCell>
                        <Table.HeaderCell className="header-cell">Edit</Table.HeaderCell>
                        <Table.HeaderCell className="header-cell">Delete</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                {APIData.map((data) => {
                        return (
                        <Table.Row className="table-row">
                            <Table.Cell className="table-cell">{data.date}</Table.Cell>
                            <Table.Cell className="table-cell">{data.Mood}</Table.Cell>
                            <Table.Cell className="table-cell">{data.Rating}</Table.Cell>
                            <Table.Cell className="table-cell">
                                <Link to ='/update'>
                                <Button className="edit-btn" onClick={() => setData(data)}>Edit</Button>
                                </Link>
                            </Table.Cell>
                            <Table.Cell className="table-cell"><Button className="del-btn" onClick={() => deleteData(data.id)}>Delete</Button></Table.Cell>
                            </Table.Row>
                    )})}
                </Table.Body>
            </Table>
        </div>
    )
}

export default View;