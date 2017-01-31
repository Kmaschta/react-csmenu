import React from 'react';
import ReactDOM from 'react-dom';
import defaultStyle from './styles';

const CSMenu = React.createClass({
	getInitialState() {
		return {
			opened: false,
			hoveredItem: null,
		};
	},

	componentDidMount() {
		const childNode = ReactDOM.findDOMNode(this.child);
		this.width = childNode.offsetWidth;
		this.height = childNode.offsetHeight;
	},

	open() {
		if (!this.state.opened) {
			this.setState({ opened: true });
		}
	},

	close() {
		if (this.state.opened) {
			this.setState({ opened: false });
		}
	},

	handleItemClick(item) {
		const { onItemClick } = this.props;

		return function(evt) {
			onItemClick(evt, item);
		};
	},

	renderCenterLabel() {
		const { items, closingLabel } = this.props;
		const { hoveredItem } = this.state;

		if (items[hoveredItem]) {
			return items[hoveredItem].label || closingLabel;
		}

		return closingLabel;
	},

	renderOpened(styles) {
		const { size, items, closingLabel } = this.props;
		const { hoveredItem } = this.state;

		const origin = {
			x: this.width / 2,
			y: this.height / 2,
		};

		const angleInRadians = -(360 / items.length) * Math.PI / 180;
		const x = origin.x + size * Math.cos(angleInRadians);
		const y = origin.y + size * Math.sin(angleInRadians);

		return <svg style={styles.svg} width={this.width} height={this.height}>
			<circle style={styles.background} />
			{items.map((item, i) => <path
				key={i}
				style={styles.item(items, i, origin, hoveredItem === i)}
				d={`M${origin.x},${origin.y} l${size},0 A${size},${size} 0 0,0 ${x},${y} z`}
				onMouseEnter={() => this.setState({ hoveredItem: i })}
				onMouseLeave={() => this.setState({ hoveredItem: null})}
				onClick={this.handleItemClick(item)}
			/>)}
			<circle style={styles.closingCircle} onClick={this.close} />
			<text x="50%" y="50%" style={styles.closingLabel} onClick={this.close}>{this.renderCenterLabel()}</text>
		</svg>;
	},

	renderClosed() {
		return React.cloneElement(this.props.children, { ref: (child) => this.child = child });
	},

	render() {
		const { items, children, size, style, closingRatio } = this.props;
		const { opened } = this.state;

		if (items.length < 2) {
			throw new Error('CSMenu: Not enough items');
		}

		if (React.Children.count(children) > 1) {
			throw new Error('CSMenu: Too many children');
		}

		const styles = style(size, closingRatio);

		return (<div onClick={this.open} style={styles.wrapper}>
			{opened ? this.renderOpened(styles) : this.renderClosed()}
		</div>);
	},
});

CSMenu.propTypes = {
	children: React.PropTypes.element.isRequired,
	items: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
	size: React.PropTypes.number,
	closingLabel: React.PropTypes.string,
	closingRatio: React.PropTypes.number,
	onItemClick: React.PropTypes.func,
	style: React.PropTypes.func,
};

CSMenu.defaultProps = {
	size: 150,
	closingLabel: 'CLOSE',
	closingRatio: 0.33,
	onItemClick: () => {},
	style: defaultStyle,
};

export { defaultStyle };

export default CSMenu;
