import type { LegalTableRow } from '@/types/content'
import { plainText } from '@/lib/plain-text'
import { RichText } from './RichText'

type LegalTableProps = {
  columns: readonly [string, string]
  rows: readonly LegalTableRow[]
}

export function LegalTable({ columns, rows }: LegalTableProps) {
  return (
    <div className="overflow-hidden rounded-card border border-line bg-surface">
      <table role="table" className="block w-full text-left text-body-sm sm:table">
        <thead role="rowgroup" className="sr-only sm:not-sr-only sm:table-header-group">
          <tr role="row" className="border-b border-line bg-neutral-soft">
            {columns.map((column) => (
              <th
                key={column}
                role="columnheader"
                scope="col"
                className="px-5 py-3 text-overline font-medium text-foreground uppercase"
              >
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody role="rowgroup" className="block divide-y divide-line sm:table-row-group">
          {rows.map(([label, value]) => (
            <tr key={plainText(label)} role="row" className="block px-4 py-4 sm:table-row sm:p-0">
              <td
                role="cell"
                className="block font-medium text-foreground sm:table-cell sm:w-2/5 sm:px-5 sm:py-4 sm:align-top"
              >
                <RichText text={label} />
              </td>
              <td
                role="cell"
                className="mt-1 block text-muted sm:mt-0 sm:table-cell sm:px-5 sm:py-4 sm:align-top"
              >
                <RichText text={value} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
