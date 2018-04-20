// When the window has finished loading create our google map below
            google.maps.event.addDomListener(window, 'load', init);

            function init() {
                // Basic options for a simple Google Map
                // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
                var mapOptions = {
                    // How zoomed in you want the map to start at (always required)
                    zoom: 15,
                    scaleControl: false,
                    scrollwheel: false,

                    // The latitude and longitude to center the map (always required)
                    //center: new google.maps.LatLng(40.6700, -73.9400), // New York
                    center: new google.maps.LatLng(25.0649538, 121.5765393), // Company
                    // How you would like to style the map.
                    // This is where you would paste any style found on Snazzy Maps.
                    styles: [{"featureType":"administrative.land_parcel","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"landscape.man_made","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"on"}]},{"featureType":"poi","elementType":"labels.text","stylers":[{"hue":"#ff9700"},{"saturation":"33"},{"lightness":"23"},{"gamma":"1.41"},{"visibility":"off"}]},{"featureType":"poi.school","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"poi.school","elementType":"labels.text","stylers":[{"lightness":"-7"},{"saturation":"15"},{"gamma":"1.19"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"},{"lightness":"25"},{"weight":"0.01"},{"gamma":"1"},{"saturation":"-7"}]},{"featureType":"road","elementType":"labels.text","stylers":[{"saturation":"-100"},{"lightness":"36"},{"weight":"0.01"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"hue":"#ff8600"},{"visibility":"on"}]},{"featureType":"road.highway","elementType":"labels","stylers":[{"visibility":"simplified"}]},{"featureType":"road.highway.controlled_access","elementType":"all","stylers":[{"visibility":"on"},{"weight":"0.75"},{"lightness":"40"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"hue":"#ffcb00"}]},{"featureType":"road.arterial","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"visibility":"on"},{"lightness":"-25"},{"saturation":"0"},{"gamma":"3.33"}]},{"featureType":"road.local","elementType":"labels","stylers":[{"visibility":"simplified"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"water","elementType":"all","stylers":[{"hue":"#a1cdfc"},{"saturation":30},{"lightness":49}]}]
                };

                // Get the HTML DOM element that will contain your map
                // We are using a div with id="map" seen below in the <body>
                var mapElement = document.getElementById('map');

                // Create the Google Map using our element and options defined above
                var map = new google.maps.Map(mapElement, mapOptions);

                var icon = {
                    url: "../assets/img/icon/icon-pin.png", // url
                    scaledSize: new google.maps.Size(35, 54), // scaled size
                    origin: new google.maps.Point(0,0), // origin
                    anchor: new google.maps.Point(0, 0) // anchor
                };

                //posicion = new google.maps.LatLng(latitud,longitud)
                marker = new google.maps.Marker({
                    position: new google.maps.LatLng(25.0649538, 121.5765393),
                    map: map,
                    icon: icon
                });

            }
