import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vegetables',
  templateUrl: './vegetables.component.html',
  styleUrls: ['./vegetables.component.css']
})
export class VegetablesComponent implements OnInit {
  imgSrcChopSuey: string = "assets/images/Menu/Vegetables/ChopSuey.png";
  definitionChopSuey: string = "Chop Suey is a stir-fried vegetable dish that is cooked with meats such as chicken and pork. Shrimp and seafood can also be added. This chop suey recipe is special because it has almost every ingredient present. Chicken, pork, shrimp, and boiled quail eggs were all included in the recipe, along with fresh veggies.";

  imgSrcPakbet: string = "assets/images/Menu/Vegetables/pakbet.png";
  definitionPakbet: string = "Pinakbet Tagalog is a Filipino vegetable dish. It is composed of a variety of vegetables and it also has a protein component. I made use of lechon kawali or crispy deep-fried pork belly for this recipe. This recipe is a variation of the popular Pinakbet Ilocano.";

  imgSrcLaing: string = "assets/images/Menu/Vegetables/laing.png";
  definitionLaing: string = "Laing na Gabi or simply Laing is a type of Filipino vegetable dish. Taro leaves are sliced and dried for a few days before being cooked in coconut milk. Pork is a common ingredient added to this dish. I used pork shoulder for this recipe. Pork belly will work too.";

  imgSrcAmpalaya: string = "assets/images/Menu/Vegetables/ampalaya.png";
  definitionAmpalaya: string = "Ampalaya Con Carne is beef stir-fry with bitter gourd. This is dish is quick and easy to make. It is tasty and delicious. This is probably my favorite dish that involves ampalaya, aside from Pinakbet.";
  
  foodTitle: string ="";
  foodResult: string = "";
  foodResultDefinition: string = "";
  constructor() { }

  ngOnInit() {
  }
  foodCheck(foodName: string):void{
    if(foodName == "chopseuy"){
      this.foodTitle="Chop Suey";
      this.foodResult=this.imgSrcChopSuey;
      this.foodResultDefinition=this.definitionChopSuey;
    } else if (foodName == "pakbet"){
      this.foodTitle="Pakbet Tagalog";
      this.foodResult=this.imgSrcPakbet;
      this.foodResultDefinition=this.definitionPakbet;
    } else if (foodName =="laing"){
      this.foodTitle="Laing na Gabi";
      this.foodResult=this.imgSrcLaing;
      this.foodResultDefinition=this.definitionLaing;
    } else if (foodName =="ampalaya"){
      this.foodTitle="Ampalaya con Carne";
      this.foodResult=this.imgSrcAmpalaya;
      this.foodResultDefinition=this.definitionAmpalaya;
    }
  }
}
