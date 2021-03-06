import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ClarityModule } from '@clr/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SecurityServiceMock } from '../../tests/api/security.service.mock';
import { AboutServiceMock } from '../../tests/api/about.service.mock';
import { AppServiceMock } from '../../tests/api/app.service.mock';
import { NotificationServiceMock } from '../../tests/service/notification.service.mock';
import { ContextService } from '../../shared/service/context.service';
import { FeatureDisabledComponent } from './feature-disabled.component';

describe('security/component/feature-disabled.component.ts', () => {
  let component: FeatureDisabledComponent;
  let fixture: ComponentFixture<FeatureDisabledComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FeatureDisabledComponent,
      ],
      imports: [
        FormsModule,
        ClarityModule,
        RouterTestingModule.withRoutes([]),
        BrowserAnimationsModule,
      ],
      providers: [
        SecurityServiceMock.provider,
        AboutServiceMock.provider,
        AppServiceMock.provider,
        NotificationServiceMock.provider,
        ContextService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureDisabledComponent);
    component = fixture.componentInstance;
  });

  it('should be created', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
