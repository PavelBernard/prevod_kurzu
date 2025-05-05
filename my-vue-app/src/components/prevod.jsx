import { useEffect, useState } from "react"

export const Prevod = () => {
    const [cislo, setCislo] = useState(0);

    const  [kurzy, setKurzy] = useState([]);

    const getKurvy = async () =>  {
        try  {
            const response = await fetch("https://api.frankfurter.dev/v1/latest?base=EUR");
            const data = await response.json();
            setKurzy(data.rates);
        } catch(error) {
            console.log(error)
        }
    };

    useEffect(() => {
        getKurvy();
    }, []);

    return(
        <div>
            <h1>
                Převod EUR do jiné měny
            </h1>
            <div>
                <input
                    type="text"
                    value={cislo}
                    onChange={(e) => setCislo(e.target.value)}
                    style={{ padding: '5px' }}
                />
                <select>
                    {kurzy && 
                        kurzy.map(key, value) => {
                            <option value={value}>{key}</option>
                        })
                    }
                </select>
                <button>Převeď</button>
            </div>
        </div>
    )
}