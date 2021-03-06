/*
 * Default properties specific to layout grids.
 */
var LayoutGridDataInformation = {
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the LayoutGridDataInformation (a Application or Document).
   * @type {Mixed}
   */
  parent: undefined,
  
  /*
   * A collection of events.
   * @type {Events}
   */
  events: undefined,
  
  /*
   * A collection of event listeners.
   * @type {EventListeners}
   */
  eventListeners: undefined,
  
  /*
   * The font applied to the LayoutGridDataInformation, specified as either a font object or the name of font family. Can return: Font or String.
   * @type {Mixed}
   */
  appliedFont: undefined,
  
  /*
   * The name of the font style.
   * @type {String}
   */
  fontStyle: undefined,
  
  /*
   * The text size.
   * @type {Mixed}
   */
  pointSize: undefined,
  
  /*
   * The amount of white space between characters.
   * @type {Number}
   */
  characterAki: undefined,
  
  /*
   * The amount of white space between lines.
   * @type {Number}
   */
  lineAki: undefined,
  
  /*
   * The horizontal scaling applied to the LayoutGridDataInformation.
   * @type {Number}
   */
  horizontalScale: undefined,
  
  /*
   * The vertical scaling applied to the LayoutGridDataInformation.
   * @type {Number}
   */
  verticalScale: undefined,
  
  /*
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * Generates a string which, if executed, will return the LayoutGridDataInformation.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {LayoutGridDataInformation}
   */
  getElements: function() {
    return new LayoutGridDataInformation();
  },
  
  /*
   * Retrieves the object specifier.
   * @returns {String}
   */
  toSpecifier: function() {
    return new String();
  },
  
  /*
   * Adds an event listener.
 *
   * @param {String} eventType The event type.
   * @param {Mixed} handler The event handler. Can accept: File or JavaScript Function.
   * @param {Boolean} [captures] This parameter is obsolete. 
   * @returns {EventListener}
   */
  addEventListener: function(eventType, handler, captures) {
    return new EventListener();
  },
  
  /*
   * Removes the event listener.
 *
   * @param {String} eventType The registered event type.
   * @param {Mixed} handler The registered event handler. Can accept: File or JavaScript Function.
   * @param {Boolean} [captures] This parameter is obsolete. 
   * @returns {Boolean}
   */
  removeEventListener: function(eventType, handler, captures) {
    return new Boolean();
  },
  
};
