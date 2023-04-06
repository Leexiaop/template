import {useEffect, useState} from 'react';
import {ConfigProvider, Layout, Menu, Avatar, Space, Dropdown} from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import {connect} from 'dva';
import {UserOutlined, SlackSquareFilled, DownOutlined} from '@ant-design/icons';
// import logo from '../assets/texture/logo.png';
import {useHistory} from 'umi';
import menu from '@/routers/routers';
import './index.less';

const {Header, Content, Sider} = Layout;

const Index = (props) => {
    const {children, loginUser} = props;
    const [selectedKey, setSelectedKey] = useState('1');
    const history = useHistory();
    useEffect(() => {
        setSelectedKey(menu.find(item => history.location.pathname.indexOf(item.path) > -1)?.key);
    }, [history.location.pathname]);

    const onMenuChange = e => {
        setSelectedKey(e.key);
        history.push(menu.find(item => item.key === e.key)?.path);
    };
    return (
        <ConfigProvider locale={zhCN}>
            <Layout>
                <Header>
                    <Space
                        style={{
                            width: '100%',
                            color: '#fff',
                            display: 'flex',
                            justifyContent: 'space-between'
                        }}
                    >
                        <Avatar
                            size="16"
                            style={{
                                backgroundColor: '#87d068'
                            }}
                            shape="square"
                            icon={<SlackSquareFilled />}
                        />
                        <Space>
                            <Avatar
                                style={{
                                    backgroundColor: '#87d068'
                                }}
                                icon={<UserOutlined />}
                            />
                            <Dropdown
                                menu={
                                    [{key: 1, label: '退出'}]
                                }
                            >
                                <a onClick={(e) => e.preventDefault()}>
                                    <Space>
                                        {loginUser.name}
                                        <DownOutlined />
                                    </Space>
                                </a>
                            </Dropdown>
                        </Space>
                    </Space>
                </Header>
                <Layout>
                    <Sider
                        style={{
                            overflow: 'scroll'
                        }}
                    >
                        <Menu
                            theme="dark"
                            mode="inline"
                            selectedKeys={selectedKey}
                            items={menu}
                            onClick={onMenuChange}
                        />
                    </Sider>
                    <Content
                        style={{
                            overflow: 'scroll',
                            padding: 24
                        }}>
                        {children}
                    </Content>
                </Layout>
            </Layout>
        </ConfigProvider>
    );
};

const mapStateToProps = ({state}) => {
    return {
        loginUser: state.loginUser
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setData(data) {
            dispatch({type: 'state/setData', data});
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Index);

