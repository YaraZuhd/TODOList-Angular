# TodoAngularPro

A feature-rich **TODO List** web application built with Angular 12, PrimeNG, and Bootstrap. Manage your tasks efficiently with support for priorities, tags, and real-time status tracking — all persisted in the browser's local storage.

---

## Features

- **Add Tasks** — Create tasks with a name, priority level, and tag
- **View Task List** — Display all tasks in a sortable, reorderable PrimeNG table
- **Complete Tasks** — Mark tasks as done/undone with a checkbox; completion timestamp is recorded automatically
- **Edit Tasks** — Update existing task details via a dedicated edit route
- **Delete Tasks** — Remove tasks with a confirmation dialog to prevent accidental deletions
- **Persistent Storage** — All tasks are saved to browser local storage using `ngx-webstorage-service`
- **Responsive Navigation** — Mobile-friendly navbar with Home, About, and Contact pages

---

## Tech Stack

| Category        | Technology                              |
|----------------|-----------------------------------------|
| Framework       | Angular 12                              |
| UI Components   | PrimeNG 12, Angular Material 12         |
| CSS Framework   | Bootstrap 5, MDB UI Kit                 |
| Icons           | Font Awesome 4, PrimeIcons             |
| Storage         | ngx-webstorage-service (localStorage)  |
| Language        | TypeScript 4.3                          |

---

## Project Structure

```
src/app/
├── head-of-page/       # Navbar / page header component
├── display-list/       # Home page — task table with sort, reorder, and CRUD actions
├── add-task/           # Form to add a new task
├── update-task/        # Form to edit an existing task (route: /update-task/:taskIndex)
├── about/              # About page
├── contact/            # Contact form page
├── local-storge.service.ts  # Local storage service & ListToDo interface
└── app-routing.module.ts    # Application routes
```

### Task Data Model (`ListToDo`)

```typescript
interface ListToDo {
  id: number;
  nameOfTask: string;
  checked: boolean;
  createdAt: Date;
  completedAt: Date;
  priority: number;
  tag: string;
}
```

---

## Routes

| Path                      | Component        | Description                    |
|---------------------------|------------------|--------------------------------|
| `/`                       | Redirects to `/home` |                            |
| `/home`                   | DisplayListComponent | View all tasks             |
| `/add-task`               | AddTaskComponent | Add a new task                 |
| `/update-task/:taskIndex` | UpdateTaskComponent | Edit an existing task       |
| `/about`                  | AboutComponent   | About page                     |
| `/contact`                | ContactComponent | Contact form                   |
| `/**`                     | Redirects to `/home` |                            |

---

## Prerequisites

- [Node.js](https://nodejs.org/) v14 or higher
- [Angular CLI](https://angular.io/cli) v12

```bash
npm install -g @angular/cli@12
```

---

## Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
cd TODOList-Angular
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
ng serve
```

Navigate to `http://localhost:4200/`. The app reloads automatically on file changes.

---

## Build

```bash
ng build
```

Build artifacts are stored in the `dist/` directory. For a production build:

```bash
ng build --configuration production
```

---

## Running Tests

### Unit tests

```bash
ng test
```

Executes unit tests via [Karma](https://karma-runner.github.io).

### End-to-end tests

```bash
ng e2e
```

Requires an e2e testing package (e.g., Cypress or Protractor) to be installed first.

---

## Code Scaffolding

```bash
ng generate component component-name
ng generate directive|pipe|service|class|guard|interface|enum|module
```

---

## Further Help

- [Angular CLI Overview and Command Reference](https://angular.io/cli)
- [PrimeNG Documentation](https://primefaces.org/primeng/)
- [Bootstrap 5 Documentation](https://getbootstrap.com/docs/5.0/)
