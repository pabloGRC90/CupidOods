import { PreferenceResponse } from "../../preferences/models/req-resp";

export class Preference {
  static preferenceFromJSON(obj: PreferenceResponse) {
    return new Preference(
      obj['id'],
      obj['email'],
      obj['password'],
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
      obj['genderPref'],
      obj['photo'],
      obj['description']
    )
  }

  constructor(
    public id: string,
    public email: string,
    public password: string,
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
    public genderPref: string,
    public photo: string,
    public description: string
  ) {}

}
