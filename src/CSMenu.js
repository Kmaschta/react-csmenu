import React from 'react';
import ReactDOM from 'react-dom';
import styles from './styles';


const CSMenu = React.createClass({
	getInitialState() {
		return { opened: false };
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

	renderOpened() {
		const { size, items } = this.props;

		return (<svg style={styles.svg} width={this.width} height={this.height}>
			<text x="50%" y="50%" style={styles.cancel} onClick={this.close}>Cancel</text>
			{items.map((item, i) => <circle key={i} style={styles.circle(size, items.length, i)} onClick={(evt) =>{evt.preventDefault(); console.log(item);}} />)}
		</svg>);
	},

	renderClosed() {
		return React.cloneElement(this.props.children, { ref: (child) => this.child = child });
	},

	render() {
		if (this.props.items.length < 1) {
			throw new Error('CSMenu: Not enought items');
		}

		if (React.Children.count(this.props.children) > 1) {
			throw new Error('CSMenu: Too many children');
		}

		return (<div onClick={this.open} style={styles.wrapper}>
			{this.state.opened ? this.renderOpened() : this.renderClosed()}
		</div>);
	},
});

CSMenu.propTypes = {
	children: React.PropTypes.element.isRequired,
	items: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
	size: React.PropTypes.number,
};

CSMenu.defaultProps = {
	size: 200,
};

export default CSMenu;
