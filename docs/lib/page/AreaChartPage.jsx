'use strict';

import React from "react";

import ContentSection from "lib/content-section";
import Row from "lib/row";
import Section from "lib/section";

import AreaChart from "lib/charts/AreaChart";
import AreaChartWithYPercent from "lib/charts/AreaChartWithYPercent";

var OverviewPage = React.createClass({
	statics: {
		title: 'Area Chart'
	},
	render() {
		return (
			<ContentSection title={OverviewPage.title}>
				<Row>
					<Section colSpan={2}>
						<AreaChart data={this.props.someData} type="svg" />
					</Section>
				</Row>
				<Row>
					<Section colSpan={2}>
						<aside dangerouslySetInnerHTML={{__html: require('md/AREACHART')}}></aside>
					</Section>
				</Row>
				<Row>
					<Section colSpan={2}>
						<AreaChartWithYPercent data={this.props.someData} type="svg" />
					</Section>
				</Row>
			</ContentSection>
		);
	}
});

export default OverviewPage;
