function Navmenu(props) {
    var cname1, cname2
    if (props.pos){
        cname1 = "nav-link";
        cname2 = "nav-link active";
    }else{
        cname1 = "nav-link active";
        cname2 = "nav-link";
    }


    return (
        <div className="text-light d-table-cell"
             style={{"maxWidth":"30%","minWidth":"200px","minHeight":"0px","background":"var(--bs-gray-dark)","position":"sticky","display":"inline-block"}}>
            <nav className="navbar navbar-dark align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0">
                <div className="container-fluid d-flex flex-column p-0">
                    <hr className="sidebar-divider my-0"/>
                        <ul className="navbar-nav text-light" id="accordionSidebar">
                            <li className="nav-item"><a className={cname1} onClick={function (){
                                props.Spos(false)
                            }
                            }><i className="fas fa-shopping-cart"></i><span>Заказ</span></a></li>

                            {props.logined.role?<li className="nav-item"><a className={cname2}
                            onClick={function (){
                            props.Spos(true)
                            }
                            }><i
                                className="far fa-edit"></i><span>Редактор заказов</span></a></li>:null}
                        </ul>

                </div>
            </nav>
        </div>
    );
}

export default Navmenu;