export interface Column<T> {
  key: keyof T;
  header: string;
  sortable?: boolean;
  render?: (value: any, row: T) => React.ReactNode;
  width?: string;
  align?: 'left' | 'center' | 'right';
}

export interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  loading?: boolean;
  selectable?: boolean;
  sortable?: boolean;
  onRowSelect?: (selectedRows: T[]) => void;
  onSort?: (key: keyof T, direction: 'asc' | 'desc') => void;
  emptyMessage?: string;
  className?: string;
}

export type SortDirection = 'asc' | 'desc';

export interface SortState<T> {
  key: keyof T | null;
  direction: SortDirection;
}
