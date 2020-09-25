import { connect } from "react-redux";
import Round from './Round';


const mapStateToProps = ({ rounds }) => ({ rounds });

export default connect(mapStateToProps)(Round);