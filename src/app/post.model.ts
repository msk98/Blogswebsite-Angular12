export class Post {
  constructor(
    public title: string,
    public description: string,
    public imagepath: string,
    public author: string,
    public DatetimeCreated: Date,
    public numberOfLikes: number
  ) {}
}
