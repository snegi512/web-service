import './App.css';
import Nav from "./Nav";
import Login from "./Login";
import Main from "./Main";

import {
    QueryClient,
    QueryClientProvider,
    useQuery,
} from 'react-query';
import {useState} from "react";

const queryClient = new QueryClient();

function App() {
    const [auth, SetAuth] = useState(false);

    function authChangeHandler(bool) {
        SetAuth(bool);
    }
    return (
        <QueryClientProvider client={queryClient}>
            <REQ aut = {auth} authandler = {authChangeHandler}/>
        </QueryClientProvider>

    );
}
function REQ(props) {


    const { isLoading, error, data } = useQuery(
        'repoData',
        () =>
            fetch('http://127.0.0.1:8000/api/user',
                {
                    headers: {
                        'Accept': "application/json",
                        'Content-Type': "application/json",

                    },
                    credentials: 'include',
                }).then((response) => response.json())
    );

    if (isLoading) return <p>Загрузка...</p>;

    if (error) return <p>Ошибка: {error.message}</p>;
    console.log(data)

    if (data.message==null){
        props.authandler(false)
    }else {props.authandler(true)}


    return (
        <div>
            <Nav logined={data} setauth = {props.authandler}/>
            {props.aut ? <Login setauth = {props.authandler}/>: <Main logined={data}/>}
        </div>
    );

}

export default App;
