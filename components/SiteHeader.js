import Head from 'next/head'
import { Layout, Input } from 'antd'
import headerStyle from '../styles/headerStyle.module.css'
import Link from 'next/link'
import CountrySearch from '../components/CountrySearch'

const {Header} = Layout;

const SiteHeader = (props) => {
    return (
        <Layout>
            <Head>
                <title>EU4 Calculator</title>
            </Head>
            <Header className={headerStyle.header}>
                <Link href="/">
                    <img src="/logo.svg" className={headerStyle.logo}/>
                </Link>
                {props.title == undefined ? "The Europa Universalis IV Calculator" : props.title}       
            </Header>
            {props.searchAvailable == true ? <CountrySearch/> : null}
        </Layout>
    );


}

export default SiteHeader