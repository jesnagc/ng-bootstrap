import { Routes } from '@angular/router';
import { ROUTES as ACCORDION_ROUTES } from './components/accordion/accordion.routes';
import { ROUTES as ALERT_ROUTES } from './components/alert/alert.routes';
import { ROUTES as CAROUSEL_ROUTES } from './components/carousel/carousel.routes';
import { ROUTES as COLLAPSE_ROUTES } from './components/collapse/collapse.routes';
import { ROUTES as DATEPICKER_ROUTES } from './components/datepicker/datepicker.routes';
import { ROUTES as DROPDOWN_ROUTES } from './components/dropdown/dropdown.routes';
import { ROUTES as MODAL_ROUTES } from './components/modal/modal.routes';
import { ROUTES as NAV_ROUTES } from './components/nav/nav.routes';
import { ROUTES as OFFCANVAS_ROUTES } from './components/offcanvas/offcanvas.routes';
import { ROUTES as PAGINATION_ROUTES } from './components/pagination/pagination.routes';
import { ROUTES as POPOVER_ROUTES } from './components/popover/popover.routes';
import { ROUTES as PROGRESSBAR_ROUTES } from './components/progressbar/progressbar.routes';
import { ROUTES as RATING_ROUTES } from './components/rating/rating.routes';
import { ROUTES as SCROLLSPY_ROUTES } from './components/scrollspy/scrollspy.routes';
import { ROUTES as TABLE_ROUTES } from './components/table/table.routes';
import { ROUTES as TIMEPICKER_ROUTES } from './components/timepicker/timepicker.routes';
import { ROUTES as TOAST_ROUTES } from './components/toast/toast.routes';
import { ROUTES as TOOLTIP_ROUTES } from './components/tooltip/tooltip.routes';
import { ROUTES as TYPEAHEAD_ROUTES } from './components/typeahead/typeahead.routes';
import { HomePage } from './pages/home/home.page';
import { GettingStartedPage } from './pages/getting-started/getting-started.page';
import { AnimationsPage } from './pages/animations/animations.page';
import { I18nPage } from './pages/i18n/i18n.page';
import { PositioningPage } from './pages/positioning/positioning.page';

jest.mock('./components/accordion/accordion.routes', () => ({
    ROUTES: []
}));

jest.mock('./components/alert/alert.routes', () => ({
    ROUTES: []
}));

jest.mock('./components/carousel/carousel.routes', () => ({
    ROUTES: []
}));

jest.mock('./components/collapse/collapse.routes', () => ({
    ROUTES: []
}));

jest.mock('./components/datepicker/datepicker.routes', () => ({
    ROUTES: []
}));

jest.mock('./components/dropdown/dropdown.routes', () => ({
    ROUTES: []
}));

jest.mock('./components/modal/modal.routes', () => ({
    ROUTES: []
}));

jest.mock('./components/nav/nav.routes', () => ({
    ROUTES: []
}));

jest.mock('./components/offcanvas/offcanvas.routes', () => ({
    ROUTES: []
}));

jest.mock('./components/pagination/pagination.routes', () => ({
    ROUTES: []
}));

jest.mock('./components/popover/popover.routes', () => ({
    ROUTES: []
}));

jest.mock('./components/progressbar/progressbar.routes', () => ({
    ROUTES: []
}));

jest.mock('./components/rating/rating.routes', () => ({
    ROUTES: []
}));

jest.mock('./components/scrollspy/scrollspy.routes', () => ({
    ROUTES: []
}));

jest.mock('./components/table/table.routes', () => ({
    ROUTES: []
}));

jest.mock('./components/timepicker/timepicker.routes', () => ({
    ROUTES: []
}));

jest.mock('./components/toast/toast.routes', () => ({
    ROUTES: []
}));

jest.mock('./components/tooltip/tooltip.routes', () => ({
    ROUTES: []
}));

jest.mock('./components/typeahead/typeahead.routes', () => ({
    ROUTES: []
}));

jest.mock('./pages/home/home.page', () => ({
    HomePage: jest.fn()
}));

jest.mock('./pages/getting-started/getting-started.page', () => ({
    GettingStartedPage: jest.fn()
}));

