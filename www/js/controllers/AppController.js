app.controllers.AppController =
  Ext.regController('app.controllers.AppController', function() {
  
  // Used as a reference to this controller
  var _me = null;
  
  
  return {
    
    /**
     * Index
     *
     * Call this method first to initialize the view this controller
     * managers.
     *
     * @type void
     */
    index: function() {
      if (!this.view) {
        this.view = this.render({
          xtype: 'mappanel',
          fullscreen: true
        });
        
        this.view.on({
          locate: this.getLocation,
          scope: this
        })
      }
      
      this.view.show();
      
      // Store a reference to this controller
      _me = this;
    },
    
    
    /**
     * Get location
     *
     * This method calls a PhoneGap API to retrieve the current position
     * of the device the application is running on
     *
     * @type void
     */
    getLocation: function() {
      navigator.geolocation.getCurrentPosition(_me.onGetLocationSuccess,
                                               _me.onGetLocationError)
    },
    
    
    /**
     * Handler: Get location success
     *
     * This method is called after the location of the device was
     * successfully retrieved. It causes the map view to update with the
     * retrieved location.
     *
     * @param object  location  The location object (PhoneGap)
     * @type void
     */
    onGetLocationSuccess: function(location) {
      var geolat = location.coords.latitude;
      var geolong = location.coords.longitude;
      
      _me.view.showLocationMarker({ geolat: geolat, geolong: geolong });
      _me.view.map.update({ latitude: geolat, longitude: geolong });
    },
    
    
    /**
     * Handler: Get location error
     *
     * This method is called if the location of the device could not
     * be retrieved. For now, it just shows an alert message.
     *
     * @param object  error The error object (PhoneGap)
     * @type void
     */
    onGetLocationError: function(error) {
      alert("Could not determine your position");
    }
  }  
}());
