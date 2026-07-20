import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { Apps } from './pages/apps/apps';
import { Projects } from './pages/projects/projects';
import { Contact } from './pages/contact/contact';
import { ProjectTaskforge } from './pages/project-taskforge/project-taskforge';
import { ProjectWorkstation } from './pages/project-workstation/project-workstation';

export const routes: Routes = [
    { path: '', component: Home, title: 'Chrispyware' },
    { path: 'apps', component: Apps, title: 'Apps | Chrispyware' },
    { path: 'projects', component: Projects, title: 'Projects | Chrispyware' },
    { path: 'projects/taskforge', component: ProjectTaskforge, title: 'TaskForge | Chrispyware' },
    { path: 'projects/workstation', component: ProjectWorkstation , title: 'Workstation | Chrispyware' },
    { path: 'contact', component: Contact, title: 'Contact | Chrispyware' },
    { path: '**', redirectTo: '' }
];
