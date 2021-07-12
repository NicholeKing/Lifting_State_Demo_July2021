import React from 'react';

const Results = props => {
    return(
        <div className="col-6">
            <table className="table table-striped">
                <tr>
                    <th>Name</th>
                    <th>Real Name</th>
                    <th>Power</th>
                    <th>Weakness</th>
                    <th># of Sidekicks</th>
                </tr>
                {
                    props.myList.map((character) => {
                        return <tr>
                            <td>{character.Name}</td>
                            <td>{character.RealName}</td>
                            <td>{character.Power}</td>
                            <td>{character.Weakness}</td>
                            <td>{character.NumSidekicks}</td>
                        </tr>
                    })
                }
            </table>
        </div>
    );
}

export default Results;