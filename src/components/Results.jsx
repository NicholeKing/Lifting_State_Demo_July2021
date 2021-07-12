import React from 'react';

const alive = {
    backgroundColor: "peachpuff"
}
const dead = {
    backgroundColor: "#b1b2b4"
}

const Results = props => {
    const checkedHandler = e => {
        props.updateStatus(e.target.value);
    }
    return(
        <div className="col-6">
            <table className="table table-striped">
                <tr>
                    <th>Name</th>
                    <th>Real Name</th>
                    <th>Alignment</th>
                    <th>Power</th>
                    <th>Weakness</th>
                    <th># of Sidekicks</th>
                    <th>Is alive?</th>
                </tr>
                {
                    props.myList.map((character, i) => {
                        return <tr style={character.isAlive ? alive : dead}>
                            <td>{character.Name}</td>
                            <td>{character.RealName}</td>
                            <td>{character.Alignment}</td>
                            <td>{character.Power}</td>
                            <td>{character.Weakness}</td>
                            <td>{character.NumSidekicks}</td>
                            <td><input type="checkbox" checked={character.isAlive} onChange={checkedHandler} value={i}/></td>
                        </tr>
                    })
                }
            </table>
        </div>
    );
}

export default Results;