export class Message {
    text: string;
    imageUrl: string;
    createdOn: Date;
    from: string;
    fromPro: string;
    to: string;

    constructor() {
        this.createdOn = new Date(); // set current date and time
        this.to = 'Everyone';
    }
}