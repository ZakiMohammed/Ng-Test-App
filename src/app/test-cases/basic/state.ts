export class Question {
    vote: number;

    constructor() {
        this.vote = 0;
    }

    upVote() {
        this.vote++;
    }

    downVote() {
        this.vote--;
    }

}