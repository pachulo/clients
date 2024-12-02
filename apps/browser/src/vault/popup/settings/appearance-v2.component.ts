import { CommonModule } from "@angular/common";
import { Component, DestroyRef, inject, OnInit } from "@angular/core";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { FormBuilder, ReactiveFormsModule } from "@angular/forms";
import { firstValueFrom } from "rxjs";

import { JslibModule } from "@bitwarden/angular/jslib.module";
import { BadgeSettingsServiceAbstraction } from "@bitwarden/common/autofill/services/badge-settings.service";
import { DomainSettingsService } from "@bitwarden/common/autofill/services/domain-settings.service";
import { AnimationControlService } from "@bitwarden/common/platform/abstractions/animation-control.service";
import { I18nService } from "@bitwarden/common/platform/abstractions/i18n.service";
import { MessagingService } from "@bitwarden/common/platform/abstractions/messaging.service";
import { ThemeType } from "@bitwarden/common/platform/enums";
import { ThemeStateService } from "@bitwarden/common/platform/theming/theme-state.service";
import { BadgeModule, CheckboxModule, Option } from "@bitwarden/components";

import { CardComponent } from "../../../../../../libs/components/src/card/card.component";
import { FormFieldModule } from "../../../../../../libs/components/src/form-field/form-field.module";
import { SelectModule } from "../../../../../../libs/components/src/select/select.module";
import { PopOutComponent } from "../../../platform/popup/components/pop-out.component";
import { PopupCompactModeService } from "../../../platform/popup/layout/popup-compact-mode.service";
import { PopupHeaderComponent } from "../../../platform/popup/layout/popup-header.component";
import { PopupPageComponent } from "../../../platform/popup/layout/popup-page.component";
import {
  PopupWidthOption,
  PopupWidthService,
} from "../../../platform/popup/layout/popup-width.service";

@Component({
  standalone: true,
  templateUrl: "./appearance-v2.component.html",
  imports: [
    CommonModule,
    JslibModule,
    PopupPageComponent,
    PopupHeaderComponent,
    PopOutComponent,
    CardComponent,
    FormFieldModule,
    SelectModule,
    ReactiveFormsModule,
    CheckboxModule,
    BadgeModule,
  ],
})
export class AppearanceV2Component implements OnInit {
  private compactModeService = inject(PopupCompactModeService);
  private popupWidthService = inject(PopupWidthService);
  private i18nService = inject(I18nService);

  appearanceForm = this.formBuilder.group({
    enableFavicon: false,
    enableBadgeCounter: true,
    theme: ThemeType.System,
    enableAnimations: true,
    enableCompactMode: false,
    width: "default" as PopupWidthOption,
  });

  /** To avoid flashes of inaccurate values, only show the form after the entire form is populated. */
  formLoading = true;

  /** Available theme options */
  themeOptions: { name: string; value: ThemeType }[];

  /** Available width options */
  protected readonly widthOptions: Option<PopupWidthOption>[] = [
    { label: this.i18nService.t("default"), value: "default" },
    { label: this.i18nService.t("wide"), value: "wide" },
    { label: this.i18nService.t("extraWide"), value: "extra-wide" },
  ];

  constructor(
    private messagingService: MessagingService,
    private domainSettingsService: DomainSettingsService,
    private badgeSettingsService: BadgeSettingsServiceAbstraction,
    private themeStateService: ThemeStateService,
    private formBuilder: FormBuilder,
    private destroyRef: DestroyRef,
    private animationControlService: AnimationControlService,
    i18nService: I18nService,
  ) {
    this.themeOptions = [
      { name: i18nService.t("systemDefault"), value: ThemeType.System },
      { name: i18nService.t("light"), value: ThemeType.Light },
      { name: i18nService.t("dark"), value: ThemeType.Dark },
    ];
  }

  async ngOnInit() {
    const enableFavicon = await firstValueFrom(this.domainSettingsService.showFavicons$);
    const enableBadgeCounter = await firstValueFrom(this.badgeSettingsService.enableBadgeCounter$);
    const theme = await firstValueFrom(this.themeStateService.selectedTheme$);
    const enableAnimations = await firstValueFrom(
      this.animationControlService.enableRoutingAnimation$,
    );
    const enableCompactMode = await firstValueFrom(this.compactModeService.enabled$);
    const width = await firstValueFrom(this.popupWidthService.width$);

    // Set initial values for the form
    this.appearanceForm.setValue({
      enableFavicon,
      enableBadgeCounter,
      theme,
      enableAnimations,
      enableCompactMode,
      width,
    });

    this.formLoading = false;

    this.appearanceForm.controls.theme.valueChanges
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((newTheme) => {
        void this.saveTheme(newTheme);
      });

    this.appearanceForm.controls.enableFavicon.valueChanges
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((enableFavicon) => {
        void this.updateFavicon(enableFavicon);
      });

    this.appearanceForm.controls.enableBadgeCounter.valueChanges
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((enableBadgeCounter) => {
        void this.updateBadgeCounter(enableBadgeCounter);
      });

    this.appearanceForm.controls.enableAnimations.valueChanges
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((enableBadgeCounter) => {
        void this.updateAnimations(enableBadgeCounter);
      });

    this.appearanceForm.controls.enableCompactMode.valueChanges
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((enableCompactMode) => {
        void this.updateCompactMode(enableCompactMode);
      });

    this.appearanceForm.controls.width.valueChanges
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((width) => {
        void this.updateWidth(width);
      });
  }

  async updateFavicon(enableFavicon: boolean) {
    await this.domainSettingsService.setShowFavicons(enableFavicon);
  }

  async updateBadgeCounter(enableBadgeCounter: boolean) {
    await this.badgeSettingsService.setEnableBadgeCounter(enableBadgeCounter);
    this.messagingService.send("bgUpdateContextMenu");
  }

  async saveTheme(newTheme: ThemeType) {
    await this.themeStateService.setSelectedTheme(newTheme);
  }

  async updateAnimations(enableAnimations: boolean) {
    await this.animationControlService.setEnableRoutingAnimation(enableAnimations);
  }

  async updateCompactMode(enableCompactMode: boolean) {
    await this.compactModeService.setEnabled(enableCompactMode);
  }

  async updateWidth(width: PopupWidthOption) {
    await this.popupWidthService.setWidth(width);
  }
}