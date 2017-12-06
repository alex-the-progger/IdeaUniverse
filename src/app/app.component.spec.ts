import { async, TestBed } from '@angular/core/testing';
import { IonicModule, Platform, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MyApp } from './app.component';
import { PlatformMock, StatusBarMock, SplashScreenMock } from '../../test-config/mocks-ionic';
import { SignInPage } from '../pages/sign-in/sign-in';
import { SignedInPage } from '../pages/signed-in/signed-in';
import { AngularFireAuth } from 'angularfire2/auth';

describe('MyApp Component', () => {
	let fixture;
	let component;
	let signInPage;
		
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [MyApp, SignInPage],
			imports: [
				AngularFireAuth,
				IonicModule.forRoot(MyApp)
			],
			providers: [
				{ provide: AngularFireAuth, useClass: AngularFireAuth },
				{ provide: StatusBar, useClass: StatusBarMock },
				{ provide: SplashScreen, useClass: SplashScreenMock },
				{ provide: Platform, useClass: PlatformMock }
			]
		})
	}));
	beforeEach(() => {
		fixture = TestBed.createComponent(MyApp);
		signInPage = TestBed.createComponent(SignInPage);
		component = fixture.componentInstance;
	});
	
	it('should be created', () => {
		expect(component instanceof MyApp).toBe(true);
	});
	
	it('isValid should be true when form is valid', (() => {
		signInPage.controls['userName'].setValue('test@test.test');
		expect(signInPage.formValid).ToBeTruthy();
	}))
});

/*describe('SignInPage', () => {
	let component;
	let fixture;
    
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SignInPage],
            imports: [
                IonicModule.forRoot(SignInPage)
            ],
            providers: [
                NavController,
                { provide: Platform, useClass: PlatformMock},
                { provide: StatusBar, useClass: StatusBarMock },
                { provide: SplashScreen, useClass: SplashScreenMock },
            ]
        });
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(SignInPage);
        component = fixture.componentInstance;
    });
    /*it('should be created', () => {
       expect(component instanceof SignInPage).toBe(true);
    });*/
	/*it('should have two pages', () => {
		expect(component.pages.length).toBe(2);
	});*/
	
	/*it('isValid should be true when form is valid', (() => {
		component
	});
});*/