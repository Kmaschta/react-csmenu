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

	handleClick(evt) {
		this.setState(oldState => ({ opened: !oldState.opened }));
	},

	renderOpened() {
		const { size } = this.props;

		return (<svg style={styles.svg} width={this.width} height={this.height}>
			<circle style={styles.circle(size)} />
		</svg>);
	},

	renderClosed() {
		return React.cloneElement(this.props.children, { ref: (child) => this.child = child });
	},

	render() {
		if (React.Children.count(this.props.children) > 1) {
			throw Error('Too many children');
		}

		return (<div onClick={this.handleClick} style={styles.wrapper}>
			{this.state.opened ? this.renderOpened() : this.renderClosed()}
		</div>);
	},
});

CSMenu.propTypes = {
	children: React.PropTypes.element.isRequired,
	items: React.PropTypes.arrayOf(React.PropTypes.string),
	size: React.PropTypes.number,
};

CSMenu.defaultProps = {
	size: 300,
};

export default CSMenu;
