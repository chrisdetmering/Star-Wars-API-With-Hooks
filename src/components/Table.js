import React, { Component } from 'react'

class Table extends Component {
    render() {

        const peoples = () => {
            return this.props.characters.map((character => {
                return (
                    <tr>
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

        const isLoading = () => {
            
        }

        return (
            <div>
                <table className="table">
                    <thead>
                        <td>Name</td>
                        <td>Birth Year</td>
                        <td>Height</td>
                        <td>Mass</td>
                        <td>Homeworld</td>
                        <td>Species</td>
                    </thead>
                    <tbody>
                        {peoples()}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Table