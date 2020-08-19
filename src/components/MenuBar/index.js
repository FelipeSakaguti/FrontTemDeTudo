import React from 'react';

import { Link } from 'react-router-dom';

import { 
  Menu,
  TopSide,
  Logo,
  MenuButton,
  DashboardIcon,
  VendasIcon,
  ClientesIcon,
  ProdutosIcon,
  VendedoresIcon
} from './styles';

function MenuBar( {toggled, setToggle}) {
  return(
    <Menu toggled={toggled} >
      <TopSide>
        <Logo />
        <Link to="/">
          <MenuButton onClick={()=>setToggle(false)}>
            <DashboardIcon />
            <span>Dashboards</span>
          </MenuButton>
        </Link>
        <Link to="/vendas">
          <MenuButton onClick={()=>setToggle(false)}>
            <VendasIcon />
            <span>Vendas</span>
          </MenuButton>
        </Link>
        <Link to="/clientes">
          <MenuButton onClick={()=>setToggle(false)}>
            <ClientesIcon />
            <span>Clientes</span>
          </MenuButton>
        </Link>
        <Link to="/produtos">
          <MenuButton onClick={()=>setToggle(false)}>
            <ProdutosIcon />
            <span>Produtos</span>
          </MenuButton>
        </Link>
        <Link to="/vendedores">
          <MenuButton onClick={()=>setToggle(false)}>
            <VendedoresIcon />
            <span>Vendedores</span>
          </MenuButton>
        </Link>
      </TopSide>
    </Menu>
  );
}

export default MenuBar;