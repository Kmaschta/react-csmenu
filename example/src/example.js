import React from 'react';
import ReactDOM from 'react-dom';
import CSMenu, { defaultStyle } from 'react-csmenu';

const style = (...args) => {
	const styles = defaultStyle(...args);

	return {
		...styles,
		closingLabel: {
			...styles.closingLabel,
			textTransform: 'uppercase',
		},
	};
};

const App = React.createClass({
	render () {
		const items = [
			{ label: 'Item 1' },
			{ label: 'Item 2' },
			{ label: 'Item 3' },
			{ label: 'Item 4' },
			{ label: 'Item 5' },
			{ label: 'Item 6' },
			{ label: 'Item 7' },
		];

		return (
			<div className={'container'}>
				<CSMenu items={items} onItemClick={(evt, item) => console.log(item)} style={style}>
					<button>Hello world!</button>
				</CSMenu>
			</div>
		);
	}
});

ReactDOM.render(<App />, document.getElementById('app'));
