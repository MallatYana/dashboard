# Dashboard Project

Demo: https://mallatyana.github.io/dashboard/dashboard

Architecture:
The architecture is based on dividing the application into two main sections: the project list and the widget list. Since all data (except for the Database Connection widget, which imitates a real-time update) is loaded at once rather than being fetched from the backend by filter, we can pass it directly to both sections using the AsyncPipe.

Filters are placed in the project section and managed via a BehaviorSubject, whose value is consumed through the AsyncPipe. Based on these values, query parameters are generated using Location to avoid unnecessary re-rendering.

Filtering is implemented by status (which can be set via a dropdown list) and by a specific project (by ID, triggered by clicking on the project).

The widget section includes the current widget list type (Total / selected status / selected project). Widgets are preloaded on the page and re-rendered based on changes in input data using OnPush.

Widget order can be changed via drag-and-drop using CDK/Drag-and-Drop. Additionally, each widget can be hidden from the list and restored using a special Addable widget list. The current widgets and their order are saved in LocalStorage, so on page reload they remain the same state.

I created some helper components such as helper-widget-single (with an event for hiding the widget), no-date-component, and a loading component, placed in the shared/helper directory.

Lazy loading is implemented for different app pages (dashboard and not-found). Widgets are placed on the dashboard page, so they are not lazily loaded.

The project contains a pie chart with task status distribution (ngx-Echarts). ngx-bootsrap was used for the UI. Mobile responsiveness is provided, but tablet responsiveness is not.

I also decided not to use Signals because I have limited experience with them (only one month, as stated in my resume), and using them would slow down development.

AI was used to quickly find small solutions, for example:
- Figuring out why DatePipe didn’t work before I cleaned up the data.
- Suggesting a better way to build the QueryParamsObject.
- On a more trivial note, when I was too lazy to Google, it suggested how to write similar Bootstrap-style bindings in [ngClass] (e.g., [ngClass]="'col-' + customColumns").

The project is ready and can be tested, but I made a small TODO list for improvements: small layout fixes (especially for mobile layout), status types refactor (decided to switch to strings), and maybe finishing the status bar graph (currently it shows a “No data” block on purpose).
