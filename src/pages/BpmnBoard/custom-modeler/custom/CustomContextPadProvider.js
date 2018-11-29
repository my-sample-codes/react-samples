import inherits from 'inherits';

import ContextPadProvider from 'bpmn-js/lib/features/context-pad/ContextPadProvider';

import {
  isAny
} from 'bpmn-js/lib/features/modeling/util/ModelingUtil';

import {
  assign,
  bind
} from 'min-dash';


export default function CustomContextPadProvider(injector, connect, translate, elementFactory, autoPlace, create) {

  injector.invoke(ContextPadProvider, this);

  var cached = bind(this.getContextPadEntries, this);

  this.getContextPadEntries = function (element) {
    var actions = cached(element);

    var businessObject = element.businessObject;

    function startConnect(event, element) {
      connect.start(event, element);
      
    }

    function appendAction(type, className, title, options) {

      if (typeof title !== 'string') {
        options = title;
        title = translate('Append {type}', { type: type.replace(/^bpmn:/, '') });
      }

      function appendStart(event, element) {

        var shape = elementFactory.createShape(assign({ type: type }, options));
        create.start(event, shape, element);
      }

      return {
        group: 'model',
        className: className,
        title: title,
        action: {
          dragstart: appendStart,
          click: appendStart
        }
      };
    }




    if (isAny(businessObject, ['custom:triangle', 'custom:circle', 'custom:csv', 'custom:xls'])) {
      assign(actions, {
        'connect': {
          group: 'connect',
          className: 'bpmn-icon-connection-multi',
          title: translate('Connect using custom connection'),
          action: {
            click: startConnect,
            dragstart: startConnect
          }
        },
        'append.end-event': appendAction(
          'bpmn:EndEvent',
          'bpmn-icon-end-event-none'
        ), 'append.append-task': appendAction(
          'bpmn:Task',
          'bpmn-icon-task'
        ),
        'append.gateway': appendAction(
          'bpmn:ExclusiveGateway',
          'bpmn-icon-gateway-none',
          translate('Append Gateway')
        ), 'append.custom-csv': appendAction(
          'custom:csv',
          'icon-custom-csv-pad',
          translate('Append CSV')
        ), 'append.intermediate-event': appendAction(
          'bpmn:IntermediateThrowEvent',
          'bpmn-icon-intermediate-event-none',
          translate('Append Intermediate/Boundary Event')
        ), 'append.custom-xls': appendAction(
          'custom:xls',
          'icon-custom-xls-pad',
          translate('Append XLS')
        )

      });
    }

    return actions;
  };
}

inherits(CustomContextPadProvider, ContextPadProvider);

CustomContextPadProvider.$inject = [
  'injector',
  'connect',
  'translate',
  'elementFactory',
  'autoPlace',
  'create'
];