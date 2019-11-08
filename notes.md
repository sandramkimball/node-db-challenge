- project has multiple tasks.
- task belongs to only one project.
- a project can use multiple resources.
- a resource can be used in multiple projects.

- a project requires a name; description is optional.
- resources require a name; description is optional.
- a task requires a description and project_id; notes are optional.
- projects and tasks default set to false completed.

**PROJECTS**
- unique id
- name*
- description
- completed: t/f*
    - multiple tasks
    - multiple resources

**RESOURCE**
- unique id
- name*
- description
    - multiple projects

**TASKS**
- unique id
- description*
- notes
- completed: t/f*
    - a project_id*