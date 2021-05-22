function setRandomLink() {
   var randLink = document.getElementById('l1');
 
   var theLinks = new Array(
      'http://1answers.yahoo.com',
      'http://www.1imdb.com/name/nm0005453',
      'http://www.1funnycoolstuff.com/images/paris-hilton-sexy.jpg',
      'http://www.1thesuperficial.com/archives/2005/12/26/jenifer_love_hewitt_is_kind_to.html',
      'http://www.1youtube.com/v/8MrIHH2zdBc'
   );
 
   var arrSize = theLinks.length;
 
   var randNo = Math.random();
   randNo = Math.floor(randNo * arrSize);
 
   randLink.href = theLinks[randNo];
}

function setRandomLink2() {
   var randLink2 = document.getElementById('l2');
 
   var theLinks = new Array(
      'http://2answers.yahoo.com',
      'http://www.2imdb.com/name/nm0005453',
      'http://www.2funnycoolstuff.com/images/paris-hilton-sexy.jpg',
      'http://www.2thesuperficial.com/archives/2005/12/26/jenifer_love_hewitt_is_kind_to.html',
      'http://www.2youtube.com/v/8MrIHH2zdBc'
   );
 
   var arrSize = theLinks.length;
 
   var randNo = Math.random();
   randNo = Math.floor(randNo * arrSize);
 
   randLink2.href = theLinks[randNo];
}

function setRandomLink3() {
   var randLink3 = document.getElementById('l3');
 
   var theLinks = new Array(
      'http://3answers.yahoo.com',
      'http://www.3imdb.com/name/nm0005453',
      'http://www.3funnycoolstuff.com/images/paris-hilton-sexy.jpg',
      'http://www.3thesuperficial.com/archives/2005/12/26/jenifer_love_hewitt_is_kind_to.html',
      'http://www.3youtube.com/v/8MrIHH2zdBc'
   );
 
   var arrSize = theLinks.length;
 
   var randNo = Math.random();
   randNo = Math.floor(randNo * arrSize);
 
   randLink3.href = theLinks[randNo];
}
