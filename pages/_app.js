import '../styles/globals.css'
import { useStore } from '../redux/store'
import { Provider } from 'react-redux'
import styled from 'styled-components'

const ContentWrapper = styled.div`
    max-width: 1060px;
    margin: 0 auto;
`

function MyApp({ Component, pageProps }) {

  const store = useStore(pageProps.initialReduxState)

  return (
    <Provider store = {store}>
      <ContentWrapper>
        <Component {...pageProps} />
      </ContentWrapper>
    </Provider>
  )
}

export default MyApp
