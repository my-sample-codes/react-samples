import inherits from 'inherits';

import BaseRenderer from 'diagram-js/lib/draw/BaseRenderer';
import { getRectPath } from 'bpmn-js/lib/draw/BpmnRenderUtil'
import {
  componentsToPath,
  createLine
} from 'diagram-js/lib/util/RenderUtil';

import {
  append as svgAppend,
  attr as svgAttr,
  create as svgCreate
} from 'tiny-svg';
import {
  query as domQuery
} from 'min-dom';

 import csv from '../../style/image/csvRender.png'
 import xls from '../../style/image/xlsRender.png'


/**
 * A renderer that knows how to render custom elements.
 */
export default function CustomRenderer(eventBus, styles, canvas) {

  BaseRenderer.call(this, eventBus, 2000);

  var computeStyle = styles.computeStyle;

  this.drawTriangle = function (p, side) {
    var halfSide = side / 2,
      points,
      attrs;

    points = [halfSide, 0, side, side, 0, side];

    attrs = computeStyle(attrs, {
      stroke: '#3CAA82',
      strokeWidth: 2,
      fill: '#3CAA82'
    });

    var polygon = svgCreate('polygon');
    svgAttr(polygon, {
      points: points
    });

    svgAttr(polygon, attrs);

    svgAppend(p, polygon);

    return polygon;
  };

  this.getTrianglePath = function (element) {
    var x = element.x,
      y = element.y,
      width = element.width,
      height = element.height;

    var trianglePath = [
      ['M', x + width / 2, y],
      ['l', width / 2, height],
      ['l', -width, 0],
      ['z']
    ];

    return componentsToPath(trianglePath);
  };

  this.drawCircle = function (p, width, height) {
    var cx = width / 2,
      cy = height / 2;

    var attrs = computeStyle(attrs, {
      stroke: '#4488aa',
      strokeWidth: 4,
      fill: 'white'
    });

    var circle = svgCreate('circle');

    svgAttr(circle, {
      cx: cx,
      cy: cy,
      r: Math.round((width + height) / 4)
    });

    svgAttr(circle, attrs);

    svgAppend(p, circle);

    return circle;
  };

  this.getCirclePath = function (shape) {
    var cx = shape.x + shape.width / 2,
      cy = shape.y + shape.height / 2,
      radius = shape.width / 2;

    var circlePath = [
      ['M', cx, cy],
      ['m', 0, -radius],
      ['a', radius, radius, 0, 1, 1, 0, 2 * radius],
      ['a', radius, radius, 0, 1, 1, 0, -2 * radius],
      ['z']
    ];

    return componentsToPath(circlePath);
  };

  this.drawCSV = function (parent, shape) {
    var url = '../../csvRender';
    // var url = 'src/pages/BpmnBoard/csvRender.png';

    var catGfx = svgCreate('image', {
      x: 0,
      y: 0,
      width: shape.width,
      height: shape.height,
      href: csv
    });

    svgAppend(parent, catGfx);

    return catGfx;
  };

  this.drawXLS = function (parent, shape) {
    var catGfx = svgCreate('image', {
      x: 0,
      y: 0,
      width: shape.width,
      height: shape.height,
      href: xls
    });

    svgAppend(parent, catGfx);

    return catGfx;
  };



  this.drawCustomConnection = function (p, element) {


    var sequenceflowEnd = svgCreate('path');
    svgAttr(sequenceflowEnd, { d: 'M 1 5 L 11 10 L 1 15 Z' });

    var marker = svgCreate('marker');
    svgAttr(sequenceflowEnd, {
      fill: 'black',
      strokeWidth: 1,
      strokeLinecap: 'round',
      strokeDasharray: 'none',
      stroke: 'black'
    });
    svgAppend(marker, sequenceflowEnd);
    svgAttr(marker, {
      id: "customMarker",
      viewBox: '0 0 20 20',
      markerWidth: 10,
      markerHeight: 10,
      orient: 'auto',
      refX: 11,
      refY: 10
    });

    var defs = domQuery('defs', canvas._svg);

    if (!defs) {
      defs = svgCreate('defs');

      svgAppend(canvas._svg, defs);
    }

    svgAppend(defs, marker);


    var attrs = computeStyle(attrs, {
      stroke: '#000',
      strokeWidth: 2,
      markerEnd: 'url(#customMarker)'
    });
    console.log("p", p);

    return svgAppend(p, createLine(element.waypoints, attrs));
  };

  this.getCustomConnectionPath = function (connection) {
    var waypoints = connection.waypoints.map(function (p) {
      return p.original || p;
    });

    var connectionPath = [
      ['M', waypoints[0].x, waypoints[0].y]
    ];

    waypoints.forEach(function (waypoint, index) {
      if (index !== 0) {
        connectionPath.push(['L', waypoint.x, waypoint.y]);
      }
    });

    return componentsToPath(connectionPath);
  };
}

inherits(CustomRenderer, BaseRenderer);

CustomRenderer.$inject = ['eventBus', 'styles', 'canvas'];


CustomRenderer.prototype.canRender = function (element) {
  return /^custom:/.test(element.type);
};

CustomRenderer.prototype.drawShape = function (p, element) {
  var type = element.type;
  if (type === 'custom:triangle') {
    return this.drawTriangle(p, element.width);
  }

  if (type === 'custom:circle') {
    return this.drawCircle(p, element.width, element.height);
  }

  if (type === 'custom:csv') {
    return this.drawCSV(p, element)
  }
  if (type === 'custom:xls') {
    return this.drawXLS(p, element)
  }

};

CustomRenderer.prototype.getShapePath = function (shape) {
  var type = shape.type;

  if (type === 'custom:triangle') {
    return this.getTrianglePath(shape);
  }

  if (type === 'custom:circle') {
    return this.getCirclePath(shape);
  }
  if (type === 'custom:csv' || type === 'custom:xls') {
    return getRectPath(shape);
  }
};

CustomRenderer.prototype.drawConnection = function (p, element) {

  var type = element.type;

  if (type === 'custom:connection') {
    return this.drawCustomConnection(p, element);
  }
};


CustomRenderer.prototype.getConnectionPath = function (connection) {

  var type = connection.type;

  if (type === 'custom:connection') {
    return this.getCustomConnectionPath(connection);
  }
};