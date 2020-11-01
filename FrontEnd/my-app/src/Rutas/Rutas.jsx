/*IMPORT-REACT*/
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
/*IMPORT-COMPONENTS*/
import Inicio_sesion from '../Componentes/Inicio_sesion';
import Registro from '../Componentes/Registro';
import Solicitud from '../Componentes/Solicitud';
import Favoritos from '../Componentes/Favoritos';
import Historial from '../Componentes/Historial';
import Ajustes from '../Componentes/Ajustes';
import Notificaciones from '../Componentes/Notificaciones';
/*IMPORT-SUB-COMPONENT*/
import Ajustes_sub_name from '../Componentes/Ajustes_sub_name';
import Ajustes_sub_pass from '../Componentes/Ajustes_sub_password';
import Ajustes_sub_mail from '../Componentes/Ajustes_sub_mail';
/*FESTIVO*/
import Inicio_festivo from '../Componentes_festivos/Inicio_sesion_halloween';
import Registro_festivo from '../Componentes_festivos/Registro_halloween';

function Rutas() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Inicio_sesion} />
                <Route exact path="/Registro" component={Registro} />
                <Route exact path="/Solicitud" component={Solicitud} />
                <Route exact path="/Ajustes" component={Ajustes} />
                <Route exact path="/Favoritos" component={Favoritos} />
                <Route exact path="/Historial" component={Historial} />
                <Route exact path="/Notificaciones" component={Notificaciones} />
                
                <Route exact path="/Ajustes/Editar_nombre" component={Ajustes_sub_name} />
                <Route exact path="/Ajustes/Editar_correo" component={Ajustes_sub_mail} />
                <Route exact path="/Ajustes/Editar_contraseña" component={Ajustes_sub_pass} />

                <Route exact path="/_h" component={Inicio_festivo} />
                <Route exact path="/Registro_h" component={Registro_festivo} />
            </Switch>
        </BrowserRouter>
    )
}
export default Rutas;