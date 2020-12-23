import {Card, Col, Row, Avatar} from 'antd'
import Link from 'next/link'
import calcStyle from '../styles/CalcCard.module.css'

const {Meta} = Card;

const CalculationCard = (props) => {
    const redirect = () => {
        return <Link href={"/"+props.link}/>
        
    }

    return (
        <Col span={4}>
            <Link href={"/"+props.link}>
                <Card hoverable bordered className={calcStyle.baseShape} cover={<img alt={props.name} src={"/images/icons/" + props.img + ".png"} onClick={() => redirect()} style={{width: "50%", display: "block", marginLeft: "auto", marginRight: "auto"}}/>}>
                    <Meta title={props.name} description={props.desc} style={{fontSize: "small"}}/>
                </Card>
            </Link>
        </Col>
    );
}


export default CalculationCard;