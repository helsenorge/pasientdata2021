import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

import styled from 'styled-components'
import 'mapbox-gl/dist/mapbox-gl.css'

import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css'


class ClickableMarker extends mapboxgl.Marker {
    onClick(handleClick) {
      this._handleClick = handleClick;
      return this;
    }

    _onMapClick(e) {
      const targetElement = e.originalEvent.target;
      const element = this._element;

      if (this._handleClick && (targetElement === element || element.contains((targetElement)))) {
        this._handleClick();
      }
    }
  };

  export default ClickableMarker