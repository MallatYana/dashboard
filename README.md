# Dashboard Project

Demo: https://mallatyana.github.io/dashboard/dashboard

Architecture:  
The architecture is based on dividing the application into two main sections: the project list and the widget list. Since all data is loaded at once rather than being fetched from the backend by ID, we can pass it directly to both sections.  
Filters are managed via a BehaviorSubject, whose value is used in both sections through the AsyncPipe. Based on these values, query parameters are generated using Location to avoid unnecessary re-rendering.  
Filtering is implemented by status (dropdown list) and by a specific project (by ID).
The entire widget section is universal — it does not change when the selected project changes, only in response to user actions. It is also possible to filter projects by status and view statistics for all projects with the selected status.

AI was used for quickly finding small solutions, for example:
- figuring out why DatePipe didn’t work before I “cleaned up” the data.
- suggesting a better way to build the QueryParamsObject.
- and, on a more trivial note, when I was too lazy to Google, it suggested how to write similar Bootstrap-style bindings in [ngClass] (e.g. [ngClass]="'col-' + customColumns").


The project is ready and can be checked, but I made small TODO improvements list: small layout fixes (especially in mobile layout), status types refactor (decided to swap it to strings), maybe finish statuses bar graph (now it is No data block for purpose)
