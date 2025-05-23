import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TasksFilter from '../components/tasks-filter/taskFilter';

describe('TasksFilter Component', () => {
  const mockFilterProps = {
    filter: 'all',
    onFilterChange: jest.fn(),
    onCleared: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders all filter buttons', () => {
    render(<TasksFilter {...mockFilterProps} />);
    
    expect(screen.getByRole('button', { name: 'All' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Active' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Completed' })).toBeInTheDocument();
  });

  it('applies selected class to active filter button', () => {
    render(<TasksFilter {...mockFilterProps} filter="active" />);
    
    const activeButton = screen.getByRole('button', { name: 'Active' });
    
    expect(activeButton).toHaveClass('selected');
  });

  it('calls onFilterChange when filter buttons are clicked', async () => {
    render(<TasksFilter {...mockFilterProps} />);
    
    const activeButton = screen.getByRole('button', { name: 'Active' });
    await userEvent.click(activeButton);
    
    expect(mockFilterProps.onFilterChange).toHaveBeenCalledWith('active');
  });

  it('calls onCleared when Clear completed is clicked', async () => {
    render(<TasksFilter {...mockFilterProps} />);
    
    const clearButton = screen.getByRole('button', { name: 'Clear completed' });
    await userEvent.click(clearButton);
    
    expect(mockFilterProps.onCleared).toHaveBeenCalledTimes(1);
  });
});