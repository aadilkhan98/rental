var main_img = document.querySelector(".main-img");
var image_container = document.querySelectorAll(".img");
var inputs = document.querySelectorAll(".input");
var detail_list = document.querySelectorAll(".detail_list");
function getForm(){
  var location = document.form.location.value;
  var bhk = document.form.bedroom.value;
  var checkIn = document.form.checkin.value;
  var checkOut = document.form.checkout.value;
  var houseStatus = document.form.house_status.value;
  var parking_status = document.getElementById("parking");
 
  if((location=="")||(bhk=="" || bhk ==0)||(checkIn=="")||(checkOut == "")){
    alert("Please fill the form");
  }else{
    if(bhk > 4){
      alert("Max bedrooms limit is 4");
    }else{
    updateHtml(location,bhk,checkIn,checkOut,houseStatus,parking_status);
    clearInput();
    }
  }
}
function updateHtml(location,bhk,checkIn,checkOut,houseStatus,parking_status){
  var location_span = document.getElementById("location");
  var bedroom_span = document.getElementById("bedroom");
  var checkin_span = document.getElementById("checkin");
  var checkout_span = document.getElementById("checkout");
  var houseStatus_span = document.getElementById("house_status");
  var parking_span = document.getElementById("parking_status");
  var list_visible = false;
  if(list_visible){
    detail_list[0].style.opacity = "0";
    detail_list[1].style.opacity = "0";
  }else{
    detail_list[0].style.opacity = "1";
    detail_list[1].style.opacity = "1";
  }
  location_span.innerHTML = location;
  bedroom_span.innerHTML = bhk;
  checkin_span.innerHTML = checkIn;
  checkout_span.innerHTML = checkOut;
  houseStatus_span.innerHTML = houseStatus;
  //Parking status
  if(parking_status.checked){
    parking_span.innerHTML = `<i class="fas fa-check-circle"></i>`;
  }else{
    parking_span.innerHTML = `<i class="fas fa-times-circle"></i>`;
  }
  addImg(bhk);
}
//Add images 
var images = [
  ["https://images.unsplash.com/photo-1572120360610-d971b9d7767c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80","https://images.unsplash.com/photo-1445510861639-5651173bc5d5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGhvdWVzJTIwaW50ZXJpb3J8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=60","https://images.unsplash.com/photo-1453671424686-dfef17039343?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTF8fGhvdWVzJTIwaW50ZXJpb3J8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=60","https://images.unsplash.com/photo-1501877008226-4fca48ee50c1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzV8fGhvdWVzJTIwaW50ZXJpb3J8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=60"],
  ["https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG91c2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=60","https://images.unsplash.com/photo-1554995207-c18c203602cb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8aG91c2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=60","https://images.unsplash.com/photo-1484154218962-a197022b5858?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGhvdXNlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=60","https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fGhvdXNlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=60"],
  ["https://images.unsplash.com/photo-1576941089067-2de3c901e126?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGhvdXNlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=60","https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aW50ZXJpb3J8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=60","https://images.unsplash.com/photo-1586105251261-72a756497a11?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8aW50ZXJpb3J8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=60","https://images.unsplash.com/photo-1513519245088-0e12902e5a38?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=60"],
  ["https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aG91c2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=60","https://images.unsplash.com/photo-1518733057094-95b53143d2a7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fGhvdXNlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=60","https://images.unsplash.com/photo-1512916194211-3f2b7f5f7de3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTd8fGhvdXNlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=60","https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG91c2UlMjBpbnRlcmlvcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=60"]
  ];
function addImg(a){
  a = a-1;
  for(var i=0;i<image_container.length;i++){
    image_container[i].src = ""+images[a][i]+"";
  }
}
//Change main image of click
function changeImg(img){
  if(img == ""){
    return false;
  }else{
  main_img.src = ""+img+"";
  }
}
//Clear all input fields
function clearInput(){
  for(var i=0;i<inputs.length;i++){
    inputs[i].value = "";
  }
}
var slider_img = ["https://images.unsplash.com/photo-1572120360610-d971b9d7767c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80","https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG91c2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=60","https://images.unsplash.com/photo-1576941089067-2de3c901e126?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGhvdXNlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=60","https://images.unsplash.com/photo-1549517045-bc93de075e53?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80"];
var index=0;
var intro_img = document.querySelector(".intro-img");
function slider(){
  intro_img.style.backgroundImage = "url('"+slider_img[index]+"')";
  index++;
  if(index == slider_img.length){
    index=0;
  }
}
setInterval(slider,2000);