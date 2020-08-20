import styled from 'styled-components';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

export const Header = styled.div`
  z-index:4;
  position: sticky;
  top: 0;
  height: 60px;
  background: var(--banner);

  display: flex;
  align-items: center;

  text-align: left;

  padding: 8px 0px 9px 40px;
`

export const PrimeDataTable = styled(DataTable)`
  z-index:2;
  position: sticky;
  top: 0;
  background: var(--primary);
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;

  text-align: left;

  padding-top: 15px;

    @media (max-width: 480px){
        padding:10px;
    }
    
`

export const Container = styled.div`
  z-index:2;
  top: 0;
  background: var(--primary);
  display: flex;
  flex-direction: column;

  text-align: left;

  padding: 40px;

    @media (max-width: 480px){
        padding:10px;
    }
    
`

export const PrimeColumn = styled(Column) `
    color: '#999';
`

export const ShowOnEdit = styled.div `
    display: ${ ( { show }) => show ? 'flex' : 'none' };
`