import {Card, Button, Col, Modal, Skeleton, message} from 'antd'
import {useState, useContext} from 'react'
import fetch from 'isomorphic-unfetch'
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';
import {Context} from '../contexts/countryContext'

import IdeaSelector from '../components/IdeaSelector';

const {Meta} = Card;

const CountryPanel = (props, {data}) => {
    const [visible, setVisible] = useState(false);
    const [country, setCountry] = useState(data);
    const context = useContext(Context);
    
    const showModal = () => {
        setVisible(true);
    }

    const handleCancel = () => {
        setVisible(false);
    }

    const handleOk = (bonuses) => {
        if(country != null){
            context.name = country.countryName;
            context.tag = country.countryTag;
            context.flag = country.imagePath;
            context.bonuses = bonuses;
            message.success(country.countryName + " selected successfully.");
        }
        else {
            message.error(props.countryName + " could not be selected.")
        }

        setVisible(false);
    }

    const selectBonuses = (bonus) => {
        
    }

    const pullCountryData = async () => {
        try{
            const res = await fetch("http://localhost:3000/api/countries?countryTag=" + props.countryId);
            const json = await res.json();
            setCountry(json);
        } catch(error){
            setCountry(undefined);
        }   
    }
//Notes: make a new callback function for setting ideas nerd
    return (
        <Col span={4}>
            <Card hoverable bordered cover={<img alt={props.countryName} src={`/images/flags/${props.countryId}.png`} onClick={() => {pullCountryData(); showModal();}} style={{width: "50%", display: "block", marginLeft: "auto", marginRight: "auto", borderRadius: "9999px"}}/>} style={{ width: 240, textAlign: "center"}}>
                <Meta title={props.countryName} style={{fontSize: "large"}}/>
            </Card>
            <Modal visible={visible} loading={true} title={props.countryName} footer={[<Button key="select all" onClick={handleOk}>Select All</Button>,<Button key="back" icon={<CloseOutlined/>} onClick={handleCancel}/>, <Button key="submit" icon={<CheckOutlined/>} onClick={handleOk}/>]} onCancel={handleCancel} bodyStyle={{width: 400}}> 
                {country ? <IdeaSelector countryData={country} onConfirm={selectBonuses}/> : <Skeleton active/>}
            </Modal>  
        </Col>
    );
}

export default CountryPanel;