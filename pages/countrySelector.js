import {Layout, Button, Row, Col, Input} from 'antd'
import CountryPanel from "../components/CountryPanel";
import {getCountries, getIDs} from '../utils/getIdentifiers'
import SiteHeader from '../components/SiteHeader'

const { Header, Footer, Sider, Content } = Layout;
const { Search } = Input;

const COUNTRIES = getCountries() //I know its sloppy, but tell JS to make file reading easier
const IDs = getIDs()
let countriesFiltered = COUNTRIES;

//There is a known bug with refreshing on this page in regards to the top bar not being the correct color, still unsure how to fix.
export default function countrySelector() {
    return (
      <Layout style={{overflowX: "hidden"}}>
           <SiteHeader title="Countries" searchAvailable={true}/>
           <Content>
             <Row gutter={16}>
                {countriesFiltered.map(country => (
                  <CountryPanel countryName={country} countryId={IDs[COUNTRIES.indexOf(country)]} key={country}/>
                ))}
             </Row>
           </Content>

       </Layout>
    );
}