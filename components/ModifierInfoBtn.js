import {InfoCircleOutlined} from '@ant-design/icons';
import {Button, Modal, Typography, Image} from 'antd'
import {modifierLength} from '../utils/modifierData'

const { Title, Paragraph, Text, Link } = Typography;

const ModifierInfoBtn = () => {
    const infoModal = () => {
        Modal.info({
          title: <Title>Modifiers and How to find them</Title>,
          width: "85%",
          content: (
            <Typography>
                <Title level={2}>What are Modifiers?</Title>
                <Paragraph>
                    A modifier is a value that affects various attributes of a country or province. There is an internal difference between
                    country and province modifiers, but this is not necessary if you are calculating something within the same scope (ie. Do not use
                    a national modifier for a province modifier), this is mostly handled by the calculator since calculations will clearly state this.
                    In addition, while the modifiers may say "MULTIPLICATIVE" or "ADDITIVE" next to them in the list, they will always added additively
                    before a calculation. So, if you somehow saw 2 separate bonuses for Infantry Cost, one being 0.1 and the other being 0.3, despite
                    that modifier being classified as "MULTIPLICATIVE", they would first add to be 0.4, then be multiplied by whatever equation needs it.
                    This shouldn't be a problem if you use the way I recommend to find the total aggregate bonuses on your country though.
                </Paragraph> 
                <Title level={2}>How to find them</Title>
                <Paragraph>
                    The easiest way to find the total aggregate modifiers in your EU4 game is to go to the Government Tab (shortcut 2) and click the +/- symbol next
                    to country modifiers (shortcut m in government tab) to find the entire aggregate list of your country's current modifiers. The image
                    below details this further.
                    <Image src={"/images/modifiersExample.png"} style={{marginLeft: "auto", marginRight: "auto", display: "block"}}/>
                </Paragraph>

                <Title level={3}>Extraneous Notes</Title>
                <Paragraph>
                    The current list of modifiers is mostly from 1.26. I know this is outdated, I am working on getting more modifiers (a decent bit are from 1.30). But the actual
                    equations should be accurate to the most recent version, if not, the calculation page will tell you. 
                </Paragraph>
                
                <Paragraph>
                    There are currently {modifierLength} modifiers available!
                </Paragraph>

            </Typography>
          ),
          onOk() {},
        });
    }
    
    return (
        <>
            <Button type="text" shape="circle" onClick={infoModal} style={{marginLeft: "0.5%"}}>
                <InfoCircleOutlined style={{fontSize: "24px"}}/>
            </Button>
        </>
    );
}

export default ModifierInfoBtn;