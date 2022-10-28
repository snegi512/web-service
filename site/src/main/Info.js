import {QueryClient, QueryClientProvider, useQuery} from "react-query";
import Nav from "../Nav";
import Login from "../Login";
import Main from "../Main";

const queryClient = new QueryClient();

function Info() {
    return (
        <div className="d-table-cell flex-wrap">
            {/*<div className="table-responsive d-lg-flex"*/}
            {/*     style={{"position":"sticky","overflowX":"auto","display":"block"}}>*/}
            {/*    /!*<table className="table">*!/*/}
            {/*    /!*    <thead>*!/*/}
            {/*    /!*    <tr>*!/*/}
            {/*    /!*        <th>Заказ</th>*!/*/}
            {/*    /!*        <th>Цена</th>*!/*/}
            {/*    /!*        <th>Статус</th>*!/*/}
            {/*    /!*    </tr>*!/*/}
            {/*    /!*    </thead>*!/*/}
            {/*    /!*    <tbody>*!/*/}
            {/*    /!*    <tr style={{"padding":"25px"}}>*!/*/}
            {/*    /!*        <td><i className="fas fa-plus"></i><i className="fas fa-minus"></i>Cell 1</td>*!/*/}
            {/*    /!*        <td>Cell 2</td>*!/*/}
            {/*    /!*        <td>Cell 3</td>*!/*/}
            {/*    /!*    </tr>*!/*/}
            {/*    /!*    <tr className="float-none">*!/*/}
            {/*    /!*        <td>*!/*/}
            {/*    /!*            <div className="table-responsive">*!/*/}
            {/*    /!*                <table className="table">*!/*/}
            {/*    /!*                    <thead style={{"width":"286.906px","paddingRight":"0px","marginRight":"0px"}}>*!/*/}
            {/*    /!*                    <tr style={{"padding":"25px"}}>*!/*/}
            {/*    /!*                        <th>Column 1</th>*!/*/}
            {/*    /!*                        <th>Column 2</th>*!/*/}
            {/*    /!*                    </tr>*!/*/}
            {/*    /!*                    </thead>*!/*/}
            {/*    /!*                    <tbody>*!/*/}
            {/*    /!*                    <tr style={{"padding":"25px"}}>*!/*/}
            {/*    /!*                        <td>Cell 1</td>*!/*/}
            {/*    /!*                        <td>Cell 2</td>*!/*/}
            {/*    /!*                    </tr>*!/*/}
            {/*    /!*                    <tr style={{"padding":"25px"}}>*!/*/}
            {/*    /!*                        <td>Cell 3</td>*!/*/}
            {/*    /!*                        <td>Cell 4</td>*!/*/}
            {/*    /!*                    </tr>*!/*/}
            {/*    /!*                    </tbody>*!/*/}
            {/*    /!*                </table>*!/*/}
            {/*    /!*            </div>*!/*/}
            {/*    /!*        </td>*!/*/}
            {/*    /!*    </tr>*!/*/}
            {/*    /!*    <tr></tr>*!/*/}
            {/*    /!*    </tbody>*!/*/}
            {/*    /!*</table>*!/*/}
            {/*</div>*/}
            <QueryClientProvider client={queryClient}>
                <REQ_Order/>
            </QueryClientProvider>
        </div>
    );
}


function REQ_Order(props) {
    const { isLoading, error, data } = useQuery(
        'repoData',
        () =>
            fetch('http://127.0.0.1:8000/api/Get_order',
                {
                    method: 'POST',
                    body: {},
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
        <pre>{JSON.stringify(data, null, ' ')}</pre>
    );

}
export default Info;