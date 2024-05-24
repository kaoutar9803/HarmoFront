import React from 'react';

function Table({ data, title, headers }) {
    return (
        <div className="col-lg-12 col-xl-12 stretch-card">
            <div className="card">
                <div className="card-body">
                    <h6 className="card-title mb-0">{title}</h6>
                    <div className="table-responsive">
                        <table className="table table-hover mb-0">
                            <thead>
                                <tr>
                                    {headers.map(header => (
                                        <th key={header}>{header}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item, index) => (
                                    <tr key={index}>
                                        {headers.map(header => (
                                            <td key={`${index}-${header}`}>{item[header.toLowerCase()]}</td> 
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Table;
