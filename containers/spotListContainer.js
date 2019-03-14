import { connect } from 'react-redux';
import SpotListScreen from '../screens/SpotListScreen';

const mapStateToProps = state => ({
    spots: state.spots
});

const mapDispatchToProps = dispatch => ({
    // pas d'action pour l'instant
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
) (SpotListScreen);