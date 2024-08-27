import { useState } from 'react'

const countries = [
    { name: "India", value: "IN", cities: ['Delhi ', 'Mumbai'] },
    { name: "Pak", value: "PAK", cities: ['Karachi ', 'Lahore'] },
    { name: "Bangladesh", value: "BS", cities: ['Dhaka ', 'Cjottagpmg'] },
]
function DropDown() {
    const [nam, setName] = useState([countries[0].cities])

    function changeName(id) {
        console.log(id)
        setName([...id])
    }
    console.log(nam, countries[0].cities,)
    return (
        <>
            <div>DropDown</div>
            <select onClick={(e) => changeName(e.target.value)}>
                {countries.map((item, i) => (<option value={i} id={i} key={item.name}>{item.name}</option>))}
            </select>

            <select name="" id="" value={countries}>
                {countries[nam].cities.map((item, i) => (<option value={i}>{item}</option>))}
            </select>
        </>
    )
}
export default DropDown