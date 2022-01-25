import React, { Component } from 'react';

import './ResponsiveTable.scss';

class ResponsiveTable extends Component {
    render() {
        return (
            <table className="responsiveTable">
                <thead>
                    <tr>
                        {Object.entries(this.props.columns).map((tuple) => (
                            <td key={tuple[0]}>{tuple[1]}</td>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {this.props.rows.map((row, index) => (
                        <tr key={index}>
                            {Object.entries(this.props.columns).map((tuple) => {
                                if (tuple[0] === 'address') {
                                    const { city, street, suite } = row['address'];
                                    const address = [city, street, suite];
                                    return (
                                        <td key={tuple[0]} data-label={tuple[1]}>
                                            {address.join(', ')}
                                        </td>
                                    );
                                }
                                return (
                                    <td key={tuple[0]} data-label={tuple[1]}>
                                        {(row[tuple[0]])}
                                    </td>
                                );
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    }
}

export default ResponsiveTable;
