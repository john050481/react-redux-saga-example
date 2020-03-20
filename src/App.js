import React from 'react';
import Form from './components/Forms';
import PostsStatic from './components/PostsStatic';
import PostsAsync from "./components/PostsAsync";

export default function App() {
    return (
        <div className='container pt-3'>
            <div className="row pb-3">
                <div className="col border border-primary rounded">
                    <Form />
                </div>
            </div>
            <div className="row">
                <div className="col border border-success rounded mr-1">
                    <h2>Синхронные посты</h2>
                    <PostsStatic />
                </div>
                <div className="col border border-info rounded ml-1">
                    <h2>Асинхронные  посты</h2>
                    <PostsAsync />
                </div>
            </div>
        </div>
    )
}