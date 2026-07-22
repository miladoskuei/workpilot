# Database Design

## Overview

The WorkPilot database is designed using a normalized relational model following a multi-tenant architecture.

Each company owns its own projects, members, tasks, work sessions and analytics. All business data is isolated by company membership.

The database is designed to be scalable, maintainable and easy to extend in future releases.

---

# Design Principles

- Multi-tenant architecture
- Third Normal Form (3NF)
- No duplicated business data
- Clear separation of Company Roles and Project Roles
- Foreign keys enforce data integrity
- Optimized for reporting and analytics

---

# Users

## Purpose

Stores authentication information for every registered user.

A user may belong to multiple companies.

### Fields

| Field    | Type    | Description          |
| -------- | ------- | -------------------- |
| id       | bigint  | Primary Key          |
| name     | varchar | Full name            |
| email    | varchar | Unique email address |
| password | varchar | Hashed password      |

### Relationships

- Has many Company Members

---

# Companies

## Purpose

Represents an organization using WorkPilot.

Each company owns projects, members and invitations.

### Fields

| Field | Type    |
| ----- | ------- |
| id    | bigint  |
| name  | varchar |

### Relationships

- Has many Company Members
- Has many Projects
- Has many Invitations

---

# Company Members

## Purpose

Represents the membership of a user inside a company.

This table also stores the company-level permission of the member.

### Company Roles

- Owner
- Member

### Fields

| Field      | Type    |
| ---------- | ------- |
| id         | bigint  |
| user_id    | FK      |
| company_id | FK      |
| role       | varchar |

### Relationships

- Belongs to User
- Belongs to Company
- Has many Project Memberships

---

# Invitations

## Purpose

Stores pending invitations sent by company owners.

### Fields

| Field      | Type      |
| ---------- | --------- |
| id         | bigint    |
| company_id | FK        |
| email      | varchar   |
| role       | varchar   |
| token      | varchar   |
| status     | varchar   |
| expires_at | timestamp |

### Relationships

- Belongs to Company

---

# Projects

## Purpose

Represents a project inside a company.

Projects contain members, tasks and work activity.

### Fields

| Field      | Type    |
| ---------- | ------- |
| id         | bigint  |
| company_id | FK      |
| name       | varchar |
| status     | varchar |

### Relationships

- Belongs to Company
- Has many Project Members
- Has many Tasks

---

# Project Members

## Purpose

Represents the membership of a company member inside a project.

Project roles are independent from company roles.

### Project Roles

- Manager
- Member

### Fields

| Field             | Type    |
| ----------------- | ------- |
| id                | bigint  |
| project_id        | FK      |
| company_member_id | FK      |
| role              | varchar |

### Relationships

- Belongs to Project
- Belongs to Company Member
- Has many Tasks
- Has many Work Sessions

---

# Tasks

## Purpose

Represents work assigned to a project member.

Each task belongs to exactly one project and one assignee.

### Fields

| Field             | Type    |
| ----------------- | ------- |
| id                | bigint  |
| project_id        | FK      |
| project_member_id | FK      |
| title             | varchar |
| status            | varchar |
| priority          | varchar |

### Relationships

- Belongs to Project
- Belongs to Project Member
- Has many Work Sessions

---

# Work Sessions

## Purpose

Tracks the actual time spent working on a task.

Each work session contains timing information and a work report.

### Fields

| Field             | Type      |
| ----------------- | --------- |
| id                | bigint    |
| task_id           | FK        |
| project_member_id | FK        |
| start_time        | timestamp |
| end_time          | timestamp |
| duration          | integer   |
| report            | text      |

### Relationships

- Belongs to Task
- Belongs to Project Member
- Has one Work Review

---

# Work Reviews

## Purpose

Represents the manager's review of a submitted work session.

Accepted reviews contribute to company analytics.

### Fields

| Field                      | Type    |
| -------------------------- | ------- |
| id                         | bigint  |
| work_session_id            | FK      |
| reviewer_project_member_id | FK      |
| status                     | varchar |
| note                       | text    |

### Relationships

- Belongs to Work Session
- Belongs to Reviewer

---

# Database Constraints

## Company Members

Each company must have exactly one Owner.

---

## Project Members

Each project may contain multiple members but only one Manager.

---

## Tasks

Each task has exactly one assignee.

---

## Work Sessions

Each work session belongs to exactly one task.

---

# Future Improvements

The following enhancements are planned for future versions:

- Soft Delete
- Audit Logs
- File Attachments
- Comments
- Tags
- Notifications
- Activity Timeline
- Organization Settings
- Custom Roles & Permissions
