import "../css/inp.css"
import {useState} from "react";
function ProdForm() {

    const [name, Set_name] = useState('');
    const [count, Set_count] = useState('');

    function nameChangeHandler(event){
        Set_name(event.target.value)
    };
    function countChangeHandler(event){
        Set_count(event.target.value)
    };
    function submit(event){
        AddProd(name, count)
        Set_name("")
        Set_count("")
    };
    return (
        <div>
            <p1>Добавить товар</p1><tr></tr>
            <input type="text" value={name} className="type-2" placeholder = "Название" onChange={nameChangeHandler}/>
            <input type="text" value={count} className="type-2" placeholder = "Цена" onChange={countChangeHandler}/>
            <button className="btn btn-primary d-block w-100" onClick={submit}>Добавить</button>
        </div>
    );
}

export async function AddProd(name1, count1) {
    const url = 'http://127.0.0.1:8000/api/AddProduct';
    const data = {
        'name': name1,
        'price': count1
    };
    console.log(data)
    try {
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Accept': "application/json",
                'Content-Type': "application/json",

            },
            credentials: 'include',
        });
        const json = await response.json();
        console.log('Успех:', JSON.stringify(json));
        //console.log(json.message)
        return json
    } catch (error) {
        console.error('Ошибка:', error);
    }
}
export default ProdForm;