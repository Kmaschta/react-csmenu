import React from 'react';
import ReactDOM from 'react-dom';
import CSMenu from 'react-csmenu';

const App = React.createClass({
	render () {
		return (
			<div className={'container'}>
				<CSMenu items={['Item 1', 'Item 2', 'Item 3']}>
					<div>
						<button>Hello world!</button>
					</div>
				</CSMenu>
			</div>
		);
	}
});

ReactDOM.render(<App />, document.getElementById('app'));
