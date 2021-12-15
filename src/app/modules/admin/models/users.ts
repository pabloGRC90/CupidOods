import { UserResponse } from "../../admin/models/req-resp";

export class User {
  static profileFromJSON(obj: UserResponse) {
    return new User(
      obj['id'],
      obj['email'],
      obj['username'],
      obj['gender'],
      obj['photo'],
      obj['description'],
      obj['conected'],
      obj['active'],
      obj['admin']
    )
  }

  constructor(
    public id: string,
    public email: string,
    public username: string,
    public gender: string,
    public photo: string,
    public description: string,
    public conected: string,
    public active: string,
    public admin: string
  ) {}

}
