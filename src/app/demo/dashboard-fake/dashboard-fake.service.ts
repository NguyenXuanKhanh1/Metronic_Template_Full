import { Injectable, OnChanges, OnInit } from "@angular/core";
import { Observable, of } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class DashboardFakeService{
  constructor(private http: HttpClient) {}
  public items = [
    {
      name: "Liverpool",
      establishment: "1892",
      stadium: "Alfield",
      logo:
        "https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Liverpool_FC.svg/180px-Liverpool_FC.svg.png",
      id: 1,
      rank: 1,
      Round: 11,
      Win: 10,
      Draw: 1,
      Lose: 0,
      GF: 25,
      GA: 9,
      GD: 16,
      Points: 31
    },
    {
      id: 2,
      name: "Manchester City",
      establishment: "1880",
      stadium: "Etihad Stadium",
      logo:
        "https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Manchester_City_FC_badge.svg/180px-Manchester_City_FC_badge.svg.png",
      rank: 2,
      Round: 11,
      Win: 8,
      Draw: 1,
      Lose: 2,
      GF: 34,
      GA: 10,
      GD: 24,
      Points: 25
    },
    {
      id: 3,
      name: "Leicester City",
      establishment: "1884",
      stadium: "King Power Stadium",
      logo:
        "https://upload.wikimedia.org/wikipedia/en/thumb/2/2d/Leicester_City_crest.svg/180px-Leicester_City_crest.svg.png",
      rank: 3,
      Round: 11,
      Win: 7,
      Draw: 2,
      Lose: 2,
      GF: 27,
      GA: 10,
      GD: 24,
      Points: 23
    },
    {
      id: 4,
      name: "Chelsea",
      establishment: "1905",
      stadium: "Stamford Bridge",
      logo:
        "https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Chelsea_FC.svg/180px-Chelsea_FC.svg.png",
      rank: 4,
      Round: 11,
      Win: 7,
      Draw: 2,
      Lose: 2,
      GF: 25,
      GA: 17,
      GD: 8,
      Points: 23
    },
    {
      id: 5,
      name: "Arsenal",
      establishment: "1886",
      stadium: "Emirates Stadium",
      logo:
        "https://upload.wikimedia.org/wikipedia/en/thumb/5/53/Arsenal_FC.svg/180px-Arsenal_FC.svg.png",
      rank: 5,
      Round: 11,
      Win: 4,
      Draw: 5,
      Lose: 2,
      GF: 16,
      GA: 15,
      GD: 1,
      Points: 17
    },
    {
      id: 6,
      name: "Crystal Palace",
      establishment: "1905",
      stadium: "Selhurst Park",
      logo:
        "https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Crystal_Palace_FC_logo.svg/170px-Crystal_Palace_FC_logo.svg.png",
      rank: 9,
      Round: 11,
      Win: 4,
      Draw: 3,
      Lose: 4,
      GF: 10,
      GA: 14,
      GD: -4,
      Points: 15
    },
    {
      id: 7,
      name: "Tottenham Hotspur",
      establishment: "1882",
      stadium: "Tottenham Hotspur Stadium",
      logo:
        "https://upload.wikimedia.org/wikipedia/en/thumb/b/b4/Tottenham_Hotspur.svg/130px-Tottenham_Hotspur.svg.png",
      rank: 11,
      Round: 11,
      Win: 3,
      Draw: 4,
      Lose: 4,
      GF: 17,
      GA: 16,
      GD: 1,
      Points: 13
    },
    {
      id: 8,
      name: "Burnley",
      establishment: "1882",
      stadium: "Turf Moor",
      logo:
        "https://upload.wikimedia.org/wikipedia/en/thumb/6/62/Burnley_F.C._Logo.svg/180px-Burnley_F.C._Logo.svg.png",
      rank: 14,
      Round: 11,
      Win: 3,
      Draw: 3,
      Lose: 5,
      GF: 14,
      GA: 18,
      GD: -4,
      Points: 12
    },
    {
      id: 9,
      name: "Sheffield United",
      establishment: "1889",
      stadium: "Bramall Lane",
      logo:
        "https://upload.wikimedia.org/wikipedia/en/thumb/9/9c/Sheffield_United_FC_logo.svg/220px-Sheffield_United_FC_logo.svg.png",
      rank: 6,
      Round: 11,
      Win: 4,
      Draw: 4,
      Lose: 3,
      GF: 12,
      GA: 8,
      GD: 4,
      Points: 16
    },
    {
      id: 10,
      name: "Athletic Football Club Bournemouth",
      establishment: "1899",
      stadium: "Dean Court",
      logo:
        "https://upload.wikimedia.org/wikipedia/en/thumb/e/e5/AFC_Bournemouth_%282013%29.svg/170px-AFC_Bournemouth_%282013%29.svg.png",
      rank: 7,
      Round: 11,
      Win: 4,
      Draw: 4,
      Lose: 3,
      GF: 14,
      GA: 13,
      GD: 1,
      Points: 16
    },
    {
      id: 11,
      name: "West Ham United",
      establishment: "1895",
      stadium: "London Stadium",
      logo:
        "https://upload.wikimedia.org/wikipedia/en/thumb/c/c2/West_Ham_United_FC_logo.svg/185px-West_Ham_United_FC_logo.svg.png",
      rank: 13,
      Round: 11,
      Win: 3,
      Draw: 4,
      Lose: 4,
      GF: 14,
      GA: 17,
      GD: -3,
      Points: 13
    },
    {
      id: 12,
      name: "Aston Villa",
      establishment: "1874",
      stadium: "Villa Park",
      logo:
        "https://upload.wikimedia.org/wikipedia/en/thumb/f/f9/Aston_Villa_FC_crest_%282016%29.svg/150px-Aston_Villa_FC_crest_%282016%29.svg.png",
      rank: 16,
      Round: 11,
      Win: 3,
      Draw: 2,
      Lose: 6,
      GF: 16,
      GA: 18,
      GD: -3,
      Points: 11
    },
    {
      id: 13,
      name: "Wolverhampton Wanderers",
      establishment: "1877",
      stadium: "Molineux Stadium",
      logo:
        "https://upload.wikimedia.org/wikipedia/en/thumb/f/fc/Wolverhampton_Wanderers.svg/200px-Wolverhampton_Wanderers.svg.png",
      rank: 12,
      Round: 11,
      Win: 2,
      Draw: 7,
      Lose: 2,
      GF: 14,
      GA: 14,
      GD: 0,
      Points: 13
    },
    {
      id: 14,
      name: "Manchester United",
      establishment: "1878",
      stadium: "Old Trafford",
      logo:
        "https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Manchester_United_FC_crest.svg/180px-Manchester_United_FC_crest.svg.png",
      rank: 10,
      Round: 11,
      Win: 3,
      Draw: 4,
      Lose: 4,
      GF: 13,
      GA: 11,
      GD: 2,
      Points: 13
    },
    {
      id: 15,
      name: "Everton Football Club",
      establishment: "1878",
      stadium: "Goodison Park",
      logo:
        "https://upload.wikimedia.org/wikipedia/en/thumb/7/7c/Everton_FC_logo.svg/220px-Everton_FC_logo.svg.png",
      rank: 17,
      Round: 11,
      Win: 3,
      Draw: 2,
      Lose: 6,
      GF: 16,
      GA: 18,
      GD: -2,
      Points: 11
    },
    {
      id: 16,
      name: "Brighton & Hove Albion Football Club",
      establishment: "1901",
      stadium: "Amex Stadium",
      logo:
        "https://upload.wikimedia.org/wikipedia/en/thumb/f/fd/Brighton_%26_Hove_Albion_logo.svg/200px-Brighton_%26_Hove_Albion_logo.svg.png",
      rank: 8,
      Round: 11,
      Win: 4,
      Draw: 3,
      Lose: 4,
      GF: 14,
      GA: 14,
      GD: 0,
      Points: 15
    },
    {
      id: 17,
      name: "Southampton Football Club",
      establishment: "1885",
      stadium: "St Mary's Stadium",
      logo:
        "https://upload.wikimedia.org/wikipedia/en/thumb/c/c9/FC_Southampton.svg/180px-FC_Southampton.svg.png",
      rank: 18,
      Round: 11,
      Win: 2,
      Draw: 2,
      Lose: 7,
      GF: 10,
      GA: 27,
      GD: -17,
      Points: 8
    },
    {
      id: 18,
      name: "Newcastle United",
      establishment: "1892",
      stadium: "St James' Park",
      logo:
        "https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Newcastle_United_Logo.svg/200px-Newcastle_United_Logo.svg.png",
      rank: 15,
      Round: 11,
      Win: 3,
      Draw: 3,
      Lose: 5,
      GF: 9,
      GA: 17,
      GD: -8,
      Points: 12
    },
    {
      id: 19,
      name: "Norwich City",
      establishment: "1902",
      stadium: "Carrow Road",
      logo:
        "https://upload.wikimedia.org/wikipedia/en/thumb/8/8c/Norwich_City.svg/150px-Norwich_City.svg.png",
      rank: 19,
      Round: 11,
      Win: 2,
      Draw: 1,
      Lose: 8,
      GF: 11,
      GA: 26,
      GD: -15,
      Points: 7
    },
    {
      id: 20,
      name: "Watford",
      establishment: "1898",
      stadium: "Vicarage Road",
      logo:
        "https://upload.wikimedia.org/wikipedia/en/thumb/e/e2/Watford.svg/190px-Watford.svg.png",
      rank: 20,
      Round: 11,
      Win: 0,
      Draw: 5,
      Lose: 6,
      GF: 6,
      GA: 23,
      GD: -17,
      Points: 5
    }
  ];
  url = 'http://www.mocky.io/v2/5dc3cc723000000d523475cf';
  public club: any = [];

  getClub(request): Observable<any>{

    return this.http.get(this.url);
    
    // return of({
    //   success: true,
    //   totalRecords: this.items.length,
    //   items: this.items
    // });
  }

}
