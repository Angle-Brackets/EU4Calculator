import {Typography, Col, Popover, Button, Row, Space, Checkbox} from 'antd';
import {beautifyModifiers} from '../utils/dictionary';

const { Title, Paragraph, Text } = Typography;

const IdeaSelector = (props) => {
    const {ideas, traditions} = props.countryData;
    let selectedGroups = []; //Stores the selected ideas for transport, not display, so the array is just meant to contain the bonuses in no order.
    let displayTrad = traditions; //Stores for display.
    let displayIdeas = ideas;
    
    displayTrad = beautifyModifiers(displayTrad);
    displayIdeas = beautifyModifiers(displayIdeas);

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
    //Will later change to a list element.
    return (
        <Typography>
            <Title level={4}>Traditions</Title>
            <Space direction="vertical">
                <Popover placement="right" title={"Default Traditions"} content={defaultTradDisplay}>
                    <Text style={{cursor: "pointer"}}> Default Traditions </Text>
                </Popover>

                <Popover placement="right" title={"Bonus Tradition"} content={<div style={{textTransform: "capitalize"}}><p>{displayTrad[1][0] + ": " + displayTrad[1][1]}</p></div>}>
                    <Text style={{cursor: "pointer"}}> Bonus Tradition </Text>
                </Popover>
            </Space>

            <Title level={4}>National Ideas</Title>
            <Space direction="vertical">
                {generateButtons(displayIdeas, ideas, props.onConfirm)}
            </Space>

        </Typography>
    );
}

function generateIdeaDisplay(ideaSet){
    return ideaSet.map((idea) => <p>{
        (ideaSet[ideaSet.indexOf(idea) + 1] != null && (idea.indexOf("%") == -1 && idea.indexOf("+") == -1)) ?  idea + ": " + ideaSet[ideaSet.indexOf(idea) + 1] : null
    }</p>
    )
}

function generateButtons(ideaList, ideaVals, callback){
    let num = 1;

    let allIdeas = (
        ideaList.map((ideaGroup) => 
        <Popover placement="right" title={"National Idea Set #" + num} content={<div style={{textTransform: "capitalize"}}>{generateIdeaDisplay(ideaGroup)}</div>}>
            <Text style={{cursor: "pointer"}}> National Idea Set #{num++} </Text>
        </Popover>
        )
    )

    return allIdeas;
}

export default IdeaSelector;