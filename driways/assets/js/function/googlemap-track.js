function TxtOverlay(pos, txt, cls, map) {

      // Now initialize all properties.
      this.pos = pos;
      this.txt_ = txt;
      this.cls_ = cls;
      this.map_ = map;

      // We define a property to hold the image's
      // div. We'll actually create this div
      // upon receipt of the add() method so we'll
      // leave it null for now.
      this.div_ = null;

      // Explicitly call setMap() on this overlay
      this.setMap(map);
    }

    TxtOverlay.prototype = new google.maps.OverlayView();



    TxtOverlay.prototype.onAdd = function() {

      // Note: an overlay's receipt of onAdd() indicates that
      // the map's panes are now available for attaching
      // the overlay to the map via the DOM.

      // Create the DIV and set some basic attributes.
      var div = document.createElement('DIV');
      div.className = this.cls_;

      div.innerHTML = this.txt_;

      // Set the overlay's div_ property to this DIV
      this.div_ = div;
      var overlayProjection = this.getProjection();
      var position = overlayProjection.fromLatLngToDivPixel(this.pos);
      div.style.left = position.x + 'px';
      div.style.top = position.y + 'px';
      // We add an overlay to a map via one of the map's panes.

      var panes = this.getPanes();
      panes.floatPane.appendChild(div);
    }
    TxtOverlay.prototype.draw = function() {


        var overlayProjection = this.getProjection();

        // Retrieve the southwest and northeast coordinates of this overlay
        // in latlngs and convert them to pixels coordinates.
        // We'll use these coordinates to resize the DIV.
        var position = overlayProjection.fromLatLngToDivPixel(this.pos);


        var div = this.div_;
        div.style.left = position.x + 'px';
        div.style.top = position.y + 'px';



      }
      //Optional: helper methods for removing and toggling the text overlay.
    TxtOverlay.prototype.onRemove = function() {
      this.div_.parentNode.removeChild(this.div_);
      this.div_ = null;
    }
    TxtOverlay.prototype.hide = function() {
      if (this.div_) {
        this.div_.style.visibility = "hidden";
      }
    }

    TxtOverlay.prototype.show = function() {
      if (this.div_) {
        this.div_.style.visibility = "visible";
      }
    }

    TxtOverlay.prototype.toggle = function() {
      if (this.div_) {
        if (this.div_.style.visibility == "hidden") {
          this.show();
        } else {
          this.hide();
        }
      }
    }

    TxtOverlay.prototype.toggleDOM = function() {
      if (this.getMap()) {
        this.setMap(null);
      } else {
        this.setMap(this.map_);
      }
    }





// When the window has finished loading create our google map below
            google.maps.event.addDomListener(window, 'load', init);

            function init() {
                // Basic options for a simple Google Map
                // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
                var mapOptions = {
                    // How zoomed in you want the map to start at (always required)
                    zoom: 15,

                    // The latitude and longitude to center the map (always required)
                    //center: new google.maps.LatLng(40.6700, -73.9400), // New York
                    center: new google.maps.LatLng(25.0649538, 121.5765393), // Company
                    // How you would like to style the map.
                    // This is where you would paste any style found on Snazzy Maps.
                    styles: [{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#d3d3d3"}]},{"featureType":"transit","stylers":[{"color":"#808080"},{"visibility":"off"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"visibility":"on"},{"color":"#b3b3b3"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"weight":1.8}]},{"featureType":"road.local","elementType":"geometry.stroke","stylers":[{"color":"#d7d7d7"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#ebebeb"}]},{"featureType":"administrative","elementType":"geometry","stylers":[{"color":"#a7a7a7"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#efefef"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#696969"}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"visibility":"on"},{"color":"#737373"}]},{"featureType":"poi","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"color":"#d6d6d6"}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"color":"#dadada"}]}]
                };

                // Get the HTML DOM element that will contain your map
                // We are using a div with id="map" seen below in the <body>
                var mapElement = document.getElementById('map');

                // Create the Google Map using our element and options defined above
                var map = new google.maps.Map(mapElement, mapOptions);

                var icon_pin = {
                    url: "../assets/img/icon/icon-pin.png", // url
                    scaledSize: new google.maps.Size(35, 54), // scaled size
                    origin: new google.maps.Point(0,0), // origin
                    anchor: new google.maps.Point(0, 0) // anchor
                };
                var icon_driver = {
                    url: "../assets/img/icon/icon-pin-circle.png", // url
                    scaledSize: new google.maps.Size(25, 26), // scaled size
                    origin: new google.maps.Point(0,0), // origin
                    anchor: new google.maps.Point(0,0) // anchor
                };

                marker_pin = new google.maps.Marker({
                    position: new google.maps.LatLng(25.0649538, 121.5765393),
                    map: map,
                    icon: icon_pin
                });

                // Driver Location
                var latlng = new google.maps.LatLng(25.0679518, 121.5752193);
                var marker = new google.maps.Marker({
                    position: latlng,
                    map: map,
                    icon: icon_driver,
                });

                pinDriverTxt = "<div>司機位置</div>"
                txt = new TxtOverlay(latlng, pinDriverTxt, "pin-driver", map)
            }

