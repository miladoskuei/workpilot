# Workflows

This document describes the primary business workflows of WorkPilot.

The purpose of these workflows is to explain how users interact with the platform and how information flows through the system.

---

# 1. Company Onboarding Workflow

## Goal

Allow a new user to create a company or join an existing one.

## Workflow

1. User registers an account.
2. User verifies their email address.
3. User logs into the platform.
4. User chooses one of the following options:
   - Create a new company
   - Join an existing company
5. If the user creates a company:
   - A new company is created.
   - The user becomes the Company Owner.
6. If the user joins an existing company:
   - The user must receive an invitation.
   - After accepting the invitation, the user becomes a member of the company.

Result:

- Company created
- Owner assigned
- Members can join the company

---

# 2. Member Invitation Workflow

## Goal

Allow company owners to invite employees into the organization.

## Workflow

1. Owner opens the Members page.
2. Owner enters the employee email.
3. Owner selects a role.
4. Invitation email is sent.
5. Employee opens the invitation link.
6. Employee signs in or creates an account.
7. Employee accepts the invitation.
8. Employee becomes a company member.

Result:

- Company members are successfully added.

---

# 3. Project Creation Workflow

## Goal

Create a project and assign a responsible manager.

## Workflow

1. Owner creates a new project.
2. Project information is entered.
3. Owner assigns a Project Manager.
4. Project is saved.
5. Assigned manager gains access to the project.

Result:

- Project created.
- Project manager assigned.

---

# 4. Project Team Management Workflow

## Goal

Allow project managers to build their project team.

## Workflow

1. Manager opens the project.
2. Manager selects company members.
3. Selected members are assigned to the project.
4. Employees gain access to project tasks.

Result:

- Project team is created.

---

# 5. Task Assignment Workflow

## Goal

Assign work to employees.

## Workflow

1. Manager creates a task.
2. Task details are entered.
3. Due date, priority and labels are selected.
4. Task is assigned to an employee.
5. Employee receives a notification.

Result:

- Employee receives a new task.

---

# 6. Task Execution Workflow

## Goal

Allow employees to perform assigned work while tracking their working time.

## Workflow

1. Employee opens an assigned task.
2. Employee starts the work timer.
3. Work session start time is recorded.
4. Employee performs the task.
5. Employee may pause and resume the timer.
6. Employee stops the timer after finishing.
7. End time and total duration are calculated.
8. Employee submits a work report.

Result:

- Work session is stored.
- Work report is submitted for review.

---

# 7. Work Review Workflow

## Goal

Validate completed work before it contributes to analytics.

## Workflow

1. Manager opens pending work reviews.
2. Manager reads the submitted work report.
3. Manager reviews the recorded working time.
4. Manager decides to:
   - Accept
   - Reject
5. Optional review notes are added.
6. Employee is notified of the decision.

Result:

Accepted work contributes to productivity metrics.

Rejected work requires further action from the employee.

---

# 8. Project Monitoring Workflow

## Goal

Allow company owners to monitor overall project performance.

## Workflow

1. Owner opens the dashboard.
2. Dashboard collects data from:
   - Projects
   - Tasks
   - Work Sessions
   - Reviews
3. KPIs are calculated.
4. Analytics and charts are displayed.

The owner can monitor:

- Active projects
- Delayed projects
- Project progress
- Employee productivity
- Total working hours
- Team performance
- Recent activities

Result:

Owners gain a complete overview of company performance.

---

# Overall Business Flow

User Registration

↓

Create Company / Join Company

↓

Company Members

↓

Create Projects

↓

Assign Project Managers

↓

Build Project Teams

↓

Assign Tasks

↓

Employees Perform Work

↓

Track Working Time

↓

Submit Work Report

↓

Manager Reviews Work

↓

Accepted Work Updates Analytics

↓

Owner Monitors Company Performance
