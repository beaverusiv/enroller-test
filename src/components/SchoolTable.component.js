export const SchoolTable = ({
                                schools,
                                offset,
                                total,
                                limit,
                                onChangePageBack,
                                onChangePageForward
}) => {
    const renderRows = (rows) => (<>
        {rows.map((row) => (<tr key={row.School_Id}>
            <td>{row.Org_Name}</td>
            <td>{row.Telephone}</td>
            <td>{row.Education_Region}</td>
        </tr>))}
    </>);

    return (<table>
        <thead>
        <tr>
            <th>Name</th>
            <th>Contact</th>
            <th>Education Region</th>
        </tr>
        </thead>
        <tbody>
            {renderRows(schools)}
        </tbody>
        <tfoot>
        <tr>
            <td><button onClick={onChangePageBack}>&lt;&lt; Back</button></td>
            <td>Page {Math.floor(offset / limit) + 1} of {Math.ceil(total / limit)}</td>
            <td><button onClick={onChangePageForward}>Forward &gt;&gt;</button></td>
        </tr>
        </tfoot>
    </table>);
}
