import { connect } from "react-redux";
import Round from './Round';


const mapStateToProps = ({ games, numberOfRounds }, { roundNumber }) => ({ games, numberOfRounds, roundNumber });

export default connect(mapStateToProps)(Round);