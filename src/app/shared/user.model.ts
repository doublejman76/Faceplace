import { Post } from "./post.model";

export class User {
  constructor(
    public name: string,
    public email: string,
    public id: number,
    public posts: any[],
    public imagePath: string,
    public bio: string,
    public isFriends: boolean,
    private _token: string,
    private _tokenExpirationDate: Date
  ) {}

  public get token(){
    // Validation to ensure we have an ExpDate and it's not past the current date
    if (!this._tokenExpirationDate || new Date() > this._tokenExpirationDate)
      return null;

      // Send the user their token
      return this._token;
  }

}


// you can include any type of data in this array,
// any element that is a string, object, anything
// of type any[]

// can only include objects that resemble the Post Model
// [] Post
