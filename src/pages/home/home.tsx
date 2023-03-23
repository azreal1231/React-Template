import React, {useEffect, useState} from "react"
const HomePage = () => {

const data = [
    {
        'first_name': 'edward',
        'last_name': 'nicholls',
        'number': '0764169752',
        'email': 'idk@gmail.com',
    },
    {
        'first_name': 'jack',
        'last_name': 'nicholls',
        'number': '0000000000',
        'email': 'jack@gmail.com',
    },
    {
        'first_name': 'james',
        'last_name': 'jacks',
        'number': '000000011',
        'email': 'jj@gmail.com',
    },
    {
        'first_name': 'jackie',
        'last_name': 'nicholls',
        'number': '0977788888',
        'email': 'demo@gmail.com',
    }
]

const [search, setSearch] = useState('')
console.log(search)
return <>
<div>
    <input onChange={(e) => setSearch(e.target.value)}
    type="text" placeholder="Filter" />
    <table>
        <thead>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Number</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
            {data.filter((item) => {
                return search.toLowerCase() === '' ? item: item.first_name.toLowerCase().includes(search)
            }).map((item, index) => (
                <tr key={index}>
                    <td>{item.first_name}</td>
                    <td>{item.last_name}</td>
                    <td>{item.number}</td>
                    <td>{item.email}</td>
                </tr>
            ))}
        </tbody>
    </table>
</div>
</>
}

export default HomePage