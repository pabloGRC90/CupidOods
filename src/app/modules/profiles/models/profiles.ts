import { ProfileResponse } from "./req-resp";

export class Profile {
  static profileFromJSON(obj: ProfileResponse) {
    return new Profile(
      obj['id'],
      obj['email'],
      obj['username'],
      obj['provincia'],
      obj['years'],
      obj['typeRel'],
      obj['sport'],
      obj['art'],
      obj['politic'],
      obj['wantSons'],
      obj['haveSons'],
      obj['gender'],
      obj['photo'],
      obj['description'],
      obj['conected'],
      obj['active'],
    )
  }

  constructor(
    public id: string,
    public email: string,

    public username: string,
    public provincia: string,
    public years: string,
    public typeRel: string,
    public sport: string,
    public art: string,
    public politic: string,
    public wantSons: string,
    public haveSons: string,
    public gender: string,
    public photo: string,
    public description: string,
    public conected: string,
    public active: string,
  ) {}

}
