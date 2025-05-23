import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TodoListItem from '../components/task/task';

describe('TodoListItem Component', () => {
  const mockProps = {
    id: '1',
    label: 'Test Task',
    onToggleDone: jest.fn(),
    done: false,
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders task with correct label', () => {
    render(<TodoListItem {...mockProps} />);
    expect(screen.getByText('Test Task')).toBeInTheDocument();
  });

  it('calls onToggleDone when checkbox is clicked', async () => {
    render(<TodoListItem {...mockProps} />);
    
    const checkbox = screen.getByRole('checkbox');
    await userEvent.click(checkbox);
    
    expect(mockProps.onToggleDone).toHaveBeenCalledWith('1');
  });

  it('shows correct completion state', () => {
    const { rerender } = render(<TodoListItem {...mockProps} />);
    
    const taskElement = screen.getByTestId('task-description');
    expect(taskElement).not.toHaveClass('done');
    
    rerender(<TodoListItem {...mockProps} done={true} />);
    expect(taskElement).toHaveClass('done');
  });
});