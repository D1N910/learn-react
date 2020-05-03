import React from 'react';

export default class Section extends React.Component {
    render() {
        return <div className="section">
					<div className="title">{ this.props.title }</div>
					<ul>
						{
							this.props.list.map(item =>
								<li key={item.toString()}>{item}</li>
							)
						}
					</ul>
				</div>
    }
}
