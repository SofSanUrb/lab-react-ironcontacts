import React, { Component } from 'react'
import contactsJson from '../contacts.json';
import ContactDetails from './ContactDetails.js'

class Contacts extends Component {

    state = {
        //get first 5 contacts from complete list
        contacts : contactsJson.slice(0,5)
    }

    contactAdd = () => {
        //get random contact from complete list
        let rdContact = contactsJson[Math.floor(Math.random() * contactsJson.length)]

        //update state
        this.setState({
            contacts: [...this.state.contacts, rdContact]
        })
    }

    contactSortName = () => {
        let clonedContacts = JSON.parse(JSON.stringify(this.state.contacts))
        clonedContacts.sort((a,b)=> {
            if (a.name > b.name) {
                return 1
            }
            else if(a.name < b.name) {
                return -1
            }
            else {
                return 0
            }
        })

        this.setState({
            contacts: clonedContacts
        })
    }

    contactSortPop = () => {
        let clonedContacts = JSON.parse(JSON.stringify(this.state.contacts))
        clonedContacts.sort((a,b)=> {
            if (a.popularity > b.popularity) {
                return 1
            }
            else if(a.popularity < b.popularity) {
                return -1
            }
            else {
                return 0
            }
        })

        this.setState({
            contacts: clonedContacts
        })
    }

    contactDelete = (id) => {
        let filterContacts = this.state.contacts.filter(elem => elem.id !== id)

        this.setState({
            contacts: filterContacts
        })
    }

    render() {
        return (
            <div className="container">
                <h1>IronContacts</h1>
                <button onClick={this.contactAdd}>Add Random Contact</button>
                <button className="btn-right" onClick={this.contactSortName}>Sort by name</button>
                <button className="btn-right" onClick={this.contactSortPop}>Sort by Popularity</button>
                <table>
                    <thead>
                    <th>Picture</th>
                    <th className="col2">Name</th>
                    <th className="col2">Popularity</th>
                    </thead>
                    <tbody>
                    {
                        this.state.contacts.map((contact, index) => {
                        return <ContactDetails 
                            key={index}
                            image={contact.pictureUrl} 
                            name={contact.name} 
                            popularity={contact.popularity}
                            id={contact.id}
                            onDelete={this.contactDelete}
                        />
                        })
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}
export default Contacts