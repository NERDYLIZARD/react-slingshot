/**
 * Created on 27-Mar-18.
 */
import React from 'react';
import PropTypes from 'prop-types';
import * as CustomPropTypes from '../app/customPropTypes';
import * as actions from './cardActions';
import {connect} from 'react-redux';
import bindActionCreators from "redux/es/bindActionCreators";


export class CardPage extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    this.props.actions.loadCards();
  }

  renderCard(card, index) {
    return (
      <p key={index}><i>{card.wisdom}</i> - {card.attribute}</p>
    );
  }

  render() {
    return (
      <div>
        <h1>Cards</h1>
        {this.props.cards.map(this.renderCard)}
      </div>
    );
  }
}

CardPage.propTypes = {
  actions: PropTypes.object.isRequired,
  cards: PropTypes.arrayOf(CustomPropTypes.card).isRequired,
};

const mapStateToProps = ({cards}) => ({
  cards
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(CardPage);
