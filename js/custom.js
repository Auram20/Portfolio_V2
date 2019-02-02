$(document).ready(function() {


    var userFeed = new Instafeed({
 		get: 'user',
        userId: '322283034',
        clientId: 'dcbbc1c43ac14512aa8d4a128b9b6cf9',
        accessToken: '322283034.dcbbc1c.d67f4a55fac9450da85288649e8a89fc',
        limit: 3,
        resolution: 'low_resolution',
       	sortBy: 'most-recent',
      //  template: '<div class="col-lg-3 instaimg"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
    });


    userFeed.run();

    
//    This will create a single gallery from all elements that have class "gallery-item"
    $('.gallery').magnificPopup({
        type: 'image',
        delegate: 'a',
        gallery: {
            enabled: true
        }
    });


});