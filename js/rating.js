function starRatingTag(tagName,fn){
    document.createElement(tagName);
    //find all the tags occurrences (instances) in the document
    var tagInstances = document.getElementsByTagName(tagName);
          //for each occurrence run the associated function
          for ( var i = 0; i < tagInstances.length; i++) {
              fn(tagInstances[i]);
          }
  }
   
  function rateMySkill(element){
        if (element.attributes.stars){
            var noOfStars = element.attributes.stars.value;
            noOfStars = parseInt(noOfStars);
            var stars = '';
            for ( var i = 0; i < noOfStars; i++) {
                stars = stars + '<img src="./img/star-gold.svg" class="img-fluid star-icon" >';
            }

            element.innerHTML = `<p class="star-icon-pos">`+stars+` </p>`;
             
        }
  }   
   
  starRatingTag("rate-skill",rateMySkill);