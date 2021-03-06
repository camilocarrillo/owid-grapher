// @flow

import _ from 'lodash'
import * as d3 from 'd3'
import React, {Component} from 'react'
import {render} from 'preact'
import owid from '../owid'
import {computed} from 'mobx'
import {observer} from 'mobx-react'
import Bounds from './Bounds'
import {NullElement} from './Util'
import dataflow from './owid.dataflow'

@observer
export default class SourcesTab extends Component {
	props: {
		bounds: Bounds,
		sources: Object[]
	}

	@computed get bounds() : Bounds {
		return this.props.bounds
	}

	@computed.struct get sources() : Object[] {
		return this.props.sources
	}

	render() {
		const { bounds, sources } = this

		return <div class="sourcesTab" style={_.extend(bounds.toCSS(), { position: 'absolute' })}>
			<div>
				<h2>Sources</h2>
				<div dangerouslySetInnerHTML={{__html: _.map(sources, 'description').join(' ') }} />
			</div>
		</div>
	}
}
