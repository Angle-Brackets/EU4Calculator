import {useState, useEffect} from 'react'
import {Button, Menu, Dropdown, Select} from 'antd'
import {TagsOutlined} from '@ant-design/icons';
import {categories} from '../utils/modifierData'

const TagSortButton = (props) => {
    const [visible, setVisible] = useState(false);
    const [mods, setMods] = useState([]);

    const handleMenuSelect = (m) => {
        setMods(m.selectedKeys)
        props.updateFunction(mods)
    }

    const handleMenuDeselect = (m) => {
        setMods(m.selectedKeys)
    }

    useEffect(() => {
        props.updateFunction(mods)
    }, [mods]);

    const handleVisibleChange = (flag) => {
        //Basically a function that intercepts the visible change to not make the dropdown disappear when its clicked.
        setVisible(flag);
    }

    const menu = () => (
        <Menu mode="vertical" multiple selectable onSelect={handleMenuSelect} onDeselect={handleMenuDeselect}>
                {categories.map(cat => (
                    <Menu.Item key={cat}>
                        {cat != "HRE" ? cat[0] + cat.substring(1).toLowerCase() : "HRE"}
                    </Menu.Item>
                ))}
        </Menu>
    );


    return (
        <Dropdown placement="bottomRight" overlay={menu} onVisibleChange={handleVisibleChange} visible={visible} trigger={['click']}>
            <Button size="large" icon={<TagsOutlined/>} style={{position: "absolute", marginLeft: "58%"}}/>
        </Dropdown>
 
    );
}

export default TagSortButton;