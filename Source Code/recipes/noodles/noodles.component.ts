import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-noodles',
  templateUrl: './noodles.component.html',
  styleUrls: ['./noodles.component.css']
})
export class NoodlesComponent implements OnInit {

  imgSrcLomi: string = "assets/images/Menu/Noodles/lomi.png";
  definitionLomi: string = "Lomi or Pancit Lomi is a type of noodle soup dish that makes use of thick egg noodles. Although this dish originated from the Chinese, several different regional variations became available throughout the years. The most popular among these variations would probably be the Batangas Lomi.";

  imgSrcPalabok: string = "assets/images/Menu/Noodles/palabok.png";
  definitionPalabok: string = "Pancit Palabok is a noodle dish with shrimp sauce and topped with several ingredients such as cooked shrimp, boiled pork, crushed chicharon, tinapa flakes, fried tofu, scallions, and fried garlic. A very tasty treat that is sure to relieve your hunger."

  imgSrcMiki: string = "assets/images/Menu/Noodles/miki.png";
  definitionMiki: string = "Pancit Miki are fresh thick egg noodles. These noodles are thicker than the egg noodles used in beef mami, and a little thinner compared to Lomi noodles.";

  imgSrcSotanghon: string = "assets/images/Menu/Noodles/sotanghon.png";
  definitionSotanghon: string = "Pancit Sotanghon is a delicious noodle dish. This recipe features a combination of ingredients that make the entire dish look and taste special. Pancit Sotanghon is at its best when lemon or calamansi is squeezed on top before eating.";

  imgSrcChickenMami: string = "assets/images/Menu/Noodles/mami.png";
  definitionChickenMami: string = "Chicken Mami or Chicken Noodle Soup is a delicious soup dish fit for rainy or cold  days. This is usually sold in noodle houses or “mamihan” along with other favorites such as Beef Mami, Pares, and Siopao.";

  imgSrcHabhab: string = "assets/images/Menu/Noodles/habhab.png";
  definitionHabhab: string = "Pancit Habhab uses dried flour noodles which are known as miki Lucban. These are not the same noodles used in pancit canton; it is also different from the fresh miki noodles, which are made fresh and have softer texture. This pancit version is served over a piece of banana leaf and is eaten without any utensils. How? Imagine eating a sandwich. You will need to grab the banana leaf with noodles and put it directly to your mouth. Don’t eat the banana leaf though.";

  
  foodTitle: string = "";
  foodResult: string = "";
  foodResultDefinition: string = "";

  constructor() { }

  ngOnInit() {
  }

  foodCheck(foodName: string): void {
    if (foodName == "lomi") {
      this.foodTitle = "Lomi";
      this.foodResult = this.imgSrcLomi;
      this.foodResultDefinition = this.definitionLomi;
    } else if (foodName == "palabok") {
      this.foodTitle = "Pansit Palabok";
      this.foodResult = this.imgSrcPalabok;
      this.foodResultDefinition = this.definitionPalabok;
    } else if (foodName == "miki") {
      this.foodTitle = "Pancit Miki Guisado";
      this.foodResult = this.imgSrcMiki;
      this.foodResultDefinition = this.definitionMiki;
    } else if (foodName == "sotanghon") {
      this.foodTitle = "Sotanghon";
      this.foodResult = this.imgSrcSotanghon;
      this.foodResultDefinition = this.definitionSotanghon;
    } else if (foodName == "chickenMami") {
      this.foodTitle = "Chicken Mami";
      this.foodResult = this.imgSrcChickenMami;
      this.foodResultDefinition = this.definitionChickenMami;
    } else if (foodName == "habhab") {
      this.foodTitle = "Pancit HabHab";
      this.foodResult = this.imgSrcHabhab;
      this.foodResultDefinition = this.definitionHabhab;
    }
  }
  returnFood() {

    return
  }
}
