/**
 * Created on 06-Apr-18.
 */

import * as actions from './cardActions';
import * as actionTypes from '../app/actionTypes';

describe('Card Actions', () => {

  describe('loadCardSuccess', () => {
    it('should creates an action typed LOAD_CARDS_SUCCESS and having cards[] as a payload', () => {
      const cards = [
        {
          wisdom: 'abc',
          attribute: '123'
        },
        {
          wisdom: 'def',
          attribute: '456'
        }
      ];
      const expectedAction = {
        type: actionTypes.LOAD_CARDS_SUCCESS,
        cards
      };
      expect(actions.loadCardsSuccess(cards)).toEqual(expectedAction);
    });
  });

});
