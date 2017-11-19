import { expect } from '../test_helper';
import { SAVE_COMMENT } from '../../src/actions/types';
import { saveComment } from '../../src/actions/index';

describe('actions', () => {

    describe('saveComment', () => {
        it('returns correct action type', () => {
            const action = saveComment()
            expect(action.type).to.equal('SAVE_COMMENT');
        });
        it('returns correct action payload', () => {
            const action = saveComment('new comment');
            expect(action.payload).to.equal('new comment');
        });
    });

});