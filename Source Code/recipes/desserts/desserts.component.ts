import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-desserts',
  templateUrl: './desserts.component.html',
  styleUrls: ['./desserts.component.css']
})
export class DessertsComponent implements OnInit {

  imgSrcBukoPandan: string = "assets/images/Menu/Desserts/bukoPandan.png";
  definitionBukoPandan: string = "Buko Pandan Salad made with gulaman cubes, tropical palm fruits, shredded young coconut in sweetened cream. Rich, creamy, and loaded with pandan flavor, this Filipino classic dessert is sure to be a crowd favorite."

  imgSrcMajaBlanca: string = "assets/images/Menu/Desserts/majaBlanca.png";
  definitionMajaBlanca: string = "Maja Blanca made with coconut milk, sweet corn kernels, and toasted coconut. Rich and creamy, this coconut pudding makes a delicious snack or dessert."

  imgSrcBiko: string = "assets/images/Menu/Desserts/biko.png";
  definitionBiko: string = "Biko is a Filipino rice cake made from sticky rice (locally known as malagkit), coconut milk, and brown sugar. Like other rice cakes, this is referred to as kakanin (derived from the word “kanin” which means rice) and is often eaten as dessert or meryenda (mid-afternoon snack).";

  imgSrcLecheFlan: string = "assets/images/Menu/Desserts/lechePlan.png";
  definitionLecheFlan: string = "Leche Flan is a dessert made-up of eggs and milk with a soft caramel on top. It resembles crème caramel and caramel custard. This delicious dessert is known throughout the world.It has been a regular item in the  menu of most restaurants because of its taste, ease in preparation and long shelf life. It can also be added as a component to build other great tasting dessert creations.";

  imgSrcHalohalo: string = "assets/images/Menu/Desserts/halohalo.png";
  definitionHalohalo: string = "Halo-halo (Tagalog for 'mixed'), also spelled haluhalo, is a popular Filipino cold dessert which is a concoction of crushed ice, evaporated milk and various ingredients including, among others, ube, sweetened beans, coconut julienes, sago, gulaman (seaweed gelatin), pinipig rice, boiled root crops in cubes, fruit slices, flan, and topped with a scoop of ice cream.";

  imgSrcTaho: string = "assets/images/Menu/Desserts/taho.png";
  definitionTaho: string = "Taho is a classic sweet treat in the Philippines made with silken tofu, sago or tapioca pearls, and a simple brown sugar syrup. Served warm, it’s popular as a comforting breakfast or merienda (snack) any time of the day!";

  imgSrcBibingka: string = "assets/images/Menu/Desserts/bibingka.png";
  definitionBibingka: string = "Bibingka is a type of baked rice cake from the Philippines. It is usually eaten for breakfast, especially during the Christmas season. It is traditionally cooked in clay pots lined with leaves.";
  
  foodTitle: string ="";
  foodResult: string = "";
  foodResultDefinition: string = "";

  constructor() { }

  ngOnInit() {
  }
  foodCheck(foodName: string):void{
    if(foodName == "bukoPandan"){
      this.foodTitle="Buko Pandan Salad";
      this.foodResult=this.imgSrcBukoPandan;
      this.foodResultDefinition=this.definitionBukoPandan;
    } else if (foodName == "majaBlanca"){
      this.foodTitle="Maja Blanca";
      this.foodResult=this.imgSrcMajaBlanca;
      this.foodResultDefinition=this.definitionMajaBlanca;
    } else if (foodName =="biko"){
      this.foodTitle="Biko";
      this.foodResult=this.imgSrcBiko;
      this.foodResultDefinition=this.definitionBiko;
    } else if (foodName =="lecheFlan"){
      this.foodTitle="Leche Flan";
      this.foodResult=this.imgSrcLecheFlan;
      this.foodResultDefinition=this.definitionLecheFlan;
    } else if (foodName =="halohalo"){
      this.foodTitle="Halo-Halo(Mixed)";
      this.foodResult=this.imgSrcHalohalo;
      this.foodResultDefinition=this.definitionHalohalo;
    } else if (foodName =="taho"){
      this.foodTitle="Taho";
      this.foodResult=this.imgSrcTaho;
      this.foodResultDefinition=this.definitionTaho;
    } else if (foodName =="bibingka"){
      this.foodTitle="Bibingka";
      this.foodResult=this.imgSrcBibingka;
      this.foodResultDefinition=this.definitionBibingka;
    }
  }
}
