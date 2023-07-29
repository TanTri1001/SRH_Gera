import './App.css'
import InitialState from "./views/InitialState/InitialState.jsx";
import {Route, Switch} from "wouter";
import HomeView from "./views/HomeView/HomeView.jsx";
import {IntlProvider} from "react-intl";
import PreparationView from "./views/PreparationView/PreparationView.jsx";
import DocumentsView from "./views/DocumentsView/DocumentsView.jsx";


const DEFAULT_LOCALE = 'en'


function App() {
    // const locale = 'en'
      return (
        <>
            {/*<IntlProvider*/}
            {/*    messages={{}}*/}
            {/*    locale={locale}*/}
            {/*    defaultLocale={DEFAULT_LOCALE}>*/}


                <Switch>
                    <Route path="/">
                        <InitialState />
                    </Route>
                    <Route path="/home/:patientCode" component={HomeView} />

                    <Route path="/preparation/:patientCode" component={PreparationView}>
                    </Route>
                    <Route path="/documents/:patientCode" component={DocumentsView} />

                </Switch>
            {/*</IntlProvider>*/}
        </>
  )
}

export default App
