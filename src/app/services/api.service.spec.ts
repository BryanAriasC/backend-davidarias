import { TestBed, async, inject } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { ApiService } from './api.service';

describe('ApiService', () => {

  //beforeEach(() => TestBed.configureTestingModule({}));

  // it('should be created', () => {
  //   const service: ApiService = TestBed.get(ApiService);
  //   expect(service).toBeTruthy();
  // });



 

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService]
    });
  });

  describe('get data General', () => {

   
  

    it('should get results',
    inject([HttpTestingController, ApiService], (httpMock: HttpTestingController, myServiceTested: ApiService) => {
      
      let mockSearchGeneralResponse = {
        "drinks": [
            {
                "idDrink": "13214",
                "strDrink": "Pisco Sour",
                "strDrinkAlternate": null,
                "strDrinkES": null,
                "strDrinkDE": null,
                "strDrinkFR": null,
                "strDrinkZH-HANS": null,
                "strDrinkZH-HANT": null,
                "strTags": "IBA,NewEra",
                "strVideo": null,
                "strCategory": "Cocktail",
                "strIBA": "New Era Drinks",
                "strAlcoholic": "Alcoholic",
                "strGlass": "Cocktail glass",
                "strInstructions": "Vigorously shake and strain contents in a cocktail shaker with ice cubes, then pour into glass and garnish with bitters.[1]",
                "strInstructionsES": null,
                "strInstructionsDE": "Den Inhalt in einem Cocktailshaker mit Eiswürfeln kräftig schütteln und abseihen, dann in ein Glas gießen und mit Bitter garnieren.",
                "strInstructionsFR": null,
                "strInstructionsZH-HANS": null,
                "strInstructionsZH-HANT": null,
                "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/tsssur1439907622.jpg",
                "strIngredient1": "Pisco",
                "strIngredient2": "Lemon juice",
                "strIngredient3": "Sugar",
                "strIngredient4": "Ice",
                "strIngredient5": null,
                "strIngredient6": null,
                "strIngredient7": null,
                "strIngredient8": null,
                "strIngredient9": null,
                "strIngredient10": null,
                "strIngredient11": null,
                "strIngredient12": null,
                "strIngredient13": null,
                "strIngredient14": null,
                "strIngredient15": null,
                "strMeasure1": "2 oz ",
                "strMeasure2": "1 oz ",
                "strMeasure3": "1-2 tblsp ",
                "strMeasure4": null,
                "strMeasure5": null,
                "strMeasure6": null,
                "strMeasure7": null,
                "strMeasure8": null,
                "strMeasure9": null,
                "strMeasure10": null,
                "strMeasure11": null,
                "strMeasure12": null,
                "strMeasure13": null,
                "strMeasure14": null,
                "strMeasure15": null,
                "strCreativeCommonsConfirmed": "No",
                "dateModified": "2015-08-18 15:20:22"
            }
        ]
      };
      let param = 'pisco';
      // let url = 'https://www.thecocktaildb.com/api/json/v1/1';

      // const swapiUrl = `${ url }/search.php?s=${ param }`;
      myServiceTested.searchGeneral(param)
      .subscribe(
        (res) => {
          expect(res).toEqual(this.mockSearchGeneralResponse);
        }
      );
      // const req = httpMock.expectOne(swapiUrl);
      // expect(req.request.method).toBe('GET');
      // req.flush(mockSearchGeneralResponse);
    })
  );
  });

  describe('get data Type Filter', () => {

    it('should get results Glass',
    inject([HttpTestingController, ApiService], (httpMock: HttpTestingController, myServiceTested: ApiService) => {
      
        
      let mockSearchFilterResponse = {
        "drinks": [
            {
                "strDrink": "After Dinner Cocktail",
                "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/vtytxq1483387578.jpg",
                "idDrink": "11010"
            },
            {
                "strDrink": "Amaretto Mist",
                "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/utpxxq1483388370.jpg",
                "idDrink": "11026"
            },
            {
                "strDrink": "Bible Belt",
                "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/6bec6v1503563675.jpg",
                "idDrink": "16986"
            },
            {
                "strDrink": "Caipirinha",
                "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/jgvn7p1582484435.jpg",
                "idDrink": "11202"
            },
            {
                "strDrink": "Caipirissima",
                "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/yd47111503565515.jpg",
                "idDrink": "13206"
            },
            {
                "strDrink": "California Lemonade",
                "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/q5z4841582484168.jpg",
                "idDrink": "11205"
            },
            {
                "strDrink": "Corn n Oil",
                "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/jfvyog1530108909.jpg",
                "idDrink": "17830"
            },
            {
                "strDrink": "Cosmopolitan Martini",
                "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/upxxpq1439907580.jpg",
                "idDrink": "14133"
            },
            {
                "strDrink": "Cuba Libra",
                "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/ck6d0p1504388696.jpg",
                "idDrink": "13751"
            },
            {
                "strDrink": "Cuba Libre",
                "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/uuxsrr1473201663.jpg",
                "idDrink": "11288"
            },
            {
                "strDrink": "Daiquiri",
                "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/mrz9091589574515.jpg",
                "idDrink": "11006"
            },
            {
                "strDrink": "Dark Caipirinha",
                "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/uwstrx1472406058.jpg",
                "idDrink": "17177"
            },
            {
                "strDrink": "Dragonfly",
                "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/uc63bh1582483589.jpg",
                "idDrink": "11320"
            },
            {
                "strDrink": "Gin And Tonic",
                "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/z0omyp1582480573.jpg",
                "idDrink": "11403"
            },
            {
                "strDrink": "Happy Skipper",
                "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/42w2g41487602448.jpg",
                "idDrink": "12766"
            },
            {
                "strDrink": "Ipamena",
                "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/yswuwp1469090992.jpg",
                "idDrink": "17176"
            },
            {
                "strDrink": "Jack Rose Cocktail",
                "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/uuqqrv1439907068.jpg",
                "idDrink": "11542"
            },
            {
                "strDrink": "Limeade",
                "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/5jdp5r1487603680.jpg",
                "idDrink": "12704"
            },
            {
                "strDrink": "Long vodka",
                "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/9179i01503565212.jpg",
                "idDrink": "13196"
            },
            {
                "strDrink": "Mojito",
                "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/3z6xdi1589574603.jpg",
                "idDrink": "11000"
            },
            {
                "strDrink": "Quarter Deck Cocktail",
                "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/qrwvps1478963017.jpg",
                "idDrink": "11985"
            },
            {
                "strDrink": "Scotch Sour",
                "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/0dnb6k1504890436.jpg",
                "idDrink": "12158"
            },
            {
                "strDrink": "White Wine Sangria",
                "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/hnuod91587851576.jpg",
                "idDrink": "178326"
            }
        ]
      };
      let param = 'Lime';
      let filter = 'i';
      let url = 'https://www.thecocktaildb.com/api/json/v1/1';

      const swapiUrl = `${ url }/filter.php?${ filter }=${ param }`;
      myServiceTested.searchFilter(filter, param)
      .subscribe(
        (res) => {
          expect(res).toEqual(this.mockSearchFilterResponse);
        }
      );
      // const req = httpMock.expectOne(swapiUrl);
      // expect(req.request.method).toBe('GET');
      // req.flush(mockSearchFilterResponse);
    })
  );
  });

  describe('get data List Filter', () => {

    
    it('should get results List Category',
    inject([HttpTestingController, ApiService], (httpMock: HttpTestingController, myServiceTested: ApiService) => {
      
      let filter = 'c';
      // let url = 'https://www.thecocktaildb.com/api/json/v1/1';
      let mockListCategoryResponse = {
        "drinks": [
            {
                "strCategory": "Ordinary Drink"
            },
            {
                "strCategory": "Cocktail"
            },
            {
                "strCategory": "Milk / Float / Shake"
            },
            {
                "strCategory": "Other/Unknown"
            },
            {
                "strCategory": "Cocoa"
            },
            {
                "strCategory": "Shot"
            },
            {
                "strCategory": "Coffee / Tea"
            },
            {
                "strCategory": "Homemade Liqueur"
            },
            {
                "strCategory": "Punch / Party Drink"
            },
            {
                "strCategory": "Beer"
            },
            {
                "strCategory": "Soft Drink / Soda"
            }
        ]
      };
      

      // const swapiUrl = `${ url }/list.php?${ filter }=list`;
      myServiceTested.listFilters(filter)
      .subscribe(
        (res) => {
          expect(res).toEqual(this.mockListCategoryResponse);
        }
      );
      // const req = httpMock.expectOne(swapiUrl);
      // expect(req.request.method).toBe('GET');
      // req.flush(mockListCategoryResponse);
    })
  );
  });

  describe('get data Drink', () => {

    it('should get result Drink',
    inject([HttpTestingController, ApiService], (httpMock: HttpTestingController, myServiceTested: ApiService) => {
      
      let id = '11007';
      // let url = 'https://www.thecocktaildb.com/api/json/v1/1';
      let mockDrinkResponse = {
          "drinks": [
              {
                  "idDrink": "11007",
                  "strDrink": "Margarita",
                  "strDrinkAlternate": null,
                  "strDrinkES": null,
                  "strDrinkDE": null,
                  "strDrinkFR": null,
                  "strDrinkZH-HANS": null,
                  "strDrinkZH-HANT": null,
                  "strTags": "IBA,ContemporaryClassic",
                  "strVideo": null,
                  "strCategory": "Ordinary Drink",
                  "strIBA": "Contemporary Classics",
                  "strAlcoholic": "Alcoholic",
                  "strGlass": "Cocktail glass",
                  "strInstructions": "Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the outer rim and sprinkle the salt on it. The salt should present to the lips of the imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass.",
                  "strInstructionsES": null,
                  "strInstructionsDE": "Reiben Sie den Rand des Glases mit der Limettenscheibe, damit das Salz daran haftet. Achten Sie darauf, dass nur der äußere Rand angefeuchtet wird und streuen Sie das Salz darauf. Das Salz sollte sich auf den Lippen des Genießers befinden und niemals in den Cocktail einmischen. Die anderen Zutaten mit Eis schütteln und vorsichtig in das Glas geben.",
                  "strInstructionsFR": null,
                  "strInstructionsZH-HANS": null,
                  "strInstructionsZH-HANT": null,
                  "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg",
                  "strIngredient1": "Tequila",
                  "strIngredient2": "Triple sec",
                  "strIngredient3": "Lime juice",
                  "strIngredient4": "Salt",
                  "strIngredient5": null,
                  "strIngredient6": null,
                  "strIngredient7": null,
                  "strIngredient8": null,
                  "strIngredient9": null,
                  "strIngredient10": null,
                  "strIngredient11": null,
                  "strIngredient12": null,
                  "strIngredient13": null,
                  "strIngredient14": null,
                  "strIngredient15": null,
                  "strMeasure1": "1 1/2 oz ",
                  "strMeasure2": "1/2 oz ",
                  "strMeasure3": "1 oz ",
                  "strMeasure4": null,
                  "strMeasure5": null,
                  "strMeasure6": null,
                  "strMeasure7": null,
                  "strMeasure8": null,
                  "strMeasure9": null,
                  "strMeasure10": null,
                  "strMeasure11": null,
                  "strMeasure12": null,
                  "strMeasure13": null,
                  "strMeasure14": null,
                  "strMeasure15": null,
                  "strCreativeCommonsConfirmed": "Yes",
                  "dateModified": "2015-08-18 14:42:59"
              }
          ]
      };
      

      // const swapiUrl = `${ url }/lookup.php?i=${ id }`;
      myServiceTested.getDrink(id)
      .subscribe(
        (res) => {
          expect(res).toEqual(this.mockDrinkResponse);
        }
      );
      // const req = httpMock.expectOne(swapiUrl);
      // expect(req.request.method).toBe('GET');
      // req.flush(mockListCategoryResponse);
    })
  );
  });

});
