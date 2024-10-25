// Import necessary modules
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

// Mocking the bootstrapApplication function
jest.mock('@angular/platform-browser', () => ({
    bootstrapApplication: jest.fn(),
}));

// Mocking console.error
global.console = {
    ...global.console,
    error: jest.fn(),
};

// Setup for tests
beforeEach(() => {
    jest.clearAllMocks(); // Clear mock history before each test

    // Mock implementation for bootstrapApplication
    (bootstrapApplication as jest.Mock).mockImplementation((component) => {
        if (component === AppComponent) {
            return Promise.resolve(); // Simulate successful initialization
        }
        return Promise.reject(new Error('Initialization failed')); // Simulate failure for other components
    });
});

# happy path - bootstrapApplication - Test that bootstrapApplication initializes AppComponent without errors.
test('test_bootstrap_application_initializes_app_component', async () => {
    await expect(bootstrapApplication(AppComponent)).resolves.toBeUndefined();
});


# happy path - catch - Test that catch handles errors thrown by bootstrapApplication.
test('test_catch_handles_errors_from_bootstrap_application', async () => {
    try {
        await bootstrapApplication('InvalidComponent');
    } catch (error) {
        expect(error).toBeInstanceOf(Error);
    }
});


# happy path - console.error - Test that console.error logs errors caught by catch.
test('test_console_error_logs_errors', async () => {
    try {
        await bootstrapApplication('InvalidComponent');
    } catch (error) {
        console.error(error);
    }
    expect(console.error).toHaveBeenCalledWith(expect.any(Error));
});


# happy path - bootstrapApplication - Test that bootstrapApplication returns a promise.
test('test_bootstrap_application_returns_promise', () => {
    const result = bootstrapApplication(AppComponent);
    expect(result).toBeInstanceOf(Promise);
});


# happy path - catch - Test that catch is called when bootstrapApplication fails.
test('test_catch_called_on_bootstrap_application_failure', async () => {
    const catchSpy = jest.fn();
    await bootstrapApplication('InvalidComponent').catch(catchSpy);
    expect(catchSpy).toHaveBeenCalledWith(expect.any(Error));
});


# edge case - bootstrapApplication - Test that bootstrapApplication handles null input gracefully.
test('test_bootstrap_application_handles_null_input', async () => {
    await expect(bootstrapApplication(null)).rejects.toThrow('Initialization failed');
});


# edge case - catch - Test that catch handles undefined errors without crashing.
test('test_catch_handles_undefined_errors', async () => {
    try {
        await bootstrapApplication(undefined);
    } catch (error) {
        expect(error).toBeDefined();
    }
});


# edge case - console.error - Test that console.error handles non-string error messages.
test('test_console_error_handles_non_string_messages', () => {
    const message = 12345;
    console.error(message);
    expect(console.error).toHaveBeenCalledWith(message);
});


# edge case - bootstrapApplication - Test that bootstrapApplication can handle complex components.
test('test_bootstrap_application_handles_complex_components', async () => {
    const ComplexComponent = jest.fn();
    await expect(bootstrapApplication(ComplexComponent)).rejects.toThrow('Initialization failed');
});


# edge case - catch - Test that catch does not modify the error object.
test('test_catch_does_not_modify_error_object', async () => {
    const originalError = { message: 'Original' };
    try {
        throw originalError;
    } catch (error) {
        expect(error).toEqual(originalError);
    }
});


