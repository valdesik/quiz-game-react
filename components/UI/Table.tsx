const Table = ({props}) => {
    return (
        <table className="min-w-full bg-white border border-gray-300">
            <thead>
            <tr>
                {props.headers.map((header: string, index: number) => (
                    <th
                        key={index}
                        className="py-2 px-4 border-b border-gray-300 bg-gray-100 text-left -top-0 text-sm font-semibold text-gray-700"
                    >
                        {header}
                    </th>
                ))}
            </tr>
            </thead>
            <tbody>
            {props.data.map((row: never, rowIndex: number) => (
                <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50 table'}>
                    {props.headers.map((header: string, colIndex: number) => (
                        <td
                            key={colIndex}
                            className="py-2 px-4 border-b border-gray-300 text-sm text-gray-700 whitespace-nowrap"
                        >
                            {row[header]}
                        </td>
                    ))}
                </tr>
            ))}
            </tbody>
        </table>
    );
}

export default Table;