import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { ChevronUp, ChevronDown, Users } from 'lucide-react';
import { DataTableProps, SortState, SortDirection } from './types';

export function DataTable<T extends Record<string, any>>({
  data,
  columns,
  loading = false,
  selectable = false,
  sortable = true,
  onRowSelect,
  onSort,
  emptyMessage = "No data found",
  className,
}: DataTableProps<T>) {
  const [selectedRows, setSelectedRows] = useState<T[]>([]);
  const [sortState, setSortState] = useState<SortState<T>>({
    key: null,
    direction: 'asc'
  });

  const isAllSelected = data.length > 0 && selectedRows.length === data.length;
  const isPartiallySelected = selectedRows.length > 0 && selectedRows.length < data.length;

  useEffect(() => {
    if (onRowSelect) {
      onRowSelect(selectedRows);
    }
  }, [selectedRows, onRowSelect]);

  const handleSelectAll = () => {
    if (isAllSelected) {
      setSelectedRows([]);
    } else {
      setSelectedRows([...data]);
    }
  };

  const handleRowSelect = (row: T) => {
    const isSelected = selectedRows.some(selected => 
      JSON.stringify(selected) === JSON.stringify(row)
    );
    
    if (isSelected) {
      setSelectedRows(selectedRows.filter(selected => 
        JSON.stringify(selected) !== JSON.stringify(row)
      ));
    } else {
      setSelectedRows([...selectedRows, row]);
    }
  };

  const handleSort = (key: keyof T) => {
    if (!sortable) return;

    const column = columns.find(col => col.key === key);
    if (column?.sortable === false) return;

    let direction: SortDirection = 'asc';
    
    if (sortState.key === key && sortState.direction === 'asc') {
      direction = 'desc';
    }

    setSortState({ key, direction });
    
    if (onSort) {
      onSort(key, direction);
    }
  };

  const getSortIcon = (key: keyof T) => {
    if (sortState.key !== key) {
      return (
        <div className="flex flex-col opacity-50">
          <ChevronUp className="h-3 w-3 -mb-1" />
          <ChevronDown className="h-3 w-3" />
        </div>
      );
    }

    return sortState.direction === 'asc' ? (
      <div className="flex flex-col">
        <ChevronUp className="h-3 w-3 -mb-1 text-primary-500" />
        <ChevronDown className="h-3 w-3 opacity-30" />
      </div>
    ) : (
      <div className="flex flex-col">
        <ChevronUp className="h-3 w-3 -mb-1 opacity-30" />
        <ChevronDown className="h-3 w-3 text-primary-500" />
      </div>
    );
  };

  const isRowSelected = (row: T) => {
    return selectedRows.some(selected => 
      JSON.stringify(selected) === JSON.stringify(row)
    );
  };

  const SkeletonLoader = () => (
    <div className="animate-pulse">
      {Array.from({ length: 5 }).map((_, index) => (
        <tr key={index} className="border-b border-gray-200 dark:border-gray-700">
          {selectable && (
            <td className="px-6 py-4">
              <div className="w-4 h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
            </td>
          )}
          {columns.map((column, colIndex) => (
            <td key={colIndex} className="px-6 py-4">
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
            </td>
          ))}
        </tr>
      ))}
    </div>
  );

  const EmptyState = () => (
    <tr>
      <td colSpan={columns.length + (selectable ? 1 : 0)} className="px-6 py-16">
        <div className="text-center">
          <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-full mx-auto mb-4 flex items-center justify-center">
            <Users className="h-8 w-8 text-gray-400 dark:text-gray-500" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
            No data found
          </h3>
          <p className="text-gray-500 dark:text-gray-400 mb-6 max-w-sm mx-auto">
            {emptyMessage}
          </p>
        </div>
      </td>
    </tr>
  );

  return (
    <div className={cn("bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700", className)}>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700" data-testid="data-table">
          <thead className="bg-gray-50 dark:bg-gray-900">
            <tr>
              {selectable && (
                <th className="px-6 py-3 text-left">
                  <input
                    type="checkbox"
                    checked={isAllSelected}
                    ref={input => {
                      if (input) input.indeterminate = isPartiallySelected;
                    }}
                    onChange={handleSelectAll}
                    className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                    data-testid="select-all-checkbox"
                    aria-label="Select all rows"
                  />
                </th>
              )}
              {columns.map((column) => {
                const isSortable = sortable && column.sortable !== false;
                return (
                  <th
                    key={String(column.key)}
                    className={cn(
                      "px-6 py-3 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider",
                      column.align === 'center' && 'text-center',
                      column.align === 'right' && 'text-right',
                      !column.align && 'text-left'
                    )}
                    style={{ width: column.width }}
                  >
                    {isSortable ? (
                      <div
                        className="flex items-center space-x-1 cursor-pointer hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
                        onClick={() => handleSort(column.key)}
                        data-testid={`sort-${String(column.key)}`}
                      >
                        <span>{column.header}</span>
                        {getSortIcon(column.key)}
                      </div>
                    ) : (
                      <span>{column.header}</span>
                    )}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
            {loading ? (
              <SkeletonLoader />
            ) : data.length === 0 ? (
              <EmptyState />
            ) : (
              data.map((row, rowIndex) => {
                const selected = isRowSelected(row);
                return (
                  <tr
                    key={rowIndex}
                    className={cn(
                      "hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors",
                      selected && "bg-blue-50 dark:bg-blue-900/20 border-l-2 border-primary-500"
                    )}
                    data-testid={`table-row-${rowIndex}`}
                  >
                    {selectable && (
                      <td className="px-6 py-4">
                        <input
                          type="checkbox"
                          checked={selected}
                          onChange={() => handleRowSelect(row)}
                          className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                          data-testid={`row-checkbox-${rowIndex}`}
                          aria-label={`Select row ${rowIndex + 1}`}
                        />
                      </td>
                    )}
                    {columns.map((column) => {
                      const value = row[column.key];
                      return (
                        <td
                          key={String(column.key)}
                          className={cn(
                            "px-6 py-4 whitespace-nowrap",
                            column.align === 'center' && 'text-center',
                            column.align === 'right' && 'text-right'
                          )}
                          data-testid={`cell-${rowIndex}-${String(column.key)}`}
                        >
                          {column.render ? column.render(value, row) : (
                            <div className="text-sm text-gray-900 dark:text-white">
                              {String(value || '')}
                            </div>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {data.length > 0 && !loading && (
        <div className="bg-white dark:bg-gray-800 px-6 py-3 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-700 dark:text-gray-300">
              {selectable && selectedRows.length > 0 && (
                <span className="font-medium">
                  {selectedRows.length} of {data.length} selected
                </span>
              )}
              {(!selectable || selectedRows.length === 0) && (
                <span>
                  Showing {data.length} result{data.length !== 1 ? 's' : ''}
                </span>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
