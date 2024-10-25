import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { VersionPickerComponent } from './shared/version-picker.component';
import { ThemePickerComponent } from './shared/theme-picker.component';
import { AsyncPipe } from '@angular/common';
import { NPM_VIEWS } from './tokens';
import { COMPONENTS } from './components';

// Mocking the components and dependencies
jest.mock('./shared/version-picker.component', () => ({
    VersionPickerComponent: jest.fn().mockImplementation(() => ({})),
}));

jest.mock('./shared/theme-picker.component', () => ({
    ThemePickerComponent: jest.fn().mockImplementation(() => ({})),
}));

jest.mock('./tokens', () => ({
    NPM_VIEWS: jest.fn().mockReturnValue(42), // Mocking the value returned
}));

jest.mock('./components', () => ({
    COMPONENTS: jest.fn().mockReturnValue(['Component1', 'Component2']), // Mocking COMPONENTS
}));

describe('AppComponent', () => {
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [RouterLink, RouterLinkActive, RouterOutlet, VersionPickerComponent, ThemePickerComponent, AsyncPipe],
            declarations: [AppComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
    });

    // Add any additional setup or configurations here
});

# happy path - AppComponent - Test that components array is initialized with COMPONENTS
test('test_components_initialization', () => {
    expect(component.components).toEqual(['Component1', 'Component2']);
});


# happy path - AppComponent - Test that downloadCount is initialized with NPM_VIEWS
test('test_download_count_initialization', () => {
    expect(component.downloadCount).toBe(42);
});


# happy path - AppComponent - Test that navbarCollapsed is initialized to true
test('test_navbar_collapsed_initialization', () => {
    expect(component.navbarCollapsed).toBe(true);
});


# edge case - AppComponent - Test that AppComponent handles undefined COMPONENTS
test('test_undefined_components', () => {
    jest.mock('./components', () => ({
        COMPONENTS: null,
    }));
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    expect(component.components).toBeNull();
});


# edge case - AppComponent - Test that AppComponent handles undefined NPM_VIEWS
test('test_undefined_download_count', () => {
    jest.mock('./tokens', () => ({
        NPM_VIEWS: null,
    }));
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    expect(component.downloadCount).toBeNull();
});


# edge case - AppComponent - Test that changing navbarCollapsed to false updates the state
test('test_navbar_collapsed_toggle', () => {
    component.navbarCollapsed = false;
    expect(component.navbarCollapsed).toBe(false);
});


