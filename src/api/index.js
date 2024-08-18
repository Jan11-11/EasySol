import express from 'express';
import vacancies from './vacancies.api';
import partners from './partners.api';
import policies from './policies.api';
import slides from "./slides.api";
import services from './services.api';
import auth from "./auth.api"

const app = express();
app.use('/auth', auth);
app.use('/vacancies', vacancies);
app.use('/partners', partners);
app.use('/policies', policies);
app.use('/slides', slides);
app.use('/services', services);

export default app;
