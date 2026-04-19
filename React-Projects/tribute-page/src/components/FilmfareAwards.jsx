import React from 'react'
import { FilmfareAwardsArray } from '../data'

const FilmfareAwards = () => {
    return (
        <div className="my-4">
            <h3 className="text-primary border-start border-4 border-primary ps-3 mb-4 fw-bold">Filmfare Winning History</h3>
            <div className="table-responsive rounded-3 overflow-hidden shadow-sm">
                <table className="table table-hover align-middle mb-0">
                    <thead className="table-primary">
                        <tr>
                            <th className="py-3 ps-4">Year</th>
                            <th className="py-3">Category</th>
                            <th className="py-3">Song</th>
                            <th className="py-3 text-center">Result</th>
                        </tr>
                    </thead>
                    <tbody>
                        {FilmfareAwardsArray.map((filmFare) => (
                            <tr key={filmFare.id}>
                                <td className="ps-4 fw-bold">{filmFare.Year}</td>
                                <td>{filmFare.Category}</td>
                                <td className="fst-italic text-primary">"{filmFare.Song}"</td>
                                <td className="text-center">
                                    <span className="badge bg-success rounded-pill px-3">{filmFare.Result}</span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default FilmfareAwards