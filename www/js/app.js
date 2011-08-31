/**
 * PhoneGapLocation
 *
 * Little demo application for retrieving the current location of the
 * device the app is running on and showing that location on a Google Map.
 * Uses PhoneGap to retrieve the location.
 *
 * @author Stefan Kolb <stefan.kolb@indiginox.com>
 */

new Ext.Application({
  name: 'app',
  
  launch: function() {
    this.launched = true;
    this.mainLaunch();
  },
  
  mainLaunch: function() {
    if (!device || !this.launched) {
      return;
    }
    
    Ext.dispatch({
      controller: 'app.controllers.AppController',
      action: 'index'
    });
  }
});

document.addEventListener('deviceready', app.mainLaunch, false);