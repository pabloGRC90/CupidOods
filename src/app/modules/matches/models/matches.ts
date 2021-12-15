import { MatchResponse } from "../../matches/models/req-resp";

export class Match {
  static matchFromJSON(obj: MatchResponse) {
    return new Match(
      obj['id'],
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
      obj['active'],
      obj['conected']
    )
  }

  constructor(
    public id: string,
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
    public active: string,
    public conected: string
  ) {}

}
