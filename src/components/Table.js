import React, { Component } from 'react'

export class Table extends Component {
    render() {

        const peoples = () => {
            return this.props.characters.map((character => {
                return (
                <tr>
                    <td>{character.name}</td>
                    <td>{character.birth_year}</td>
                    <td>{character.height}</td>
                    <td>{character.mass}</td>
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
