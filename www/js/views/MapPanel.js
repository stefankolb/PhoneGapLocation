app.views.MapPanel = Ext.extend(Ext.Panel, {
  
  /**
   * Init component
   *
   * @override
   * @type void
   */
  initComponent: function() {
    this.addEvents('locate');
    
    Ext.apply(this, {
      dockedItems: [
        {
          xtype: 'toolbar',
          title: 'Location',
          items: [
            { xtype: 'spacer' },
            {
              iconMask: true,
              iconCls: 'locate',
              ui: 'action',
              handler: this.onLocateTap,
              scope: this
            }
          ]
        }
      ],
      items: [
        {
          xtype: 'map'
        }
      ]
    });
    
    app.views.MapPanel.superclass.initComponent.apply(this, arguments);
    
    this.map = this.items.items[0];
    this.locationMarker = null;
  },
  
  
  /**
   * Handler: On locate tap
   *
   * This handler is called after the Locate icon (in the top right corner
   * of the view) is tapped. It just fires the locate event.
   *
   * @param object  btn The locate button that has been tapped
   * @param object  evt The event object
   * @type void
   */
  onLocateTap: function(btn, evt) {
    this.fireEvent('locate');
  },
  
  
  /**
   * Show location marker
   *
   * This method displays a marker for the passed location.
   *
   * @param object  location  The location on which the marker should be created.
   * @type void
   */
  showLocationMarker: function(location) {
    // Remove any previously added marker
    if (this.locationMarker) {
      this.locationMarker.setMap(null);
    }
    
    // Create and show new marker for passed location
    var myLatlng = new google.maps.LatLng(location.geolat, location.geolong);
    this.locationMarker = new google.maps.Marker({
      position: myLatlng,
      map: this.map.map
    });
  }
});

Ext.reg('mappanel', app.views.MapPanel);
