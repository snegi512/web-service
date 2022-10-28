import {QueryClient, QueryClientProvider, useQuery} from "react-query";
import Nav from "../Nav";
import Login from "../Login";
import Main from "../Main";

import {useState} from "react";
import ProdForm from "./form/ProdForm";
const queryClient = new QueryClient();

function OrderEditor() {
    return (
        <div className="d-table-cell flex-wrap">
            <QueryClientProvider client={queryClient}>
                <REQ_Data/>
            </QueryClientProvider>
        </div>
    );
}


function REQ_Data(props) {





    const { isLoading, error, data } = useQuery(
        'repoData',
        () =>
            fetch('http://127.0.0.1:8000/api/LoadData',
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

    return (
        <div>
            <ProdForm/>
        </div>
    );

}
export default OrderEditor;