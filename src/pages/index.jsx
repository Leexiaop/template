import { connect } from 'dva';
import './index.less';

const Index = (props) => {
  const { loginUser } = props;
  return (
    <div className="index">
      快看看
      {loginUser.name}
    </div>
  );
};

const mapStateToProps = ({ state }) => {
  return {
    loginUser: state.loginUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setData(data) {
      dispatch({ type: 'state/setData', data });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Index);
