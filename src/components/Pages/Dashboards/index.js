import React, { useEffect, useContext, useState } from 'react';

import { SaleContext } from '../../../contexts/SaleContext';
import { ProductContext } from '../../../contexts/ProductContext';

import { Header } from '../styles/styles.js'
import { 
  Container,
  Main,
  HeaderDash,
  MidDash,
  BottomDash,
  Card,
  CardText,
  CardTitle,
  HeaderBox
} from './styles';

import { DashboardService  } from '../../../services/dashboardService';

function Dashboards() {

  const dashboardService = new DashboardService();
  
  const{ sales } = useContext(SaleContext)
  const{ products } = useContext(ProductContext)

  const [valorTotal, setValorTotal] = useState(0);
  const [gastoSemanal, setGastoSemanal] = useState(0);
  const [lucroSemanal, setLucroSemanal] = useState(0);
  const [bestSeller, setBestSeller] = useState([]);
  const [bestCustomer, setBestCustomer] = useState(0);

  useEffect(()=>{
    let sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

    const vendasSemanais = sales.filter((sale)=>{
      return converteData(sale.vendido_em) > sevenDaysAgo
    });

    setValorTotal(
      vendasSemanais.reduce((sum, sale)=>{
        return sum + sale.valor_venda;
      }, 0).toFixed(2)
    );

    setGastoSemanal(
      vendasSemanais.reduce((sumSpent, sale) => {
        return sumSpent + (sale.qtd * valorProduto(sale.id_produto))
      }, 0).toFixed(2)
    )

    async function callDashboardData() {
      await dashboardService
        .bestSeller('')
        .then(res => setBestSeller(res))
      await dashboardService
        .bestCustomer('')
        .then(res => setBestCustomer(res))
    }
    callDashboardData();


  },[sales]);

  useEffect(()=>{
    setLucroSemanal(valorTotal-gastoSemanal)
  },[valorTotal, gastoSemanal])

  function valorProduto(prodId) {
    const value = products.filter((product)=>{
      return product.id === prodId
    })
    return value[0].custo;
  };

  function converteData(DataDDMMYY) {
    const dataSplit = DataDDMMYY.split("-");
    const novaData = new Date(parseInt(dataSplit[0], 10),
                  parseInt(dataSplit[1], 10)-1,
                  parseInt(dataSplit[2], 10));
    return novaData;
  };

  return (
    <Container>
      <Header>
        <h1>Dashboard</h1>
      </Header>
      <Main>
        <HeaderDash>
          <HeaderBox>
            <Card className="card-body">
              <CardTitle className="card-body">Vendas Semanais</CardTitle>
              <CardText>R$ {valorTotal}   </CardText>
            </Card>
            <Card className="card-body">
              <CardTitle className="card-body">Lucro semanal</CardTitle>
              <CardText>R$ {lucroSemanal} </CardText>
            </Card>
            </HeaderBox>
            <HeaderBox>
            <Card className="card-body">
              <CardTitle className="card-body">Melhor Vendedor</CardTitle>
              <CardText>R$ {bestSeller.venda}<br/>{bestSeller.nome_vendedor}</CardText>
            </Card>
            <Card className="card-body">
              <CardTitle className="card-body">Melhor Cliente</CardTitle>
              <CardText>R$ {bestCustomer.venda}<br/>{bestCustomer.nome_cliente}</CardText>
            </Card>
          </HeaderBox>    
        </HeaderDash>

        <MidDash>

        </MidDash>
        <BottomDash>

        </BottomDash>
      </Main>
    </Container>
  );
}

export default Dashboards;