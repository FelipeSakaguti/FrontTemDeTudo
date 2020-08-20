import styled, { css } from 'styled-components';

import { Dashboard, Handshake, PersonCircle, ShoppingBag, IdCard } from '../../styles/Icons';

export const Menu = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    background: var(--menu-background);

    position: sticky;
    top: 0;
    left: 0;
    padding: 9px 9px 20px 19px;
    max-height: 100vh;

    overflow-y: auto;

    margin-left: 0px;
    @media (min-width: 960px){
        padding: 9px 59px 20px 19px;
    }

    @media (max-width: 480px){
        position: fixed;

        z-index: 99;
        
        top: ${ ( { toggled }) => toggled ? '0' : '-100%' };

        width: 100%;
        height: 100%;
        
        overflow-y: auto;
        transition: all 0.3s linear;
    }
`;

export const TopSide = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: var(--menu-font);

    @media (min-width: 480px){
        align-items: flex-start;
    }

    @media (max-width: 480px){
        align-items: flex-start;
        background: var(--menu-background);
    }

    > a {
        text-decoration:none;
    }
`;

export const Logo = styled.div`
    width: 41px;
    height: 41px;

    > path {
        fill: var(--menu-font);
    }
`;

export const MenuButton = styled.button`
    z-index: 99;
    display: flex;
    text-decoration: none;
    align-items: left;
    > span {
        display: none;
        color: var(--menu-font);;
    }

    @media (min-width: 960px) {
        > span {
            display: inline;
            margin-left: 19px;

            font-weight: bold;
            font-size: 19px;
        }

        padding-right: 35px;
    }

    @media (max-width: 480px) {
        > span {
            display: inline;
            margin-left: 19px;

            font-weight: bold;
            font-size: 19px;
        }

        padding-right: 35px;
    }

    padding: 12px 0;
    outline: 0;

    & + button {
        margin-top: 20px;
    }

    cursor: pointer;
    border-radius: 5px;

    &:hover {
        background: var(--menu-hover);
    }
`;

const iconCSS = css`
    flex-shrink:0;

    width: 30px;
    height: 30px;
    color: var(--menu-font);

    margin-left: 0px;
    @media (min-width: 960px){
        margin-left: 15px;
    }
`;

export const DashboardIcon = styled(Dashboard)`${iconCSS}`;
export const VendasIcon = styled(Handshake)`${iconCSS}`;
export const ClientesIcon = styled(PersonCircle)`${iconCSS}`;
export const ProdutosIcon = styled(ShoppingBag)`${iconCSS}`;
export const VendedoresIcon = styled(IdCard)`${iconCSS}`;