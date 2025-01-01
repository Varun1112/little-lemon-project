import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'
import GlobalStyles from "./styles/global";
import Routes from "./routes"

function App() {

  return (
    <BrowserRouter basename="/">
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  </BrowserRouter>
  )
}

export default App
