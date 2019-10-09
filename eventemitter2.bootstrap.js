// code for SDK < 8.1.0.GA
require('/ti.internal/extensions/binding')('events', '/node_modules/@titanium/events');
require('/ti.internal/extensions/binding')('eventemitter2', '/node_modules/@titanium/events');

// Code for SDK >= 8.1.0.GA
global.binding.register('events', require('@titanium/events'));
global.binding.register('eventemitter2', require('@titanium/events'));

