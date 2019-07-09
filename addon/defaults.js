import Ember from 'ember';
export default {
  animation: 'fill',
  arrow: false,
  class: null,
  flip: null,
  hideDelay: 0,
  hideDuration: 300,
  hideOn: 'mouseleave blur escapekey',
  interactive: false,
  isOffset: false,
  isShown: false,
  lazyRender: false,
  modifiers: null,
  placement: 'top',
  popperContainer: Ember.testing ? '#ember-testing' : '.ember-application',
  popperOptions: null,
  renderInPlace: false,
  showDelay: 0,
  showDuration: 300,
  showOn: 'mouseenter focus',
  style: null,
  tooltipClass: 'ember-attacher-popper ember-attacher-tooltip',
  useCapture: false
};
