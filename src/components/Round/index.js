import { connect } from "react-redux";
import Round from './Round';


const mapStateToProps = ({ rounds, totalRounds }) => ({ rounds, totalRounds });

export default connect(mapStateToProps)(Round);