import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbHighlight } from './highlight'; // Adjust the path as necessary
import { toString, removeAccents, regExpEscape } from '../util/util';

jest.mock('../util/util', () => ({
    toString: jest.fn(),
    removeAccents: jest.fn(),
    regExpEscape: jest.fn(),
}));

describe('NgbHighlight', () => {
    let component: NgbHighlight;
    let fixture: ComponentFixture<NgbHighlight>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [NgbHighlight],
        }).compileComponents();

        fixture = TestBed.createComponent(NgbHighlight);
        component = fixture.componentInstance;

        // Mock implementations
        (toString as jest.Mock).mockImplementation((input) => {
            return input ? String(input) : '';
        });
        
        (removeAccents as jest.Mock).mockImplementation((input) => {
            return input ? input.normalize('NFD').replace(/[\u0300-\u036f]/g, '') : '';
        });

        (regExpEscape as jest.Mock).mockImplementation((input) => {
            return input.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // Escape regex special characters
        });

        // Mock console.warn
        console.warn = jest.fn();
        
        // Mock String.prototype.normalize if not available
        if (!String.prototype.normalize) {
            String.prototype.normalize = jest.fn().mockReturnValue('mocked string');
        }
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    // Add your tests here
});

# happy path - ngOnChanges - Test that ngOnChanges splits the result correctly with a single term.
test('Test that ngOnChanges splits the result correctly with a single term.', () => {
    component.result = 'Alaska';
    component.term = 'as';
    component.accentSensitive = true;

    component.ngOnChanges({});

    expect(component.parts).toEqual(['Al', 'as', 'ka']);
});


# happy path - ngOnChanges - Test that ngOnChanges splits the result correctly with multiple terms.
test('Test that ngOnChanges splits the result correctly with multiple terms.', () => {
    component.result = 'Alaska';
    component.term = ['as', 'ka'];
    component.accentSensitive = true;

    component.ngOnChanges({});

    expect(component.parts).toEqual(['Al', 'as', 'ka']);
});


# happy path - ngOnChanges - Test that ngOnChanges handles empty result gracefully.
test('Test that ngOnChanges handles empty result gracefully.', () => {
    component.result = '';
    component.term = 'as';
    component.accentSensitive = true;

    component.ngOnChanges({});

    expect(component.parts).toEqual(['']);
});


# happy path - ngOnChanges - Test that ngOnChanges handles empty term gracefully.
test('Test that ngOnChanges handles empty term gracefully.', () => {
    component.result = 'Alaska';
    component.term = '';
    component.accentSensitive = true;

    component.ngOnChanges({});

    expect(component.parts).toEqual(['Alaska']);
});


# happy path - ngOnChanges - Test that ngOnChanges handles accent sensitive term correctly.
test('Test that ngOnChanges handles accent sensitive term correctly.', () => {
    component.result = 'Alaska';
    component.term = 'ás';
    component.accentSensitive = false;

    component.ngOnChanges({});

    expect(component.parts).toEqual(['Al', 'as', 'ka']);
});


# edge case - ngOnChanges - Test that ngOnChanges handles undefined result input.
test('Test that ngOnChanges handles undefined result input.', () => {
    component.result = null;
    component.term = 'as';
    component.accentSensitive = true;

    component.ngOnChanges({});

    expect(component.parts).toEqual(['']);
});


# edge case - ngOnChanges - Test that ngOnChanges handles undefined term input.
test('Test that ngOnChanges handles undefined term input.', () => {
    component.result = 'Alaska';
    component.term = null;
    component.accentSensitive = true;

    component.ngOnChanges({});

    expect(component.parts).toEqual(['Alaska']);
});


# edge case - ngOnChanges - Test that ngOnChanges handles non-string term input.
test('Test that ngOnChanges handles non-string term input.', () => {
    component.result = 'Alaska';
    component.term = 123;
    component.accentSensitive = true;

    component.ngOnChanges({});

    expect(component.parts).toEqual(['Alaska']);
});


# edge case - ngOnChanges - Test that ngOnChanges handles non-string result input.
test('Test that ngOnChanges handles non-string result input.', () => {
    component.result = 123;
    component.term = 'as';
    component.accentSensitive = true;

    component.ngOnChanges({});

    expect(component.parts).toEqual(['123']);
});


# edge case - ngOnChanges - Test that ngOnChanges handles special characters in term correctly.
test('Test that ngOnChanges handles special characters in term correctly.', () => {
    component.result = 'Alaska';
    component.term = '$a';
    component.accentSensitive = true;

    component.ngOnChanges({});

    expect(component.parts).toEqual(['Alaska']);
});


