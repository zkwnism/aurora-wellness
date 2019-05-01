
window.onscroll = function() {myFunction()};

// When the user clicks on the button, scroll to the top of the document
function gototop() {
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
}

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}
window.onload=function(){
   var thediv=document.getElementById("banner");
   var imgarray = new Array("pic01.jpg", "Classification.jpg", "pic03.jpg", "pic04.jpg", "pic05.jpg");
   var num =Math.floor(Math.random()* imgarray.length);
   thediv.style.background="url("+imgarray[num]+")";
   thediv.style.backgroundSize="cover";
   thediv.style.overflow= "hidden";
   thediv.style.backgroundPosition= "center";
 }

  function carbohydrate(){
    document.getElementById('bigtitle').innerHTML = 'CARBOHYDRATE';
    document.getElementById('contentlong').innerHTML = 'As we all know, Carbohydrate is the main source of energy for our body to carry out daily activities. For every single gram of carbohydates it represent 4 calorie. Carbohydrate can be divided into two types which is simple carbohydrate and complex carbohydrate. The main difference between these two is the time taken for the carbohydrate to be transform into energy. The examples for simple carbohydrate are white rice, pasta and bread. While for complex carbohydrate are brown rice, wholemeal bread and oat. Carbohydrate is crucial for ones body but needed to be taken in a correct portion is 45 to 65 percent of daily calorie intake.';
    document.getElementById('image').src = "carbs.jpg";
    document.getElementById("image").height = "400";
    document.getElementById("image").width = "800";

  }

  function protein(){
    document.getElementById('bigtitle').innerHTML = 'PROTEIN';
    document.getElementById('contentlong').innerHTML = 'Protein is an important component of every cell in the body. Hair and nails are mostly made of protein. Your body uses protein to build and repair tissues. You also use protein to make enzymes, hormones, and other body chemicals. Protein is an important building block of bones, muscles, cartilage, skin, and blood. The examples of protein is lean meat, poultry, fish, dairy products like milk, yoghurt and cheeseseeds and nuts. The recommended intake of protein for ones is 0.8 gram per kilogram of bodyweight.';
    document.getElementById('image').src = "protein.jpg";
    document.getElementById("image").height = "480";
    document.getElementById("image").width = "800";

  }

  function fat(){
    document.getElementById('bigtitle').innerHTML = 'FAT';
    document.getElementById('contentlong').innerHTML = 'Don’t be scared of fats! Fats are an essential part of a healthy diet and should account for about 15-20% what you consume. They help by improving brain development, overall cell functioning, protecting the body’s organs and even helping you absorb vitamins found in foods. Some examples of healthy fats: Almonds, walnuts, seeds (pumpkin, chia), olives, avocados.';
    document.getElementById('image').src = "fat.jpg";
  }

  function micronutrient(){
    document.getElementById('bigtitle').innerHTML = 'MICRONUTRIENT';
    document.getElementById('contentlong').innerHTML = 'An adequate intake of all micronutrients is necessary for optimal health, as each vitamin and mineral has a specific role in your body. Vitamins and minerals are vital for growth, immune function, brain development and many other important functions. Examples source of micronutrient are: Calcium - milk, yogurt, spinach, and sardines Vitamin. B12 - beef, fish, cheese, and eggs Zinc - beef, cashews, garbanzo beans, and turkey. Potassium - bananas, spinach, potatoes, and apricots';
    document.getElementById('image').src = "micro.jpg";
    document.getElementById("image").height = "300";
    document.getElementById("image").width = "630";

  }
