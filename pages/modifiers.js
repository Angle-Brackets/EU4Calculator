import {useState, useContext} from 'react'
import {Layout, Typography, List, Tag, Input, Avatar, Switch} from 'antd'
import SiteHeader from '../components/siteHeader'
import TagSortButton from '../components/TagSortButton'
import ModifierInfoBtn from '../components/ModifierInfoBtn'
import {Context} from '../contexts/countryContext'
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';


import {modifiers, categories, categoryColors} from '../utils/modifierData'

const {Header, Content, Footer} = Layout
const {Title, Text} = Typography
const {Search} = Input

const Modifiers = () => {
    const [searchFilter, setSearchFilter] = useState(modifiers); 
    const [searchTerm, setSearchTerm] = useState(""); //This is only really used for the tag function, since I need the search term to 
    const context = useContext(Context)

    const generateID = (name) => {
        return name.toLowerCase().replace(/ /gi, "_")
    }


    const search = value => {
        if(value != ""){
            setSearchFilter(searchFilter.filter(mod => mod.name.toLowerCase().indexOf(value.toLowerCase()) != -1))
        }
        else {
            setSearchFilter(modifiers)
        }
    }

    const updateTagFilter = tags => {
        if(tags.length != 0){
            setSearchFilter(searchFilter.filter(mod => tags.indexOf(mod.category) != -1))
        }
        else{
            setSearchFilter(modifiers)
        }
    }
    //This is for actual numbers.
    const updateContext = (e, name) => {
        let id = generateID(name)

        if(context.modifiers[id] != undefined){
            context.modifiers[id] = parseFloat(e.target.value)
        }
    }

    const parseTags = (mod) => {
        
        let tags = []
        tags.push(<Tag color={categoryColors[categories.indexOf(mod.category)]}>{mod.category}</Tag>)
        tags.push(mod.function == "ADDITIVE" ? <Tag color="#389e0d">ADDITIVE</Tag> : mod.function.indexOf("CONSTANT") != -1 ? <Tag color="#807a79">CONSTANT</Tag> : <Tag color="#1890ff">MULTIPLICATIVE</Tag>)
        tags.push(mod.type == "WHOLE NUMBER" ? <Tag color="#531dab">WHOLE NUMBER</Tag> : <Tag color="#d48806">PERCENTAGE</Tag>)
        return tags
    }

    return (
        <Layout>
            <SiteHeader/>
            <Content style={{ padding: '1% 3%', backgroundColor: "white"}}>
                <Typography>
                    <Title level={2} style={{textAlign: "center"}}>
                        Modifier List
                    </Title>
                </Typography>

                <List dataSource={searchFilter} header={<div style={{display: "flex"}}> <Title level={3} style={{paddingLeft: "24px"}}>Modifiers</Title> <ModifierInfoBtn/> <TagSortButton updateFunction={updateTagFilter}/> <Search allowClear placeholder="Input Modifier Name" enterButton size="large" onSearch={search} style={{width:"50%", marginLeft: "50%"}}/></div>} size="large" itemLayout="horizontal" style={{boxShadow: "rgba(0, 118, 220, 0.18) 2px 2px 15px", borderRadius: "12px"}}
                    renderItem={mod => (
                        <List.Item extra={parseTags(mod)}>
                            <List.Item.Meta description={mod.desc} avatar={<Avatar src={mod.image}/>} title={<div style={{display: "flex"}}><Title level={5}>{mod.name}: </Title> {mod.function != "CONSTANT - TOGGLE" ? <Input defaultValue={context.modifiers[generateID(mod.name)]} key={mod.name} onChange={(e) => updateContext(e, mod.name)} style={{borderColor: "transparent transparent rgb(217,217,217) transparent", paddingLeft: "0px", width: "5%", height: "1.25rem", fontSize: "1rem"}}/> : <Switch key={mod.name} onChange={(value) => context.modifiers[generateID(mod.name)] = value} checkedChildren={<CheckOutlined/>} unCheckedChildren={<CloseOutlined/>} defaultChecked={context.modifiers[generateID(mod.name)]} style={{marginLeft: "0.75%"}}/>} <Title level={5}>{mod.type == "WHOLE NUMBER" || mod.function == "CONSTANT" ? "" : "%"}</Title></div>}/>
                        </List.Item>
                    )}
                />
            </Content>
            

        </Layout>
    );
}

export default Modifiers