var loadSermon = (link)=>{
  window.open(link, '_blank');
}

function searchArray(array, str) {
  str = str.toLowerCase();
  // alert(str);
  pass = [];
  for(var i = 0; i < array.length; i++){
    text = array[i].title.toLowerCase();
   // alert(text + " && "+ str);
   check = text.indexOf(str);
    if(check > -1){
      pass.push(array[i]);
    }
  }
  return pass;
}

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  
  // Your web app's Firebase configuration
  var firebaseConfig = {
    databaseURL: "https://hwcnglobal.firebaseio.com",
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var sermons = [];

$(document).ready(function () {
            

  firebase.database().ref("/sermons").on("value", function(snapshot){
  // $("table tbody").empty();
  $(".sermons-display").empty();
  $(".home-sermons-display").empty();
  sermons = [];
  let count = 0;
  snapshot.forEach(function(childSnapshot){
    let dbKey = childSnapshot.key;
    let dbValue = childSnapshot.val();
    if(!dbValue.image){
      image = "assets/images/index-meta.jpg";
    }
    else{
      image = dbValue.image;
    }
    sermons.push({key: dbKey, image: image, title: dbValue.title, link: dbValue.link});
    let sermon = '<div class="card p-3 col-12 col-md-6 col-lg-3" tag-type="sermon">'+
                '<div style="background: #fff; cursor: pointer"'+
                'onclick="loadSermon(\''+dbValue.link+'\')" class="card-wrapper">'+
                    '<div class="card-img">'+
                        '<img src="'+image+'" alt="Sermon Icon" style="height: 250px">'+
                    '</div>'+
                    '<div class="card-box" style="padding: 10px;">'+
                        '<p class="card-title pb-3 mbr-fonts-style display-7"'+ 
                        'style="text-align: center; height: 50px; margin: 0; overflow: hidden">'+dbValue.title+'</p>'+
                    '</div>'+
                '</div>'+
            '</div>';

    $(".sermons-display").prepend(sermon);
    count++;
    if(count < 4){
      $(".home-sermons-display").prepend(sermon);
    }
  })
  
})

})