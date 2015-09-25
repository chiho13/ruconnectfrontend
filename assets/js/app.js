var map;
    $(document).ready(function(){
      map = new GMaps({
        el: '#map',
        lat: 43.657733,
        lng: -79.381097
      });
      map.addMarker({
        lat: 43.657733,
        lng: -79.381097,
        title: 'RU',
        details: {
          database_id: 42,          
          author: 'RU'
        },
        // infoWindow: {
        //   content: '<p>Click for more info</p>'
        // },
        // click: function(e){
        //   if(console.log)
        //     console.log(e);
        //   alert('You clicked in this marker');
        // },
        mouseover: function(e){
          if(console.log)
            console.log(e);
        }
      });

    });

    // (43.657733, -79.381097)