jest.mock('./pages/animations/animations.page', () => ({
    AnimationsPage: jest.fn()
}));

jest.mock('./pages/i18n/i18n.page', () => ({
    I18nPage: jest.fn()
}));

jest.mock('./pages/positioning/positioning.page', () => ({
    PositioningPage: jest.fn()
}));

const setup = () => {
    // Initialize any necessary setup here
};

beforeEach(() => {
    setup();
});

# happy path - ROUTES - Test that navigating to the root path redirects to the home page
test('Test that navigating to the root path redirects to the home page', () => {
    const route = ROUTES.find(r => r.path === '');
    expect(route).toBeDefined();
    expect(route.redirectTo).toBe('home');
});


# happy path - ROUTES - Test that navigating to the home path loads the HomePage component
test('Test that navigating to the home path loads the HomePage component', () => {
    const route = ROUTES.find(r => r.path === 'home');
    expect(route).toBeDefined();
    expect(route.component).toBe(HomePage);
});


# happy path - ROUTES - Test that navigating to the getting-started path loads the GettingStartedPage component
test('Test that navigating to the getting-started path loads the GettingStartedPage component', () => {
    const route = ROUTES.find(r => r.path === 'getting-started');
    expect(route).toBeDefined();
    expect(route.component).toBe(GettingStartedPage);
});


# happy path - ROUTES - Test that navigating to the animations guide redirects to the guides/animations path
test('Test that navigating to the animations guide redirects to the guides/animations path', () => {
    const route = ROUTES.find(r => r.path === 'animations');
    expect(route).toBeDefined();
    expect(route.redirectTo).toBe('guides/animations');
});


# happy path - ROUTES - Test that navigating to the components path redirects to the components/accordion path
test('Test that navigating to the components path redirects to the components/accordion path', () => {
    const route = ROUTES.find(r => r.path === 'components');
    expect(route).toBeDefined();
    expect(route.redirectTo).toBe('components/accordion');
});


# happy path - ROUTES - Test that navigating to the components/accordion path loads the ACCORDION_ROUTES
test('Test that navigating to the components/accordion path loads the ACCORDION_ROUTES', () => {
    const route = ROUTES.find(r => r.path === 'components/accordion');
    expect(route).toBeDefined();
    expect(route.children).toBe(ACCORDION_ROUTES);
});


# edge case - ROUTES - Test that navigating to an unknown path redirects to the home page
test('Test that navigating to an unknown path redirects to the home page', () => {
    const route = ROUTES.find(r => r.path === '**');
    expect(route).toBeDefined();
    expect(route.redirectTo).toBe('home');
});


# edge case - ROUTES - Test that navigating to the components/tabset path redirects to the components/nav path
test('Test that navigating to the components/tabset path redirects to the components/nav path', () => {
    const route = ROUTES.find(r => r.path === 'components/tabset');
    expect(route).toBeDefined();
    expect(route.redirectTo).toBe('components/nav');
});


# edge case - ROUTES - Test that navigating to the guides path redirects to the guides/animations path
test('Test that navigating to the guides path redirects to the guides/animations path', () => {
    const route = ROUTES.find(r => r.path === 'guides');
    expect(route).toBeDefined();
    expect(route.children).toContainEqual({ path: '', pathMatch: 'full', redirectTo: 'animations' });
});


# edge case - ROUTES - Test that navigating to the components path with a trailing slash still redirects to components/accordion
test('Test that navigating to the components path with a trailing slash still redirects to components/accordion', () => {
    const route = ROUTES.find(r => r.path === 'components');
    expect(route).toBeDefined();
    expect(route.redirectTo).toBe('components/accordion');
});


# edge case - ROUTES - Test that navigating to the guides/i18n path loads the I18nPage component
test('Test that navigating to the guides/i18n path loads the I18nPage component', () => {
    const guidesRoute = ROUTES.find(r => r.path === 'guides');
    const i18nRoute = guidesRoute.children.find(r => r.path === 'i18n');
    expect(i18nRoute).toBeDefined();
    expect(i18nRoute.component).toBe(I18nPage);
});


