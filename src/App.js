import React from 'react';
import { BrowserRouter, Switch, Route,IndexRoute } from 'react-router-dom';
import Navbar from './component/layout/navbar';
import Home from './component/pages/home';
import About from './component/pages/about';
import Product from './component/pages/product';
import Process from './component/pages/process';
import Sustainbility from './component/pages/susnatainbility';
import Customers from './component/pages/customers';
import  ToggleContextProvider from './component/context/toggleContext';
import Contact from './component/pages/contact';
import BookForm from './component/layout/bookForm';
import Suplier from './component/customersForm/Supplier';
import Subcontractor from './component/customersForm/Subcontractor';
import Generalcontractor from './component/customersForm/Generalcontractor';
import Realestate from './component/customersForm/realestateForm';
function App() {

  return (
    <BrowserRouter>
    <div className="App">
      <ToggleContextProvider>
      <Navbar />

      <Switch>
        <Route exact path='/'component={Home} />
        <Route  path='/about'component={About} />
        <Route  path='/product'component={Product} />
        <Route  path='/process'component={Process} />
        <Route  path='/Sustainbility'component={Sustainbility} />
        <Route path="/customers" component={Customers}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/bookForm" component={BookForm}/>
        <Route path="/suplier" component={Suplier}/>
        <Route path="/Subcontractor" component={Subcontractor}/>
        <Route path="/Generalcontractor" component={Generalcontractor}/>
        <Route path="/Realestate" component={Realestate}/>
      </Switch>
    
      </ToggleContextProvider>
    </div>
  </BrowserRouter>
  );
}

export default App;
