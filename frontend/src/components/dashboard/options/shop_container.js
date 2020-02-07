import { connect } from "react-redux";
import { addShip, fetchInventory } from "../../../actions/inventory_actions";
import Shop from "./shop";

const mapStateToProps = state => {
  return {
    currency: state.session.user.currency,
    inventory: state.inventory,
    user: state.session.user
  };
};

const mapDispatchToProps = dispatch => ({
  addShip: selection => dispatch(addShip(selection)),
  fetchInventory: () => dispatch(fetchInventory())
});

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
