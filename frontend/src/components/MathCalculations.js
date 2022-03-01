import React, { useState } from "react"
import axios from "axios";

const MathCalculations = () => {
    const [numbers, setNumbers] = useState('');
    const [data, setData] = useState([]);

    const handleSubmit = () => {
        const jsonData = {
            numbers: numbers
        }

        axios.post('/api/math', jsonData)
            .then(response => setData(response.data))
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="numbers">Numbers</label>
            <input id="numbers" value={numbers} onChange={e => setNumbers(e.target.value)} />
            <button type="submit">Submit</button>

            {data &&
                <div>
                    <p>Sum: {data.sum}</p>
                    <p>Average: {data.average}</p>
                    <p>Sum: {data.standardDeviation}</p>
                </div>
            }
        </form>
    )
}

export default MathCalculations