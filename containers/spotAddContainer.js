import { connect } from 'react-redux';
import SpotAddScreen from '../screens/SpotAddScreen';
import { addSpot} from "../redux/actions";

const mapStateToProps = state => ({
    spots: state.spots
});

const mapDispatchToProps = dispatch => ({
    addSpot: (spot, cb) => dispatch(addSpot(spot, cb))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
) (SpotAddScreen);