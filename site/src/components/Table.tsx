interface TableProps {
  headers: string[];
  rows: string[][];
}

export function Table({ headers, rows }: TableProps) {
  return (
    <div className="my-6 overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border">
            {headers.map((header, i) => (
              <th
                key={i}
                className="px-4 py-3 text-left font-medium text-foreground"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-border/50">
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-3 text-muted-foreground">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
