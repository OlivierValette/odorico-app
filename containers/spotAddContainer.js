import { connect } from 'react-redux';
import SpotAddScreen from '../screens/SpotAddScreen';
import { addSpot} from "../redux/actions";

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
    addSpot: (spot) => dispatch(addSpot(spot))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
) (SpotAddScreen);