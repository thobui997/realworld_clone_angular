# RealworldClone

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.2.0.

## Structure Foder

📦app
 ┣ 📂apis
 ┃ ┣ 📂articles
 ┃ ┃ ┣ 📜article.model.ts
 ┃ ┃ ┣ 📜articles.service.spec.ts
 ┃ ┃ ┗ 📜articles.service.ts
 ┃ ┣ 📂comment
 ┃ ┃ ┣ 📜comment.model.ts
 ┃ ┃ ┣ 📜comment.service.spec.ts
 ┃ ┃ ┗ 📜comment.service.ts
 ┃ ┣ 📂json-web-token
 ┃ ┃ ┣ 📜jwt.service.spec.ts
 ┃ ┃ ┗ 📜jwt.service.ts
 ┃ ┣ 📂profile
 ┃ ┃ ┣ 📜profile.model.ts
 ┃ ┃ ┣ 📜profile.service.spec.ts
 ┃ ┃ ┗ 📜profile.service.ts
 ┃ ┣ 📂tags
 ┃ ┃ ┣ 📜tags.service.spec.ts
 ┃ ┃ ┗ 📜tags.service.ts
 ┃ ┗ 📂user
 ┃ ┃ ┣ 📜user.model.ts
 ┃ ┃ ┣ 📜user.service.spec.ts
 ┃ ┃ ┗ 📜user.service.ts
 ┣ 📂article
 ┃ ┣ 📂article-comment
 ┃ ┃ ┣ 📜article-comment.component.css
 ┃ ┃ ┣ 📜article-comment.component.html
 ┃ ┃ ┣ 📜article-comment.component.spec.ts
 ┃ ┃ ┗ 📜article-comment.component.ts
 ┃ ┣ 📜article-routing.module.ts
 ┃ ┣ 📜article.component.css
 ┃ ┣ 📜article.component.html
 ┃ ┣ 📜article.component.spec.ts
 ┃ ┣ 📜article.component.ts
 ┃ ┗ 📜article.module.ts
 ┣ 📂auth
 ┃ ┣ 📜auth-routing.module.ts
 ┃ ┣ 📜auth.component.css
 ┃ ┣ 📜auth.component.html
 ┃ ┣ 📜auth.component.spec.ts
 ┃ ┣ 📜auth.component.ts
 ┃ ┗ 📜auth.module.ts
 ┣ 📂core
 ┃ ┣ 📂jwt-interceptor
 ┃ ┃ ┣ 📜jwt-interceptor.interceptor.spec.ts
 ┃ ┃ ┗ 📜jwt-interceptor.interceptor.ts
 ┃ ┣ 📂notifications-errors-interceptor
 ┃ ┃ ┣ 📜notifications-error.interceptor.spec.ts
 ┃ ┃ ┗ 📜notifications-error.interceptor.ts
 ┃ ┗ 📜core.module.ts
 ┣ 📂editor
 ┃ ┣ 📜editor-routing.module.ts
 ┃ ┣ 📜editor.component.css
 ┃ ┣ 📜editor.component.html
 ┃ ┣ 📜editor.component.spec.ts
 ┃ ┣ 📜editor.component.ts
 ┃ ┗ 📜editor.module.ts
 ┣ 📂home
 ┃ ┣ 📜home-routing.module.ts
 ┃ ┣ 📜home.component.css
 ┃ ┣ 📜home.component.html
 ┃ ┣ 📜home.component.spec.ts
 ┃ ┣ 📜home.component.ts
 ┃ ┗ 📜home.module.ts
 ┣ 📂page-not-found
 ┃ ┣ 📜page-not-found.component.css
 ┃ ┣ 📜page-not-found.component.html
 ┃ ┣ 📜page-not-found.component.spec.ts
 ┃ ┗ 📜page-not-found.component.ts
 ┣ 📂profile
 ┃ ┣ 📜profile-routing.module.ts
 ┃ ┣ 📜profile.component.css
 ┃ ┣ 📜profile.component.html
 ┃ ┣ 📜profile.component.spec.ts
 ┃ ┣ 📜profile.component.ts
 ┃ ┗ 📜profile.module.ts
 ┣ 📂setting
 ┃ ┣ 📜setting-routing.module.ts
 ┃ ┣ 📜setting.component.css
 ┃ ┣ 📜setting.component.html
 ┃ ┣ 📜setting.component.spec.ts
 ┃ ┣ 📜setting.component.ts
 ┃ ┗ 📜setting.module.ts
 ┣ 📂shared
 ┃ ┣ 📂article-helper
 ┃ ┃ ┣ 📂article-list
 ┃ ┃ ┃ ┣ 📜article-list.component.css
 ┃ ┃ ┃ ┣ 📜article-list.component.html
 ┃ ┃ ┃ ┣ 📜article-list.component.spec.ts
 ┃ ┃ ┃ ┗ 📜article-list.component.ts
 ┃ ┃ ┣ 📂article-meta
 ┃ ┃ ┃ ┣ 📜article-meta.component.css
 ┃ ┃ ┃ ┣ 📜article-meta.component.html
 ┃ ┃ ┃ ┣ 📜article-meta.component.spec.ts
 ┃ ┃ ┃ ┗ 📜article-meta.component.ts
 ┃ ┃ ┗ 📂article-preview
 ┃ ┃ ┃ ┣ 📜article-preview.component.css
 ┃ ┃ ┃ ┣ 📜article-preview.component.html
 ┃ ┃ ┃ ┣ 📜article-preview.component.spec.ts
 ┃ ┃ ┃ ┗ 📜article-preview.component.ts
 ┃ ┣ 📂buttons
 ┃ ┃ ┣ 📂button-favorite
 ┃ ┃ ┃ ┣ 📜button-favorite.component.css
 ┃ ┃ ┃ ┣ 📜button-favorite.component.html
 ┃ ┃ ┃ ┣ 📜button-favorite.component.spec.ts
 ┃ ┃ ┃ ┗ 📜button-favorite.component.ts
 ┃ ┃ ┗ 📂button-follow
 ┃ ┃ ┃ ┣ 📜button-follow.component.css
 ┃ ┃ ┃ ┣ 📜button-follow.component.html
 ┃ ┃ ┃ ┣ 📜button-follow.component.spec.ts
 ┃ ┃ ┃ ┗ 📜button-follow.component.ts
 ┃ ┣ 📂directives
 ┃ ┃ ┣ 📜show-authenticate.directive.spec.ts
 ┃ ┃ ┗ 📜show-authenticate.directive.ts
 ┃ ┣ 📂guard
 ┃ ┃ ┣ 📜auth.guard.spec.ts
 ┃ ┃ ┗ 📜auth.guard.ts
 ┃ ┣ 📂layouts
 ┃ ┃ ┣ 📂footer
 ┃ ┃ ┃ ┣ 📜footer.component.css
 ┃ ┃ ┃ ┣ 📜footer.component.html
 ┃ ┃ ┃ ┣ 📜footer.component.spec.ts
 ┃ ┃ ┃ ┗ 📜footer.component.ts
 ┃ ┃ ┗ 📂header
 ┃ ┃ ┃ ┣ 📜header.component.css
 ┃ ┃ ┃ ┣ 📜header.component.html
 ┃ ┃ ┃ ┣ 📜header.component.spec.ts
 ┃ ┃ ┃ ┗ 📜header.component.ts
 ┃ ┗ 📜share.module.ts
 ┣ 📜.gitignore
 ┣ 📜app-routing.module.ts
 ┣ 📜app.component.css
 ┣ 📜app.component.html
 ┣ 📜app.component.spec.ts
 ┣ 📜app.component.ts
 ┗ 📜app.module.ts

## Package Used
 - [ngx-pagination](https://www.npmjs.com/package/ngx-pagination)
 - [ngx-progressbar](https://www.npmjs.com/package/ngx-progressbar)
 - [ngx-toastr](https://www.npmjs.com/package/ngx-toastr)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
