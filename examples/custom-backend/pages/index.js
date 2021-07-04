import { Header } from '../components/header'
import { Footer } from '../components/footer'
import { useTranslation } from 'react-i18next'
import { loadTranslations } from 'ni18n'
import { ni18nConfig } from '../components/config'
import HttpBackend from 'i18next-http-backend'

const IndexPage = () => {
  const { t } = useTranslation('home')
  return (
    <>
      <Header />
      <main>
        <h1>{t('title')}</h1>
        <p>{t('content')}</p>
        <p>{t('extraContent')}</p>
      </main>
      <Footer />
    </>
  )
}

export const getStaticProps = async (props) => {
  return {
    props: {
      ...(await loadTranslations(
        ni18nConfig,
        props.locale,
        ['home', 'translation'],
        [HttpBackend],
      )),
    },
  }
}

export default IndexPage