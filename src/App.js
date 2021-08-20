import { Container } from "semantic-ui-react";
import "./App.css";
import MainHeader from "./components/MainHeader";
import NewEntryForm from './components/NewEntryForm';
import DisplayBalances from './components/DisplayBalances'
import DisplayBalance from './components/DisplayBalance';
import EntryLine from './components/EntryLine'

function App() {
  return (
    <Container>
      <MainHeader title="Budget"/>

      <DisplayBalance title="your balance" value="21342.23"/>
       <DisplayBalances />     
     

      <MainHeader title="History" type="h3"/>

      <EntryLine description="income" value="$2422"/>
      <EntryLine description="expense" value="$2422" isExpense="true"/>
      <EntryLine description="income" value="$546"/>
      
      <MainHeader title="Add new transaction" type="h3"/>
      <NewEntryForm />
      
    </Container>
  );
}

export default App;
