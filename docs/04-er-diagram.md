# Entity Relationship Diagram

## Overview

The following Entity Relationship Diagram (ERD) represents the database design of WorkPilot MVP.

The architecture follows a multi-tenant approach where users belong to companies through memberships, and projects, tasks, and work sessions are scoped within each company.

## ER Diagram

![WorkPilot ER Diagram](./assets/er-diagram.png)

## Design Principles

- Multi-tenant architecture
- Normalized database design (3NF)
- Many-to-many relationships resolved using junction tables
- One task is assigned to exactly one project member
- Companies are isolated from each other
- Productivity tracking is based on work sessions
