import {Typography, Col, Popover, Button} from 'antd';
import {beautifyModifiers} from '../utils/dictionary';

const { Title, Paragraph, Text } = Typography;

const IdeaSelector = (props) => {
    const {ideas, traditions} = props.countryData;
    let selectedGroups = []; //Stores the selected ideas for transport, not display, so the array is just meant to contain the bonuses in no order.
    let displayTrad = traditions; //Stores for display.
    
    displayTrad = beautifyModifiers(displayTrad);

    const defaultTradDisplay = (
        <div style={{textTransform: "capitalize"}}>
            <p>
                {displayTrad[0][0] + ": " + displayTrad[0][1]}
            </p>
            <p>
                {displayTrad[0][2] + ": " + displayTrad[0][3]}
            </p>
        </div>
    );


    return (
        <Typography>
            <Title level={4}>Traditions</Title>
            <Col span={24}>
                <Popover placement="right" title={"Default Traditions"} content={defaultTradDisplay}>
                    <Button> Default Traditions </Button>
                </Popover>
            </Col>
        </Typography>
    );
}

export default IdeaSelector;