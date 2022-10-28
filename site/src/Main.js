import Info from "./main/Info";
import Navmenu from "./main/Navmenu";
import {useState} from "react";
import OrderEditor from "./main/OrderEditor";

function Main(props) {
    const [position,Setposition] = useState(false)
    return (
        <section className="position-relative py-4 py-xl-5">
            <div className="row d-flex justify-content-center">
                <div className="col" style={{"paddingRight": "0", "paddingLeft": "0"}}>
                    <div>
                        <Navmenu pos = {position} Spos={Setposition} logined = {props.logined}/>
                        {position? <OrderEditor/> : <Info/>}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Main;