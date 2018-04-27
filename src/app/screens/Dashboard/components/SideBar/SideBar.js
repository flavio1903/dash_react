import React from 'react';
import Radium, {Style} from 'radium';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import Drawer from 'material-ui/Drawer';
import Drawer from '../../components/Drawer/Drawer';
import {List, ListItem} from 'material-ui/List';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router-dom';

import Logo from '../../components/Logo/Logo';

import FaBarChart from 'react-icons/lib/fa/bar-chart';
import FaHeadphones from 'react-icons/lib/fa/headphones';
import FaCogs from 'react-icons/lib/fa/cogs';
import FaGroup from 'react-icons/lib/fa/group';
import FaPowerOff from 'react-icons/lib/fa/power-off';

import styles from './styles'

class SideBar extends React.Component {

  state = {
    open: false,
  };

  handleToggle = () => {
    this.setState({
      open: !this.state.open,
    });
  };

  handleNestedListToggle = (item) => {
    this.setState({
      open: item.state.open,
    });
  };

  render() {
    return (
      <div>
        <MuiThemeProvider>
          <Drawer 
            containerStyle={(!this.props.open) ? styles.drawerClosed : {}}
            open={this.props.open}
            docked={this.props.drawer_docked}
            onRequestChange={this.props.handleToggle}
          >
            <Logo styles={{backgroundColor: '#333', height:'50px'}}/>
            <List>
              <ListItem
                primaryText="Analytics"
                leftIcon={<FaBarChart />}
                primaryTogglesNestedList={true}
                nestedItems={[
                  <ListItem
                    key={1}
                    primaryText="Adopcion"
                    containerElement={<Link to="/adopcion" />}
                  />,
                  <ListItem
                    key={2}
                    primaryText="Actividad"
                    containerElement={<Link to="/actividad" />}
                  />,
                  <ListItem
                    key={3}
                    primaryText="Transacciones"
                    containerElement={<Link to="/transacciones" />}
                  />,
                  <ListItem
                    key={4}
                    primaryText="Beneficios (beta)"
                    containerElement={<Link to="/beneficios" />}
                  />
                ]}
              />

              <ListItem
                primaryText="Atención al cliente"
                leftIcon={<FaHeadphones />}
                primaryTogglesNestedList={true}
                nestedItems={[
                  <ListItem
                    key={1}
                    primaryText="Perfil de cliente"
                    containerElement={<Link to="/perfil" />}
                  />,
                  <ListItem
                    key={2}
                    primaryText="Video Chat"
                    containerElement={<Link to="/videochat" />}
                  />
                ]}
              />

              <ListItem
                primaryText="Configuracion"
                leftIcon={<FaCogs />}
                primaryTogglesNestedList={true}
                nestedItems={[
                  <ListItem
                    key={1}
                    primaryText="Permisos"
                    containerElement={<Link to="/permisos" />}
                  />,
                  <ListItem
                    key={2}
                    primaryText="Chatbot"
                    containerElement={<Link to="/chatbot" />}
                  />
                ]}
              />

              <ListItem
                key={6}
                primaryText="Social"
                containerElement={<Link to="/social" />}
                leftIcon={<FaGroup />}
              />
              <ListItem
                key={7}
                primaryText="Salir"
                containerElement={<Link to="/salir" />}
                leftIcon={<FaPowerOff />}
              />
            </List>
          </Drawer>
        </MuiThemeProvider>
    </div>
    );
  }
}


export default Radium(SideBar);