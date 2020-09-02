import utilStyles from '../styles/utils.module.css'
import {Layout, Button, Row, Col, Input} from 'antd'
import { ArrowLeftOutlined } from '@ant-design/icons';
import CountryPanel from "../components/CountryPanel";
import {getCountries, getIDs} from '../utils/getCountryOrID'

const { Header, Footer, Sider, Content } = Layout;
const { Search } = Input;

const COUNTRIES = getCountries() //I know its sloppy, but tell JS to make file reading easier
const IDs = getIDs()

export default function countrySelector() {
    return (
      <Layout style={{overflowX: "hidden"}}>
           <Header className={utilStyles.siteHeading2Xl} style={{backgroundColor: "rgba(88, 107, 232)" , color: "white", textAlign: "center"}}>
             <Button className={utilStyles.backButton} style={{backgroundColor: "rgba(88, 107, 232)", border: "none", marginTop: "0.55rem", position: "absolute", left: "2%"}} icon={<ArrowLeftOutlined/>} shape="circle" ghost="true" size="large" href="/"/>
             <Search placeholder="Enter Country Name" onSearch={value => console.log(value)} enterButton style={{position: "absolute", right: "2%", width: 200, marginTop: "1rem"}}/>
             Countries
           </Header>

           <Content>
             <Row gutter={16}>
                {COUNTRIES.map(country => (
                  <CountryPanel countryName={country} countryId={IDs[COUNTRIES.indexOf(country)]} key={country}/>
                ))}
             </Row>
           </Content>

       </Layout>
    );
}