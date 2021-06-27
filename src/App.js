import "modern-css-reset"

import styled from "styled-components";

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

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
    const mockData = {
        categories: [
            {title: "Food", expense: 90, id: 1},
            {title: "Clothes", expense: 88, id: 2},
            {title: "Books", expense: 71, id: 3},
        ],
        income: [
            {title: "Salary", amount: 10000},
            {title: "Additional", amount: 5000}
        ],
    }

    const totalIncomeAmount = mockData.income.reduce((acc, cur) => acc + cur.amount, 0)

  return (
      <Container>
          <Router>
              <Header/>
              <Switch>
                  <Route path={"/categories"}>
                      <Categories categories={mockData.categories} totalIncomeAmount={totalIncomeAmount}/>
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
