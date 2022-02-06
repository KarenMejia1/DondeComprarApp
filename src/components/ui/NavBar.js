import React from 'react'
import {
    BrowserRouter as Router,
    Link,
    NavLink,
    Route,
    Switch,
} from "react-router-dom";
import { GuardadosScreen } from '../Guardados/GuardadosScreen';
import { InicioScreen } from '../Inicio/InicioScreen';
import { MisComprasScreen } from '../MisCompras/MisComprasScreen';



export const NavBar = () => {
    return (

        <Router>

            <div>
                <nav className='navbar__main'>

                    <Link to='/inicio' className='link'>Donde Comprar</Link>

                    <div className='navbar__izq'>
                        <div>
                            <NavLink to='/mis-compras' className='link'>
                                Mis compras
                            </NavLink>
                            <NavLink to='/guardados' className='link'>
                                Guardados
                            </NavLink>
                        </div>
                    </div>

                    <div>
                        <ul>
                            <span>
                                Karen
                            </span>

                            <button>
                                Logout
                            </button>
                        </ul>
                    </div>
                </nav>

            </div>

            <Switch>
            <Route exact path='/inicio' component={InicioScreen} />
            <Route exact path='/mis-compras' component={MisComprasScreen} />
            <Route exact path='/guardados' component={GuardadosScreen} />
            
            
            </Switch>

        </Router >
    )
}