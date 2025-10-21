import { Router, Request, Response } from 'express';

const router = Router();

// Get AI task suggestions (mock)
router.get('/suggestions', async (req: Request, res: Response) => {
  try {
    // Mock AI-generated tasks
    const tasks = [
      {
        id: 'task_1',
        title: 'Review Q4 Report',
        description: 'Sarah mentioned in email that Q4 report needs review by EOD',
        priority: 'high',
        dueDate: new Date(Date.now() + 3600000 * 8).toISOString(),
        source: 'email',
        aiConfidence: 0.95,
        completed: false
      },
      {
        id: 'task_2',
        title: 'Prepare for team meeting',
        description: 'Team sync scheduled for tomorrow at 2 PM',
        priority: 'medium',
        dueDate: new Date(Date.now() + 86400000).toISOString(),
        source: 'calendar',
        aiConfidence: 0.87,
        completed: false
      },
      {
        id: 'task_3',
        title: 'Reply to client proposal',
        description: 'Client waiting for response on new project proposal',
        priority: 'high',
        dueDate: new Date(Date.now() + 7200000).toISOString(),
        source: 'email',
        aiConfidence: 0.92,
        completed: false
      },
      {
        id: 'task_4',
        title: 'Review expense reports',
        description: 'Monthly expense reports need approval',
        priority: 'low',
        dueDate: new Date(Date.now() + 172800000).toISOString(),
        source: 'email',
        aiConfidence: 0.78,
        completed: false
      },
      {
        id: 'task_5',
        title: 'Schedule quarterly review',
        description: 'Q4 performance reviews need to be scheduled',
        priority: 'medium',
        dueDate: new Date(Date.now() + 259200000).toISOString(),
        source: 'calendar',
        aiConfidence: 0.85,
        completed: false
      }
    ];

    res.json({
      success: true,
      data: {
        tasks,
        summary: {
          totalTasks: tasks.length,
          highPriority: tasks.filter(t => t.priority === 'high').length,
          mediumPriority: tasks.filter(t => t.priority === 'medium').length,
          lowPriority: tasks.filter(t => t.priority === 'low').length,
          estimatedTotalTime: tasks.length * 30 // 30 min per task average
        }
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: {
        code: 'SERVER_ERROR',
        message: 'Failed to fetch task suggestions'
      }
    });
  }
});

// Get all tasks
router.get('/list', async (req: Request, res: Response) => {
  try {
    const { status = 'pending', priority = 'all' } = req.query;

    // Mock tasks list
    let tasks = [
      {
        id: 'task_1',
        title: 'Review Q4 Report',
        priority: 'high',
        dueDate: new Date(Date.now() + 3600000 * 8).toISOString(),
        status: 'pending',
        createdAt: new Date(Date.now() - 86400000).toISOString()
      },
      {
        id: 'task_2',
        title: 'Prepare for team meeting',
        priority: 'medium',
        dueDate: new Date(Date.now() + 86400000).toISOString(),
        status: 'pending',
        createdAt: new Date(Date.now() - 43200000).toISOString()
      }
    ];

    // Filter by status
    if (status !== 'all') {
      tasks = tasks.filter(t => t.status === status);
    }

    // Filter by priority
    if (priority !== 'all') {
      tasks = tasks.filter(t => t.priority === priority);
    }

    res.json({
      success: true,
      data: {
        tasks,
        pagination: {
          currentPage: 1,
          totalPages: 1,
          totalItems: tasks.length
        }
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: {
        code: 'SERVER_ERROR',
        message: 'Failed to fetch tasks'
      }
    });
  }
});

// Update task
router.patch('/:taskId', async (req: Request, res: Response) => {
  try {
    const { taskId } = req.params;
    const { status, completed } = req.body;

    res.json({
      success: true,
      data: {
        taskId,
        status: status || 'completed',
        completed: completed !== undefined ? completed : true,
        completedAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: {
        code: 'SERVER_ERROR',
        message: 'Failed to update task'
      }
    });
  }
});

export default router;
