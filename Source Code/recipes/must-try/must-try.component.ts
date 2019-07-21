import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

declare var $: any;

@Component({
  selector: 'app-must-try',
  templateUrl: './must-try.component.html',
  styleUrls: ['./must-try.component.css']
})
export class MustTryComponent implements OnInit {
  
  imgSrcSinigang: string = "assets/images/Menu/Specialties/sinigang.png";
  definitionSinigang: string = "Sinigang is a sour soup native to the Philippines. This recipe uses pork as the main ingredient.Other proteins and seafood can also be used.Beef, shrimp, fish are commonly used to cook sinigang."

  imgSrcAdobo: string = "assets/images/Menu/Specialties/adobo.png";
  definitionAdobo: string = "Sweet, salty, tangy, garlicky—what's not to like? While many recipes for adobo call for painstakingly peeling and slicing more than a dozen garlic cloves, we found that cutting open a whole head of garlic and simmering it in the sauce achieves the same delicious effect in a fraction of the time."

  imgSrcKareKare: string = "assets/images/Menu/Specialties/karekare.png";
  definitionKareKare: string = "Kare-kare is a peanut-based beef stew and a Filipino favorite";

  imgSrcTinola: string = "assets/images/Menu/Specialties/tinola.png";
  definitionTinola: string = "Tinolang Manok (Chicken Tinola) is a refreshing chicken soup made with bone-chicken, papaya, fresh spinach and ginger-flavored broth.";

  imgSrcBicolExpress: string = "assets/images/Menu/Specialties/bicol express.png";
  definitionBicolExpress: string = "Bicol Express is pure comfort food! With pork cubes cooked in coconut milk and chili peppers, it's rich, creamy, spicy and delicious! Serve with steamed rice for a hearty and big flavored meal! Bicol Express.";

  imgSrcBulalo: string = "assets/images/Menu/Specialties/bulalo.png";
  definitionBulalo: string = "A beef soup comprised of shank with bone marrow still inside the bone, Bulalo is considered to be one of the most favorite main dishes in the Philippines.";

  imgSrcMenudo: string = "assets/images/Menu/Specialties/menudo.png";
  definitionMenudo: string = "Menudo is a popular Filipino pork dish. It is usually served during gatherings and fiestas. There are a lot of variations to the menudo recipe-some add hotdog slices, raisins, chunks of pickles, and even additional seasonings that amp up the umami flavors of this pork tomato stew.";
  
  foodTitle: string ="";
  foodResult: string = "";
  foodResultDefinition: string = "";
  constructor() { }

  ngOnInit() {
  }

  foodCheck(foodName: string):void{
    if(foodName == "sinigang"){
      this.foodTitle="Sinigang";
      this.foodResult=this.imgSrcSinigang;
      this.foodResultDefinition=this.definitionSinigang;
    } else if (foodName == "adobo"){
      this.foodTitle="Adobo";
      this.foodResult=this.imgSrcAdobo;
      this.foodResultDefinition=this.definitionAdobo;
    } else if (foodName =="karekare"){
      this.foodTitle="Kare-Kare";
      this.foodResult=this.imgSrcKareKare;
      this.foodResultDefinition=this.definitionKareKare;
    } else if (foodName =="tinola"){
      this.foodTitle="Tinola";
      this.foodResult=this.imgSrcTinola;
      this.foodResultDefinition=this.definitionTinola;
    } else if (foodName =="bicolExpress"){
      this.foodTitle="Bicol Express";
      this.foodResult=this.imgSrcBicolExpress;
      this.foodResultDefinition=this.definitionBicolExpress;
    } else if (foodName =="bulalo"){
      this.foodTitle="Bulalo";
      this.foodResult=this.imgSrcBulalo;
      this.foodResultDefinition=this.definitionBulalo;
    } else if (foodName =="menudo"){
      this.foodTitle="Menudo";
      this.foodResult=this.imgSrcMenudo;
      this.foodResultDefinition=this.definitionMenudo;
    }
  }
  returnFood(){

    return
  }
}
