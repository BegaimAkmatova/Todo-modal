import React,{useState} from 'react';
import Card from '../UI/Card';
import classes from "./AddUser.module.css"
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';


const AddUser = (props) => {

    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredUserage, setEnteredUserage] = useState('');
    const [error, setError] = useState();

    const usernameChangeHandler = (e) => {
        setEnteredUsername(e.target.value)
    }

    const userageChangeHandler = (e) => {
        setEnteredUserage(e.target.value)
    }

    const addUserHandler = (e) => {
        e.preventDefault();
        if(enteredUsername.trim().length === 0 || enteredUserage.trim().length === 0) {
            setError({
                title:'Invalid input',
                message:'Please enter a valid name and age (non-empty values)',
            })
            return;
        }

        if(enteredUserage.trim().length === 0) {
            setError({
                title:'Invalid age',
                message:'Please enter a valid age (non-empty values)',
            })
            return;
        }

        if(+enteredUserage < 1) {
            setError({
                title:'Invalid age',
                message:'Please enter a valid age(> 0)',
            })
            return;
        }

        props.onAddUser(enteredUsername,enteredUserage)

        setEnteredUserage('');
        setEnteredUsername('');
    }

    const errorHandler = () => {
        setError(null)
    }

    return (
        <React.Fragment>
        {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input 
                    id="username" 
                    type="text" 
                    onChange={usernameChangeHandler}
                    value={enteredUsername}
                />
                <label htmlFor="age">Age (years)</label>
                <input 
                    id="age" 
                    type="number" 
                    onChange={userageChangeHandler}
                    value={enteredUserage}
                />
                <Button type='submit'>Add user</Button>
                {/* <button type="submit">Add User</button> */}
                </form>
        </Card>
        </React.Fragment>
    )
}
export default AddUser;
