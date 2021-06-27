import "modern-css-reset"

import styled from "styled-components";

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import useData from "./useData"

import Header from "./Header";
import Home from "./Home";
import Categories from "./Categories";
import Income from "./Income";
import Expense from "./Expense";
import Footer from "./Footer"

const Container = styled.div`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    `

const App = () => {
    const categories = useData(state => state.categories);
    const expense = useData(state => state.expense);
    const income = useData(state => state.income);

    const totalIncomeAmount = income.reduce((acc, cur) => acc + cur.amount, 0)

  return (
      <Container>
          <Router>
              <Header/>
              <Switch>
                  <Route path={"/categories"}>
                      <Categories categories={categories} totalIncomeAmount={totalIncomeAmount}/>
                  </Route>
                  <Route path={"/expense"}>
                      <Expense/>
                  </Route>
                  <Route path={"/income"}>
                      <Income/>
                  </Route>
                  <Route path="/">
                      <Home/>
                  </Route>
              </Switch>
              <Footer/>
          </Router>
      </Container>
  );
}

export default App;
