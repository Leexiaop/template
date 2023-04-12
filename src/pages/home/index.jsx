import './index.less';
import {Button, Tabs} from 'antd-mobile';
export default () => {
    return (
        <div className="home">
            <Button color="primary" fill="solid">
        Solid
            </Button>
            <Tabs defaultActiveKey="1">
                <Tabs.Tab title="Espresso" key="1">
          1
                </Tabs.Tab>
                <Tabs.Tab title="Coffee Latte" key="2">
          2
                </Tabs.Tab>
                <Tabs.Tab title="Cappuccino" key="3">
          3
                </Tabs.Tab>
                <Tabs.Tab title="Americano" key="4">
          4
                </Tabs.Tab>
                <Tabs.Tab title="Flat White" key="5">
          5
                </Tabs.Tab>
                <Tabs.Tab title="Caramel Macchiato" key="6">
          6
                </Tabs.Tab>
                <Tabs.Tab title="Cafe Mocha" key="7">
          7
                </Tabs.Tab>
            </Tabs>
        </div>
    );
};
