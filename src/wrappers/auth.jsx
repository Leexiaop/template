import {Spin} from 'antd';
// import request from '@/utils/request';
// import {history} from 'umi';
import {connect} from 'dva';
import {useEffect} from 'react';
import {debounce, isEmpty} from 'lodash';

const Auth = (props) => {
    const {loginUser, setData} = props;
    const query = debounce(() => {
        // request.get('/user/current').then((res) => {
        //     const resources = res?.data?.resources || [];
        //     if (isEmpty(resources.find(resource => resource.label === 'ViewTrendPage'))) {
        //         history.push('/access');
        //         return;
        //     }
        //     setData({loginUser: res?.data});
        // }).catch(e => {
        //     console.log(e.message);
        // });
        setData({loginUser: {name: '章三', age: 34}});
    }, 1000);

    useEffect(() => {
        if (isEmpty(loginUser)) {
            query();
        }
    }, []);

    if (isEmpty(loginUser)) {
        return (
            <Spin tip="获取用户中..." size="large">
                <div style={{height: '100vh', background: 'transparent'}} />
            </Spin>
        );
    } else return props.children;
};

const mapStateToProps = ({state}) => {
    return {
        loginUser: state.loginUser
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setData(data) {
            dispatch({type: 'state/setData', payload: data});
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
