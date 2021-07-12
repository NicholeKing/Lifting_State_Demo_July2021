import React, { useState } from 'react';

const Form = props => {
    // const [Name, setName] = useState("");
    // const [RealName, setRealName] = useState("");
    // const [Power, setPower] = useState("");
    // const [Weakness, setWeakness] = useState("");
    // const [NumSidekicks, setNumSidekicks] = useState(0);
    const [myForm, setMyForm] = useState({
        Name: "",
        RealName: "",
        Alignment: "Hero",
        Power: "",
        Weakness: "",
        NumSidekicks: 0,
        isAlive: true
    });
    const onChangeHandler = e => {
        setMyForm({...myForm, [e.target.name]: e.target.value});
    } 
    const checkedHandler = e => {
        setMyForm({...myForm, [e.target.name]: e.target.checked});
    }
    const onSubmitHandler = e => {
        // Prevents the page from refreshing
        e.preventDefault();
        props.newChar(myForm);
    }

    return(
        <div className="col-6">
            <form onSubmit={onSubmitHandler}>
                <div className="form-group">
                    <label htmlFor="Name">Hero/Villain Name</label>
                    <input type="text" name="Name" className="form-control" onChange={onChangeHandler}/>
                </div>
                <div className="form-group">
                    <label htmlFor="Alignment">Alignment</label>
                    <select name="Alignment" className="form-control" onChange={onChangeHandler}>
                        <option value="Hero">Hero</option>
                        <option value="Villain">Villain</option>
                        <option value="In-between">In-between</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="RealName">Real Name</label>
                    <input type="text" name="RealName" className="form-control" onChange={onChangeHandler}/>
                </div>
                <div className="form-group">
                    <label htmlFor="Power">Power</label>
                    <input type="text" name="Power" className="form-control" onChange={onChangeHandler} />
                </div>
                <div className="form-group">
                    <label htmlFor="Weakness">Weakness</label>
                    <input type="text" name="Weakness" className="form-control" onChange={onChangeHandler}/>
                </div>
                <div className="form-group">
                    <label htmlFor="NumSidekicks">Number of sidekicks</label>
                    <input type="number" name="NumSidekicks" className="form-control" onChange={onChangeHandler} />
                </div>
                <div className="form-group">
                    <input type="checkbox" name="isAlive" checked={myForm.isAlive} onChange={checkedHandler} />
                    <label htmlFor="isAlive"><span> </span>Is alive?</label>
                </div>
                <input type="submit" value="+ Add" className="btn btn-primary"/>
            </form>
        </div>
    );
}

export default Form;