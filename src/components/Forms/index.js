import React, {useState} from 'react'
import {connect} from "react-redux";
import {createPost, showAlert, fetchPosts} from "../../redux/actions";
import Alert from '.././Alert';
import './style.css';

function Form(props) {
    let [inputString, setInputString] = useState('');

    function handlerFetchAsyncPosts(e) {
        e.preventDefault();
        props.fetchPosts();
    }

    function handlerSubmit(e) {
        e.preventDefault();

        if (!inputString.trim()) {
            return props.showAlert('Название поста не может быть пустым')
        }

        const newPost = {
            title: inputString, id: Date.now().toString()
        }

        props.createPost(newPost);
        setInputString('');

    }

    function handlerOnChange(e) {
        //console.log(e.target.value)
        setInputString(e.target.value);
    }

    return (
        <form onSubmit={handlerSubmit}>
            <h3>Форма для добавления поста</h3>
            <input
                type="text"
                className='form-control' onChange={handlerOnChange}
                value = {inputString}
            />
            <div className='buttonBlock'>
                <button className='btn btn-success p-2 m-2'>
                    Add post
                </button>
                <Alert />
                <button className="btn btn-info p-2 m-2" type="button" disabled={props.loading} onClick={handlerFetchAsyncPosts}>
                    {props.loading ? <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> : null}
                    {props.loading ? 'Loading...' : 'Get async post'}
                </button>
            </div>
        </form>
    )
}

const mapStateToProps = store => {
    return (
        {
            loading: store.app.loading
        }
    )
}
const mapDispatchToProps = {
    createPost,
    showAlert,
    fetchPosts
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)