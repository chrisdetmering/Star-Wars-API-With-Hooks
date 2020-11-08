import React, { Component } from 'react'

class Table extends Component {
    render() {

        const peoples = () => {
            return this.props.characters.map((character => {
                return (
                <tr  className="table">
                    <td>{character.name}</td>
                    <td>{character.birth_year}</td>
                    <td>{character.height}</td>
                    <td>{character.mass}</td>
                    <td>{character.homeworld}</td>
                    <td>{character.species}</td>
                </tr>
                )
            }))
        }

        return (
            <div>
                {peoples()}
            </div>
        )
    }
}

export default Table