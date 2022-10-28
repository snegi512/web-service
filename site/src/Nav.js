import {Logout} from "./Requests";

function Nav(props) {
    const log = props.logined;
    const setauth = props.setauth
    var Heading, st
    if (log.message){
        Heading = "Вход"
        st={visibility:'hidden'}
    }else{
        Heading = log.name
        st={visibility:'visible'}
    }
    function LogoutHandler(){
        Logout(setauth)
    }

    return (
        <nav className="navbar navbar-dark navbar-expand bg-dark py-3">
            <div className="container">
                <div className="collapse navbar-collapse flex-grow-0 order-md-first" id="navcol-6">
                    <div className="d-md-none my-2">
                        <button className="btn btn-primary" type="button" onClick={Logout} style={st}>Выход2</button>
                    </div>
                </div>
                <h1 style={{"paddingLeft":"0px","color":"var(--bs-navbar-brand-color)"}}>{Heading}</h1>
                <div className="d-none d-md-block"><a className="btn btn-primary" role="button" href="#" onClick={Logout} style={st}>Выход</a></div>
            </div>
        </nav>
    );
}

export default Nav;