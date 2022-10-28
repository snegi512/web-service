export async function Authorization(data, setauth) {
    const url = 'http://127.0.0.1:8000/api/login';
    try {
        const response = await fetch(url, {
            method: 'POST', // или 'PUT'
            body: JSON.stringify(data), // данные могут быть 'строкой' или {объектом}!
            headers: {
                'Accept': "application/json",
                'Content-Type': "application/json",

            },
            credentials: 'include',
        });
        const json = await response.json()
        setauth(true);
        console.log('Успех:', JSON.stringify(json));
    } catch (error) {
        console.error('Ошибка:', error);
    }

}
export async function User() {
    const url = 'http://127.0.0.1:8000/api/user';
    const data = {
    };

    try {
        const response = await fetch(url, {
            headers: {
                'Accept': "application/json",
                'Content-Type': "application/json",

            },
            credentials: 'include',
        });
        const json = await response.json();
        //console.log('Успех:', JSON.stringify(json));
        //console.log(json.message)
        return json
    } catch (error) {
        console.error('Ошибка:', error);
    }
}

export async function Logout(setauth){
    const url = 'http://127.0.0.1:8000/api/logout';
    try {
        const response = await fetch(url, {
            method: 'POST', // или 'PUT'
            headers: {
                'Accept': "application/json",
                'Content-Type': "application/json",

            },
            credentials: 'include',
        });
        const json = await response.json();
        console.log('Успех:', JSON.stringify(json));
        setauth(false)
    } catch (error) {
        console.error('Ошибка:', error);
    }
}