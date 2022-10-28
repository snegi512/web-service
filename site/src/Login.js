import {Authorization} from "./Requests";
import {useState} from "react";



function Login(props) {
    const [login, Set_login] = useState('');
    const [pas, Set_pas] = useState('');
    function loginChangeHandler(event){
        Set_login(event.target.value)
    };
    function pasChangeHandler(event){
        Set_pas(event.target.value)
    };

    const d = {
        login: login,
        password: pas
    };

    function loginHandler() {
        Authorization(d, props.setauth);
        ;
    }




    return (
        <div>
        <section className="position-relative py-4 py-xl-5">
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-6 col-xl-4">
                        <div className="card mb-5">
                            <div className="card-body d-flex flex-column align-items-center">
                                <div className="text-center" >
                                    <div className="mb-3"><input className="form-control" type="text" name="login"
                                                                 placeholder="Login" value={login} onChange={loginChangeHandler}/>
                                    </div>
                                    <div className="mb-3"><input className="form-control" type="password"
                                                                 name="password"
                                                                 placeholder="Password" value={pas} onChange={pasChangeHandler}/></div>
                                    <div className="mb-3">
                                        <button className="btn btn-primary d-block w-100" type="submit" onClick={loginHandler}>Login</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
    );
}


export default Login;