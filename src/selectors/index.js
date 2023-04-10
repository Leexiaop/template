import {useSelector} from 'umi';

export const GetLoginUser = () => {
    return useSelector(state => {
        const {loginUser} = state.state;
        return loginUser;
    });
};
