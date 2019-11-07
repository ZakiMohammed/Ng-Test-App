import { Question } from "./state";

describe('question', () => {
    let question: Question;

    beforeEach(() => {
        question = new Question();
    });

    it('should increment', () => {
        question.upVote();
        expect(question.vote).toBe(1);
    });

    it('should decrement', () => {
        question.downVote();
        expect(question.vote).toBe(-1);
    });

}); 